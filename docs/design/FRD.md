# Labthrift website — Functional Requirements Document

> Baseline: 2026-10-03. Product: Labthrift website. Repository: `zemdregon/labthrift`. Source-grounded design baseline; deployment and acceptance evidence is tracked separately in [release status](release-status.md).

## Functional behavior
| ID | Request | Result |
|---|---|---|
| FR-W1 | Ordinary page GET/HEAD | Serve static HTML with cache/security headers |
| FR-W2 | Prefer Markdown in Accept | Serve mapped Markdown twin if it exists; otherwise asset fallback |
| FR-W3 | `/md` or `/md/` | Serve Markdown index |
| FR-W4 | `/md/<path>` without extension | Map to `.md` asset |
| FR-W5 | `/.well-known/api-catalog` | Serve flat catalog with linkset media type |
| FR-W6 | Homepage | Advertise discovery Link headers |
| FR-W7 | Known crawler request | Classify for aggregate metrics/log metadata |
| FR-W8 | Eligible successful page request | Increment UTC-day/path/kind aggregate |
| FR-W9 | Docs, migrations or specified unwanted paths | Return 404 |
| FR-W10 | workers.dev response | Add noindex/nofollow header |

Markdown preference respects relative q-values for Markdown versus HTML. Negotiated responses vary on Accept. HEAD omits the Markdown body and includes its byte length. Missing twins fall back to normal static handling. Cache policy varies by page, asset and discovery document type.

## Merge-related behavior
Keep source guides for the 17 copied projects accessible. Links to the standalone Runs learning experience, if found, should target ByteRush. Plan links still identify the separate notebook. No API call from this site updates ByteRush progress or Plan records.

## Failure behavior
Aggregate metric failure is best effort and should not block page serving. Unknown pages use the configured static 404 behavior. This is not a public writable content API; OpenAPI/catalog discovery describes public content access rather than a new account or learning service.
