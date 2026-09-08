# Power two house APs from one quiet brick: TP-Link TL-SG1005P

Source: https://labthrift.com/guides/tp-link-tl-sg1005p
Markdown: https://labthrift.com/md/guides/tp-link-tl-sg1005p.md

*Notes › / › Better Wi-Fi › / › Power two house APs from one quiet brick: TP-Link TL-SG1005P*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Power two house APs from one quiet brick: TP-Link TL-SG1005P

Written 23 Aug 2026. Specs from the maker page. Street from named Amazon snaps. I haven't used this.

# Power two house APs from one quiet brick: TP-Link TL-SG1005P

Four PoE+ ports (power over the ethernet cable), one spare uplink, no fan, no controller.

Power two house APs from one quiet brick. PoE means the ethernet cable also carries power. Five 1G RJ45. Ports 1–4 are 802.3af/at, 30 W each, 65 W shared. Port 5 is data only. Unmanaged: plug it in. Fanless metal, 99 × 98 × 25 mm, wall-mount holes. External 53.5 VDC / 1.31 A brick. Maker idle 4.29 W, 74.24 W with a full 65 W PD load. 10 Gbps fabric, 7.44 Mpps, 2K MAC, 16 KB jumbo. 802.1p/DSCP QoS and IGMP snooping are on; there is no web UI to touch. Two EAP613-class APs are about 12–15 W each. 65 W is the headroom, not the plan to hang four PTZ cameras.

Amazon ASIN [B076HZFY3F](<https://www.amazon.com/TP-Link-Compliant-Shielded-Optimization-TL-SG1005P/dp/B076HZFY3F>). Recent US snaps print about **$49.99** against a **$56.99** strike. AllTopSteals logged **$38** against $59.99 on 20 Apr 2026. Treat high-$30s as sale weather and ~$50 as the boring street. Confirm the model string is TL-SG1005P, not the 2.5G [TL-SG105PP-M2](<tp-link-tl-sg105pp-m2>).

## What to buy

Box| What it is| Street, 23 Aug 2026| Buy if  
---|---|---|---  
[TP-Link TL-SG1005P](<https://www.amazon.com/TP-Link-Compliant-Shielded-Optimization-TL-SG1005P/dp/B076HZFY3F>)| 5× 1G, 4× PoE+ @ 65 W, fanless metal, unmanaged. ASIN B076HZFY3F. MFR TL-SG1005P V2. 99 × 98 × 25 mm. 53.5 V / 1.31 A brick.| Amazon ~$49.99 vs $56.99 list. April 2026 sale print $38 vs $59.99. Ignore populated camera kits.| Two APs and maybe a camera. You want watts, not VLANs, and the closet should stay silent.  
Netgear GS305P / GS305PP| Same 5-port idea. GS305P is 63 W class; GS305PP is the 83 W sibling. Fanless metal.| Often a few dollars above the TP-Link. Read the watt number on the live card, not the “PoE” badge.| The TP-Link is actually more expensive today, or you already own Netgear Insight junk you refuse to mix.  
[TP-Link TL-SG105PP-M2](<tp-link-tl-sg105pp-m2>)| Five-port 2.5G with PoE+. Different SKU, different bill. See the 2.5G PoE note.| A 2.5G tax on top of PoE. Not the two-AP default.| The APs already have 2.5G uplinks and the closet switch is 2.5G. Otherwise you paid for idle multi-gig.  
  
## Skip

Skip UniFi Switch Lite 8 PoE ($109, 52 W on the UI store) unless you already live in UniFi. It is more money and less budget than this brick. Skip 24 V passive injectors on 802.3af APs. Skip a 4-port 32 W toy; two APs plus a camera will surprise you. Skip a 16-port PE until the cameras exist. Skip buying this because the title says 8-port. It is five. If the job is “two APs plus a handful of wired junk,” the 8-port LS108GP / SG108PE class is the next step, not a 2.5G chassis. Injector vs switch: [the two-AP note](<poe-injector-vs-switch-two-aps>).

## Sources

[TP-Link US maker page](<https://www.tp-link.com/us/business-networking/unmanaged-switch/tl-sg1005p/>) (V2: 5× 1G, ports 1–4 PoE+ 30 W / 65 W total, 10 Gbps, 7.44 Mpps, 2K MAC, 16 KB jumbo, 4.29 W idle / 74.24 W with 65 W PD, 53.5 VDC / 1.31 A, 99 × 98 × 25 mm, fanless). [Amazon B076HZFY3F](<https://www.amazon.com/TP-Link-Compliant-Shielded-Optimization-TL-SG1005P/dp/B076HZFY3F>). Amazon US snap ~$49.99 vs $56.99 list. AllTopSteals, 20 Apr 2026, $38 vs $59.99. Street moves. Confirm diskless. This one has no disks, but Amazon still mixes camera kits onto the same shelf.

## Also on this topic

[Power two Wi-Fi points from one small switchEnough watts and enough ports. Not a controller religion on day one.](<cheap-poe>) [Two floors, one gigabit house, cheap af power: EAP613Two floors, one gigabit house, cheap af power.](<eap613-small-house-af>) [One injector, two injectors, or a 4-port PoE+ switchOne AP can use a small injector. Two APs is when a tiny PoE switch starts making sense.](<poe-injector-vs-switch-two-aps>) [PreviousPower two Wi-Fi points from one small switch](<cheap-poe>) [NextMore ports for a fuller closet, still only four PoE: TP-Link TL-SG108PE](<tp-link-tl-sg108pe>)

---

*Labthrift Markdown mirror. HTML version linked above.*
