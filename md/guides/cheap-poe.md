# Power two Wi-Fi points from one small switch

Source: https://labthrift.com/guides/cheap-poe
Markdown: https://labthrift.com/md/guides/cheap-poe.md

*Notes › / › Better Wi-Fi › / › Power two Wi-Fi points from one small switch*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Power two Wi-Fi points from one small switch

Written 21 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Power two Wi-Fi points from one small switch

Some Wi-Fi access points take power from the ethernet cable. That is called PoE. Count the watts and the ports. You don't need a whole brand stack on day one.

## What to buy

Box| PoE| Street, 2026| Buy if  
---|---|---|---  
[TP-Link TL-SG1005P](<tp-link-tl-sg1005p>)| 5 ports, 4× PoE+, 65W total, fanless, unmanaged| The default two-AP brick. Maker page lists 65W / 30W per port.| Two APs or a camera plus an AP. No VLANs.  
TP-Link LS108GP / similar 8-port budget PoE| More ports, still cheap| Varies. Read the watt budget, not the port count.| You already know camera number three is coming.  
UniFi Switch Lite 8 PoE| 4× PoE+, 52W, fanless, managed| $109 on the UI store, 22 Jun 2026 listing.| You already live in UniFi. 52W is easy to outgrow.  
TP-Link TL-SG1016PE| 16 ports, 8 PoE+, 150W, smart managed| Often cited around $140.| A house with cameras. Not a first apartment AP pair.  
  
## APs

Ceiling or high-shelf, wired backhaul, one per floor. A $40 mesh satellite hopping on Wi-Fi is not an AP. If you are already UniFi, stay UniFi so you are not running two apps. If you are not, a current TP-Link Omada EAP is the less preachy path.

Add the AP draw (often 10–20W) before you celebrate a 52W switch. Two APs plus two cheap cameras will surprise you.

## Sources

[TP-Link TL-SG1005P](<https://www.tp-link.com/us/business-networking/unmanaged-switch/tl-sg1005p/>) (65 W / 30 W per port). [TP-Link LS108GP](<https://www.tp-link.com/us/business-networking/soho-switch-unmanaged/ls108gp/>) (62 W on eight PoE+ ports, read the watt budget). [UI Switch Lite 8 PoE](<https://store.ui.com/us/en/products/usw-lite-8-poe>) ($109, 52 W). [TP-Link TL-SG1016PE](<https://www.tp-link.com/us/business-networking/easy-smart-switch/tl-sg1016pe/>) (8× PoE+, 110 W on the US maker page). Street moves.

## Also on this topic

[Power two house APs from one quiet brick: TP-Link TL-SG1005PFour PoE+, one spare gigabit. Quiet brick for two house APs.](<tp-link-tl-sg1005p>) [Two floors, one gigabit house, cheap af power: EAP613Two floors, one gigabit house, cheap af power.](<eap613-small-house-af>) [Two about-$80 APs. Radio and power class differ. The cheap injector can be the trap: EAP613 vs EAP653Two about-$80 APs. Different radio and power class. Cheap injector can be the trap.](<eap613-vs-eap653>) [Pick the house Wi-Fi software you will actually live with: Omada EAP653 vs UniFi U7 LitePick the house Wi-Fi software you will actually live with.](<omada-eap653-vs-unifi-u7-lite>) [PreviousChange the Pi-hole admin password](<leftover-box-pihole-password>) [NextPower two house APs from one quiet brick: TP-Link TL-SG1005P](<tp-link-tl-sg1005p>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
