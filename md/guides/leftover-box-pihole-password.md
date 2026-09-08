# Change the Pi-hole admin password

Source: https://labthrift.com/guides/leftover-box-pihole-password
Markdown: https://labthrift.com/md/guides/leftover-box-pihole-password.md

*Notes › / › Better Wi-Fi › / › Change the Pi-hole admin password*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Change the Pi-hole admin password

Written 27 Aug 2026. This is a how-to, not a product card.

# Change the Pi-hole admin password

After the house ad block is up, change the admin password the installer printed. That password is not the login.

The installer printed a password so you could open the dashboard once. Before you leave that password on a sticky note forever, set one you chose. The admin password unlocks the Pi-hole web dashboard. The password is what SSH asks for. Those are different jobs. For the login, see [change the login password](<leftover-box-change-password>). If names fail or ads come back first, [see which name server the computer is using](<leftover-box-dns-check>), then [look up a site name from the computer](<leftover-box-name-lookup>).

## Skip until Pi-hole is installed

If you never installed Pi-hole, stop. That is [the first useful thing on the computer](<first-useful-service>). If the admin page never opened, finish that first. This note assumes Pi-hole is already on the computer.

## What this is

You are changing only the Pi-hole web login. Not SSH. Not the router. Not Samba. Not the Wi-Fi password. When you open the dashboard, this is the password the page asks for.

## Change it from SSH

SSH from the couch the way you already do. Then run the official Pi-hole command:

`pihole setpassword`

It asks for a new password twice. Nothing shows as you type. That is normal. Pick a password you chose, not the one the installer printed. Older guides show `pihole -a -p`. On current Pi-hole for Debian and Ubuntu computers, `pihole setpassword` is the command the docs list.

## Confirm

Open the admin page in a browser: <http://pi.hole/admin>, or the computer address plus `/admin`. Log in with the new password. If it fails, you still have SSH. Run `pihole setpassword` again and try once more.

## What next

If the house is not pointed at the computer yet, do that in [point the house at the ad block](<leftover-box-router-dns>). If ads came back later, [check that Pi-hole is still answering](<leftover-box-ad-block-check>). The login password is a different note: [change the login password](<leftover-box-change-password>). Skip Unbound. Skip buying a Raspberry Pi.

## Skip

  * Skip if Pi-hole is not installed. That is [the first useful thing on the computer](<first-useful-service>).
  * Skip changing the router password here.
  * Skip opening the admin page to the internet.
  * Skip a mesh kit.
  * Skip Unbound on day one.



## Sources

[Pi-hole: the pihole command](<https://docs.pi-hole.net/main/pihole-command/>) (setpassword). Official pages only. For install, see [the first useful thing on the computer](<first-useful-service>). For router DNS, see [point the house at the ad block](<leftover-box-router-dns>). For the login, see [change the login password](<leftover-box-change-password>). If ads come back later, see [when ads come back, check the ad block](<leftover-box-ad-block-check>).

## Also on this topic

[The first useful thing on the computerPut a house-wide ad block on the computer. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Point the house at the ad blockAfter Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.](<leftover-box-router-dns>) [When ads come back, check the ad blockThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [Look up a site name from the computerWhen a website name fails, try resolving it from the computer before you buy a mesh kit.](<leftover-box-name-lookup>) [PreviousLook up a site name from the computer](<leftover-box-name-lookup>) [NextPower two Wi-Fi points from one small switch](<cheap-poe>)

---

*Labthrift Markdown mirror. HTML version linked above.*

Also: [Save a Pi-hole backup before you change things](<backup-pihole>)

