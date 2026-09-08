# Lab planner (plan.labthrift.com) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship one privacy-first Labthrift product on `plan.labthrift.com` that combines closet inventory, first-weekend progress, rack/port map, house address book, and a buy-vs-skip BOM — with username + passkey only (no email, no PII).

**Architecture:** Separate Cloudflare Worker + static UI on subdomain `plan.labthrift.com` (same CF account as labthrift.com). Auth and app data in D1; sessions in encrypted cookies (or KV only for WebAuthn challenges). Main site stays static notes; cross-links into the planner without sharing cookies across apex unless we explicitly set a parent-domain cookie later (default: **no** shared cookie with `labthrift.com`).

**Tech Stack:** Workers + Assets, D1, (optional KV for short-lived WebAuthn challenges), SimpleWebAuthn or Better Auth passkey+username with email disabled, Hono API, small client SPA or multi-page HTML matching Labthrift cream/copper voice.

## Global Constraints

- Cloudflare **Workers Free** only: ≤100k Worker req/day, **10 ms CPU**/invocation, D1 100k writes/day, no paid add-ons, no external mail/SMS/IdP.
- Auth: **username + passkey only**. No password, no email, no phone, no OAuth, no magic link.
- Store **no identifying information** beyond a chosen username and WebAuthn credential material. No real name, address, IP logging for product analytics, marketing pixels.
- Product voice: Labthrift unslop + standalone pages rules for any marketing/docs on the main site.
- HOLD leftover-box house-term rename still active on main site URLs.
- Do not invent a cute house term for the practice machine in UI copy.

---

## Product name and URL

**Working name:** Lab plan (UI: “Your lab plan”).  
**Hostname:** `plan.labthrift.com` (custom domain on the planner Worker).  
**Fallback:** `labthrift-plan.lmao.workers.dev` during build.

One logged-in workspace with five panes (same account, same D1 `lab_id`):

| Pane | Was idea | Job |
|------|----------|-----|
| Stuff I have | 1 inventory | Old PC, disks, switch, APs — what exists today |
| Weekend path | 2 checklist | First-weekend / SSH / share / Pi-hole / backup progress |
| Closet map | 3 rack/ports | Simple U sketch + switch port labels |
| House names | 4 address book | Hostname, fixed address, “what’s on the USB” notes |
| Later buys | 5 BOM | Pins to Labthrift guide slugs + skip reasons |

Heartbeat / change-log (ideas 6–7) are **out of v1**.

---

## Privacy model (hard rules)

1. **Account:** `username` (unique, case-insensitive) + one or more passkeys (`residentKey: required`). Username is a handle, not an email; reject `@`.
2. **No recovery email.** Lose the passkey + device → account is gone (or add a second passkey while logged in). Copy must say this clearly at signup.
3. **Data stored:** lab JSON blobs + checklist booleans + BOM pins. Optional free-text notes; treat as user content, not profile fields. Never ask for ISP account, street address, or full name.
4. **Telemetry:** none on the planner. No third-party analytics. Workers Observability only for ops (errors), not product funnels tied to username.
5. **Exports:** user can download their lab as JSON anytime; delete account wipes D1 rows.
6. **Main site alignment:** new/updated notes that reinforce house-network-only, local chat, no cloud account required, passkeys; About + llms.txt privacy blurb; no contact/security.txt (intentional).

Auth implementation preference: **thin custom WebAuthn (SimpleWebAuthn) + D1** so we never inherit an `email` column. Better Auth only if we can disable email entirely and use username as the sole identifier without dummy emails.

---

## Data model (D1)

```sql
-- users: no email column
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL COLLATE NOCASE UNIQUE,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE passkeys (
  id TEXT PRIMARY KEY,              -- credential id (base64url)
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  public_key BLOB NOT NULL,
  counter INTEGER NOT NULL DEFAULT 0,
  transports TEXT,                  -- JSON array or null
  created_at TEXT NOT NULL
);

CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);

-- one lab workspace per user in v1
CREATE TABLE labs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'My lab',
  inventory_json TEXT NOT NULL DEFAULT '[]',
  checklist_json TEXT NOT NULL DEFAULT '{}',
  closet_json TEXT NOT NULL DEFAULT '{}',
  hosts_json TEXT NOT NULL DEFAULT '[]',
  bom_json TEXT NOT NULL DEFAULT '[]',
  updated_at TEXT NOT NULL
);

CREATE TABLE webauthn_challenges (
  id TEXT PRIMARY KEY,
  username TEXT,
  challenge TEXT NOT NULL,
  expires_at TEXT NOT NULL
);
```

Checklist keys (v1) map to existing Labthrift guides: `start-with-what-you-have`, `what-os-to-pick`, `first-weekend`, `find-the-leftover-box`, `first-ssh`, `first-useful-service`, `first-file-share`, `first-backup`, `local-chat-on-the-pc`, etc.

BOM pin: `{ "slug": "8-port-2-5g-poe-closet", "status": "consider"|"skip"|"bought", "note": "" }`.

---

## API surface (Hono on Worker)

- `POST /auth/register/options` `{ username }` → WebAuthn creation options  
- `POST /auth/register/verify` → session cookie  
- `POST /auth/login/options` `{ username }` → auth options  
- `POST /auth/login/verify` → session cookie  
- `POST /auth/logout`  
- `POST /auth/passkeys/options` + verify (add second passkey while logged in)  
- `GET /auth/me`  
- `DELETE /auth/me` (wipe user + lab)  
- `GET/PUT /api/lab` (full workspace JSON)  
- `GET /api/lab/export` (attachment)  

Cookies: `HttpOnly; Secure; SameSite=Lax; Path=/` on `plan.labthrift.com` only.

---

## UI (v1)

- Landing: what it is, privacy bullets, Create / Sign in  
- App shell: five tabs, cream/copper Labthrift chrome, dark mode parity  
- Empty states point to main-site guides (standalone links, no “now that you…” chaining)  
- BOM tab: search/pin by slug or paste labthrift.com/guides/… URL  

---

## Main site alignment (same release train)

- `about.html`: short “Privacy” section — static site, no accounts on apex; planner is opt-in on subdomain; no email; passkeys only.  
- `llms.txt`: one line on planner + privacy stance.  
- New Getting started notes (hourly loop candidates):  
  - Passkeys on your own devices (why we don’t do email recovery)  
  - Keep house jobs off cloud accounts (ties local-chat, Pi-hole, shares)  
- Soft CTA on `first-weekend` / `start-with-what-you-have` Also row → plan.labthrift.com (optional prerequisite style).  
- Do **not** add contact mailto or security.txt.

---

## Free-tier risk controls

- Keep handlers under ~10 ms CPU: no heavy crypto beyond WebAuthn verify; JSON blobs not giant.  
- Cap inventory/hosts/BOM array lengths (e.g. 100 items).  
- Rate-limit register/login by IP in Worker memory (best-effort) + challenge expiry.  
- Static UI assets = free unlimited; only `/auth/*` and `/api/*` burn the 100k/day.

---

## File map (new repo area)

Prefer `/workspace/labthrift-plan/` (sibling) or `/workspace/labthrift/plan/` Worker project:

- `wrangler.jsonc` — Worker + D1 + assets + `plan.labthrift.com` route  
- `worker/index.js` or `src/index.ts` — Hono app  
- `src/auth/webauthn.ts` — options + verify  
- `src/db/schema.sql` + migrations  
- `public/` — UI  
- `README.md` — deploy + subdomain DNS  

Main site edits stay in `/workspace/labthrift/`.

---

## Phased delivery

### Phase A — Auth skeleton
- [ ] Scaffold Worker + D1 + empty UI on workers.dev  
- [ ] Username+passkey register/login/logout + session cookie  
- [ ] Add second passkey; delete account  
- [ ] Attach `plan.labthrift.com`  

### Phase B — Lab workspace MVP
- [ ] Stuff I have + Weekend path + Later buys (three panes)  
- [ ] GET/PUT lab + export JSON  
- [ ] Soft links from main site Also rows  

### Phase C — Closet map + House names
- [ ] Closet map editor (simple grid, not CAD)  
- [ ] Hosts list + copy hosts-file snippet  

### Phase D — Main site privacy pass
- [ ] About + llms.txt  
- [ ] 1–2 privacy/passkey Getting started notes  
- [ ] Scan for copy that implies cloud accounts / email signup  

---

## Out of scope (explicit)

- Email/password, OAuth, magic links, Cloudflare Access as the user login  
- Shared labs / multi-user collaboration in v1  
- Hosting Pi-hole, VPN, NAS, or any house service on Cloudflare  
- Price scrapers, push notifications, analytics dashboards  
- Apex `labthrift.com` accounts  

---

## Open decisions (defaults if unblocked)

| Question | Default |
|----------|---------|
| Subdomain | `plan.labthrift.com` |
| Product name in chrome | “Lab plan” |
| Auth library | SimpleWebAuthn + custom D1 (avoid email-shaped schemas) |
| Cookie parent domain | Host-only on `plan.` (not `.labthrift.com`) |
| Username rules | 3–32 chars, `[a-z0-9_-]`, unique |
