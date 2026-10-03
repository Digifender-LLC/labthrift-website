# Deployed source recovery — October 3, 2026

Before adding portfolio links, the repository was compared with the active Cloudflare deployment `32daaa2b-f74b-4987-8122-f3683b374bb4`.

The locally bundled Worker already matched the deployed Worker byte for byte (13,915 bytes; SHA-256 `534588f1cff9e32a5f4b7b3bd8a4408c9bf19f50f73d0125f3e506aab1d031ed`). The known public asset audit covered 767 paths. `md/README.md` is deliberately excluded by `.assetsignore` and returned 404; the other 766 returned the expected status. After normalizing CRLF and removing only Cloudflare-injected challenge/beacon markup, every served file matched source except the homepage.

This recovery restores the deployed homepage's “Start here, then keep the habit” section, topic links, structured data and inline styles. It does not introduce new public behavior. The source identity of the original edit remains unknown; the deployed response is the recovery authority. No Cloudflare challenge, honeypot or request-specific data was copied into source.

Cloudflare readback matched the existing D1 binding, compatibility date, asset behavior and response-header configuration. Evidence is in the oversight task's `outputs/labthrift-source-recovery-2026-10-03/`, including the deployed bundle, public asset inventory and raw/normalized hashes.
