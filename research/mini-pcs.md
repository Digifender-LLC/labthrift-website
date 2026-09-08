# Labthrift research: N100 / N150 / N305 mini PCs as Proxmox nodes

**Researched:** Saturday 22 Aug 2026 (America/Chicago).  
**Voice / audience:** lab notebook; one-person closet lab.  
**Constraint:** every SKU below is a current new (or official-refurb) product with a stable Amazon ASIN, Newegg item, B&H SKU, or maker storefront. No AliExpress-only Topton boxes. No used eBay NUCs. No invented products, prices, or burn-in.  
**Do not duplicate:** existing guide `guides/n100-mini-pc.html` already covers the general N100 vs N150 vs 4-NIC angle and “16 GB is the floor.” These ideas go past that.

## Method notes

- Looked up Cursor `GetDynamicTools` first (no `cursor` MCP server in this environment). Used native WebSearch / WebFetch.
- Specs taken from maker pages and live retailer listings fetched 22 Aug 2026. Street prices only where a page showed a number that day, or a dated third-party snapshot is cited.
- **No first-party burn-in.** Editorial is spec-and-street only.

## Split the closet must keep repeating

| Class | What it is | Why a closet lab cares |
| --- | --- | --- |
| Living-room / VESA mini | 1× 1G or 1× 2.5G, plastic, fan, HDMI pair | Cheap compute node. Not a router. |
| Dual-NIC living-room | 2× 1G or 2× 2.5G in the same palm box | Light OPNsense + a couple of LXCs. Still not 4-port. |
| 4× 2.5G appliance | Aluminum, often fanless, Intel i226-V ×4 | WAN / LAN / IoT / lab. The actual firewall node. |
| Junk listing | Title says N150 / 2.5G / 16 GB; body is another chip, 1G, or 8 GB | Affiliate post must name the ASIN and the NIC chip. |

## Dropped (not affiliate-safe or not shipping new)

- **Topton / generic AliExpress 4-NIC clones** without a stable Amazon ASIN.
- **Used eBay Intel NUCs.**
- **Minisforum UN100L** — Newegg item `2SW-002G-000J4` (MINISFORUM Official) was **out of stock** on fetch. Micro Center SKU 755181 exists but is not in the allowed affiliate set. Soldered 16 GB LPDDR5 anyway.
- **Minisforum MS-01** — official US store lists every CPU variant **sold out**. Not a 2026 buy post. Mention only as “do not chase.”
- **GMKtec official G3 Plus page** — `gmktec.com` lists the N150 unit **sold out** at a $499.99 tag that does not match Amazon street reports. Use Amazon, not the dead storefront, as the buy path.
- **ASIN B0F6CPHY48** — URL slug claims “Nucbox G3 Plus / N150”; live Amazon title on 22 Aug 2026 is **GMKtec G3 Pro, Core i3-10110U**, $299.99, temporarily OOS. Classic junk listing. Do not affiliate this as an N150.

---

## Ranked post ideas (1 = ship first)

### 1. Beelink EQ14 N150: read the NIC before you click Buy

- **Slug:** `beelink-eq14-n150-dual-lan-proxmox`
- **Type:** review
- **Angle:** The EQ14 is the current Beelink N150 closet box with dual LAN, an internal PSU (IEC cord, no brick), dual M.2, and a claimed 32 dB fan. It is **not** in the existing S12/S13 short list. The editorial job is to stop people buying the 1G Realtek variant while quoting a 2.5G firewall guide.
- **SKUs / RAM / NIC / TDP / street:**
  - Official: Beelink EQ14 N150, 16 GB DDR4 SO-DIMM (max 16 GB), dual M.2 PCIe 3.0, TDP listed as MSP 25 W. Official NIC table lists **both** Realtek RTL8111H 1G **and** Intel I226-V 2.5G. Current official config on bee-link.com 22 Aug 2026: 16G×1 DDR4 + 500 GB SSD, **$375** (was $429).
  - Amazon US: `B0D6FLW5YM` (16 GB / 1 TB, title says dual **1000 Mbps**).
  - Amazon US: listing titled EQ14 N150 16 GB / 500 GB dual LAN home-server (`B0C339KVH9` in search; **verify title still says EQ14** — other Beelink ASINs have redirected). One 2026 snapshot showed **$189**.
  - Newegg: `3C6-00V6-01D19` (title claims 2.5G dual LAN; first listed 10 May 2026).
- **Affiliate path:** Amazon Associates on the ASIN that still says EQ14 + dual LAN; Beelink official store `bee-link.com`; Newegg on `3C6-00V6-01D19`.
- **Live URLs:**
  - https://www.bee-link.com/products/beelink-eq14-n150
  - https://www.amazon.com/Beelink-Computer-Desktop-Display-1000Mbps/dp/B0D6FLW5YM
  - https://www.newegg.com/p/3C6-00V6-01D19
- **Search intent:** “Beelink EQ14 Proxmox”, “EQ14 2.5G or 1G”, “EQ14 N150 review”.
- **Flag:** Dual-LAN ≠ 4-NIC. Confirm RTL8111H vs I226-V on the unit label. Official page itself lists both.

### 2. Protectli VP2430e: the 4× 2.5G N150 you can actually warrant

- **Slug:** `protectli-vp2430e-n150-4x-2-5g-proxmox`
- **Type:** review
- **Angle:** Existing guide waves at “CWWK / Topton 4-NIC.” This post is the **named, US-support, coreboot** N150 appliance. Fanless aluminum, 4× Intel I226-V, VT-x / VT-d, AES-NI, Protectli-qualified **DDR5 above Intel’s 16 GB spec**.
- **SKUs / RAM / NIC / TDP / street:**
  - SKU **VP2430e**. Intel N150 4C/4T, 6 MB cache, up to 3.6 GHz. 1× DDR5-4800 SO-DIMM, **Protectli-tested to 64 GB** (Intel datasheet still says 16 GB). 4× I226-V 2.5G. M.2 2280 NVMe (PCIe 3.0 x2) + optional 2.5" SATA. Fanless. Max power usage listed **45 W**. Official **$419** 22 Aug 2026 (bare configurator start). 2-year factory warranty, extendable.
  - VP2430 (with 32 GB eMMC) is the older SKU; “e” dropped eMMC in June 2026 to cut cost. Amazon.ca `B0F3DR4CQM` is VP2430 (not e) — prefer the US maker store.
- **Affiliate path:** Protectli official store (primary). Amazon only if a US ASIN for **VP2430e** is live at publish — do not send US readers to the CA VP2430 listing.
- **Live URLs:**
  - https://protectli.com/product/vp2430e/
  - https://kb.protectli.com/kb/vp2430-hardware-overview/
  - https://protectli.com/news/vp2430-launch/
- **Search intent:** “Protectli N150”, “VP2430e OPNsense”, “fanless 4 port N150 Proxmox”.
- **Flag:** This is the 4-NIC closet box. Not a living-room HDMI toy. No soldered RAM.

### 3. Protectli VP2440e: N150 with 10G SFP+ without chasing a sold-out MS-01

- **Slug:** `protectli-vp2440e-n150-10g-sfp`
- **Type:** review
- **Angle:** Minisforum MS-01 (dual 10G SFP+ + dual 2.5G, 96 GB DDR5) is **sold out** on store.minisforum.com. VP2440e is the N-class box that still ships: 2× Intel X710-BM2 SFP+ + 2× I226-V, same N150 / 64 GB DDR5 story, fanless.
- **SKUs / RAM / NIC / TDP / street:**
  - SKU **VP2440e**. N150. 1× DDR5-4800 SO-DIMM, max 64 GB (Protectli-qualified). 2× 10G SFP+ + 2× 2.5G RJ45. Fanless. Max 45 W. Official **$499** 22 Aug 2026. Original VP2440 with eMMC is volume-order only at $529.
- **Affiliate path:** Protectli official store.
- **Live URLs:**
  - https://protectli.com/product/vp2440e/
  - https://store.minisforum.com/products/minisforum-ms-01-workstation (sold-out contrast only)
- **Search intent:** “N150 10G SFP+”, “Protectli VP2440e”, “MS-01 alternative 2026”.
- **Flag:** 10G optics/DAC are extra. N150 will not saturate two 10G links with IDS. Still a 4-port appliance, not a living-room mini.

### 4. AOOSTAR N1 Pro N150: dual 2.5G in a palm box, soldered 12 GB

- **Slug:** `aoostar-n1-pro-n150-soldered-12gb`
- **Type:** review
- **Angle:** Dual Intel I226-V in an 89×89×42 mm box at living-room money. The trap is **12 GB LPDDR5 soldered, single-channel, not upgradeable**, plus an M.2 **2242** slot. Use it as a tiny dual-NIC appliance or a second node — not as the Proxmox host you plan to grow.
- **SKUs / RAM / NIC / TDP / street:**
  - AOOSTAR N1 PRO, Intel N150 4C/4T up to 3.6 GHz. 12 GB LPDDR5-4400 soldered. Dual I226-V 2.5G. Wi-Fi 5. USB-C PD + DP + HDMI (triple 4K). 35 W adapter / 12 V 3 A. Official US page listed **$175** (12/512); EU last-batch 12/1 TB **$249** sold out. Amazon 22 Aug 2026: `B0F387XH21` **$137** (12 GB / 256 GB); `B0F388KC4V` **$149** (12 GB / 512 GB); `B0DT47LM6S`.
- **Affiliate path:** Amazon Associates on those ASINs; AOOSTAR official `aoostar.com` if the US SKU is in stock at publish.
- **Live URLs:**
  - https://www.amazon.com/AOOSTAR-N1-PRO-Computers-Full-Featured/dp/B0F387XH21
  - https://www.amazon.com/Upgraded-Desktop-Computers-Display-Business/dp/B0F388KC4V
  - https://aoostar.com/products/aoostar-n1-pro-intel-n150
- **Search intent:** “AOOSTAR N1 Pro N150”, “dual 2.5G mini PC soldered RAM”.
- **Flag:** Soldered-RAM trap (12 GB, not 8 GB, same problem). Dual 2.5G living-room class, not 4-NIC.

### 5. Amazon listing roulette: EQ14 1G vs 2.5G, G3 Plus vs G3 Pro

- **Slug:** `n150-amazon-listing-traps`
- **Type:** guide
- **Angle:** Not another “N100 vs N150” chip table. A buyer-guide that walks ASINs and tells the reader to match **CPU string + NIC chip + RAM type** before the affiliate click. This is the junk-listing post.
- **SKUs / RAM / NIC / TDP / street (worked examples, 22 Aug 2026):**
  - Beelink official EQ14: dual 1G RTL8111H **or** dual I226-V 2.5G — same model name.
  - Amazon `B0D6FLW5YM`: EQ14, title dual **1000 Mbps**.
  - Amazon `B0F6CPHY48`: slug “G3 Plus / N150”; live title **G3 Pro i3-10110U**, **$299.99**, temp OOS. Do not buy as N150.
  - GMKtec G3 Plus 8 GB / 256 GB N150: `B0DM58M5SD` (8 GB trap).
  - GMKtec G3 Plus 16/512 ASIN `B0DM25BD7Y` returned **404** on fetch 22 Aug 2026 — do not deep-link a dead ASIN.
- **Affiliate path:** Amazon Associates on **verified** ASINs only; screenshot the title/spec table in the post. Secondary: bee-link.com, gmktec.com, protectli.com as “buy from the maker when Amazon is a mess.”
- **Live URLs:**
  - https://www.bee-link.com/products/beelink-eq14-n150
  - https://www.amazon.com/Beelink-Computer-Desktop-Display-1000Mbps/dp/B0D6FLW5YM
  - https://www.amazon.com/GMKtec-Intel-Upgraded-Desktop-Computer/dp/B0DM58M5SD
  - https://www.amazon.com/GMKtec-2-5Gbps-Computers-Business-G3/dp/B0F6CPHY48 (as a **negative** example)
- **Search intent:** “Beelink EQ14 2.5G or gigabit”, “GMKtec G3 Plus vs G3 Pro”, “N150 mini PC Amazon fake listing”.

### 6. GMKtec G3 Plus N150: single 2.5G living-room node (skip the 8 GB)

- **Slug:** `gmktec-g3-plus-n150-2-5g`
- **Type:** review
- **Angle:** The existing guide already names G3 Plus in a table. This is the full SKU review: one Intel i226-V, one DDR4 SO-DIMM, plastic 100 mm box, 1-year warranty vs Beelink’s 3-year. Closet role = compute node next to an existing NAS, not the router.
- **SKUs / RAM / NIC / TDP / street:**
  - Official: NucBox G3 Plus, Intel Twin Lake N150, 16 GB + 512 GB config. Maker store **sold out**, tag $499.99 (treat as list, not street).
  - Amazon `B0DM58M5SD`: N150, **8 GB / 256 GB**, dual HDMI, 2.5G. **Do not recommend this config.**
  - Reviews in 2026 cite 16 GB / 512 GB around $199–$229 and ~10 W idle — **not first-party; re-check a live 16 GB ASIN at publish.**
  - CPU: 4C/4T, 6 W class, burst commonly listed to 25 W. iGPU 24 EU, up to 1000 MHz on most G3 Plus copy.
- **Affiliate path:** Amazon Associates on a **live 16 GB G3 Plus N150** ASIN (re-verify; 16/512 ASIN was 404 today). Official GMKtec only if restocked. Do not use `B0F6CPHY48`.
- **Live URLs:**
  - https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor
  - https://www.amazon.com/GMKtec-Intel-Upgraded-Desktop-Computer/dp/B0DM58M5SD (8 GB trap SKU)
- **Search intent:** “GMKtec G3 Plus Proxmox”, “G3 Plus 16GB vs 8GB”.
- **Flag:** Single-NIC living-room class. 8 GB listing is a trap. Official store sold out.

### 7. Beelink Mini S12 Pro vs Mini S13: same palm box, confirm the LAN

- **Slug:** `beelink-s12-pro-vs-s13-living-room-node`
- **Type:** compare
- **Angle:** Existing guide already says “buy whichever is cheaper.” This post is the **port and RAM-slot teardown**: S12 Pro N100 vs S13 / S13 Pro N150 as VESA living-room nodes, 1× 1G vs listings that claim 2.5G, single SO-DIMM, extra 2.5" or second M.2. Not a chip-benchmark piece.
- **SKUs / RAM / NIC / TDP / street:**
  - Mini S12 Pro: N100 4C/4T, 6 W / turbo 3.4 GHz, 16 GB DDR4 SO-DIMM (Amazon table also says max 32 GB on `B0CBBV5NCT` — **confirm in a teardown**), 1× 1000M LAN on that ASIN, Wi-Fi 6. Newegg `2SW-0012-00177` first listed 25 Jun 2026. Price-history snapshot 8 Jul 2026: Amazon **$429** (avg ~$188, low $149) — street is noisy; print the live tag.
  - Mini S13: N150, 16 GB DDR4, 1 TB, Amazon `B0D7GD7SLW`. Mini S13 Pro 16/500: Amazon `B0D5QXTFHH` showed **$358.90** in search; CA `B0DPMFPPTH`.
  - Beelink 2026 Prime Day post still names Mini S12 / S12 Pro as current S-series.
- **Affiliate path:** Amazon Associates (`B0CBBV5NCT`, `B0D7GD7SLW`); Newegg `2SW-0012-00177`.
- **Live URLs:**
  - https://us.amazon.com/Beelink-Pro-Desktop-Computer-Support/dp/B0CBBV5NCT
  - https://www.amazon.com/Beelink-Computer-Desktop-Computers-PCIe3-0/dp/B0D7GD7SLW
  - https://www.newegg.com/beelink-mini-s12-pro-barebone-systems-mini-pc-n100/p/2SW-0012-00177
  - https://www.bee-link.com/blogs/all/beelink-2026-amazon-prime-day-worldwide-mega-sale-96-hours-of-up-to-20-off
- **Search intent:** “Beelink S13 vs S12 Pro”, “Mini S12 Pro 2.5G”.
- **Flag:** Living-room single-NIC class. Confirm 1G vs 2.5G per ASIN. Not a 4-port box.

### 8. Beelink EQ12 N100: the older dual-2.5G DDR5 box still sold new

- **Slug:** `beelink-eq12-n100-dual-2-5g`
- **Type:** review
- **Angle:** EQ12 is the N100 dual-2.5G / DDR5 / triple-display box CNX and others already ran as pfSense + TrueNAS. Still listed **new** on Newegg in 2026. Distinct from EQ14 (N150, often 1G, internal PSU) and from the 4-NIC appliances.
- **SKUs / RAM / NIC / TDP / street:**
  - EQ12: N100, 16 GB DDR5-4800 SO-DIMM, 500 GB, **2× 2.5G**, HDMI×2 + USB-C, Wi-Fi 6. Amazon `B0CGHSSPSP`, `B0C1RQNRBZ`. Newegg `2SW-0012-00158` (first listed 6 Jun 2026), `2SW-0012-000Y9`. TDP 6 W class / 25 W turbo. Regional CZ shop still sells 8 GB **and** 16 GB — **skip 8 GB**.
- **Affiliate path:** Newegg (cleaner “dual 2.5G” titles); Amazon only after reading the NIC line.
- **Live URLs:**
  - https://www.newegg.com/beelink-eq-series-barebone-systems-mini-pc-beelink-eq12-n100/p/2SW-0012-00158
  - https://www.amazon.com/Beelink-Generation-Lake-N100-Processor-Computer/dp/B0CGHSSPSP
  - https://www.cnx-software.com/2023/05/16/beelink-eq12-review-intel-processor-n100-mini-pc-windows-11-truenas-pfsense-ubuntu/
- **Search intent:** “Beelink EQ12 Proxmox”, “EQ12 vs EQ14”.
- **Flag:** Dual-2.5G living-room, not 4-NIC. 8 GB regional SKUs are traps.

### 9. Beelink ME Pro N150: 2-bay NAS + 5G/2.5G, soldered 16 GB

- **Slug:** `beelink-me-pro-n150-2bay-nas`
- **Type:** review
- **Angle:** Not a generic mini PC. N150 (or N95) in a 2-bay SATA + 3× M.2 chassis with **5G Realtek RTL8126 + Intel I226-V 2.5G**. Closet role = media / backup node, not the 4-port firewall. Existing `first-nas.html` stays generic; this is the SKU.
- **SKUs / RAM / NIC / TDP / street:**
  - Official: ME Pro 2-Bay, N150 + 16 GB LPDDR5-4800 + 1 TB **$559** (was $679); 1 TB config marked **pre-order, ships within 35 days** on 22 Aug 2026. N95 + 12 GB LPDDR5 + 512 GB also listed. RAM is LPDDR5 (soldered). Dual 3.5/2.5" SATA + 3× M.2 (one x2, two x1). Adapter 19 V 6.32 A. Amazon `B0GHSFH9X7`, `B0GQGXZ9NY`.
- **Affiliate path:** Beelink official store; Amazon Associates on those ASINs.
- **Live URLs:**
  - https://www.bee-link.com/products/beelink-me-pro
  - https://www.amazon.com/Beelink-LPDDR5-PCIe3-0-Library-Private/dp/B0GHSFH9X7
  - https://www.amazon.com/Beelink-Computer-PCIe3-0-Desktop-Supports/dp/B0GQGXZ9NY
- **Search intent:** “Beelink ME Pro N150”, “N150 2 bay NAS Proxmox”.
- **Flag:** Soldered 16 GB (and 12 GB on N95). Dual high-speed LAN, still not 4-NIC. Pre-order risk.

### 10. CWWK 4× i226 N100 on Amazon: cheap 4-NIC, treat the listing as hostile

- **Slug:** `cwwk-n100-4x-i226-amazon`
- **Type:** review
- **Angle:** Allowed because it has a **stable Amazon ASIN**, not AliExpress-only. Contrast with Protectli: same port count, worse firmware/support story, often **barebone / 0 RAM**. Existing guide’s “BIOS is the gamble” line becomes the whole post.
- **SKUs / RAM / NIC / TDP / street:**
  - Amazon `B0CL5SBWCJ`: CWWK N100, **DDR5, 0 RAM / 0 SSD**, 4× i226-V 2.5G, AES-NI, OPNsense-marketed. Live 22 Aug 2026 (Add to cart present).
  - Amazon `B0CG8JBDCD`: CWWK N305 8C/8T, 6× i226-V, fanless, **barebone**, DDR5 to 32 GB. Distinct SKU — use in the N305 compare, not as the N100 review unit.
  - Maker: CWWK F12 / F10 N100–N305 4× i226, DDR5. F10 “from $245.80” / $393.33 on cwwk.com (config-dependent).
- **Affiliate path:** Amazon Associates on `B0CL5SBWCJ` (and `B0CG8JBDCD` in the compare). Optional CWWK official if they have an associate program; otherwise Amazon only.
- **Live URLs:**
  - https://www.amazon.com/CWWK-PC-N100-Fanless-Barebone/dp/B0CL5SBWCJ
  - https://www.amazon.com/CWWK-PC-Processor-6x2-5GbE-Firewall/dp/B0CG8JBDCD
  - https://cwwkpc.com/products/cwwk-firewall-mini-pc
  - https://cwwkpc.com/blogs/news/cwwk-vs-topton
- **Search intent:** “CWWK N100 Amazon”, “4x 2.5G N100 OPNsense”.
- **Flag:** 4-NIC class. Barebone 0 GB is an 8 GB trap waiting to happen — buyer must add ≥16 GB DDR5. CWWK is not Topton; do not assume BIOS files interchange (CWWK’s own post).

### 11. Protectli VP2430e vs CWWK Amazon 4-NIC: pay for coreboot or gamble

- **Slug:** `protectli-vp2430e-vs-cwwk-4nic`
- **Type:** compare
- **Angle:** Same port story (4× I226-V), different buy: $419 configured US support vs Amazon barebone. Not “N100 vs N150 vs 4-NIC” — two **affiliate-able** 4-port boxes only.
- **SKUs / RAM / NIC / TDP / street:**
  - Protectli VP2430e: N150, DDR5 to 64 GB (qualified), fanless, coreboot, **$419**.
  - CWWK `B0CL5SBWCJ`: N100, 4× i226, 0 RAM, live Amazon.
  - Optional third column: CWWK N305 6-port `B0CG8JBDCD` if the reader already knows they want 8 cores.
- **Affiliate path:** protectli.com + Amazon `B0CL5SBWCJ`.
- **Live URLs:**
  - https://protectli.com/product/vp2430e/
  - https://www.amazon.com/CWWK-PC-N100-Fanless-Barebone/dp/B0CL5SBWCJ
  - https://cwwkpc.com/blogs/news/cwwk-vs-topton
- **Search intent:** “Protectli vs CWWK”, “is a $200 4-port N100 good enough”.

### 12. Dual-NIC living-room vs 4× 2.5G appliance (EQ14 / N1 Pro / EQ12 vs VP2430e / CWWK)

- **Slug:** `dual-lan-mini-vs-4x-2-5g-appliance`
- **Type:** compare
- **Angle:** The existing guide puts both classes in one table. This post is the **decision tree**: HDMI-on-the-TV box with 1–2 NICs vs aluminum 4-port. When a USB 2.5G dongle is a worse idea than buying the appliance once.
- **SKUs / RAM / NIC / TDP / street:**
  - Living-room dual-NIC: EQ14 (1G or 2.5G variants, $375 official / Amazon ~$189 snapshot), EQ12 (2× 2.5G, Newegg live), AOOSTAR N1 Pro (2× 2.5G, soldered 12 GB, $137–$175).
  - 4-NIC: VP2430e $419; CWWK `B0CL5SBWCJ` barebone.
  - Single-NIC control: G3 Plus / S12 Pro (1× 2.5G or 1× 1G).
- **Affiliate path:** mix of Amazon + bee-link.com + protectli.com + aoostar Amazon ASINs.
- **Live URLs:**
  - https://www.bee-link.com/products/beelink-eq14-n150
  - https://www.amazon.com/AOOSTAR-N1-PRO-Computers-Full-Featured/dp/B0F387XH21
  - https://protectli.com/product/vp2430e/
  - https://www.newegg.com/beelink-eq-series-barebone-systems-mini-pc-beelink-eq12-n100/p/2SW-0012-00158
- **Search intent:** “mini PC vs firewall appliance homelab”, “do I need 4 ethernet ports Proxmox”.

### 13. RAM ceiling on N-class boards: Intel 16 GB vs Protectli 64 GB vs soldered 8/12

- **Slug:** `n100-n150-ram-ceiling-soldered-traps`
- **Type:** guide
- **Angle:** Existing guide says “16 GB is the floor.” This guide is the **ceiling and the traps**: Intel sales-tier 16 GB vs boards that take 32/64 GB DDR5; soldered LPDDR5 12 GB (N1 Pro) and 16 GB (ME Pro, UN100L); 8 GB Amazon configs (G3 Plus `B0DM58M5SD`, G3S N95 8/256 at $249.99). Do not restate the floor as the lede.
- **SKUs / RAM / NIC / TDP / street:**
  - Protectli VP2430e / VP2440e: official “Intel says 16 GB; we qualified 64 GB DDR5.” $419 / $499.
  - EQ14: official **max 16 GB** DDR4 SO-DIMM.
  - AOOSTAR N1 Pro: **12 GB LPDDR5 soldered**. $137–$175.
  - ME Pro: **16 GB LPDDR5 soldered**. $559 official.
  - G3 Plus 8 GB: `B0DM58M5SD`.
  - GMKtec G3S N95 8 GB / 256 GB: $249.99 on Amazon similar-items 22 Aug 2026 (N95, not N150 — still an 8 GB trap).
- **Affiliate path:** Protectli (the 64 GB story); Amazon 16 GB configs; Amazon 8/12 GB ASINs as “do not buy” with still-valid links.
- **Live URLs:**
  - https://protectli.com/product/vp2430e/
  - https://aoostar.com/products/aoostar-n1-pro-intel-n150
  - https://www.amazon.com/GMKtec-Intel-Upgraded-Desktop-Computer/dp/B0DM58M5SD
  - https://www.bee-link.com/products/beelink-me-pro
- **Search intent:** “N150 max RAM”, “can N100 take 32GB”, “soldered RAM mini PC”.

### 14. N100/N150 iGPU transcode under Proxmox (kernel, not stream-count theater)

- **Slug:** `n100-n150-quicksync-proxmox-lxc`
- **Type:** guide
- **Angle:** Existing guide already says “Quick Sync in an LXC, not iGPU passthrough.” This post is the **2026 kernel/driver checklist** plus which **affiliate boxes** have a usable iGPU (24 EU, QSV/AV1 decode on Twin Lake). Cite community: N150 needs host kernel ≥ 6.11; GMKtec N150 + Jellyfin LXC reports on Proxmox 8.4.1 / 6.11.11. Do **not** invent simultaneous-stream counts.
- **SKUs / RAM / NIC / TDP / street:**
  - Any N100/N150 with Intel UHD 24 EU: EQ14, S12 Pro, S13, G3 Plus, VP2430e, N1 Pro, ME Pro.
  - N305 32 EU (CWWK `B0CG8JBDCD`) as the “more headroom, more idle watts” aside.
  - Third-party power tables (not ours): N100 headless idle ~6–8 W; 1× HW transcode ~12–16 W (Hobbyist's Hideaway / Jellywatch 2026 posts). Label as **other people’s Kill-A-Watt numbers**.
- **Affiliate path:** same living-room and 4-NIC SKUs as posts 1–10; this post is the hook, those are the carts.
- **Live URLs:**
  - https://forum.proxmox.com/threads/n150-igpu-passthrough.163704/
  - https://binarypatrick.dev/posts/2026/plex-lxc-hardware-transcoding/
  - https://www.notebookcheck.net/Beelink-EQ14-mini-PC-review-Ready-to-go-HTPC-for-under-200.939127.0.html
  - https://protectli.com/product/vp2430e/ (iGPU 24 EU, 1 GHz)
- **Search intent:** “N150 Jellyfin Proxmox”, “N100 Quick Sync LXC 2026”.

### 15. Idle watts and fan noise: single-NIC fan box vs 4-NIC fanless

- **Slug:** `n100-n150-idle-watts-fan-noise`
- **Type:** guide
- **Angle:** Not a chip bake-off. Closet-lab question: **can this sit next to a bed / in a closet with the door shut.** EQ14 official **32 dB**; Protectli / CWWK fanless = 0 fan, warmer chassis. Extra i226 ports cost idle watts. Cite published ranges only; no fake Kill-A-Watt.
- **SKUs / RAM / NIC / TDP / street:**
  - EQ14: official 32 dB, 25 W MSP, ~6 W idle cited by third parties. $375 official.
  - S12 Pro / G3 Plus: third-party headless idle **6–10 W** (Hobbyist's Hideaway, MiniLab HQ).
  - N305 class: MiniLab HQ typical warm idle **12–16 W**.
  - VP2430e / VP2440e: fanless, max 45 W, $419 / $499.
  - CWWK 4- and 6-port: fanless aluminum; third-party notes ~10–13 W idle on 4-port N100 (not our meter).
- **Affiliate path:** EQ14 + VP2430e as the two carts (quiet fan vs no fan).
- **Live URLs:**
  - https://www.bee-link.com/products/beelink-eq14-n150
  - https://protectli.com/product/vp2430e/
  - https://bishalkshah.com.np/blog/low-power-homelab-n100-mini-pc
  - https://minilabhq.com/posts/measuring-mini-pc-idle-wattage/
- **Search intent:** “N100 idle watts”, “fanless N150 firewall noise”.

### 16. ASUS NUC 14 Pro vs N-class: when the NUC tax is the RAM slots

- **Slug:** `asus-nuc-14-pro-vs-n150-closet`
- **Type:** compare
- **Angle:** Intel NUC successors that are **new at B&H / Newegg**, not eBay 11th-gen leftovers. NUC 14 Pro is Core Ultra (not N150) with **dual DDR5 SO-DIMM up to 96 GB**, Thunderbolt 4, 1× Intel i226-V 2.5G. Closet question: pay 3–5× for upgradeable RAM and a real vendor, or stay on N-class.
- **SKUs / RAM / NIC / TDP / street:**
  - B&H: ASUS NUC 14 Pro Slim `RNUC14RVKV5068CUI` / BH# `ASN14RVKV5U` — Ultra 5 135H, 16 GB DDR5-5600, 512 GB, **$1,029** (was $1,174) 22 Aug 2026. Single 2.5G + Wi-Fi 6E + 2× TB4.
  - Newegg: `N82E16856110266` RNUC14RVKU70000UI slim **barebone** Ultra 7 155H, 2× DDR5-5600 to 96 GB, i226-V 2.5G. First listed 8 Apr 2025; still a current Newegg item.
  - Contrast carts: VP2430e $419 (4× 2.5G, 1 slot, 64 GB qualified); EQ14 $375 official (16 GB max).
- **Affiliate path:** B&H; Newegg; ASUS product page. Not eBay.
- **Live URLs:**
  - https://www.bhphotovideo.com/c/product/1814398-REG/asus_rnuc14rvkv5068cui_nuc_14_pro_full.html
  - https://www.newegg.com/asus-nuc-14-pro-barebone-intel-core-ultra-7-155h-rnuc14rvku70000ui/p/N82E16856110266
  - https://www.asus.com/us/displays-desktops/nucs/nuc-mini-pcs/asus-nuc-14-pro/
- **Search intent:** “ASUS NUC 14 Pro homelab”, “NUC vs Beelink Proxmox 2026”.
- **Flag:** Living-room / desk single-2.5G class. 16 GB soldered-looking **configured** B&H SKU is still SODIMM — the barebone is the homelab buy. Not an N150.

---

## Suggested publish order (affiliate + distinctness)

1. EQ14 NIC-variant review (#1) — new SKU, not in current guide.
2. VP2430e review (#2) — best 4-NIC affiliate story.
3. Listing-traps guide (#5) — protects every later cart.
4. N1 Pro soldered-12 GB review (#4).
5. Dual-LAN vs 4-NIC compare (#12).
6. RAM-ceiling guide (#13).
7. ME Pro NAS review (#9).
8. VP2440e / MS-01-alternative (#3).
9. CWWK Amazon 4-NIC (#10) + Protectli vs CWWK (#11).
10. EQ12 still-shipping dual-2.5G (#8).
11. S12 vs S13 port compare (#7).
12. G3 Plus review once a live 16 GB ASIN is re-confirmed (#6).
13. Transcode guide (#14) and idle/noise guide (#15) as evergreen.
14. NUC 14 Pro compare (#16) as the “spend more” piece.

15 ideas are in the 12–15 request; #16 is an extra if the NUC successor slot is wanted. If the list must stay at 15, drop #7 (closest to the existing S12/S13 line) or fold #7 into #5.

## Re-check at publish

- Re-open every Amazon ASIN. Beelink and GMKtec reuse titles; ASINs have redirected (EQ14 → EQi12 / S12 on at least one third-party site).
- Do not link `B0F6CPHY48` as G3 Plus N150.
- Do not link Minisforum MS-01 or UN100L as in-stock.
- Print the live street price from the page, not from this memo.
