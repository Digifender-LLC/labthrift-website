# Keep the computer on the same address on common routers

Source: https://labthrift.com/guides/common-router-reservation
Markdown: https://labthrift.com/md/guides/common-router-reservation.md

*Notes › / › Getting started › / › Keep the computer on the same address on common routers*

[Notes](<./>) / [Getting started](<./#start>) / Keep the computer on the same address on common routers

Written 4 Sep 2026. This is a how-to, not a product card.

# Keep the computer on the same address on common routers

Where to reserve DHCP on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so SSH and Pi-hole keep the same number after a reboot. You don't need a new router.

Need the computer's number first? [Find it on the house network](<find-the-leftover-box>). Prefer a short generic pass? That is [keep it on the same number](<leftover-box-dhcp-reservation>). This note is the maker-by-maker walk. Pointing the house at Pi-hole is a different job: [point common home routers at Pi-hole](<common-router-dns>).

## Skip until you know the number and the sticker

Write down the address you already use for SSH. Write down the hardware address (MAC) so the router binds the reservation to this computer, not a phone that borrowed the old number. Hardware address how-to: [see its hardware address](<leftover-box-mac-addr>). Address how-to: [see its address on the house network](<leftover-box-ip-addr>).

If you cannot log into the house router at all, this page will not help. Sticker login first.

## What you are changing

DHCP is how the router hands out numbers. A reservation means this computer always gets the same one. It still asks the router. The router just always answers with the number you chose. Menus say Address Reservation, Manual Assignment, IP Binding, or Reservations. Same idea.

Do this on the router. Skip typing a static IP into Linux on the computer for a first pass. Keep the number you already use. Don't invent a new one unless the old one is taken.

## TP-Link (Archer and similar)

Open a browser to `http://tplinkwifi.net` or the sticker address, often `192.168.0.1`. Log in.

Go to Advanced → Network → DHCP Server. Under Address Reservation, click Add. Pick the computer from View Connected Devices when the UI offers it, or paste the MAC and the number you already use. Enable the entry if there is a checkbox. Save. Reboot the router if it asks.

## ASUS

Open `http://www.asusrouter.com` or the LAN address, often `192.168.50.1`. Log in.

Go to LAN → DHCP Server. Turn Enable Manual Assignment to Yes. In Manually Assigned IP, add the computer's MAC and the number you already use. Apply. The address should sit inside the DHCP pool the same page shows.

In the ASUS app, the same idea is Settings → LAN → IP Binding. Either path is fine. Leave the computer on automatic DHCP. Do not also set a conflicting static IP on Linux.

## eero

Open the eero app. Settings → Advanced networking → Reservations & port forwarding. Add a reservation. Pick the computer from the connected list. Keep or set the IPv4 address you already use for SSH. Save. You do not need to open a port for this job. Skip port forwarding.

If eero is in bridge mode, reservations live on the router in front of it, not in the eero app.

## Netgear Nighthawk

Open `http://www.routerlogin.net`. Log in as admin with the password you set.

Go to Advanced → Setup → LAN Setup (some models say Settings → Setup → LAN Setup). Under Address Reservation, Add. Enter the IP you already use and the MAC from Attached Devices if the form is empty. Apply.

The reserved address sticks the next time the computer asks DHCP. Reboot the computer, or renew its lease, then SSH with that same number. If Add fails with an “invalid MAC” error on some Nighthawk firmware, update the router firmware from Netgear’s page, or reserve from another browser after a reboot. Skip developer-tool workarounds on day one.

## Google Nest Wifi / Google Wifi

The Google Home app is thin on LAN DHCP reservations. Some Nest setups have no clean “always this IP” control for a random old PC. Honest first-timer move: confirm the computer’s number after each reboot with [find it on the house network](<find-the-leftover-box>), set a fixed address on the computer itself ([give the computer a fixed address when the router won't](<fixed-address-on-pc>)), or put a router you control behind a bridged ISP modem and reserve there.

Skip buying a mesh kit “so reservation works.” Skip Nest bridge mode unless you already have another router doing DHCP.

## ISP gateway (Xfinity, AT&T, Spectrum, and friends)

Many ISP combo boxes hide Address Reservation, or reset it overnight. If you cannot find it, you are not failing the tutorial. Common paths:

  * Use the sticker admin page and search for DHCP, LAN, or Address Reservation. Reserve if it exists.
  * Put the gateway in bridge / IP passthrough and plug in a router you control (TP-Link, ASUS, eero). Then use that router’s steps above.



Skip forwarding port 22 on the ISP box. Skip opening SSH to the internet.

## Check

Reboot the computer, or wait for the lease to renew. From another computer on the house network:

`ping -c 3 192.168.1.50`

Swap in your real number. Then SSH the way [SSH from the couch](<first-ssh>) taught you. If ping fails, see [is it still on?](<leftover-box-still-on>) before you touch the router again.

## What this is not

This is not a reason to buy a new router, a managed switch, or a Raspberry Pi. It is not typing a static IP into Linux on day one. It is one house setting so the number you wrote down stays true after a reboot.

## What next

If Pi-hole is not up yet, that is [the first useful thing](<first-useful-service>). If Pi-hole is already up, point the house at it: [point common home routers at Pi-hole](<common-router-dns>). If the router will not take LAN DNS, set one device: [point a phone or laptop at Pi-hole when the router won't](<manual-dns-on-devices>). If Nest or the ISP box will not reserve DHCP either, set the number on the computer: [give the computer a fixed address when the router won't](<fixed-address-on-pc>). If ads return after a power blip, start with [when ads come back](<when-ads-come-back>). After an ISP swap wiped the reservation, walk [when the ISP swaps your router](<when-isp-swaps-router>). Prefer a cable for the computer: [a cable beats Wi-Fi for the old PC](<leftover-box-ethernet>).

## Skip

  * Skip this if SSH already works every day with the same number, or if the reservation is already set.
  * Skip typing a fixed address into Linux when the router reservation works. If Nest or the ISP box will not reserve, use [give the computer a fixed address when the router won't](<fixed-address-on-pc>).
  * Skip a new router just to reserve one address, if your current one offers Address Reservation.
  * Skip opening port 22 to the internet.
  * Skip a managed switch for this.
  * Skip buying a mesh kit for a sticky address.



## Sources

[TP-Link: Address Reservation](<https://www.tp-link.com/us/support/faq/182/>). [ASUS: manually assign LAN IP](<https://www.asus.com/support/faq/1000906/>). [eero: Reservations & port forwarding](<https://eero.com/support/articles/how-do-i-set-up-port-forwarding>) (reservation lives on that screen; you do not need a port for this job). [Netgear: reserve an IP address](<https://kb.netgear.com/25722/How-do-I-reserve-an-IP-address-on-my-NETGEAR-router>). Official pages only. Menus move by firmware. For the short generic pass, see [keep it on the same number](<leftover-box-dhcp-reservation>). For DNS at Pi-hole, see [point common home routers at Pi-hole](<common-router-dns>).

## Also on this topic

[Point a phone or laptop at Pi-hole when the router won'tWhen Nest, Google Wifi, or an ISP gateway will not take custom DNS, set DNS on one phone or laptop so it asks Pi-hole. You don't need a new router for this device.](<manual-dns-on-devices>) [Keep it on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [See its hardware addressBefore you reserve its number, write down the sticker-like address the router uses to recognize it.](<leftover-box-mac-addr>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [When the ISP swaps your routerTech left a new gateway (or reset yours). Ads are back, and SSH may miss the old address. Re-find the computer, re-point DNS, re-do the reservation. You don't need a new router or a new Pi-hole.](<when-isp-swaps-router>) [SSH from the couchType commands on the old PC from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousKeep it on the same number](<leftover-box-dhcp-reservation>) [NextPoint common home routers at Pi-hole](<common-router-dns>)

---

*Labthrift Markdown mirror. HTML version linked above.*
