# Labthrift website — Architecture Decision Records

> Baseline: 2026-10-03. Product: Labthrift website. Repository: `zemdregon/labthrift`. Source-grounded design baseline; deployment and acceptance evidence is tracked separately in [release status](release-status.md).

## ADR-W001 — Preserve the editorial source of truth
**Status:** accepted. **Decision:** keep Labthrift guides and canonical source links while ByteRush hosts guided adaptations. **Alternative:** move all editorial content into the learning feed. **Consequences:** distinct reading experiences and stable provenance; edits need link/content consistency checks.

## ADR-W002 — Small Worker wrapper over static assets
**Status:** existing architecture retained. **Decision:** keep serving, headers, negotiation and aggregates at the edge. **Alternative:** add a server-rendered CMS or learner backend. **Consequences:** small operational footprint; repository publication rules remain important.

## ADR-W003 — HTML and Markdown representations
**Status:** existing architecture retained. **Decision:** negotiate Markdown twins by Accept with `Vary`, and expose direct Markdown/discovery paths. **Alternative:** separate unrelated text site. **Consequences:** machine readers can retrieve text at familiar URLs; twins must stay accurate and missing twins fall back.

## ADR-W004 — Aggregate page metrics
**Status:** existing architecture retained. **Decision:** store day/path/kind counts, not visitor profiles. **Alternative:** per-user tracking. **Consequences:** privacy-limited database schema, heuristic human/bot classification and limited funnel analysis. Platform logs are a separate consideration.

## ADR-W005 — No beta redirect after Runs retirement
**Status:** accepted policy; execution gated by ByteRush acceptance. **Decision:** remove the old beta DNS/service completely and correct surviving links to ByteRush. **Alternative:** keep a redirect Worker. **Consequences:** old bookmarked beta URLs stop serving. Main website and Plan routes are unaffected; exact resource verification is mandatory before deletion.
