# Stay on the maker OS, or wipe an x86 4-bay for TrueNAS

Source: https://labthrift.com/guides/first-nas-diy-vs-appliance
Markdown: https://labthrift.com/md/guides/first-nas-diy-vs-appliance.md

*Notes › / › File storage › / › Stay on the maker OS, or wipe an x86 4-bay for TrueNAS*

[Notes](<./>) / [File storage](<./#first-nas>) / Stay on the maker OS, or wipe an x86 4-bay for TrueNAS

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these. Confirm the diskless SKU before you click. Amazon is full of drive bundles.

# Stay on the maker OS, or wipe an x86 4-bay for TrueNAS

Stay on the maker software (DSM, ADM, or TOS), or wipe an x86 4-bay for TrueNAS. DIY on a mini PC is already the pain path. This is the next question.

Stay on the maker software (DSM, ADM, or TOS), or wipe an x86 4-bay for TrueNAS. Don't send a first-backup user to a used LSI HBA scavenger hunt. That is a project. Projects are allowed. They are not the default buy. ECC is the Mini X+ argument, and Mini is not the SKU on this page.

Path| What you buy| You win| You lose  
---|---|---|---  
Appliance, DSM / ADM| [DS224+](<synology-ds224-plus-review>) B0C6927XPX; [DS423+](<synology-ds423-plus-review>) B&H; [AS5402T](<asustor-as5402t-review>) B0C5MB5MTS| Snapshots that restore. Sleep / S3. Not spending a weekend on an HCL.| RAM lids (6 GB Plus, 16 GB AS54). App tax on Synology. 1GbE on Plus.  
Re-image path| [F4-424 Pro](<terramaster-f4-424-pro-truenas>) B0CPPD51B9; [DXP2800](<ugreen-dxp2800-review>) B0D22HBFK1; optionally [F4-425](<terramaster-f4-425-review>)| RAM, Docker, ZFS, no app tax. x86 board you can wipe.| Non-ECC on the TerraMaster / UGREEN. You own the install. I haven't re-imaged these.  
Mini X+ (comparison)| iXsystems configurator. Forum 2026 ~$1909 diskless. C3758, 32 GB ECC, dual 10GBase-T.| ECC and a supported TrueNAS appliance.| Not the CTA. Historical Amazon B08FCWBVWX is not a stable buy link. linhpham.org $1448 is an older snapshot. Label it historical.  
  
DIY wins when you already know you want ZFS and you will read a HCL. Appliance wins when the copies have to work on a Sunday and you have not named a HBA chipset this year. The existing [first-NAS page](<first-nas>) still holds: two-bay Synology if you want sleep; DXP4800 Plus if you want 10G and Docker; mini-PC DIY only if you already like pain. This page just names the x86 appliances you can re-image instead of scavenging a 1U.

Drives stay CMR on every path. [ST8000VN004](<nas-hdd-picks-2026-cmr>) (7200) or WD80EFPX (5640, still CMR). Skip `EFAX` / `EZAZ` / BarraCuda 3.5" 4 / 8 TB SMR. IronWolf 1–6 TB is 5400. ZFS does not make SMR polite. 5400 RPM does not make a VM LUN fast.

Live retail, no tags: [DS224+ B0C6927XPX](<https://www.amazon.com/Synology-2-Bay-DiskStation-DS224-Diskless/dp/B0C6927XPX>), [DS423+ B&H](<https://www.bhphotovideo.com/c/product/1757288-REG/synology_diskstation_ds423_4_bay_nas.html>), [AS5402T B0C5MB5MTS](<https://www.amazon.com/Asustor-AS5402T-Quad-Core-2x2-5GbE-Attached/dp/B0C5MB5MTS>), [F4-424 Pro B0CPPD51B9](<https://www.amazon.com/TERRAMASTER-F4-424-Pro-NAS-Storage/dp/B0CPPD51B9>), [TerraMaster F4-424 Pro store](<https://www.terra-master.com/products/f4-424-pro>) ($730.99 on 22 Aug 2026), [DXP2800 B0D22HBFK1](<https://www.amazon.com/UGREEN-DXP2800-Quad-core-Attached-Diskless/dp/B0D22HBFK1>), [TrueNAS Mini](<https://www.truenas.com/truenas-mini/>) (comparison).

## Skip

Skip eBay “LSI 9211 flashed to IT mode, untested.” Skip Mini as the hero SKU. Skip used DS918+. Skip SMR in ZFS. Skip calling a first backup box a “homelab” until Hyper Backup or zfs send actually landed somewhere else.

## Sources

[Evezone 2026, DIY TrueNAS vs appliance](<https://evezone.evetech.co.za/deep-dives/diy-truenas-vs-a-pre-built-nas-appliance-which-should-you-build>). TerraMaster F4-424 Pro official spec. Synology DS224+ official page. iXsystems Mini page. TrueNAS forum 2026 US configurator $1909. linhpham.org Mini X+ older $1448 snapshot (historical). I haven't installed TrueNAS on a TerraMaster in this lab.

## Also on this topic

[First NAS for a one-person labTwo bays and boring software if you want backups that restore.](<first-nas>) [Quiet overnight backups with Synology DSM: DS224+Quiet overnight backups with DSM when Plus extras matter. Skip if sleep backups alone are the job.](<synology-ds224-plus-review>) [Four-bay overnight backups on DSM when two bays are not enough: DS423+Four-bay overnight backups on Synology DSM when two bays are not enough. Still gigabit.](<synology-ds423-plus-review>) [PreviousBedroom overnight box vs closet next to a workstation: pick by watts and noise](<nas-power-noise-first-box>)

---

*Labthrift Markdown mirror. HTML version linked above.*
