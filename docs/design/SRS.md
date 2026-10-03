# Labthrift website — Software Requirements Specification

> Baseline: 2026-10-03. Product: Labthrift website. Repository: `zemdregon/labthrift`. Source-grounded design baseline; deployment and acceptance evidence is tracked separately in [release status](release-status.md).

## Requirements and checks
| ID | The website shall… | Verification |
|---|---|---|
| SR-W1 | Serve public pages without login | GET representative routes |
| SR-W2 | Preserve imported project source-guide destinations | Check catalog URLs |
| SR-W3 | Negotiate Markdown only when preferred and available | Accept header matrix |
| SR-W4 | Vary alternate page representations on Accept | Response header check |
| SR-W5 | Count eligible requests only in aggregate day/path/kind buckets | Worker and SQL review |
| SR-W6 | Exclude docs and migrations from public serving | 404 checks |
| SR-W7 | Retain app links with correct product labels | Source/reference audit |
| SR-W8 | Preserve editorial Worker/database during Runs retirement | Exact inventory check |

## Data requirements
`pageview_daily` uses primary key `(day,path,kind)` with a counter. Paths are normalized, stripped of query/hash by URL pathname handling, and capped at 120 characters. The table does not include user IDs, IP addresses, cookies or raw user-agent strings. Worker observability/logging is a separate surface; do not equate limited D1 metrics with an absence of all platform logs.

## Quality constraints
Static assets and text must remain readable with the existing responsive CSS. The Worker adds content-type, cache, nosniff, permissions/referrer policy and relevant discovery headers. No authentication or state mutation API is required for editorial reading. There is no approved availability SLA or quantitative performance target in this baseline.

## Traceability
BR-W1 → PR-W4 → FR-W1/W2 → SR-W1/W2. BR-W2/W3 → PR-W3 → integration-link audit → SR-W7/W8. BR-W4/W5 → PR-W5/W6 → FR-W5–W8 → SR-W3–W5. Publishing checks and actual live results belong in the release status record.
