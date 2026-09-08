# Labthrift adjacent-lane post ideas

Research date: Saturday 22 Aug 2026 (America/Chicago).  
Method: native WebSearch / WebFetch. Cursor `GetDynamicTools` namespace was not available in this environment (no `cursor` MCP server).  
Rule: spec-and-street editorial only. Not a burn-in lab. Do not invent products, prices, or headlines. Every SKU below has a live Amazon ASIN, Newegg, B&H, DigiKey/Mouser, or maker storefront. Used eBay-only cards (Intel X520/X710 pulls) are dropped; the 10G NIC idea uses a new 10Gtek 82599 card sold on Amazon.

Brand: one-person closet labs. Quiet. Cheap. Overnight. Buy the boring upgrade. Skip RGB, crypto miners, and full-size 42U racks.

Skipped as already covered by the five core lanes: 2.5G switches, N100 mini PCs, used enterprise vs new, first NAS, cheap PoE/APs.

Street prices move. Recheck the live listing before a publish. Affiliate accounts (Amazon Associates + one other) are not live yet; paths below are the intended tags.

---

## 1. USB vs PCIe 2.5G NIC for a 1G mini PC

- **Title:** USB vs PCIe 2.5G NIC for a 1G mini PC
- **Slug:** usb-vs-pcie-2-5g-nic
- **Type:** compare
- **Angle:** Most Beelink / GMKtec boxes ship 1G. A $20–$30 adapter is the cheapest way to meet a 2.5G closet switch without swapping the host. PCIe (TX201) is the cleaner Proxmox path if a slot exists; USB (RTL8156B/BG) is the path when it does not.
- **SKUs + street (as found 22 Aug 2026):**
  - TP-Link TX201, PCIe 2.5G, ASIN `B0BG685PKM`. Amazon listing live; one snippet showed **$26.99**, sold by Amazon. Also Newegg `14U-015E-00362` (first listed 19 Jul 2026). Maker: tp-link.com/us/support/download/tx201/.
  - Plugable USBC-E2500, USB-C/A hybrid, RTL8156B. Maker **$24.95**. Amazon UK ASIN `B084L4JL9K`. Maker store: plugable.com/products/usbc-e2500.
  - Waveshare USB 3.2 Gen1 TO 2.5G ETH, SKU `27688`, RTL8156B. Maker **$16.99**. waveshare.com/usb-3.2-gen1-to-2.5g-eth.htm.
  - Cable Matters USB-A 2.5G, RTL8156BG, model `202485`, ASIN `B0GFHS6L87`. Listing live; no clean US street captured this pass.
- **Affiliate path:** Amazon Associates on TX201 + Cable Matters; Plugable / Waveshare maker storefronts (or Amazon if the US Plugable ASIN is the same listing).
- **Live URLs:**
  - https://www.amazon.com/TP-Link-2-5GB-PCIe-Network-TX201/dp/B0BG685PKM
  - https://www.newegg.com/tp-link-tx201/p/14U-015E-00362
  - https://plugable.com/products/usbc-e2500
  - https://www.waveshare.com/usb-3.2-gen1-to-2.5g-eth.htm
- **Search intent:** “add 2.5gbe to mini pc”, “best usb 2.5g adapter linux”, “tp-link tx201 vs usb adapter”
- **Sources:** Amazon TX201; Newegg TX201; Plugable USBC-E2500; Waveshare product page; selfhosting.sh USB-adapter roundup (RTL8156B / Cable Matters ~$17 class).

---

## 2. SFP+ DAC cables for a closet 10G hop

- **Title:** SFP+ DAC cables for a closet 10G hop
- **Slug:** sfp-plus-dac-closet
- **Type:** review
- **Angle:** When a NAS or a managed 2.5G box already has SFP+, a 0.5–2 m passive DAC is the cheapest 10G link in the closet. No optics, no fiber, no transceiver lottery. Stay under 3 m for NICs unless the listing says otherwise.
- **SKUs + street:**
  - 10Gtek CAB-10GSFP-P2M (Cisco-coded 2 m), ASIN `B00U8BL09Q`. Listing **$16.99**; other-sellers from **$13.59**. Sold by 10Gtek / FBA.
  - 10Gtek CAB-10GSFP-P0.25M (0.25 m), ASIN `B099S3THR3`. Listing **$9.99**.
  - 10Gtek white Ubiquiti-coded 2 m, ASIN `B092M5JPMC`. Listing **$17.99**.
  - Skip 8 m passive (`B0BGMYZJWY`, **$35.99**) for NIC-to-switch closet runs; 10Gtek’s own copy warns against >3 m on NICs.
- **Affiliate path:** Amazon Associates, sold by 10Gtek (stable brand, long-lived ASINs).
- **Live URLs:**
  - https://www.amazon.com/10G-SFP-DAC-Cable-SFP-H10GB-CU2M/dp/B00U8BL09Q
  - https://www.amazon.com/10Gtek-Compatible-SFP-H10GB-CU0-25M-Ubiquiti-Fortinet/dp/B099S3THR3
  - https://www.amazon.com/dp/B092M5JPMC
- **Search intent:** “sfp+ dac cable 2m”, “10gtek dac vs ubiquiti”, “cheap dac for unifi / mikrotik”
- **Sources:** Amazon listings above; 10Gtek product copy on those pages.

---

## 3. Cat6a vs Cat5e in a closet that already does 2.5G

- **Title:** Cat6a vs Cat5e in a closet that already does 2.5G
- **Slug:** cat6a-vs-cat5e-closet
- **Type:** compare
- **Angle:** 2.5GBASE-T is specified to run on existing Cat5e. Do not rip walls. Buy short Cat6a patch only for the 10G hop you will actually use, and only copper that is labeled pure bare copper (not CCA).
- **SKUs + street:**
  - Monoprice SlimRun Cat6A 10 ft blue, 30AWG UTP, 10-pack, P/N `15166`. Maker: monoprice.com/product?p_id=15166. Amazon single 10 ft: ASIN `B0C4NGWG7D`. Amazon 5-pack 10 ft SlimRun: ASIN `B07BR9LL25`.
  - Cable Matters 10-pack Cat 6A shielded patch, Product ID `160012`. Maker store: cablematters.com/pc-1667-160-10-pack-cat-6a-shielded-ethernet-patch-cable.aspx. No clean US street captured this pass.
- **Affiliate path:** Amazon Associates on Monoprice ASINs; Monoprice and Cable Matters maker storefronts.
- **Live URLs:**
  - https://www.amazon.com/Monoprice-Cat6A-Patch-Ethernet-Cable/dp/B0C4NGWG7D
  - https://www.amazon.com/dp/B07BR9LL25
  - https://www.monoprice.com/product?p_id=15166
  - https://www.cablematters.com/pc-1667-160-10-pack-cat-6a-shielded-ethernet-patch-cable.aspx
- **Search intent:** “do I need cat6a for 2.5gbe”, “cat5e vs cat6a 10g”, “best cat6a patch cable copper”
- **Sources:** Monoprice SlimRun spec PDF (30AWG, 550 MHz, 10G, pure copper, UL 444); Antaira Cat5e/6/6a explainer; MakeUseOf Cat5e-vs-Cat6a test (gigabit ceiling identical on short runs).

---

## 4. Cheap UPS for a closet that stays on overnight

- **Title:** Cheap UPS for a closet that stays on overnight
- **Slug:** cheap-ups-closet
- **Type:** compare
- **Angle:** A 40–150 W closet (N100 + NAS + switch) does not need a 1500 W rack monster. It needs pure sine if the NAS has active PFC, USB HID for NUT / apcupsd, and a replaceable battery. Size for runtime at 100–200 W, not VA on the box.
- **SKUs + street:**
  - CyberPower CP1500PFCLCD, 1500 VA / 1000 W, pure sine, 12 outlets. Maker MSRP **$274.95**. Amazon ASIN `B00429N19W` live; other-sellers **from $239.95**. HID USB. Replacement battery RB1290X2 / RB1280X2B by serial.
  - CyberPower CP850PFCLCD, 850 VA / 510 W, pure sine. Maker MSRP **$189.95**. Same PFC Sinewave family page.
  - CyberPower CP1000PFCLCD, 1000 VA / 600 W. Maker MSRP **$199.95**.
  - APC BR1500MS2, 1500 VA / 900 W, pure sine. Amazon ASIN `B08GRY1W93`. B&H **$299.99** in stock. Micro Center **$288.99** (list $399.99).
- **Affiliate path:** Amazon Associates on both ASINs; B&H affiliate on BR1500MS2; CyberPower maker “Purchase Online” (may deep-link to Amazon).
- **Live URLs:**
  - https://www.cyberpowersystems.com/product/ups/pfc-sinewave/cp1500pfclcd/
  - https://www.amazon.com/CyberPower-CP1500PFCLCD-Sinewave-Outlets-Mini-Tower/dp/B00429N19W
  - https://www.amazon.com/dp/B08GRY1W93
  - https://www.bhphotovideo.com/c/product/1596645-REG/apc_br1500ms2_back_ups_pro_uninterruptible.html
- **Search intent:** “best ups for homelab”, “cyberpower vs apc 1500”, “nut compatible ups truenas”
- **Sources:** CyberPower maker page (MSRP, 1000 W, 2.5 min full / 10 min half); Amazon CP1500 other-sellers $239.95; B&H APC $299.99; HomeLabPicks / Budget Homelab 2026 UPS roundups (same two SKUs).

---

## 5. 12U open frame vs 10-inch wall cabinet

- **Title:** 12U open frame vs 10-inch wall cabinet
- **Slug:** 12u-vs-10-inch-closet-rack
- **Type:** compare
- **Angle:** A closet lab needs a place to hang a switch and a UPS, not a 42U. The 19-inch 12U 2-post is the default because almost everything you already own is 19-inch. A 10-inch NavePoint box is quieter-looking and smaller, but 10-inch switches are a specialty buy.
- **SKUs + street:**
  - StarTech 2POSTRACK12, 12U 19-inch 2-post, 350 lb, TAA. ASIN `B01LZV9IK1`. Amazon listing **$155.99**. Maker: startech.com/en-us/server-management/2postrack12. Specialty shops ~$190.
  - StarTech RK12WALHM, 12U 19-inch wall cabinet, 16-inch mount depth, pre-assembled. ASIN `B094DVS6GW`. Listing live; no clean street this pass.
  - NavePoint 6U 10-inch wall cabinet, perforated, 11.8 in deep, UPC `810100701857`. ASIN `B0BNM9RY4T`. Listing **$161.99**. Glass-door sibling ASIN `B0BNLY4YJD`, also **$161.99**. Maker: navepoint.com 10-inch series. Newegg also lists a 15.75-inch-deep 10-inch 6U.
- **Affiliate path:** Amazon Associates (StarTech + NavePoint); StarTech and NavePoint maker stores.
- **Live URLs:**
  - https://www.amazon.com/StarTech-Desktop-Compact-Space-Saving-Capacity/dp/B01LZV9IK1
  - https://www.startech.com/en-us/server-management/2postrack12
  - https://www.amazon.com/NavePoint-Network-Cabinet-Perforated-Mountable/dp/B0BNM9RY4T
  - https://www.amazon.com/dp/B094DVS6GW
- **Search intent:** “12u open frame rack homelab”, “10 inch server rack”, “startech 2postrack12”, “navepoint 6u 10 inch”
- **Sources:** Amazon 2POSTRACK12; StarTech maker page; Amazon NavePoint 10-inch 6U; NavePoint 10-inch series store page.

---

## 6. A metal rack power strip that is not a fire hazard

- **Title:** A metal rack power strip that is not a fire hazard
- **Slug:** closet-pdu-not-a-fire-hazard
- **Type:** review
- **Angle:** The closet failure mode is a $12 no-name strip under a UPS. Buy a UL-listed all-metal 15 A 1U strip with a switch cover, and plug it *into* the UPS. Skip $400 ATS PDUs until you have two power sources.
- **SKUs + street:**
  - Eaton / Tripp Lite RS-1215, 12-outlet 1U, 15 A, 15 ft 5-15P, 6 front / 6 rear, metal, UL/cUL, switch cover, lifetime warranty. Amazon ASIN `B0000513OF`. Alternate listing ASIN `B00589N59Q` showed **$104.66**. Maker: eaton.com/us/en-us/skuPage.RS-1215.html (UPC `037332011534`).
  - Right-angle sibling RS-1215-RA, ASIN `B00006B834`. Listing live.
  - Skip Tripp Lite PDUMH15AT ATS (**$435.65** on ASIN `B000MNBWW0`) for a first closet. That is a dual-feed product, not a strip.
- **Affiliate path:** Amazon Associates on RS-1215; Eaton maker page is the spec source (not a cart).
- **Live URLs:**
  - https://www.amazon.com/Tripp-Lite-Rackmount-Network-Grade-RS-1215/dp/B0000513OF
  - https://www.eaton.com/us/en-us/skuPage.RS-1215.html
  - https://www.amazon.com/TRIPP-RS-1215-12-OUTLET-15-AMP-RACK-MOUNT/dp/B00589N59Q
- **Search intent:** “1u rack power strip 15a”, “tripp lite rs-1215”, “homelab pdu vs power strip”
- **Sources:** Amazon RS-1215; Eaton RS-1215 spec (UL listed, 15 A breaker, lock cover); Amazon ATS price as the skip.

---

## 7. 2.5-inch SATA SSD for a Proxmox boot disk

- **Title:** 2.5-inch SATA SSD for a Proxmox boot disk
- **Slug:** 2-5-ssd-proxmox-boot
- **Type:** review
- **Angle:** Boot is not a VM datastore. 250–500 GB SATA with a DRAM cache is enough. Do not put guests on the boot disk. Do not pretend a consumer drive is a PLP enterprise part.
- **SKUs + street:**
  - Samsung 870 EVO 500 GB, MZ-77E500B/AM, 2.5-inch SATA, 560/530 MB/s, 300 TBW, 5-year. Amazon US ASIN `B08QBMD6P4`. B&H #1606519-REG. Street is messy in Aug 2026: trackers showed **~$200–$306** on Amazon around 10–21 Aug 2026 (much higher than the 2023–2025 $30–$55 era). Recheck live. Samsung.com US list for 500 GB showed **$299.99** on the maker page (other capacities listed too).
  - Samsung 870 EVO 250 GB is the smaller boot size in the same family (SpecPicks 2026 cited **$50–$70** as a typical band; confirm live ASIN before publish).
  - Crucial BX500 500 GB, CT500BX500SSD1, DRAM-less QLC, 120 TBW, 3-year. India Amazon ASIN `B0B9BL9T4H` is live; do not quote INR as US street. Use only if a US Amazon / Newegg / Crucial.com cart is confirmed at publish time.
- **Affiliate path:** Amazon Associates on `B08QBMD6P4`; B&H affiliate on 1606519-REG; Samsung maker “Where to buy”.
- **Live URLs:**
  - https://www.amazon.com/SAMSUNG-500GB-Internal-MZ-77E500B-AM/dp/B08QBMD6P4
  - https://www.bhphotovideo.com/c/product/1606519-REG/samsung_mz_77e500b_am_500gb_870_evo_sata.html
  - https://www.samsung.com/us/memory-storage/sata-ssd/870-evo-sata-2-5-ssd-500gb-sku-mz-77e500b-am/
- **Search intent:** “best ssd for proxmox boot”, “samsung 870 evo proxmox”, “250gb sata ssd hypervisor”
- **Sources:** Samsung US 870 EVO page; B&H 870 EVO; Amazon ASIN B08QBMD6P4; SpecPicks 2026 boot-SSD piece; Proxmox forum thread on 870 EVO boot + ext4 vs ZFS.

---

## 8. HDMI dummy plug for a headless mini PC

- **Title:** HDMI dummy plug for a headless mini PC
- **Slug:** hdmi-dummy-plug-headless
- **Type:** review
- **Angle:** A closet N100 with no monitor often comes up at 800×600 over RDP / Sunshine until an EDID dongle is in the HDMI port. This is a $16 parts-bin buy, not a GPU project. Labthrift use is remote desktop and BIOS-via-KVM, not mining.
- **SKUs + street:**
  - DTECH 4K HDMI dummy, 5-pack, fit-Headless, ASIN `B09MZBFNM3`. Amazon **$15.98**, sold by DTECH, FBA. Up to 4096×2160 @ 60 Hz. Plug-and-play, no power.
  - Skip BUYMINERS.CA-branded dongles (crypto-farm copy). Same function, wrong brand for this site.
- **Affiliate path:** Amazon Associates on `B09MZBFNM3`.
- **Live URLs:**
  - https://www.amazon.com/Emulator-Headless-Compatible-Computer-fit-Headless/dp/B09MZBFNM3
  - https://www.amazon.com/dp/B09MZBFNM3
- **Search intent:** “hdmi dummy plug 4k”, “headless display emulator linux”, “proxmox no monitor resolution”
- **Sources:** Amazon DTECH 5-pack listing (price, ASIN, 4K60, Win/Mac/Linux).

---

## 9. Cheap KVM-over-IP for a closet you do not want to sit in

- **Title:** Cheap KVM-over-IP for a closet you do not want to sit in
- **Slug:** cheap-kvm-over-ip
- **Type:** compare
- **Angle:** IPMI is not on an N100. A $100 HDMI+USB KVM is how you hit BIOS, mount an ISO, and power-cycle without crawling into the closet. Buy the $100 appliance. Skip the $400 PiKVM V4 Plus unless you already want that stack.
- **SKUs + street:**
  - GL.iNet Comet GL-RM1, 4K@30, GbE, Type-C 5 V/2 A, Tailscale, no subscription. Maker **$99.99** (US warehouse / US plug). Amazon ASIN `B0F21SQ4S8`.
  - JetKVM, open-source, 1080p60, touchscreen. Official reseller MSRP **$103** (was $89; Aug 2026 price update). Amazon third-party listings ~**$129.99** (`B0GKDNQVBL`, `B0FY63H6NH`). Official WisdPi Amazon US: `B0H588WLBY`.
  - PiKVM V4 Plus as the skip: Amazon ASIN `B0CVB82PXY` **$399.95**; PiShop **$384.95**; HiPi **$350**. Too much for a first closet.
- **Affiliate path:** Amazon Associates on GL-RM1 and JetKVM ASINs; GL.iNet maker cart; JetKVM authorized reseller (iKOOLCORE / WisdPi).
- **Live URLs:**
  - https://www.gl-inet.com/en-us/products/gl-rm1
  - https://www.amazon.com/GL-iNet-GL-RM1-Internet-Tailscale-Keyboard/dp/B0F21SQ4S8
  - https://jetkvm.com/blog/new-internals-new-ports-price-update
  - https://www.ikoolcore.com/products/jetkvm
  - https://www.amazon.com/dp/B0H588WLBY
- **Search intent:** “best ip kvm homelab”, “jetkvm vs gl.inet comet”, “pikvm v4 vs cheap kvm”
- **Sources:** GL.iNet Comet page ($99.99); JetKVM price-update post ($103); iKOOLCORE $103; Amazon JetKVM $129.99; Amazon / PiShop PiKVM V4 Plus prices; Fixory HQ 2026 IP-KVM compare.

---

## 10. Fanless 60 W brick that is not a mystery barrel

- **Title:** Fanless 60 W brick that is not a mystery barrel
- **Slug:** fanless-60w-psu
- **Type:** review
- **Angle:** Mini PCs and small fanless routers die on no-name 12 V bricks. Mean Well GST60A is a silent, Level VI, UL/TUV desktop adapter with a published datasheet. Match voltage and the 5.5×2.1 mm P1J barrel before you click.
- **SKUs + street:**
  - MEAN WELL GST60A12-P1J, 12 V / 5 A / 60 W, IEC C14 inlet, P1J 5.5×2.1 mm center-positive. DigiKey / Mouser **$18.60** (stock dated 20–21 Aug 2026). Newark **$21.46**. Amazon ASIN `B07KFPBGSM` (listing live; no clean Amazon street this pass).
  - Same GST60A family: 19 V and 24 V siblings exist (GST60A24-P1J etc.) if the mini-PC barrel is not 12 V. Confirm the host label.
- **Affiliate path:** DigiKey / Mouser (if enrolled); Amazon Associates on `B07KFPBGSM`. Prefer authorized-distributor link so the brick is real Mean Well.
- **Live URLs:**
  - https://www.amazon.com/GST60A12-P1J-Desktop-Adapter-Positive-IEC320-C14/dp/B07KFPBGSM
  - https://www.mymectronic.com/part-detail/MEAN-WELL/GST60A12P1J (aggregator of DigiKey/Mouser/Newark stock + $18.60)
  - Mean Well GST60A datasheet (distributor PDFs; 12 V / 5 A / 60 W, fanless plastic, 89.5% typ).
- **Search intent:** “mean well 60w 12v adapter”, “gst60a12-p1j”, “fanless replacement psu mini pc”
- **Sources:** Amazon GST60A12-P1J; DigiKey/Mouser price via MyMectronic 20–21 Aug 2026; Mean Well GST60A datasheet.

---

## 11. A label maker you will actually use on patch leads

- **Title:** A label maker you will actually use on patch leads
- **Slug:** closet-label-maker
- **Type:** review
- **Angle:** Masking tape dies in a warm closet. Brother TZe laminated tape on a Bluetooth cube is the boring ID system: port, VLAN, and host name on every lead. The Plus (24 mm) is the one if you also label the UPS and the rack rail.
- **SKUs + street:**
  - Brother PT-P300BT CUBE, 12 mm TZe, Bluetooth. Amazon ASIN `B01N7WAC19`. Maker: brother-usa.com/p/office-home-label-makers/PTP300BT. No clean US street captured this pass (regional listings vary).
  - Brother PT-P710BT CUBE Plus, 24 mm TZe, Bluetooth + USB, auto cutter. Maker **$114.99**. Amazon ASIN `B07HB8LNSY` (camel last Amazon **$99.98** on 25 Jan 2026 — recheck). Alternate Amazon ASIN `B0BG2594Y9`.
- **Affiliate path:** Amazon Associates on both ASINs; Brother-USA maker cart.
- **Live URLs:**
  - https://www.amazon.com/Brother-PT-P300BT-Bluetooth-Portable-Cassette/dp/B01N7WAC19
  - https://www.brother-usa.com/p/office-home-label-makers/PTP300BT
  - https://www.amazon.com/Brother-PT-P710BT-Versatile-Bluetooth-Technology/dp/B07HB8LNSY
  - https://www.brother-usa.com/p/office-home-label-makers/PTP710BT
- **Search intent:** “best label maker for ethernet cables”, “brother p-touch cube homelab”, “tze tape 12mm vs 24mm”
- **Sources:** Amazon PT-P300BT; Brother-USA PTP300BT and PTP710BT; camelcamelcamel on `B07HB8LNSY`.

---

## 12. Hook-and-loop, not zip ties, in a closet

- **Title:** Hook-and-loop, not zip ties, in a closet
- **Slug:** closet-cable-management
- **Type:** guide
- **Angle:** Zip ties are how you cut a DAC jacket six months later. A 100-pack of 8-inch hook-and-loop is the whole cable-management budget. Color-code power vs copper vs DAC. Revisit after every add.
- **SKUs + street:**
  - Cable Matters 100-pack 8-inch hook-and-loop, model `180116`, 60 black / 20 blue / 20 orange. ASIN `B09X1V6MM4`. Amazon **$8.99**. Maker: cablematters.com/pc-1472-164-100-pack-reusable-hook-and-loop-cable-ties.aspx.
  - Cable Matters mixed 4/6/8-inch 100-pack, model `180136`, ASIN `B0D329D249`. Amazon **$8.99**.
  - VELCRO Brand ONE-WRAP 8×1/2 in, 50-count, model `90924`, ASIN `B010BZYFKY`. Amazon page existed but showed **currently unavailable** on fetch. Staples still lists 90924 (~**$8.29**). Do not make this the hero until the Amazon buy box is back.
- **Affiliate path:** Amazon Associates on Cable Matters ASINs; Cable Matters maker store.
- **Live URLs:**
  - https://www.amazon.com/Cable-Matters-100-Pack-Reusable-Strength/dp/B09X1V6MM4
  - https://www.amazon.com/Cable-Matters-100-Pack-Reusable-Strength/dp/B0D329D249
  - https://www.cablematters.com/pc-1472-164-100-pack-reusable-hook-and-loop-cable-ties.aspx
- **Search intent:** “velcro cable ties homelab”, “hook and loop vs zip ties rack”, “best cable management for small rack”
- **Sources:** Amazon Cable Matters 180116 / 180136; Cable Matters maker page; Amazon VELCRO 90924 (OOS note).

---

## 13. New 10G SFP+ NIC vs staying on 2.5G copper

- **Title:** New 10G SFP+ NIC vs staying on 2.5G copper
- **Slug:** 10gtek-x520-vs-tx201
- **Type:** compare
- **Angle:** Do not buy 10G until a single flow fills 2.5. When it does, a new 10Gtek 82599 dual-SFP+ card plus a 2 m DAC is the retail path — not an eBay “pulled X520.” If the other end is still RJ45, the TP-Link TX401 (10GBASE-T, ships with Cat6A) is the copper path.
- **SKUs + street:**
  - 10Gtek dual SFP+ , Intel 82599ES, X520-DA2 equivalent, ASIN `B01DCZCA3O`. Amazon **$51.99**. New, not pulled. Linux `ixgbe`. Does not do 2.5/5G. Needs SFP+ DAC or optic.
  - TP-Link TX201 2.5G copper, ASIN `B0BG685PKM`, ~**$27** (see #1).
  - TP-Link TX401 10GBASE-T, ASIN `B08D71PVXG`. Amazon snippets **$64.50** and **$89.99** (sold by Amazon on the $89.99 capture). Includes a 1.5 m Cat6A. Back-compat 10/5/2.5/1G.
- **Affiliate path:** Amazon Associates on all three ASINs; 10Gtek and TP-Link maker pages.
- **Live URLs:**
  - https://www.amazon.com/10Gtek-E10G42BTDA-Ethernet-Converged-X520-DA2/dp/B01DCZCA3O
  - https://www.amazon.com/TP-Link-2-5GB-PCIe-Network-TX201/dp/B0BG685PKM
  - https://www.amazon.com/TP-Link-TX401-Ethernet-Supports-Including/dp/B08D71PVXG
  - https://www.10gtek.com/10gnic
- **Search intent:** “intel x520 vs 2.5g nic”, “10gtek 82599 proxmox”, “tx401 vs sfp+ dac”
- **Sources:** Amazon 10Gtek B01DCZCA3O ($51.99); Amazon TX201; Amazon TX401; 10Gtek NIC catalog (X520-10G-2S-X8 = X520-DA2 equivalent); ComputingForGeeks 10GbE-for-Proxmox (ixgbe vs i40e); SpeedTestHQ 2.5G vs 10G 2026.

---

## 14. When 2.5G is full: the 10G copper card that ships a Cat6A lead

- **Title:** When 2.5G is full: the 10G copper card that ships a Cat6A lead
- **Slug:** tx401-10gbase-t-later
- **Type:** review
- **Angle:** SFP+ is cheaper per port if both ends already have cages. If the NAS is 10GBASE-T and the desktop has a slot, TX401 is the one-SKU copper upgrade: 10/5/2.5/1G autoneg and a Cat6A in the box. Still a later buy. Still not a switch.
- **SKUs + street:**
  - TP-Link TX401, ASIN `B08D71PVXG`, UPC `840030701610`. Amazon **$64.50–$89.99** depending on capture (see #13). Sold by Amazon on the $89.99 snapshot. PCIe 3.0, low-profile bracket in box, 1.5 m Cat6A included.
  - Pair with Monoprice / Cable Matters Cat6A from #3 if the included 1.5 m is too short.
- **Affiliate path:** Amazon Associates on `B08D71PVXG`.
- **Live URLs:**
  - https://www.amazon.com/TP-Link-TX401-Ethernet-Supports-Including/dp/B08D71PVXG
  - https://www.amazon.com/dp/B08D71PVXG
- **Search intent:** “tp-link tx401 review”, “10gbase-t nic for desktop”, “do I need 10gbe at home”
- **Sources:** Amazon TX401 listings ($64.50 / $89.99); SpeedTestHQ 2026 2.5G vs 10G (TX401 ~$50–$80 band in that article — treat as secondary to the live Amazon captures).

---

## Explicitly dropped

- Used Intel X520 / X710 eBay pulls. No stable ASIN. Replaced by new 10Gtek `B01DCZCA3O`.
- Full-size 42U racks.
- RGB gamer PSUs, RGB fans, RGB strips.
- Crypto-miner dummy-plug brands and miner frames.
- Mystery CCA Ethernet and no-name 15 A strips without UL.
- PiKVM V4 Plus as a *first* cheap-KVM pick ($350–$400). Mention only as the skip.

## Notes for whoever writes these

- Recheck every street the day of publish. Several Amazon buy boxes hid price until cart (TX201, CP1500PFCLCD).
- Samsung 870 EVO 500 GB street is abnormal vs 2023–2025. Do not write “about $50” from memory.
- VELCRO 90924 Amazon was OOS; Cable Matters 180116 is the in-stock hook-and-loop.
- HDMI dummy copy on Amazon mentions mining. Labthrift copy should not.
- No burn-in language. Specs from maker pages and current street reports only.
