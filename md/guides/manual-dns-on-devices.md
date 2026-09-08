# Point a phone or laptop at Pi-hole when the router won't

Source: https://labthrift.com/guides/manual-dns-on-devices
Markdown: https://labthrift.com/md/guides/manual-dns-on-devices.md

*Notes › / › Getting started › / › Point a phone or laptop at Pi-hole when the router won't*

[Notes](<./>) / [Getting started](<./#start>) / Point a phone or laptop at Pi-hole when the router won't

Written 4 Sep 2026. This is a how-to, not a product card.

# Point a phone or laptop at Pi-hole when the router won't

When Nest, Google Wifi, or an ISP gateway will not take custom DNS, set DNS on one phone or laptop so it asks Pi-hole. You don't need a new router for this device.

Haven't installed Pi-hole yet? Start with [the first useful thing](<first-useful-service>). Need the computer's number first? [Find it on the house network](<find-the-leftover-box>). Prefer router-wide DNS when the router offers it: [point common home routers at Pi-hole](<common-router-dns>). Short generic router pass: [point the house at the ad block](<leftover-box-router-dns>).

## Skip until you know the address and the router path is blocked

Write down Pi-hole's address — the computer's reserved or stable number on the house network. Confirm the router will not take LAN custom DNS, or that Nest / Google Wifi / the ISP gateway hides it. If LAN DHCP DNS already works house-wide, skip this page and leave the phones alone.

## What you are changing

You are setting DNS on _one_ phone or laptop for that Wi-Fi (or Ethernet) profile only. Other devices keep using whatever the router hands out. This is not a VPN. It is not Private DNS to a public hostname on Android — that path wants a name like `dns.example.com`, not your house Pi-hole IP, and it is often the opposite of this job. For house Pi-hole, put the IP in the Wi-Fi network's DNS fields and leave Private DNS Off for this device.

## 1\. Write down Pi-hole's address

Example: `192.168.1.50`. Swap in yours. Need the number? [Find it on the house network](<find-the-leftover-box>). Want it sticky after a reboot? [Keep it on the same number](<leftover-box-dhcp-reservation>), or brand menus in [keep the computer on the same address on common routers](<common-router-reservation>) [Give the computer a fixed address when the router won'tNest or an ISP gateway won't reserve DHCP. Set one stable number on Ubuntu Server so SSH and Pi-hole keep the same address after a reboot. You don't need a new router.](<fixed-address-on-pc>) .

## 2\. iPhone / iPad

Settings → Wi-Fi → tap the `(i)` next to the house network → Configure DNS → Manual. Remove the ISP entries. Add the Pi-hole IP. For a first pass, leave a second DNS empty — a public failover can bypass blocking when Pi-hole is up. Save. Toggle Wi-Fi off and on once.

This sticks for that Wi-Fi network only. Cellular still uses the carrier. Undo later with Automatic on the same screen.

## 3\. Android

Settings → Network & internet → the house Wi-Fi → pencil / Advanced (wording moves). Prefer editing that network's DNS fields to the Pi-hole IP when the menu offers DNS 1 / DNS 2. Some skins need IP settings → Static so DNS fields appear; keep the IP/gateway/prefix the phone already had if you go Static, and only change DNS.

**Private DNS is not this job.** Private DNS wants a DNS-over-TLS _hostname_. You cannot type `192.168.1.50` there and expect house Pi-hole. For this how-to: set DNS on the Wi-Fi network, and set Private DNS to Off so the phone actually asks Pi-hole. If one stubborn phone still shows ads after house DNS works, that is [when one phone still shows ads](<when-one-phone-shows-ads>).

## 4\. Windows

Settings → Network & internet → Wi-Fi or Ethernet → the connection → DNS server assignment → Edit → Manual → IPv4 On → Preferred DNS = the Pi-hole IP. Leave Alternate blank on the first pass. Save. Skip DNS over HTTPS templates for a house Pi-hole IP on day one.

## 5\. Mac

System Settings → Network → Wi-Fi or Ethernet → Details → DNS. Click `+`, add the Pi-hole IP, remove the old servers for a first pass. Apply / OK.

## Check

On that device, open a browser and visit a site that used to show ads. Banners should drop. Open the Pi-hole Query Log on the computer (admin from [the first useful thing](<first-useful-service>)). Lookups from this phone or laptop should show as their own client. If the admin page or a site breaks oddly, see [when a site won't load after Pi-hole](<when-a-site-wont-load>) or [when ads come back, check the ad block](<leftover-box-ad-block-check>).

## What this is not

This is not a replacement for router LAN DNS when the router can do it. It is not opening Pi-hole to the internet. It is not buying mesh. It is not a VPN. It is one device asking the computer you already have.

## What next

If you get a better router later, set the house once: [point common home routers at Pi-hole](<common-router-dns>). Stubborn phone after house DNS works: [when one phone still shows ads](<when-one-phone-shows-ads>). Guest network still dirty: [when guest Wi-Fi still shows ads](<guest-wifi-dns>). Ads back after a power blip: [when ads come back](<when-ads-come-back>). Keep the computer's number sticky: [keep the computer on the same address on common routers](<common-router-reservation>).

## Skip

  * Skip this if router LAN DHCP DNS already works house-wide.
  * Skip Private DNS hostname mode when all you have is a house Pi-hole IP.
  * Skip forwarding port 53 to the internet.
  * Skip buying a new router just for one phone if this device works.
  * Skip a second public DNS on the first pass if you want blocking to stick.



## Sources

[Pi-hole docs](<https://docs.pi-hole.net/>). [Android: advanced network settings (Private DNS)](<https://support.google.com/android/answer/9654714>). [Microsoft: essential network settings (DNS)](<https://support.microsoft.com/en-us/windows/essential-network-settings-and-tasks-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9>). [Apple: change DNS settings on Mac](<https://support.apple.com/guide/mac-help/change-dns-settings-on-mac-mh14127/mac>). Official pages only. Menus move by OS version. For router-wide DNS, see [point common home routers at Pi-hole](<common-router-dns>). For install, see [the first useful thing](<first-useful-service>).

## Also on this topic

[Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [Keep the computer on the same address on common routersWhere to reserve DHCP on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so SSH and Pi-hole keep the same number after a reboot. You don't need a new router.](<common-router-reservation>) [When one phone still shows adsEveryone else's ads dropped. One phone still shows banners. Check Private DNS, Private Relay, a VPN, then the Wi-Fi lease. You don't need a new router.](<when-one-phone-shows-ads>) [When guest Wi-Fi still shows adsGuest Wi-Fi is a separate network on purpose. Leave guests on ISP DNS, put a visitor on the main house Wi-Fi, or point guest DNS at Pi-hole only if they can reach the computer. You don't need a new router.](<guest-wifi-dns>) [Point the house at the ad blockAfter Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.](<leftover-box-router-dns>) [The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [PreviousPoint common home routers at Pi-hole](<common-router-dns>) [NextWhen one phone still shows ads](<when-one-phone-shows-ads>)

---

*Labthrift Markdown mirror. HTML version linked above.*
