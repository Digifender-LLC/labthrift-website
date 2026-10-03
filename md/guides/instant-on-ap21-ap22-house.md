# House Wi-Fi with an app, no license, no controller VM: Aruba Instant On AP21 vs AP22

Source: https://labthrift.com/guides/instant-on-ap21-ap22-house
Markdown: https://labthrift.com/md/guides/instant-on-ap21-ap22-house.md

*Notes › / › Better Wi-Fi › / › House Wi-Fi with an app, no license, no controller VM: Aruba Instant On AP21 vs AP22*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / House Wi-Fi with an app, no license, no controller VM: Aruba Instant On AP21 vs AP22

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# House Wi-Fi with an app, no license, no controller VM: Aruba Instant On AP21 vs AP22

App plus web portal. Skip the denser AP25 for a normal house.

House Wi-Fi with an app, no license, and no extra controller VM. Instant On’s pitch (HPE datasheet) is the app and the web portal, no subscription, 2-year warranty. That is a third religion after UniFi and Omada, and a better fit when you refuse to run a controller box.

AP21 is the low-density 2×2 Wi-Fi 6 unit, 802.3af class 3, about 10.9 W DC / PoE, ~1.5 Gbps class, ~50 clients, ~1,500 ft². AP22 is the older core 2×2 Wi-Fi 6, also 802.3af class 3, 10.1 W PoE. AP25 (4×4, 2.5G, 802.3at, ~20 W) is the density tax. Skip it for a closet.

## What to buy

Box| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
Instant On AP21 US (S1T08A)| 2×2 Wi-Fi 6, 802.3af class 3, ~10.9 W. AP only; PoE/DC sold separate. Bundle with PSU on HPE store.| HPE / reseller $99.99. Walmart listing $99.99 (S1T08A). SHI showed S1T08A at $106 vs $190 MSRP.| One or two rooms, no controller VM, you will buy an af injector separately.  
Instant On AP22 US| Older core 2×2 Wi-Fi 6, 802.3af class 3, 10.1 W PoE. Bundle R6M49A includes PSU; AP-only is R4W01A.| Amazon bundle $179.99 ([B08FBMF85D](<https://www.amazon.com/Hewlett-Packard-Enterprise-company-Included/dp/B08FBMF85D>)).| You want the PSU in the box and you already live in Instant On. At $180 it is not the cheap path.  
  
Both stay in 802.3af. Two of them fit a 64 W fanless 4-PoE switch. See [af / at / bt](<poe-af-at-bt-closet-budget>) and [cheap PoE for two APs](<cheap-poe>). If you already own Grandstream phones, the embedded-controller story is [GWN7660](<grandstream-gwn7660-embedded-controller>), not Instant On.

## Skip

Skip AP25 / AP32 for a house. Skip paying $180 for an AP22 bundle when AP21 is $100 and an [af injector](<https://www.amazon.com/TP-LINK-TL-PoE150S-Injector-Adapter-Compliant/dp/B001PS9E5I>) is $18. Skip used Ruckus. Skip a 24 V passive brick. These are af class 3.

## Sources

[HPE Instant On AP21](<https://www.hpe.com/us/en/instant-on/access-points/access-point-21.html>). [Instant On Wi-Fi 6 datasheet](<https://instant-on.hpe.com/files/DS_WI-FI-6.pdf>). [Amazon AP22 B08FBMF85D](<https://www.amazon.com/Hewlett-Packard-Enterprise-company-Included/dp/B08FBMF85D>). [HPE store AP22](<https://buy.hpe.com/us/en/networking/wireless-devices/wlan-access-points/aruba-small-business-access-point-products/hpe-networking-instant-on-access-points-ap22/p/1012928284>). B&H Instant On catalog exists; I didn't lock a B&H item ID this pass.

## Also on this topic

[Quiet house AP that runs its own controller: Grandstream GWN7660Quiet house AP that runs its own controller.](<grandstream-gwn7660-embedded-controller>) [Ceiling AP you can later flash OpenWrt on: Cudy AP3000Ceiling AP you can later flash OpenWrt on.](<cudy-ap3000-openwrt>) [Living-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)Living-room router as an AP when the closet has no PoE yet.](<gl-mt6000-ap-mode-no-poe>) [PreviousSkip the $190 Wi-Fi 7 puck until the WAN is faster than the AP](<wifi-7-tax-closet-lab>) [NextQuiet house AP that runs its own controller: Grandstream GWN7660](<grandstream-gwn7660-embedded-controller>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
