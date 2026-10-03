# Keep Pi-hole updated

Source: https://labthrift.com/guides/update-pihole
Markdown: https://labthrift.com/md/guides/update-pihole.md

*Notes › / › Getting started › / › Keep Pi-hole updated*

[Notes](<./>) / [Getting started](<./#start>) / Keep Pi-hole updated

Written 4 Sep 2026. This is a how-to, not a product card.

# Keep Pi-hole updated

Weekly apt does not refresh Pi-hole. Update the software and the block lists on the old PC so ads stay gone. You don't need a new Raspberry Pi.

Haven't installed the house ad block yet? Start with [the first useful thing](<first-useful-service>). This note assumes Pi-hole is already answering DNS for the house. The weekly OS fixes on [keep the computer updated](<leftover-box-updates>) are still worth doing. They just don't replace these two Pi-hole jobs.

## Skip until ads already drop

If phones still show banners and you never finished install or router DNS, fix that first. Brand menus: [point common home routers at Pi-hole](<common-router-dns>). If ads came back after a good week, start with [when ads come back](<when-ads-come-back>) before you treat updates as the only fix.

## What this is

Two separate jobs. One updates Pi-hole itself (core, web, FTL). The other refreshes gravity, the combined block list it uses to skip ad names. The usual curl installer from pi-hole.net does not put Pi-hole under apt the way nano is. So `sudo apt upgrade` can leave an old Pi-hole sitting there while the OS looks current.

## See what you have

From the couch, [SSH into the computer](<first-ssh>). Then:

`pihole -v`

You should see lines for Pi-hole core, AdminLTE (or the web UI name your version prints), and FTL. If the command is missing, Pi-hole is not installed on this login path. Go back to [the first useful thing](<first-useful-service>).

## Update Pi-hole

Still in that SSH window:

`pihole -up`

Let it finish. It may ask to continue. Say yes. A short DNS blip on the house is normal while FTL restarts. Keep the SSH session open. Don't yank power mid-update.

When it ends, check versions again:

`pihole -v`

Then:

`pihole status`

You want FTL running and blocking enabled. Open <http://pi.hole/admin> (or the computer's address plus `/admin`) on a laptop and confirm the dashboard loads.

## Refresh the block lists

`pihole -up` often refreshes gravity for you. Once a week, or when ads creep back while status still looks healthy, run gravity on its own:

`pihole -g`

That re-downloads the lists you already enabled and rebuilds the big skip table. It can take a minute on a slow disk. When it finishes, load a few sites on a phone that uses house DNS. Ads should still be gone. If one bank or streamer broke, that is [when a site won't load after Pi-hole](<when-a-site-wont-load>), not a reason to skip updates forever.

Prefer the SSH commands for a first habit. The admin page under Tools can update gravity too. Same job, different door.

## How often

Once a week is enough for most houses. Pair it with the apt habit on [keep the computer updated](<leftover-box-updates>): OS first, then `pihole -up` when that is boring. Skip a daily ritual. Skip hunting extra block lists until the default set has been quiet for a while.

## What this is not

This is not a reason to buy a Raspberry Pi, a second box, or a “Pi-hole appliance.” It is not opening the admin page to the internet. It is not Unbound, Docker, or a full reinstall. If the computer itself is off or soft-off, wake or power it first: [is it still on?](<leftover-box-still-on>) or [wake the computer from the house network](<wake-on-lan>).

## What next

After an update, confirm the three house jobs still work: [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>) (even if you did not reboot). Keep the weekly OS habit: [keep the computer updated](<leftover-box-updates>). If only one phone still shows banners, see [when one phone still shows ads](<when-one-phone-shows-ads>). Change the printed admin password if you have not: [change the printed Pi-hole admin password](<leftover-box-pihole-password>).

## Skip

  * Skip treating apt upgrade as a Pi-hole update.
  * Skip buying a new Pi “because updates feel scary.”
  * Skip opening the admin UI past the house network.
  * Skip stacking a dozen third-party lists on day one.
  * Skip this until Pi-hole already blocks ads for the house.



## Sources

[Pi-hole basic install](<https://docs.pi-hole.net/main/basic-install/>). [Pi-hole update](<https://docs.pi-hole.net/main/update/>). [FTL DNS](<https://docs.pi-hole.net/ftldns/>). Official pages only. For the first install, see [the first useful thing](<first-useful-service>). For OS packages, see [keep the computer updated](<leftover-box-updates>).

## Also on this topic

[The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.](<leftover-box-updates>) [When ads come backAds are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.](<when-ads-come-back>) [When guest Wi-Fi still shows adsGuest Wi-Fi is a separate network on purpose. Leave guests on ISP DNS, put a visitor on the main house Wi-Fi, or point guest DNS at Pi-hole only if they can reach the computer. You don't need a new router.](<guest-wifi-dns>) [When a site won't load after Pi-holeA bank, streamer, or login page breaks after Pi-hole. Pause blocking for five minutes, then allow the domain you need. You don't need a new router.](<when-a-site-wont-load>) [Change the printed Pi-hole admin passwordThe installer prints a password. Swap it for one you chose before you leave the dashboard open on the house network.](<leftover-box-pihole-password>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [PreviousThe first useful thing](<first-useful-service>) [NextKeep the computer updated](<leftover-box-updates>)

---

*Labthrift Markdown mirror. HTML version linked above.*

Also: [Save a Pi-hole backup before you change things](<backup-pihole>)

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
