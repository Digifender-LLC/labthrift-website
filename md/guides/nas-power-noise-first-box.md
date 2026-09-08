# Bedroom overnight box vs closet next to a workstation: pick by watts and noise

Source: https://labthrift.com/guides/nas-power-noise-first-box
Markdown: https://labthrift.com/md/guides/nas-power-noise-first-box.md

*Notes › / › File storage › / › Bedroom overnight box vs closet next to a workstation: pick by watts and noise*

[Notes](<./>) / [File storage](<./#first-nas>) / Bedroom overnight box vs closet next to a workstation: pick by watts and noise

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these. Confirm the diskless SKU before you click. Amazon is full of drive bundles.

# Bedroom overnight box vs closet next to a workstation: pick by watts and noise

Pick a bedroom overnight file box or a closet box next to a workstation by watts and noise, not by brand. Maker lab numbers only. I haven't measured these on the wall.

Pick a bedroom overnight file box or a closet box next to a workstation by watts and noise, not by brand. Same disclaimer as the [first-NAS note](<first-nas>): I haven't burned these units in, and there's no Labthrift wall-watt log. The table is what the makers published, plus one named third-party measurement on the F2-425. Drive mix changes the number. Treat every watt as “in their lab, with their disks.”

Box| Access| Hibernation| Sleep / noise| Brick  
---|---|---|---|---  
[DS224+](<synology-ds224-plus-review>)| 14.69 W| 4.41 W| 22 dB(A) idle with Synology HDDs, 1 m. Scheduled on/off.| 60 W  
[DXP2800](<ugreen-dxp2800-review>)| 16.38 W| 5.24 W| UGREEN lab, Seagate 2 TB. Quiet mode 29–34 dB on the product page.| not listed  
[F2-425](<terramaster-f2-425-review>)| 22 W (Neowin + official comparison table)| 11 W| Official 19.0 dB(A) standby, 2 SATA, 1 m. Neowin used 2× ST4000VN008.| 48 W  
[AS5402T](<asustor-as5402t-review>)| 22.9 W| 12.7 W| **0.71 W S3.** Datasheet table.| 65 W  
DXP4800 Plus (skip-for-bedroom)| 42.36 W| 18.12 W| Quiet mode 29–34 dB (UGREEN). Already the 10G pick on [first-nas.html](<first-nas>).| not listed  
  
A bedroom first box is the DS224+ if you want scheduled power and the lowest published access watts, or the AS5402T if you will actually use S3. A closet next to a workstation can eat the DXP4800 Plus numbers. Don't put the 10G 4-bay on the nightstand and then complain about 42 W and two fans.

If you are chasing dB, a 5400 / 5640 RPM [Red Plus](<nas-hdd-picks-2026-cmr>) is the quieter spinning class, and it is still the wrong only disk for iSCSI VMs. IronWolf 1–6 TB is 5400; `ST8000VN004` is 7200. Skip SMR (`EFAX`, `EZAZ`, BarraCuda 3.5" 4 / 8 TB) even if someone sold it as “quiet.”

Diskless paths: DS224+ [B0C6927XPX](<https://www.amazon.com/Synology-2-Bay-DiskStation-DS224-Diskless/dp/B0C6927XPX>) / [B&H 1781611-REG](<https://www.bhphotovideo.com/c/product/1781611-REG/synology_2_bay_diskstation_ds224_compact.html>). DXP2800 [B0D22HBFK1](<https://www.amazon.com/UGREEN-DXP2800-Quad-core-Attached-Diskless/dp/B0D22HBFK1>) / [UGREEN store $369.99](<https://ai.ugreen.com/products/ugreen-nasync-dxp2800-nas-storage>) on 22 Aug 2026. F2-425 [$254.99 official](<https://www.terra-master.com/products/f2-425>), out of stock at fetch. AS5402T [B0C5MB5MTS](<https://www.amazon.com/Asustor-AS5402T-Quad-Core-2x2-5GbE-Attached/dp/B0C5MB5MTS>) / B&H $369.00 at research fetch.

## Skip

Skip treating maker dB(A) as what you will hear with two cheap desktop disks and the fan on high. Skip a 10G 4-bay for a bedroom. Skip inventing a yearly kWh bill from these numbers. I didn't measure your utility rate or your spin-down schedule.

## Sources

DS224+ spec PDF (14.69 / 4.41 W, 22 dB(A), measurement notes). [UGREEN power blog](<https://ai.ugreen.com/blogs/knowledge/how-much-power-does-your-nas-consume>) and DXP2800 product page (16.38 / 5.24 W; 29–34 dB quiet mode; DXP4800 Plus 42.36 / 18.12 W). Neowin F2-425 review. AS5402T datasheet power table.

## Also on this topic

[Stay on the maker OS, or wipe an x86 4-bay for TrueNASStay on the maker OS, or wipe an x86 4-bay for TrueNAS.](<first-nas-diy-vs-appliance>) [First NAS for a one-person labTwo bays and boring software if you want backups that restore.](<first-nas>) [Quiet overnight backups with Synology DSM: DS224+Quiet overnight backups with DSM when Plus extras matter. Skip if sleep backups alone are the job.](<synology-ds224-plus-review>) [Previous2.5G vs 10G on a first NAS: when the NIC is the waste](<nas-2-5g-vs-10g>) [NextStay on the maker OS, or wipe an x86 4-bay for TrueNAS](<first-nas-diy-vs-appliance>)

---

*Labthrift Markdown mirror. HTML version linked above.*
