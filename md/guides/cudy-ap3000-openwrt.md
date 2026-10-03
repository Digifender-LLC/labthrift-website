# Ceiling AP you can later flash OpenWrt on: Cudy AP3000

Source: https://labthrift.com/guides/cudy-ap3000-openwrt
Markdown: https://labthrift.com/md/guides/cudy-ap3000-openwrt.md

*Notes › / › Better Wi-Fi › / › Ceiling AP you can later flash OpenWrt on: Cudy AP3000*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Ceiling AP you can later flash OpenWrt on: Cudy AP3000

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Ceiling AP you can later flash OpenWrt on: Cudy AP3000

Stock firmware is fine for a house. The flash is not one-click.

GL.iNet Flint 2 is the known OpenWrt box, but it is a 12 V / 4 A router, not PoE. That guide is [Flint 2 in AP mode](<gl-mt6000-ap-mode-no-poe>). The ceiling AP that actually takes 802.3at and has in-tree OpenWrt (24.10.x, `cudy_ap3000-v1`) is Cudy AP3000.

Radios: 2402 + 574, 2×2, 160 MHz. One 2.5G PoE-in. Power: 802.3at/af, 48–57 V passive, 12 V DC; 12 W max. AP3000 is the puck with no adapter. AP3000_P includes a 48 V passive injector. 48–57 V passive is not 24 V. Don't hang this off an airMAX brick. See [24 V traps](<passive-24v-poe-traps>).

## What to buy

Box| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
Cudy AP3000| AX3000, 1× 2.5G PoE-in, 802.3at/af + 48–57 V passive + 12 V DC. 12 W. No adapter in the box.| Amazon $69.90 ([B0BXNB7CC3](<https://www.amazon.com/Cudy-Wireless-Business-Solution-Seamless/dp/B0BXNB7CC3>)).| You want a 2.5G ceiling AP and a real OpenWrt target, or you just want stock firmware cheap.  
Cudy AP3000_P| Same radio. 48 V passive injector in the box.| Same family. Confirm the exact listing.| You have no PoE switch yet and you accept 48 V passive, not 24 V.  
Cudy AP3000 Outdoor| Different radio and housing.| Amazon B0CYT44ZYL $119.99.| Outside. Don't conflate with the indoor puck.  
  
Twelve watts means two of these fit a 64 W fanless 4-PoE+ switch. Same closet math as [cheap PoE for two APs](<cheap-poe>). and they also fit a 2.5G PoE closet switch. [8-port 2.5G PoE](<8-port-2-5g-poe-closet>). They don't need a 150 W noisy gigabit MP brick. OpenWrt 24.10.x support landed via [openwrt/openwrt#17225](<https://github.com/openwrt/openwrt/pull/17225>). Flash the Cudy transition image first. I haven't flashed one here.

## Skip

Skip the outdoor SKU for a ceiling. Skip pretending this is one-click OpenWrt. Skip a PoE splitter on a Flint 2 instead of buying this. Skip used Ruckus.

## Sources

[Cudy AP3000](<https://www.cudy.com/en-us/products/ap3000-1-0>). [Amazon B0BXNB7CC3](<https://www.amazon.com/Cudy-Wireless-Business-Solution-Seamless/dp/B0BXNB7CC3>). [OpenWrt 24.10.5 notes](<https://openwrt.org/releases/24.10/notes-24.10.5>). [PR 17225](<https://github.com/openwrt/openwrt/pull/17225>).

## Also on this topic

[Living-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)Living-room router as an AP when the closet has no PoE yet.](<gl-mt6000-ap-mode-no-poe>) [Quiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoEQuiet switch that powers two Lite APs without a loud 24-port heater.](<8-port-2-5g-poe-closet>) [One injector, two injectors, or a 4-port PoE+ switchOne AP can use a small injector. Two APs is when a tiny PoE switch starts making sense.](<poe-injector-vs-switch-two-aps>) [PreviousQuiet house AP that runs its own controller: Grandstream GWN7660](<grandstream-gwn7660-embedded-controller>) [NextLiving-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)](<gl-mt6000-ap-mode-no-poe>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
