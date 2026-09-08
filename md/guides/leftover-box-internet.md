# Check that the computer can reach the internet

Source: https://labthrift.com/guides/leftover-box-internet
Markdown: https://labthrift.com/md/guides/leftover-box-internet.md

*Notes › / › Faster network › / › Check that the computer can reach the internet*

[Notes](<./>) / [Faster network](<./#switches>) / Check that the computer can reach the internet

Written 27 Aug 2026. This is a how-to, not a product card.

# Check that the computer can reach the internet

Before you blame the computer or buy a mesh kit, ping a number past the house router.

You already reached the house router in [check that the computer can reach the house router](<leftover-box-ping>). This note asks a public number, not a website name. `1.1.1.1` is Cloudflare's public address. You are not switching DNS. You are asking if packets leave the house. A site name is a different look: [look up a site name from the computer](<leftover-box-name-lookup>).

## Skip until the router replies

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). You can also type this at the keyboard. If ping to the router already fails, fix that first: [check that the computer can reach the house router](<leftover-box-ping>). Prefer this look after a cable is plugged in: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). This note assumes you can log in from the couch, or sit at the keyboard, and the router already replies.

## What this is

A look, not a shopping trip. If the computer can ping the router but cannot ping a number past it, that is house internet, the ISP, or the router WAN. Not a new switch. Not a mesh kit. Don't buy Omada, UniFi, or a Protectli tonight.

## Ask a public number

SSH in from the couch, or sit at the keyboard, then ask:

`ping -c 3 1.1.1.1`

Three replies with times mean packets leave the house. 100% loss, with the router still answering, means the computer is fine and the path past the router is not. Check the house phones. If they are also dead, that is the ISP or the modem, not a buy.

## Optional second public number

If `1.1.1.1` is silent, try Google's public address:

`ping -c 3 8.8.8.8`

Some networks refuse ping to one of those numbers and still browse fine. If both are silent, but a phone on the same house network still loads sites, ICMP (the ping packet) may be blocked. That is not a dead computer. Try a name next: [look up a site name from the computer](<leftover-box-name-lookup>). Don't buy a mesh kit for a blocked ping.

## What the look means

Router works, public number works, names fail: that is DNS. See [see which name server the computer is using](<leftover-box-dns-check>), then [look up a site name from the computer](<leftover-box-name-lookup>). Router works, public number fails, phones are also dead: wait on the ISP. Don't buy a 2.5G switch. Router ping already failed: go back to [check that the computer can reach the house router](<leftover-box-ping>). Ads came back while names still work: that is [when ads come back, check the ad block](<leftover-box-ad-block-check>).

## What next

Path to the router: [check that the computer can reach the house router](<leftover-box-ping>). Cable speed: [see the cable speed](<leftover-box-link-speed>). Names: [look up a site name from the computer](<leftover-box-name-lookup>). Which name server: [see which name server the computer is using](<leftover-box-dns-check>).

## Skip

  * Skip if the router ping already fails. That is [check that the computer can reach the house router](<leftover-box-ping>).
  * Skip a mesh kit for a failed public ping.
  * Skip a new switch for this look.
  * Skip forwarding port 22.
  * Skip buying a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: ping](<https://manpages.debian.org/bookworm/iputils-ping/ping.8.en.html>). [Ubuntu: ping](<https://manpages.ubuntu.com/manpages/noble/en/man8/ping.8.html>). [Cloudflare: 1.1.1.1](<https://developers.cloudflare.com/1.1.1.1/>). Official pages only. For the path to the router, see [check that the computer can reach the house router](<leftover-box-ping>). For the cable, see [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). For a name lookup, see [look up a site name from the computer](<leftover-box-name-lookup>). For which name server, see [see which name server the computer is using](<leftover-box-dns-check>). For the ads check, see [when ads come back, check the ad block](<leftover-box-ad-block-check>). For a later faster switch, see [a faster switch for a first home lab](<2-5g-switch>).

## Also on this topic

[Check that the computer can reach the house routerBefore you blame the switch or buy a new cable, ping the router from the computer.](<leftover-box-ping>) [Prefer a cable on the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [Look up a site name from the computerWhen a website name fails, try resolving it from the computer before you buy a mesh kit.](<leftover-box-name-lookup>) [See which name server the computer is usingWhen names fail or ads come back, check which DNS the computer asks before you buy a mesh kit.](<leftover-box-dns-check>) [See the cable speedBefore you buy a faster switch, check whether the computer is already at gigabit, or stuck at 100.](<leftover-box-link-speed>) [PreviousCheck that the computer can reach the house router](<leftover-box-ping>) [NextSee the cable speed](<leftover-box-link-speed>)

---

*Labthrift Markdown mirror. HTML version linked above.*
