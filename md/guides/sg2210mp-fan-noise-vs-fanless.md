# Buy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fan

Source: https://labthrift.com/guides/sg2210mp-fan-noise-vs-fanless
Markdown: https://labthrift.com/md/guides/sg2210mp-fan-noise-vs-fanless.md

*Notes › / › Better Wi-Fi › / › Buy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fan*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Buy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fan

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Buy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fan

Datasheet says quiet. Real closets hear the fan. Buy the fanless SKU instead.

Buy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fan. SG2210MP is the cheap-looking 8-port gigabit 150 W Omada switch people add “for cameras later.” Maker datasheet: 1 fan, typical 24.4 dBA at 1 m; fanless mode only at low load. Doyle measured about 49 dB in a real closet. Buy SG2210XMP-M2 or a quiet SG108PE-class brick instead.

Don't swap the fan. The 2.5G SG2210XMP-M2 is the fanless 160 W answer. TL-SG108PE is the $50–$60 fanless 64 W answer if you only have two APs. USW-Lite-8-PoE is silent fanless at 52 W if you already live in UniFi.

## What to buy

Box| Ports / watts / fan| Street, 22 Aug 2026| Buy if  
---|---|---|---  
Omada SG2210MP| 8× 1G PoE+ + 2× SFP. 150 W. 1 fan. Fanless only < 30 W PoE at 25 °C.| Amazon [B08JB1C41Y](<https://www.amazon.com/TP-Link-TL-SG2210MP-Jetstream-Integrated-Protection/dp/B08JB1C41Y>) listed new from $174.99 this pass. Cite only as the noisy one.| Don't, for a bedroom closet.  
Omada SG2210XMP-M2| 8× 2.5G PoE+ + 2× 10G SFP+. 160 W. Fanless.| Amazon B0D5Z3NMG9. Dong Knows launch $249.99. Newegg $347.99.| You want the 150 W-class budget without the fan. [2.5G PoE closet](<8-port-2-5g-poe-closet>).  
TL-SG108PE| 8× 1G, 4× PoE+ / 64 W, fanless.| Amazon $51.49–$60.85 (B01BW0AD1W).| Two APs. Gigabit is enough. [injector vs switch](<poe-injector-vs-switch-two-aps>).  
USW-Lite-8-PoE| 4× PoE+, 52 W. UI: silent fanless.| $109 UI (surcharge $117).| Already UniFi. Easy to outgrow. Already in [cheap PoE](<cheap-poe>).  
  
High-watt 24/48-port white-label boxes (YuanLey 48-port 800 W, “industrial-grade fan”) are closet-wrong even when cheap. The fan is the product. Put the money in a fanless 64–160 W brick instead.

## Skip

Skip SG2210MP for a closet you sleep near. Skip “I will just undervolt the fan.” Skip a 24-port heater. Skip treating 150 W as a virtue when two APs draw 20–30 W.

## Sources

[SG2210MP datasheet](<https://static.tp-link.com/upload/product-overview/2026/202604/20260422/SG2210MP\(UN\)5.26_datasheet.pdf>). [Christopher Doyle, 18 Apr 2023](<https://chriswebsite.com/2023/04/18/tp-link-fan-replacement.html>). [TP-Link forum topic 255686](<https://community.tp-link.com/en/business/forum/topic/255686>). [Amazon SG2210XMP-M2](<https://www.amazon.com/TP-Link-SG2210XMP-M2-8-Port-2-5GBASE-T-2-Port/dp/B0D5Z3NMG9>).

## Also on this topic

[Faster Wi-Fi 6 ceiling puck when you already have 2.5G PoE and no Wi-Fi 7 phones: EAP670Faster Wi-Fi 6 when you already have 2.5G PoE and no Wi-Fi 7 phones.](<eap670-2-5g-wifi6>) [Power two Wi-Fi points from one small switchEnough watts and enough ports. Not a controller religion on day one.](<cheap-poe>) [Two floors, one gigabit house, cheap af power: EAP613Two floors, one gigabit house, cheap af power.](<eap613-small-house-af>) [PreviousOld 24 V passive bricks will not power a modern house AP like a U7 Lite](<passive-24v-poe-traps>) [NextFaster Wi-Fi 6 ceiling puck when you already have 2.5G PoE and no Wi-Fi 7 phones: EAP670](<eap670-2-5g-wifi6>)

---

*Labthrift Markdown mirror. HTML version linked above.*
