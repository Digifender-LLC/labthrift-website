# Old 24 V passive bricks will not power a modern house AP like a U7 Lite

Source: https://labthrift.com/guides/passive-24v-poe-traps
Markdown: https://labthrift.com/md/guides/passive-24v-poe-traps.md

*Notes › / › Better Wi-Fi › / › Old 24 V passive bricks will not power a modern house AP like a U7 Lite*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Old 24 V passive bricks will not power a modern house AP like a U7 Lite

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Old 24 V passive bricks will not power a modern house AP like a U7 Lite

Leftover 24-volt Ubiquiti bricks can kill a modern PoE port. Skip them. 48 V passive is not the same brick either.

Modern closet APs want 48 V 802.3af/at. Leftover 24 V airMAX / old UniFi injectors are the classic brick-the-port story. Omada EAP613 / EAP653 accept 802.3af or 802.3at _and_ 48 V passive (version-dependent). That is 48 V passive, not 24 V. A 24 V airMAX injector is still the wrong brick.

The converter for this job is INS-3AF-I-G: 802.3af in (48 V) → 24 V passive out, 24 V / 0.5 A max. UI store $20. Use it only to feed _legacy 24 V_ UniFi / airMAX from a modern af/at switch. It does not let a 24 V injector feed a modern af AP. Older UniFi AC-Lite / AC-LR 24 V units are out of scope for new-buy posts. U6 Lite is delisted. Don't hunt used 24 V APs.

## What to buy

Thing| Voltage / standard| Street, 22 Aug 2026| Use  
---|---|---|---  
INS-3AF-I-G Instant Indoor PoE Converter| 802.3af in → 24 V passive out. 24 V / 0.5 A max.| UI $20. B&H 1327765-REG. Central Computer $19.95.| Old 24 V radio on a new af/at switch. Never reversed.  
U7 Lite| 44–57 V / 42.5–57 V 802.3af only| $99 UI| Does not take 24 V. [review](<unifi-u7-lite-review>).  
Omada EAP613 / EAP653| 802.3af or at _and_ 48 V passive| ~$80| 48 V passive ≠ 24 V. [613](<eap613-small-house-af>), [613 vs 653](<eap613-vs-eap653>).  
Cudy AP3000| 802.3at/af + 48–57 V passive + 12 V DC| Amazon $69.90| 48–57 V passive. Still not 24 V. [Cudy](<cudy-ap3000-openwrt>).  
  
If you are powering two new APs, buy an af/at injector or a small fanless switch. Don't raid the airMAX junk drawer. Injector math: [one injector vs a 4-port switch](<poe-injector-vs-switch-two-aps>). First-apartment brick: [cheap PoE for two APs](<cheap-poe>).

## Skip

Skip any listing that just says “passive PoE” without a voltage. Skip using INS-3AF-I-G backwards. Skip buying used 24 V UniFi APs so you have a reason to own the converter.

## Sources

[UI INS-3AF-I-G](<https://store.ui.com/us/en/products/ins-3af-i-g>). [B&H 1327765-REG](<https://www.bhphotovideo.com/c/product/1327765-REG/ubiquiti_networks_ins_3af_i_g_instant_802_3af_adapter.html>). [UI Instant 802.3af converter datasheet](<https://dl.ui.com/datasheets/instant/Instant_802.3af_Gigabit_PoE_Converters_DS.pdf>). [Omada EAP613](<https://www.omadanetworks.com/us/business-networking/omada-wifi-ceiling-mount/eap613/>).

## Also on this topic

[Buy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fanBuy the fanless SKU. Don't mod the fan.](<sg2210mp-fan-noise-vs-fanless>) [Faster Wi-Fi 6 ceiling puck when you already have 2.5G PoE and no Wi-Fi 7 phones: EAP670Faster Wi-Fi 6 when you already have 2.5G PoE and no Wi-Fi 7 phones.](<eap670-2-5g-wifi6>) [Power two Wi-Fi points from one small switchEnough watts and enough ports. Not a controller religion on day one.](<cheap-poe>) [Previousaf, at, bt: match the AP class before you buy the switch](<poe-af-at-bt-closet-budget>) [NextBuy the quiet fanless PoE switch. Don't keep the loud SG2210MP and mod the fan](<sg2210mp-fan-noise-vs-fanless>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
