# Labthrift website — Technical Design Document

> Baseline: 2026-10-03. Product: Labthrift website. Repository: `zemdregon/labthrift`. Source-grounded design baseline; deployment and acceptance evidence is tracked separately in [release status](release-status.md).

## Technical intent
Retain the static editorial site and its edge wrapper while ByteRush becomes the sole guided-learning app. The merge should alter only surviving references whose destination is the removed Runs product, and preserve source-guide URLs used by the imported catalog.

## Representation negotiation
`prefersMarkdown` parses Accept media types and q-values. A Markdown type must have positive preference over HTML when both are present. `markdownTwinPath` maps home/about/guides and extensionless pages into `md/`. If the twin is unavailable, the Worker falls back to the requested static asset. Responses use `Vary: Accept` so caches can distinguish representations.

## Metrics and policy
Count successful GET/HEAD page requests after excluding assets, direct Markdown and known unwanted routes. Normalize pathname and bucket by UTC date and human/bot class. D1 upsert increments the count. Classification is heuristic; it must not be reported as exact human analytics. Add security/cache/discovery headers at the edge; preview workers.dev hosts are noindexed.

## Publishing safety
The current assets root is `.`. Keep internal documents/migrations inaccessible and review Wrangler exclusions before deployment; do not assume repository presence implies intended public availability. Existing source explicitly rejects `/docs` and `/migrations` requests. Do not place credentials or runtime state in published assets.

## Verification and rollback
Test canonical pages and representative guide twins, quality-weighted Accept requests, HEAD behavior, missing routes and private-path exclusions. Check configured domains independently of local preview. A scoped content correction can be rolled back by redeploying the previous site revision. Runs data deletion cannot be recovered through a website rollback and remains separately gated.
