# New 10G SFP+ NIC vs staying on 2.5G copper

Source: https://labthrift.com/guides/10gtek-x520-vs-tx201
Markdown: https://labthrift.com/md/guides/10gtek-x520-vs-tx201.md

*Notes › / › Closet extras › / › New 10G SFP+ NIC vs staying on 2.5G copper*

[Notes](<./>) / [Closet extras](<./#closet-adjacent>) / New 10G SFP+ NIC vs staying on 2.5G copper

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# New 10G SFP+ NIC vs staying on 2.5G copper

Don't buy 10G until a single flow fills 2.5. When it does, a new 10Gtek 82599 dual-SFP+ card plus a 2 m DAC is the retail path, not an eBay “pulled X520.”

If the other end is still a normal ethernet jack, the TP-Link TX401 (10G over copper, ships with Cat6A) is the copper path. That is a [later note](<tx401-10gbase-t-later>). Stay on the [TX201](<usb-vs-pcie-2-5g-nic>) and a [2.5G switch](<2-5g-switch>) until one flow is actually full. The DAC is [here](<sfp-plus-dac-closet>).

## What to buy

Card| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
TP-Link TX201| PCIe 2.5G copper. ASIN B0BG685PKM.| About $27 (Amazon snippet $26.99; see the USB vs PCIe note).| A single flow is not filling 2.5. This is still the default NIC.  
10Gtek dual SFP+ (Intel 82599ES)| X520-DA2 equivalent, new, not pulled. ASIN B01DCZCA3O. Linux ixgbe. Does not do 2.5/5G. Needs SFP+ DAC or optic. 10Gtek catalog: X520-10G-2S-X8 = X520-DA2 equivalent.| Amazon $51.99.| One flow fills 2.5 and both ends have (or will have) SFP+ cages.  
TP-Link TX401| 10GBASE-T. ASIN B08D71PVXG. PCIe 3.0, low-profile bracket in box, 1.5 m Cat6A included. Back-compat 10/5/2.5/1G.| Amazon snippets $64.50 and $89.99 (sold by Amazon on the $89.99 capture).| The other end is still RJ45. Later buy. Not a switch.  
  
## Skip

Skip used eBay Intel X520 / X710 pulls. No stable ASIN. Skip buying 10G because the card is $52. Skip treating this card as a 2.5/5G copper NIC. It is not.

## Sources

[Amazon 10Gtek B01DCZCA3O](<https://www.amazon.com/10Gtek-E10G42BTDA-Ethernet-Converged-X520-DA2/dp/B01DCZCA3O>) ($51.99). [Amazon TX201](<https://www.amazon.com/TP-Link-2-5GB-PCIe-Network-TX201/dp/B0BG685PKM>). [Amazon TX401](<https://www.amazon.com/TP-Link-TX401-Ethernet-Supports-Including/dp/B08D71PVXG>). [10Gtek NIC catalog](<https://www.10gtek.com/10gnic>). ComputingForGeeks 10GbE-for-Proxmox (ixgbe vs i40e). SpeedTestHQ 2.5G vs 10G 2026.

## Also on this topic

[When one copy fills the faster house port: the 10G copper card that ships a cableTX401 is the one-SKU copper upgrade when the NAS is 10GBASE-T.](<tx401-10gbase-t-later>) [Meet a faster closet switch without swapping the mini PCA $20–$30 adapter is the cheapest way to meet a 2.5G closet switch.](<usb-vs-pcie-2-5g-nic>) [SFP+ DAC cables for a closet 10G hopThe cheapest short cable between two boxes that already have a fiber-style cage. No glass fiber. No tiny optics to mix up. Skip if neither box has that cage yet.](<sfp-plus-dac-closet>) [PreviousHook-and-loop, not zip ties, in a closet](<closet-cable-management>) [NextWhen one copy fills the faster house port: the 10G copper card that ships a cable](<tx401-10gbase-t-later>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
