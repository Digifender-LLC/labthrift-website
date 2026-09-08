# 32 GB 4-bay for Docker or TrueNAS: TerraMaster F4-424 Pro

Source: https://labthrift.com/guides/terramaster-f4-424-pro-truenas
Markdown: https://labthrift.com/md/guides/terramaster-f4-424-pro-truenas.md

*Notes › / › File storage › / › 32 GB 4-bay for Docker or TrueNAS: TerraMaster F4-424 Pro*

[Notes](<./>) / [File storage](<./#first-nas>) / 32 GB 4-bay for Docker or TrueNAS: TerraMaster F4-424 Pro

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these. Confirm the diskless SKU before you click: Amazon is full of drive bundles.

# 32 GB 4-bay for Docker or TrueNAS: TerraMaster F4-424 Pro

4-bay with an i3-N305 and 32 GB. TOS in the box. x86 people actually re-image it. Not a TrueNAS Mini X+ purchase path.

Official spec: Intel Core i3-N305 (8C/8T, burst 3.8 GHz), **32 GB DDR5 non-ECC** in one slot, officially not upgradable past 32 GB, dual 2.5GbE with LACP, dual M.2 2280 NVMe (PCIe 3.0 x1), four SATA, HDMI 2.0b, two USB 3.2 Gen 2 10 Gbps. 90 W brick. 2-year warranty. 222 × 179 × 154 mm. Official power with four Seagate 4 TB `ST4000VN008`: 33.0 W read/write, 13.0 W hibernation. Noise claim 21.0 dB(A) standby. Dual 2.5GbE LACP “linear transfer speeds up to 283 MB/s” is TerraMaster’s number (they have also cited that figure on 4× 18 TB RAID 0). Maker claim. I didn't run iperf.

Non-ECC RAM, say that. 32 GB soldered-in-practice is the pitch versus every 2–6 GB Plus box. TOS runs out of the box. The board is x86, and people put TrueNAS or Unraid on it. I haven't re-imaged one. That is a community path, not a Labthrift burn-in.

iXsystems TrueNAS Mini X+ is the ECC / 10GBase-T comparison, not the CTA. Official product is real: C3758, 32 GB ECC, 5× 3.5" + 2× 2.5", dual 10GBase-T, buy path is the iXsystems configurator (USA/Canada). A 2026 TrueNAS forum report put the US configurator around $1909 diskless. Historical Amazon ASIN B08FCWBVWX is not a stable buy link. Don't treat Mini as the hero SKU on this page.

Drives stay CMR. Skip `EFAX` / `EZAZ` / BarraCuda 3.5" 4 / 8 TB SMR. IronWolf 1–6 TB is 5400 RPM: the 4 TB IronWolfs in TerraMaster’s own power test are that class. For a ZFS pool you still want CMR; 7200 helps more than the badge. [HDD picks](<nas-hdd-picks-2026-cmr>). Appliance vs re-image: [DIY vs appliance](<first-nas-diy-vs-appliance>).

## Street, 22 Aug 2026

Path| Listing| Note  
---|---|---  
TerraMaster store, diskless| $730.99 (listed $859.99) on 22 Aug 2026. Comparison table on the F2-425 page matches $730.99.| [terra-master.com/products/f4-424-pro](<https://www.terra-master.com/products/f4-424-pro>). nashq PDF cited $699.99 class. Datacenterdisk $687.99. Confirm live.  
Amazon diskless| ASIN B0CPPD51B9| [B0CPPD51B9](<https://www.amazon.com/TERRAMASTER-F4-424-Pro-NAS-Storage/dp/B0CPPD51B9>).  
Newegg| 14P-006A-00066| Official-store diskless only.  
Mini X+ (comparison)| iX configurator; forum 2026 ~$1909 diskless| [truenas.com/truenas-mini](<https://www.truenas.com/truenas-mini/>). Not the buy button.  
  
## Skip

Skip if you need ECC and a supported TrueNAS appliance: that is Mini, and it is a different budget. Skip if you wanted 10G onboard; this is dual 2.5G. Skip if TOS-or-bust is a worse Sunday than DSM. Skip SMR in ZFS. Skip a used LSI HBA scavenger hunt as the “cheaper” DIY; that is not a first backup box.

## Sources

TerraMaster F4-424 Pro spec page (i3-N305, 32 GB DDR5 non-ECC, 33 / 13 W, 283 MB/s, $730.99, fetched 22 Aug 2026). Amazon B0CPPD51B9. iXsystems Mini page. TrueNAS forum, 2026, US configurator $1909. I haven't installed TrueNAS on one.

## Also on this topic

[DS224+ vs DS423+: 2-bay or 4-bay Synology PlusPick two bays or four when overnight backups on DSM is the job. Four bays cost about $200 more for empty slots, not a faster network.](<ds224-plus-vs-ds423-plus>) [Two identical disks mirror each other: SHR ≈ RAID 1 on two baysTwo identical disks: SHR ≈ RAID 1. RAID is not backup.](<synology-shr-vs-raid-1>) [Buy hard drives a first file box can rebuild: CMR, not the cheap packed styleBuy the kind of hard drive a first file box can rebuild. CMR writes everywhere, not the cheap packed style.](<nas-hdd-picks-2026-cmr>) [PreviousAsustor AS5404T review: 4-bay, dual 2.5GbE, four M.2](<asustor-as5404t-review>) [NextDS224+ vs DS423+: 2-bay or 4-bay Synology Plus](<ds224-plus-vs-ds423-plus>)

---

*Labthrift Markdown mirror. HTML version linked above.*
