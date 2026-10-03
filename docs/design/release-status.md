# Release and evidence status

Baseline authored 2026-10-03. These design documents are source-grounded records and requirements, not proof of deployment.

- ByteRush Runs merge: deployed and live feed/sync verified. Runs D1, checkout and local state removed; Worker/domain/DNS already absent. GitHub deletion is awaiting the CLI delete_repo authorization.
- Plan: independent existing notebook; no runtime change required by the merge. Current design includes a known read/check/update save race; an atomic CAS improvement is proposed separately.
- Main website: independent editorial site and metrics backend. Source guide and surviving link checks remain part of the merge release gate.
- No old Runs user data is imported. Its permanent deletion occurs only after replacement deployment and live sync acceptance.

## Evidence log

See ByteRush’s `docs/design/release-status.md` for the authoritative merge release receipt. Product-specific source baselines are identified in each repository’s documents. Open questions: no formal SLA, quantitative adoption target, or future cross-product SSO design has been approved.

## Preservation check — 2026-10-03

Live Labthrift HTML and first-SSH Markdown returned 200. Plan HTML returned 200 and its unauthenticated lab API returned 401. Local previews on ports 8801 and 8803 returned 200. This repository received documentation changes only; its runtime was not redeployed. The Runs-to-ByteRush retirement did not modify this product’s database, account records or domain.

## Portfolio link release — October 3, 2026

See [deployed-source recovery](source-recovery-2026-10-03.md) for the verified baseline. The policy destinations are Digifender's LabThrift collection and direct Terms, Privacy and Cookies routes. The links explicitly say **Draft**; this release does not adopt policy text or establish LLC formation. Legal contact is `legal@digifender.com`, and “A Digifender product” links to the company homepage.

The shared footer is present in all 400 public HTML documents (the 399 sitemap pages plus the 404 page), and all 346 served Markdown mirrors carry equivalent links. Existing article and homepage content is preserved. The current product spelling, **Labthrift**, is retained consistently with the product design baseline; no branding rename is part of this release. Checkout metadata and local environment files are now explicitly excluded from static publishing.

Local verification: desktop and 390px phone layouts show all six link destinations without horizontal overflow. Every HTML/Markdown edit preserves the recovered baseline content. The Worker bundle remains byte-identical to the live baseline. Local missing/internal routes return 404.

Release state: **deployed and verified live**. Cloudflare Worker version `7f431ced-650a-4fa8-946f-67996c97a1fa`. All 766 served assets (plus the expected README 404) matched the reviewed source after line-ending and Cloudflare-injection normalization. Desktop and 390px live checks passed exact destinations, draft labels and layout. Returning-browser verification caught stale CSS; versioned stylesheet URLs now refresh the new footer without clearing visitor storage. The Worker code, bindings, runtime, routing and headers were read back and remain equivalent to the prior deployment. Full evidence is in the oversight task’s `outputs/labthrift-source-recovery-2026-10-03/`.

## Website verification — October 3, 2026 (roadmap W01–W03)

Repeatable checks now live in the repository: `npm test` (25 Worker contract tests) and `npm run check` (122-request HTTP matrix against a running site). Both pass against a local `wrangler dev` with the real asset configuration.

Three Worker defects were found and fixed in the same change:

- A negotiated Markdown `HEAD` returned `Content-Length: 0` and a token estimate of 1, because the twin was fetched with the `HEAD` method. It now reports the twin's byte length.
- A missing `/md/...` path served the HTML 404 page labelled `text/markdown`. It now keeps the page's HTML type.
- Trailing-slash and `.html` redirects (307) were counted as page views, so one visit through a redirect counted twice. Only 2xx and 304 responses are counted now.

Local results: every private path (docs, migrations, Worker source, package files, Wrangler config, research notes, tests, scripts, `.git`, environment files, archived assets) returns 404; all 399 sitemap pages and all `llms.txt` links resolve; 13 of 15 project source guides resolve and Immich and Prism remain 404 pending roadmap item C01; ByteRush (`app.labthrift.com`, labelled App) and Plan (`plan.labthrift.com`, labelled Plan / Lab plan) links are present and no Runs links remain. A metrics write against a missing table left page serving unaffected.

Not yet verified: the live run (`npm run check -- https://labthrift.com`) and the redeploy carrying the three fixes. The cloud environment used for this pass cannot reach labthrift.com.
