# Buy the extra 10G cage only if one copy already fills the faster house port

Source: https://labthrift.com/guides/2-5g-vs-10g-uplink-switch
Markdown: https://labthrift.com/md/guides/2-5g-vs-10g-uplink-switch.md

*Notes › / › Faster network › / › Buy the extra 10G cage only if one copy already fills the faster house port*

[Notes](<./>) / [Faster network](<./#switches>) / Buy the extra 10G cage only if one copy already fills the faster house port

Written 22 Aug 2026. Specs from the maker pages linked below. Prices from those stores. I haven't used these.

# Buy the extra 10G cage only if one copy already fills the faster house port

Stay on a quiet faster-port switch until one file copy fills 2.5G (faster than normal house ethernet). Eight faster ports that all choke on a 2.5G hop to the file box is a common closet mistake.

Buy the extra 10G cage only if one copy already fills the faster house port (2.5G). The [shipped 8-port deck](<2-5g-switch>) already says this. This page is the SKU list behind that sentence. All-2.5G copper is the default. A 10G SFP+ cage is for a DAC to a file box (or a 10G router) when that one flow is the bottleneck. TEG-S562, QSW-2104-2S, TEG-3102WS, and SG3210X-M2 are fanless and have no PoE. QSW-2104-2S max draw is 12 W.

## What to buy

Box| What it is| Street, 22 Aug 2026| Buy if  
---|---|---|---  
[TP-Link TL-SG108S-M2](<2-5g-switch>)| 8× 2.5G, no SFP+, unmanaged, fanless| About $50–80.| No single flow is filling 2.5G. This is still the default.  
TRENDnet TEG-S380| 8× 2.5G, no SFP+, unmanaged, fanless| Maker $87.99. Street about $74–80.| Warranty paper over the TP-Link 8-port.  
[TRENDnet TEG-S562](<trendnet-teg-s562>)| 4× 2.5G + 2× 10G SFP+, unmanaged, fanless| Amazon $51.99.| You need the DAC hop and you don't need eight copper or VLANs.  
[QNAP QSW-2104-2S-A-US](<qnap-qsw-2104-2s>)| 4× 2.5G + 2× 10G SFP+, unmanaged, fanless, 12 W max| QNAP store $129, in stock. Amazon $116. B&H $79.99 (cut from $129.99).| You already own a QNAP SFP+ NAS and B&H is on the cut. Else see the [TEG-S562 compare](<teg-s562-vs-qsw-2104-2s>).  
TRENDnet TEG-3102WS| 8× 2.5G + 2× 10G SFP+, managed, fanless| Amazon $169.98–$214.99. Newegg $199.99.| VLANs plus the DAC. Already in the 8-port table.  
[TP-Link SG3210X-M2](<tp-link-sg3210x-m2>)| 8× 2.5G + 2× 10G SFP+, Omada L2+, fanless| Amazon live. CA street $349.99. US buy-box not a single printed number this pass.| You grew Omada VLANs. Not the price win vs TEG-3102WS.  
QNAP QSW-2104-2T-A-US| 4× 2.5G + 2× 10GBASE-T, unmanaged| B&H $149.| Copper 10G twin of the 2S. Footnote, not a second review.  
  
## Skip

Skip a 10G cage "for later" if the NAS is 2.5G copper and nothing else speaks SFP+. Skip QSW-M2108-2C (fan + $349 and OOS / Newegg about $449). Skip QSW-1105-5T (chronically empty shelf). Skip SODOLA / HASIVO toys that print "10G SFP+" on a no-name ASIN.

## Sources

[Amazon TEG-S562](<https://www.amazon.com/TRENDnet-Unmanaged-2-5GBASE-T-Protection-TEG-S562/dp/B0CJMTT9DF>). [QNAP store QSW-2104-2S-A-US](<https://store.qnap.com/qsw-2104-2s-a-us.html>). [B&H QSW-2104-2S](<https://www.bhphotovideo.com/c/product/1733420-REG/qnap_qsw_2104_2s_a_us_desktop_qsw_2104_2s_us_unmanaged_switch.html>). [Amazon TEG-3102WS](<https://www.amazon.com/TRENDnet-Multi-Gig-2-5GBASE-T-Protection-TEG-3102WS/dp/B0BPJZCQ5J>). Street ranges move. Check the live price before you click.

## Also on this topic

[Pick today's cheaper quiet box with four faster ports and two 10G cages: TEG-S562 vs QSW-2104-2STwo quiet unmanaged boxes with four faster ports and two 10G cages. Pick by today's price.](<teg-s562-vs-qsw-2104-2s>) [Two Wi-Fi APs plus a faster NAS without a rack PoE heater: TP-Link TL-SG105PP-M2Two Wi-Fi APs plus a faster NAS without a rack PoE heater.](<tp-link-tl-sg105pp-m2>) [Managed vs unmanaged 2.5G: when VLANs are worth the taxUnmanaged unless you already know you need VLANs.](<managed-vs-unmanaged-2-5g-switch>) [Previous8-port vs 5-port 2.5G switch for a closet lab](<8-port-vs-5-port-2-5g-switch>) [NextPick today's cheaper quiet box with four faster ports and two 10G cages: TEG-S562 vs QSW-2104-2S](<teg-s562-vs-qsw-2104-2s>)

---

*Labthrift Markdown mirror. HTML version linked above.*
