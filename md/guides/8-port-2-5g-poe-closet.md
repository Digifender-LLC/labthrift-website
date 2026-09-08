# Quiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoE

Source: https://labthrift.com/guides/8-port-2-5g-poe-closet
Markdown: https://labthrift.com/md/guides/8-port-2-5g-poe-closet.md

*Notes › / › Better Wi-Fi › / › Quiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoE*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Quiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoE

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Quiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoE

Fanless 100 to 160 W class for two multi-gig house APs. Not a rack heater.

Two U7 Lites or two Cudy AP3000s want 2.5G copper and a quiet PoE budget, not a 24-port white-label 800 W box with an industrial fan. Don't buy a gigabit [SG2210MP](<sg2210mp-fan-noise-vs-fanless>) “because 150 W.” That one has the loud fan. The non-PoE 8-port list stays at [best 2.5G switch for a closet lab](<2-5g-switch>).

TRENDnet TPE-TG380 (8× 2.5G PoE+, 100 W, fanless) is the SKU people still search. Maker page says discontinued, replaced by TPE-BG380. US Amazon this pass hit Renewed B0BZ2MJMQ5 at $125.99. Renewed is not new. The current new TRENDnet is TPE-BG380: 8× 2.5G PoE++, 230 W, fanless.

## What to buy

Box| Ports / PoE| Street, 22 Aug 2026| Buy if  
---|---|---|---  
Omada SG2210XMP-M2| 8× 2.5G PoE+ + 2× 10G SFP+. 160 W. Fanless (Amazon / Newegg / Dong Knows).| Amazon [B0D5Z3NMG9](<https://www.amazon.com/TP-Link-SG2210XMP-M2-8-Port-2-5GBASE-T-2-Port/dp/B0D5Z3NMG9>). Dong Knows launch $249.99. Newegg $347.99. Don't average those.| You want Omada, 2.5G PoE, and silence. Default closet pick if the money is there.  
UniFi USW-Flex-2.5G-8-PoE| 8× 2.5G PoE++, 10G combo uplink. 16–76 W on PoE-in. 196 W with the $79 210 W AC adapter.| UI $199 (surcharge $214). Newegg $268.78.| You already live in UniFi. Adapter is extra. Don't assume 196 W out of the box.  
TRENDnet TPE-BG380| 8× 2.5G PoE++. 230 W. Fanless. Unmanaged. Successor to discontinued TPE-TG380 (100 W PoE+).| Amazon $239.99 (B0DBMWNMMM). Newegg $239.99. TRENDnet store $263.99.| You want new TRENDnet paper (NDAA/TAA, lifetime) and you accept 230 W you will not use.  
TRENDnet TPE-TG380| 8× 2.5G PoE+, 100 W, fanless. Discontinued.| Maker page live as discontinued. US Amazon Renewed $125.99 this pass. Not a new-buy.| Only a confirmed new leftover. Don't click Renewed thinking it is new.  
  
Two af APs (U7 Lite ~13 W, EAP613 10.9 W) don't need 160 W. The first-apartment answer is still [the 5-port brick](<cheap-poe>). They fit [TL-SG108PE at 64 W](<poe-injector-vs-switch-two-aps>) if you can live on gigabit. Buy 2.5G PoE when the APs have 2.5G uplinks. Match class in [af / at / bt](<poe-af-at-bt-closet-budget>).

## Skip

Skip SG2210MP. Gigabit, 150 W, one fan, closet-hostile. Skip YuanLey-class 48-port 800 W “industrial-grade fan” boxes. Skip TPE-TG380 Renewed listed as new. Skip rewriting the non-PoE TEG-S380 essay.

## Sources

[Amazon SG2210XMP-M2](<https://www.amazon.com/TP-Link-SG2210XMP-M2-8-Port-2-5GBASE-T-2-Port/dp/B0D5Z3NMG9>). [Dong Knows SG2210XMP-M2](<https://dongknows.com/tp-link-omada-sg2210xmp-m2-poe-switch-review/>). [UI Flex 2.5G 8 PoE](<https://store.ui.com/us/en/products/usw-flex-2-5g-8-poe>). [TRENDnet TPE-TG380 (discontinued)](<https://www.trendnet.com/products/tpe-tg380>). [TRENDnet TPE-BG380](<https://www.trendnet.com/store/products/2.5g-poeplusplus-switch-8-port-2-5g-poeplusplus-switch-TPE-BG380-v1>). [Amazon TPE-BG380](<https://www.amazon.com/TRENDnet-TPE-BG380-Switching-Compliant-Protection/dp/B0DBMWNMMM>).

## Also on this topic

[One injector, two injectors, or a 4-port PoE+ switchOne AP can use a small injector. Two APs is when a tiny PoE switch starts making sense.](<poe-injector-vs-switch-two-aps>) [af, at, bt: match the AP class before you buy the switchMatch the AP power class before you buy the switch.](<poe-af-at-bt-closet-budget>) [Old 24 V passive bricks will not power a modern house AP like a U7 LiteOld 24 V passive bricks will not power a modern house AP.](<passive-24v-poe-traps>) [PreviousLiving-room router as an AP when the closet has no PoE yet: Flint 2 (GL-MT6000)](<gl-mt6000-ap-mode-no-poe>) [NextOne injector, two injectors, or a 4-port PoE+ switch](<poe-injector-vs-switch-two-aps>)

---

*Labthrift Markdown mirror. HTML version linked above.*
