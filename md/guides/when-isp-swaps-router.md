# When the ISP swaps your router

Source: https://labthrift.com/guides/when-isp-swaps-router
Markdown: https://labthrift.com/md/guides/when-isp-swaps-router.md

*Notes › / › Getting started › / › When the ISP swaps your router*

[Notes](<./>) / [Getting started](<./#start>) / When the ISP swaps your router

Written 4 Sep 2026. This is a how-to, not a product card.

# When the ISP swaps your router

Tech left a new gateway (or reset yours). Ads are back, and SSH may miss the old address. Re-find the computer, re-point DNS, re-do the reservation. You don't need a new router or a new Pi-hole.

Haven't installed the house ad block yet? Start with [the first useful thing](<first-useful-service>). Ads back with no tech visit? Start with [when ads come back](<when-ads-come-back>). This note is only the aftermath of a modem or gateway swap, or a factory reset by the ISP.

## Skip until you know it was a gateway change

Look for a sticker on a new box, a tech visit on the calendar, or a Wi-Fi name and password the ISP changed for you. If none of that happened and ads just crept back, walk [when ads come back](<when-ads-come-back>) instead. Don't rebuild the house for a sleep or lease glitch.

## What this is

A new gateway (or a reset of the old one) forgets the LAN DNS you set and any DHCP reservations you made. The computer may get a new lease. Phones ask the ISP for names again, so ads load. SSH hangs on the number you used to type. The old PC is usually fine. The gateway forgot the house settings.

## Step 1: find the computer again

Don't guess the old address. Look it up on the house network: [find it on the house network](<find-the-leftover-box>). Write down the number you get. You will use it for DNS, the reservation, and SSH.

## Step 2: confirm the computer is still running

Power light on. Fan noise. Screen if it has one. If it looks asleep or dead, start with [is the computer still on?](<leftover-box-still-on>). If it just came back from a reboot, a short pass is [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). Open the Pi-hole admin page at the address you just found, or <http://pi.hole/admin> from a phone on the house Wi-Fi. If Pi-hole is down, fix that before you touch the router.

## Step 3: re-point house DNS

Log into the new gateway. Set LAN or DHCP DNS so primary DNS is the computer's address. Brand menus live in [point common home routers at Pi-hole](<common-router-dns>). Don't duplicate those screens here. Save. If Nest or the ISP box will not take custom DNS, set one device by hand: [point a phone or laptop at Pi-hole when the router won't](<manual-dns-on-devices>).

## Step 4: re-do the DHCP reservation

Reserve the same number for the computer so SSH and Pi-hole stay put after the next power blip. Maker-by-maker walk: [keep the computer on the same address on common routers](<common-router-reservation>). If Nest or the ISP box will not reserve DHCP, set the number on the computer: [give the computer a fixed address when the router won't](<fixed-address-on-pc>).

## Step 5: renew leases on phones and laptops

Phones and laptops may still hold the old gateway's DNS. On each one, forget the house Wi-Fi and join again. Or toggle airplane mode. Or reboot the phone. Then browse a site that used to show ads. Guest Wi-Fi is a separate network: if visitors still see banners while your phones look clean, that is [when guest Wi-Fi still shows ads](<guest-wifi-dns>).

## Check

Browse a site that used to show ads from a phone on the main house Wi-Fi. Ads should drop the way they did before the tech visit. SSH with the address you just reserved:

`ssh youruser@192.168.1.50`

Use the real number from Step 1, not that example. If SSH still hangs on the old number, you are typing the forgotten lease. Use the reserved one.

## What this is not

This is not a reason to buy a mesh kit, a second Pi-hole, or a new router tonight. It is not opening port 22 to the internet. It is not homework to blame the ISP forever. The recovery is find the computer, point DNS, reserve the address, renew the phones.

## What next

Ads still dirty with no new box? Walk [when ads come back](<when-ads-come-back>). Brand DNS menus: [point common home routers at Pi-hole](<common-router-dns>). Brand reservation menus: [keep the computer on the same address on common routers](<common-router-reservation>). Nest won't reserve? [give the computer a fixed address when the router won't](<fixed-address-on-pc>). Router won't take DNS at all? [point a phone or laptop at Pi-hole when the router won't](<manual-dns-on-devices>). Keep the block lists current: [keep Pi-hole updated](<update-pihole>).

## Skip

  * Skip buying a new router because the ISP swapped yours.
  * Skip a second Pi-hole “for the new gateway.”
  * Skip opening port 22 so SSH works from outside.
  * Skip guessing the old address instead of finding it again.
  * Skip this if there was no tech visit, no new sticker, and no ISP reset.



## Sources

[Pi-hole: generic router guidance](<https://docs.pi-hole.net/routers/generic-guidance/>). [Pi-hole post-install](<https://docs.pi-hole.net/main/post-install/>). Official pages only. Menus move by firmware and ISP model. For the first install, see [the first useful thing](<first-useful-service>). For main-LAN DNS, see [point common home routers at Pi-hole](<common-router-dns>). For reservations, see [keep the computer on the same address on common routers](<common-router-reservation>). For ads with no tech visit, see [when ads come back](<when-ads-come-back>).

## Also on this topic

[The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [Keep the computer on the same address on common routersWhere to reserve DHCP on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so SSH and Pi-hole keep the same number after a reboot. You don't need a new router.](<common-router-reservation>) [Give the computer a fixed address when the router won'tNest or an ISP gateway won't reserve DHCP. Set one stable number on Ubuntu Server so SSH and Pi-hole keep the same address after a reboot. You don't need a new router.](<fixed-address-on-pc>) [Point a phone or laptop at Pi-hole when the router won'tWhen Nest, Google Wifi, or an ISP gateway will not take custom DNS, set DNS on one phone or laptop so it asks Pi-hole. You don't need a new router for this device.](<manual-dns-on-devices>) [When guest Wi-Fi still shows adsGuest Wi-Fi is a separate network on purpose. Leave guests on ISP DNS, put a visitor on the main house Wi-Fi, or point guest DNS at Pi-hole only if they can reach the computer. You don't need a new router.](<guest-wifi-dns>) [Keep it on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousWhen ads come back](<when-ads-come-back>) [NextPoint common home routers at Pi-hole](<common-router-dns>)

---

*Labthrift Markdown mirror. HTML version linked above.*
