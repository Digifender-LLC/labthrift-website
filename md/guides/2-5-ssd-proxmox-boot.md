# A small boot disk for the old PC, not a place for VMs

Source: https://labthrift.com/guides/2-5-ssd-proxmox-boot
Markdown: https://labthrift.com/md/guides/2-5-ssd-proxmox-boot.md

*Notes › / › Closet extras › / › A small boot disk for the old PC, not a place for VMs*

[Notes](<./>) / [Closet extras](<./#closet-adjacent>) / A small boot disk for the old PC, not a place for VMs

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# A small boot disk for the old PC, not a place for VMs

The old PC, or a later mini PC, needs a small disk to start from. A 2.5-inch SATA SSD is a laptop-size solid-state drive. 250–500 GB with a DRAM cache (a little fast memory on the drive) is enough. Don't put guests (the pretend computers) on the boot disk.

Proxmox is software that runs pretend computers (VMs) on that box. Don't pretend a consumer drive is a PLP enterprise part (the kind with extra power-loss protection). This sits in the [N100 / N150 box](<n100-mini-pc>), not under a pile of VMs. Street on the 500 GB 870 EVO is messy in Aug 2026. Don't treat it as the old $30 to $55 part.

## What to buy

Drive| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
Samsung 870 EVO 500 GB| MZ-77E500B/AM, 2.5-inch SATA, 560/530 MB/s, 300 TBW, 5-year. DRAM cache. ASIN B08QBMD6P4. B&H #1606519-REG.| Trackers showed about $200–$306 on Amazon around 10–21 Aug 2026. Samsung.com US list $299.99. Recheck live. This is not a $50 drive right now.| Default boot size if the live cart is sane. Still consumer. Still not PLP.  
Samsung 870 EVO 250 GB| Smaller boot size in the same family.| SpecPicks 2026 cited $50–$70 as a typical band. Confirm a live ASIN before publish or click.| You only need a hypervisor disk and the 500 GB cart is inflated.  
Crucial BX500 500 GB| CT500BX500SSD1, DRAM-less QLC, 120 TBW, 3-year. India Amazon ASIN B0B9BL9T4H is live.| Don't quote INR as US street. No confirmed US Amazon / Newegg / Crucial.com cart this pass.| Only if a US cart is live at publish time. Not the default.  
  
## Skip

Skip putting guests on the boot disk. Skip treating QLC DRAM-less as a Proxmox datastore. Skip “about $50” memory for the 500 GB 870 EVO. That era is not what the August trackers showed.

## Sources

[Samsung US 870 EVO 500 GB](<https://www.samsung.com/us/memory-storage/sata-ssd/870-evo-sata-2-5-ssd-500gb-sku-mz-77e500b-am/>) (list $299.99). [Amazon ASIN B08QBMD6P4](<https://www.amazon.com/SAMSUNG-500GB-Internal-MZ-77E500B-AM/dp/B08QBMD6P4>). [B&H 870 EVO 500 GB](<https://www.bhphotovideo.com/c/product/1606519-REG/samsung_mz_77e500b_am_500gb_870_evo_sata.html>). SpecPicks 2026 boot-SSD piece (250 GB band). Proxmox forum thread on 870 EVO boot + ext4 vs ZFS.

## Also on this topic

[HDMI dummy plug for a headless mini PCA $16 HDMI plug so a closet mini PC thinks a monitor is attached. Skip if you already have a screen.](<hdmi-dummy-plug-headless>) [Cheap KVM-over-IP for a closet you don't want to sit inReach the old PC screen from the couch when it will not boot. A $100 HDMI+USB box does that.](<cheap-kvm-over-ip>) [Fanless 60 W brick that is not a mystery barrelMean Well GST60A is a silent, Level VI, UL/TUV desktop adapter.](<fanless-60w-psu>) [PreviousA metal rack power strip that is not a fire hazard](<closet-pdu-not-a-fire-hazard>) [NextHDMI dummy plug for a headless mini PC](<hdmi-dummy-plug-headless>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
