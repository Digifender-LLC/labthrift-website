# af, at, bt: match the AP class before you buy the switch

Source: https://labthrift.com/guides/poe-af-at-bt-closet-budget
Markdown: https://labthrift.com/md/guides/poe-af-at-bt-closet-budget.md

*Notes › / › Better Wi-Fi › / › af, at, bt: match the AP class before you buy the switch*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / af, at, bt: match the AP class before you buy the switch

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# af, at, bt: match the AP class before you buy the switch

Match the AP's power class before you buy the switch. Budget the switch's total watts, not eight ports times a big number. af, at, and bt are the three common power classes: small, medium, and extra.

802.3af is about 15.4 W at the port. 802.3at is about 30 W. 802.3bt Type 3/4 is camera / 6 GHz-Pro territory. Closet APs that stay in af: U7 Lite, EAP613, Instant On AP21/AP22, GWN7660. Closet APs that need at: EAP653, EAP670, EAP723, Instant On AP25/AP32, GWN7664E. bt: EAP773 at full radios (802.3at derates 6 GHz).

Lite 8 PoE is 52 W. SG108PE is 64 W. Discontinued TPE-TG380 was 100 W. SG2210XMP-M2 is 160 W. Two 13 W Lites fit 52 W. Two 15.5 W EAP653s plus two cameras don't. The existing [two-AP brick](<cheap-poe>) is still the first apartment answer. This page is just the class math.

## What to buy

AP / switch| Class / budget| Maker max (cite, not a lab number)| Note  
---|---|---|---  
U7 Lite| 802.3af| ~13 W| [review](<unifi-u7-lite-review>)  
EAP613| 802.3af| 10.9 W PoE| [review](<eap613-small-house-af>)  
GWN7660| 802.3af/at| 9 W| [review](<grandstream-gwn7660-embedded-controller>)  
Instant On AP21 / AP22| 802.3af class 3| ~10.9 W / 10.1 W| [AP21 vs AP22](<instant-on-ap21-ap22-house>)  
EAP653| 802.3at| 15.5 W| Breaks a 15.4 W injector. [vs 613](<eap613-vs-eap653>).  
EAP670 V2| 802.3at| US V2 22.3 W PoE| [2.5G Wi-Fi 6](<eap670-2-5g-wifi6>)  
EAP773| 802.3bt full / at derates 6 GHz| Tri-band 10G| [Wi-Fi 7 tax](<wifi-7-tax-closet-lab>)  
USW-Lite-8-PoE| 4× PoE+, 52 W total| $109 UI (surcharge $117)| Budget number, not a repurchase pitch.  
TL-SG108PE| 4× PoE+, 64 W, fanless| $51–$61 Amazon| [injector vs switch](<poe-injector-vs-switch-two-aps>)  
SG2210XMP-M2| 8× 2.5G PoE+, 160 W, fanless| Dong Knows $249.99 / Newegg $347.99| [2.5G PoE closet](<8-port-2-5g-poe-closet>)  
  
## Skip

Skip “8 × 30 W = 240 W” shopping. The switch total is the product. Skip a noisy 150 W gigabit MP for two APs. Skip mixing 24 V passive with any row above, [24 V traps](<passive-24v-poe-traps>).

## Sources

[Cablify UniFi PoE guide](<https://www.cablify.ca/unifi-ap-power-requirements-poe-guide/>). [UI Lite 8 PoE](<https://store.ui.com/us/en/products/usw-lite-8-poe>). [Omada EAP653](<https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap653/>). [Newegg EAP773](<https://www.newegg.com/tp-link-eap773/p/N82E16833704729>).

## Also on this topic

[Old 24 V passive bricks will not power a modern house AP like a U7 LiteOld 24 V passive bricks will not power a modern house AP.](<passive-24v-poe-traps>) [Buy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fanBuy the fanless SKU. Don't mod the fan.](<sg2210mp-fan-noise-vs-fanless>) [Faster Wi-Fi 6 ceiling puck when you already have 2.5G PoE and no Wi-Fi 7 phones: EAP670Faster Wi-Fi 6 when you already have 2.5G PoE and no Wi-Fi 7 phones.](<eap670-2-5g-wifi6>) [PreviousOne injector, two injectors, or a 4-port PoE+ switch](<poe-injector-vs-switch-two-aps>) [NextOld 24 V passive bricks will not power a modern house AP like a U7 Lite](<passive-24v-poe-traps>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
