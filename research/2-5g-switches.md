# Labthrift research: 2.5G switch post ideas

**Researched:** Saturday 22 Aug 2026 (America/Chicago).  
**Method:** WebSearch / WebFetch on maker pages + Amazon / Newegg / B&H / official stores. GetDynamicTools `cursor` namespace was not available in this environment.  
**House style:** spec-and-street-price editorial. No invented burn-in. Prices move; cite the live tag before publish.  
**Already shipped:** `guides/2-5g-switch.html` (21 Aug 2026) is the four-SKU closet roundup — TL-SG108S-M2, TEG-S380, TL-SG108-M2, TEG-3102WS. Do **not** write another "best 8-port unmanaged 2.5G" that reprints that table.

Affiliate constraint: every SKU below has a current new (or official-refurb) listing on Amazon, Newegg, B&H, or a maker storefront. Used eBay lots and rotating no-name ASINs are on the skip list.

---

## Skip list (do not pitch as closet defaults)

| Item | Why skip | Notes |
| --- | --- | --- |
| SODOLA / GoodTop / HASIVO / MokerLink / generic "8-port 2.5G + 10G SFP+" Amazon toys | Rotating ASINs, no-name silicon, warranty is a forum post | Show up in 2026 "best of" listicles. Not affiliable in a stable way. |
| 5-port toys with **one** 2.5G uplink + four leftover 1G ports | Does not do the job the buyer googled | Existing guide already says this. Repeat in every 5-port post. |
| TP-Link **SG3210XHP-M2** / TL-SG3210XHP-M2 as a *primary* closet buy | 1U rack, **2 fans**, 240 W PoE PSU, ~$420 | Valid SKU (Amazon B092VFS6K3). Use only as the loud/expensive side of a compare. |
| QNAP **QSW-M2108-2C** | 1× PWM fan, QNAP-store **$349 and OOS**, Newegg ~$449 | Combo 10G copper is real. Noise + price + stock kill it for this audience. ASIN B08PDF97BX exists. |
| QNAP **QSW-1105-5T** | Maker store **$109, OOS**; Newegg OOS | ASIN B097CPP3J5 is real. Do not build a review on a chronically empty shelf. |
| TP-Link **TL-SG108-M2** (non-S) | Older 8×2.5G sibling; street often $130–150 | Already in the shipped roundup as "only if cheaper than S-M2." |
| Zyxel **XS1930-10** | Smart fan, 8× 100M–10G copper, store ~€465 | Overkill and not closet-quiet. |
| MikroTik **CRS326-4C+20G+2Q+RM** | 20×2.5G + 40G QSFP, ~$999 when tested (STH) | 24-port heater class. |
| Used Cisco / Aruba 24-port 1G (2960, 2930F, Instant On 1930 24G) | 1G ports, 40–90 W idle, often fans | Off-mission for a 2.5G upgrade. Instant On 8-port 1G is a different niche. |
| UniFi Switch Flex 2.5G | Ecosystem tax; only if the lab is already UniFi | Not researched as a primary affiliate SKU this pass. |
| 24-port multi-gig PoE racks | Heat, fans, 300–700 W bricks | Same skip as the shipped guide's "Omada PoE monster." |

Official-refurb exception: TRENDnet Renewed TEG-S562 (Amazon B0D38J988S, ~$46) and TEG-S380 Renewed (B0C15XS16D) are maker-backed 90-day. Fine as a footnote, not as the hero SKU.

---

## Ranked post ideas (15)

Rank is conversion × search intent × how little it overlaps the shipped roundup. Titles are editorial, not invented sale headlines.

---

### 1. TRENDnet TEG-S562 — 4×2.5G + 2×10G SFP+, unmanaged, fanless

| | |
| --- | --- |
| **Type** | review |
| **Title** | TRENDnet TEG-S562: a 2.5G closet switch with a real 10G DAC |
| **Slug** | trendnet-teg-s562 |
| **Angle** | The shipped roundup sends people who need a 10G uplink to the ~$200 TEG-3102WS. This 6-port unmanaged box is the same uplink idea without VLANs or eight copper ports. Spec-and-street: four 2.5GBASE-T, two 10G SFP+, 60 Gbps fabric, fanless metal, NDAA/TAA, lifetime paper. |
| **SKUs / price** | **TEG-S562** (V1). Amazon street **$51.99** (22 Aug 2026 listing). Newegg also lists it (one offer **$57.99**, another **$108.99** — use Amazon or TRENDnet, not the inflated 3P). Official-refurb Amazon **$45.99**. Maker page does not print a list price on the product URL below. |
| **Noise / PoE / fan** | Fanless. No PoE. Desktop / wall. Max draw not printed on the Amazon listing; Newegg one-offer text says 5.86 W. |
| **Affiliate path** | Amazon (primary). Newegg (backup). TRENDnet maker page (spec, not cart). |
| **Live URLs** | https://www.amazon.com/TRENDnet-Unmanaged-2-5GBASE-T-Protection-TEG-S562/dp/B0CJMTT9DF — https://www.trendnet.com/products/2-5g-switch-sfpplus/6-port-multi-gig-switch-TEG-S562 — https://www.newegg.com/trendnet-teg-s562/p/0XP-001A-00926 |
| **Search intent** | `TEG-S562 review`, `2.5G switch with 10G SFP+`, `cheap 2.5G switch 10G uplink`, `TRENDnet 6 port multi-gig` |

---

### 2. TP-Link TL-SG105S-M2 — 5-port unmanaged 2.5G

| | |
| --- | --- |
| **Type** | review |
| **Title** | TP-Link TL-SG105S-M2: the 5-port 2.5G closet default |
| **Slug** | tp-link-tl-sg105s-m2 |
| **Angle** | High-volume "5 port 2.5G switch" query. The shipped guide assumes eight ports; a lot of one-NAS + one-PC closets only need five. Fanless metal, 25 Gbps fabric, 5.81 W max, Cat5e 2.5G. |
| **SKUs / price** | **TL-SG105S-M2**. Amazon listing / MRP **$59.99**. Gizmodo (22 Jun 2026) saw **$39**. pricehistory.app logged **$34.99** on 4 Aug 2026 (lowest) against MRP $59.99. Newegg one listing **$108.99** — ignore 3P markups. |
| **Noise / PoE / fan** | Fanless. No PoE. External 9 V / 0.6 A brick. 99.8 × 98 × 25 mm. |
| **Affiliate path** | Amazon ASIN **B0CMXXPTVH**. TP-Link US maker page. |
| **Live URLs** | https://www.amazon.com/TP-Link-TL-SG105S-M2-Multi-Gigabit-Unmanaged-Operation/dp/B0CMXXPTVH — https://www.tp-link.com/us/business-networking/soho-switch-unmanaged/tl-sg105s-m2/ — https://www.gizmodo.com/this-5-port-2-5g-network-switch-just-hit-its-all-time-low-on-amazon-177000-reviews-dont-lie-2000775463 |
| **Search intent** | `TL-SG105S-M2`, `5 port 2.5G switch`, `best 5 port 2.5GbE switch`, `TP-Link 2.5G 5 port` |

---

### 3. 8-port vs 5-port 2.5G (buyer guide)

| | |
| --- | --- |
| **Type** | guide |
| **Title** | 8-port vs 5-port 2.5G switch for a closet lab |
| **Slug** | 8-port-vs-5-port-2-5g-switch |
| **Angle** | Decision post that funnels the shipped 8-port default *or* the 5-port review. Count real endpoints (router LAN, NAS, desktop, AP backhaul, mini PC) and add two. Do not reprint the four-SKU table; link it. |
| **SKUs / price** | **TL-SG105S-M2** — MSRP ~$60, street $35–40 on 2026 sales (see #2). **TL-SG108S-M2** — MSRP **$79.99**, Tom's Hardware 26 Jun 2026 Prime **$49.99** (ASIN B0CMFX748Y). **TEG-S350** — maker **$65.99**, Amazon **$48.99**, B&H **$59.99**. **TEG-S380** — maker **$87.99**, Newegg **$79.99**. **MS305** — maker/Amazon **$99.99** (was $134.99). **MS308** — maker **$109.99** (was $199.99). |
| **Noise / PoE / fan** | All six are fanless, no PoE. Netgear 8-port lists 0 fans, 7.98 W max. TEG-S380 V2 max 7.26 W. |
| **Affiliate path** | Amazon on the TP-Link + TRENDnet + Netgear ASINs. Maker pages for spec. |
| **Live URLs** | https://www.amazon.com/TP-Link-TL-SG105S-M2-Multi-Gigabit-Unmanaged-Operation/dp/B0CMXXPTVH — https://www.tomshardware.com/networking/network-switches/tp-links-8-port-2-5g-unmanaged-ethernet-switch-is-a-smokin-bargain-at-usd50-upgrade-your-home-network-for-half-price — https://www.trendnet.com/store/products/2-5g-switch/5-port-unmanaged-2-5g-switch-TEG-S350_v2 — https://www.netgear.com/business/wired/switches/unmanaged/ms308/ |
| **Search intent** | `8 port vs 5 port 2.5G switch`, `do I need 8 port 2.5G`, `5 port 2.5GbE enough`, `best small 2.5G switch` |

---

### 4. 2.5G copper vs a 10G uplink (buyer guide)

| | |
| --- | --- |
| **Type** | guide |
| **Title** | 2.5G vs a 10G uplink: when the extra SFP+ is worth it |
| **Slug** | 2-5g-vs-10g-uplink-switch |
| **Angle** | Closet labs buy eight 2.5G ports and then choke the NAS on a 2.5G copper hop. This post is the "buy the SFP+ box only if one flow can fill 2.5G" note from the shipped deck, expanded with real SKUs. |
| **SKUs / price** | All-2.5G: **TL-SG108S-M2** (~$50–80), **TEG-S380** (maker $87.99 / street ~$74–80). With 10G SFP+: **TEG-S562** (Amazon $51.99), **QSW-2104-2S-A-US** (QNAP store **$129 in stock**; Amazon **$116**; B&H listed **$79.99** on a cut from $129.99), **TEG-3102WS** (Amazon **$169.98–$214.99**, Newegg **$199.99**), **SG3210X-M2** (Amazon live; CA street **$349.99**). Copper 10G twin: **QSW-2104-2T-A-US** (B&H **$149**). |
| **Noise / PoE / fan** | TEG-S562, QSW-2104-2S, TEG-3102WS, SG3210X-M2: fanless, no PoE. QSW-2104-2S max **12 W**. |
| **Affiliate path** | Amazon + B&H (QNAP 2104-2S / 2104-2T) + QNAP store + TRENDnet. |
| **Live URLs** | https://www.amazon.com/TRENDnet-Unmanaged-2-5GBASE-T-Protection-TEG-S562/dp/B0CJMTT9DF — https://store.qnap.com/qsw-2104-2s-a-us.html — https://www.bhphotovideo.com/c/product/1733420-REG/qnap_qsw_2104_2s_a_us_desktop_qsw_2104_2s_us_unmanaged_switch.html — https://www.amazon.com/TRENDnet-Multi-Gig-2-5GBASE-T-Protection-TEG-3102WS/dp/B0BPJZCQ5J |
| **Search intent** | `2.5G switch with 10G uplink`, `do I need 10G SFP+ with 2.5G switch`, `2.5G vs 10G switch home lab`, `10G DAC to NAS 2.5G access` |

---

### 5. TEG-S562 vs QNAP QSW-2104-2S (same recipe, different brand)

| | |
| --- | --- |
| **Type** | compare |
| **Title** | TRENDnet TEG-S562 vs QNAP QSW-2104-2S |
| **Slug** | teg-s562-vs-qsw-2104-2s |
| **Angle** | Both are unmanaged, fanless, 4×2.5G + 2×10G SFP+. TRENDnet is the street-price win and lifetime/NDAA paper. QNAP adds loop-detect LED, 16K MAC table, and a NAS-brand halo. Do not pick a winner without the live price: QNAP store $129 vs Amazon TRENDnet ~$52 is not a close fight unless B&H has the QNAP at $80 again. |
| **SKUs / price** | **TEG-S562** Amazon **$51.99**. **QSW-2104-2S-A-US** QNAP store **$129** (in stock); Amazon ASIN B0BFC6QFRL **$116**; B&H **$79.99** (was $129.99). QNAP 2-year warranty vs TRENDnet lifetime (US/Canada). |
| **Noise / PoE / fan** | Both fanless, no PoE. QNAP max 12 W, 12 V / 1 A. |
| **Affiliate path** | Amazon both. B&H + QNAP store for the QNAP. |
| **Live URLs** | https://www.amazon.com/TRENDnet-Unmanaged-2-5GBASE-T-Protection-TEG-S562/dp/B0CJMTT9DF — https://www.amazon.com/QNAP-QSW-2104-2S-A-US-Ethernet-Switch/dp/B0BFC6QFRL — https://store.qnap.com/qsw-2104-2s-a-us.html — https://www.qnap.com/en/product/qsw-2104-2s/specs/hardware |
| **Search intent** | `TEG-S562 vs QSW-2104-2S`, `QNAP vs TRENDnet 2.5G 10G switch`, `QSW-2104-2S review`, `best unmanaged 2.5G 10G switch` |

---

### 6. TP-Link TL-SG105PP-M2 — 5-port 2.5G with 4× PoE++

| | |
| --- | --- |
| **Type** | review |
| **Title** | TP-Link TL-SG105PP-M2: 2.5G PoE++ without a rack |
| **Slug** | tp-link-tl-sg105pp-m2 |
| **Angle** | Two Wi-Fi 6/7 APs plus a 2.5G NAS is a real closet. This unmanaged box is fanless, 4× 802.3bt Type 3 PoE++ (60 W/port), **123 W** budget, fifth port is 2.5G data-only. Cheaper and quieter than the 1U Omada PoE racks. |
| **SKUs / price** | **TL-SG105PP-M2**. Amazon US **$140** (ASIN B0CLM8W5JY). Newegg.ca listed **$199.99**. Maker page has no USD cart price. |
| **Noise / PoE / fan** | Fanless metal. PoE++ ports 1–4. Idle 7.57 W; 143.37 W with 123 W PD (220 V figures on TP-Link US). External 53.5 V / 2.43 A brick — that brick will be the warm part. |
| **Affiliate path** | Amazon primary. TP-Link US spec page. |
| **Live URLs** | https://www.amazon.com/TP-Link-TL-SG105PP-M2-Gigabit-Multi-Gigabit-Recovery/dp/B0CLM8W5JY — https://www.tp-link.com/us/business-networking/unmanaged-switch/tl-sg105pp-m2/ |
| **Search intent** | `TL-SG105PP-M2`, `2.5G PoE switch 5 port`, `fanless 2.5G PoE++ switch`, `PoE switch for WiFi 7 AP 2.5G` |

---

### 7. Managed vs unmanaged 2.5G (buyer guide)

| | |
| --- | --- |
| **Type** | guide |
| **Title** | Managed vs unmanaged 2.5G: when VLANs are worth the tax |
| **Slug** | managed-vs-unmanaged-2-5g-switch |
| **Angle** | The shipped deck says "unmanaged unless you already know you need VLANs." This post is the decision tree: IoT VLAN, trunk to a firewall, LACP to a NAS. Easy-smart (Netgear Plus) vs web-smart (TRENDnet) vs Omada L2+ vs MikroTik dual-boot. |
| **SKUs / price** | Unmanaged: **TL-SG108S-M2** (~$50–80), **MS308** (maker **$109.99**). Easy-smart: **MS305E** Newegg **$89.99** (was $159.99); **MS308E** Amazon ASIN B0D98WSJ4B (live; no stable street captured this pass — check at write). Web-smart: **TEG-3102WS** Amazon **$169.98–$214.99**. Omada L2+: **SG3210X-M2** (Amazon B0D461YN33). MikroTik: **CRS310-8G+2S+IN** MSRP **$219**. |
| **Noise / PoE / fan** | Unmanaged + Netgear Plus + TEG-3102WS + SG3210X-M2: fanless. CRS310: **1 fan**, 21 W without attachments / 34 W max. None of the above are PoE except as noted in other posts. |
| **Affiliate path** | Amazon + Netgear.com + Newegg + MikroTik.com. |
| **Live URLs** | https://www.amazon.com/NETGEAR-8-Port-Multi-Gigabit-Ethernet-Switch/dp/B0D98WSJ4B — https://www.amazon.com/TRENDnet-Multi-Gig-2-5GBASE-T-Protection-TEG-3102WS/dp/B0BPJZCQ5J — https://www.amazon.com/TP-Link-SG3210X-M2-Centralized-Management-snooping/dp/B0D461YN33 — https://www.netgear.com/business/wired/switches/unmanaged/ms308/ |
| **Search intent** | `managed vs unmanaged 2.5G switch`, `do I need a managed 2.5G switch`, `2.5G switch VLAN home lab`, `easy smart 2.5G switch` |

---

### 8. TP-Link SG3210X-M2 — fanless Omada 8×2.5G + 2×10G SFP+

| | |
| --- | --- |
| **Type** | review |
| **Title** | TP-Link SG3210X-M2: fanless managed 2.5G with 10G uplinks |
| **Slug** | tp-link-sg3210x-m2 |
| **Angle** | The quiet managed box the shipped guide does not review by itself. 8×2.5G, 2×10G SFP+, L2+ / Omada, **fanless**, 15.0 W max @ 110 V, 294 × 180 × 44 mm desktop-or-rack. This is the "I grew VLANs" upgrade, not the PoE rack. |
| **SKUs / price** | **SG3210X-M2** (also sold as Omada Access Pro). Amazon US ASIN **B0D461YN33** (live). Amazon.ca **$349.99**. A Canadian reseller (Modcom) **$325.92**. US street not printed as a single Amazon buy-box number in this pass — confirm at write; do not invent. |
| **Noise / PoE / fan** | Fanless (maker: "Fanless Design"). No PoE. Internal PSU, power cord in box. |
| **Affiliate path** | Amazon. TP-Link / Omada maker pages. |
| **Live URLs** | https://www.amazon.com/TP-Link-SG3210X-M2-Centralized-Management-snooping/dp/B0D461YN33 — https://www.omadanetworks.com/us/business-networking/omada-switch-access-pro/sg3210x-m2/ — https://www.tp-link.com/en/business-networking/omada-sdn-switch/sg3210x-m2/ |
| **Search intent** | `SG3210X-M2 review`, `fanless managed 2.5G switch`, `Omada 2.5G switch no PoE`, `SG3210X-M2 vs TEG-3102WS` |

---

### 9. SG3210X-M2 vs TRENDnet TEG-3102WS

| | |
| --- | --- |
| **Type** | compare |
| **Title** | TP-Link SG3210X-M2 vs TRENDnet TEG-3102WS |
| **Slug** | sg3210x-m2-vs-teg-3102ws |
| **Angle** | Same port recipe (8×2.5G + 2×10G SFP+), both fanless, both managed. TRENDnet is the street-price / lifetime / NDAA pick already in the shipped table. Omada is the controller / static-route / app pick. Distinct from the four-SKU roundup because it is a two-horse VLAN race. |
| **SKUs / price** | **TEG-3102WS** Amazon **$169.98** (one index) / **$214.99** (another Amazon offer snap) / Newegg **$199.99**. **SG3210X-M2** Amazon B0D461YN33; CA **$349.99**. If US Omada street sits near $230–350, TRENDnet still wins on price; Omada wins on SDN. Recheck both buy boxes at write. |
| **Noise / PoE / fan** | Both fanless, no PoE. TEG-3102WS uses an external 12 V / 1.5 A brick (Amazon included-components). SG3210X-M2 is IEC cord / internal. |
| **Affiliate path** | Amazon both. TRENDnet + Omada maker pages. |
| **Live URLs** | https://www.amazon.com/TP-Link-SG3210X-M2-Centralized-Management-snooping/dp/B0D461YN33 — https://www.amazon.com/TRENDnet-Multi-Gig-2-5GBASE-T-Protection-TEG-3102WS/dp/B0BPJZCQ5J — https://www.trendnet.com/support/support-detail.asp?prod=110_TEG-3102WS — https://www.newegg.com/trendnet-teg-3102ws/p/0XP-001A-008X9 |
| **Search intent** | `SG3210X-M2 vs TEG-3102WS`, `TRENDnet vs Omada 2.5G managed`, `best fanless managed 2.5G switch`, `TEG-3102WS review` |

---

### 10. TP-Link SG2210XMP-M2 — fanless 8×2.5G PoE+ / 160 W

| | |
| --- | --- |
| **Type** | review |
| **Title** | TP-Link SG2210XMP-M2: fanless 2.5G PoE+ for two APs |
| **Slug** | tp-link-sg2210xmp-m2 |
| **Angle** | Closet-sane PoE. Desktop/wall, **fanless**, 8×2.5G PoE+ (30 W), **160 W** budget, 2×10G SFP+, Omada smart. This is the SKU to review instead of the 2-fan 240 W 1U box. |
| **SKUs / price** | **SG2210XMP-M2**. Amazon ASIN **B0D5Z3NMG9**. pricehistory.app **$249.99** current (lowest **$224.99** on 18 Jul 2026; average $302). Provantage **$249.99**. Ace Peripherals **$429–$446** is a high 3P — do not quote as street. |
| **Noise / PoE / fan** | Fanless. 160 W PoE+. External 53.5 V / 3.37 A adapter. Max 180.1 W with 160 W PD. 226 × 131 × 35 mm. |
| **Affiliate path** | Amazon primary. Provantage as a priced US backup. TP-Link/Omada spec via reseller pages. |
| **Live URLs** | https://www.amazon.com/TP-Link-SG2210XMP-M2-8-Port-2-5GBASE-T-2-Port/dp/B0D5Z3NMG9 — https://www.provantage.com/tp-link-sg2210xmp-m2~7TPLK1CW.htm — https://pricehistory.app/p/tp-link-sg2210xmp-m2-omada-8-port-n5iqchQ2 |
| **Search intent** | `SG2210XMP-M2`, `fanless 2.5G PoE switch`, `Omada 2.5G PoE 8 port`, `160W 2.5G PoE switch` |

---

### 11. SG2210XMP-M2 vs SG3210XHP-M2 (quiet PoE vs loud 240 W)

| | |
| --- | --- |
| **Type** | compare |
| **Title** | SG2210XMP-M2 vs SG3210XHP-M2: 160 W fanless or 240 W with two fans |
| **Slug** | sg2210xmp-m2-vs-sg3210xhp-m2 |
| **Angle** | Same port count, same 10G uplinks, both Omada. The HP is the listicle default. For a closet it is the skip: 1U, **2 fans**, 240 W budget, Amazon **$419.99**. The XMP is the one that can sit next to a NAS overnight. |
| **SKUs / price** | **SG2210XMP-M2** Amazon ~**$225–250**. **SG3210XHP-M2** / TL-SG3210XHP-M2 Amazon **$419.99** (ASIN B092VFS6K3). Senetic UK £373.36 ex VAT (11 Mar 2026 snap) — US cite Amazon. |
| **Noise / PoE / fan** | XMP: fanless, 160 W, brick. HP: **2 fans**, 240 W, 17.2 W idle / ~292 W with PD, 440 × 180 × 44 mm rack. |
| **Affiliate path** | Amazon both. |
| **Live URLs** | https://www.amazon.com/TP-Link-SG2210XMP-M2-8-Port-2-5GBASE-T-2-Port/dp/B0D5Z3NMG9 — https://www.amazon.com/TP-Link-TL-SG3210XHP-M2-Multi-Gigabit-Integrated-Protection/dp/B092VFS6K3 — https://www.omadanetworks.com/us/business-networking/omada-switch-access-pro/tl-sg3210xhp-m2/ — https://www.tp-link.com/en/business-networking/poe-switch/tl-sg3210xhp-m2/ |
| **Search intent** | `SG2210XMP-M2 vs SG3210XHP-M2`, `Omada 2.5G PoE fanless`, `SG3210XHP-M2 noisy`, `best 2.5G PoE switch home` |

---

### 12. TL-SG105S-M2 vs TRENDnet TEG-S350

| | |
| --- | --- |
| **Type** | compare |
| **Title** | TP-Link TL-SG105S-M2 vs TRENDnet TEG-S350 |
| **Slug** | tl-sg105s-m2-vs-teg-s350 |
| **Angle** | Two name-brand fanless 5×2.5G unmanaged boxes. TP-Link wins street and Amazon volume. TRENDnet wins lifetime + NDAA/TAA. Specs are twins (25 Gbps, 4K MAC, 12 KB jumbo, Cat5e). This is the 5-port version of the shipped 8-port TP-Link-vs-TRENDnet choice, not a reprint. |
| **SKUs / price** | **TL-SG105S-M2** MSRP **$59.99**, sale street **$35–39**. **TEG-S350** V2 maker **$65.99**, Amazon **$48.99** (ASIN B08XWK4HNT), B&H **$59.99**. |
| **Noise / PoE / fan** | Both fanless, no PoE. TEG-S350 max **9.5 W**, 12 V / 1 A. TL-SG105S-M2 max **5.81 W**. |
| **Affiliate path** | Amazon both. TRENDnet store + B&H for TEG-S350. |
| **Live URLs** | https://www.amazon.com/TP-Link-TL-SG105S-M2-Multi-Gigabit-Unmanaged-Operation/dp/B0CMXXPTVH — https://www.amazon.com/TRENDnet-2-5GBASE-T-Compatible-10-100-1000Mbps-TEG-S350/dp/B08XWK4HNT — https://www.trendnet.com/store/products/2-5g-switch/5-port-unmanaged-2-5g-switch-TEG-S350_v2 |
| **Search intent** | `TL-SG105S-M2 vs TEG-S350`, `TRENDnet vs TP-Link 5 port 2.5G`, `TEG-S350 review`, `best 5 port 2.5G switch` |

---

### 13. Netgear MS308 vs TP-Link TL-SG108S-M2

| | |
| --- | --- |
| **Type** | compare |
| **Title** | Netgear MS308 vs TP-Link TL-SG108S-M2 |
| **Slug** | netgear-ms308-vs-tl-sg108s-m2 |
| **Angle** | Brand-trust shoppers type "Netgear 2.5G switch" and land on a metal 8-port that costs more than the shipped TP-Link default. Honest spec compare: both fanless unmanaged 8×2.5G. Netgear.com **$109.99** (was $199.99). TP-Link MSRP **$79.99**, Prime-week street **$49.99**. Buy Netgear only if the warranty/support story matters more than ~$30–60. |
| **SKUs / price** | **MS308-100NAS**. Maker **$109.99**. Amazon new ASIN **B0D54STHFZ** (one snap **$129.99**). Newegg item N82E16833222332 (list **$199.99**). Official-refurb Amazon B0F1DCW98M exists. **TL-SG108S-M2** Amazon **B0CMFX748Y**, MSRP $79.99, Tom's 26 Jun 2026 **$49.99**. |
| **Noise / PoE / fan** | Both fanless, no PoE. MS308: 0 fans, 7.98 W max (Netgear spec table). |
| **Affiliate path** | Amazon + Netgear.com + Newegg. |
| **Live URLs** | https://www.netgear.com/business/wired/switches/unmanaged/ms308/ — https://www.amazon.com/NETGEAR-8-Port-2-5GB-Switch-Multi-Gigabit/dp/B0D54STHFZ — https://www.newegg.com/netgear-ms308-8-x-rj45/p/N82E16833222332 — https://www.tomshardware.com/networking/network-switches/tp-links-8-port-2-5g-unmanaged-ethernet-switch-is-a-smokin-bargain-at-usd50-upgrade-your-home-network-for-half-price |
| **Search intent** | `MS308 vs TL-SG108S-M2`, `Netgear MS308 review`, `Netgear 8 port 2.5G switch`, `MS308 vs TP-Link` |

---

### 14. QNAP QSW-2104-2S — unmanaged 4×2.5G + 2×10G SFP+ (NAS pairing)

| | |
| --- | --- |
| **Type** | review |
| **Title** | QNAP QSW-2104-2S: unmanaged 2.5G with two 10G SFP+ for a NAS |
| **Slug** | qnap-qsw-2104-2s |
| **Angle** | Single-SKU review for people who already own a QNAP (or any SFP+ NAS) and want plug-and-play + loop detect, not VLANs. Fanless, 12 W, 2-year warranty. Link the TEG-S562 compare instead of padding this with eight-port copper. Sibling **QSW-2104-2T-A-US** (2×10GBASE-T + 4×2.5G, B&H **$149**, Amazon B0974XNGJL) is the copper-10G footnote, not a second review. |
| **SKUs / price** | **QSW-2104-2S-A-US**. QNAP store **$129, in stock**. Amazon **$116** (B0BFC6QFRL). B&H **$79.99** (was $129.99) — use B&H when that cut is live. |
| **Noise / PoE / fan** | Fanless. No PoE. 12 V / 1 A, 12 W max. Class B. |
| **Affiliate path** | B&H (when on cut) + Amazon + QNAP store. |
| **Live URLs** | https://store.qnap.com/qsw-2104-2s-a-us.html — https://www.amazon.com/QNAP-QSW-2104-2S-A-US-Ethernet-Switch/dp/B0BFC6QFRL — https://www.bhphotovideo.com/c/product/1733420-REG/qnap_qsw_2104_2s_a_us_desktop_qsw_2104_2s_us_unmanaged_switch.html — https://www.qnap.com/en/product/qsw-2104-2s/specs/hardware |
| **Search intent** | `QSW-2104-2S review`, `QNAP 2.5G 10G switch`, `best switch for QNAP 10G NAS`, `QSW-2104-2S vs 2104-2T` |

---

### 15. MikroTik CRS310-8G+2S+IN — 8×2.5G + 2×SFP+, RouterOS, one fan

| | |
| --- | --- |
| **Type** | review |
| **Title** | MikroTik CRS310-8G+2S+IN: 2.5G with RouterOS, and a fan |
| **Slug** | mikrotik-crs310-8g-2s-in |
| **Angle** | The tinkerer SKU. Real L3-offload, VLANs, dual-boot SwOS/RouterOS v7, SFP+ cages that also do 2.5G. Maker **$219**. Not closet-silent: official cooling is **1 fan**, 21 W / 34 W. Write the noise and the 18–57 V DC jack in the first screen. Do not sell it as a fanless default. |
| **SKUs / price** | **CRS310-8G+2S+IN**. MikroTik suggested **$219.00**. Newegg **$219.00**. Amazon US ASIN **B0CH9NHFHS** **$209.70** (one snap). Amazon.ca 3P much higher — ignore. |
| **Noise / PoE / fan** | **1 fan** (maker "Cooling type 1 fan"). No PoE-out. 24 V / 1.5 A adapter in box. USB-A on the front. Rack ears included. |
| **Affiliate path** | Newegg + Amazon + MikroTik.com (no first-party US cart; suggested price only). |
| **Live URLs** | https://mikrotik.com/product/crs310_8g_2s_in — https://www.newegg.com/p/0XP-002R-00147 — https://www.amazon.com/MikroTik-CRS310-8G-2S-IN-in/dp/B0CH9NHFHS — https://www.servethehome.com/the-ultimate-cheap-2-5gbe-switch-mega-round-up-buyers-guide-qnap-netgear-hasivo-mokerlink-trendnet-zyxel-tp-link/ |
| **Search intent** | `CRS310-8G+2S+IN review`, `MikroTik 2.5G switch`, `CRS310 fan noise`, `MikroTik vs Omada 2.5G` |

---

## Near-miss SKUs (affiliable, not a 16th post yet)

Use these as "also-ran" rows, not new heroes, unless a later brief wants Zyxel/Netgear depth.

| SKU | Why not a hero post | Affiliate path | Live URL | Street / list (22 Aug 2026) |
| --- | --- | --- | --- | --- |
| **Zyxel XGS1210-12** (XGS1210-12-ZZ0102F) | Only **2×2.5G** + 8×1G + 2×SFP+. Honest mixed closet, weak if the reader wants all-2.5G. Two Amazon ASINs (B0CHNY2BKQ **$119.99**, B084MH9P8Q **$179.99**) — pick the ZZ0102F listing and say so. | Amazon | https://www.amazon.com/ZYXEL-XGS1210-12-ZZ0102F-XGS1210-12-12-Port-GIGABIT/dp/B0CHNY2BKQ | $119.99 / $179.99 depending on ASIN. Fanless, no PoE. |
| **Zyxel MG-108** | All-8×2.5G fanless, but street **$119.99** vs TL-SG108S-M2 at $50–80. Loses the default. | Amazon B0995T34KL | https://www.amazon.com/MultiGig-Ethernet-Unmanaged-Wall-Mount-MG-108/dp/B0995T34KL | $119.99; ZyxelGuard list $179.99 / their $119.99. Fanless, ~12.24 W max. |
| **Zyxel XGS1250-12** | 3× 100M–10G copper + 1× SFP+ + 8×1G. Warm 10GBASE-T, **$239.99**. | Amazon B08TC3VJ61 | https://www.amazon.com/dp/B08TC3VJ61 | $239.99. Web-managed. |
| **Netgear MS305** | Fine 5-port metal. **$99.99** is a bad deal next to TL-SG105S-M2 at $35–60. Use inside the 5-port guide, not a solo review. | Amazon B0BGYS7731 + Netgear.com | https://www.amazon.com/NETGEAR-Multi-Gigabit-Ethernet-Unmanaged-MS305/dp/B0BGYS7731 — https://www.netgear.com/business/wired/switches/unmanaged/ms305/ | $99.99 (was $134.99). Fanless. |
| **Netgear MS305E / MS308E** | Easy-smart VLAN without Omada. Good compare *rows* in the managed guide. MS305E Newegg **$89.99** (was $159.99). | Newegg + Amazon | https://www.newegg.com/p/N82E16833222344 — https://www.amazon.com/NETGEAR-8-Port-Multi-Gigabit-Ethernet-Switch/dp/B0D98WSJ4B | Fanless, no PoE. |
| **QSW-2104-2T-A-US** | Copper 10G twin of the 2S. B&H **$149**. Footnote on the 2S review. | B&H + Amazon B0974XNGJL | https://www.bhphotovideo.com/c/product/1733421-REG/qnap_qsw_2104_2t_a_us_desktop_qsw_2104_2t_us_unmanaged_switch.html | $149 B&H. |
| **TEG-S380** (already in shipped roundup) | Do not re-review solo. Use only in compare #13 and the 8-vs-5 guide. | Amazon B08XWKF55C | https://www.amazon.com/TRENDnet-2-5GBASE-T-Compatible-10-100-1000Mbps-TEG-S380/dp/B08XWKF55C | Maker $87.99; Newegg $79.99. Fanless, 7.26 W. |

---

## Suggested publish order (for the human editor)

1. **TEG-S562 review** — new SKU, 10G-uplink intent, ~$52, does not collide with the shipped 8-port copper table.  
2. **TL-SG105S-M2 review** + **8 vs 5 guide** — harvest the 5-port queries the shipped post ignores.  
3. **2.5G vs 10G uplink guide** — links 1 and the shipped TEG-3102WS row.  
4. **SG2210XMP-M2 review** + **XMP vs HP compare** — own "2.5G PoE" before listicles push the 2-fan rack.  
5. **SG3210X-M2 review** + **vs TEG-3102WS** — managed lane.  
6. **TEG-S562 vs QSW-2104-2S** and the **QSW-2104-2S review** — NAS pairing.  
7. **Managed vs unmanaged** + **MS308 vs TL-SG108S-M2** + **CRS310** — leftover branded queries.

Every post: spec table, live price line dated the day of publish, skip-list paragraph, no fake burn-in.

