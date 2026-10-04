// Contract tests for worker/index.js (roadmap W01–W03).
// Run with `npm test`. Uses an in-memory ASSETS binding backed by the
// checkout and a fake D1 binding; no network or Cloudflare account needed.
import { test, mock } from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import worker from "../worker/index.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/130 Safari/537.36";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".json": "application/json",
  ".yaml": "application/yaml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".css": "text/css",
  ".js": "text/javascript",
};

async function exists(file) {
  try {
    return (await stat(file)).isFile();
  } catch {
    return false;
  }
}

/** Minimal stand-in for the static assets binding (html_handling: auto-trailing-slash, 404-page). */
const ASSETS = {
  async fetch(req) {
    const { pathname } = new URL(req.url);
    const rel = decodeURIComponent(pathname).replace(/^\/+/, "");
    const candidates = rel === "" ? ["index.html"] : rel.endsWith("/") ? [`${rel}index.html`] : [rel, `${rel}.html`];
    for (const c of candidates) {
      const file = path.join(ROOT, c);
      if (file.startsWith(ROOT + path.sep) && (await exists(file))) {
        const body = await readFile(file);
        return new Response(req.method === "HEAD" ? null : body, {
          status: 200,
          headers: { "content-type": TYPES[path.extname(file)] || "application/octet-stream" },
        });
      }
    }
    const body = await readFile(path.join(ROOT, "404.html"));
    return new Response(req.method === "HEAD" ? null : body, {
      status: 404,
      headers: { "content-type": TYPES[".html"] },
    });
  },
};

function fakeD1({ fail = false } = {}) {
  const writes = [];
  return {
    writes,
    prepare(sql) {
      return {
        bind(...args) {
          return {
            async run() {
              if (fail) throw new Error("D1 unavailable");
              writes.push({ sql, args });
              return { success: true };
            },
          };
        },
      };
    },
  };
}

async function call(pathname, { method = "GET", accept, ua = CHROME, host = "labthrift.com", cf, metrics } = {}) {
  const headers = new Headers();
  if (accept != null) headers.set("accept", accept);
  if (ua != null) headers.set("user-agent", ua);
  const req = new Request(`https://${host}${pathname}`, { method, headers });
  if (cf) Object.defineProperty(req, "cf", { value: cf });
  const env = { ASSETS, METRICS: metrics ?? fakeD1() };
  const pending = [];
  const res = await worker.fetch(req, env, { waitUntil: (p) => pending.push(p) });
  await Promise.all(pending);
  return { res, env };
}

const isHtml = (res) => res.headers.get("content-type").startsWith("text/html");
const isMd = (res) => res.headers.get("content-type").startsWith("text/markdown");

// ---------------------------------------------------------------- W01 serving

test("W01 public pages serve HTML with cache and security headers", async () => {
  for (const p of ["/", "/about", "/guides/", "/guides/first-ssh"]) {
    const { res } = await call(p);
    assert.equal(res.status, 200, p);
    assert.ok(isHtml(res), p);
    assert.equal(res.headers.get("cache-control"), "public, max-age=300, stale-while-revalidate=86400", p);
    assert.equal(res.headers.get("x-content-type-options"), "nosniff");
    assert.equal(res.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
    assert.match(res.headers.get("strict-transport-security"), /max-age=/);
    assert.match(res.headers.get("permissions-policy"), /camera=\(\)/);
    assert.match(res.headers.get("vary"), /Accept/);
  }
});

test("W01 HEAD on a page returns headers without a body", async () => {
  const { res } = await call("/guides/first-ssh", { method: "HEAD" });
  assert.equal(res.status, 200);
  assert.ok(isHtml(res));
  assert.equal(await res.text(), "");
});

test("W01 Accept matrix negotiates Markdown only when strictly preferred", async () => {
  const cases = [
    ["text/markdown", true],
    ["text/x-markdown", true],
    ["Text/Markdown", true],
    ["text/markdown, text/html;q=0.9", true],
    ["text/html;q=0.5, text/markdown;q=0.6", true],
    ["text/html, text/markdown", false], // tie keeps HTML
    ["text/markdown;q=1, text/html;q=1", false],
    ["text/markdown;q=0.5, text/html", false],
    ["text/markdown;q=0", false],
    ["*/*", false],
    ["text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", false],
    ["", false],
  ];
  for (const [accept, md] of cases) {
    const { res } = await call("/guides/first-ssh", { accept });
    assert.equal(res.status, 200, accept);
    assert.equal(isMd(res), md, `Accept: ${accept}`);
    assert.match(res.headers.get("vary"), /Accept/, accept);
  }
});

test("W01 negotiated Markdown matches the twin and carries token estimate", async () => {
  const twin = await readFile(path.join(ROOT, "md/guides/first-ssh.md"), "utf8");
  const { res } = await call("/guides/first-ssh", { accept: "text/markdown" });
  assert.equal(await res.text(), twin);
  assert.equal(res.headers.get("x-markdown-tokens"), String(Math.ceil(twin.length / 4)));
  assert.equal(res.headers.get("cache-control"), "public, max-age=3600, stale-while-revalidate=86400");
});

test("W01 HEAD for negotiated Markdown has no body and the twin's byte length", async () => {
  const twin = await readFile(path.join(ROOT, "md/guides/first-ssh.md"));
  const { res } = await call("/guides/first-ssh", { method: "HEAD", accept: "text/markdown" });
  assert.equal(res.status, 200);
  assert.ok(isMd(res));
  assert.equal(await res.text(), "");
  assert.equal(res.headers.get("content-length"), String(twin.byteLength));
  assert.notEqual(res.headers.get("x-markdown-tokens"), "1");
});

test("W01 home, about and guide index map to their Markdown twins", async () => {
  for (const [p, file] of [
    ["/", "md/home.md"],
    ["/about", "md/about.md"],
    ["/guides/", "md/guides/index.md"],
  ]) {
    const { res } = await call(p, { accept: "text/markdown" });
    assert.ok(isMd(res), p);
    assert.equal(await res.text(), await readFile(path.join(ROOT, file), "utf8"), p);
  }
});

test("W01 a page without a twin falls back to HTML", async () => {
  const { res } = await call("/guides/add-local-dns-name", { accept: "text/markdown" });
  assert.equal(res.status, 200);
  assert.ok(isHtml(res));
});

test("W01 direct /md routes serve Markdown", async () => {
  for (const p of ["/md", "/md/", "/md/guides/first-ssh", "/md/guides/first-ssh.md"]) {
    const { res } = await call(p);
    assert.equal(res.status, 200, p);
    assert.ok(isMd(res), p);
    assert.ok(Number(res.headers.get("x-markdown-tokens")) > 1, p);
  }
  const head = (await call("/md/guides/first-ssh", { method: "HEAD" })).res;
  assert.ok(Number(head.headers.get("x-markdown-tokens")) > 1, "HEAD token estimate");
});

test("W01 unknown pages return the HTML 404 page, including under /md", async () => {
  for (const p of ["/no-such-page", "/guides/no-such-guide", "/md/guides/no-such-guide"]) {
    for (const accept of [undefined, "text/markdown"]) {
      const { res } = await call(p, { accept });
      assert.equal(res.status, 404, `${p} ${accept}`);
      assert.ok(isHtml(res), `${p} ${accept} should keep the 404 page's HTML type`);
    }
  }
});

test("W01 project source guides resolve (Immich and Prism pending C01)", async () => {
  const guides = JSON.parse(await readFile(path.join(ROOT, "tests/source-guides.json"), "utf8"));
  for (const g of guides.available) {
    const { res } = await call(`/guides/${g}`);
    assert.equal(res.status, 200, g);
  }
  for (const g of guides.pending) {
    const { res } = await call(`/guides/${g}`);
    assert.equal(res.status, 404, `${g} now resolves: move it to "available" and close C01`);
  }
});

// ------------------------------------------------- W02 boundaries, discovery

test("W02 docs, migrations and unwanted routes return 404", async () => {
  for (const p of [
    "/docs",
    "/docs/design/ADR.md",
    "/migrations/0001_pageviews.sql",
    "/security.txt",
    "/.well-known/security.txt",
    "/wp-admin/",
    "/wp-login.php",
    "/xmlrpc.php",
  ]) {
    const { res } = await call(p);
    assert.equal(res.status, 404, p);
  }
});

test("W02 workers.dev hosts are noindexed and the custom domain is not", async () => {
  const preview = (await call("/", { host: "labthrift.example.workers.dev" })).res;
  assert.equal(preview.headers.get("x-robots-tag"), "noindex, nofollow");
  const live = (await call("/")).res;
  assert.equal(live.headers.get("x-robots-tag"), null);
});

test("W02 homepage advertises discovery Link headers", async () => {
  for (const accept of [undefined, "text/markdown"]) {
    const link = (await call("/", { accept })).res.headers.get("link");
    for (const rel of ["api-catalog", "service-desc", "service-doc", "describedby"]) {
      assert.match(link, new RegExp(`rel="${rel}"`), `${rel} ${accept}`);
    }
  }
  assert.equal((await call("/about")).res.headers.get("link"), null);
});

test("W02 discovery documents have the right media types", async () => {
  const catalog = (await call("/.well-known/api-catalog")).res;
  assert.equal(catalog.status, 200);
  assert.match(catalog.headers.get("content-type"), /^application\/linkset\+json; profile="https:\/\/www\.rfc-editor\.org\/info\/rfc9727"/);
  assert.match(catalog.headers.get("link"), /rel="api-catalog"/);
  JSON.parse(await catalog.text());
  assert.match((await call("/openapi.yaml")).res.headers.get("content-type"), /^application\/yaml/);
  for (const p of ["/llms.txt", "/robots.txt", "/sitemap.xml"]) {
    assert.equal((await call(p)).res.status, 200, p);
  }
});

test("W02 sitemap and llms.txt only list pages that exist", async () => {
  const sitemap = await readFile(path.join(ROOT, "sitemap.xml"), "utf8");
  const llms = await readFile(path.join(ROOT, "llms.txt"), "utf8");
  const urls = new Set([
    ...[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]),
    ...[...llms.matchAll(/\((https:\/\/labthrift\.com[^)\s]*)\)/g)].map((m) => m[1]),
  ]);
  assert.ok(urls.size > 300);
  const missing = [];
  for (const u of urls) {
    const { res } = await call(new URL(u).pathname);
    if (res.status !== 200) missing.push(u);
  }
  assert.deepEqual(missing, []);
});

test("W02 publishing exclusions cover private files", async () => {
  const ignore = (await readFile(path.join(ROOT, ".assetsignore"), "utf8")).split("\n").map((l) => l.trim());
  for (const entry of [
    "node_modules",
    "package.json",
    "package-lock.json",
    "wrangler.jsonc",
    "README.md",
    "research",
    ".wrangler",
    "worker",
    "_headers",
    "scripts",
    "tests",
    "migrations",
    "docs",
    ".git",
    ".env",
    ".dev.vars",
  ]) {
    assert.ok(ignore.includes(entry), `.assetsignore should list ${entry}`);
  }
});

test("W02 the only bindings are static assets and the metrics database", async () => {
  const raw = await readFile(path.join(ROOT, "wrangler.jsonc"), "utf8");
  const config = JSON.parse(raw.replace(/^\s*\/\/.*$/gm, ""));
  assert.equal(config.assets.binding, "ASSETS");
  assert.deepEqual(config.d1_databases.map((d) => d.binding), ["METRICS"]);
  for (const key of ["kv_namespaces", "r2_buckets", "services", "durable_objects", "queues"]) {
    assert.equal(config[key], undefined, key);
  }
});

// ------------------------------------------------------------ W03 metrics

test("W03 an eligible page view increments one day/path/kind bucket", async () => {
  const metrics = fakeD1();
  await call("/guides/first-ssh", { metrics });
  assert.equal(metrics.writes.length, 1);
  const [{ sql, args }] = metrics.writes;
  assert.match(sql, /INSERT INTO pageview_daily \(day, path, kind, count\)/);
  assert.match(sql, /ON CONFLICT\(day, path, kind\) DO UPDATE SET count = count \+ 1/);
  assert.equal(args.length, 3, "only day, path and kind are stored");
  assert.match(args[0], /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual(args.slice(1), ["/guides/first-ssh", "human"]);
});

test("W03 days are bucketed in UTC", async () => {
  mock.timers.enable({ apis: ["Date"], now: Date.parse("2026-10-03T23:30:00-07:00") });
  try {
    const metrics = fakeD1();
    await call("/", { metrics });
    assert.equal(metrics.writes[0].args[0], "2026-10-04");
  } finally {
    mock.timers.reset();
  }
});

test("W03 paths are normalized and capped", async () => {
  const cases = [
    ["/", "/"],
    ["/guides/", "/guides"],
    ["/guides/first-ssh?utm_source=x#top", "/guides/first-ssh"],
  ];
  for (const [p, bucket] of cases) {
    const metrics = fakeD1();
    await call(p, { metrics });
    assert.equal(metrics.writes[0]?.args[1], bucket, p);
  }
  // Exercise the length cap on a served page through a stub asset.
  const long = "/x".repeat(100);
  const metrics = fakeD1();
  const env = { ASSETS: { fetch: async () => new Response("ok", { status: 200 }) }, METRICS: metrics };
  await worker.fetch(new Request(`https://labthrift.com${long}`, { headers: { "user-agent": CHROME } }), env, {
    waitUntil: () => {},
  });
  await new Promise((r) => setImmediate(r));
  assert.equal(metrics.writes[0].args[1].length, 120);
});

test("W03 only successful GET/HEAD page requests are counted", async () => {
  const counted = async (p, opts = {}) => {
    const metrics = fakeD1();
    await call(p, { ...opts, metrics });
    return metrics.writes.length;
  };
  assert.equal(await counted("/about"), 1, "GET");
  assert.equal(await counted("/about", { method: "HEAD" }), 1, "HEAD");
  assert.equal(await counted("/about", { accept: "text/markdown" }), 1, "negotiated Markdown");
  assert.equal(await counted("/about", { method: "POST" }), 0, "POST");
  assert.equal(await counted("/no-such-page"), 0, "404");
  assert.equal(await counted("/styles.css"), 0, "asset");
  assert.equal(await counted("/assets/favicon.svg"), 0, "asset");
  assert.equal(await counted("/robots.txt"), 0, "discovery file");
  assert.equal(await counted("/md/guides/first-ssh"), 0, "direct Markdown");
  assert.equal(await counted("/docs/design/ADR.md"), 0, "blocked route");
});

test("W03 redirects are not counted, 304 revalidations are", async () => {
  for (const [status, expected] of [
    [307, 0],
    [308, 0],
    [301, 0],
    [304, 1],
    [500, 0],
  ]) {
    const metrics = fakeD1();
    const env = { ASSETS: { fetch: async () => new Response(null, { status }) }, METRICS: metrics };
    await worker.fetch(new Request("https://labthrift.com/guides/first-ssh/", { headers: { "user-agent": CHROME } }), env, {
      waitUntil: () => {},
    });
    await new Promise((r) => setImmediate(r));
    assert.equal(metrics.writes.length, expected, `status ${status}`);
  }
});

test("W03 human/bot classification is heuristic and UA-based", async () => {
  const kind = async (ua, cf) => {
    const metrics = fakeD1();
    await call("/about", { ua, cf, metrics });
    return metrics.writes[0].args[2];
  };
  assert.equal(await kind(CHROME), "human");
  assert.equal(await kind("Mozilla/5.0 (compatible; GPTBot/1.2)"), "bot");
  assert.equal(await kind("Mozilla/5.0 (compatible; ClaudeBot/1.0)"), "bot");
  assert.equal(await kind("Mozilla/5.0 (compatible; Googlebot/2.1)"), "bot");
  assert.equal(await kind("curl/8.5.0"), "bot");
  assert.equal(await kind(null), "bot", "missing UA");
  assert.equal(await kind(CHROME, { botManagement: { verifiedBot: true } }), "bot");
  assert.equal(await kind(CHROME, { botManagement: { score: 10 } }), "bot");
  assert.equal(await kind(CHROME, { botManagement: { score: 90 } }), "human");
});

test("W03 known AI crawlers get a response header but no stored UA", async () => {
  const metrics = fakeD1();
  const log = mock.method(console, "log", () => {});
  try {
    const { res } = await call("/about", { ua: "GPTBot/1.2", metrics });
    assert.equal(res.headers.get("x-labthrift-bot"), "GPTBot");
    assert.ok(!JSON.stringify(metrics.writes).includes("GPTBot/1.2"));
    const logged = JSON.parse(log.mock.calls[0].arguments[0]);
    assert.equal(logged.event, "ai_bot_hit");
    assert.equal(logged.ua, undefined, "raw UA is not logged");
  } finally {
    log.mock.restore();
  }
});

test("W03 a failing metrics write does not break page serving", async () => {
  for (const accept of [undefined, "text/markdown"]) {
    const { res } = await call("/guides/first-ssh", { accept, metrics: fakeD1({ fail: true }) });
    assert.equal(res.status, 200, accept);
    assert.ok((await res.text()).length > 0);
  }
  // Without ctx.waitUntil the Worker awaits the write itself; it must still swallow the error.
  const env = { ASSETS, METRICS: fakeD1({ fail: true }) };
  const res = await worker.fetch(new Request("https://labthrift.com/about", { headers: { "user-agent": CHROME } }), env, {});
  assert.equal(res.status, 200);
  // And a missing binding is tolerated.
  const bare = await worker.fetch(new Request("https://labthrift.com/about"), { ASSETS }, {});
  assert.equal(bare.status, 200);
});

// ------------------------------------------------------------ index counts

test("guide index counts and the Markdown index match the guide pages", async () => {
  const { syncIndex } = await import("../scripts/sync-index.mjs");
  const { n, stale } = await syncIndex({ check: true });
  assert.ok(n > 300);
  assert.deepEqual(stale, [], "run `npm run sync-index` to refresh");
});
