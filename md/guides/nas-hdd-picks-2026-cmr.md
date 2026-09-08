# Buy hard drives a first file box can rebuild: CMR, not the cheap packed style

Source: https://labthrift.com/guides/nas-hdd-picks-2026-cmr
Markdown: https://labthrift.com/md/guides/nas-hdd-picks-2026-cmr.md

*Notes › / › File storage › / › Buy hard drives a first file box can rebuild: CMR, not the cheap packed style*

[Notes](<./>) / [File storage](<./#first-nas>) / Buy hard drives a first file box can rebuild: CMR, not the cheap packed style

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these. Confirm the diskless SKU before you click. Amazon is full of drive bundles.

# Buy hard drives a first file box can rebuild: CMR, not the cheap packed style

Buy hard drives a first file box can rebuild. CMR writes everywhere, not the cheap packed style. Skip SMR. Skip slow 5400 RPM if this box will run virtual machines. Put VMs on SSD.

Buy hard drives a first file box can rebuild. CMR writes everywhere; skip the cheap packed style (SMR). No Labthrift power-on hours, SMART logs, or fio numbers exist yet. The table is maker RPM / workload plus named third-party reviews. Street prices on 8 TB NAS disks disagree across shops this month. I'm not locking a “$160 IronWolf” or a “$32/TB Red Plus.” Check the live card.

SKU| What it is| Buy for  
---|---|---  
Seagate IronWolf 8 TB `ST8000VN004`| CMR, **7200 RPM** , 256 MB, 180 TB/yr, 3-year. Sustained up to 210 MB/s on the datasheet.| The 8 TB IronWolf that is actually 7200. [Amazon B07XQ18JJW](<https://www.amazon.com/Seagate-IronWolf-Internal-Warranty-ST8000VN004/dp/B07XQ18JJW>).  
WD Red Plus 8 TB `WD80EFPX`| CMR, **5640 RPM** , 256 MB, 180 TB/yr, 3-year, 1–8 bay. WD’s Plus line exists so buyers stop getting SMR “Red.”| SHR / RAID 1 backups and media. Not a VM LUN. [Amazon B0CMQ6SK7W](<https://www.amazon.com/Western-Digital-Plus-Internal-Drive/dp/B0CMQ6SK7W>). [Newegg 1Z4-0002-01NP7](<https://www.newegg.com/red-plus-wd80efpx-8tb/p/1Z4-0002-01NP7>) (a snapshot showed $354.99; CamelCamelCamel list $224.99 around 21 Aug 2026). Confirm live.  
Toshiba N300 8 TB `HDWG480XZSTA`| CMR, 7200 RPM, 256 MB, 180 TB/yr.| The third current retail 8 TB CMR. [Newegg N82E16822149793](<https://www.newegg.com/toshiba-n300-hdwg480xzsta-8tb/p/N82E16822149793>).  
  
## CMR vs SMR: read the suffix

Buy: WD Red _Plus_ (CMR), WD Red Pro (CMR, 7200), IronWolf / IronWolf Pro (CMR), Toshiba N300 / N300 Pro (CMR). Avoid in RAID / ZFS / iSCSI: plain WD Red `EFAX` (DM-SMR, 2–6 TB, 2019–2022 controversy), WD Blue 3.5" `EZAZ`, Seagate BarraCuda 3.5" 4 TB / 8 TB (SMR), Toshiba P300 4 TB / 6 TB (SMR). Host-managed Exos SMR (32 / 36 / 44 TB) is not a home-NAS drive. Used or old-stock `EFAX` is how people still get SMR in 2026. Confirm the model suffix before checkout.

## The 5400 RPM iSCSI trap

These drives are fine for backups, Time Machine, media, Hyper Backup. They are not fine as the only datastore for Proxmox / VMware / Hyper-V over iSCSI. Rotational latency and 8–12 ms seeks dominate 4K / 8K random I/O. Tom’s Hardware (IronWolf 12 TB RAID 5): 7200 RPM IronWolf pulled ahead of 5400 RPM WD Red on SMB and iSCSI under mixed / random load; WD Red “isn’t” the iSCSI pick. HomeLabPicks (2026): IronWolf 8 TB ~210 MB/s seq vs Red Plus 8 TB ~185 / 175–180 MB/s; random I/O similar and “neither will feel fast vs a SATA SSD cache.”

**IronWolf capacity trap:** 1–6 TB IronWolf SKUs are 5400 RPM (example `ST4000VN006` 4 TB). 8 TB `ST8000VN004` is 7200. Don't assume “IronWolf” means 7200. There is also an 8 TB `ST8000VN002` on a current Seagate sheet at 5400 RPM: read the exact model. WD Red Plus 8 TB WD80EFPX is CMR but 5640 RPM. Safe for SHR / RAID 1. Wrong for a VM LUN unless you add NVMe / SATA SSD cache or a dedicated SSD pool.

Synology DS224+ SAN Manager: max 2 iSCSI targets, 4 LUNs. Product limit, not a drive limit. Chassis notes: [DS224+](<synology-ds224-plus-review>), [DS423+](<synology-ds423-plus-review>), [first NAS lane](<first-nas>).

## Skip

Skip bare “WD Red” without Plus or Pro. Skip BarraCuda 3.5" 4 / 8 TB in an array. Skip Blue `EZAZ`. Skip using any 5400 / 5640 RPM pair as the only Proxmox datastore. Skip inventing a “best price per TB” from a single 2026 screenshot. The snapshots disagree.

## Sources

Seagate IronWolf datasheets (ST8000VN004 7200; ST4000VN006 / current 1–6 TB 5400; ST8000VN002 5400 on a current sheet). WD Red Plus product brief (WD80EFPX CMR, 5640 RPM, 180 TB/yr). ComputingForGeeks CMR 2026 list. Need to Know IT SMR 2026. HomeLabPicks IronWolf vs Red Plus. Tom’s Hardware IronWolf 12 TB RAID 5 / iSCSI. Newegg / Amazon cards above.

## Also on this topic

[2.5-inch vs 3.5-inch in a first NAS: HDD bulk vs SATA SSD appsPut big quiet disks in a first file box, not an old laptop drive. Small laptop disks are the wrong size for bulk photos. A small fast SSD is only if apps need speed, not for a photo dump.](<nas-2-5-vs-3-5-drives>) [2.5G vs 10G on a first NAS: when the NIC is the wasteSkip a 10G port on a first two-drive file box. Two spinning disks cannot fill even the faster 2.5G port.](<nas-2-5g-vs-10g>) [Bedroom overnight box vs closet next to a workstation: pick by watts and noiseMaker lab numbers only. Bedroom is a different SKU than a closet.](<nas-power-noise-first-box>) [PreviousTwo identical disks mirror each other: SHR ≈ RAID 1 on two bays](<synology-shr-vs-raid-1>) [Next2.5-inch vs 3.5-inch in a first NAS: HDD bulk vs SATA SSD apps](<nas-2-5-vs-3-5-drives>)

---

*Labthrift Markdown mirror. HTML version linked above.*
