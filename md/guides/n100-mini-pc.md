# A tiny computer you can leave on

Source: https://labthrift.com/guides/n100-mini-pc
Markdown: https://labthrift.com/md/guides/n100-mini-pc.md

*Notes › / › Small computers › / › A tiny computer you can leave on*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / A tiny computer you can leave on

Written 21 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# A tiny computer you can leave on

Don't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.

The first step is [start with what you already have](<start-with-what-you-have>). Check [how many cores it already has](<leftover-box-cpu>), [how much memory](<leftover-box-ram>), [whether it can run a VM](<leftover-box-virt>), [what model it is](<leftover-box-model>), and [how big the disk is](<leftover-box-disk>). This note is for after that old PC is actually in the way.

People use these to run a home server, file sharing, a smart-home brain, a couple of small virtual machines. 8 GB fills up fast. 16 GB is the floor. The N150 is a mild refresh of the N100; price and the network ports matter more than the chip name. A faster N350 is the step up if you already know you will stack a lot of virtual machines.

## What to buy

Box| Why it shows up| Watch-outs  
---|---|---  
Beelink Mini S12 Pro (N100)| Most documented Proxmox / HA install path. Street often $130–170 for 16 GB / 500 GB class configs.| Many units are 1G, not 2.5G. Confirm the SKU.  
Beelink Mini S13 (N150)| Same shape, newer chip. Buy if it is the same money as the S12 Pro.| Same 16 GB floor.  
GMKtec G3 Plus (N150)| Often ships with 2.5GbE and room for 32 GB. Good when the NAS is already 2.5G.| Firmware and fan curves vary. Read the exact listing.  
CWWK / Topton 4× 2.5GbE fanless| The box you want for OPNsense or a tiny router-on-a-stick plus Proxmox.| BIOS quality is the gamble. Confirm i226 NICs and VT-d.  
  
## What matters

16 GB is the floor. Proxmox plus two VMs plus a handful of LXCs will eat 8 GB before the weekend is over. Enable VT-x and VT-d before you install. N100 iGPU passthrough is a headache. Quick Sync inside an LXC is the sane transcode path.

Wall power on these is usually high-single to mid-teens watts. That is the whole pitch versus a used 1U.

## Sources

[Beelink 2026 Prime Day post](<https://www.bee-link.com/blogs/all/beelink-2026-amazon-prime-day-worldwide-mega-sale-96-hours-of-up-to-20-off>) (Mini S12 / S12 Pro still named). [GMKtec NucBox G3 Plus official](<https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor>) (N150; sold out on fetch). [CWWK](<https://cwwk.net/>) (fanless 4-NIC class). Confirm the SKU and the NIC before you click. Street moves.

## Also on this topic

[See how many workers the computer already hasBefore you buy a tiny computer, check how many workers the computer already has.](<leftover-box-cpu>) [See how much memory the computer already hasBefore you buy a tiny computer, check how much memory the computer already has.](<leftover-box-ram>) [See if the computer can run a pretend computerBefore you buy a tiny computer for Proxmox, check whether the computer already has the CPU feature for VMs.](<leftover-box-virt>) [See what computer you already haveBefore you buy a tiny computer, check what computer you already have.](<leftover-box-model>) [See how big the computer's disk already isBefore you buy a tiny computer or a NAS, check how big the computer's disk already is.](<leftover-box-disk>) [See if the computer already has extra memory on diskBefore you buy a tiny computer, check whether the computer already has overflow memory on the disk.](<leftover-box-swap>) [Dual gigabit living-room mini, not the 2.5G listing: Beelink EQ13A dual gigabit living-room mini. Don't confuse it with EQ14 2.5G listings. Buy EQ12 if you wanted two faster ports.](<beelink-eq13-n200-dual-1g>) [Fanless four-port closet firewall you can warrant: Protectli VP2430eA fanless four-port closet firewall or router box with US support and coreboot. Not a living-room HDMI toy.](<protectli-vp2430e-n150-4x-2-5g-proxmox>) [Quiet N150 with a 10G cage when MS-01 is gone: Protectli VP2440eA small quiet box with a 10G fiber-style cage you can actually buy, when the Minisforum MS-01 is gone. Skip if you don't have a 10G job yet.](<protectli-vp2440e-n150-10g-sfp>) [PreviousSee if the computer already has extra memory on disk](<leftover-box-swap>) [NextDual gigabit living-room mini, not the 2.5G listing: Beelink EQ13](<beelink-eq13-n200-dual-1g>)

---

*Labthrift Markdown mirror. HTML version linked above.*
