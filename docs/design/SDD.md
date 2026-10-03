# Labthrift website — Software Design Description

> Baseline: 2026-10-03. Product: Labthrift website. Repository: `zemdregon/labthrift`. Source-grounded design baseline; deployment and acceptance evidence is tracked separately in [release status](release-status.md).

## Design decomposition
| Area | Responsibility |
|---|---|
| Root HTML and `guides/` | Editorial pages and guide navigation |
| `md/` | Markdown twins and text discovery |
| `styles.css`, `theme.js`, `assets/` | Presentation, theme and media |
| `worker/index.js` | Request classification, representation selection and serving |
| `migrations/0001_pageviews.sql` | Aggregate metrics schema |
| `openapi.yaml`, `api-catalog.json`, `llms.txt`, sitemap/robots | Discovery surfaces |
| `wrangler.jsonc` | Worker/assets/database/domain configuration |

## Request collaboration
The Worker reads URL, method, Accept and user-agent classification. It handles explicit blocked/discovery routes, then optionally maps to a Markdown twin. Successful twin responses receive Markdown headers and optional page counting. Other requests go to `ASSETS`; the response is wrapped with policy headers and aggregate counting where eligible.

## Content design
Project sourceGuide URLs retain canonical editorial destinations. The imported JSON content in ByteRush is a guided adaptation, not a new authoritative copy of every editorial page. Future edits should keep source provenance and distinguish instruction changes from UI wording changes.

## Failure and observability
Metric writes use `waitUntil` when available and failures are caught so reading continues. Crawler logs record classification and route metadata; D1 counters remain aggregate. Some blocked paths deliberately return early with 404 rather than passing to assets.

## Change scope
This documentation baseline does not introduce a CMS, rewrite the site frontend, change authentication, or create a new data store. Any link correction required by the Runs retirement should be a scoped content change with matching HTML/Markdown review.
