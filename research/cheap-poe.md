# Labthrift research: cheap PoE + access points (closet lab / small house)

**Research date:** Saturday 22 Aug 2026 (America/Chicago).  
**Method:** Native WebSearch / WebFetch. Cursor `GetDynamicTools` (`cursor` MCP namespace) was not available in this environment; catalog listed Browser-use, Browserstack, Cloudflare, Figma, Kraken, Postman only.  
**Constraint (user, same day):** every SKU must be affiliable — stable Amazon ASIN, Newegg, B&H, or maker store (TP-Link Omada, UniFi store, Grandstream, Aruba Instant On / HPE). Used Ruckus / eBay lots dropped.  
**Do not duplicate:** existing Labthrift guide `guides/cheap-poe.html` — “Cheap PoE for two access points” / “power two APs without buying a UniFi religion” (TL-SG1005P hero, Lite 8 PoE as UniFi-already pick). Adjacent posts only.  
**Also already published:** `guides/2-5g-switch.html` covers *non-PoE* 8-port 2.5G (TL-SG108S-M2, TEG-S380). Do not rewrite that list; 2.5G *PoE* is still open.  
**Honesty rule:** no fake burn-in. Street figures below are retailer/maker pages as of this research pass. They move. Do not present them as lab measurements.

---

## Flags to carry into every draft

### Wi-Fi 7 tax nobody in a closet needs

A closet / small-house lab does not need tri-band 6 GHz or a 10G uplink to cover two floors and a phone. Documented prices on 22 Aug 2026:

| SKU | Radios | Uplink | PoE | Street / list found |
|---|---|---|---|---|
| TP-Link EAP653 | Wi-Fi 6, 2×2 + 2×2 (AX3000: 2402 + 574) | 1G | 802.3at / 48V passive / 12V DC; max 15.5 W | B&H **$79.99**; Amazon B0B5JRXDG4 live |
| UniFi U7 Lite (U7-LITE) | Wi-Fi 7 **dual-band only, no 6 GHz**; 4 streams (688 + 4300 class) | 2.5G | 802.3af; UI sheet ~13 W | UI store **$99**; B&H **$99–$104** |
| TP-Link EAP723 | Wi-Fi 7 dual-band BE3600 (2882 + 688) | 2.5G | 802.3at; max 16.8 W PoE | Omada Store MSRP **$89.99**; US Amazon listing not confirmed this pass (UK ASIN B0DTQDBNPX) |
| TP-Link EAP773 | Wi-Fi 7 **tri-band** BE11000 (5760 + 2880 + 574) | **10G** | 802.3bt full / 802.3at with 6 GHz derate | B&H / Newegg **$189.99** |
| UniFi U7 Pro | Wi-Fi 7 tri-band | 2.5G | PoE+; ~21 W (third-party tables) | B&H **$189–$200**; UI store list in same band |

**The tax:** ~$80–$110 buys a dual-band AP that saturates gigabit ISP and a closet NAS. ~$190 buys 6 GHz + 10G / Pro radios that a house with one 1G WAN cannot use. Flag this in any Wi-Fi 7 headline.

### Noisy PoE switches (closet-hostile)

Do **not** put a 150 W “MP” Gigabit PoE brick in a bedroom closet without saying the fan is the product.

- **TP-Link / Omada SG2210MP** — 8× 1G PoE+ + 2× SFP, **150 W** budget, **1 fan**. Maker datasheet: typical **24.4 dBA** at 1 m; fanless mode only when PoE load **< 30 W** at 25 °C. Christopher Doyle (18 Apr 2023) measured stock fan **49 dB** vs 36 dB room, called it “loud” and “incredibly whiny,” swapped a SUNON 40 mm for a Noctua. TP-Link forum thread “TL-SG2210MP - Fan behavior and noise?” (topic 255686).  
- **Contrast (fanless, still affiliable):** TL-SG108PE (64 W, 4 PoE+), SG2210XMP-M2 (8× 2.5G PoE+, 160 W, **fanless** per Amazon/Newegg/Dong Knows), USW-Lite-8-PoE (52 W, UI: “silent fanless”), TRENDnet TPE-TG380 (8× 2.5G PoE+, 100 W, fanless).  
- High-watt 24/48-port white-label boxes (e.g. YuanLey 48-port 800 W, “industrial-grade fan”) are closet-wrong even when cheap.

### Passive 24 V traps

Modern closet APs want **48 V 802.3af/at**. Mixing leftover 24 V passive injectors or airMAX bricks with 802.3af APs (or the reverse) is the classic brick-the-port story.

- **Ubiquiti INS-3AF-I-G** Instant Indoor PoE Converter: 802.3af **in** (48 V) → **24 V passive out**, 24 V / 0.5 A max. UI store **$20**. Use only to feed *legacy 24 V* UniFi/airMAX from a modern af/at switch — **not** the other way around.  
- **Omada EAP613 / EAP653** accept **802.3af or 802.3at *and* 48 V passive** (version-dependent). That is 48 V passive, not 24 V. A 24 V airMAX injector is still the wrong brick.  
- Older UniFi AC-Lite / AC-LR 24 V units are out of scope for new-buy posts (and U6 Lite is delisted). Do not send readers hunting used 24 V APs.

---

## 14 distinct post ideas

Working titles only — not published headlines. Each SKU below was found on a maker or major-retailer page this pass.

---

### 1. EAP613: the $80 Omada ceiling AP that still sips 802.3af

- **Title:** EAP613 for a small house: AX1800, 802.3af, no DC brick in the box  
- **Slug:** `eap613-small-house-af`  
- **Type:** review  
- **Angle:** The current Omada floor SKU is still a 2×2 Wi-Fi 6 ceiling puck with a gigabit port and **10.9 W** PoE draw. That means a cheap 802.3af injector or a 4-port 64 W fanless switch can run two of them. The trap is “PoE+ powered” Amazon copy — V2 is **802.3af / 48 V passive / 12 V DC (adapter not included)**.  
- **SKUs:** EAP613 (V2). Radios: 1201 Mbps @ 5 GHz + 574 Mbps @ 2.4 GHz, 2×2. PoE: 802.3af; max 10.9 W PoE / 9.9 W DC.  
- **Street:** Amazon **$79.99** (ASIN **B0BW52D9FZ**); B&H **$79.99–$84.99** (item 1754761-REG); Newegg N82E16833704689 **$87.99**. 5-pack ASIN B0C29X1397 is a different listing.  
- **Affiliate path:** Amazon Associates (B0BW52D9FZ) + B&H. Maker: omadanetworks.com.  
- **Live URLs:**  
  - https://www.amazon.com/TP-Link-EAP613-Wireless-Ultra-Slim-Controller/dp/B0BW52D9FZ  
  - https://www.bhphotovideo.com/c/product/1754761-REG/tp_link_eap613_ax1800_ceiling_mount_wifi.html  
  - https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap613/  
  - https://www.newegg.com/omada-eap613/p/N82E16833704689  
- **Search intent:** “best cheap ceiling AP 2026”, “TP-Link EAP613 review”, “Omada AP 802.3af”

---

### 2. Same eighty dollars: EAP613 vs EAP653

- **Title:** EAP613 vs EAP653: why B&H prices them the same  
- **Slug:** `eap613-vs-eap653`  
- **Type:** comparison  
- **Angle:** On B&H both pucks were **$79.99** this pass. EAP653 is AX3000 (2402 + 574), HE160, **802.3at**, 15.5 W; EAP613 is AX1800, **802.3af**, 10.9 W. For a closet house the radio upgrade is real; the power-class upgrade is the one that breaks a 15.4 W injector.  
- **SKUs:** EAP613 (above). EAP653 V1/V3: 2×2 + 2×2, 1G, 802.3at + 48 V passive + 12 V/1.5 A (adapter not included).  
- **Street:** EAP653 B&H **$79.99** (1733667-REG); Amazon **B0B5JRXDG4**. Skip EAP653 UR (B0DCWNFNRW) — listing copy on Amazon mixed Wi-Fi 7 marketing onto an AX3000 SKU.  
- **Affiliate path:** Amazon (B0BW52D9FZ + B0B5JRXDG4) + B&H compare.  
- **Live URLs:**  
  - https://www.bhphotovideo.com/c/compare/TP-Link_EAP613_vs_TP-Link_EAP653_vs_TP-Link_EAP670/BHitems/1754761-REG_1733667-REG_1810160-REG  
  - https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap653/  
  - https://www.amazon.com/TP-Link-EAP653-Wireless-Business-Multi-Controller/dp/B0B5JRXDG4  
  - https://static.tp-link.com/upload/product-overview/2026/202606/20260603/Datasheet_EAP653%203.0%20-%20EG.pdf  
- **Search intent:** “EAP613 vs EAP653”, “Omada AX1800 vs AX3000”

---

### 3. Omada EAP653 vs UniFi U7 Lite (the actual 2026 fork)

- **Title:** Omada EAP653 vs UniFi U7 Lite: $80 Wi-Fi 6 vs $99 Wi-Fi 7 without 6 GHz  
- **Slug:** `omada-eap653-vs-unifi-u7-lite`  
- **Type:** comparison  
- **Angle:** This is the current “do I join a controller religion?” post that is *not* the two-injector essay. EAP653 is cheaper, gigabit, 802.3at, free Omada cloud. U7 Lite is $99, **2.5G**, 802.3af, Wi-Fi 7 dual-band, no 6 GHz, UniFi app. Hostifi (Mar 2025) and UI store still show both at the Lite price band; U6 Lite is delisted.  
- **SKUs:** EAP653 (above). U7-LITE / U7-LITE-US: 2.4 + 5 GHz Wi-Fi 7, 4 streams, 2.5 GbE, PoE 802.3af, max ~13 W, 1,250 ft² class, 200+ clients.  
- **Street:** U7 Lite UI store **$99** (surcharge $106); B&H **$99–$104** (1885424-REG). EAP653 B&H **$79.99**.  
- **Affiliate path:** B&H (both) + Amazon EAP653 + UI store (no Associates tag; still a live cart).  
- **Live URLs:**  
  - https://store.ui.com/us/en/products/u7-lite  
  - https://www.bhphotovideo.com/c/product/1885424-REG/ubiquiti_networks_u7_lite_us_u7_lite_access_point.html  
  - https://www.hostifi.com/blog/u6-lite-vs-u7-lite  
  - https://speedtesthq.com/compare/unifi-vs-tp-link-omada  
- **Search intent:** “Omada vs UniFi 2026”, “EAP653 vs U7 Lite”, “best cheap AP UniFi alternative”

---

### 4. U7 Lite review: Wi-Fi 7 on the Lite mount, still no 6 GHz

- **Title:** UniFi U7 Lite: $99, 2.5G, and the 6 GHz they left off  
- **Slug:** `unifi-u7-lite-review`  
- **Type:** review  
- **Angle:** Lon.TV (8 Jun 2025) and Hostifi document the real product: same Lite mount as AC Lite / U6 Lite, 2.5G uplink, 802.3af, **no 6 GHz**. For a closet house that is the honest sell — not “Wi-Fi 7 flagship.” Pair with U-PoE-AF ($8, UI store) or Flex 2.5G PoE, not a U7 Pro.  
- **SKUs:** U7-LITE. Accessory: **U-PoE** / UniFi PoE Adapter 15W, 48 V / 0.32 A, **$8** UI store. Optional: USW-Flex-2.5G-8-PoE **$199** UI.  
- **Street:** AP $99 UI / $99–$104 B&H. Injector $8 UI.  
- **Affiliate path:** B&H U7 Lite + UI store accessories. Amazon U7 Lite ASIN not locked this pass — prefer B&H / UI.  
- **Live URLs:**  
  - https://store.ui.com/us/en/products/u7-lite  
  - https://store.ui.com/us/en/products/u-poe-af  
  - https://blog.lon.tv/2025/06/08/unifi-u7-lite-review-99-wi-fi-7-access-point-breaks-the-gigabit-barrier/  
  - https://media.dustin.eu/media/d2000010011410462/unifi-u7-lite-access-point-product-data-sheet-brochure.pdf  
- **Search intent:** “U7 Lite review”, “U7 Lite vs U6 Lite”, “does U7 Lite have 6GHz”

---

### 5. The Wi-Fi 7 tax: U7 Pro / EAP773 vs a closet that still has 1G WAN

- **Title:** Skip the $190 Wi-Fi 7 puck until the WAN is faster than the AP  
- **Slug:** `wifi-7-tax-closet-lab`  
- **Type:** guide (with SKU table)  
- **Angle:** B&H still sells EAP773 and U7 Pro at **$189–$200** next to EAP653 at **$80** and U7 Lite at **$99**. EAP773 wants **802.3bt** for full 6 GHz (802.3at derates 6 GHz; Newegg sheet). A closet with one gigabit ISP and two phones cannot spend that delta. Name the tax; do not pretend a 10G AP is a lab requirement.  
- **SKUs:** EAP653; U7-LITE; EAP723 (MSRP $89.99, 2.5G, 802.3at, 16.8 W); EAP773 (10G, 802.3bt/at); U7 Pro (B&H 1805878-REG).  
- **Street:** as table in Flags. EAP772 B&H **$169.99** (2.5G tri-band) if you must stay Omada Wi-Fi 7 without 10G.  
- **Affiliate path:** B&H compare + Newegg EAP773 (N82E16833704729) + UI store U7 Pro / U7 Lite.  
- **Live URLs:**  
  - https://www.bhphotovideo.com/c/compare/Ubiquiti+Networks_U7+Lite_vs_Ubiquiti+Networks_U7+Pro_vs_TP-Link_EAP773_vs_TP-Link_EAP772/BHitems/1885424-REG_1805878-REG_1810594-REG_1860146-REG  
  - https://www.newegg.com/tp-link-eap773/p/N82E16833704729  
  - https://store.omadanetworks.com/blogs/news/omada-wifi-7-access-point-buying-guide-2025-how-to-choose-the-best-wifi-7-access-point-for-your-needs  
  - https://ifeeltech.com/blog/ubiquiti-unifi-u6-series-review  
- **Search intent:** “is Wi-Fi 7 worth it 2026 home”, “U7 Pro vs U7 Lite”, “EAP773 vs EAP653”

---

### 6. Instant On AP21 / AP22: SMB Wi-Fi 6 with no subscription

- **Title:** Aruba Instant On AP21 vs AP22 for a house that refuses a controller VM  
- **Slug:** `instant-on-ap21-ap22-house`  
- **Type:** comparison / review  
- **Angle:** Instant On’s pitch (HPE datasheet) is app + web, **no license**, 2-year warranty. AP21 is the low-density 2×2 Wi-Fi 6 unit, **802.3af class 3**, ~10.9 W DC / PoE, ~1.5 Gbps class, ~50 clients, ~1,500 ft². AP22 is the older core 2×2 Wi-Fi 6, **802.3af class 3**, 10.1 W PoE. AP25 (4×4, 2.5G, **802.3at**, ~20 W) is the density tax — skip for a closet.  
- **SKUs:** AP21 US **S1T08A** (AP only; PoE/DC sold separate). AP21 bundle with PSU on HPE store **$99.99**. AP22 US bundle **R6M49A** (PSU in box); AP-only **R4W01A**.  
- **Street:** AP21 HPE/reseller **$99.99**; Walmart listing **$99.99** (S1T08A). AP22 Amazon bundle **$179.99** (ASIN **B08FBMF85D**). SHI showed S1T08A at $106 vs $190 MSRP.  
- **Affiliate path:** Amazon AP22 B08FBMF85D + HPE Instant On / buy.hpe.com (maker). B&H Instant On catalog exists; lock a B&H item ID before publish if using B&H.  
- **Live URLs:**  
  - https://www.hpe.com/us/en/instant-on/access-points/access-point-21.html  
  - https://instant-on.hpe.com/files/DS_WI-FI-6.pdf  
  - https://www.amazon.com/Hewlett-Packard-Enterprise-company-Included/dp/B08FBMF85D  
  - https://buy.hpe.com/us/en/networking/wireless-devices/wlan-access-points/aruba-small-business-access-point-products/hpe-networking-instant-on-access-points-ap22/p/1012928284  
- **Search intent:** “Aruba Instant On AP21 review”, “Instant On vs UniFi home”, “AP22 PoE requirements”

---

### 7. Grandstream GWN7660: embedded controller, 9 W, two gigabit ports

- **Title:** Grandstream GWN7660: a 9-watt Wi-Fi 6 AP that hosts its own controller  
- **Slug:** `grandstream-gwn7660-embedded-controller`  
- **Type:** review  
- **Angle:** GWN7660 is 2×2:2 AX1770, **dual GbE**, **802.3af/at**, **9 W max** — the lowest draw on this list. Embedded web controller manages up to 50 GWN APs; GWN.Cloud is free. That is a third religion (not UniFi, not Omada) and a better “no VM” story than Instant On if you already own Grandstream phones. Do not upsell GWN7664E (21 W, 802.3at, dual 2.5G) for a closet.  
- **SKUs:** GWN7660. Radios: 573.5 + 1201 Mbps. Ports: 2× 1G. PoE: 802.3af/at, 9 W. Sibling if needed: GWN7660E (AX3000-class, 3×3:2 on 5 GHz, 1× 1G, 12.95 W); GWN7664E (4×4:4, dual 2.5G, 21 W, 802.3at).  
- **Street:** GWN7660 CDW **$109**; Amazon **B09C68LCBQ** (live; street not captured this pass). GWN7664E Amazon **B0DLG7SF8L $126.64**; CDW **$146–$169**.  
- **Affiliate path:** Amazon B09C68LCBQ (and B0DLG7SF8L only as “do not buy this for a closet”). Maker grandstream.com.  
- **Live URLs:**  
  - https://www.amazon.com/Grandstream-GWN7660-Indoor-Access-Point/dp/B09C68LCBQ  
  - https://www.grandstream.com/products/networking-solutions/indoor-wifi-access-points/product/gwn7660  
  - https://www.grandstream.com/hubfs/Product_Documentation/GWN7660/Datasheet_GWN7660_English.pdf  
  - https://www.cdw.com/product/grandstream-gwn7660-wireless-access-point-wi-fi-6/7298060  
- **Search intent:** “Grandstream GWN7660 review”, “GWN.Cloud home lab”, “lowest power PoE access point”

---

### 8. Cudy AP3000: OpenWrt-friendly 2.5G ceiling AP (sold new)

- **Title:** Cudy AP3000: AX3000, 2.5G PoE, and a real OpenWrt target  
- **Slug:** `cudy-ap3000-openwrt`  
- **Type:** review / guide  
- **Angle:** GL.iNet Flint 2 is the known OpenWrt box but it is a **12 V / 4 A router, not PoE**. The affiliable *ceiling AP* that actually takes 802.3at and has in-tree OpenWrt (24.10.x, `cudy_ap3000-v1`) is Cudy AP3000. Stock firmware is fine for a house; OpenWrt is the lab hook. Flash path is a Cudy transition image — say that, do not pretend it is one-click.  
- **SKUs:** Cudy **AP3000** (no adapter) / **AP3000_P** (48 V passive injector in box). Radios: 2402 + 574, 2×2, 160 MHz. Port: 1× 2.5G PoE-in. Power: 802.3at/af, 48–57 V passive, 12 V DC; **12 W** max.  
- **Street:** Amazon AP3000 **$69.90** (ASIN **B0BXNB7CC3**). Maker cudy.com. Outdoor sibling AP3000 Outdoor B0CYT44ZYL **$119.99** — different radio/housing; do not conflate.  
- **Affiliate path:** Amazon B0BXNB7CC3 + Cudy store.  
- **Live URLs:**  
  - https://www.amazon.com/Cudy-Wireless-Business-Solution-Seamless/dp/B0BXNB7CC3  
  - https://www.cudy.com/en-us/products/ap3000-1-0  
  - https://openwrt.org/releases/24.10/notes-24.10.5  
  - https://github.com/openwrt/openwrt/pull/17225  
- **Search intent:** “OpenWrt ceiling AP 2026”, “Cudy AP3000 OpenWrt”, “2.5G PoE access point cheap”

---

### 9. GL.iNet Flint 2 as the non-PoE OpenWrt AP

- **Title:** Flint 2 (GL-MT6000) in AP mode when the closet has no PoE yet  
- **Slug:** `gl-mt6000-ap-mode-no-poe`  
- **Type:** guide  
- **Angle:** Distinct from #8. Flint 2 is AX6000, Filogic 830, 2× 2.5G + 4× 1G, official OpenWrt, **12 V / 4 A barrel — no PoE**. For a bench or a shelf under the switch it is a better AP/router than a ceiling puck you cannot power. Do not tell people to buy a PoE splitter for it.  
- **SKUs:** GL-MT6000 (Flint 2). Amazon **B0CP7S3117**. Maker gl-inet.com.  
- **Street:** Amazon live (price not captured cleanly this pass; do not invent).  
- **Affiliate path:** Amazon B0CP7S3117 + GL.iNet store.  
- **Live URLs:**  
  - https://www.amazon.com/GL-iNet-GL-MT6000-Multi-Gig-Connectivity-WireGuard/dp/B0CP7S3117  
  - https://www.gl-inet.com/en-us/products/gl-mt6000  
  - https://openwrt.org/toh/gl.inet/gl-mt6000  
- **Search intent:** “GL.iNet Flint 2 access point mode”, “OpenWrt AP no PoE”, “GL-MT6000 review”

---

### 10. Cheap 8-port 2.5G *PoE* (not the non-PoE TEG-S380 essay)

- **Title:** 8-port 2.5G PoE for two Lite APs: fanless 100–160 W, not a 24-port heater  
- **Slug:** `8-port-2-5g-poe-closet`  
- **Type:** comparison  
- **Angle:** The existing 2.5G guide stopped at non-PoE TEG-S380 / TL-SG108S-M2. This post is the PoE version: TRENDnet **TPE-TG380** (8× 2.5G PoE+, **100 W**, fanless) vs Omada **SG2210XMP-M2** (8× 2.5G PoE+ + 2× 10G SFP+, **160 W**, fanless, ~$250) vs UniFi **USW-Flex-2.5G-8-PoE** (**$199** UI, PoE++ out, adapter extra). Flag: do not buy a gigabit SG2210MP “because 150 W” — that one has the loud fan (#14).  
- **SKUs:** TPE-TG380 (802.3af/at, 100 W, 8× 2.5G). SG2210XMP-M2 (802.3af/at, 160 W, 8× 2.5G + 2× SFP+). USW-Flex-2.5G-8-PoE (8× 2.5G PoE++, 10G combo uplink; 16–76 W on PoE-in, **196 W** with $79 210 W AC adapter).  
- **Street:** SG2210XMP-M2 Amazon **B0D5Z3NMG9**; Dong Knows launch **$249.99**; Newegg **$347.99** (do not average those — quote both). Flex 2.5G PoE UI **$199** (surcharge $214); Newegg **$268.78**. TPE-TG380: TRENDnet maker page live; Amazon.ca new **B09JHX68B8**; US Amazon hit this pass was **Renewed B0BZ2MJMQ5 $125.99** — **do not affiliate Renewed as new**. Confirm a new US listing before publish.  
- **Affiliate path:** Amazon B0D5Z3NMG9 + UI store Flex + TRENDnet store (new).  
- **Live URLs:**  
  - https://www.amazon.com/TP-Link-SG2210XMP-M2-8-Port-2-5GBASE-T-2-Port/dp/B0D5Z3NMG9  
  - https://dongknows.com/tp-link-omada-sg2210xmp-m2-poe-switch-review/  
  - https://store.ui.com/us/en/products/usw-flex-2-5g-8-poe  
  - https://www.trendnet.com/products/tpe-tg380  
- **Search intent:** “best 8 port 2.5G PoE switch 2026”, “SG2210XMP-M2 review”, “Flex 2.5G PoE vs Omada”

---

### 11. Injectors vs a small switch (not “buy the 5-port brick”)

- **Title:** One injector, two injectors, or a 4-port PoE+ switch  
- **Slug:** `poe-injector-vs-switch-two-aps`  
- **Type:** guide  
- **Angle:** Existing cheap-poe.html already crowned TL-SG1005P. This post is the *math of injectors*: **TL-POE150S** (802.3af, 15.4 W, Amazon **$17.99**, ASIN **B001PS9E5I**) vs **TL-POE160S** (802.3at, 30 W, Amazon **$22.99**, ASIN **B08LZZRX5N**) vs **U-PoE 15W** (**$8** UI) vs **two** injectors vs **TL-SG108PE** (8× 1G, **4× PoE+ / 64 W**, fanless). Two af APs (EAP613 ~11 W, U7 Lite ~13 W, GWN7660 9 W) fit one 64 W switch; one at-class EAP653 (15.5 W) does **not** fit a 150S.  
- **SKUs:** POE150S / TL-POE150S; POE160S / TL-POE160S; U-PoE (U-POE-AF); TL-SG108PE.  
- **Street:** 150S **$17.99**; 160S **$22.99**; U-PoE **$8**; SG108PE Amazon **$51.49–$60.85** (ASIN **B01BW0AD1W**; list $69.99).  
- **Affiliate path:** Amazon B001PS9E5I + B08LZZRX5N + B01BW0AD1W; UI store U-PoE.  
- **Live URLs:**  
  - https://www.amazon.com/TP-LINK-TL-PoE150S-Injector-Adapter-Compliant/dp/B001PS9E5I  
  - https://www.amazon.com/TL-PoE160S-Injector-Supplies-Wall-Mount-Certified/dp/B08LZZRX5N  
  - https://store.ui.com/us/en/products/u-poe-af  
  - https://www.amazon.com/TP-Link-TL-SG108PE-Shielded-Lifetime-Protection/dp/B01BW0AD1W  
- **Search intent:** “PoE injector vs switch”, “802.3af injector for access point”, “TL-POE160S vs cheap PoE switch”  
- **Do not:** retitle this as “power two APs without UniFi.” Different SKUs, different question (injector count vs port count).

---

### 12. 802.3af vs at vs bt — closet watt budget, no burn-in

- **Title:** af, at, bt: match the AP class before you buy the switch  
- **Slug:** `poe-af-at-bt-closet-budget`  
- **Type:** guide  
- **Angle:** A table of *maker max watts*, not “we ran this for a week.” af ≈ 15.4 W at the port, at ≈ 30 W, bt Type 3/4 is camera/6 GHz-Pro territory. Closet APs that stay in af: U7 Lite, EAP613, Instant On AP21/AP22, GWN7660. Closet APs that need at: EAP653, EAP670, EAP723, Instant On AP32/AP25, GWN7664E. bt: EAP773 full radios. Budget the **switch total**, not “8 ports × 30 W.” Lite 8 PoE is **52 W**. SG108PE is **64 W**. TPE-TG380 is **100 W**. SG2210XMP-M2 is **160 W**.  
- **SKUs (cite, don’t invent):** U7-LITE; EAP613; EAP653; EAP670; EAP773; USW-Lite-8-PoE (**$109** UI, 52 W); TL-SG108PE; SG2210XMP-M2; TPE-TG380.  
- **Street:** Lite 8 PoE UI **$109** (surcharge $117) — https://store.ui.com/us/en/products/usw-lite-8-poe — already mentioned in the existing guide; here it is only a *budget number*, not a repurchase pitch.  
- **Affiliate path:** same Amazon/B&H/UI links as #1–#5 and #10–#11.  
- **Live URLs:**  
  - https://www.cablify.ca/unifi-ap-power-requirements-poe-guide/  
  - https://store.ui.com/us/en/products/usw-lite-8-poe  
  - https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap653/  
  - https://www.newegg.com/tp-link-eap773/p/N82E16833704729  
- **Search intent:** “802.3af vs 802.3at access point”, “PoE budget calculator AP”, “does U7 Lite need PoE+”

---

### 13. Passive 24 V / 48 V traps (INS-3AF-I-G and Omada “passive PoE”)

- **Title:** 24 V passive will not feed a U7 Lite — and 48 V passive is not the same brick  
- **Slug:** `passive-24v-poe-traps`  
- **Type:** guide  
- **Angle:** Three different “passive” strings on current boxes: (1) leftover **24 V** airMAX / old UniFi injectors, (2) Omada **48 V passive** on EAP613/EAP653, (3) Cudy AP3000 **48–57 V passive** *and* 802.3at. The affiliable converter is **INS-3AF-I-G** (UI **$20**, B&H 1327765-REG): **af in → 24 V out**. That saves old 24 V radios on a new switch. It does **not** let a 24 V injector feed a modern af AP.  
- **SKUs:** INS-3AF-I-G. Contrast APs: U7-LITE (44–57 V / 42.5–57 V 802.3af only); EAP613 (802.3af + 48 V passive); AP3000 (802.3at/af + 48–57 V passive).  
- **Street:** INS-3AF-I-G UI **$20**; Central Computer **$19.95**.  
- **Affiliate path:** UI store + B&H (1327765-REG).  
- **Live URLs:**  
  - https://store.ui.com/us/en/products/ins-3af-i-g  
  - https://www.bhphotovideo.com/c/product/1327765-REG/ubiquiti_networks_ins_3af_i_g_instant_802_3af_adapter.html  
  - https://dl.ui.com/datasheets/instant/Instant_802.3af_Gigabit_PoE_Converters_DS.pdf  
  - https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap613/  
- **Search intent:** “24V passive PoE vs 802.3af”, “INS-3AF-I-G”, “Omada 48V passive PoE”

---

### 14. The loud 150 W Gigabit PoE: SG2210MP vs the fanless 2.5G sibling

- **Title:** SG2210MP’s fan is why the closet should buy SG2210XMP-M2 or SG108PE  
- **Slug:** `sg2210mp-fan-noise-vs-fanless`  
- **Type:** review / warning  
- **Angle:** SG2210MP is the cheap-looking 8-port **Gigabit** 150 W Omada switch people add “for cameras later.” Datasheet: **1 fan, 24.4 dBA**, fanless only under 30 W PoE. Doyle’s 2023 swap and TP-Link’s own forum treat the stock fan as a known complaint. The 2.5G **SG2210XMP-M2** is the fanless 160 W answer at ~$250; **TL-SG108PE** is the $50–$60 fanless 64 W answer if you only have two APs. Do not “mod the fan” in a Labthrift post — report the noise and pick the fanless SKU.  
- **SKUs:** SG2210MP (8× 1G PoE+ + 2× SFP, 150 W, 1 fan). SG2210XMP-M2 (above). TL-SG108PE (above).  
- **Street:** SG2210XMP-M2 Amazon B0D5Z3NMG9 / Dong Knows **$249.99**. SG108PE **$51–$61**. SG2210MP Amazon ASIN commonly cited **B08JB1C41Y** — re-verify live price at publish; do not invent.  
- **Affiliate path:** Amazon B0D5Z3NMG9 + B01BW0AD1W; Amazon/Newegg SG2210MP only as the “this is the noisy one” outbound.  
- **Live URLs:**  
  - https://static.tp-link.com/upload/product-overview/2026/202604/20260422/SG2210MP(UN)5.26_datasheet.pdf  
  - https://chriswebsite.com/2023/04/18/tp-link-fan-replacement.html  
  - https://community.tp-link.com/en/business/forum/topic/255686  
  - https://www.amazon.com/TP-Link-SG2210XMP-M2-8-Port-2-5GBASE-T-2-Port/dp/B0D5Z3NMG9  
- **Search intent:** “SG2210MP fan noise”, “quiet PoE switch closet”, “SG2210XMP-M2 fanless”

---

## Optional 15th (only if you need another AP review)

### 15. EAP670: the 2.5G Wi-Fi 6 puck *before* you pay the Wi-Fi 7 tax

- **Title:** EAP670 V2: AX5400 and 2.5G without buying Wi-Fi 7  
- **Slug:** `eap670-2-5g-wifi6`  
- **Type:** review  
- **Angle:** If the reader already has a 2.5G PoE switch (#10) and no Wi-Fi 7 clients, EAP670 is the Omada 2.5G ceiling AP that is still Wi-Fi 6: 4804 + 574, 2.4 GHz 2×2 / 5 GHz 4×4, **802.3at**, US V2 **22.3 W** PoE. B&H **$149.99**; Amazon **B09ZV19DBP $155**. That is the last stop before EAP772/773.  
- **SKUs:** EAP670 V2.  
- **Affiliate path:** Amazon B09ZV19DBP + B&H 1810160-REG.  
- **Live URLs:**  
  - https://www.amazon.com/TP-Link-EAP670-Wireless-Seamless-Integrated/dp/B09ZV19DBP  
  - https://static.tp-link.com/upload/product-overview/2025/202512/20251230/DATASHEET_EAP670.pdf  
  - https://www.bhphotovideo.com/c/compare/TP-Link_EAP613_vs_TP-Link_EAP653_vs_TP-Link_EAP670/BHitems/1754761-REG_1733667-REG_1810160-REG  
- **Search intent:** “EAP670 review”, “Omada 2.5G access point”, “EAP670 vs EAP653”

---

## Explicitly dropped (per constraint)

- Used **Ruckus** R510/R550/R650 eBay lots — no stable ASIN, no maker-new path that Labthrift can affiliate cleanly.  
- Delisted **U6 Lite** as a *buy* (cite only as U7 Lite predecessor). **U6+** remains new at UI **$129** / B&H **$136** (https://store.ui.com/us/en/products/u6-plus) if a draft needs a current Wi-Fi 6 UniFi SKU.  
- Random Amazon white-label 8-port 2.5G PoE++ 210 W fans (NICGIGA/YuanLey class) unless a *new* listing is re-verified and the fan is the story.  
- Rewriting `guides/cheap-poe.html` (TL-SG1005P two-AP brick) or `guides/2-5g-switch.html` (non-PoE 2.5G).

---

## Suggested publish order (affiliate + search)

1. **#3** Omada vs U7 Lite — comparison, two live carts.  
2. **#1** EAP613 review — cheapest Omada ASIN.  
3. **#11** injector vs switch — three Amazon ASINs + $8 UI injector.  
4. **#14** noisy SG2210MP — saves readers from a return.  
5. **#10** 2.5G PoE — distinct from the existing non-PoE 2.5G guide.  
6. **#5** Wi-Fi 7 tax — uses the same B&H compare as #3.  
7. Then #6 Instant On, #7 Grandstream, #8 Cudy / #9 Flint 2, #12/#13 reference guides, #2/#4/#15 as supporting reviews.

---

## Source log (primary, 22 Aug 2026)

- Omada EAP613 / EAP653 / EAP670 / EAP723 / EAP773 maker + datasheets + B&H compare + Amazon ASINs above.  
- UI store: U7 Lite, U6+, U-PoE-AF, USW-Lite-8-PoE, USW-Flex-2.5G-8-PoE, INS-3AF-I-G.  
- Hostifi U6 Lite vs U7 Lite; Lon.TV U7 Lite (8 Jun 2025); iFeeltech U6-in-2026.  
- HPE Instant On Wi-Fi 6 datasheet; AP21 S1T08A; AP22 R6M49A Amazon B08FBMF85D.  
- Grandstream GWN7660 / GWN7660E / GWN7664E datasheets + Amazon B09C68LCBQ / B0DLG7SF8L.  
- Cudy AP3000 datasheet + Amazon B0BXNB7CC3 + OpenWrt 24.10.5 notes / PR 17225.  
- GL.iNet GL-MT6000 maker + Amazon B0CP7S3117 + OpenWrt ToH.  
- TP-Link TL-POE150S / TL-POE160S / TL-SG108PE Amazon; SG2210MP datasheet + Doyle fan post; SG2210XMP-M2 Amazon + Dong Knows; TRENDnet TPE-TG380 maker.  
- Existing Labthrift: `/workspace/labthrift/guides/cheap-poe.html`, `guides/2-5g-switch.html`, `index.html` (updated 21 Aug 2026).
