# Labthrift website — Business Requirements Document

> Baseline: 2026-10-03. Product: Labthrift website. Repository: `zemdregon/labthrift`. Source-grounded design baseline; deployment and acceptance evidence is tracked separately in [release status](release-status.md).

## Purpose and business role
Labthrift is the editorial entry point for building a useful home lab with modest equipment. It helps readers choose a first project, understand tradeoffs and follow practical guides. The website remains the source of long-form reference content after Runs is absorbed into ByteRush.

## Business requirements
| ID | Requirement | Acceptance |
|---|---|---|
| BR-W1 | Preserve accessible source guides and URLs | Representative guide and source-link checks |
| BR-W2 | Explain distinct learning and notebook destinations | Correct ByteRush and Plan links |
| BR-W3 | Retire references to standalone Runs where relevant | Targeted reference audit |
| BR-W4 | Keep content available to humans and machine readers | HTML/Markdown negotiation checks |
| BR-W5 | Keep metrics aggregate and limited | D1 schema and counting-path review |

Readers should not need accounts to read guides. The maintainer needs a small static publishing workflow rather than a new application backend. The supporting Worker handles serving, headers, discovery and aggregate pageviews.

## Commercial boundaries
Existing historical notes about affiliate networks or advertising are not evidence that those programs are active. No new monetization, provider subscription, revenue forecast or public commercial claim is authorized by these design documents.

## Risks and acceptance
Changing guide slugs can break imported project provenance. Retain source-guide links during the merge and audit any corrections explicitly. Content freshness and accurate practical instructions matter separately from successful hosting. Runs retirement must leave the editorial Worker and metrics database intact. Completion requires live HTML/Markdown checks and a targeted obsolete-link audit, not merely a repository commit.
