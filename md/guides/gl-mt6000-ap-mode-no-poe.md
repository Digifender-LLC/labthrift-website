# Living-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)

Source: https://labthrift.com/guides/gl-mt6000-ap-mode-no-poe
Markdown: https://labthrift.com/md/guides/gl-mt6000-ap-mode-no-poe.md

*Notes › / › Better Wi-Fi › / › Living-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Living-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Living-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)

Barrel plug on the desk or shelf. Don't buy a PoE splitter for it.

This is distinct from [Cudy AP3000](<cudy-ap3000-openwrt>). Flint 2 is a desk or shelf router that also makes a better AP than a ceiling puck you cannot power. For a bench under the switch, or a house that still has no PoE run, that is the honest use. The moment you want a ceiling puck on 802.3at, buy the Cudy.

Maker specs: MediaTek quad-core 2.0 GHz, DDR4 1 GB / eMMC 8 GB, Wi-Fi 6 AX6000 (1148 + 4804), 1× 2.5G WAN, 1× 2.5G WAN/LAN, 4× 1G LAN, USB 3.0. Power input DC5521 12 V / 4 A. Consumption listed under 20 W. Official OpenWrt ToH exists.

## What to buy

Box| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
GL-MT6000 (Flint 2)| AX6000 router / AP. 2× 2.5G + 4× 1G. Official OpenWrt. 12 V / 4 A barrel. No PoE.| GL.iNet US warehouse $169.99. Amazon [B0CP7S3117](<https://www.amazon.com/GL-iNet-GL-MT6000-Multi-Gig-Connectivity-WireGuard/dp/B0CP7S3117>) is live; I didn't capture a clean US Amazon street this pass, and I won't invent one.| Shelf or bench. You want OpenWrt and 2.5G copper before you pull PoE cable.  
Cudy AP3000| Ceiling AP, 2.5G PoE-in, 12 W, in-tree OpenWrt 24.10.x.| Amazon $69.90.| You already have PoE. [Cudy note](<cudy-ap3000-openwrt>).  
  
The 2.5G ports want a non-PoE 2.5G switch if the NAS is already there. That list is [best 2.5G switch for a closet lab](<2-5g-switch>). When you later add ceiling APs, power them from a small PoE brick, not from this router. See [cheap PoE for two APs](<cheap-poe>).

## Skip

Skip a PoE splitter. Skip calling this a ceiling AP. Skip paying a Wi-Fi 7 tax for a box you will sit next to a 1G ISP. Skip used Ruckus.

## Sources

[GL.iNet Flint 2](<https://www.gl-inet.com/en-us/products/gl-mt6000>) (US warehouse $169.99 this pass). [Amazon B0CP7S3117](<https://www.amazon.com/GL-iNet-GL-MT6000-Multi-Gig-Connectivity-WireGuard/dp/B0CP7S3117>). [OpenWrt ToH GL-MT6000](<https://openwrt.org/toh/gl.inet/gl-mt6000>).

## Also on this topic

[Quiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoEQuiet switch that powers two Lite APs without a loud 24-port heater.](<8-port-2-5g-poe-closet>) [One injector, two injectors, or a 4-port PoE+ switchOne AP can use a small injector. Two APs is when a tiny PoE switch starts making sense.](<poe-injector-vs-switch-two-aps>) [af, at, bt: match the AP class before you buy the switchMatch the AP power class before you buy the switch.](<poe-af-at-bt-closet-budget>) [PreviousCeiling AP you can later flash OpenWrt on: Cudy AP3000](<cudy-ap3000-openwrt>) [NextQuiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoE](<8-port-2-5g-poe-closet>)

---

*Labthrift Markdown mirror. HTML version linked above.*
