# Labthrift research: used-enterprise temptation, affiliable replacements

Researched Saturday 22 Aug 2026 (America/Chicago). Specs and street prices from maker pages, Amazon/Newegg/B&H listings, and published reviews. **No burn-in.** Labthrift affiliate tags are not live.

This is **not** a rewrite of the existing essay `guides/used-vs-new.html` ("when a $40 used switch is a gift vs a 90W space heater"). That piece stays. This file is a queue of **new, distinct posts** whose buy path can actually be affiliated.

## Method and constraints

- Looked up GetDynamicTools in the Cursor MCP catalog first. The `cursor` server is not present in this environment. Used built-in WebSearch / WebFetch.
- **New constraint (user):** only propose posts that can be affiliated. Used eBay Cisco / Aruba / Dell lots cannot. Drop any idea whose only buy path is eBay used.
- Pivot: (1) **new** replacements for the used-enterprise temptation, (2) official refurb / CPO on Amazon / Newegg / maker if actually listed, (3) new low-power nodes with retail ASINs (Minisforum MS, Beelink, Protectli, Intel NUC successors).
- Do not invent products, prices, or headlines. Prices below are dated snapshots and they move.
- Existing Labthrift guides already cover: best 2.5G shopping list, N100 vs N150 shopping list, first NAS, cheap PoE for two APs, and the $40/90W used-vs-new essay. New posts must not retread those exact pieces.

## The honest frame (use in every post)

Most used 1U Dell / HPE / Lenovo servers from the 2016–2019 era are a **bad closet buy**. Community idle reports for a Dell PowerEdge R630-class 1U sit around ~70 W single-CPU typical and 80–150 W once you add a second CPU, drives, and default fans (Labthrift `used-vs-new.html`; Hardwarehoard R630 note; TechFuel 2026 homelab idle table for R720/R730). At $0.15/kWh that is roughly $90–200/year to host what an N100/N150 or a pizza-box node does on teens of watts.

The **few closet-sane classes** that are not that trap:

- Fanless / brick-PSU switches (new 2.5G unmanaged, MikroTik CRS305, QNAP QSW-2104-2S, UniFi Lite/Ultra).
- Low-power pizza boxes with real NICs (Minisforum MS-01 / MS-A2, Protectli Vault).
- Small official NAS with a 100–240 V brick (Synology DS224+, UGREEN DXP4800 Plus).
- Intel NUC successors (ASUS NUC 14 Pro) if you need a supported 4×4, not a 1U heater.

Used enterprise still appears in these posts as the **temptation being replaced**. We do not send readers to eBay lots and we do not invent used street prices we did not measure.

## Affiliate path (site-wide)

Labthrift README already plans Amazon Associates plus one other network. Tags are not live as of 22 Aug 2026. For each idea, "affiliate path" means the **cleanest retail URL that Associates / Newegg / B&H / maker-affiliate can tag later**. Direct maker stores (UI, Protectli, Minisforum, Synology, UGREEN, bee-link.com) are the price of record when Amazon is messy; use Amazon only when a real ASIN is listed.

---

## 15 post ideas

### 1. New 2.5G unmanaged vs the $40 used Catalyst myth

- **Title:** The $40 used Catalyst is still 1G. A new 8-port 2.5G is the actual upgrade.
- **Slug:** `new-2-5g-vs-used-c3560-myth`
- **Type:** comparison
- **Angle:** Distinct from the existing "best 2.5G switch" shopping list and from the $40/90W essay. This post is only the myth: a used Cisco Catalyst 3560-class 24-port 1G is still a 1G box with a loud or warm PSU story, and it cannot feed a 2.5G NAS or mini PC. The affiliated buy is a new fanless 8-port 2.5G that sits on a 12 V brick.
- **Real models + street 22 Aug 2026:**
  - TP-Link TL-SG108S-M2 (8× 2.5G, fanless, unmanaged). Amazon ASIN B0CMFX748Y. Pricehistory.app: **$54.99 on 19 Aug 2026** (MRP $79.99). SpecPicks Amazon snapshot 26 Jul 2026: $79.49. B&H compare page: $79.99 after $40 instant savings. Existing Labthrift 2.5G guide: Tom's Hardware saw ~$50 on a June 2026 Prime sale. Maker max draw cited on B&H compare: **12.11 W**.
  - TRENDnet TEG-S380 V2 (8× 2.5G, fanless, NDAA/TAA, lifetime). Maker store list **$87.99**. Amazon ASIN B08XWKF55C snapshot **$74.99**. Maker spec: **max 7.26 W**, 12 V / 1 A brick, fanless. B&H compare also listed TEG-S380 at $71.99.
  - Temptation named, not sold: used Catalyst 3560 / 3750 class. Do not quote an eBay price we did not scrape.
- **Watts / noise:** New boxes are fanless pizza bricks. TEG-S380 max 7.26 W (TRENDnet spec). TL-SG108S-M2 max 12.11 W (B&H spec table). Used 24-port Catalyst idle is the 90 W space-heater case already covered in `used-vs-new.html` — point back, do not rewrite.
- **Affiliate path + live URL:**
  - Amazon Associates → https://www.amazon.com/TP-Link-TL-SG108S-M2-Multi-Gigabit-Unmanaged-Operation/dp/B0CMFX748Y
  - Amazon Associates → https://www.amazon.com/TRENDnet-2-5GBASE-T-Compatible-10-100-1000Mbps-TEG-S380/dp/B08XWKF55C
  - TRENDnet store (price of record) → https://www.trendnet.com/store/products/2-5g-switch/8-port-unmanaged-2-5g-switch-TEG-S380-v2.0R
  - B&H compare (affiliate-capable) → https://www.bhphotovideo.com/c/compare/TP-Link_TL-SG108S-M2+8-Port+2.5G+Unmanged+Network+Switch_vs_TRENDnet_TEG-S380+8-Port+2.5G+Unmanaged+Network+Switch_vs_TRENDnet_TEG-S381+8-Port+2.5G+Unmanaged+Network+Switch/BHitems/1829510-REG_1685002-REG_1927005-REG
- **Sources:** Amazon B0CMFX748Y; pricehistory.app 19 Aug 2026 $54.99; TRENDnet TEG-S380 V2 spec; B&H compare; Labthrift `guides/2-5g-switch.html`.
- **Search intent:** "used cisco 3560 homelab" / "c3560 vs 2.5g switch" / "is a used catalyst switch quiet"

### 2. Minisforum MS-01 vs a used 1U Dell

- **Title:** Minisforum MS-01: the closet 10G node that replaces a used R630
- **Slug:** `minisforum-ms-01-vs-used-1u`
- **Type:** review
- **Angle:** A used Dell R630 / R640 is the default "I found a $200 server" impulse. The MS-01 is the retail box that actually belongs in a closet: dual 10G SFP+, dual 2.5G, USB4, three M.2, laptop-class Intel 12th/13th-gen. This is not another N100 shopping list. It is "do not buy the 1U."
- **Real models + street 22 Aug 2026:**
  - MINISFORUM MS-01, Intel Core i5-12600H / i9-12900H / i9-13900H, dual 10G SFP+ + dual 2.5G. Maker page list starts **$439.90** (i5-12600H barebone). **Every config on minisforum.com was Sold out** when fetched 22 Aug 2026.
  - Configured 32 GB / 1 TB i9-13900H: jdhodges.com paid **$1,016.58 at Newegg on 8 Feb 2026**; Amazon same config **~$1,015.90 as of 5 Apr 2026**. NAS Compares (1 Oct 2025) Amazon band MS-01 **$599–879**.
  - Used 1U named only as the skip: Dell PowerEdge R630 / R640. Do not affiliate eBay.
- **Watts / noise:** jdhodges.com (Proxmox, off-grid, 2026): idle **13–35 W**. Small chassis fan, not a 1U server PSU scream. Contrast R630-class idle ~70 W typical / 80–150 W loaded closet (Hardwarehoard; Labthrift used-vs-new).
- **Affiliate path + live URL:**
  - Maker (sold out 22 Aug 2026; still the spec page) → https://www.minisforum.com/products/minisforum-ms-01
  - Newegg / Amazon Associates for the **configured** 32 GB / 1 TB SKU when in stock (confirm the exact config; barebone ~$623 is a different product). jdhodges.com documents the Feb/Apr 2026 Newegg + Amazon prices.
- **Sources:** https://www.minisforum.com/products/minisforum-ms-01 ; https://www.jdhodges.com/blog/minisforum-ms-01-proxmox-review/ ; https://nascompares.com/2025/10/01/minisforum-ms-01-vs-ms-a2-which-is-better/ ; Hardwarehoard R630 idle note.
- **Search intent:** "minisforum ms-01 proxmox" / "used dell r630 homelab power" / "ms-01 vs 1u server"

### 3. Minisforum MS-A2: AMD update, still a pizza box

- **Title:** Minisforum MS-A2 review notes: Ryzen 9 9955HX, dual 10G, still not a 1U
- **Slug:** `minisforum-ms-a2-closet-lab`
- **Type:** review
- **Angle:** ServeTheHome already called the MS-A2 "an almost perfect homelab system." Labthrift's job is the closet cut: same 10G pizza-box idea as the MS-01, newer AMD CPU, PCIe x16, higher price, and a fan. Cite STH. Do not pretend we burned one in.
- **Real models + street 22 Aug 2026:**
  - MINISFORUM MS-A2, AMD Ryzen 9 9955HX (16C/32T). Official store.minisforum.com barebone **$799** (was $999). Configured 32 GB / 1 TB Amazon ASIN B0G7H72Z1H snapshot **$1,239**. 96 GB / 2 TB Amazon ASIN B0FGJD9Y7N snapshot **$2,079.90**. minisforum.com US page showed **$839.90** and sold out configs when fetched. VideoCardz launch note: Amazon barebone $799, 32 GB / 1 TB $1,199.
  - STH: Intel X710 for the two SFP+ ports; one 2.5G Intel i226-V and one Realtek RTL8125 (three NIC drivers).
- **Watts / noise:** STH did not publish a single idle watt in the search snippet. NAS Compares / storagediskprices commentary puts load well above the MS-01. Treat watts as **unmeasured by us**; quote STH if the full review page is re-fetched at write time. Not silent — small workstation fans, still not a 1U.
- **Affiliate path + live URL:**
  - Minisforum store → https://store.minisforum.com/products/minisforum-ms-a2-workstation
  - Amazon Associates 32 GB / 1 TB → https://www.amazon.com/MINISFORUM-Workstation-2xUSB-C-Display-Support/dp/B0G7H72Z1H
  - Amazon Associates 96 GB / 2 TB → https://www.amazon.com/MINISFORUM-MS-A2-Workstation-2xUSB-C-Display/dp/B0FGJD9Y7N
- **Sources:** STH MS-A2 review; store.minisforum.com; Amazon ASINs above; VideoCardz launch.
- **Search intent:** "minisforum ms-a2 review" / "ms-a2 vs ms-01 homelab"

### 4. Protectli VP2420e vs a used 1U firewall

- **Title:** Protectli VP2420e: four Intel 2.5G ports, fanless, 24 W ceiling
- **Slug:** `protectli-vp2420e-vs-used-firewall`
- **Type:** review
- **Angle:** The used-enterprise temptation here is a retired 1U pfSense box or a dual-Xeon leftover. The retail replacement is a fanless aluminum Vault with four Intel I226-V 2.5G ports and a 12 V brick. Official US support. coreboot optional.
- **Real models + street 22 Aug 2026:**
  - Protectli Vault Pro **VP2420e**, Celeron J6412, 4× Intel I226-V 2.5G, M.2 SATA (not NVMe), no eMMC. Official **$359** bare. Same silicon as VP2420 minus eMMC (Protectli KB, 17 Jul 2026).
  - Older VP2420 official page **$369, out of stock**, bulk-only. Amazon VP2420 8 GB / 120 GB ASIN B0BQ1K182Y snapshot **$539**.
  - Comparison grid: VP2420e from **$359**, backorder flagged on protectli.com/product-comparison/.
- **Watts / noise:** Official max **24 W**. Protectli KB wall measurements on the VP2420 (same J6412): idle ~8.2 W Ubuntu table; OPNsense idle ~9.7 W; OPNsense + iPerf3 at 2.5G ~11.2 W. Fanless. HomeNetworkGuy saw ~10 W idle / ~20–21 W under test on a smart plug.
- **Affiliate path + live URL:**
  - Protectli official (current SKU) → https://protectli.com/product/vp2420e/
  - Amazon Associates (older VP2420 configured) → https://www.amazon.com/Protectli-Vault-VP2420-4-Firewall-Appliance/dp/B0BQ1K182Y
  - Protectli comparison → https://protectli.com/product-comparison/
- **Sources:** protectli.com/product/vp2420e/ ; protectli.com/product/vp2420/ ; kb.protectli.com VP2400 overview (17 Jul 2026) and power-draw KB; homenetworkguy.com/review/protectli-vp2420/
- **Search intent:** "protectli vp2420e" / "fanless opnsense appliance" / "used pfsense 1u homelab"

### 5. MikroTik CRS305: new 10G pizza box vs used Cisco 10G

- **Title:** MikroTik CRS305-1G-4S+IN: four 10G SFP+ ports, no fans, a 24 V brick
- **Slug:** `mikrotik-crs305-vs-used-cisco-10g`
- **Type:** review
- **Angle:** The used 10G Catalyst / Nexus impulse is the wrong closet object. The CRS305 is a new, silent, 4× SFP+ desktop switch with SwOS/RouterOS dual boot. ServeTheHome already called it a must-have. We cite STH power numbers; we do not invent a burn-in.
- **Real models + street 22 Aug 2026:**
  - MikroTik CRS305-1G-4S+IN. Maker suggested price **$149**. Amazon ASIN B07LFKGP1L snapshot **$136.02** (typical $144.90). STH review era: "almost always under $149," idle **10 W**, max observed **13 W**, spec max **18 W** with attachments / **10 W** without.
- **Watts / noise:** Passive. STH: idle 10 W, max observed 13 W, case gets hot, no fans. Maker: max 10 W without attachments, 18 W with, 12–57 V DC or PoE-in, included 24 V 0.8 A adapter.
- **Affiliate path + live URL:**
  - Amazon Associates → https://www.amazon.com/gp/product/B07LFKGP1L
  - Maker spec / list → https://mikrotik.com/product/crs305_1g_4s_in
- **Sources:** mikrotik.com/product/crs305_1g_4s_in ; Amazon B07LFKGP1L ; servethehome.com CRS305 review.
- **Search intent:** "mikrotik crs305 review" / "cheap 10gbe switch fanless" / "used cisco 10g switch homelab"

### 6. QNAP QSW-2104-2S: 2.5G copper + 10G SFP+ without a used chassis

- **Title:** QNAP QSW-2104-2S: four 2.5G and two 10G SFP+, 12 W, fanless
- **Slug:** `qnap-qsw-2104-2s-closet`
- **Type:** review
- **Angle:** Distinct from the CRS305 (SFP+ only) and from the 8-port 2.5G unmanaged post. This is the "NAS already has 10G, PCs are 2.5G" pizza box, sold new by QNAP. Two-year warranty, not TRENDnet lifetime.
- **Real models + street 22 Aug 2026:**
  - QNAP QSW-2104-2S (US: QSW-2104-2S-US / QSW-2104-2S-A-US). 2× 10G SFP+ + 4× 2.5G RJ45, unmanaged, fanless. Maker max **12 W**, 12 V / 1 A brick. Amazon ASIN B0BFC6QFRL snapshot **$116**. B&H listing **$79.99** (was $129.99, $50 off) when fetched. Older Amazon ASIN B09B9CJQ2D exists for the same model family.
- **Watts / noise:** Maker max 12 W. Fanless, ventilated metal. Class B.
- **Affiliate path + live URL:**
  - Amazon Associates → https://www.amazon.com/QNAP-QSW-2104-2S-A-US-Ethernet-Switch/dp/B0BFC6QFRL
  - B&H → https://www.bhphotovideo.com/c/product/1733420-REG/qnap_qsw_2104_2s_a_us_desktop_qsw_2104_2s_us_unmanaged_switch.html
  - QNAP hardware spec → https://www.qnap.com/en/product/qsw-2104-2s/specs/hardware
- **Sources:** QNAP hardware spec (12 W, fanless, 2-year); Amazon B0BFC6QFRL; B&H 1733420-REG.
- **Search intent:** "qnap qsw-2104-2s" / "2.5g switch with 10g sfp+" / "fanless 10gbe switch"

### 7. Lifetime warranty vs SmartNet you cannot buy

- **Title:** TRENDnet lifetime vs Cisco SmartNet you cannot transfer
- **Slug:** `lifetime-warranty-vs-smartnet`
- **Type:** guide
- **Angle:** The used-enterprise pitch is "Cisco quality + SmartNet." On a closet eBay lot you do not get SmartNet. You get a gray box and a firmware story. The affiliated replacement is a new TRENDnet or TP-Link with a published limited-lifetime policy in the US/Canada, or a new UniFi with UI Care sold on the same invoice.
- **Real models + street 22 Aug 2026:**
  - TRENDnet TEG-S380: lifetime manufacturer protection, US/Canada only. Street **$75–88** (see post 1).
  - TRENDnet TEG-3102WS (8× 2.5G + 2× 10G SFP+, web smart, fanless). Official store **$219.99**. Amazon ASIN B0BPJZCQ5J. Existing Labthrift 2.5G guide: ~$200. Package is a **12 V / 1.5 A** adapter; some TRENDnet spec tables list "max 152.3 W" which looks like a PoE-series leftover — do not treat 152 W as closet draw. Confirm the 12 V brick at write time.
  - TP-Link TL-SG108S-M2: Amazon copy says "Limited Lifetime Protection." Street **$55–80**.
  - UniFi Switch Ultra 60W: UI Care 5-year add-on **$29/unit** on the same store invoice. Switch **$159** / **$171** surcharge-incl. (22 Aug 2026 UI store).
  - Temptation: used Catalyst + "SmartNet included" eBay wording. Do not sell it.
- **Watts / noise:** TEG-S380 7.26 W fanless; TEG-3102WS fanless + 12 V 1.5 A brick; UniFi Ultra fanless (see post 10).
- **Affiliate path + live URL:**
  - TRENDnet TEG-S380 store → https://www.trendnet.com/products/product-detail?prod=115_TEG-S380
  - TRENDnet TEG-3102WS store → https://www.trendnet.com/store/products/2.5g-managed-switch/10-port-multi-gig-web-smart-switch-TEG-3102WS
  - Amazon TEG-3102WS → https://www.amazon.com/dp/B0BPJZCQ5J
  - UI Ultra 60W → https://store.ui.com/us/en/products/usw-ultra-60w
- **Sources:** TRENDnet lifetime copy on Amazon/maker pages (US/Canada only); UI store UI Care $29; Cisco SmartNet is a contract, not a transferable used-lot perk.
- **Search intent:** "trendnet lifetime warranty" / "used cisco smartnet transferable" / "is used catalyst worth it homelab"

### 8. 110 V brick vs 208 V 1U PSU

- **Title:** If the PSU wants 208 V, it does not belong in a closet
- **Slug:** `110v-brick-vs-208v-1u`
- **Type:** guide
- **Angle:** Used 1U servers and big Catalysts were designed for a 20 °C aisle and often dual 750 W PSUs that are happiest on 208 V. A closet is a 120 V duplex. The affiliated buy is anything on an external 12/19/24/54 V brick that is marked 100–240 V.
- **Real models + street 22 Aug 2026 (the brick side):**
  - Protectli VP2420e: 12 V DC jack, max 24 W, 100–240 V wall brick. **$359.** https://protectli.com/product/vp2420e/
  - UniFi Switch Lite 8 PoE: external 54 V / 60 W adapter, max device **8 W** + 52 W PoE budget. **$109** UI store. Datasheet https://dl.ubnt.com/ds/usw-lite-8-poe
  - MikroTik CRS305: 24 V 0.8 A included, 12–57 V, max 10–18 W.
  - Synology DS224+: 60 W adapter, 100–240 V, access **14.69 W** / hibernation **4.41 W**.
  - ASUS NUC 14 Pro kit: 19 V, 90 W adapter on the Core 3 100U SKU (ASUS eShop).
  - Temptation: used Dell / HPE 1U with a 750 W redundant PSU. Do not affiliate.
- **Watts / noise:** Brick gear is the quiet side. 1U PSU fans are the loudness problem this post is about. We have not measured PSU dB. Cite maker input ranges and the existing Labthrift line about default Catalyst fans.
- **Affiliate path + live URL:** same live URLs as posts 4, 5, 10, 11, 13. This post is a buying rule, not a new SKU.
- **Sources:** Protectli spec (12 V, max 24 W); UniFi Lite datasheet (54 V / 60 W, 8 W device); MikroTik CRS305 (12–57 V); Synology DS224+ (100–240 V, 14.69 / 4.41 W); ASUS eShop NUC 14 Pro 90 W brick.
- **Search intent:** "208v server at home" / "dell r630 110v" / "quiet psu homelab"

### 9. 1U vs pizza box

- **Title:** 1U is for a rack. A closet gets a pizza box.
- **Slug:** `1u-vs-pizza-box-closet`
- **Type:** guide
- **Angle:** Form-factor post. Used 1U is deep, loud, and needs rails, blanking, and 208-friendly PSU airflow. The affiliated closet objects are 1–2 L pizza boxes: MS-01 / MS-A2, Protectli Vault, ASUS NUC 14 Pro, Beelink Mini S13. Most used 1U servers remain a bad buy; these are the few shapes that are not.
- **Real models + street 22 Aug 2026:**
  - Minisforum MS-01 / MS-A2 — see posts 2–3. STH: MS-A2 ~1.7 L, looks like a TinyMiniMicro.
  - Protectli VP2420e: 5.75 × 5 × 2 in, optional 1RU shelf, **$359**, max 24 W, fanless.
  - ASUS NUC 14 Pro (NUC14RVH): classic 4×4, toolless. ASUS eShop Core 3 100U kit **from $429**. Configured Ultra 7 155H Amazon B0D6RPYL9B snapshot **$1,189**. Liliputing: Windows idle **8.8 W**; YouTube homelab review ~10.5–12 W idle.
  - Beelink Mini S13 N150: Amazon B09DPV3D4N snapshot **$339** (12 GB / 500 GB, 2.5G). Official Beelink EQ14 is **$375 / $429** on bee-link.com with **dual 1G**, not 2.5G — do not copy Amazon "dual 2.5G" copy against the official spec.
  - Skip: used Dell R630 / R640 / HPE DL360 1U.
- **Watts / noise:** Pizza boxes: high-single to mid-teens idle (NUC 8.8–12 W; MS-01 13–35 W; Protectli ~8–12 W). 1U: ~70 W+ idle typical. NUC and Beelink have small fans; Protectli is silent.
- **Affiliate path + live URL:**
  - Protectli → https://protectli.com/product/vp2420e/
  - ASUS eShop → https://eshop.asus.com/us/asus-nuc-14-pro.html
  - Amazon NUC14RVH → https://www.amazon.com/NUC14RVH-Canyon-Computer-Display-Thunderbolt/dp/B0D6RPYL9B
  - Amazon Beelink Mini S13 → https://www.amazon.com/Beelink-Windows-Desktop-Gigabit-Ethernet/dp/B09DPV3D4N
  - Official EQ14 (verify NIC) → https://www.bee-link.com/products/beelink-eq14-n150
- **Sources:** STH MS-A2 chassis note; Protectli dimensions; Liliputing NUC 14 Pro idle 8.8 W; ASUS eShop from $429; Beelink official dual 1000 Mbps.
- **Search intent:** "1u server in closet" / "pizza box server homelab" / "minisforum vs dell r630"

### 10. UniFi Switch Ultra vs a used Catalyst PoE

- **Title:** UniFi Switch Ultra 60W: new fanless PoE, not a used 48-port Catalyst
- **Slug:** `unifi-usw-ultra-vs-used-catalyst-poe`
- **Type:** review
- **Angle:** Distinct from `guides/cheap-poe.html` (two APs, TL-SG1005P default). This post is the UniFi-already-in-the-house replacement for a used Catalyst PoE: USW-Ultra-60W, fanless, 8 ports, PoE budget tied to the adapter, sold new on the UI store.
- **Real models + street 22 Aug 2026:**
  - USW-Ultra-60W: **$159** / **$171 surcharge-incl.** on store.ui.com (22 Aug 2026). 52 W PoE with the 60 W adapter; 42 W on PoE++ in; 17 W on PoE+ in; 8 W on PoE in (Streakwave / UI note).
  - USW-Lite-8-PoE: **$109** / **$117 surcharge-incl.** UI store. Datasheet: max device **8 W**, 52 W PoE budget, fanless, external 54 V / 60 W. Already mentioned in cheap-poe; use as the smaller sibling, not the hero.
  - USW-Ultra without PSU: Micro Center **$129.99** (SKU 861328) — PSU not included, easy to get wrong.
- **Watts / noise:** Fanless. Device draw is small; the PoE budget is the wall number. Lite datasheet 8 W device + up to 52 W PoE.
- **Affiliate path + live URL:**
  - UI store Ultra 60W (price of record; Associates only if a matching Amazon ASIN sold by Amazon exists — do not invent one) → https://store.ui.com/us/en/products/usw-ultra-60w
  - UI store Lite 8 PoE → https://store.ui.com/us/en/products/usw-lite-8-poe
  - Micro Center Ultra (no PSU) → https://www.microcenter.com/product/689993/ubiquiti-unifi-usw-ultra-network-switch-8-port
- **Sources:** store.ui.com Ultra 60W and Lite 8 PoE (fetched 22 Aug 2026); dl.ubnt.com Lite datasheet; Micro Center 689993.
- **Search intent:** "unifi usw ultra 60w" / "used cisco poe switch homelab" / "usw-lite-8-poe vs ultra"

### 11. Synology Certified Refurbished vs Amazon Renewed vs new DS224+

- **Title:** Buy a new or Synology-certified DS224+. Skip random "renewed."
- **Slug:** `synology-cpo-vs-amazon-renewed`
- **Type:** guide
- **Angle:** Official Synology Certified Refurbished exists (2-year Synology warranty, 30-day returns, new panels/accessories, **not** eligible for Extended Warranty Plus). The live program page is the EU storefront. A Newegg "Refurbished: DS224+" listed 24 Jul 2026 is sold by "Synology America Corp Marketplace" — treat as a maybe, confirm seller and price at write time (page showed the $299.99 new band, not a clear CPO discount). Amazon Renewed is third-party, not Synology CPO. The clean affiliable buy in the US on 22 Aug 2026 is **new diskless DS224+ at $299.99**.
- **Real models + street 22 Aug 2026:**
  - Synology DS224+ diskless, Intel Celeron J4125, 2 GB (max 6 GB), 2× 1GbE. B&H **$299.99**. synology.com US MSRP **$299.99** (Frontdesk Review, 27 Jun 2026). Access **14.69 W**, HDD hibernation **4.41 W**, noise **22 dB(A)**, 60 W 100–240 V brick, 2-year warranty, Extended Warranty Plus in NA/EU.
  - Synology Certified Refurbished program: https://www.synology.com/en-eu/products/refurbished — process + 2-year warranty. US SKU stock was not a populated cart on the US product page when fetched.
  - Newegg refurbished DS224+: https://www.newegg.com/p/14P-000V-00GP1 first listed 24 Jul 2026.
- **Watts / noise:** 14.69 W access / 4.41 W hibernation / 22 dB(A) (Synology, measured with Synology HDDs).
- **Affiliate path + live URL:**
  - B&H (clean new) → https://www.bhphotovideo.com/c/product/1781611-REG/synology_2_bay_diskstation_ds224_compact.html
  - Official spec → https://www.synology.com/en-us/products/DS224+
  - Official CPO program (EU page) → https://www.synology.com/en-eu/products/refurbished
  - Newegg refurb listing (verify seller) → https://www.newegg.com/p/14P-000V-00GP1
- **Sources:** synology.com DS224+ spec; B&H $299.99; Synology refurbished program notes; Newegg 14P-000V-00GP1.
- **Search intent:** "synology certified refurbished" / "ds224+ amazon renewed" / "ds224+ price 2026"

### 12. UGREEN DXP4800 Plus vs fishing a used Synology on eBay

- **Title:** New UGREEN DXP4800 Plus: 10GbE in the box, $620, not a used DS918+
- **Slug:** `ugreen-dxp4800-plus-vs-used-synology`
- **Type:** comparison
- **Angle:** Distinct from `guides/first-nas.html` (which already shortlists this box). This post is specifically "do not buy a used Synology off eBay for 10G." New UGREEN has 10GbE + 2.5GbE, Intel Pentium Gold 8505, 8 GB DDR5 (max 64 GB), four bays. UGOS is the software risk. DSM is the reason to pay for a new DS224+ / DS923+ instead.
- **Real models + street 22 Aug 2026:**
  - UGREEN NASync DXP4800 Plus diskless. Official **$619.99** (was $729.99, $110 off) on nas.ugreen.com / ai.ugreen.com. Amazon ASIN B0D22JRHZB. UGREEN lab power: **42.36 W drive access / 18.12 W drive hibernation** (one Seagate 2 TB). Quiet mode **29–34 dB**. 2-year warranty.
  - Synology DS923+ often cited ~$600 before a 10G add-in card (UGREEN's own compare). New DS224+ is $300 and still 1GbE — different job.
  - Temptation: used DS918+ / DS920+ / DS1520+ eBay lots. Not affiliated.
- **Watts / noise:** 18–42 W depending on spin (UGREEN lab, one 2 TB HDD). Not a 1U. Has fans; 29–34 dB quiet mode is maker copy, not our meter.
- **Affiliate path + live URL:**
  - UGREEN official → https://nas.ugreen.com/products/ugreen-nasync-dxp4800-plus-nas-storage (redirects to ai.ugreen.com)
  - Amazon Associates → https://www.amazon.com/UGREEN-DXP4800-Plus-Attached-Diskless/dp/B0D22JRHZB
- **Sources:** UGREEN official spec and FAQ (22 Aug 2026 fetch); Amazon B0D22JRHZB; Labthrift first-nas guide.
- **Search intent:** "ugreen dxp4800 plus vs synology" / "used synology 10gbe" / "dxp4800 plus power consumption"

### 13. ASUS NUC 14 Pro vs a used Xeon-D 1U

- **Title:** ASUS NUC 14 Pro: the supported 4×4, not a used Xeon-D
- **Slug:** `asus-nuc-14-pro-vs-used-xeon-d`
- **Type:** review
- **Angle:** Used Xeon-D 1U / Supermicro pizza boxes used to be the "low-power enterprise" exception. In 2026 the retail successor to Intel NUC is ASUS NUC 14 Pro (NUC14RVH, Core Ultra 7 155H or Core 3 100U). One Intel i226-V 2.5G, Thunderbolt 4, toolless lid. More expensive than a Beelink. Quieter and more supported than a used 1U Xeon-D whose firmware is a forum thread.
- **Real models + street 22 Aug 2026:**
  - ASUS NUC 14 Pro kit / mini PC, NUC14RVH / NUC14RVH-B. ASUS eShop Core 3 100U **from $429**. Amazon configured Ultra 7 155H 32 GB / 2 TB ASIN B0D6RPYL9B snapshot **$1,189**. Pricehistory.app Ultra 7 16 GB / 1 TB recently **$1,059.99** (low $859, avg $976). Liliputing: bare Ultra 7 kit ~$660, 32 GB / 1 TB ~$996 at review time.
  - Temptation: used Supermicro Xeon-D 1U / Intel NUC 11/12 gray-market. Not the buy path.
- **Watts / noise:** Liliputing Windows idle **8.8 W**, Cinebench PL ~79 W average, shutdown 0.7 W. Homelab YouTube: idle ~10.5–12 W. Small NUC fan, not a 1U. 90 W brick on the Core 3 SKU (ASUS eShop).
- **Affiliate path + live URL:**
  - ASUS eShop → https://eshop.asus.com/us/asus-nuc-14-pro.html
  - ASUS US spec → https://www.asus.com/us/displays-desktops/nucs/nuc-mini-pcs/asus-nuc-14-pro/techspec/
  - Amazon Associates → https://www.amazon.com/NUC14RVH-Canyon-Computer-Display-Thunderbolt/dp/B0D6RPYL9B
  - Liliputing review (watts) → https://liliputing.com/asus-nuc-14-pro-review-this-meteor-lake-mini-pc-picks-up-where-intels-nuc-family-left-off/
- **Sources:** ASUS eShop from $429; Amazon B0D6RPYL9B; Liliputing idle 8.8 W; ASUS NUC 14 Pro product page.
- **Search intent:** "asus nuc 14 pro homelab" / "used xeon-d vs nuc" / "nuc14rvh power consumption"

### 14. New DAC + a known-chip NIC vs the mystery 10G card

- **Title:** Buy a new 10Gtek DAC and a named X710. Skip "works great" NICs.
- **Slug:** `new-dac-x710-vs-mystery-10g`
- **Type:** guide
- **Angle:** Extends the existing "mystery 10G card" warning in `used-vs-new.html` without rewriting that essay. The affiliated buys are a new 10Gtek SFP+ DAC and a new or Newegg-listed Intel X710-DA2 (or a 10Gtek card that states the X710-BM2 chip). Used random optics and unlabeled NICs stay the skip.
- **Real models + street 22 Aug 2026:**
  - 10Gtek SFP+ DAC 1 m, Cisco-compatible. Amazon ASIN B00WHS3NCA snapshot **$15.99**. Other 10Gtek 1 m listings ~$20.99 (CA). 3 m listings ~$28.
  - Intel Ethernet Converged Network Adapter X710-DA2. Newegg snapshots **$237.22** (14U-0045-00010) and **$279.25** (0XM-009Y-00017). ServerSupply new **$220**. 10Gtek-branded X710-BM2 dual SFP+ on Newegg from ~$165.
  - Pairs with CRS305 / QSW-2104-2S / MS-01 SFP+ (posts 2, 5, 6).
- **Watts / noise:** Passive DAC. Intel X710-DA2 typical a few watts (vendor tables often ~3–6 W depending on optics; we did not re-measure). No fans on the cable.
- **Affiliate path + live URL:**
  - Amazon Associates DAC 1 m → https://www.amazon.com/10G-SFP-DAC-Cable-SFP-H10GB-CU1M/dp/B00WHS3NCA
  - Newegg X710-DA2 → https://www.newegg.com/p/14U-0045-00010
  - Newegg X710-DA2 alt → https://www.newegg.com/p/0XM-009Y-00017
- **Sources:** Amazon B00WHS3NCA $15.99; Newegg X710 listings; Intel X710-DA2 product family. Do not quote a used eBay NIC price.
- **Search intent:** "x710-da2 homelab" / "10gtek dac unifi mikrotik" / "used 10g nic ebay"

### 15. Beelink N150 as the used-1U electric bill

- **Title:** A $339 Beelink N150 vs the yearly cost of a used 1U
- **Slug:** `beelink-n150-vs-used-1u-bill`
- **Type:** comparison
- **Angle:** Distinct from `guides/n100-mini-pc.html` (N100 vs N150 shopping). This is only the electric-bill argument: a new Beelink Mini S13 (or official EQ14) at teens of watts vs an R630-class 1U at ~70–150 W. Do not re-rank N100 vs N150.
- **Real models + street 22 Aug 2026:**
  - Beelink Mini S13, Intel N150, Amazon B09DPV3D4N snapshot **$339** (12 GB LPDDR5 / 500 GB, 2.5G LAN). Maker copy: "less than 1 kWh/day." Existing Labthrift n100 guide: wall power high-single to mid-teens watts.
  - Beelink EQ14 official: **$375 / $429**, Intel N150, **dual 1G** (bee-link.com). Amazon third-party titles claim dual 2.5G — **do not repeat that as fact**. PromptQuorum Jul 2026 street ~$189–199 was a different snapshot and is volatile; minipclab.com Jul 2026 says some old Amazon targets no longer resolve to EQ14.
  - Used 1U: R630 ~70 W idle typical (Hardwarehoard); R720/R730 80–120 W idle (TechFuel 2026 table).
- **Watts / noise:** N150 class idle commonly ~6–12 W in third-party reviews (PromptQuorum ~6 W; minipcdeals ~8–10 W). Small fan. 1U is the space heater.
- **Affiliate path + live URL:**
  - Amazon Associates Mini S13 → https://www.amazon.com/Beelink-Windows-Desktop-Gigabit-Ethernet/dp/B09DPV3D4N
  - Official EQ14 → https://www.bee-link.com/products/beelink-eq14-n150
- **Sources:** Amazon B09DPV3D4N $339; bee-link.com EQ14 $375/$429 dual 1G; Hardwarehoard R630 ~70 W; TechFuel 2026 idle table; Labthrift n100 guide.
- **Search intent:** "n150 vs used server power" / "beelink mini s13 homelab" / "used dell r630 electricity cost"

---

## Killed ideas (do not write)

| Idea | Why killed |
| --- | --- |
| Used eBay Cisco Catalyst / Aruba / Juniper / Dell / HPE lots | Cannot affiliate cleanly. User constraint. |
| "Best used C3560 on eBay 2026" | Same. The replacement post is #1. |
| HPE Renew closet switch or ProLiant for a closet | HPE Renew is a channel/VAR program (hpe-renew.hpe.com). Newegg "HPE Renew" hits in Aug 2026 are enterprise SSDs (e.g. 1.6 TB SAS), not a closet node. Amazon has been reported as removing many HP Renewed listings. **No live closet SKU with a clean Associates path on 22 Aug 2026.** Revisit only if a specific Renew switch/server appears on Amazon/Newegg with a real product page. |
| Amazon Renewed OptiPlex / EliteDesk as "official CPO" | Amazon Renewed is third-party restore, not HP/Dell CPO. Easy to mislabel. Skip until a named HP Renew or Dell Outlet ASIN is verified. |
| Beelink EQ14 as a dual-2.5G soft router | Official bee-link.com lists **dual 1000 Mbps**. Amazon titles say 2.5G. Do not write the 2.5G claim. Protectli is the dual/quad 2.5G buy (#4). |
| Used Xeon-D / Supermicro Tiny as the hero | The honest exception class, but the buy path is still eBay. Point at MS-01 / NUC 14 Pro instead. |
| Rewrite of `used-vs-new.html` | Already shipped. Link it. |

## Do not duplicate (already on the site)

- `guides/used-vs-new.html` — $40 gift vs 90 W heater.
- `guides/2-5g-switch.html` — TL-SG108S-M2 / TEG-S380 / TEG-3102WS shopping list. Post #1 is the myth, not the list.
- `guides/n100-mini-pc.html` — N100 vs N150 vs GMKtec vs CWWK. Post #15 is the 1U bill, not the chip shootout.
- `guides/first-nas.html` — first NAS shortlist. Post #12 is vs used Synology eBay.
- `guides/cheap-poe.html` — two APs, TL-SG1005P default. Post #10 is UniFi Ultra vs used Catalyst PoE.

## Editorial rules for whoever writes these

- No fake burn-in. Say "maker spec / published review / street snapshot."
- Date every price. They move.
- Name the used temptation, do not link eBay lots.
- If an Amazon title disagrees with the maker spec (EQ14 NIC, TEG-3102WS wattage), believe the maker page and say so.
- Affiliate tags are not live. Use clean product URLs so tags can be added later.
- Street prices as of Aug 2026. Not a burn-in lab yet.

## Source index (live URLs fetched or searched 22 Aug 2026)

- https://www.amazon.com/TP-Link-TL-SG108S-M2-Multi-Gigabit-Unmanaged-Operation/dp/B0CMFX748Y
- https://pricehistory.app/p/tp-link-tl-sg108s-m2-8-port-9DGK3lG5
- https://www.trendnet.com/products/product-detail?prod=115_TEG-S380
- https://www.amazon.com/TRENDnet-2-5GBASE-T-Compatible-10-100-1000Mbps-TEG-S380/dp/B08XWKF55C
- https://www.minisforum.com/products/minisforum-ms-01
- https://www.jdhodges.com/blog/minisforum-ms-01-proxmox-review/
- https://www.servethehome.com/minisforum-ms-a2-review-an-almost-perfect-amd-ryzen-intel-10gbe-homelab-system/
- https://store.minisforum.com/products/minisforum-ms-a2-workstation
- https://protectli.com/product/vp2420e/
- https://protectli.com/product/vp2420/
- https://kb.protectli.com/kb/power-draws-for-the-vault-w-ups-uptime-estimates/
- https://kb.protectli.com/kb/vp2400-series-hardware-overview/
- https://mikrotik.com/product/crs305_1g_4s_in
- https://www.amazon.com/gp/product/B07LFKGP1L
- https://www.servethehome.com/mikrotik-crs305-1g-4sin-review-4-port-must-have-10gbe-switch/
- https://www.qnap.com/en/product/qsw-2104-2s/specs/hardware
- https://www.amazon.com/QNAP-QSW-2104-2S-A-US-Ethernet-Switch/dp/B0BFC6QFRL
- https://store.ui.com/us/en/products/usw-lite-8-poe
- https://store.ui.com/us/en/products/usw-ultra-60w
- https://dl.ubnt.com/ds/usw-lite-8-poe
- https://www.synology.com/en-us/products/DS224+
- https://www.synology.com/en-eu/products/refurbished
- https://www.bhphotovideo.com/c/product/1781611-REG/synology_2_bay_diskstation_ds224_compact.html
- https://nas.ugreen.com/products/ugreen-nasync-dxp4800-plus-nas-storage
- https://www.amazon.com/UGREEN-DXP4800-Plus-Attached-Diskless/dp/B0D22JRHZB
- https://eshop.asus.com/us/asus-nuc-14-pro.html
- https://liliputing.com/asus-nuc-14-pro-review-this-meteor-lake-mini-pc-picks-up-where-intels-nuc-family-left-off/
- https://www.amazon.com/NUC14RVH-Canyon-Computer-Display-Thunderbolt/dp/B0D6RPYL9B
- https://www.bee-link.com/products/beelink-eq14-n150
- https://www.amazon.com/Beelink-Windows-Desktop-Gigabit-Ethernet/dp/B09DPV3D4N
- https://www.amazon.com/10G-SFP-DAC-Cable-SFP-H10GB-CU1M/dp/B00WHS3NCA
- https://www.newegg.com/p/14U-0045-00010
- https://www.hardwarehoard.com/prices/dell-poweredge-r630
- https://hpe-renew.hpe.com/ie/en/Overview/
