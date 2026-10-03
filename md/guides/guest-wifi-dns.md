# When guest Wi-Fi still shows ads

Source: https://labthrift.com/guides/guest-wifi-dns
Markdown: https://labthrift.com/md/guides/guest-wifi-dns.md

*Notes › / › Getting started › / › When guest Wi-Fi still shows ads*

[Notes](<./>) / [Getting started](<./#start>) / When guest Wi-Fi still shows ads

Written 4 Sep 2026. This is a how-to, not a product card.

# When guest Wi-Fi still shows ads

Guest Wi-Fi is a separate network on purpose. Either leave guests on the ISP DNS, put a visitor on the main house Wi-Fi, or point guest DNS at Pi-hole only if guests can reach the computer. You don't need a new router.

Haven't installed the house ad block yet? Start with [the first useful thing](<first-useful-service>). Ads back on every device on the _main_ house Wi-Fi? Start with [when ads come back](<when-ads-come-back>). One phone on the main house Wi-Fi still shows banners? That is [when one phone still shows ads](<when-one-phone-shows-ads>). This note is only the guest SSID: visitors join a second network and still see ads while your phones look clean.

## Skip until the main house is clean

If your own laptop on the normal house Wi-Fi still shows the same ads, fix that first. Guest settings will not help a house that never pointed DNS at the computer. Brand menus for the main LAN: [point common home routers at Pi-hole](<common-router-dns>).

## What this is

Most home routers offer a guest Wi-Fi name. Guests get internet. They usually cannot see printers, the share, or the computer on the main LAN. That isolation is the point. The guest DHCP often hands out the ISP's DNS, not the computer's address. So Pi-hole never sees those lookups, and ads load on guest phones. That is normal, not a broken install.

## Confirm they are on Guest

On the visitor's phone, open the Wi-Fi detail and read the network name. If it matches your guest SSID (often something like `House-Guest`), you are in this note. If it matches the main house name, go back to [when one phone still shows ads](<when-one-phone-shows-ads>).

## Option 1: leave guest alone

Honest default. Guests keep ads. Your house stays clean. Isolation stays. Skip hunting guest DNS menus if you only care that _your_ phones block ads. You are not failing the lab.

## Option 2: put the visitor on the main house Wi-Fi

For a friend you trust for the weekend, share the main Wi-Fi password. Change that password later if you want. Main-house DNS already points at the computer, so ads should drop the same way they do on your laptop. Skip this for a random delivery driver. Guest exists so strangers stay off your share and SSH.

## Option 3: point guest DNS at Pi-hole (only if they can reach it)

Some routers let you set DNS for the guest network separately. Search the admin page for Guest, Guest Network, or Isolated Wi-Fi, then DNS or DHCP. Put the computer's address as primary DNS, the same number you use for the main LAN in [point common home routers at Pi-hole](<common-router-dns>). Save. Forget guest Wi-Fi on a test phone, join again, and browse a site that used to show ads.

Catch: guest isolation often blocks the phone from talking to a LAN address like `192.168.1.50`. DNS then times out, sites fail, or the phone falls back to something else and ads return. If that happens, look for a guest setting named Access Local Network, Allow Intranet, Client Isolation (turn isolation off), or similar. Wording moves by brand. If there is no such toggle, Option 1 or Option 2 is the honest fix. Don't buy a second Pi-hole for the guest VLAN tonight.

A phone on guest that still bypasses house DNS with Private DNS or a VPN is the same phone problem as the main network: [when one phone still shows ads](<when-one-phone-shows-ads>).

## What this is not

This is not a reason to buy a mesh kit, a second router, or a Raspberry Pi “for guests.” It is not opening Pi-hole to the internet. It is not homework to build VLANs, Unbound, or a captive portal this weekend. Guest Wi-Fi that keeps strangers off your share is already doing a useful job even when ads stay.

## What next

Main house still dirty? Walk [when ads come back](<when-ads-come-back>). Router will not take custom DNS on the main LAN either? Set one device by hand: [point a phone or laptop at Pi-hole when the router won't](<manual-dns-on-devices>). Keep Pi-hole itself current: [keep Pi-hole updated](<update-pihole>). Change the printed admin password if you have not: [change the printed Pi-hole admin password](<leftover-box-pihole-password>).

## Skip

  * Skip treating guest ads as a failed Pi-hole install when the main house is clean.
  * Skip buying a new router so guests get the same block list.
  * Skip opening the admin UI or SMB to the internet “for guests.”
  * Skip a second Pi-hole on a VLAN until you actually want that project.
  * Skip this if you never turned guest Wi-Fi on.



## Sources

[Pi-hole: generic router guidance](<https://docs.pi-hole.net/routers/generic-guidance/>). [Pi-hole post-install](<https://docs.pi-hole.net/main/post-install/>). Maker and ISP guest menus move; check your router's current help for Guest DNS and local-network access. Official pages only. For the first install, see [the first useful thing](<first-useful-service>). For main-LAN DNS, see [point common home routers at Pi-hole](<common-router-dns>). For one stubborn phone on the main Wi-Fi, see [when one phone still shows ads](<when-one-phone-shows-ads>).

## Also on this topic

[The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [When one phone still shows adsEveryone else's ads dropped. One phone still shows banners. Check Private DNS, Private Relay, a VPN, then the Wi-Fi lease. You don't need a new router.](<when-one-phone-shows-ads>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [Point a phone or laptop at Pi-hole when the router won'tWhen Nest, Google Wifi, or an ISP gateway will not take custom DNS, set DNS on one phone or laptop so it asks Pi-hole. You don't need a new router for this device.](<manual-dns-on-devices>) [Keep Pi-hole updatedWeekly apt does not refresh Pi-hole. Update the software and the block lists on the old PC so ads stay gone. You don't need a new Raspberry Pi.](<update-pihole>) [Keep it on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousWhen one phone still shows ads](<when-one-phone-shows-ads>) [NextPoint common home routers at Pi-hole](<common-router-dns>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
