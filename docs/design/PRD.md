# Labthrift website — Product Requirements Document

> Baseline: 2026-10-03. Product: Labthrift website. Repository: `zemdregon/labthrift`. Source-grounded design baseline; deployment and acceptance evidence is tracked separately in [release status](release-status.md).

## Audience and scope
The site serves beginners reusing old hardware and readers planning practical improvements: backups, file sharing, SSH, switching, PoE, storage and small lab layouts. It provides public guides rather than user-owned lab records or a learning progress service.

## Product requirements
| ID | Requirement |
|---|---|
| PR-W1 | Read guides without authentication |
| PR-W2 | Navigate from editorial content to appropriate next steps |
| PR-W3 | Offer ByteRush for guided learning and Plan for notebook management |
| PR-W4 | Preserve the guide destinations referenced by all imported projects |
| PR-W5 | Serve Markdown equivalents where available |
| PR-W6 | Provide discoverable catalog, sitemap and machine-readable descriptions |
| PR-W7 | Retain responsive presentation and honest content claims |

## Journeys
A visitor reads a first-homelab guide, follows a ByteRush link to guided practice, then optionally uses Plan to record their equipment. A machine reader requests Markdown at an editorial URL and receives its matching text representation where available. Neither journey creates a shared account implicitly.

## Runs merge
Runs walkthrough bodies move into ByteRush while sourceGuide links continue to reference this site. Existing references to the old beta product should point to ByteRush where the intent is learning. Preserve historical documentation as historical context, and do not rewrite Plan instructions as ByteRush account instructions. The selected retirement policy leaves no redirect service at the old beta host.

## Out of scope and acceptance
No learner database, passkey sign-in, XP, notebook editing or content CMS is added to the main site. Check HTML pages, Markdown negotiation, discovery links, missing-page handling and surviving app destinations before marking website preservation verified.
