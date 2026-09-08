# A $339 Beelink N150 vs the yearly cost of a used 1U

Source: https://labthrift.com/guides/beelink-n150-vs-used-1u-bill
Markdown: https://labthrift.com/md/guides/beelink-n150-vs-used-1u-bill.md

*Notes › / › Used or new › / › A $339 Beelink N150 vs the yearly cost of a used 1U*

[Notes](<./>) / [Used or new](<./#used-vs-new>) / A $339 Beelink N150 vs the yearly cost of a used 1U

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# A $339 Beelink N150 vs the yearly cost of a used 1U

A small new mini PC often costs less over a year of power than a loud used server. Skip the used 1U if heat and noise matter. This note is only about the power bill, not which chip wins.

The chip shootout already lives in [N100 vs N150](<n100-mini-pc>). Don't use this page to pick cores. Use it to talk yourself out of a used 1U.

Beelink Mini S13, Intel N150, Amazon B09DPV3D4N snap **$339** (12 GB LPDDR5 / 500 GB, 2.5G LAN). Maker copy: “less than 1 kWh/day.” Existing Labthrift n100 guide: wall power high-single to mid-teens watts. Third-party N150-class idle commonly ~6–12 W (PromptQuorum ~6 W; minipcdeals ~8–10 W). Small fan. I haven't metered one.

Official Beelink EQ14: **$375 / $429** on bee-link.com. Official available LAN is **dual 1000 Mbps**. Amazon third-party titles claim dual 2.5G, don't repeat that as fact. PromptQuorum Jul 2026 street ~$189–199 was a different snapshot and is volatile; minipclab.com Jul 2026 says some old Amazon targets no longer resolve to EQ14. Confirm the NIC on the unit. The listing trap is already written in [EQ14 dual LAN](<beelink-eq14-n150-dual-lan-proxmox>).

Used 1U named only as the skip: R630 ~70 W idle typical (Hardwarehoard); R720/R730 80–120 W idle (TechFuel 2026 table). At $0.15/kWh, 70 W is about $92/year; 150 W is about $197/year: the same heater math as [used vs new](<used-vs-new>). A mid-teens-watt N150 is tens of dollars a year. I didn't invent a used street price.

## What to buy

Box| Draw (published)| Street, 22 Aug 2026| Buy if  
---|---|---|---  
[Beelink Mini S13 N150](<https://www.amazon.com/Beelink-Windows-Desktop-Gigabit-Ethernet/dp/B09DPV3D4N>)| Class idle commonly ~6–12 W in third-party notes. Maker “< 1 kWh/day.” Small fan. 2.5G on this listing.| Amazon B09DPV3D4N snap $339 (12 GB / 500 GB).| The bill replacement for a used 1U. Not a 10G node: that is the [MS-01](<minisforum-ms-01-vs-used-1u>).  
[Beelink EQ14 official](<https://www.bee-link.com/products/beelink-eq14-n150>)| MSP 25 W on the maker page. Dual **1G** as available. 32 dB claim. Internal PSU on the official copy.| $375 / $429 on bee-link.com.| You will accept dual 1G and you confirm the NIC on the cart line.  
  
## Skip

Skip the used Dell R630 / R640 as a first lab host. Skip copying Amazon “EQ14 dual 2.5G” titles, official is dual 1G. Skip this page if you are shopping N100 vs N150 chips; that is [the other guide](<n100-mini-pc>). Shape: [pizza box](<1u-vs-pizza-box-closet>). PSU: [brick vs 208 V](<110v-brick-vs-208v-1u>).

## Sources

[Amazon Mini S13 B09DPV3D4N $339](<https://www.amazon.com/Beelink-Windows-Desktop-Gigabit-Ethernet/dp/B09DPV3D4N>). [bee-link.com EQ14](<https://www.bee-link.com/products/beelink-eq14-n150>) ($375/$429, dual 1000 Mbps). Hardwarehoard R630 ~70 W. TechFuel 2026 idle table (R720/R730 80–120 W). Labthrift n100 guide (high-single to mid-teens). PromptQuorum / minipcdeals N150 idle notes. $0.15/kWh arithmetic from those published watts, not a burn-in. Street moves.

## Also on this topic

[Used enterprise vs buying newUsed is a gift when the wattage is low and the ports match the job.](<used-vs-new>) [The $40 used Catalyst is still 1GA used Catalyst 3560-class 24-port is still a gigabit box.](<new-2-5g-vs-used-c3560-myth>) [Run a quiet 10G closet lab without a loud used 1U: Minisforum MS-01Quiet 10G closet node in a small retail box. Not a used 1U. Sold out 22 Aug 2026.](<minisforum-ms-01-vs-used-1u>) [PreviousBuy a new 10Gtek DAC and a named X710. Skip “works great” NICs.](<new-dac-x710-vs-mystery-10g>) [NextNew USB-C UniFi gateway, not a used USG plus Cloud Key: Cloud Gateway Ultra](<unifi-ucg-ultra-vs-used-usg>)

---

*Labthrift Markdown mirror. HTML version linked above.*
