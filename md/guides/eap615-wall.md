# In-wall house AP when the cable already comes out of the wall box: EAP615-Wall

Source: https://labthrift.com/guides/eap615-wall
Markdown: https://labthrift.com/md/guides/eap615-wall.md

*Notes › / › Better Wi-Fi › / › In-wall house AP when the cable already comes out of the wall box: EAP615-Wall*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / In-wall house AP when the cable already comes out of the wall box: EAP615-Wall

Written 23 Aug 2026. Specs from the Omada maker page and recent street reports. I haven't used this.

# In-wall house AP when the cable already comes out of the wall box: EAP615-Wall

Cheap PoE runs the radio. Extra power class is only if you want the front jack powered too.

In-wall house AP when the ethernet already comes out of the wall box, not the ceiling. The current Omada wall-plate SKU is still AX1800 (1201 + 574), four spatial streams, and a US/EU gang-box face. One gigabit uplink takes 802.3af or 802.3at. Three front jacks pass data; the powered front jack wants the higher power class if you use it.

Buy this when the drop is already in a bedroom or office box and you want three copper jacks on the wall. Buy the [EAP613 ceiling puck](<eap613-small-house-af>) when you are covering a floor. Same radio class, different job. Omada SDN is optional. Standalone still works.

## What to buy

Box| What it is| Street, 23 Aug 2026| Buy if  
---|---|---|---  
TP-Link Omada EAP615-Wall| AX1800 wall plate. 1× GbE PoE in (802.3af/at), 3× GbE down (one pass-through). US 11.5 W with PoE Out off. Pass-through needs 802.3at; 12 W US / 13 W EU. 143 × 86 × 19.7 mm. UPC 840030703607. ASIN B09KYK1S9R. MFR EAP615-WALL.| Amazon $89.99 ([B09KYK1S9R](<https://www.amazon.com/TP-Link-EAP615-Wall-Business-Beamforming-Integrated/dp/B09KYK1S9R>)); other-sellers from $88.89. B&H $89.99 (1684296-REG). Skip CDW $104.99. Skip Amazon Renewed $79.99.| The drop is already in a US gang box and you want three jacks on the face, not a puck on the ceiling.  
TP-Link Omada EAP613 (V2)| AX1800 ceiling puck. 1G. 802.3af / 48 V passive / 12 V DC. Max 10.9 W PoE. Adapter not in the box. See [the EAP613 note](<eap613-small-house-af>).| Amazon $79.99. Different job: covers a floor, not a box.| You are covering two floors with two pucks, not filling a bedroom gang box.  
  
Budget the uplink class before you celebrate the passthrough jack. An af injector or a 4-port 64 W fanless switch will run the radio. Only an at-class port feeds the phone or camera on the face. For injector-vs-switch math, use [one injector, two injectors, or a 4-port switch](<poe-injector-vs-switch-two-aps>).

## Skip

Skip this as a house AP. A wall plate does not replace a ceiling puck. Skip an af injector if you need PoE out. Skip CDW $104.99 when Amazon and B&H print $89.99. Skip Amazon Renewed. Skip used UniFi In-Wall HD lots. Skip EAP655-Wall (Wi-Fi 6E) until the clients in that room actually use 6 GHz.

## Sources

[Omada EAP615-Wall maker page](<https://www.omadanetworks.com/us/business-networking/omada-wifi-wall-plate/eap615-wall/>) (1201 + 574, 802.3af/at, pass-through needs at, US 11.5 W PoE Out off, 12 W US pass-through, 143 × 86 × 19.7 mm). [Amazon B09KYK1S9R](<https://www.amazon.com/TP-Link-EAP615-Wall-Business-Beamforming-Integrated/dp/B09KYK1S9R>) ($89.99; other-sellers from $88.89; Renewed $79.99). [B&H 1684296-REG](<https://www.bhphotovideo.com/c/product/1684296-REG/tp_link_eap615_wall_ax1800_wall_plate.html>) ($89.99, MFR EAP615-WALL). UPC 840030703607. Street figures move. Check the live price before you click.

## Also on this topic

[Two floors, one gigabit house, cheap af power: EAP613Two floors, one gigabit house, cheap af power.](<eap613-small-house-af>) [Power two Wi-Fi points from one small switchEnough watts and enough ports. Not a controller religion on day one.](<cheap-poe>) [One injector, two injectors, or a 4-port PoE+ switchOne AP can use a small injector. Two APs is when a tiny PoE switch starts making sense.](<poe-injector-vs-switch-two-aps>) [PreviousFaster Wi-Fi 6 ceiling puck when you already have 2.5G PoE and no Wi-Fi 7 phones: EAP670](<eap670-2-5g-wifi6>)

---

*Labthrift Markdown mirror. HTML version linked above.*
