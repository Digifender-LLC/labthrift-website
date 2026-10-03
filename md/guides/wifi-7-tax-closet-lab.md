# Skip the $190 Wi-Fi 7 puck until the WAN is faster than the AP

Source: https://labthrift.com/guides/wifi-7-tax-closet-lab
Markdown: https://labthrift.com/md/guides/wifi-7-tax-closet-lab.md

*Notes › / › Better Wi-Fi › / › Skip the $190 Wi-Fi 7 puck until the WAN is faster than the AP*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Skip the $190 Wi-Fi 7 puck until the WAN is faster than the AP

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Skip the $190 Wi-Fi 7 puck until the WAN is faster than the AP

Skip the extra-money 6 GHz puck until the house internet is faster than gigabit.

B&H still sells EAP773 and U7 Pro at $189–$200 next to EAP653 at $80 and U7 Lite at $99. EAP773 wants 802.3bt for full 6 GHz; 802.3at derates 6 GHz (Newegg sheet). A closet with two phones cannot spend that delta. Name the tax. Don't pretend a 10G AP is a lab requirement.

If you already have a 2.5G PoE switch and no Wi-Fi 7 clients, the last Omada stop before 772/773 is [EAP670](<eap670-2-5g-wifi6>) (AX5400, 2.5G, 802.3at). That is still Wi-Fi 6. The religion fork. Omada vs UniFi, is [EAP653 vs U7 Lite](<omada-eap653-vs-unifi-u7-lite>).

## What to buy

SKU| Radios| Uplink / PoE| Street / list, 22 Aug 2026  
---|---|---|---  
Omada EAP653| Wi-Fi 6, 2×2 + 2×2 (AX3000: 2402 + 574)| 1G. 802.3at / 48 V passive / 12 V DC. Max 15.5 W.| B&H $79.99. Amazon B0B5JRXDG4 live.  
UniFi U7 Lite| Wi-Fi 7 dual-band only, no 6 GHz. 4 streams (688 + 4300 class)| 2.5G. 802.3af. UI sheet ~13 W.| UI store $99. B&H $99–$104. [review](<unifi-u7-lite-review>).  
Omada EAP723| Wi-Fi 7 dual-band BE3600 (2882 + 688)| 2.5G. 802.3at. Max 16.8 W PoE.| Omada Store MSRP $89.99. US Amazon listing not confirmed this pass (UK ASIN B0DTQDBNPX).  
Omada EAP772| Wi-Fi 7 tri-band, 2.5G| Stay Omada without 10G.| B&H $169.99.  
Omada EAP773| Wi-Fi 7 tri-band BE11000 (5760 + 2880 + 574)| 10G. 802.3bt full / 802.3at with 6 GHz derate.| B&H / Newegg $189.99.  
UniFi U7 Pro| Wi-Fi 7 tri-band| 2.5G. PoE+. ~21 W (third-party tables).| B&H $189–$200. UI store list in the same band.  
  
## Skip

A 1G WAN and two phones still start at [cheap PoE for two APs](<cheap-poe>), not a 10G puck. Skip EAP773 and U7 Pro until a single client and the WAN can use 6 GHz or 10G. Skip buying a noisy 150 W gigabit “MP” switch just to feed a 21 W Pro: the fan is the product; see [SG2210MP vs fanless](<sg2210mp-fan-noise-vs-fanless>). Skip used Ruckus.

## Sources

[B&H compare U7 Lite / U7 Pro / EAP773 / EAP772](<https://www.bhphotovideo.com/c/compare/Ubiquiti+Networks_U7+Lite_vs_Ubiquiti+Networks_U7+Pro_vs_TP-Link_EAP773_vs_TP-Link_EAP772/BHitems/1885424-REG_1805878-REG_1810594-REG_1860146-REG>). [Newegg EAP773](<https://www.newegg.com/tp-link-eap773/p/N82E16833704729>). [Omada Wi-Fi 7 buying guide](<https://store.omadanetworks.com/blogs/news/omada-wifi-7-access-point-buying-guide-2025-how-to-choose-the-best-wifi-7-access-point-for-your-needs>). [iFeeltech U6-in-2026](<https://ifeeltech.com/blog/ubiquiti-unifi-u6-series-review>). Street figures move.

## Also on this topic

[House Wi-Fi with an app, no license, no controller VM: Aruba Instant On AP21 vs AP22House Wi-Fi with an app, no license, no controller VM.](<instant-on-ap21-ap22-house>) [Quiet house AP that runs its own controller: Grandstream GWN7660Quiet house AP that runs its own controller.](<grandstream-gwn7660-embedded-controller>) [Ceiling AP you can later flash OpenWrt on: Cudy AP3000Ceiling AP you can later flash OpenWrt on.](<cudy-ap3000-openwrt>) [PreviousSimple ceiling Wi-Fi 7 for a UniFi house: UniFi U7 Lite](<unifi-u7-lite-review>) [NextHouse Wi-Fi with an app, no license, no controller VM: Aruba Instant On AP21 vs AP22](<instant-on-ap21-ap22-house>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
