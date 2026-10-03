# Labthrift website — Low-Level Design

> Baseline: 2026-10-03. Product: Labthrift website. Repository: `zemdregon/labthrift`. Source-grounded design baseline; deployment and acceptance evidence is tracked separately in [release status](release-status.md).

## Request pipeline
1. Parse URL, method, user-agent and Accept; identify known AI crawler family.
2. Return explicit 404 for security.txt, internal docs/migrations and selected unwanted paths.
3. Rewrite `/.well-known/api-catalog` to the flat catalog asset.
4. For eligible Markdown-preferring GET/HEAD, fetch a mapped twin; return it if available.
5. Rewrite direct `/md` index/extensionless routes as needed and fetch static asset.
6. Apply media type, cache, discovery and security headers; schedule eligible metric upsert.

## Helper contracts
`prefersMarkdown(accept)` compares media-type preferences. `markdownTwinPath(path)` returns a public twin or null. `normalizePagePath(path)` strips trailing slash/HTML suffix, normalizes home and caps length. `trafficKind(request,knownBot)` combines configured bot indicators and UA heuristics. `shouldCountPageview(method,path,status)` excludes non-page/non-success requests.

## Storage and cache
Metrics SQL inserts `(UTC day, normalized path, kind, 1)` and increments on primary-key conflict. No per-visitor identifier is stored in this table. HTML/extensionless paths receive a 300-second max-age; Markdown and discovery generally 3600 seconds; selected fixed assets 604800 seconds. Stale-while-revalidate varies by asset class; inspect the helper when extending paths.

## Header specifics
Markdown responses declare `text/markdown`, estimated token count and Accept variation. Homepage Link headers advertise API catalog, service description, service documentation and llms text. workers.dev adds `x-robots-tag: noindex, nofollow`. HEAD negotiated responses carry content length without a body.

## Merge audit
Extract the imported sourceGuide URLs from ByteRush’s 17 graphs, compare to this site’s HTML/Markdown paths, then check live responses. Search surviving public content for `beta.labthrift.com` and Runs links. Replace only relevant learning destinations; do not erase historical technical context or relabel Plan as ByteRush.
