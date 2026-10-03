#!/usr/bin/env node
// HTTP request matrix for roadmap W01/W02 against a running site.
//
//   npm run dev                       # in another terminal (local Worker + assets)
//   npm run check                     # defaults to http://127.0.0.1:8787
//   npm run check -- https://labthrift.com
//
// Read-only: only GET and HEAD. Against production each run adds a few
// "bot" page views to the aggregate metrics, which is expected.
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = (process.argv[2] || "http://127.0.0.1:8787").replace(/\/$/, "");
const UA = "labthrift-site-check/1 (bot)";

let failures = 0;
let passes = 0;
function check(ok, label, detail = "") {
  if (ok) passes++;
  else {
    failures++;
    console.log(`FAIL ${label}${detail ? ` — ${detail}` : ""}`);
  }
}

async function req(p, { method = "GET", accept } = {}) {
  const headers = { "user-agent": UA };
  if (accept) headers.accept = accept;
  const res = await fetch(BASE + p, { method, headers, redirect: "manual" });
  const body = method === "HEAD" ? "" : await res.text();
  return { res, body, type: res.headers.get("content-type") || "" };
}

const md = (t) => t.startsWith("text/markdown");
const html = (t) => t.startsWith("text/html");

// W01 public pages and source guides
const guides = JSON.parse(await readFile(path.join(ROOT, "tests/source-guides.json"), "utf8"));
for (const p of ["/", "/about", "/guides/", ...guides.available.map((g) => `/guides/${g}`)]) {
  const { res, type } = await req(p);
  check(res.status === 200 && html(type), `GET ${p}`, `${res.status} ${type}`);
  const head = await req(p, { method: "HEAD" });
  check(head.res.status === 200, `HEAD ${p}`, String(head.res.status));
}
for (const g of guides.pending) {
  const { res } = await req(`/guides/${g}`);
  check(res.status === 404, `/guides/${g} still pending (C01)`, `now ${res.status}: update tests/source-guides.json`);
}

// W01 Accept matrix
const matrix = [
  ["text/markdown", true],
  ["text/markdown, text/html;q=0.9", true],
  ["text/html, text/markdown", false],
  ["text/markdown;q=0.5, text/html", false],
  ["text/markdown;q=0", false],
  ["*/*", false],
];
for (const [accept, wantMd] of matrix) {
  const { res, type } = await req("/guides/first-ssh", { accept });
  check(md(type) === wantMd, `Accept "${accept}"`, type);
  check(/accept/i.test(res.headers.get("vary") || ""), `Vary on "${accept}"`);
}
const twin = await readFile(path.join(ROOT, "md/guides/first-ssh.md"));
const neg = await req("/guides/first-ssh", { accept: "text/markdown" });
check(neg.body === twin.toString("utf8"), "negotiated Markdown matches md/guides/first-ssh.md");
const negHead = await req("/guides/first-ssh", { method: "HEAD", accept: "text/markdown" });
check(
  negHead.res.headers.get("content-length") === String(twin.byteLength),
  "HEAD Markdown content-length",
  `${negHead.res.headers.get("content-length")} vs ${twin.byteLength}`
);
const fallback = await req("/guides/add-local-dns-name", { accept: "text/markdown" });
check(fallback.res.status === 200 && html(fallback.type), "missing twin falls back to HTML", fallback.type);
for (const p of ["/md", "/md/", "/md/guides/first-ssh"]) {
  const { res, type } = await req(p);
  check(res.status === 200 && md(type), `direct ${p}`, `${res.status} ${type}`);
}
for (const p of ["/no-such-page", "/md/guides/no-such-guide"]) {
  const { res, type } = await req(p);
  check(res.status === 404 && html(type), `unknown ${p}`, `${res.status} ${type}`);
}

// W02 publication boundaries: nothing outside the public tree is served.
const ignore = (await readFile(path.join(ROOT, ".assetsignore"), "utf8"))
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"));
const privateProbes = new Set([
  "/docs/design/README.md",
  "/migrations/0001_pageviews.sql",
  "/worker/index.js",
  "/package.json",
  "/package-lock.json",
  "/wrangler.jsonc",
  "/README.md",
  "/_headers",
  "/.assetsignore",
  "/.gitignore",
  "/.git/config",
  "/.git/HEAD",
  "/.env",
  "/.dev.vars",
  "/node_modules/wrangler/package.json",
  "/research/mini-pcs.md",
  "/tests/worker.test.mjs",
  "/scripts/check-site.mjs",
  "/md/README.md",
  "/guides/_index-nas.html",
  "/assets/archive-old-mark/mark.png",
]);
for (const entry of ignore) {
  if (!entry.includes("*")) privateProbes.add(`/${entry.replace(/^\//, "")}`);
}
for (const p of privateProbes) {
  const { res } = await req(p);
  check(res.status === 404, `private ${p} not served`, String(res.status));
}
// Every top-level public file in the checkout should be reachable, so the
// probe list above is the only thing hidden.
for (const name of await readdir(ROOT)) {
  if (ignore.includes(name) || name.startsWith(".")) continue;
  if (!/\.(html|txt|xml|json|yaml|css|js|webmanifest)$/.test(name)) continue;
  const p = name === "index.html" ? "/" : `/${name.replace(/\.html$/, "")}`;
  const { res } = await req(p);
  check(res.status === 200, `public /${name}`, String(res.status));
}

// W02 discovery and headers
const home = await req("/");
for (const rel of ["api-catalog", "service-desc", "service-doc", "describedby"]) {
  check((home.res.headers.get("link") || "").includes(`rel="${rel}"`), `homepage Link rel=${rel}`);
}
for (const h of ["x-content-type-options", "referrer-policy", "permissions-policy", "strict-transport-security", "cache-control"]) {
  check(home.res.headers.has(h), `homepage ${h}`);
}
const isPreview = new URL(BASE).hostname.endsWith("workers.dev");
check(
  (home.res.headers.get("x-robots-tag") === "noindex, nofollow") === isPreview,
  isPreview ? "workers.dev is noindexed" : "custom domain is indexable",
  String(home.res.headers.get("x-robots-tag"))
);
const catalog = await req("/.well-known/api-catalog");
check(catalog.res.status === 200 && catalog.type.startsWith("application/linkset+json"), "api-catalog media type", catalog.type);
check((await req("/openapi.yaml")).type.startsWith("application/yaml"), "openapi.yaml media type");
for (const p of ["/llms.txt", "/robots.txt", "/sitemap.xml"]) {
  check((await req(p)).res.status === 200, `GET ${p}`);
}
const sitemap = (await req("/sitemap.xml")).body;
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
let missing = 0;
for (const p of locs) {
  const { res } = await req(p, { method: "HEAD" });
  if (res.status !== 200) {
    missing++;
    console.log(`  sitemap ${p} -> ${res.status}`);
  }
}
check(locs.length > 300 && missing === 0, `sitemap pages resolve (${locs.length})`, `${missing} missing`);

// W02 app links keep their product labels
const page = (await req("/guides/first-ssh")).body;
check(/href="https:\/\/app\.labthrift\.com[^"]*"[^>]*>\s*(App|[^<]*ByteRush)/.test(page), "ByteRush app link present");
check(/href="https:\/\/plan\.labthrift\.com[^"]*"[^>]*>\s*(Plan|Lab plan)/.test(page), "Plan link present");
check(!/labthrift\.com\/runs|runs\.labthrift\.com/.test(page), "no Runs links");

console.log(`${BASE}: ${passes} passed, ${failures} failed`);
process.exit(failures ? 1 : 0);
