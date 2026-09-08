# When one phone still shows ads

Source: https://labthrift.com/guides/when-one-phone-shows-ads
Markdown: https://labthrift.com/md/guides/when-one-phone-shows-ads.md

*Notes › / › Getting started › / › When one phone still shows ads*

[Notes](<./>) / [Getting started](<./#start>) / When one phone still shows ads

Written 3 Sep 2026. This is a how-to, not a product card.

# When one phone still shows ads

Everyone else's ads dropped. One phone still shows banners. Check Private DNS, Private Relay, a VPN, then the Wi-Fi lease. You don't need a new router.

Haven't installed Pi-hole yet? Start with [the first useful thing](<first-useful-service>). Ads back on every device? Start with [when ads come back](<when-ads-come-back>). This note is only the stubborn phone (or tablet) that refuses the house ad block.

## Skip until the house already works

If a laptop on house Wi-Fi still shows the same ads, fix the house first. The computer may be asleep, Pi-hole may have stopped, or the router may have forgotten DNS: [when ads come back](<when-ads-come-back>). This note assumes the rest of the house is clean and one phone is the odd one out.

## What is going on

The router tells phones to ask the computer for names. That phone may ignore the router. Android Private DNS, iCloud Private Relay, a VPN app, or Chrome Secure DNS can send lookups somewhere else. Ads then load on that phone only. The computer looks fine. The router looks fine. The phone is the bypass.

## 1\. Android Private DNS

On many Androids, open Settings, search for `Private DNS`, and open it. On a Pixel it often sits under Network & internet. On a Samsung, Connections → More connection settings → Private DNS.

Set Private DNS to Off, or to Automatic if Off is not offered and Automatic still uses the router. Do not leave a hostname like `dns.google` or `one.one.one.one` filled in for house Wi-Fi. That path skips Pi-hole on purpose. Browse a site that used to show ads. Skip building a DNS-over-TLS proxy on day one.

## 2\. iPhone Private Relay

On an iPhone or iPad with iCloud+, open Settings → [your name] → iCloud → Private Relay. Turn Private Relay off, or use the Wi-Fi detail for the house network and turn Limit IP Address Tracking off for that network only if you want Relay elsewhere.

Private Relay can hide the phone's traffic path, including name lookups, from the house router. That is useful on a coffee-shop network. At home it means the phone may never ask the computer. Browse again on house Wi-Fi after you change it.

## 3\. A VPN or “secure DNS” app

Any VPN, “ad block” VPN, or browser Secure DNS setting can bypass the house. Disconnect the VPN. In Chrome on the phone, open Settings → Privacy and security → Use secure DNS (wording moves), and turn it off while you test. Same idea in Firefox if Secure DNS is on. Test without the VPN first. Add it back later only if you still want it off-house.

## 4\. Sticky Wi-Fi lease

If Private DNS and Relay are already off, the phone may still hold an old lease from before you pointed the router at the computer. Forget the house Wi-Fi, join again, or toggle airplane mode for ten seconds. Then open a site that used to show ads. Same short check as in [when ads come back](<when-ads-come-back>).

## Check from the couch

On another device that already blocks ads, open the Pi-hole query log. Use that stubborn phone for a minute. You should see that phone's lookups. If the log stays quiet while the phone loads pages, the phone is still asking someone else. Go back to Private DNS, Private Relay, or the VPN.

## What this is not

This is not a reason to buy a mesh kit, a new router, or a Raspberry Pi. It is not a reason to open Pi-hole to the internet. It is not homework to run DNS-over-TLS on the computer tonight. Fix the phone so it uses the house book first.

## What next

Router will not take custom DNS at all? Set this phone only: [point a phone or laptop at Pi-hole when the router won't](<manual-dns-on-devices>).

If the phone was on the guest SSID the whole time, that is [when guest Wi-Fi still shows ads](<guest-wifi-dns>). If ads are gone on this phone but one site still dies, that is [when a site won't load after Pi-hole](<when-a-site-wont-load>). If every device broke, walk [when ads come back](<when-ads-come-back>). Confirm the router still points at the computer: [point the house at the ad block](<leftover-box-router-dns>). Leave the ad block alone for a week when that phone is clean.

## Skip

  * Skip buying a new router for one phone.
  * Skip a mesh kit for ad block.
  * Skip exposing Pi-hole to the internet.
  * Skip DNS-over-TLS homework on day one.
  * Skip this if every device still shows ads. Fix the house first.



## Sources

[Pi-hole docs](<https://docs.pi-hole.net/>). [Pi-hole userspace](<https://discourse.pi-hole.net/>) threads on Android Private DNS and browser Secure DNS. [Apple: About iCloud Private Relay](<https://support.apple.com/HT212614>). Official pages only. For install, see [the first useful thing](<first-useful-service>). For the whole-house walk, see [when ads come back](<when-ads-come-back>). For router DNS, see [point the house at the ad block](<leftover-box-router-dns>).

## Also on this topic

[Point a phone or laptop at Pi-hole when the router won'tWhen Nest, Google Wifi, or an ISP gateway will not take custom DNS, set DNS on one phone or laptop so it asks Pi-hole. You don't need a new router for this device.](<manual-dns-on-devices>) [When a site won't load after Pi-holeA bank, streamer, or login page breaks after Pi-hole. Pause blocking for five minutes, then allow the domain you need. You don't need a new router.](<when-a-site-wont-load>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [When guest Wi-Fi still shows adsGuest Wi-Fi is a separate network on purpose. Leave guests on ISP DNS, put a visitor on the main house Wi-Fi, or point guest DNS at Pi-hole only if they can reach the computer. You don't need a new router.](<guest-wifi-dns>) [The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Point the house at the ad blockAfter Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.](<leftover-box-router-dns>) [When ads come back, check the ad blockThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [PreviousWhen ads come back](<when-ads-come-back>) [NextPoint the house at the ad block](<leftover-box-router-dns>)

---

*Labthrift Markdown mirror. HTML version linked above.*
