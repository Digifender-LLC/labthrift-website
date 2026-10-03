# Quiet house AP that runs its own controller: Grandstream GWN7660

Source: https://labthrift.com/guides/grandstream-gwn7660-embedded-controller
Markdown: https://labthrift.com/md/guides/grandstream-gwn7660-embedded-controller.md

*Notes › / › Better Wi-Fi › / › Quiet house AP that runs its own controller: Grandstream GWN7660*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Quiet house AP that runs its own controller: Grandstream GWN7660

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Quiet house AP that runs its own controller: Grandstream GWN7660

About 9 W. No extra box. Skip it if you already picked Omada or UniFi.

Quiet house AP that runs its own controller, no extra box. GWN7660 is 2×2:2 AX1770 (573.5 + 1201 Mbps), two gigabit ports, 802.3af/at, 9 W max. The embedded web controller manages up to 50 GWN APs. GWN.Cloud is free. Skip it if you already picked Omada or UniFi.

Don't upsell GWN7664E (4×4:4, dual 2.5G, 21 W, 802.3at) for a closet. The sibling GWN7660E is AX3000-class with 3×3:2 on 5 GHz, one gigabit port, 12.95 W. still af-friendly, still not required.

## What to buy

Box| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
GWN7660| AX1770, 2×2:2, 2× 1G, 802.3af/at, 9 W max. Embedded controller + free GWN.Cloud.| CDW $109. Amazon [B09C68LCBQ](<https://www.amazon.com/Grandstream-GWN7660-Indoor-Access-Point/dp/B09C68LCBQ>) is live; I didn't capture a clean Amazon street this pass.| You want the lowest PoE draw and you already speak Grandstream, or you refuse a VM.  
GWN7660E| AX3000-class, 3×3:2 on 5 GHz, 1× 1G, 12.95 W.| Cite only. Not the closet default.| You need the extra 5 GHz radio and still want af.  
GWN7664E| 4×4:4, dual 2.5G, 21 W, 802.3at.| Amazon B0DLG7SF8L $126.64. CDW $146–$169.| Don't. Closet density does not need 21 W.  
  
Nine watts means two of these plus cameras still fit a 64 W fanless switch. See [injector vs switch](<poe-injector-vs-switch-two-aps>) and the existing [two-AP PoE brick](<cheap-poe>). Versus Omada: [EAP613](<eap613-small-house-af>) is $80 and 10.9 W. Versus UniFi: [U7 Lite](<unifi-u7-lite-review>) is $99 and ~13 W.

## Skip

Skip GWN7664E for a house. Skip buying this if you already have an Omada or UniFi app you like. Skip a 24 V passive injector. This is 802.3af/at. Skip used Ruckus.

## Sources

[Grandstream GWN7660](<https://www.grandstream.com/products/networking-solutions/indoor-wifi-access-points/product/gwn7660>). [GWN7660 datasheet](<https://www.grandstream.com/hubfs/Product_Documentation/GWN7660/Datasheet_GWN7660_English.pdf>). [Amazon B09C68LCBQ](<https://www.amazon.com/Grandstream-GWN7660-Indoor-Access-Point/dp/B09C68LCBQ>). [CDW 7298060](<https://www.cdw.com/product/grandstream-gwn7660-wireless-access-point-wi-fi-6/7298060>).

## Also on this topic

[Ceiling AP you can later flash OpenWrt on: Cudy AP3000Ceiling AP you can later flash OpenWrt on.](<cudy-ap3000-openwrt>) [Living-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)Living-room router as an AP when the closet has no PoE yet.](<gl-mt6000-ap-mode-no-poe>) [Quiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoEQuiet switch that powers two Lite APs without a loud 24-port heater.](<8-port-2-5g-poe-closet>) [PreviousHouse Wi-Fi with an app, no license, no controller VM: Aruba Instant On AP21 vs AP22](<instant-on-ap21-ap22-house>) [NextCeiling AP you can later flash OpenWrt on: Cudy AP3000](<cudy-ap3000-openwrt>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
