# Save a Pi-hole backup before you change things

Source: https://labthrift.com/guides/backup-pihole
Markdown: https://labthrift.com/md/guides/backup-pihole.md

*Notes › / › Getting started › / › Save a Pi-hole backup before you change things*

[Notes](<./>) / [Getting started](<./#start>) / Save a Pi-hole backup before you change things

Written 4 Sep 2026. This is a how-to, not a product card.

# Save a Pi-hole backup before you change things

Export Pi-hole settings with Teleporter so a reinstall, a bad list, or a wiped disk does not erase your allow list and local DNS. You don't need a new Raspberry Pi.

Haven't installed the house ad block yet? Start with [the first useful thing](<first-useful-service>). This note is only for when Pi-hole already answers DNS and you want a settings zip you can put back later. It is not a copy of the house folder. That second copy is [a backup of the house folder](<first-backup>).

## Skip until Pi-hole already works

If ads never dropped, fix install and router DNS first. Brand menus: [point common home routers at Pi-hole](<common-router-dns>). If ads came back after a good week, start with [when ads come back](<when-ads-come-back>). Don't export a broken setup and call that a plan.

## What this is

Pi-hole's Teleporter builds a small zip of settings: allow and deny lists, subscribed block lists, local DNS names, and related admin choices. It is the official way to move those choices to a fresh install or undo a bad edit. It is not a full disk image. It is not the house photo share. Keep the zip on your laptop, or in the house folder once that share exists.

## Open Teleporter

On a laptop on the house network, open the admin page: [http://pi.hole/admin](http://pi.hole/admin), or the computer's address plus `/admin`. Log in with the admin password you set (not the Linux SSH password). Forgot it? Change it from SSH: [change the printed Pi-hole admin password](<leftover-box-pihole-password>).

In the left menu, open **Settings**, then the **Teleporter** tab. Menu labels can shift a little by Pi-hole version. You want the page that offers Backup and Restore (Export and Import on some builds).

## Export (save the zip)

Click **Backup** or **Export**. Your browser downloads a zip. Name it with today's date if the download does not already. Put the file somewhere you will find again: the laptop Downloads folder is fine for a first save. Better: copy it into the house share once that folder works, so the settings zip sits with the other house files.

Do this before a big change: before `pihole -up` if you are nervous, before you paste a huge third-party list, before you reinstall the OS, before you wipe a Marketplace disk. A quiet weekly export after [keep Pi-hole updated](<update-pihole>) is enough for most houses.

## Import (put settings back)

Only after a fresh Pi-hole install answers DNS again, or when you mean to overwrite the current settings on purpose. Open the same Teleporter page. Choose the zip. Click **Restore** or **Import**. Leave the default checkboxes unless you know you want to skip one group. Wait for the page to finish. Then:

`pihole status`

From SSH, or reload the dashboard. Ads should still drop on a phone that uses house DNS. If one site you need is broken after the restore, that is [when a site won't load after Pi-hole](<when-a-site-wont-load>), not a reason to throw the zip away.

## What this is not

This is not a reason to buy a second Pi or a “backup appliance.” It is not copying all of `/etc/pihole` by hand for a first-timer. It is not opening the admin page past the house network. It is not a substitute for [a backup of the house folder](<first-backup>). Photos and documents live in the share. Teleporter only saves Pi-hole's own settings.

## What next

Keep the weekly software habit: [keep Pi-hole updated](<update-pihole>). Keep the OS habit too: [keep the computer updated](<leftover-box-updates>). If ads come back later, start with [when ads come back](<when-ads-come-back>). After a reinstall of the whole PC, put the house share back with [a file share](<first-file-share>), then restore this zip so allow lists return with it.

## Skip

- Skip buying a new Raspberry Pi to “have a backup Pi-hole.”
- Skip opening Teleporter past the house network.
- Skip treating the zip as a full computer backup.
- Skip importing an old zip onto a working install just to see what happens.
- Skip this until Pi-hole already blocks ads for the house.

## Sources

[Pi-hole basic install](https://docs.pi-hole.net/main/basic-install/). [Pi-hole update](https://docs.pi-hole.net/main/update/). [Pi-hole command](https://docs.pi-hole.net/main/pihole-command/). Official pages only. Teleporter lives under Settings in the admin UI on the computer. For the first install, see [the first useful thing](<first-useful-service>). For software updates, see [keep Pi-hole updated](<update-pihole>). For the admin password, see [change the printed Pi-hole admin password](<leftover-box-pihole-password>).

## Also on this topic

- [The first useful thing](<first-useful-service>) — Put a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.
- [Keep Pi-hole updated](<update-pihole>) — Weekly apt does not refresh Pi-hole. Update the software and the block lists on the old PC so ads stay gone. You don't need a new Raspberry Pi.
- [Change the printed Pi-hole admin password](<leftover-box-pihole-password>) — The installer prints a password. Swap it for one you chose before you leave the dashboard open on the house network.
- [When ads come back](<when-ads-come-back>) — Ads are back, sites won't load, or a phone still shows banners. Check the computer, Pi-hole, router DNS, then the phone.
- [When a site won't load after Pi-hole](<when-a-site-wont-load>) — A bank, streamer, or login page breaks after Pi-hole. Pause blocking for five minutes, then allow the domain you need. You don't need a new router.
- [Point common home routers at Pi-hole](<common-router-dns>) — Where to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.
- [A backup of the house folder](<first-backup>) — A second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.
- [Keep the computer updated](<leftover-box-updates>) — Once a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.
