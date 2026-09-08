# When ads come back, check the ad block

Source: https://labthrift.com/guides/leftover-box-ad-block-check
Markdown: https://labthrift.com/md/guides/leftover-box-ad-block-check.md

*Notes › / › Better Wi-Fi › / › When ads come back, check the ad block*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / When ads come back, check the ad block

Written 26 Aug 2026. This is a how-to, not a product card.

# When ads come back, check the ad block

The computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.

Ads coming back usually means the house stopped asking the computer for names, or Pi-hole stopped answering. You don't need a new mesh kit for this. You don't need to redo the whole router. Check the computer that already did the job once.

## Skip until the computer is awake

If ping and SSH fail, fix that first in [is the computer still on?](<leftover-box-still-on>) This note assumes the computer answers SSH from the couch.

## Skip until Pi-hole was working once

If you never installed Pi-hole, start with [the first useful thing on the computer](<first-useful-service>). If you never pointed the house at that computer, do that in [point the house at the ad block](<leftover-box-router-dns>). This note is for the morning when ads came back after it already worked.

## Is Pi-hole still running?

SSH from the couch, then:

`pihole status`

Or if that command is missing:

`sudo systemctl is-active pihole-FTL`

You want active / listening. If it is not, restart it:

`sudo systemctl restart pihole-FTL`

Or, if the pihole CLI is there, `pihole restartdns`. Then open the admin page in a browser the way [the first useful thing on the computer](<first-useful-service>) taught. Sites should load. A lot of the banners should not.

## Is the house still pointed at the computer?

On one phone or laptop, check that DNS is still the address. That is the router LAN DNS you set, or the device DNS you set for a test. If the router forgot the setting after a power blink, set it again: [point the house at the ad block](<leftover-box-router-dns>). A [DHCP reservation](<leftover-box-dhcp-reservation>) helps the number stay put after a reboot.

## Firewall can hide DNS

If ufw is on and no names resolve, allow port 53 as in [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). House network only. Don't forward port 53 to the internet.

## What next

If blocking works but one site you need is broken, see [when a site won't load after Pi-hole](<when-a-site-wont-load>). Leave it. After install, [change the printed Pi-hole admin password](<leftover-box-pihole-password>). Skip a mesh kit. Skip Unbound. Skip buying a Raspberry Pi. If a restart did not help, that is [when something broke, look at the log](<leftover-box-read-logs>). If the share also vanished, see the Samba section in [turn on a simple firewall without locking yourself out](<leftover-box-ufw>) or start from [a file share on the computer](<first-file-share>). If names fail or ads come back only on the computer, [see which name server the computer is using](<leftover-box-dns-check>).

## Skip

  * Skip if the computer is off.
  * Skip if Pi-hole was never installed.
  * Skip a mesh kit for ad block.
  * Skip Unbound on day one.
  * Skip opening Pi-hole to the internet.
  * Skip a second box.



## Sources

[Pi-hole docs](<https://docs.pi-hole.net/>). [Pi-hole basic install](<https://docs.pi-hole.net/main/basic-install/>). Official pages only. For the awake check, see [is the computer still on?](<leftover-box-still-on>). For install, see [the first useful thing on the computer](<first-useful-service>). For router DNS, see [point the house at the ad block](<leftover-box-router-dns>). For the firewall ports, see [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). For the stable address, see [keep the computer on the same number](<leftover-box-dhcp-reservation>).

## Also on this topic

[When a site won't load after Pi-holeA bank, streamer, or login page breaks after Pi-hole. Pause blocking for five minutes, then allow the domain you need. You don't need a new router.](<when-a-site-wont-load>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Point the house at the ad blockAfter Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.](<leftover-box-router-dns>) [The first useful thing on the computerPut a house-wide ad block on the computer. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [PreviousPoint the house at the ad block](<leftover-box-router-dns>) [NextSee which name server the computer is using](<leftover-box-dns-check>)

---

*Labthrift Markdown mirror. HTML version linked above.*
