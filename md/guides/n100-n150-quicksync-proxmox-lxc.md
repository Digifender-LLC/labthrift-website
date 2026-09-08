# Transcode checklist under Proxmox, not stream-count theater

Source: https://labthrift.com/guides/n100-n150-quicksync-proxmox-lxc
Markdown: https://labthrift.com/md/guides/n100-n150-quicksync-proxmox-lxc.md

*Notes › / › Small computers › / › Transcode checklist under Proxmox, not stream-count theater*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / Transcode checklist under Proxmox, not stream-count theater

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Transcode checklist under Proxmox, not stream-count theater

A kernel and driver checklist for transcode on a mini PC under Proxmox. Not a stream-count contest. Quick Sync in a container. I won't invent stream counts.

A transcode checklist under Proxmox, not a stream-count contest. The [roundup](<n100-mini-pc>) already said: N100 iGPU passthrough is a headache; Quick Sync inside an LXC is the sane path. This is the 2026 checklist. Community reports: N150 needs host kernel ≥ 6.11. GMKtec N150 + Jellyfin LXC reports exist on Proxmox 8.4.1 / kernel 6.11.11. Any N100/N150 with Intel UHD 24 EU is in this class: EQ14, S12 Pro, S13, G3 Plus, VP2430e, N1 Pro, ME Pro. N305 32 EU (CWWK `B0CG8JBDCD`) is the “more headroom, more idle watts” aside.

Third-party power tables, not ours: N100 headless idle ~6–8 W; 1× HW transcode ~12–16 W (Hobbyist's Hideaway / Jellywatch 2026 posts). Label those as other people’s Kill-A-Watt numbers. Idle and fan are collected in [idle watts / fan noise](<n100-n150-idle-watts-fan-noise>).

## What to run it on

Box class| iGPU| Why it is here| Watch-outs  
---|---|---|---  
Any N100/N150 24 EU living-room or appliance| Intel UHD 24 EU. Twin Lake N150: QSV / AV1 decode on current copy| Same transcode path. Pick the NIC / RAM story first| Host kernel ≥ 6.11 for N150 reports. LXC, not passthrough.  
Protectli VP2430e| 24 EU, 1 GHz (maker page)| If the box is already the 4-NIC node| Fanless chassis still has to dump heat. See [VP2430e](<protectli-vp2430e-n150-4x-2-5g-proxmox>).  
CWWK N305 6-port| 32 EU| More iGPU headroom| More idle watts. Barebone. [CWWK note](<cwwk-n100-4x-i226-amazon>).  
  
## Skip

Skip iGPU passthrough as the default. Skip buying a box because a haul video quoted a stream count I can't reproduce. Skip 8 GB hosts for this job. Carts are the same living-room and 4-NIC SKUs as the other notes, start at [EQ14](<beelink-eq14-n150-dual-lan-proxmox>) or [VP2430e](<protectli-vp2430e-n150-4x-2-5g-proxmox>).

## Sources

[Proxmox forum: N150 iGPU passthrough](<https://forum.proxmox.com/threads/n150-igpu-passthrough.163704/>). [binarypatrick, 2026, Plex LXC hardware transcoding](<https://binarypatrick.dev/posts/2026/plex-lxc-hardware-transcoding/>). [Notebookcheck EQ14 review](<https://www.notebookcheck.net/Beelink-EQ14-mini-PC-review-Ready-to-go-HTPC-for-under-200.939127.0.html>). [Protectli VP2430e](<https://protectli.com/product/vp2430e/>) (iGPU 24 EU, 1 GHz).

## Also on this topic

[Bedroom-shelf quiet versus closet door-shut heatPick a quiet box for a bedroom shelf or a closet with the door shut. Extra network ports usually mean more heat when idle. Published maker ranges only.](<n100-n150-idle-watts-fan-noise>) [N100 vs N150 mini PC for ProxmoxBuy whichever of N100 or N150 is cheaper, in 16 GB.](<n100-mini-pc>) [Read the network ports before you buy this N150 mini: Beelink EQ14The same EQ14 name is sold with gigabit or faster 2.5G ports. Confirm which ports you are actually buying.](<beelink-eq14-n150-dual-lan-proxmox>) [PreviousBuy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>) [NextBedroom-shelf quiet versus closet door-shut heat](<n100-n150-idle-watts-fan-noise>)

---

*Labthrift Markdown mirror. HTML version linked above.*
