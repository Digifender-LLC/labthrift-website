# Point common home routers at Pi-hole

Source: https://labthrift.com/guides/common-router-dns
Markdown: https://labthrift.com/md/guides/common-router-dns.md

*Notes › / › Getting started › / › Point common home routers at Pi-hole*

[Notes](<./>) / [Getting started](<./#start>) / Point common home routers at Pi-hole

Written 4 Sep 2026. This is a how-to, not a product card.

# Point common home routers at Pi-hole

Where to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.

Haven't installed Pi-hole yet? Start with [the first useful thing](<first-useful-service>). Need the computer's address first? [Find it on the house network](<find-the-leftover-box>). Prefer a short generic pass first? That is [point the house at the ad block](<leftover-box-router-dns>). This note is the maker-by-maker walk.

## Skip until Pi-hole answers

Open the Pi-hole admin page on the computer. If that page does not load, install or fix Pi-hole first. This note only changes the router so phones and laptops ask that computer for names.

A [DHCP reservation](<leftover-box-dhcp-reservation>) for the computer is strongly recommended first. Brand menus: [keep the computer on the same address on common routers](<common-router-reservation>). If its number moves after a reboot, this DNS change looks broken and ads come back.

## What you are changing

You want the setting that tells _phones and laptops_ which name server to use. That is usually under LAN, DHCP, or DHCP Server. Primary DNS becomes the computer's address. Leave Secondary blank on the first pass so devices keep using Pi-hole.

Do not confuse that with Internet / WAN DNS. WAN DNS is what the _router itself_ asks upstream. Changing only WAN often still hands the router's own address to every phone, so the query log shows one client and some setups loop. Prefer LAN DHCP DNS when the router offers it.

## TP-Link (Archer and similar)

Open a browser to `http://tplinkwifi.net` or the sticker address, often `192.168.0.1`. Log in with the password you set, or the sticker one.

Go to Advanced → Network → DHCP Server. Put the computer's address in Primary DNS. Leave Secondary empty for now. Save. Reboot the router if it asks, or wait a minute, then renew Wi-Fi on a phone.

Some TP-Link pages also show DNS under Advanced → Network → Internet. That is WAN DNS for the router. Use DHCP Server when you can. If your model only shows Internet DNS, set Primary there, then check a laptop with `ipconfig /all` or phone Wi-Fi details. If the phone still lists the router as DNS, the model is proxying. Ads can still drop. Per-device lines in the Pi-hole log may not.

## ASUS

Open `http://www.asusrouter.com` or the LAN address, often `192.168.50.1`. Log in.

Go to LAN → DHCP Server. Under DNS and WINS server setting, enter the computer's address as DNS Server 1. Leave DNS Server 2 blank for the first pass.

If you see Advertise router's IP in addition to user specified DNS, turn that Off and Apply. Otherwise phones keep the router as a second book and some lookups skip Pi-hole. After Off, use the numeric LAN address to open the admin page, not the asusrouter.com name.

## eero

Open the eero app. Tap Settings → Advanced networking → DNS. Choose Custom DNS. Enter the computer's IPv4 address. Save. The network may reboot once.

Reserve the computer's address under Settings → Network settings → Reservations & port forwarding so the number sticks. Skip HomeKit Secure Router and eero Secure add-ons for this job if they fight custom DNS.

## Netgear Nighthawk

Open `http://www.routerlogin.net`. Many Nighthawk models do not hand a custom DNS address to DHCP clients. They keep the router's own LAN address as DNS and forward lookups using whatever you set under Internet / WAN DNS.

Practical first pass: Advanced → Setup → Internet Setup (wording moves). Use these DNS servers. Primary is the computer's address. Secondary blank. Save. Ads should drop on the house. The Pi-hole query log may show one client, the router. That is normal on stock Netgear firmware.

Skip turning off the Netgear DHCP server and running Pi-hole DHCP on day one. That works later if you need per-device stats. It is easy to brick the house network for an evening if you disable DHCP without another server ready.

## Google Nest Wifi / Google Wifi

In the Google Home app, open the Wi-Fi settings → Advanced networking → DNS. Custom DNS here is usually upstream for the Nest router, not a clean LAN DHCP handoff. Some people get ads blocked. Some get a loop or no internet until they undo it.

Honest first-timer move: [set DNS on one laptop or phone](<manual-dns-on-devices>) and confirm Pi-hole works, or put a real router you control behind a bridged ISP modem and leave Nest for later. Skip buying a mesh kit “to fix DNS.” Skip Nest bridge mode unless you already have another router doing DHCP.

## ISP gateway (Xfinity, AT&T, Spectrum, and friends)

Many ISP combo boxes hide or ignore custom LAN DNS. If you cannot find DHCP DNS, or it resets overnight, you are not failing the tutorial. Common paths:

  * Set DNS on one device first and live with that until you own the router role.
  * Put the gateway in bridge / IP passthrough mode and plug in a router you control (TP-Link, ASUS, eero). Then use that router's LAN DHCP DNS steps above.



Skip forwarding ports on the ISP box for Pi-hole. Skip opening the admin page to the internet.

## Safer first test

Nervous about the whole house? Set DNS on one laptop only. On Windows: adapter properties → IPv4 → Use the following DNS, computer's address, blank secondary. On a Mac: System Settings → Network → Details → DNS. Confirm ads drop. Then change the router.

## Check

Browse a few sites that used to show ads. Sites should still load. A lot of banners should not. Open the Pi-hole query log. You should see lookups from the house.

If every device is dirty again, walk [when ads come back](<when-ads-come-back>). If only one phone is dirty, that is [when one phone still shows ads](<when-one-phone-shows-ads>). Guest SSID still shows ads while the main house is clean? That is [when guest Wi-Fi still shows ads](<guest-wifi-dns>).

## Undo

Set DNS back to automatic / ISP on the same screen you changed. The internet still works without Pi-hole. You did not brick anything.

## What this is not

This is not a reason to buy a mesh kit, a Raspberry Pi, or a new router tonight. It is not opening Pi-hole to the internet. It is one house setting so phones ask the computer you already have.

## What next

Leave it a week. If ads return, start with [when ads come back](<when-ads-come-back>). After an ISP swap wiped DNS, walk [when the ISP swaps your router](<when-isp-swaps-router>). Keep the computer on the same number: [DHCP reservation](<leftover-box-dhcp-reservation>), or brand menus in [keep the computer on the same address on common routers](<common-router-reservation>). If the router will not take LAN DNS, set one device: [point a phone or laptop at Pi-hole when the router won't](<manual-dns-on-devices>). A file share on this same computer is later: [a file share](<first-file-share>).

## Skip

  * Skip buying a new router just to set DNS, if your current one offers LAN DHCP DNS.
  * Skip a Raspberry Pi “because Pi-hole.”
  * Skip Unbound on day one.
  * Skip Pi-hole DHCP on day one unless your router cannot do LAN DNS and you are ready to own DHCP.
  * Skip opening Pi-hole to the internet.
  * Skip a mesh kit for ad block.



## Sources

[Pi-hole docs](<https://docs.pi-hole.net/>). [TP-Link: change DNS settings](<https://www.tp-link.com/us/support/faq/1712/>) (WAN path; prefer DHCP Server for clients when available). [ASUS: DHCP Server](<https://www.asus.com/support/faq/1011703/>). [ASUS: advertise router IP as DNS](<https://www.asus.com/us/support/faq/1050080/>). [eero: custom DNS](<https://eero.com/support/articles/how-do-i-set-up-custom-dns-servers-with-eero>). Official pages only. Menus move by firmware. For the short generic pass, see [point the house at the ad block](<leftover-box-router-dns>). For install, see [the first useful thing](<first-useful-service>).

## Also on this topic

[Point a phone or laptop at Pi-hole when the router won'tWhen Nest, Google Wifi, or an ISP gateway will not take custom DNS, set DNS on one phone or laptop so it asks Pi-hole. You don't need a new router for this device.](<manual-dns-on-devices>) [Point the house at the ad blockAfter Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.](<leftover-box-router-dns>) [The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Keep it on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [Keep the computer on the same address on common routersWhere to reserve DHCP on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so SSH and Pi-hole keep the same number after a reboot. You don't need a new router.](<common-router-reservation>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [When the ISP swaps your routerTech left a new gateway (or reset yours). Ads are back, and SSH may miss the old address. Re-find the computer, re-point DNS, re-do the reservation. You don't need a new router or a new Pi-hole.](<when-isp-swaps-router>) [When one phone still shows adsEveryone else's ads dropped. One phone still shows banners. Check Private DNS, Private Relay, a VPN, then the Wi-Fi lease. You don't need a new router.](<when-one-phone-shows-ads>) [When guest Wi-Fi still shows adsGuest Wi-Fi is a separate network on purpose. Leave guests on ISP DNS, put a visitor on the main house Wi-Fi, or point guest DNS at Pi-hole only if they can reach the computer. You don't need a new router.](<guest-wifi-dns>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [PreviousPoint the house at the ad block](<leftover-box-router-dns>) [NextWhen ads come back](<when-ads-come-back>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
