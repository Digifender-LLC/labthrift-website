# Look up a site name from the computer

Source: https://labthrift.com/guides/leftover-box-name-lookup
Markdown: https://labthrift.com/md/guides/leftover-box-name-lookup.md

*Notes › / › Better Wi-Fi › / › Look up a site name from the computer*

[Notes](<./>) / [Better Wi-Fi](<./#cheap-poe>) / Look up a site name from the computer

Written 27 Aug 2026. This is a how-to, not a product card.

# Look up a site name from the computer

When a website name fails, try resolving it from the computer before you buy a mesh kit.

You already know which name server the computer is asking from [see which name server the computer is using](<leftover-box-dns-check>). This note asks that server to turn a site name into a number. Resolve is that lookup. If ping to a number works but the name fails, this is the look.

## Skip until SSH works

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). If you never installed Pi-hole, start with [the first useful thing on the computer](<first-useful-service>). Prefer this look after you know which name server the computer is asking: [see which name server the computer is using](<leftover-box-dns-check>). If even a number past the router fails, fix that first: [check that the computer can reach the internet](<leftover-box-internet>). This note assumes you can log in from the couch, or sit at the keyboard.

## What this is

A look, not a shopping trip. If the computer can ping `1.1.1.1` but cannot look up a site name, that is DNS, not a dead access point. Check the lookup before you buy a mesh kit. You are not buying Omada, UniFi, or a Protectli tonight.

## Look up a name

SSH in from the couch, or sit at the keyboard, then run. Replace example.com with the site that failed:

`resolvectl query example.com`

A number back means names work from the computer. Timeout, SERVFAIL, or NXDOMAIN means the name server is wrong or Pi-hole is not answering. That is [see which name server the computer is using](<leftover-box-dns-check>) or [when ads come back, check the ad block](<leftover-box-ad-block-check>).

A blocked ad name can come back as `0.0.0.0`. That is Pi-hole doing its job, not a broken lookup. Try a site you actually use, not an ad tracker.

## Optional older print

If you want the older one-line print:

`getent hosts example.com`

A number and the name on one line means the computer resolved it. Empty output means the lookup failed. Keep this light. Don't edit resolved configs tonight.

## What the look means

Failed lookup means fix the pointing in [point the house at the ad block](<leftover-box-router-dns>), check which server the computer is asking in [see which name server the computer is using](<leftover-box-dns-check>), or check that Pi-hole is still answering in [when ads come back, check the ad block](<leftover-box-ad-block-check>). If even `1.1.1.1` will not ping, that is past the router: [check that the computer can reach the internet](<leftover-box-internet>). Don't buy Omada or UniFi for this look. The admin password is a different note: [change the Pi-hole admin password](<leftover-box-pihole-password>).

## What next

Which name server: [see which name server the computer is using](<leftover-box-dns-check>). Past the router: [check that the computer can reach the internet](<leftover-box-internet>). Ads check: [when ads come back, check the ad block](<leftover-box-ad-block-check>).

## Skip

  * Skip if SSH fails. That is [SSH from the couch](<first-ssh>).
  * Skip a mesh kit for a failed name.
  * Skip buying a Protectli.
  * Skip forwarding port 53.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: resolvectl](<https://manpages.debian.org/bookworm/systemd/resolvectl.1.en.html>). [Debian: getent](<https://manpages.debian.org/bookworm/manpages/getent.1.en.html>). Official pages only. For which name server, see [see which name server the computer is using](<leftover-box-dns-check>). For the ads check, see [when ads come back, check the ad block](<leftover-box-ad-block-check>). For router DNS, see [point the house at the ad block](<leftover-box-router-dns>). For ping past the router, see [check that the computer can reach the internet](<leftover-box-internet>). For the path to the router, see [check that the computer can reach the house router](<leftover-box-ping>). For the admin password, see [change the Pi-hole admin password](<leftover-box-pihole-password>).

## Also on this topic

[Check that the computer can reach the internetBefore you blame the computer or buy a mesh kit, ping a number past the house router.](<leftover-box-internet>) [See which name server the computer is usingWhen names fail or ads come back, check which DNS the computer asks before you buy a mesh kit.](<leftover-box-dns-check>) [See if house ad block is answeringThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [Point the house at Pi-holeAfter Pi-hole is installed, point the house router at the computer for DNS. Phones and laptops need no app. Sites still load. A lot of ads don't.](<leftover-box-router-dns>) [Reset the Pi-hole web passwordAfter the house ad block is up, change the admin password the installer printed. That password is not the login.](<leftover-box-pihole-password>) [PreviousSee which name server the computer is using](<leftover-box-dns-check>) [NextReset the Pi-hole web password](<leftover-box-pihole-password>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
