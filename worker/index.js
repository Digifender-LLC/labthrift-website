/**
 * Labthrift edge worker: serve static assets, set cache/security headers,
 * log AI crawler hits, negotiate text/markdown, and advertise discovery Links.
 */
const AI_BOTS = [
  [/GPTBot/i, "GPTBot"],
  [/ChatGPT-User/i, "ChatGPT-User"],
  [/OAI-SearchBot/i, "OAI-SearchBot"],
  [/ClaudeBot/i, "ClaudeBot"],
  [/Claude-User/i, "Claude-User"],
  [/Claude-SearchBot/i, "Claude-SearchBot"],
  [/anthropic-ai/i, "anthropic-ai"],
  [/PerplexityBot/i, "PerplexityBot"],
  [/Google-Extended/i, "Google-Extended"],
  [/Applebot-Extended/i, "Applebot-Extended"],
  [/Bytespider/i, "Bytespider"],
  [/CCBot/i, "CCBot"],
  [/meta-externalagent/i, "Meta-ExternalAgent"],
  [/FacebookBot/i, "FacebookBot"],
  [/Amazonbot/i, "Amazonbot"],
  [/Diffbot/i, "Diffbot"],
  [/YouBot/i, "YouBot"],
  [/cohere-ai/i, "Cohere"],
  [/AI2Bot/i, "AI2Bot"],
];

const HOMEPAGE_LINKS = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</openapi.yaml>; rel="service-desc"; type="application/yaml"',
  '</about>; rel="service-doc"; type="text/html"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
].join(", ");

function classifyBot(ua) {
  if (!ua) return null;
  for (const [re, name] of AI_BOTS) {
    if (re.test(ua)) return name;
  }
  return null;
}


/** UTC day bucket YYYY-MM-DD */
function utcDay(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

/**
 * Best-effort bot vs human. Free tier: cf.botManagement is often dummy —
 * trust verifiedBot===true when set; otherwise UA heuristics only.
 * Never persist IP or raw UA.
 */
function trafficKind(request, knownAiBot) {
  if (knownAiBot) return "bot";
  const bm = request.cf && request.cf.botManagement;
  if (bm && bm.verifiedBot === true) return "bot";
  const score = bm && typeof bm.score === "number" ? bm.score : null;
  // Bot Management scores: 1–29 likely bot. Ignore if missing/dummy-looking.
  if (score != null && score >= 1 && score <= 29) return "bot";
  const ua = request.headers.get("user-agent") || "";
  if (!ua.trim()) return "bot";
  if (
    /bot|crawl|spider|slurp|scrapy|wget|curl|python-requests|httpclient|headless|preview|monitor|uptime|pingdom|statuscake|facebookexternalhit|embedly|quora link preview|linkedinbot|twitterbot|slackbot|discordbot|telegrambot|applebot|bingbot|googlebot|yandex|baiduspider|duckduckbot|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider/i.test(
      ua
    )
  ) {
    return "bot";
  }
  return "human";
}

/** Coarse path buckets for aggregates (no query/hash, cap length). */
function normalizePagePath(pathname) {
  let p = pathname || "/";
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  if (p === "" || p === "/index.html") return "/";
  if (p.endsWith(".html")) p = p.slice(0, -5);
  if (p.length > 120) p = p.slice(0, 120);
  return p || "/";
}

function shouldCountPageview(method, pathname, status) {
  if (method !== "GET" && method !== "HEAD") return false;
  if (status != null && (status < 200 || status >= 400)) return false;
  if (isAssetPath(pathname)) return false;
  if (isMarkdownPath(pathname)) return false;
  if (pathname.startsWith("/wp-") || pathname === "/xmlrpc.php") return false;
  if (pathname === "/security.txt" || pathname === "/.well-known/security.txt") return false;
  return true;
}

async function bumpPageview(env, day, path, kind) {
  if (!env.METRICS) return;
  await env.METRICS.prepare(
    `INSERT INTO pageview_daily (day, path, kind, count) VALUES (?, ?, ?, 1)
     ON CONFLICT(day, path, kind) DO UPDATE SET count = count + 1`
  )
    .bind(day, path, kind)
    .run();
}


function prefersMarkdown(accept) {
  if (!accept) return false;
  let md = null;
  let html = null;
  for (const part of accept.split(",")) {
    const [rawType, ...params] = part.trim().split(";");
    const type = rawType.trim().toLowerCase();
    if (!type) continue;
    let q = 1;
    for (const p of params) {
      const [k, v] = p.trim().split("=");
      if (k === "q" && v != null && v !== "") {
        const n = Number(v);
        if (!Number.isNaN(n)) q = n;
      }
    }
    if (type === "text/markdown" || type === "text/x-markdown") {
      md = md == null ? q : Math.max(md, q);
    } else if (type === "text/html" || type === "application/xhtml+xml") {
      html = html == null ? q : Math.max(html, q);
    }
  }
  if (md == null) return false;
  if (html == null) return md > 0;
  return md > html;
}

function isAssetPath(pathname) {
  if (pathname.startsWith("/assets/")) return true;
  if (pathname === "/styles.css" || pathname === "/theme.js") return true;
  if (pathname === "/site.webmanifest") return true;
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") return true;
  if (pathname === "/llms.txt" || pathname === "/openapi.yaml") return true;
  if (pathname === "/api-catalog.json") return true;
  if (/\.(png|jpe?g|gif|svg|webp|ico|woff2?|css|js|map|xml|txt|webmanifest|yaml|yml|json)$/i.test(pathname)) {
    return true;
  }
  return false;
}

function markdownTwinPath(pathname) {
  let p = pathname;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  if (p === "" || p === "/") return "/md/home.md";
  if (p === "/about") return "/md/about.md";
  if (p === "/404") return "/md/404.md";
  if (p === "/guides") return "/md/guides/index.md";
  if (p.startsWith("/guides/")) {
    const slug = p.slice("/guides/".length);
    if (!slug || slug.includes("..")) return null;
    return `/md/guides/${slug}.md`;
  }
  if (!p.includes(".", 1) && !p.startsWith("/md")) {
    return `/md${p}.md`;
  }
  return null;
}

function estimateTokens(text) {
  return Math.max(1, Math.ceil(text.length / 4));
}

function isMarkdownPath(pathname) {
  return (
    pathname === "/md" ||
    pathname === "/md/" ||
    pathname.startsWith("/md/") ||
    pathname.endsWith(".md")
  );
}

function isHomepage(pathname) {
  return pathname === "/" || pathname === "/index.html";
}

function cacheControlFor(pathname, asMarkdown) {
  if (asMarkdown || isMarkdownPath(pathname)) {
    return "public, max-age=3600, stale-while-revalidate=86400";
  }
  if (
    pathname.startsWith("/assets/fonts/") ||
    pathname === "/assets/mark.svg" ||
    pathname === "/assets/favicon.png" ||
    pathname === "/assets/favicon.svg" ||
    pathname === "/assets/favicon-32.png" ||
    pathname === "/assets/apple-touch-icon.png" ||
    pathname === "/assets/og-1200.png" ||
    pathname === "/assets/mark.png" ||
    pathname === "/assets/mark-256.png"
  ) {
    return "public, max-age=604800, stale-while-revalidate=86400";
  }
  if (pathname === "/styles.css" || pathname === "/theme.js" || pathname === "/site.webmanifest") {
    return "public, max-age=86400, stale-while-revalidate=604800";
  }
  if (
    pathname === "/robots.txt" ||
    pathname === "/llms.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/openapi.yaml" ||
    pathname === "/api-catalog.json"
  ) {
    return "public, max-age=3600, stale-while-revalidate=86400";
  }
  if (pathname.endsWith(".html") || !pathname.includes(".")) {
    return "public, max-age=300, stale-while-revalidate=86400";
  }
  return "public, max-age=3600, stale-while-revalidate=86400";
}

function withVaryAccept(headers) {
  const existing = headers.get("vary");
  if (!existing) {
    headers.set("vary", "Accept");
    return;
  }
  const parts = existing.split(",").map((s) => s.trim().toLowerCase());
  if (!parts.includes("accept")) {
    headers.set("vary", `${existing}, Accept`);
  }
}

function applyCommonHeaders(headers, { bot, hostname, homepage }) {
  headers.set("content-signal", "ai-train=yes, search=yes, ai-input=yes");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");
  headers.set("x-content-type-options", "nosniff");
  headers.set(
    "permissions-policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );
  if (!headers.has("strict-transport-security")) {
    headers.set(
      "strict-transport-security",
      "max-age=15552000; includeSubDomains; preload"
    );
  }
  if (hostname.endsWith("workers.dev")) {
    headers.set("x-robots-tag", "noindex, nofollow");
  }
  if (bot) headers.set("x-labthrift-bot", bot);
  if (homepage) headers.set("link", HOMEPAGE_LINKS);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const ua = request.headers.get("user-agent") || "";
    const bot = classifyBot(ua);
    const accept = request.headers.get("accept") || "";
    const wantMd = prefersMarkdown(accept);

    if (bot) {
      console.log(
        JSON.stringify({
          event: "ai_bot_hit",
          bot,
          path: url.pathname,
          method: request.method,
          host: url.host,
          accept_markdown: wantMd,
        })
      );
    }

    // Intentionally no public contact / security.txt
    if (
      url.pathname === "/security.txt" ||
      url.pathname === "/.well-known/security.txt"
    ) {
      return new Response("Not found", {
        status: 404,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=3600",
          "x-content-type-options": "nosniff",
        },
      });
    }

    if (
      url.pathname.startsWith("/migrations") ||
      url.pathname.startsWith("/docs/") ||
      url.pathname === "/docs"
    ) {
      return new Response("Not found", {
        status: 404,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=3600",
          "x-content-type-options": "nosniff",
        },
      });
    }

    if (
      url.pathname.startsWith("/wp-admin") ||
      url.pathname.startsWith("/wp-login") ||
      url.pathname.startsWith("/wordpress") ||
      url.pathname === "/xmlrpc.php"
    ) {
      return new Response("Not found", {
        status: 404,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=86400",
          "x-content-type-options": "nosniff",
        },
      });
    }

    // Dotfolder well-known → uploadable flat assets
    if (url.pathname === "/.well-known/api-catalog") {
      url.pathname = "/api-catalog.json";
      request = new Request(url.toString(), request);
    }

    // Content negotiation: same URL, markdown body when Accept prefers it.
    if (
      wantMd &&
      (request.method === "GET" || request.method === "HEAD") &&
      !isAssetPath(url.pathname) &&
      !isMarkdownPath(url.pathname)
    ) {
      const twin = markdownTwinPath(url.pathname);
      if (twin) {
        const mdUrl = new URL(twin, url.origin);
        const mdRes = await env.ASSETS.fetch(new Request(mdUrl.toString(), request));
        if (mdRes.ok) {
          const body = await mdRes.text();
          const headers = new Headers();
          headers.set("content-type", "text/markdown; charset=utf-8");
          headers.set("cache-control", cacheControlFor(url.pathname, true));
          headers.set("x-markdown-tokens", String(estimateTokens(body)));
          withVaryAccept(headers);
          applyCommonHeaders(headers, {
            bot,
            hostname: url.hostname,
            homepage: isHomepage(url.pathname),
          });
          if (shouldCountPageview(request.method, url.pathname, 200)) {
            const kind = trafficKind(request, bot);
            const task = bumpPageview(env, utcDay(), normalizePagePath(url.pathname), kind).catch(() => {});
            if (ctx && typeof ctx.waitUntil === "function") ctx.waitUntil(task);
          }
          if (request.method === "HEAD") {
            headers.set("content-length", String(new TextEncoder().encode(body).length));
            return new Response(null, { status: 200, headers });
          }
          return new Response(body, { status: 200, headers });
        }
      }
    }

    let assetRequest = request;
    if (url.pathname === "/md" || url.pathname === "/md/") {
      url.pathname = "/md/index.md";
      assetRequest = new Request(url.toString(), request);
    } else if (
      url.pathname.startsWith("/md/") &&
      !url.pathname.endsWith(".md") &&
      !url.pathname.endsWith("/")
    ) {
      url.pathname = url.pathname + ".md";
      assetRequest = new Request(url.toString(), request);
    }

    const assetRes = await env.ASSETS.fetch(assetRequest);
    const headers = new Headers(assetRes.headers);
    const servedPath = new URL(assetRequest.url).pathname;
    headers.set("cache-control", cacheControlFor(servedPath, false));

    if (servedPath === "/api-catalog.json" || url.pathname === "/.well-known/api-catalog") {
      headers.set(
        "content-type",
        'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"'
      );
      // RFC 9727: HEAD/GET to api-catalog should include api-catalog Link
      headers.set("link", '</.well-known/api-catalog>; rel="api-catalog"');
    } else if (servedPath === "/openapi.yaml") {
      headers.set("content-type", "application/yaml; charset=utf-8");
    } else if (isMarkdownPath(servedPath)) {
      headers.set("content-type", "text/markdown; charset=utf-8");
      if (assetRes.ok) {
        const body = await assetRes.clone().text();
        headers.set("x-markdown-tokens", String(estimateTokens(body)));
      }
    }

    if (!isAssetPath(url.pathname) && markdownTwinPath(url.pathname)) {
      withVaryAccept(headers);
    }

    applyCommonHeaders(headers, {
      bot,
      hostname: url.hostname,
      homepage: isHomepage(url.pathname) || isHomepage(servedPath),
    });

    // Privacy aggregates: path+day+kind only. No IP/UA written.
    if (shouldCountPageview(request.method, url.pathname, assetRes.status)) {
      const kind = trafficKind(request, bot);
      const day = utcDay();
      const path = normalizePagePath(url.pathname);
      const task = bumpPageview(env, day, path, kind).catch(() => {});
      if (ctx && typeof ctx.waitUntil === "function") ctx.waitUntil(task);
      else await task;
    }

    return new Response(assetRes.body, {
      status: assetRes.status,
      statusText: assetRes.statusText,
      headers,
    });
  },
};
