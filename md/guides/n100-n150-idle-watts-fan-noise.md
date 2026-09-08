# Bedroom-shelf quiet versus closet door-shut heat

Source: https://labthrift.com/guides/n100-n150-idle-watts-fan-noise
Markdown: https://labthrift.com/md/guides/n100-n150-idle-watts-fan-noise.md

*Notes › / › Small computers › / › Bedroom-shelf quiet versus closet door-shut heat*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / Bedroom-shelf quiet versus closet door-shut heat

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Bedroom-shelf quiet versus closet door-shut heat

Pick a quiet box for a bedroom shelf or a closet with the door shut. Extra network ports usually mean more heat when idle. Published maker ranges only.

Bedroom-shelf quiet versus closet door-shut heat. Extra network ports usually mean more heat when idle. EQ14 official: 32 dB, 25 W MSP, ~6 W idle cited by third parties. Official 16/500 $375. S12 Pro / G3 Plus: third-party headless idle **6–10 W** (Hobbyist's Hideaway, MiniLab HQ). N305 class: MiniLab HQ typical warm idle **12–16 W**. VP2430e / VP2440e: fanless, max 45 W, $419 / $499. CWWK 4- and 6-port: fanless aluminum; third-party notes ~10–13 W idle on 4-port N100, not measured here.

Quiet fan vs no fan is the real closet choice: [EQ14](<beelink-eq14-n150-dual-lan-proxmox>) vs [VP2430e](<protectli-vp2430e-n150-4x-2-5g-proxmox>). Transcode watts belong in [Quick Sync / LXC](<n100-n150-quicksync-proxmox-lxc>). Chip pick stays on [the roundup](<n100-mini-pc>).

## Published ranges

Box| Cooling| Published power / noise| Street / date  
---|---|---|---  
Beelink EQ14 N150| Fan, official 32 dB| MSP 25 W. ~6 W idle cited by third parties| $375 official, 22 Aug 2026  
S12 Pro / G3 Plus class| Small fan, plastic living-room box| Third-party headless idle 6–10 W| Street noisy; G3 Plus 16 GB ASIN not live  
Protectli VP2430e / VP2440e| Fanless aluminum (0 fan, warmer chassis)| Max 45 W listed| $419 / $499 official  
CWWK 4-port N100| Fanless aluminum| Third-party ~10–13 W idle (not measured here)| Amazon `B0CL5SBWCJ` live, barebone  
N305 class| Varies| MiniLab HQ typical warm idle 12–16 W| CWWK N305 6-port is the 8-core aside  
  
## Skip

Skip a used 1U as the “quiet” option: see [used vs new](<used-vs-new>). Skip assuming fanless means cool; it means the chassis is the heatsink. Skip stuffing extra NICs into a living-room box with a USB dongle and then wondering why idle climbed. Class pick: [dual-LAN vs 4-NIC](<dual-lan-mini-vs-4x-2-5g-appliance>).

## Sources

[Beelink EQ14 official](<https://www.bee-link.com/products/beelink-eq14-n150>) (32 dB, 25 W MSP). [Protectli VP2430e](<https://protectli.com/product/vp2430e/>) (fanless, max 45 W). [Bishal Shah, low-power N100 homelab](<https://bishalkshah.com.np/blog/low-power-homelab-n100-mini-pc>). [MiniLab HQ, measuring mini PC idle wattage](<https://minilabhq.com/posts/measuring-mini-pc-idle-wattage/>). Third-party numbers are theirs, not a Labthrift meter.

## Also on this topic

[N100 vs N150 mini PC for ProxmoxBuy whichever of N100 or N150 is cheaper, in 16 GB.](<n100-mini-pc>) [Read the network ports before you buy this N150 mini: Beelink EQ14The same EQ14 name is sold with gigabit or faster 2.5G ports. Confirm which ports you are actually buying.](<beelink-eq14-n150-dual-lan-proxmox>) [Fanless four-port closet firewall you can warrant: Protectli VP2430eA fanless four-port closet firewall or router box with US support and coreboot. Not a living-room HDMI toy.](<protectli-vp2430e-n150-4x-2-5g-proxmox>) [PreviousTranscode checklist under Proxmox, not stream-count theater](<n100-n150-quicksync-proxmox-lxc>)

---

*Labthrift Markdown mirror. HTML version linked above.*
