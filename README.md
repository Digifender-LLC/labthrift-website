# Labthrift

Static editorial site for a one-person home lab.

**Live:** https://labthrift.com

## What is here

Plain-English notes for a first home lab, grouped into eight topics: getting started, faster network, small computers, file storage, better Wi-Fi, used or new, closet extras and skinny wall racks. Every guide is `guides/<slug>.html`. Most have a Markdown twin at `md/guides/<slug>.md`, served when a client prefers `text/markdown`.

The site links to two separate apps: ByteRush (`app.labthrift.com`, labelled App) for guided projects, and Labthrift Plan (`plan.labthrift.com`) for a private lab notebook. Each has its own accounts. This site has none.

## How it runs

A Cloudflare Worker (`worker/index.js`) serves the repository root as static assets. It handles Markdown negotiation, cache and security headers, discovery files, and aggregate page-view counts in the `labthrift-metrics` D1 database. `.assetsignore` keeps docs, source, tests and config out of the published assets. The site is served on `labthrift.com` and `www.labthrift.com` (see `wrangler.jsonc`) and deployed with `npm run deploy`.

## Adding or removing a guide

1. Add `guides/<slug>.html`, and `md/guides/<slug>.md` if you have a twin.
2. Add its row to the right topic in `guides/index.html`, plus `sitemap.xml` and, if it belongs there, `llms.txt`.
3. Run `npm run sync-index`. It updates every "N notes" count, the per-topic counts and the Markdown index from the pages. `npm test` fails if you forget.

## Not adopted

Earlier notes listed affiliate networks and AdSense as later ideas. The site doesn't do either today, and the About page and `llms.txt` say there is no affiliate talk. Treat them as open business decisions, not pending setup.

## Checks

```sh
npm ci
npm test                 # Worker contract tests (W01–W03), no network needed
npm run dev              # local Worker + assets on http://127.0.0.1:8787
npm run check            # request matrix against the local Worker
npm run check -- https://labthrift.com   # same matrix, read-only, against live
```

`npm test` covers the guide index counts, Markdown negotiation, HEAD lengths, 404s, blocked routes, discovery headers, publishing exclusions and the aggregate metrics contract. `npm run check` exercises the real asset pipeline: it confirms every private path returns 404 and every sitemap page resolves. Run the local migration first if you want metric rows locally: `npx wrangler d1 migrations apply labthrift-metrics --local`.

## Design documentation

[Product, requirements and architecture documents](docs/design/README.md) cover the frontend, supporting backend and the Runs-to-ByteRush consolidation. Release evidence is tracked separately from design intent.

[Universal completion roadmap](https://github.com/zemdregon/tech-dose/blob/main/docs/ROADMAP.md) sequences work across all three products, with dependencies, acceptance criteria, and coverage of all 100 numbered requirements.
