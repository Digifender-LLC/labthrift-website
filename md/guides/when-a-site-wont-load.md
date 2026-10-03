# When a site won't load after Pi-hole

Source: https://labthrift.com/guides/when-a-site-wont-load
Markdown: https://labthrift.com/md/guides/when-a-site-wont-load.md

*Notes › / › Getting started › / › When a site won't load after Pi-hole*

[Notes](<./>) / [Getting started](<./#start>) / When a site won't load after Pi-hole

Written 4 Sep 2026. This is a how-to, not a product card.

# When a site won't load after Pi-hole

A bank, streamer, or login page breaks after Pi-hole. Pause blocking for five minutes, then allow the domain you need. You don't need a new router.

Haven't installed Pi-hole yet? Start with [the first useful thing](<first-useful-service>). Ads are back everywhere, not one broken page? That is [when ads come back](<when-ads-come-back>). This note is the other failure: the house still blocks ads, but one site you need is broken.

## Skip until Pi-hole is the house DNS

If the house never pointed DNS at the computer, this page will not help. Point the router first: [point the house at the ad block](<leftover-box-router-dns>), or brand menus in [point common home routers at Pi-hole](<common-router-dns>). If the computer is off or Pi-hole is down, start with [when ads come back](<when-ads-come-back>).

## What this is

Pi-hole blocks names on a list. Sometimes a real site shares a name with an ad tracker, or a login needs a domain the list hates. You pause blocking long enough to prove it, then allow that one domain. You don't wipe the whole block list. You don't buy a mesh kit.

## Prove it is Pi-hole

On a laptop or phone on house Wi-Fi, open the broken site. Then pause blocking for five minutes from the computer over SSH:

`pihole disable 5m`

Reload the site. If it loads while blocking is off, Pi-hole was the cause. Blocking turns itself back on after five minutes. Turn it on sooner if you are done testing:

`pihole enable`

Same idea in the admin page: open <http://pi.hole/admin> (or the computer's address plus `/admin`), find Disable blocking, pick five minutes. Forgot the admin password? [Change the Pi-hole admin password](<leftover-box-pihole-password>).

If the site stays broken with blocking off, the problem is not the block list. Check the site itself, the phone's VPN, or the usual network walk in [when ads come back](<when-ads-come-back>).

## Find the blocked name

With blocking on again, open the broken site once more so the query shows up. In the admin page, open Query Log. Look for the domain that was blocked around the time you tried the site. Red or “blocked” rows are the suspects. Write down the exact name, like `tracker.example.com` or a CDN host under the site you care about.

From SSH you can watch live queries while you reload the page:

`pihole tail`

Press Ctrl-C when you have the name. Skip guessing wildcards on day one. One exact domain is enough.

## Allow that domain

From SSH on the computer:

`pihole allow tracker.example.com`

Swap in the real name from the query log. Then reload the site. If it still breaks, allow the next blocked name you see for that page. Stop when the page works. Don't allow the whole internet.

In the admin page you can do the same from Query Log: open the blocked domain and choose Allow, or add it under Domains / Allowlist. Either path is fine.

To see whether a name is already on a list:

`pihole query tracker.example.com`

## If you allowed the wrong thing

Open the admin Domains page and remove that name from the allow list. Reload the site. Prefer an allow list over turning blocking off forever. A five-minute pause is for diagnosis. A permanent disable is how ads come back for everyone.

## What this is not

This is not a reason to delete every block list, open Pi-hole to the internet, or buy a Raspberry Pi. It is not “ads came back on every device.” That checklist is [when ads come back](<when-ads-come-back>). One phone still dirty while the rest of the house is clean is [when one phone still shows ads](<when-one-phone-shows-ads>).

## What next

Leave the allow list alone when the site works. Change the printed admin password if you have not: [change the Pi-hole admin password](<leftover-box-pihole-password>). If ads return house-wide later, start with [when ads come back](<when-ads-come-back>). A file share on this same computer can wait: [a file share](<first-file-share>).

## Skip

  * Skip deleting every subscribed block list because one bank broke.
  * Skip leaving blocking disabled overnight.
  * Skip opening the Pi-hole admin page to the internet.
  * Skip a new router or a mesh kit for one broken domain.
  * Skip Unbound on day one.
  * Skip this if ads are back on every device. That is a different walk.



## Sources

[Pi-hole docs](<https://docs.pi-hole.net/>). [Pi-hole command](<https://docs.pi-hole.net/core/pihole-command/>) (allow, disable, enable, query, tail). Official pages only. For install, see [the first useful thing](<first-useful-service>). For ads returning house-wide, see [when ads come back](<when-ads-come-back>). For router DNS, see [point common home routers at Pi-hole](<common-router-dns>).

## Also on this topic

[The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [When one phone still shows adsEveryone else's ads dropped. One phone still shows banners. Check Private DNS, Private Relay, a VPN, then the Wi-Fi lease. You don't need a new router.](<when-one-phone-shows-ads>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [Change the Pi-hole admin passwordAfter the house ad block is up, change the admin password the installer printed. That password is not the login.](<leftover-box-pihole-password>) [When ads come back, check the ad blockThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [PreviousWhen ads come back](<when-ads-come-back>) [NextWhen one phone still shows ads](<when-one-phone-shows-ads>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
