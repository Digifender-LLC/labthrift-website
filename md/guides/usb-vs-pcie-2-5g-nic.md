# Meet a faster closet switch without swapping the mini PC

Source: https://labthrift.com/guides/usb-vs-pcie-2-5g-nic
Markdown: https://labthrift.com/md/guides/usb-vs-pcie-2-5g-nic.md

*Notes › / › Closet extras › / › Meet a faster closet switch without swapping the mini PC*

[Notes](<./>) / [Closet extras](<./#closet-adjacent>) / Meet a faster closet switch without swapping the mini PC

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Meet a faster closet switch without swapping the mini PC

Most tiny living-room boxes ship a normal house ethernet port. A $20–$30 adapter is the cheapest way to meet a [faster closet switch](<2-5g-switch>) without buying a new computer.

Meet a faster closet switch (2.5G, faster than normal house ethernet) without swapping the mini PC. PCIe is the cleaner Proxmox path if a slot exists. USB (Realtek RTL8156B / RTL8156BG) is the path when it does not. See the [N100 note](<n100-mini-pc>) before you assume the box already has 2.5G.

## What to buy

Adapter| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
TP-Link TX201| PCIe 2.5G. ASIN B0BG685PKM. Also Newegg 14U-015E-00362 (first listed 19 Jul 2026).| Amazon snippet $26.99, sold by Amazon. Recheck the live buy box.| The mini PC or desktop has a free PCIe slot. Default Proxmox path.  
Plugable USBC-E2500| USB-C/A hybrid, RTL8156B.| Maker $24.95. Amazon UK ASIN B084L4JL9K. Confirm a US cart before you treat that as US street.| No slot. You want a named USB-C/A dongle.  
Waveshare USB 3.2 Gen1 TO 2.5G ETH| SKU 27688, RTL8156B.| Maker $16.99.| Cheapest named RTL8156B on a maker page.  
Cable Matters USB-A 2.5G| RTL8156BG, model 202485, ASIN B0GFHS6L87.| Listing live. No clean US street captured this pass.| USB-A only. Recheck the live price.  
  
## Skip

Skip a host swap just to get 2.5G. Skip unnamed USB dongles with no chipset on the page. Don't jump to 10G until a single flow fills 2.5. That is the [10Gtek vs TX201](<10gtek-x520-vs-tx201>) note.

## Sources

[Amazon TX201](<https://www.amazon.com/TP-Link-2-5GB-PCIe-Network-TX201/dp/B0BG685PKM>). [Newegg TX201](<https://www.newegg.com/tp-link-tx201/p/14U-015E-00362>). Maker download: [tp-link.com/us/support/download/tx201](<https://www.tp-link.com/us/support/download/tx201/>). [Plugable USBC-E2500](<https://plugable.com/products/usbc-e2500>). [Waveshare USB 3.2 Gen1 TO 2.5G ETH](<https://www.waveshare.com/usb-3.2-gen1-to-2.5g-eth.htm>). Cable Matters ASIN B0GFHS6L87 (listing live; no clean US street). selfhosting.sh USB-adapter roundup (RTL8156B / Cable Matters ~$17 class).

## Also on this topic

[SFP+ DAC cables for a closet 10G hopThe cheapest short cable between two boxes that already have a fiber-style cage. No glass fiber. No tiny optics to mix up. Skip if neither box has that cage yet.](<sfp-plus-dac-closet>) [Cat6a vs Cat5e in a closet that already does 2.5G2.5GBASE-T is specified to run on existing Cat5e. Don't rip walls.](<cat6a-vs-cat5e-closet>) [Cheap UPS for a closet that stays on overnightA small battery box so a blink of the lights is not a reboot. Skip a huge rack UPS this weekend.](<cheap-ups-closet>) [NextSFP+ DAC cables for a closet 10G hop](<sfp-plus-dac-closet>)

---

*Labthrift Markdown mirror. HTML version linked above.*
