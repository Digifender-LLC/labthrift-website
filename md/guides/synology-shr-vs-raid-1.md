# Two identical disks mirror each other: SHR ≈ RAID 1 on two bays

Source: https://labthrift.com/guides/synology-shr-vs-raid-1
Markdown: https://labthrift.com/md/guides/synology-shr-vs-raid-1.md

*Notes › / › File storage › / › Two identical disks mirror each other: SHR ≈ RAID 1 on two bays*

[Notes](<./>) / [File storage](<./#first-nas>) / Two identical disks mirror each other: SHR ≈ RAID 1 on two bays

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these. Confirm the diskless SKU before you click. Amazon is full of drive bundles.

# Two identical disks mirror each other: SHR ≈ RAID 1 on two bays

Two identical disks: SHR ≈ RAID 1. The third disk is where SHR starts to earn the acronym. RAID is not backup.

Two identical disks mirror each other. On a [DS224+](<synology-ds224-plus-review>) you only have two bays, so SHR or RAID 1 is the decision, and with two matched disks they land in the same place: one disk of usable space, one disk of redundancy. On a [DS423+](<synology-ds423-plus-review>) you can keep adding. That is the only reason this page exists.

Setup| SHR| RAID 1  
---|---|---  
Two identical disks| Mirror. Usable ≈ one disk.| Mirror. Usable ≈ one disk.  
Third disk| Becomes RAID 5-like and _grows_.| Does not add a third member as capacity. You can add a mirror; you cannot just expand RAID 1 by sliding in disk three. Synology community: migrate, don't expect a three-disk RAID 1 volume.  
Mixed sizes| Uses leftover slices.| RAID 5 / 6 waste down to the smallest disk. RAID 1 usable is the smallest mirror member.  
SHR-2| Needs four disks. Two-disk fault tolerance.| n/a  
DS224+ lid| SHR or RAID 1 (also 0 / Basic / JBOD)| Same two-bay set  
DS423+ lid| SHR, then 5 / 6 / 10 as you grow| RAID 1 stays a mirror  
  
Use two matched [CMR NAS drives](<nas-hdd-picks-2026-cmr>). Example pair: WD Red Plus 8 TB `WD80EFPX` (CMR, 5640 RPM, 180 TB/yr) or IronWolf 8 TB `ST8000VN004` (CMR, 7200 RPM, 180 TB/yr). IronWolf 1–6 TB is 5400 RPM: read the SKU. Skip WD Red `EFAX` (DM-SMR), WD Blue 3.5" `EZAZ`, BarraCuda 3.5" 4 / 8 TB SMR. SMR in SHR is how people still have a bad rebuild in 2026.

5400 / 5640 RPM is fine for Hyper Backup and Time Machine. It is not a Proxmox LUN. DS224+ SAN Manager: 2 iSCSI targets, 4 LUNs. Put VMs on SSD if you must host them here at all.

Chassis: [DS224+ Amazon B0C6927XPX](<https://www.amazon.com/Synology-2-Bay-DiskStation-DS224-Diskless/dp/B0C6927XPX>), [B&H 1781611-REG](<https://www.bhphotovideo.com/c/product/1781611-REG/synology_2_bay_diskstation_ds224_compact.html>). DS423+: [B&H 1757288-REG](<https://www.bhphotovideo.com/c/product/1757288-REG/synology_diskstation_ds423_4_bay_nas.html>) ($499.99 diskless at research fetch), Amazon [B0BXMS9GFF](<https://www.amazon.com/dp/B0BXMS9GFF>) was unavailable 22 Aug 2026. Drives: [ST8000VN004](<https://www.amazon.com/Seagate-IronWolf-Internal-Warranty-ST8000VN004/dp/B07XQ18JJW>), [WD80EFPX](<https://www.amazon.com/Western-Digital-Plus-Internal-Drive/dp/B0CMQ6SK7W>).

## Skip

Skip RAID 0 on a first backup box. Skip “RAID is my backup.” Skip expanding RAID 1 by adding a third disk and expecting more terabytes. Skip SMR. Skip mixing a 4 TB leftover with an 8 TB and calling RAID 5 efficient: that is the SHR use case, and even then you should have planned matched disks.

## Sources

[WunderTech SHR vs RAID calculator](<https://www.wundertech.net/synology-raid-calculator-shr-vs-raid/>). [Need to Know IT, SHR explained](<https://needtoknowit.com.au/blog/what-is-shr-synology-hybrid-raid-explained/>). [Storage Alchemist, Synology RAID types](<https://www.storagealchemist.com/exploring-raid-types-in-synology-nas/>). [Synology community on RAID 1 expansion](<https://community.synology.com/enu/forum/1/post/123058>). DS224+ / DS423+ spec PDFs. I haven't migrated a volume in this lab.

## Also on this topic

[Buy hard drives a first file box can rebuild: CMR, not the cheap packed styleBuy the kind of hard drive a first file box can rebuild. CMR writes everywhere, not the cheap packed style.](<nas-hdd-picks-2026-cmr>) [2.5-inch vs 3.5-inch in a first NAS: HDD bulk vs SATA SSD appsPut big quiet disks in a first file box, not an old laptop drive. Small laptop disks are the wrong size for bulk photos. A small fast SSD is only if apps need speed, not for a photo dump.](<nas-2-5-vs-3-5-drives>) [2.5G vs 10G on a first NAS: when the NIC is the wasteSkip a 10G port on a first two-drive file box. Two spinning disks cannot fill even the faster 2.5G port.](<nas-2-5g-vs-10g>) [PreviousDS224+ vs DS423+: 2-bay or 4-bay Synology Plus](<ds224-plus-vs-ds423-plus>) [NextBuy hard drives a first file box can rebuild: CMR, not the cheap packed style](<nas-hdd-picks-2026-cmr>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
