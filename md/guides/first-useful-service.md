# The first useful thing

Source: https://labthrift.com/guides/first-useful-service
Markdown: https://labthrift.com/md/guides/first-useful-service.md

*Notes › / › Getting started › / › The first useful thing*

[Notes](<./>) / [Getting started](<./#start>) / The first useful thing

[Getting started](<./#start>) · **6 of 9**

Written 23 Aug 2026. This is a how-to, not a product card.

# The first useful thing

Put a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.

You already have a computer that stays on. SSH from the couch works. The next job is one useful thing for the house, not a new gadget.

## What this is

A program called Pi-hole. It answers name lookups for the house and skips the ones that are ads. Phones and laptops don't need an extra app. You point the house at this box once.

DNS is the phone book that turns names into numbers. When a laptop asks for a site, something has to look up the number. Pi-hole is one free program that sits in that phone book and skips ad names. Real sites still go through. A lot of ads never load.

You don't buy a Raspberry Pi. The OptiPlex or old laptop is already a computer that stays on. Pi-hole is just software on it. The name sounds like a tiny board. Ignore that. You already did the hardware part.

## Install it on the computer

This assumes Debian or Ubuntu Server, the OS from [what OS to put on it](<what-os-to-pick>), installed as in [your first weekend](<first-weekend>). SSH in from the couch.

The house has to find this computer later, so give it a static-ish address. A DHCP reservation is the easy way: tell the router to always give it the same number. Use the address you found on the first weekend. If you skip this, it might get a new number after a reboot, and the house will look in the wrong place.

The official path is one command from [pi-hole.net](<https://pi-hole.net>). Walk through the prompts. Take the defaults. Use the URL on their site, not a copy from a forum. The [basic install docs](<https://docs.pi-hole.net/main/basic-install/>) are the page to follow.

On the computer, run:

`curl -sSL https://install.pi-hole.net | bash`

If it asks for sudo, that is normal. Note the admin password it prints. You will need it in a minute.

## Open the page it prints

The installer prints a web address. Open it on your normal computer. Usually <http://pi.hole/admin>, or that computer's address plus `/admin`. You will see a dashboard. That is enough for tonight. Don't start hunting extra block lists.

## Point the house at it

On the router, set DNS to this computer's address so every phone and laptop asks it for names. Full steps: [point the house at the ad block](<leftover-box-router-dns>). Brand menus: [point common home routers at Pi-hole](<common-router-dns>). If ufw is already on for this computer, allow DNS there too: [turn on a simple firewall without locking yourself out](<leftover-box-ufw>).

## What next

Leave it a week. First, [change the printed admin password](<leftover-box-pihole-password>). Then maybe [a file share on this same computer](<first-file-share>). If it is still on house Wi-Fi, put it on a cable first: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). Once a week, [keep Pi-hole updated](<update-pihole>) (apt alone does not). If ads come back later, start with [when ads come back](<when-ads-come-back>). If only one phone stays dirty, see [when one phone still shows ads](<when-one-phone-shows-ads>). Guest SSID still shows ads? See [when guest Wi-Fi still shows ads](<guest-wifi-dns>). If one site you need is broken while ads stay gone, see [when a site won't load after Pi-hole](<when-a-site-wont-load>). Waiting is fine. Not Kubernetes. Not a new mini PC.


Optional: track the first service you leave on in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip

  * Skip buying a Raspberry Pi “because Pi-hole.”
  * Skip Docker if you are not already using it. A bare install is fine on a dedicated old PC.
  * Skip Unbound on day one.
  * Skip blocking so hard that banking sites die.
  * Skip a second box for this.



## Sources

[Pi-hole](<https://pi-hole.net>). [Pi-hole basic install](<https://docs.pi-hole.net/main/basic-install/>). Official pages only. For the install, see [your first weekend](<first-weekend>). For the OS choice, see [what OS to put on it](<what-os-to-pick>).

## Also on this topic

[Keep Pi-hole updatedWeekly apt does not refresh Pi-hole. Update the software and the block lists on the old PC so ads stay gone. You don't need a new Raspberry Pi.](<update-pihole>) [When a site won't load after Pi-holeA bank, streamer, or login page breaks after Pi-hole. Pause blocking for five minutes, then allow the domain you need. You don't need a new router.](<when-a-site-wont-load>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [When one phone still shows adsEveryone else's ads dropped. One phone still shows banners. Check Private DNS, Private Relay, a VPN, then the Wi-Fi lease. You don't need a new router.](<when-one-phone-shows-ads>) [When guest Wi-Fi still shows adsGuest Wi-Fi is a separate network on purpose. Leave guests on ISP DNS, put a visitor on the main house Wi-Fi, or point guest DNS at Pi-hole only if they can reach the computer. You don't need a new router.](<guest-wifi-dns>) [Your first weekendInstall the OS, name it, and reach it from the couch.](<first-weekend>) [What OS to put on itDebian or Ubuntu Server if you can dedicate the old PC. Leave Windows if you still use the laptop as a laptop.](<what-os-to-pick>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousSSH from the couch](<first-ssh>) [NextA file share](<first-file-share>)

---

*Labthrift Markdown mirror. HTML version linked above.*

Also: [Save a Pi-hole backup before you change things](<backup-pihole>)

