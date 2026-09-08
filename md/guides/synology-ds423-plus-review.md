# Four-bay overnight backups on DSM when two bays are not enough: DS423+

Source: https://labthrift.com/guides/synology-ds423-plus-review
Markdown: https://labthrift.com/md/guides/synology-ds423-plus-review.md

*Notes › / › File storage › / › Four-bay overnight backups on DSM when two bays are not enough: DS423+*

[Notes](<./>) / [File storage](<./#first-nas>) / Four-bay overnight backups on DSM when two bays are not enough: DS423+

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these. Confirm the diskless SKU before you click. Amazon is full of drive bundles.

# Four-bay overnight backups on DSM when two bays are not enough: DS423+

Four-bay overnight backups on Synology DSM when two bays are not enough. Still gigabit. Same CPU as the DS224+.

Four-bay overnight backups on Synology DSM when two bays are not enough. If you already decided DSM, this is the growth box. It is not a used DS918+. It is not a 2.5G or 10G chassis. Same Intel Celeron J4125, same official 6 GB RAM lid (2 GB DDR4 plus one 4 GB SO-DIMM), same dual 1GbE with MTU 1500. What you get for the extra money is four hot-swap 3.5" / 2.5" SATA bays, two M.2 2280 NVMe slots (cache or pool), two 92 mm fans, and a 3-year warranty instead of two.

Official size 166 × 199 × 223 mm, 2.18 kg. 90 W brick. Spec PDF (last updated 23 Apr 2025) lists 28.30 W access and 8.45 W HDD hibernation, 19.8 dB(A) idle with Synology HDDs at 1 m. Scheduled power on/off is still there. RAID adds 5 / 6 / 10 on top of SHR / Basic / JBOD / 0 / 1. M.2 slots are not hot-swap. Creating an M.2 storage pool wants Synology-verified SSDs per the spec note.

Virtual Machine Manager is still “recommended 2 VMs.” Object recognition in Photos still wants 4 GB. The NIC does not grow. A single HDD RAID 1 or SHR pair still lives around 150–210 MB/s sequential; gigabit is the client lid, not the drives. Empty bays and M.2 cache are the reasons to pay for this over the [DS224+](<synology-ds224-plus-review>), not “faster Ethernet.” Compare the two here: [DS224+ vs DS423+](<ds224-plus-vs-ds423-plus>).

Fill SATA with [CMR NAS HDDs](<nas-hdd-picks-2026-cmr>). WD Red Plus (CMR; 8 TB example WD80EFPX is 5640 RPM). IronWolf / IronWolf Pro (CMR, but IronWolf 1–6 TB is 5400 RPM; `ST8000VN004` 8 TB is 7200). Toshiba N300 (CMR). Skip WD Red `EFAX`, WD Blue 3.5" `EZAZ`, BarraCuda 3.5" 4 / 8 TB SMR. 5400 / 5640 RPM is fine for backups. Wrong as the only iSCSI datastore for VMs unless you put the VMs on the M.2 pool or a SATA SSD.

## Street, 22 Aug 2026

Path| Listing| Note  
---|---|---  
B&H diskless| $499.99 listed (research fetch, 22 Aug 2026).| [1757288-REG](<https://www.bhphotovideo.com/c/product/1757288-REG/synology_diskstation_ds423_4_bay_nas.html>). Lead with this. A later Cloudflare wall blocked our re-fetch; confirm the live card.  
Amazon diskless| ASIN B0BXMS9GFF exists| [B0BXMS9GFF](<https://www.amazon.com/dp/B0BXMS9GFF>) was out of stock at the 22 Aug 2026 research fetch. Don't substitute a 16 TB + RAM bundle (Newegg 14P-000V-004V2 class).  
  
Want 2.5G and four M.2 instead of DSM? [AS5404T](<asustor-as5404t-review>). Want four cheap bays and TOS? [F4-425](<terramaster-f4-425-review>). Want 10G and Docker? That is the existing [UGREEN DXP4800 Plus slot](<first-nas>), not this page.

## Skip

Skip if you need 2.5G or 10G today. There is no NIC upgrade. Skip a used DS918+ as a “cheaper 4-bay Plus”; that path is out. Skip SMR leftovers in SHR. Skip treating four 5400 RPM disks as a Proxmox datastore.

## Sources

[DS423+ product spec PDF](<https://global.download.synology.com/download/Document/Hardware/ProductSpec/DiskStation/23-year/DS423+/enu/Product_Spec_DS423+_enu.pdf>) (23 Apr 2025). [Datasheet PDF](<https://global.synologydownload.com/download/Document/Hardware/DataSheet/DiskStation/23-year/DS423%2B/enu/Synology_DS423%2B_Data_Sheet_enu.pdf>). B&H 1757288-REG. Amazon B0BXMS9GFF. Android Central historical $514 Amazon / $499 B&H. Synology US product HTML did not render a clean product page on our 22 Aug 2026 fetch (download-center / catalog bounce).

## Also on this topic

[Quiet overnight photos on a 2-bay with a faster port: UGREEN DXP2800Quiet overnight photos on a 2-bay with a faster port, without paying for 10G.](<ugreen-dxp2800-review>) [Cheap quiet 2-bay when you want Intel and don't need Synology DSM: TerraMaster F2-425Cheap quiet 2-bay with one faster port when you want Intel and don't need Synology DSM.](<terramaster-f2-425-review>) [Four bays at 2-bay Plus money, still one faster port: TerraMaster F4-425Four bays when you want to start with two disks and add later. Still one faster port.](<terramaster-f4-425-review>) [PreviousQuiet overnight backups with Synology DSM: DS224+](<synology-ds224-plus-review>) [NextQuiet overnight photos on a 2-bay with a faster port: UGREEN DXP2800](<ugreen-dxp2800-review>)

---

*Labthrift Markdown mirror. HTML version linked above.*
