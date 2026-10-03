# Point the house at the ad block

Source: https://labthrift.com/guides/leftover-box-router-dns
Markdown: https://labthrift.com/md/guides/leftover-box-router-dns.md

*Notes › / › Better Wi-Fi › / › Point the house at the ad block*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Point the house at the ad block

Written 25 Aug 2026. This is a how-to, not a product card.

# Point the house at the ad block

After Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.

DNS is the phone book that turns site names into numbers. Your phones and laptops ask something for that lookup every time they open a page. Tonight that something becomes the computer. You change one router setting. No app on every device.

## Skip until Pi-hole is up

If the admin page from [the first useful thing on the computer](<first-useful-service>) does not open yet, stop. Install Pi-hole first. This note only points the house at a computer that already answers names.

A [DHCP reservation](<leftover-box-dhcp-reservation>) is strongly recommended first. The house will keep looking for the computer at the same address after a reboot. If that number moves, ads come back and this DNS change looks broken.

## What you are changing

Only the router DNS setting. You are not buying a new router. You are not forwarding ports. You are not opening Pi-hole to the internet. The computer stays on the house network and answers name lookups for the house.

## Find the DNS settings

Open a browser on your normal computer. Log into the house router with the address on the sticker, often `192.168.1.1` or `192.168.0.1`. Same login as [find the computer on the house network](<find-the-leftover-box>). That password is on the sticker, or the one you set.

Look for Internet, WAN, DHCP, or LAN DNS. Wording varies by maker. Brand menus for TP-Link, ASUS, eero, Netgear, Nest, and ISP boxes: [point common home routers at Pi-hole](<common-router-dns>). Primary DNS is the computer address, the same number you use for SSH and the Pi-hole admin page. Secondary: leave blank for a first pass so devices keep using Pi-hole. A public resolver as secondary is fine only if you understand that when the computer is down, phones can bypass Pi-hole and ads return. Blank is the honest first choice.

Save. Some routers want a short wait, or a reboot of the router, before phones pick up the new book.

## Safer first test

If you are nervous, set DNS on one laptop or phone only, not on the router yet. Confirm ads drop on that one device. Then set the whole house on the router. Same computer address either way.

## Check

Browse a few sites you know used to show ads. Sites should still load. A lot of the banners should not. Open the Pi-hole query log on the admin page if you want to see the house asking the computer. If ads came back overnight, start with [is the computer still on?](<leftover-box-still-on>) before you touch the router again. If the computer is awake and ads are still back, check that Pi-hole is still answering in [when ads come back, check the ad block](<leftover-box-ad-block-check>). If only one phone still shows banners, see [when one phone still shows ads](<when-one-phone-shows-ads>). If no name resolves at all and this computer has ufw on, DNS may be blocked there: [turn on a simple firewall without locking yourself out](<leftover-box-ufw>).

## Undo

Set DNS back to automatic, or back to your ISP. The internet still works without Pi-hole. You did not brick anything.

## What next

Stuck on a brand menu? Try [point common home routers at Pi-hole](<common-router-dns>). Leave it a week. Then maybe [a file share on this same computer](<first-file-share>). If the computer is still on house Wi-Fi, put it on a cable: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). Skip a mesh kit for this. Waiting is fine.

## Skip

  * Skip a new mesh kit for ad block.
  * Skip buying a Raspberry Pi “because Pi-hole.”
  * Skip Unbound on day one.
  * Skip per-device ad apps when router DNS already works.
  * Skip opening Pi-hole to the internet.



## Sources

[Pi-hole docs](<https://docs.pi-hole.net/>). Official pages only. Router UIs differ, so stay generic on the sticker login and the DNS field. For install, see [the first useful thing on the computer](<first-useful-service>). For the stable address, see [keep the computer on the same number](<leftover-box-dhcp-reservation>). For the sticker hunt, see [find the computer on the house network](<find-the-leftover-box>).

## Also on this topic

[Point a phone or laptop at Pi-hole when the router won'tWhen Nest, Google Wifi, or an ISP gateway will not take custom DNS, set DNS on one phone or laptop so it asks Pi-hole. You don't need a new router for this device.](<manual-dns-on-devices>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [The first useful thing on the computerPut a house-wide ad block on the computer. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Keep the computer on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [When ads come back, check the ad blockThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [When one phone still shows adsEveryone else's ads dropped. One phone still shows banners. Check Private DNS, Private Relay, a VPN, then the Wi-Fi lease. You don't need a new router.](<when-one-phone-shows-ads>) [PreviousThe first useful thing on the computer](<first-useful-service>) [NextWhen ads come back, check the ad block](<leftover-box-ad-block-check>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
