# One injector, two injectors, or a 4-port PoE+ switch

Source: https://labthrift.com/guides/poe-injector-vs-switch-two-aps
Markdown: https://labthrift.com/md/guides/poe-injector-vs-switch-two-aps.md

*Notes › / › Better Wi-Fi › / › One injector, two injectors, or a 4-port PoE+ switch*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / One injector, two injectors, or a 4-port PoE+ switch

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# One injector, two injectors, or a 4-port PoE+ switch

One AP can use a small injector. Two APs is when a tiny PoE switch starts making sense. Don't buy four injectors.

[Cheap PoE for two APs](<cheap-poe>) already crowned TL-SG1005P. This post is the injector math. A 15.4 W af injector feeds EAP613 (10.9 W), U7 Lite (~13 W), Instant On AP21/AP22, or GWN7660 (9 W). It does not feed EAP653 (15.5 W, 802.3at). One at-class puck needs a 30 W injector or a switch port that actually does at.

Two af APs fit one 64 W fanless 4-PoE+ switch. Two injectors plus a non-PoE switch is more wall warts and the same money as the switch once you buy the second brick. UniFi’s own 15 W injector is $8 if you already live there.

## What to buy

Box| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
TP-Link TL-POE150S| 802.3af injector, 15.4 W.| Amazon $17.99 ([B001PS9E5I](<https://www.amazon.com/TP-LINK-TL-PoE150S-Injector-Adapter-Compliant/dp/B001PS9E5I>)).| One af AP. Not EAP653.  
TP-Link TL-POE160S| 802.3at injector, 30 W.| Amazon $22.99 ([B08LZZRX5N](<https://www.amazon.com/TL-PoE160S-Injector-Supplies-Wall-Mount-Certified/dp/B08LZZRX5N>)).| One at AP (EAP653, EAP670, EAP723, Cudy AP3000).  
UniFi U-PoE 15W (U-POE-AF)| 48 V / 0.32 A. 15 W.| $8 [UI store](<https://store.ui.com/us/en/products/u-poe-af>).| One U7 Lite off a non-PoE switch.  
TP-Link TL-SG108PE| 8× 1G, 4× PoE+ / 64 W, fanless, smart managed.| Amazon $51.49–$60.85 ([B01BW0AD1W](<https://www.amazon.com/TP-Link-TL-SG108PE-Shielded-Lifetime-Protection/dp/B01BW0AD1W>)). List $69.99.| Two APs now, maybe a camera. No 2.5G. Quiet closet.  
  
If the APs are 2.5G (U7 Lite, Cudy AP3000, EAP670), the injector still works: the uplink is only as fast as the injector’s gigabit jack. For 2.5G end to end you want [8-port 2.5G PoE](<8-port-2-5g-poe-closet>). Match class in [af / at / bt](<poe-af-at-bt-closet-budget>). Don't feed any of these from a 24 V passive brick.

## Skip

Skip a second 150S when the next AP is at-class. Skip SG2210MP for two APs, 150 W and a fan you will hear; [fan note](<sg2210mp-fan-noise-vs-fanless>). Skip treating two $18 injectors as cheaper than a $52 fanless switch if you already know camera three is coming.

## Sources

[Amazon TL-POE150S](<https://www.amazon.com/TP-LINK-TL-PoE150S-Injector-Adapter-Compliant/dp/B001PS9E5I>). [Amazon TL-POE160S](<https://www.amazon.com/TL-PoE160S-Injector-Supplies-Wall-Mount-Certified/dp/B08LZZRX5N>). [UI U-PoE-AF](<https://store.ui.com/us/en/products/u-poe-af>). [Amazon TL-SG108PE](<https://www.amazon.com/TP-Link-TL-SG108PE-Shielded-Lifetime-Protection/dp/B01BW0AD1W>).

## Also on this topic

[af, at, bt: match the AP class before you buy the switchMatch the AP power class before you buy the switch.](<poe-af-at-bt-closet-budget>) [Old 24 V passive bricks will not power a modern house AP like a U7 LiteOld 24 V passive bricks will not power a modern house AP.](<passive-24v-poe-traps>) [Buy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fanBuy the fanless SKU. Don't mod the fan.](<sg2210mp-fan-noise-vs-fanless>) [PreviousQuiet switch that powers two Lite APs without a loud 24-port heater: 8-port 2.5G PoE](<8-port-2-5g-poe-closet>) [Nextaf, at, bt: match the AP class before you buy the switch](<poe-af-at-bt-closet-budget>)

---

*Labthrift Markdown mirror. HTML version linked above.*
