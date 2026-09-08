# See which name server the computer is using

Source: https://labthrift.com/guides/leftover-box-dns-check
Markdown: https://labthrift.com/md/guides/leftover-box-dns-check.md

*Notes › / › Better Wi-Fi › / › See which name server the computer is using*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / See which name server the computer is using

Written 27 Aug 2026. This is a how-to, not a product card.

# See which name server the computer is using

When names fail or ads come back, check which DNS the computer asks before you buy a mesh kit.

DNS (the name server) is who the computer asks to turn a site name into a number. If that who is the ISP or the router instead of the computer Pi-hole, house ads can come back on it even when other phones look fine.

## Skip until SSH works and Pi-hole is installed

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). If you never installed Pi-hole, start with [the first useful thing on the computer](<first-useful-service>). If you never pointed the house at it, do that in [point the house at the ad block](<leftover-box-router-dns>). If ads came back after it already worked, also see [when ads come back, check the ad block](<leftover-box-ad-block-check>). This note assumes you can SSH in, and Pi-hole was already the plan.

## What this is

A look, not a shopping trip. The house router may point phones at Pi-hole while the computer itself still asks the ISP. Check which name server the computer is asking before you buy a mesh kit. You are not buying Omada, UniFi, or a Protectli tonight.

## Ask which name server the computer is using

SSH from the couch, then on Ubuntu or Debian with systemd-resolved:

`resolvectl status`

Point at DNS Servers and Current DNS Server for the house link (the ethernet or Wi-Fi line that is up). You want the computer's own Pi-hole address when that is the plan. That is often `127.0.0.1`, or the house address from [see the computer's address on the house network](<leftover-box-ip-addr>). If you only see the ISP or the router, that is the clue.

## Optional older print

If you want the older one-file print:

`cat /etc/resolv.conf`

Look at the `nameserver` lines. If you see `127.0.0.53`, that is systemd-resolved looping locally. Use `resolvectl status` for the real name server. Keep this light. Don't edit resolved configs tonight.

## What the look means

Wrong DNS means fix the pointing in [point the house at the ad block](<leftover-box-router-dns>), or check that Pi-hole is still answering in [when ads come back, check the ad block](<leftover-box-ad-block-check>). If a house job failed to start, that is [see if any house jobs failed to start](<leftover-box-failed-units>). Don't buy Omada or UniFi for this look. The admin password is a different note: [change the Pi-hole admin password](<leftover-box-pihole-password>).

## What next

Name lookup: [look up a site name from the computer](<leftover-box-name-lookup>). Past the router: [check that the computer can reach the internet](<leftover-box-internet>). Router points at Pi-hole: [point the house at the ad block](<leftover-box-router-dns>). Ads check: [when ads come back, check the ad block](<leftover-box-ad-block-check>).

## Skip

  * Skip if SSH fails. That is [SSH from the couch](<first-ssh>).
  * Skip a mesh kit for wrong DNS.
  * Skip buying a Protectli.
  * Skip forwarding port 53.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: resolvectl](<https://manpages.debian.org/bookworm/systemd/resolvectl.1.en.html>). [Debian: resolv.conf](<https://manpages.debian.org/bookworm/manpages/resolv.conf.5.en.html>). Official pages only. For install, see [the first useful thing on the computer](<first-useful-service>). For router DNS, see [point the house at the ad block](<leftover-box-router-dns>). For the ads check, see [when ads come back, check the ad block](<leftover-box-ad-block-check>). For the house address, see [see the computer's address on the house network](<leftover-box-ip-addr>). For a name lookup, see [look up a site name from the computer](<leftover-box-name-lookup>). For the admin password, see [change the Pi-hole admin password](<leftover-box-pihole-password>).

## Also on this topic

[Look up a site name from the computerWhen a website name fails, try resolving it from the computer before you buy a mesh kit.](<leftover-box-name-lookup>) [When ads come back, check the ad blockThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [Point the house at the ad blockAfter Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.](<leftover-box-router-dns>) [Change the Pi-hole admin passwordAfter the house ad block is up, change the admin password the installer printed. That password is not the login.](<leftover-box-pihole-password>) [PreviousWhen ads come back, check the ad block](<leftover-box-ad-block-check>) [NextLook up a site name from the computer](<leftover-box-name-lookup>)

---

*Labthrift Markdown mirror. HTML version linked above.*
