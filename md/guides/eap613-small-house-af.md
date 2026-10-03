# Two floors, one gigabit house, cheap af power: EAP613

Source: https://labthrift.com/guides/eap613-small-house-af
Markdown: https://labthrift.com/md/guides/eap613-small-house-af.md

*Notes › / › Better Wi-Fi › / › Two floors, one gigabit house, cheap af power: EAP613*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Two floors, one gigabit house, cheap af power: EAP613

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Two floors, one gigabit house, cheap af power: EAP613

AX1800 ceiling AP (a Wi-Fi radio) on cheap 802.3af power. No DC brick in the box.

Two floors, one gigabit house, cheap af power. An AP is a ceiling or wall Wi-Fi radio. The current Omada floor SKU is still a 2×2 Wi-Fi 6 ceiling puck with a gigabit port and a 10.9 W PoE draw. A cheap 802.3af injector (the small PoE power class) or a 4-port 64 W fanless switch is enough. No DC brick in the box.

The trap is Amazon copy that says “PoE+ powered.” V2 is 802.3af, 48 V passive, or 12 V DC. The adapter is not in the box. 48 V passive is not 24 V. A leftover airMAX injector is the wrong brick. See [the 24 V trap note](<passive-24v-poe-traps>).

## What to buy

Box| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
TP-Link Omada EAP613 (V2)| AX1800 (1201 + 574), 2×2, 1G. 802.3af / 48 V passive / 12 V DC. Max 10.9 W PoE, 9.9 W DC.| Amazon $79.99 ([B0BW52D9FZ](<https://www.amazon.com/TP-Link-EAP613-Wireless-Ultra-Slim-Controller/dp/B0BW52D9FZ>)). B&H $79.99–$84.99. Newegg $87.99.| Small house, two APs, you already own an af injector or a [cheap PoE brick](<cheap-poe>).  
TP-Link Omada EAP653| AX3000, HE160, 802.3at, 15.5 W. Same money on B&H this pass.| B&H $79.99. See [EAP613 vs EAP653](<eap613-vs-eap653>).| You have an at-class port and want the extra 5 GHz radio.  
  
Add the AP draw before you celebrate a 52 W UniFi Lite 8. Two EAP613s are ~22 W. Two EAP613s plus two cheap cameras will still surprise a thin budget. For the injector-vs-switch math, use [one injector, two injectors, or a 4-port switch](<poe-injector-vs-switch-two-aps>).

## Skip

Skip the 5-pack listing (B0C29X1397) unless you actually need five. Skip EAP653 UR. Listing copy mixed Wi-Fi 7 marketing onto an AX3000 SKU. Skip a $190 Wi-Fi 7 puck until the WAN is faster than the AP; that is the [Wi-Fi 7 tax](<wifi-7-tax-closet-lab>).

## Sources

[Omada EAP613 maker page](<https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap613/>). [Amazon B0BW52D9FZ](<https://www.amazon.com/TP-Link-EAP613-Wireless-Ultra-Slim-Controller/dp/B0BW52D9FZ>). [B&H 1754761-REG](<https://www.bhphotovideo.com/c/product/1754761-REG/tp_link_eap613_ax1800_ceiling_mount_wifi.html>). [Newegg N82E16833704689](<https://www.newegg.com/omada-eap613/p/N82E16833704689>). Street figures move. Check the live price before you click.

## Also on this topic

[Two about-$80 APs. Radio and power class differ. The cheap injector can be the trap: EAP613 vs EAP653Two about-$80 APs. Different radio and power class. Cheap injector can be the trap.](<eap613-vs-eap653>) [Pick the house Wi-Fi software you will actually live with: Omada EAP653 vs UniFi U7 LitePick the house Wi-Fi software you will actually live with.](<omada-eap653-vs-unifi-u7-lite>) [Simple ceiling Wi-Fi 7 for a UniFi house: UniFi U7 LiteSimple ceiling Wi-Fi 7 for a UniFi house. Honest dual-band, no 6 GHz.](<unifi-u7-lite-review>) [PreviousMore ports for a fuller closet, still only four PoE: TP-Link TL-SG108PE](<tp-link-tl-sg108pe>) [NextTwo about-$80 APs. Radio and power class differ. The cheap injector can be the trap: EAP613 vs EAP653](<eap613-vs-eap653>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
