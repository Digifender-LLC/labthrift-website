# First NAS / cheap storage — Labthrift topic research

**Research date:** Saturday 22 August 2026 (America/Chicago).  
**Audience:** one-person home lab. First backup box, then maybe light Docker / iSCSI.  
**Method:** Native WebSearch + WebFetch. GetDynamicTools (`cursor` MCP namespace) was not available in this environment (only user-Browser-use, Browserstack, Cloudflare, Figma, Kraken, Postman).  
**Constraint:** every proposed SKU has a live Amazon ASIN, Newegg, B&H, or maker storefront (Synology / UGREEN / TerraMaster / Asustor / Seagate / WD). No eBay used. No invented products, prices, or clickbait headlines. No fake burn-in.

## Do not duplicate

Existing Labthrift guide (`guides/first-nas.html`, 21 Aug 2026):

> Two-bay Synology if you want sleep; UGREEN DXP4800 Plus if you want 10G and Docker; DIY TrueNAS on a mini PC if you already like pain.

These 15 ideas are **not** that three-way roundup. Dedicated single-SKU reviews, 4-bay growth, 2.5G (not 10G) UGREEN, TerraMaster, Asustor, RAID/drives/power/form-factor posts.

## Dropped (affiliate / policy)

- **Used Synology DS918+.** Hardware is real (J3455, 4-bay, 4 GB DDR3L official max 8 GB, dual 1GbE, two M.2). DSM 7.4 is listed as last upgradable version for DS918+ (SynoForum / SNBForums, Jun–Jul 2026). **No current Synology Certified Refurbished listing.** Third-party “refurb” (Goto Direct, ServersFit) is not an official-refurb path. Do not publish until Synology store lists it.
- **iXsystems TrueNAS Mini X+ as the lead affiliate SKU.** Official product is real (C3758, 32 GB ECC, 5×3.5" + 2×2.5", dual 10GBase-T). Buy path is iXsystems configurator (USA/Canada). Historical Amazon ASIN B08FCWBVWX is not confirmed in-stock as a stable Associates target today. Use Mini only as a comparison mention; affiliate the TerraMaster F4-424 Pro + IronWolf instead.
- **UGREEN DXP4800 Plus as a “first NAS pick” post.** Already the existing guide’s 10G/Docker slot. DXP2800 (2-bay, 2.5GbE) is the distinct UGREEN review.

## Cross-cutting flags (put in every drive-related post)

### CMR vs SMR

- **Buy:** WD Red Plus (CMR; 8 TB example WD80EFPX, 5640 RPM, 256 MB, 180 TB/yr, 3-year). WD Red Pro (CMR, 7200). Seagate IronWolf / IronWolf Pro (CMR). Toshiba N300 / N300 Pro (CMR).
- **Avoid in RAID / ZFS / iSCSI:** plain WD Red `EFAX` (DM-SMR, 2–6 TB, 2019–2022 controversy). WD Blue 3.5" `EZAZ`. Seagate BarraCuda 3.5" 4 TB / 8 TB (SMR). Toshiba P300 4 TB / 6 TB (SMR). Host-managed Seagate Exos SMR (32/36/44 TB) is not a home-NAS drive.
- WD created **Red Plus** specifically so buyers would stop getting SMR “Red” in RAID. Confirm the model suffix before checkout. Used/old-stock `EFAX` is how people still get SMR in 2026.

### 5400 / 5640 RPM “NAS” drives vs VM iSCSI

- These drives are fine for backups, Time Machine, media, Hyper Backup. They are **not** fine as the only datastore for Proxmox / VMware / Hyper-V over iSCSI.
- Rotational latency and 8–12 ms seeks dominate 4K/8K random I/O. Tom’s Hardware (IronWolf 12 TB RAID5): 7200 RPM IronWolf pulled ahead of 5400 RPM WD Red on SMB and iSCSI under mixed/random load; WD Red “isn’t” the iSCSI pick. HomeLabPicks (2026): IronWolf 8 TB ~210 MB/s seq vs Red Plus 8 TB ~185/175–180 MB/s; **random I/O similar and “neither will feel fast vs a SATA SSD cache.”**
- IronWolf **capacity trap:** 1–6 TB IronWolf SKUs are 5400 RPM (e.g. ST4000VN006 4 TB). 8 TB ST8000VN004 is 7200 RPM. Do not assume “IronWolf” means 7200.
- WD Red Plus 8 TB WD80EFPX is **CMR but 5640 RPM**. Safe for SHR/RAID1. Wrong for a VM LUN unless you add NVMe/SATA SSD cache or a dedicated SSD pool.
- Synology DS224+ SAN Manager: **max 2 iSCSI targets, 4 LUNs.** That is a product limit, not a drive limit.

### No burn-in

No Labthrift power-on hours, SMART logs, or fio numbers exist yet. Cite maker lab figures and named third-party reviews only. Say so in the post.

---

## 15 post ideas

### 1. Synology DS224+ — 2-bay Plus, DSM, 1GbE ceiling

- **Title:** Synology DS224+ 2-bay review: DSM, 1GbE, and the 6 GB RAM lid
- **Slug:** `synology-ds224-plus-review`
- **Type:** product review
- **Angle:** Single-SKU review of the sleep-friendly Plus box — not the existing “Synology vs UGREEN” pick. Cover official 14.69 W access / 4.41 W hibernation / 22 dB(A), scheduled on/off, dual 1GbE (~110 MB/s per client), no M.2, no PCIe, official 2+4 GB RAM, VMM “recommended 2 VMs,” SAN Manager 2 targets / 4 LUNs. Why DSM still wins for Hyper Backup / Photos; why this is the wrong box the day you want 2.5G or a VM datastore.
- **SKU:** DS224+. CPU Intel Celeron J4125 (4C/4T, 2.0/2.7 GHz). RAM 2 GB DDR4 non-ECC + 1 slot, official max 6 GB (2+4). Bays 2× 3.5" SATA HDD or 2.5" SATA SSD, hot-swap. NIC 2× 1GbE (MTU 1500). USB 2× 3.2 Gen 1. No M.2. RAID: SHR, Basic, JBOD, 0, 1. Warranty 2 years (extendable to 4 with Extended Warranty Plus, NA/EU).
- **Street (found, not invented):** Synology-class US MSRP cited at **$299.99** (FrontDeskReview, verified synology.com 27 Jun 2026). Amazon diskless ASIN B0C6927XPX exists; a 16 Aug 2026 price-history snapshot showed **$499.99** on that ASIN (third-party / bundle noise — confirm the diskless style before linking). B&H diskless: `1781611-REG`.
- **Affiliate path:** Amazon Associates on **B0C6927XPX** (diskless only — skip B0CTQMPJ9M / B0FZXFXRHJ drive bundles). B&H affiliate. Synology maker page (US store was “being updated” on 22 Aug 2026).
- **Live URLs:**
  - https://www.synology.com/en-us/products/DS224+
  - https://www.amazon.com/Synology-2-Bay-DiskStation-DS224-Diskless/dp/B0C6927XPX
  - https://www.bhphotovideo.com/c/product/1781611-REG/synology_2_bay_diskstation_ds224_compact.html
  - https://global.download.synology.com/download/Document/Hardware/ProductSpec/DiskStation/24-year/DS224+/enu/Product_Spec_DS224+_enu.pdf
- **Sources:** Synology product page + spec PDF (updated 17 Jun 2026); PAM Finds DS224+ review 2026; B&H listing.
- **Search intent:** “DS224+ review”, “Synology 2 bay Plus 2026”, “DS224+ RAM upgrade”, “is DS224+ too slow”.

### 2. Synology DS423+ — 4-bay Plus you can still buy new

- **Title:** Synology DS423+ 4-bay review: M.2 cache, still gigabit
- **Slug:** `synology-ds423-plus-review`
- **Type:** product review
- **Angle:** The 4-bay Plus that is still on B&H as a new diskless unit. Same J4125 as DS224+, but four SATA bays + two M.2 2280 NVMe (cache or pool). Still dual 1GbE, still 2 GB / official 6 GB. This is the growth box if the reader already decided DSM — not a used DS918+. Flag Amazon diskless **currently unavailable** (22 Aug 2026); lead with B&H.
- **SKU:** DS423+. J4125, 2 GB DDR4 (soldered) + 4 GB SO-DIMM official max 6 GB. 4× 3.5"/2.5" SATA, 2× M.2 NVMe 2280. 2× 1GbE. 2× USB 3.2 Gen 1. 2× 92 mm fans. 166 × 199 × 223 mm, 2.18 kg. 3-year warranty.
- **Street (found):** B&H **$499.99** diskless (listing live). Amazon ASIN B0BXMS9GFF exists, **out of stock** at fetch. Android Central historically listed $514 Amazon / $499 B&H.
- **Affiliate path:** B&H (primary). Amazon Associates on B0BXMS9GFF only when in stock. Skip Newegg 14P-000V-004V2 (third-party 16 TB + RAM bundle, first listed 22 Jun 2026).
- **Live URLs:**
  - https://www.bhphotovideo.com/c/product/1757288-REG/synology_diskstation_ds423_4_bay_nas.html
  - https://www.amazon.com/dp/B0BXMS9GFF
  - https://global.synologydownload.com/download/Document/Hardware/DataSheet/DiskStation/23-year/DS423%2B/enu/Synology_DS423%2B_Data_Sheet_enu.pdf
  - https://global.download.synology.com/download/Document/Hardware/ProductSpec/DiskStation/23-year/DS423+/enu/Product_Spec_DS423+_enu.pdf
- **Sources:** Synology datasheet/spec PDF; B&H; Android Central review; HardwareLab 2026 review.
- **Search intent:** “DS423+ review”, “Synology 4 bay 2026”, “DS423+ vs DS224+”, “DS423+ M.2 cache”.

### 3. UGREEN NASync DXP2800 — 2-bay N100, 2.5GbE (not the 10G Plus)

- **Title:** UGREEN DXP2800 review: 2-bay N100 and 2.5GbE without paying for 10G
- **Slug:** `ugreen-dxp2800-review`
- **Type:** product review
- **Angle:** Distinct from the existing DXP4800 Plus “10G + Docker” slot. This is the 2-bay UGOS box: Intel N100, 8 GB DDR5 (official max 16 GB), 1× 2.5GbE, 2× M.2, 32 GB eMMC, HDMI 4K. Official access 16.38 W / hibernation 5.24 W. UGOS Pro security support through 8 May 2029. x86 means TrueNAS/Unraid later is possible; do not promise it as a Labthrift test.
- **SKU:** DXP2800. Maker SKU 25242. Amazon ASIN **B0D22HBFK1**.
- **Street (found):** UGREEN store **$369.99** (listed $439.99, $70 off). Amazon price-history **$369.95** (avg $325.66, high $439.99).
- **Affiliate path:** Amazon Associates B0D22HBFK1. UGREEN maker store (ai.ugreen.com / nas.ugreen.com).
- **Live URLs:**
  - https://ai.ugreen.com/products/ugreen-nasync-dxp2800-nas-storage
  - https://www.amazon.com/UGREEN-DXP2800-Quad-core-Attached-Diskless/dp/B0D22HBFK1
  - https://support.ugnas.com/detail/article/en-US/215 (UGOS security end dates)
  - https://www.wundertech.net/best-ugreen-nas/
- **Sources:** UGREEN product page; Amazon listing; UGOS support statement; WunderTech 2026 model table.
- **Search intent:** “DXP2800 review”, “UGREEN 2 bay NAS”, “N100 NAS 2.5G”, “DXP2800 vs DS224+”.

### 4. TerraMaster F2-425 — cheapest current x86 2-bay

- **Title:** TerraMaster F2-425 review: Intel 2-bay with 2.5GbE under $260
- **Slug:** `terramaster-f2-425-review`
- **Type:** product review
- **Angle:** Entry Intel box vs ARM toys and vs DS224+. Official store: Intel Celeron N5095, 4 GB DDR4, 1× 2.5GbE, no M.2, TOS 6, TRAID, HDMI, 19.0 dB(A) standby claim, 2-year warranty. Neowin measured 22 W access / 11 W hibernation with 2× IronWolf 4 TB ST4000VN008. Aging N5095; no NVMe — say that. CPU labeling on some retailer pages says “N95”; **use TerraMaster official N5095**, not Newegg’s conflicting F4-425 “N95” table.
- **SKU:** F2-425 diskless.
- **Street (found):** TerraMaster store **$254.99** (listed $299.99). Neowin MSRP $249.99, Amazon promo $224.99 at review time. Newegg official-store listing `14P-006A-00096`. TechRadar Amazon **$239.98**.
- **Affiliate path:** TerraMaster official store. Newegg (TERRAMASTER OFFICIAL). Amazon if the diskless ASIN on the product page is still the diskless unit (confirm title; do not link bundles).
- **Live URLs:**
  - https://www.terra-master.com/products/f2-425
  - https://www.newegg.com/terra-master-f2-425-2-bay-intel-x86-4-core-processor-2-x-30tb/p/14P-006A-00096
  - https://www.neowin.net/reviews/terramaster-f2-425-review-a-low-cost-local-cloud-backup-and-streaming-nas/
  - https://nascompares.com/2026/03/16/terramaster-f2-425-nas-should-you-buy-it/
- **Sources:** TerraMaster store; Neowin review; NAS Compares 16 Mar 2026; Newegg.
- **Search intent:** “F2-425 review”, “cheapest x86 NAS”, “TerraMaster 2 bay 2026”.

### 5. TerraMaster F4-425 — 4-bay budget TRAID

- **Title:** TerraMaster F4-425 review: 4-bay x86 and 2.5GbE without NVMe
- **Slug:** `terramaster-f4-425-review`
- **Type:** product review
- **Angle:** Four bays at the price of a 2-bay Plus. Official: N5095, 4 GB DDR4 (Newegg table: 1 slot, max 16 GB), 1× 2.5GbE, **no M.2**, TRAID/TRAID+, HDMI, 21.0 dB(A) standby claim, 90 W brick. Good “start with two disks, add later” chassis. TOS vs DSM honesty. Same CPU-label caution as F2-425: official marketing says N5095; Newegg spec block says N95 — **quote official store + Neowin N5095**.
- **SKU:** F4-425 diskless.
- **Street (found):** TerraMaster store **$343.99** (listed $429.99). Newegg official listing `14P-006A-00097`. Datacenterdisk table **$365.49**.
- **Affiliate path:** TerraMaster store. Newegg official store.
- **Live URLs:**
  - https://www.terra-master.com/products/f4-425
  - https://www.newegg.com/terra-master-4-bay-f4-425-intel-x86-4-core-processor-diskless-system/p/14P-006A-00097
  - https://nascompares.com/review/terramaster-f4-425-nas-should-you-buy/
  - https://www.terra-master.com/blogs/news/f4-425
- **Sources:** TerraMaster product + launch post (N5095); Newegg; NAS Compares; datacenterdisk 2026 table.
- **Search intent:** “F4-425 review”, “cheap 4 bay NAS 2026”, “TerraMaster TRAID”.

### 6. Asustor AS5402T — 2-bay with four M.2 and dual 2.5GbE

- **Title:** Asustor AS5402T review: four NVMe slots on a 2-bay NAS
- **Slug:** `asustor-as5402t-review`
- **Type:** product review
- **Angle:** The first-NAS that is actually an all-flash-capable 2-bay. N5105, 4 GB DDR4-2933 (max 16 GB, 8 GB × 2), **4× M.2 2280 NVMe**, 2× 2.5GbE (ADM SMB multichannel), 3× USB 3.2 Gen 2, HDMI 2.0b, S3 sleep 0.71 W claim, access 22.9 W / hibernation 12.7 W. RAID on two SATA bays is 0/1/JBOD only. Use M.2 for VMs/apps; SATA for bulk CMR HDD. ADM vs DSM. 3-year warranty.
- **SKU:** AS5402T (Nimbustor 2 Gen2). Amazon **B0C5MB5MTS**. B&H `1792956-REG`. Newegg `14P-0016-000T8`.
- **Street (found):** B&H **$369.00**. Newegg third-party **$406.99–$437.27**. Amazon.ca listing existed at CAD $595 — use US Amazon B0C5MB5MTS and confirm US price at publish.
- **Affiliate path:** Amazon Associates B0C5MB5MTS (diskless). B&H. Newegg. Asustor maker page.
- **Live URLs:**
  - https://www.asustor.com/en/product?p_id=81
  - https://www.asustor.com/materials/datasheet/Datasheet_Nimbustor_2_Gen_2_(AS5402T)_Global%20ENG.pdf
  - https://www.amazon.com/Asustor-AS5402T-Quad-Core-2x2-5GbE-Attached/dp/B0C5MB5MTS
  - https://www.bhphotovideo.com/c/product/1792956-REG/asustor_as5402t_asustor_nimbustor_2gen2_2bay.html
- **Sources:** Asustor product + datasheet; 2025 comparison PDF; B&H; Newegg.
- **Search intent:** “AS5402T review”, “Asustor 2 bay NVMe”, “Nimbustor 2 Gen2”.

### 7. Asustor AS5404T — 4-bay Nimbustor Gen2

- **Title:** Asustor AS5404T review: 4-bay, dual 2.5GbE, four M.2
- **Slug:** `asustor-as5404t-review`
- **Type:** product review
- **Angle:** Same N5105 / 4 GB / 4× M.2 / dual 2.5GbE as AS5402T, plus RAID 5/6/10 and hot spare. Access 38.3 W / hibernation 17.7 W / S3 0.81 W. 90 W brick. The “I will host a few VMs on NVMe and park media on HDD” 4-bay that is not Synology 1GbE and not UGREEN 10G. ADM App Central / virtualization honesty.
- **SKU:** AS5404T. Amazon **B0C5M8RMMM**.
- **Street (found):** Amazon listing **$582.99** (113 reviews, 4.2). Search synthesis also cited $530–$692 across shops — publish the live Amazon/B&H number only.
- **Affiliate path:** Amazon Associates B0C5M8RMMM. Asustor maker page.
- **Live URLs:**
  - https://www.asustor.com/en-gb/product?p_id=82
  - https://www.asustor.com/materials/datasheet/Datasheet_Nimbustor_4_Gen_2_(AS5404T)_Global%20ENG.pdf
  - https://www.amazon.com/Asustor-AS5404T-Quad-Core-2x2-5GbE-Attached/dp/B0C5M8RMMM
  - https://www.asustor.com/materials/datasheet/2025_All_Product_Comparison_US_ENG.pdf
- **Sources:** Asustor datasheet + 2025 comparison PDF; Amazon listing.
- **Search intent:** “AS5404T review”, “Asustor 4 bay 2.5G”, “Nimbustor 4 Gen2”.

### 8. TerraMaster F4-424 Pro as a TrueNAS / UGOS host

- **Title:** TerraMaster F4-424 Pro: 32 GB DDR5 4-bay for Docker or TrueNAS
- **Slug:** `terramaster-f4-424-pro-truenas`
- **Type:** product review (chassis + OS fork)
- **Angle:** Not “buy a Mini X+.” This is the affiliatable 4-bay that already has i3-N305 (8C/8T, 3.8 GHz burst), **32 GB DDR5 (officially not upgradable)**, dual 2.5GbE, dual M.2, TOS out of the box, and an x86 board people actually put TrueNAS/Unraid on. Non-ECC RAM — say that. Dual 2.5GbE LACP claim 283 MB/s (TerraMaster, 4× 18 TB RAID 0). Compare in passing to iXsystems Mini X+ (ECC, 10GBase-T, ~$1909 diskless on iX configurator 2026 forum report) without making Mini the buy button.
- **SKU:** F4-424 Pro diskless. Amazon **B0CPPD51B9**. Official store https://www.terra-master.com/products/f4-424-pro
- **Street (found):** Official-class **$699.99** (nashq/F4424PRO.pdf). TerraMaster comparison table **$730.99**. Datacenterdisk **$687.99**. Confirm live price at publish.
- **Affiliate path:** Amazon B0CPPD51B9. TerraMaster store. Newegg `14P-006A-00066`.
- **Live URLs:**
  - https://www.terra-master.com/products/f4-424-pro
  - https://www.amazon.com/TERRAMASTER-F4-424-Pro-NAS-Storage/dp/B0CPPD51B9
  - https://www.truenas.com/truenas-mini/ (comparison only)
  - https://forums.truenas.com/t/testimonial-how-to-buy-a-truenas-mini-x-in-2026-outside-the-us/64732
- **Sources:** TerraMaster spec page; Amazon listing; iXsystems Mini spec page; TrueNAS forum 2026 US configurator $1909.
- **Search intent:** “F4-424 Pro TrueNAS”, “TerraMaster 32GB NAS”, “i3-N305 NAS review”.

### 9. DS224+ vs DS423+ — stay in DSM, add bays

- **Title:** DS224+ vs DS423+: 2-bay or 4-bay Synology Plus
- **Slug:** `ds224-plus-vs-ds423-plus`
- **Type:** comparison / buyer guide
- **Angle:** Not Synology vs UGREEN. Same CPU. Same 1GbE. Same official 6 GB lid. Difference is bays, M.2, fans, warranty (2 vs 3 years), and street (~$300 class vs $499.99 B&H). When SHR-on-two-disks is enough; when empty bays matter more than a faster NIC. Point readers at the existing first-NAS guide if they want 10G/Docker instead.
- **SKUs:** DS224+ (B0C6927XPX, B&H 1781611-REG); DS423+ (B0BXMS9GFF, B&H 1757288-REG).
- **Street:** DS224+ official ~$299.99; DS423+ B&H $499.99 diskless.
- **Affiliate path:** Amazon + B&H on both diskless ASINs.
- **Live URLs:** same as posts 1 and 2, plus WunderTech SHR calculator https://www.wundertech.net/synology-raid-calculator-shr-vs-raid/
- **Sources:** both Synology spec PDFs; B&H; WunderTech SHR.
- **Search intent:** “DS224+ vs DS423+”, “Synology 2 bay or 4 bay”, “do I need four bays”.

### 10. RAID 1 vs SHR on a first Synology

- **Title:** SHR vs RAID 1 on a 2-bay or 4-bay Synology
- **Slug:** `synology-shr-vs-raid-1`
- **Type:** buyer guide
- **Angle:** Two identical disks: SHR ≈ RAID 1. Third disk: SHR becomes RAID 5-like and **grows**; RAID 1 does not add a third member as capacity (it can add a mirror). Mixed sizes: SHR uses leftover slices; RAID 5/6 waste down to the smallest disk. SHR-2 needs four disks. RAID is not backup. Tie to DS224+ (2-bay: SHR or RAID 1 only) and DS423+ (can go SHR → three/four disks).
- **SKUs (affiliate the chassis + example CMR pair):** DS224+ / DS423+ as above; example disks WD80EFPX or ST8000VN004 (see post 11).
- **Street:** chassis as above; drives as post 11.
- **Affiliate path:** Amazon/B&H on DS224+/DS423+; Amazon/Newegg on the example HDD pair.
- **Live URLs:**
  - https://www.wundertech.net/synology-raid-calculator-shr-vs-raid/
  - https://needtoknowit.com.au/blog/what-is-shr-synology-hybrid-raid-explained/
  - https://www.storagealchemist.com/exploring-raid-types-in-synology-nas/
  - https://community.synology.com/enu/forum/1/post/123058
- **Sources:** WunderTech; Need to Know IT; Storage Alchemist; Synology community (cannot expand RAID 1 by adding a third disk without migration).
- **Search intent:** “SHR vs RAID 1”, “Synology Hybrid RAID”, “can I add a drive to RAID 1”.

### 11. 2026 NAS HDD picks — CMR only, and the 5400 RPM iSCSI trap

- **Title:** NAS HDDs 2026: Red Plus, IronWolf, N300 — skip SMR and 5400 RPM for VMs
- **Slug:** `nas-hdd-picks-2026-cmr`
- **Type:** buyer guide
- **Angle:** One rule: CMR in any RAID/ZFS. Second rule: 5400/5640 RPM NAS drives choke VM iSCSI; put VMs on SATA/NVMe SSD. Table three current retail 8 TB SKUs. Call out IronWolf 1–6 TB as 5400 RPM. Call out WD Red (no Plus) `EFAX` as SMR. No Labthrift burn-in; cite maker RPM/workload and named reviews.
- **SKUs (current retail):**
  - Seagate IronWolf 8 TB **ST8000VN004** — 7200 RPM, 256 MB, CMR, 180 TB/yr, 3-year. Amazon **B07XQ18JJW**.
  - WD Red Plus 8 TB **WD80EFPX** — 5640 RPM, 256 MB, CMR, 180 TB/yr, 3-year, 1–8 bay. Amazon **B0CMQ6SK7W**. Newegg `1Z4-0002-01NP7` **$354.99**. CamelCamelCamel list **$224.99** (scan ~21 Aug 2026).
  - Toshiba N300 8 TB **HDWG480XZSTA** — 7200 RPM, 256 MB, CMR, 180 TB/yr. Newegg `N82E16822149793`.
  - **Avoid (do not affiliate):** WD Red `WDxxEFAX` SMR; BarraCuda 3.5" SMR 4/8 TB.
- **Street:** use live Amazon/Newegg at publish. Do not freeze $160 IronWolf or $32/TB Red Plus as “the” price — those are third-party 2026 snapshots and they disagree ($160 vs $259 vs $354).
- **Affiliate path:** Amazon Associates (B07XQ18JJW, B0CMQ6SK7W). Newegg (WD80EFPX, HDWG480XZSTA). Seagate / WD maker pages.
- **Live URLs:**
  - https://www.amazon.com/Seagate-IronWolf-Internal-Warranty-ST8000VN004/dp/B07XQ18JJW
  - https://www.amazon.com/Western-Digital-Plus-Internal-Drive/dp/B0CMQ6SK7W
  - https://www.newegg.com/red-plus-wd80efpx-8tb/p/1Z4-0002-01NP7
  - https://www.newegg.com/toshiba-n300-hdwg480xzsta-8tb/p/N82E16822149793
- **Sources:** ComputingForGeeks CMR 2026 list; Need to Know IT SMR 2026; WD Red vs Plus vs Pro 2026; HomeLabPicks IronWolf vs Red Plus; Tom’s Hardware IronWolf 12 TB iSCSI; Seagate IronWolf historical datasheet (low capacities 5900 RPM).
- **Search intent:** “best NAS drive 2026”, “CMR vs SMR NAS”, “WD Red Plus vs IronWolf”, “NAS drive for iSCSI VMs”.

### 12. 2.5-inch vs 3.5-inch in a first NAS

- **Title:** 2.5-inch vs 3.5-inch in a first NAS: HDD bulk vs SATA SSD apps
- **Slug:** `nas-2-5-vs-3-5-drives`
- **Type:** comparison / buyer guide
- **Angle:** Every chassis in this file takes 3.5" SATA **or** 2.5" SATA in the same bays. Do not fill those bays with old laptop HDDs (low TB, desktop firmware, no RV sensors). Use 3.5" CMR NAS HDDs for bulk. Use a 2.5" SATA SSD when you need IOPS for DSM/UGOS apps, a small VM volume, or a quiet/low-power pool. Samsung 870 EVO is compatibility-listed on Asustor AS54 and marketed as NAS-tested; still a **client** SSD (not a NAS-endurance SKU). Synology’s own 2.5" line is SAT5200 / SAT5210 (compatibility-list, often pricier).
- **SKUs:**
  - 3.5" bulk: ST8000VN004 / WD80EFPX (post 11).
  - 2.5" SATA SSD: Samsung 870 EVO 2 TB **MZ-77E2T0B/AM**. Newegg `N82E16820147794`. Samsung US store. Amazon third-party B09X198TN5 (brand field dirty — **prefer Newegg or Samsung US**). Official Samsung US price on page **$879.99** (22 Aug 2026 fetch); street moves, do not invent a sale price.
- **Affiliate path:** Newegg 870 EVO. Amazon only if the live listing is the official Samsung card. HDD ASINs as post 11. Chassis as needed.
- **Live URLs:**
  - https://www.samsung.com/us/memory-storage/sata-ssd/870-evo-sata-2-5-ssd-2tb-sku-mz-77e2t0b-am/
  - https://www.newegg.com/samsung-2tb-870-evo-series-sata/p/N82E16820147794
  - https://www.asustor.com/services/hd?brand_id=2&class=Consumer&id=hd (870 EVO on AS54)
  - https://darwinsdata.com/whats-the-difference-between-a-2-5-inch-sata-drive-and-a-3-5-inch-sata-drive/
- **Sources:** Darwin’s Data form-factor; Orange Hardwares NAS note; Asustor compatibility; Samsung 870 EVO spec (560/530 MB/s, 1200 TBW on 2 TB).
- **Search intent:** “2.5 vs 3.5 NAS”, “laptop drive in NAS”, “SATA SSD for Synology apps”.

### 13. 2.5GbE vs 10GbE on the NAS (not another switch roundup)

- **Title:** 2.5G vs 10G on a first NAS: when the NIC is the waste
- **Slug:** `nas-2-5g-vs-10g`
- **Type:** comparison / buyer guide
- **Angle:** Existing Labthrift switch guide already picks closet 2.5G switches. This post is **NAS-side**: DS224+/DS423+ are 1GbE-only (no NIC upgrade). DXP2800 / F2-425 / F4-425 / AS54 are 2.5GbE. DXP4800 Plus is 10G+2.5G (already covered as a pick — mention, do not re-roundup). A single HDD RAID1 tops out ~150–210 MB/s (1.2–1.7 Gbps) — **2.5G is enough** until you add SSD pool, many clients, or 4K edit-off-NAS. 10G needs a switch + DAC/NIC budget. Pair with TL-SG108-M2 if they only need 2.5G; CRS305-1G-4S+IN if they already bought a 10G NAS.
- **SKUs:**
  - 1GbE NAS: DS224+ / DS423+.
  - 2.5GbE NAS: DXP2800, F2-425, AS5402T.
  - 10GbE NAS (mention only): DXP4800 Plus, Amazon **B0D22JRHZB**, UGREEN $619.99, SKU 35260.
  - 2.5G switch: TP-Link **TL-SG108-M2**, Amazon **B08ZHZL5Q7**, official max 15.6–15.65 W, fanless, 8× 2.5G. (Existing switch guide prefers TL-SG108S-M2 — say so; this ASIN is the older sibling still sold.)
  - 10G switch: MikroTik **CRS305-1G-4S+IN**, official suggested **$149**, Amazon B07LFKGP1L / B08437RDM1 (listing ~$136–$144.95). 4× SFP+ + 1× 1GbE, fanless, modules not included.
- **Affiliate path:** Amazon on NAS + TL-SG108-M2 + CRS305. Maker pages (TP-Link, MikroTik, UGREEN).
- **Live URLs:**
  - https://www.tp-link.com/us/business-networking/omada-sdn-switch/tl-sg108-m2/
  - https://www.amazon.com/TP-Link-TL-SG108-M2-Multi-Gigabit-Wall-Mount-Protection/dp/B08ZHZL5Q7
  - https://mikrotik.com/product/crs305_1g_4s_in
  - https://www.amazon.com/gp/product/B07LFKGP1L
  - https://techfuelhq.com/networking/25gbe-vs-10gbe-homelab-2026/
- **Sources:** TP-Link / MikroTik official; TechFuelHQ 2026; SpeedTestHQ 2026; UGREEN DXP4800 Plus page.
- **Search intent:** “does my NAS need 10G”, “2.5G vs 10G NAS”, “is gigabit NAS enough 2026”.

### 14. Power and noise — bedroom vs closet

- **Title:** NAS watts and dB(A): DS224+ vs DXP2800 vs F2-425 vs AS5402T
- **Slug:** `nas-power-noise-first-box`
- **Type:** buyer guide
- **Angle:** Use **maker lab numbers only**, same disclaimer as the existing first-NAS note. A 24/7 box in a bedroom is a different SKU than a closet next to a GPU workstation. Scheduled power on DS224+. S3 sleep on Asustor. UGREEN 10G 4-bay is the loud/hot end (mention DXP4800 Plus 42.36 / 18.12 W as the skip-for-bedroom number — already in the old guide).
- **Published figures (maker, not Labthrift):**
  - DS224+: 14.69 W access, 4.41 W HDD hibernation, **22 dB(A)** idle with Synology HDDs, 1 m, 60 W brick.
  - DXP2800: 16.38 W access, 5.24 W hibernation (UGREEN lab, Seagate 2 TB).
  - DXP4800 Plus: 42.36 W access, 18.12 W hibernation; quiet mode **29–34 dB** (UGREEN).
  - F2-425: official 19.0 dB(A) standby; Neowin 22 W / 11 W with 2× ST4000VN008; 48 W brick.
  - AS5402T: 22.9 / 12.7 / **0.71 W S3**; 65 W brick.
- **SKUs:** same diskless ASINs as posts 1, 3, 4, 6.
- **Affiliate path:** Amazon/B&H/maker on those four chassis. Optional: 5400 RPM Red Plus if the reader is optimizing dB (and is **not** doing iSCSI VMs).
- **Live URLs:**
  - DS224+ spec PDF (notes on how Synology measures noise/power)
  - https://ai.ugreen.com/blogs/knowledge/how-much-power-does-your-nas-consume
  - https://ai.ugreen.com/products/ugreen-nasync-dxp2800-nas-storage
  - AS5402T datasheet (power table)
- **Sources:** Synology spec notes; UGREEN power blog; Neowin F2-425; Asustor datasheet.
- **Search intent:** “quiet NAS for bedroom”, “NAS power consumption”, “DS224+ noise”, “NAS electricity cost”.

### 15. Buy an appliance or DIY — first backup box

- **Title:** First NAS: buy DSM/ADM/TOS or DIY TrueNAS on a TerraMaster
- **Slug:** `first-nas-diy-vs-appliance`
- **Type:** buyer guide
- **Angle:** Existing guide already says “DIY on a mini PC if you like pain.” This post is the **next** question: x86 4-bay appliance you can re-image (F4-424 Pro / F4-425 / DXP2800) vs staying on vendor OS (DS224+/DS423+/AS54). DIY wins RAM, Docker, ZFS, no app tax. Appliance wins snapshots-that-restore, sleep, and not spending a weekend on HCL. ECC is the Mini X+ argument — and Mini is not the affiliate SKU. Do **not** send a first-backup user to a used LSI HBA scavenger hunt.
- **SKUs (affiliate):**
  - Appliance path: DS224+ B0C6927XPX; DS423+ B&H; AS5402T B0C5MB5MTS.
  - Re-image path: F4-424 Pro B0CPPD51B9; DXP2800 B0D22HBFK1.
  - Drives: ST8000VN004 / WD80EFPX.
- **Street:** as in those posts. Mini X+ US configurator **$1909** diskless (forum, 2026) — cite as comparison only.
- **Affiliate path:** Amazon + TerraMaster + Synology/B&H + UGREEN. No eBay HBA. No Mini as the CTA.
- **Live URLs:**
  - https://evezone.evetech.co.za/deep-dives/diy-truenas-vs-a-pre-built-nas-appliance-which-should-you-build
  - https://www.terra-master.com/products/f4-424-pro
  - https://www.synology.com/en-us/products/DS224+
  - https://www.truenas.com/truenas-mini/
- **Sources:** Evezone 2026 DIY vs appliance; TerraMaster / Synology official; iXsystems Mini page; linhpham.org Mini X+ (older $1448 snapshot — label as historical).
- **Search intent:** “DIY TrueNAS vs Synology”, “should I build a NAS”, “TrueNAS on TerraMaster”.

---

## Suggested publish order (affiliate + distinct from the live guide)

1. `nas-hdd-picks-2026-cmr` — every later review links here; highest attach rate (2–4 drives).
2. `synology-shr-vs-raid-1` — captures “I just bought a Synology” queries.
3. `synology-ds423-plus-review` — 4-bay Plus, not in the live guide.
4. `ugreen-dxp2800-review` — 2.5G UGREEN, not the 10G Plus.
5. `asustor-as5402t-review` — M.2/2.5G story nobody else on the site has.
6. `terramaster-f2-425-review` then `terramaster-f4-425-review`.
7. `nas-2-5g-vs-10g` — cross-link the existing 2.5G switch guide; do not rewrite it.
8. `nas-power-noise-first-box`.
9. The rest as supporting cluster.

## Working notes for writers

- Link **diskless** chassis only. Amazon is full of 6 GB + 16 TB reseller bundles with new ASINs.
- Re-check Amazon stock on DS423+ (B0BXMS9GFF was unavailable 22 Aug 2026). B&H was the live $499.99 path.
- Synology US storefront was down/updating 22 Aug 2026; product pages still work.
- TerraMaster F2-425 / F4-425 CPU: **N5095 on official pages.** Do not copy Newegg’s N95 row.
- IronWolf: read the RPM on the exact capacity. ST4000VN006 is 5400; ST8000VN004 is 7200.
- WD: Plus or Pro. Never bare “Red.”
- Prices move. The numbers above are **found on 22 Aug 2026** (or dated in the source). Re-fetch at publish. Do not write “we measured” until there is a burn-in log.
