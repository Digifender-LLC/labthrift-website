# Asustor AS5404T review: 4-bay, dual 2.5GbE, four M.2

Source: https://labthrift.com/guides/asustor-as5404t-review
Markdown: https://labthrift.com/md/guides/asustor-as5404t-review.md

*Notes › / › File storage › / › Asustor AS5404T review: 4-bay, dual 2.5GbE, four M.2*

[Notes](<./>) / [File storage](<./#first-nas>) / Asustor AS5404T review: 4-bay, dual 2.5GbE, four M.2

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these. Confirm the diskless SKU before you click: Amazon is full of drive bundles.

# Asustor AS5404T review: 4-bay, dual 2.5GbE, four M.2

Four bays when two are not enough, with a faster port than Synology's gigabit Plus boxes. Skip UGREEN 10G tax if you don't need it.

Nimbustor 4 Gen2. Official datasheet: Intel Celeron N5105, 4 GB DDR4-2933 (max 16 GB, 8 GB × 2), four 2.5" / 3.5" SATA, four M.2 2280 NVMe, dual 2.5GbE, three USB 3.2 Gen 2, HDMI 2.0b. 170 × 174 × 230 mm, 2.26 kg. 90 W brick. 3-year warranty. Volume types: Single, JBOD, RAID 0 / 1 / 5 / 6 / 10, RAID 1 / 5 + hot spare.

Power table: 38.3 W operation, 17.7 W hibernation, 0.81 W S3. That is the 4-bay tax versus the [AS5402T](<asustor-as5402t-review>) 22.9 / 12.7 / 0.71 W. Still an S3 story. Still maker lab numbers. I haven't measured wall watts.

The job this box is for: a few VMs on NVMe, media and backups on CMR HDD, 2.5G to a closet switch. ADM App Central and virtualization are real; they are not DSM. If the restore is the product, [DS423+](<synology-ds423-plus-review>) is still the Plus 4-bay, and still gigabit. If you want 10G and Docker as a first-NAS pick, that remains the [DXP4800 Plus slot](<first-nas>). If you want 32 GB and an x86 board people re-image, [F4-424 Pro](<terramaster-f4-424-pro-truenas>).

CMR in the SATA bays. Skip WD Red `EFAX`, Blue `EZAZ`, BarraCuda 3.5" 4 / 8 TB SMR. IronWolf 1–6 TB is 5400 RPM; `ST8000VN004` 8 TB is 7200. WD Red Plus WD80EFPX is CMR and 5640 RPM, backups yes, VM LUN no, unless the VMs live on M.2. Guide: [2026 CMR picks](<nas-hdd-picks-2026-cmr>).

## Street, 22 Aug 2026

Path| Listing| Note  
---|---|---  
Amazon diskless| Listing $582.99 at research fetch (113 reviews, 4.2).| [B0C5M8RMMM](<https://www.amazon.com/Asustor-AS5404T-Quad-Core-2x2-5GbE-Attached/dp/B0C5M8RMMM>). Other shops were cited $530–$692. Publish the live number on the card you click, not a frozen range.  
Asustor| Maker product + datasheet| [asustor.com product p_id=82](<https://www.asustor.com/en-gb/product?p_id=82>).  
  
## Skip

Skip if you only need two bays: the 2-bay sibling is the same NIC and M.2 story for less power. Skip if you need 10G. Skip SMR. Skip filling four bays with 5400 RPM disks and calling it a hypervisor datastore.

## Sources

[Nimbustor 4 Gen2 datasheet](<https://www.asustor.com/materials/datasheet/Datasheet_Nimbustor_4_Gen_2_\(AS5404T\)_Global%20ENG.pdf>) (38.3 / 17.7 / 0.81 W, RAID table). [2025 comparison PDF](<https://www.asustor.com/materials/datasheet/2025_All_Product_Comparison_US_ENG.pdf>). Amazon B0C5M8RMMM.

## Also on this topic

[TerraMaster F4-424 Pro: 32 GB DDR5 4-bay for Docker or TrueNASi3-N305 and 32 GB. TOS in the box. x86 people actually re-image.](<terramaster-f4-424-pro-truenas>) [DS224+ vs DS423+: 2-bay or 4-bay Synology PlusPick two bays or four when overnight backups on DSM is the job. Four bays cost about $200 more for empty slots, not a faster network.](<ds224-plus-vs-ds423-plus>) [Two identical disks mirror each other: SHR ≈ RAID 1 on two baysTwo identical disks: SHR ≈ RAID 1. RAID is not backup.](<synology-shr-vs-raid-1>) [PreviousAsustor AS5402T review: four NVMe slots on a 2-bay NAS](<asustor-as5402t-review>) [NextTerraMaster F4-424 Pro: 32 GB DDR5 4-bay for Docker or TrueNAS](<terramaster-f4-424-pro-truenas>)

---

*Labthrift Markdown mirror. HTML version linked above.*
