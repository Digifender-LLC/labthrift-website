# When ads come back

Source: https://labthrift.com/guides/when-ads-come-back
Markdown: https://labthrift.com/md/guides/when-ads-come-back.md

*Notes › / › Getting started › / › When ads come back*

[Notes](<./>) / [Getting started](<./#start>) / When ads come back

Written 3 Sep 2026. This is a how-to, not a product card.

# When ads come back

Ads are back, sites won't load, or a phone still shows banners after you pointed the house at Pi-hole. Check the computer, the ad block, the router DNS, then the phone.

Haven't installed Pi-hole yet? Start with [the first useful thing](<first-useful-service>). Need the computer's address first? [Find it on the house network](<find-the-leftover-box>). This note is the short walk when something that used to work stopped.

## Skip until you have a computer that stays on

If you don't have an old PC or laptop left on for the house yet, that is [your first weekend](<first-weekend>). This note assumes you already have a computer answering on the house network, with Pi-hole as the house name lookup.

## What this is

A short checklist. Ads coming back usually means the house stopped asking the computer for names, Pi-hole stopped answering, or one phone kept the old DNS. You don't need a new router for this. You don't need a Raspberry Pi.

## Is the computer still on?

From a laptop on the house Wi-Fi, ping the computer's address. Or open SSH the way you usually do. If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) Plug it in. Wake it. Don't buy anything yet.

From your laptop:

`ping -c 3 192.168.1.50`

Swap in the real address. If you don't know it, [find it on the house network](<find-the-leftover-box>).

## Is Pi-hole still running?

SSH into the computer, then:

`pihole status`

Or if that command is missing:

`sudo systemctl is-active pihole-FTL`

You want active / listening. If it is not, restart it:

`sudo systemctl restart pihole-FTL`

Then open the admin page in a browser, usually <http://pi.hole/admin>, or the computer's address plus `/admin`. Sites should load. A lot of the banners should not. A deeper pass is [when ads come back, check the ad block](<leftover-box-ad-block-check>).

## Does the router still use the computer as DNS?

Router reboots often forget custom DNS. Log into the house router. Check LAN or DHCP DNS. Primary DNS should still be this computer's address. If it went back to automatic or the ISP, set it again: [point the house at the ad block](<leftover-box-router-dns>). Brand menus: [point common home routers at Pi-hole](<common-router-dns>).

If names fail only on the computer itself, see which name server it is asking: [see which name server the computer is using](<leftover-box-dns-check>).

## Did one phone keep the old DNS?

Phones sometimes keep a lease from before you changed the router. On that phone, forget the house Wi-Fi, then join again. Or toggle airplane mode. Or renew the DHCP lease in the Wi-Fi details if the phone shows that. Then browse a site that used to show ads.

If only one phone still shows banners while the rest of the house is clean, that phone may be bypassing the house book on purpose: Android Private DNS, iCloud Private Relay, a VPN, or Chrome Secure DNS. Full walk: [when one phone still shows ads](<when-one-phone-shows-ads>).

## What this is not

This is not a reason to buy a mesh kit, a new router, or a Raspberry Pi. It is not a reason to open Pi-hole to the internet. It is a look at four common failure points: power, the ad block process, router DNS, and a sticky phone lease.

## What next

If the computer just rebooted, walk the three house jobs in [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). If only one phone is still dirty, that is [when one phone still shows ads](<when-one-phone-shows-ads>). If the dirty phones were on the guest SSID, that is [when guest Wi-Fi still shows ads](<guest-wifi-dns>). If a cable or fiber tech left a new gateway (or reset yours), that is [when the ISP swaps your router](<when-isp-swaps-router>). If ads are gone but one bank or login page dies, that is [when a site won't load after Pi-hole](<when-a-site-wont-load>). If you want a file share on this same computer later, that is [a file share](<first-file-share>). Leave the ad block alone for a week when it works again. If Pi-hole is running but lists feel stale, [keep Pi-hole updated](<update-pihole>).

## Skip

  * Skip buying a new router for this.
  * Skip buying a Raspberry Pi “because Pi-hole.”
  * Skip a mesh kit for ad block.
  * Skip exposing Pi-hole to the internet.
  * Skip Unbound on day one.



## Sources

[Pi-hole docs](<https://docs.pi-hole.net/>). Official pages only. For install, see [the first useful thing](<first-useful-service>). For router DNS, see [point the house at the ad block](<leftover-box-router-dns>). For the awake check, see [is the computer still on?](<leftover-box-still-on>). For a deeper Pi-hole check, see [when ads come back, check the ad block](<leftover-box-ad-block-check>).

## Also on this topic

[Keep Pi-hole updatedWeekly apt does not refresh Pi-hole. Update the software and the block lists on the old PC so ads stay gone. You don't need a new Raspberry Pi.](<update-pihole>) [When a site won't load after Pi-holeA bank, streamer, or login page breaks after Pi-hole. Pause blocking for five minutes, then allow the domain you need. You don't need a new router.](<when-a-site-wont-load>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [Keep the computer on the same address on common routersWhere to reserve DHCP on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so SSH and Pi-hole keep the same number after a reboot. You don't need a new router.](<common-router-reservation>) [The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [When one phone still shows adsEveryone else's ads dropped. One phone still shows banners. Check Private DNS, Private Relay, a VPN, then the Wi-Fi lease. You don't need a new router.](<when-one-phone-shows-ads>) [When guest Wi-Fi still shows adsGuest Wi-Fi is a separate network on purpose. Leave guests on ISP DNS, put a visitor on the main house Wi-Fi, or point guest DNS at Pi-hole only if they can reach the computer. You don't need a new router.](<guest-wifi-dns>) [When the ISP swaps your routerTech left a new gateway (or reset yours). Ads are back, and SSH may miss the old address. Re-find the computer, re-point DNS, re-do the reservation. You don't need a new router or a new Pi-hole.](<when-isp-swaps-router>) [See which name server the computer is usingWhen names fail or ads come back, check which DNS the computer asks before you buy a mesh kit.](<leftover-box-dns-check>) [Point the house at the ad blockAfter Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.](<leftover-box-router-dns>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Your first weekendInstall the OS, name it, and reach it from the couch. Don't buy anything this weekend.](<first-weekend>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [PreviousThe first useful thing](<first-useful-service>) [NextIs the computer still on?](<leftover-box-still-on>)

---

*Labthrift Markdown mirror. HTML version linked above.*

Also: [Save a Pi-hole backup before you change things](<backup-pihole>)

