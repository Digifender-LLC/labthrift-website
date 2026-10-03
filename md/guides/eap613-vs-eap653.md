# Two about-$80 APs. Radio and power class differ. The cheap injector can be the trap: EAP613 vs EAP653

Source: https://labthrift.com/guides/eap613-vs-eap653
Markdown: https://labthrift.com/md/guides/eap613-vs-eap653.md

*Notes › / › Better Wi-Fi › / › Two about-$80 APs. Radio and power class differ. The cheap injector can be the trap: EAP613 vs EAP653*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Two about-$80 APs. Radio and power class differ. The cheap injector can be the trap: EAP613 vs EAP653

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Two about-$80 APs. Radio and power class differ. The cheap injector can be the trap: EAP613 vs EAP653

Same street price band. Different radio and PoE class. Match af vs at before you buy power.

On B&H both pucks were $79.99 this pass. That is not a reason to flip a coin. EAP653 is AX3000 (2402 + 574) with HE160. EAP613 is AX1800 (1201 + 574). For a closet house the radio upgrade is real. The power-class upgrade is the one that breaks a 15.4 W injector.

EAP613 sips 802.3af at 10.9 W. EAP653 wants 802.3at and lists 15.5 W. A [TL-POE150S](<https://www.amazon.com/TP-LINK-TL-PoE150S-Injector-Adapter-Compliant/dp/B001PS9E5I>) is af only. One EAP653 does not fit it. Use a [TL-POE160S](<https://www.amazon.com/TL-PoE160S-Injector-Supplies-Wall-Mount-Certified/dp/B08LZZRX5N>) or a 4-port 64 W fanless switch. Both APs also take 48 V passive. That is 48 V, not 24 V. Read [the 24 V traps](<passive-24v-poe-traps>).

## What to buy

Box| Radios / uplink| PoE| Street, 22 Aug 2026  
---|---|---|---  
EAP613 V2| AX1800, 2×2, 1G| 802.3af / 48 V passive / 12 V DC (adapter not included). 10.9 W PoE.| Amazon $79.99. B&H $79.99–$84.99. [EAP613 review](<eap613-small-house-af>).  
EAP653 V1/V3| AX3000, 2×2 + 2×2, HE160, 1G| 802.3at / 48 V passive / 12 V 1.5 A (adapter not included). 15.5 W.| B&H $79.99. Amazon [B0B5JRXDG4](<https://www.amazon.com/TP-Link-EAP653-Wireless-Business-Multi-Controller/dp/B0B5JRXDG4>).  
  
Power is still a 5-port brick or a pair of injectors. [cheap PoE for two APs](<cheap-poe>) if you have not bought the switch yet. If you already have an at-class port, take the 653. If you are hanging two pucks off a thin af injector pair, take the 613. Neither is a Wi-Fi 7 tax. Compare either of them to a U7 Lite only after you decide whether you want a UniFi app. That fork is [EAP653 vs U7 Lite](<omada-eap653-vs-unifi-u7-lite>).

## Skip

Skip EAP653 UR (B0DCWNFNRW). Listing copy mixed Wi-Fi 7 marketing onto an AX3000 SKU. Skip jumping to EAP773 / U7 Pro at ~$190 until the WAN is faster than the AP. That is the [Wi-Fi 7 tax](<wifi-7-tax-closet-lab>).

## Sources

[EAP613 maker](<https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap613/>). [EAP653 maker](<https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap653/>). [EAP653 3.0 datasheet](<https://static.tp-link.com/upload/product-overview/2026/202606/20260603/Datasheet_EAP653%203.0%20-%20EG.pdf>). [B&H compare 613 / 653 / 670](<https://www.bhphotovideo.com/c/compare/TP-Link_EAP613_vs_TP-Link_EAP653_vs_TP-Link_EAP670/BHitems/1754761-REG_1733667-REG_1810160-REG>). Street figures move.

## Also on this topic

[Pick the house Wi-Fi software you will actually live with: Omada EAP653 vs UniFi U7 LitePick the house Wi-Fi software you will actually live with.](<omada-eap653-vs-unifi-u7-lite>) [Simple ceiling Wi-Fi 7 for a UniFi house: UniFi U7 LiteSimple ceiling Wi-Fi 7 for a UniFi house. Honest dual-band, no 6 GHz.](<unifi-u7-lite-review>) [Skip the $190 Wi-Fi 7 puck until the WAN is faster than the APSkip the extra-money 6 GHz puck until the house internet is faster than gigabit.](<wifi-7-tax-closet-lab>) [PreviousTwo floors, one gigabit house, cheap af power: EAP613](<eap613-small-house-af>) [NextPick the house Wi-Fi software you will actually live with: Omada EAP653 vs UniFi U7 Lite](<omada-eap653-vs-unifi-u7-lite>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
