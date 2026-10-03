# A USB-to-RJ45 console cable that is not an ethernet dongle

Source: https://labthrift.com/guides/closet-usb-console-cable
Markdown: https://labthrift.com/md/guides/closet-usb-console-cable.md

*Notes › / › Closet extras › / › A USB-to-RJ45 console cable that is not an ethernet dongle*

[Notes](<./>) / [Closet extras](<./#closet-adjacent>) / A USB-to-RJ45 console cable that is not an ethernet dongle

Written 23 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# A USB-to-RJ45 console cable that is not an ethernet dongle

Get a prompt on a switch that will not take an IP. The port labeled Console is serial over RJ45, so the cable you want is USB to serial with an FTDI chip. A USB-C ethernet adapter is a NIC and will not do it.

The RJ45 on a switch labeled Console is a serial port, not ethernet. Hang this next to the [StarTech 12U](<12u-vs-10-inch-closet-rack>) with the [12-port panel](<closet-cat6-patch-panel>). The [HDMI KVM](<cheap-kvm-over-ip>) is for BIOS. This cable is for IOS, RouterOS, and a switch that will not take an IP.

## What to buy

Cable| What it is| Street, 23 Aug 2026| Buy if  
---|---|---|---  
Cable Matters 202065-6| USB-A 2.0 male to RJ45 8P/8C male, 6 ft rollover. Chipset FTDI FT232RQ (maker QSG). 250 Kbps. Bus-powered. Cisco-standard pin-out. Windows / macOS / Linux. ASIN B078PVJ5ZQ. UPC 818707023136.| Cable Matters catalog $17.99, sale $17.49. Amazon listing $17.49, in stock, sold by Cable Matters, ships from Amazon.| Default. The closet laptop still has USB-A, or you keep a USB-A dongle in the drawer.  
Cable Matters 201065-6| USB-C 2.0 male to RJ45 male, same 6 ft FTDI rollover recipe. Chipset FTDI FT232RQ. 250 Kbps. Thunderbolt 3 port compatible per maker. ASIN B078PT5N24. UPC 818707023143. Product ID 201065-6.| Cable Matters catalog $19.99, sale $17.99. Amazon listing $17.99, in stock, sold by Cable Matters, ships from Amazon. Newegg listing $42.99, don't make that the buy.| The laptop is USB-C only. Same chip, other plug.  
StarTech ICUSBROLLOVR| USB-A 2.0 male to RJ45 male, 6 ft / 1.8 m. Chipset Prolific PL2303GC (maker datasheet). 460.8 Kbps. 28 AWG. 2-year warranty. UPC 065030880459. ASIN B07PN72J97.| StarTech.com $33.81, in stock. Newegg $38.04, in stock. Aztek $36.59. No B&H listing this pass.| You want StarTech paper and will install the Prolific driver. Not the FTDI default.  
  
## Skip

Skip USB-C to ethernet adapters, those are NICs, not console. Skip no-name Amazon “Cisco console” lots that don't name FTDI; many are Prolific clones that drop off Windows 11. Skip a DB9 adapter plus a separate rollover lead; one cable is the whole kit. Skip Cable Matters 180010-CAT6 (that is the 12-port panel). Skip StarTech CABSHELFV1U (that is the 1U shelf). Used eBay lots are out.

## Sources

[Cable Matters 202065-6 maker page](<https://www.cablematters.com/pc-993-137-usb-to-rj45-ftdi-console-cable-6-feet.aspx>) (USB-A 2.0 to RJ45, FTDI UART, 6 ft, 250 Kbps, Product ID 202065-6). [Cable Matters 202065 QSG](<https://www.cablematters.com/images/Product/files/202065/Manual/202065%20USB-A%20to%20RJ45%20Console%20Cable%20Quick%20Start%20Guide.pdf>) (chipset FTDI FT232RQ; 201065 USB-C / 202065 USB-A). Cable Matters catalog $17.99 / sale $17.49 this fetch. [Amazon B078PVJ5ZQ](<https://www.amazon.com/Cable-Matters-Console-Compatible-Rollover/dp/B078PVJ5ZQ>) ($17.49, in stock, sold by Cable Matters, ships from Amazon, UPC 818707023136). [Cable Matters 201065-6 maker page](<https://www.cablematters.com/pc-994-123-usb-c-to-rj45-ftdi-console-cable-6-feet.aspx>) (USB-C, FTDI, Product ID 201065-6). Catalog $19.99 / sale $17.99. [Amazon B078PT5N24](<https://www.amazon.com/Cable-Matters-Console-Compatible-Rollover/dp/B078PT5N24>) ($17.99, in stock, UPC 818707023143). Newegg USB-C listing $42.99. [StarTech ICUSBROLLOVR maker page](<https://www.startech.com/en-us/cables/icusbrollovr>) ($33.81, in stock). [StarTech ICUSBROLLOVR datasheet](<https://media.startech.com/cms/pdfs/icusbrollovr_datasheet.pdf>) (Prolific PL2303GC, 460.8 Kbps, UPC 065030880459, 2-year). [Newegg ICUSBROLLOVR](<https://www.newegg.com/p/N82E16812399314>) ($38.04, in stock).

## Also on this topic

[A 19-inch 12-port Cat6 panel for the StarTech 12UThe 2-post is 19-inch. Hang a 1U 12-port punch-down.](<closet-cat6-patch-panel>) [A 1U shelf so the NAS is not sitting on the UPS10-inch vented cantilever. The 7-inch sibling is too short for a DS224+.](<closet-1u-shelf>) [12U open frame vs 10-inch wall cabinetThe 19-inch 12U 2-post is the default.](<12u-vs-10-inch-closet-rack>) [Previous1-foot Cat6 patch leads for the 12-port panel](<closet-1ft-cat6-patch>) [NextA 110 punch-down tool so the 12-port panel is not a paperweight](<closet-punchdown-tool>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
