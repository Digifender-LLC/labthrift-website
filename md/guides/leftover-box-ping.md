# Check that the computer can reach the house router

Source: https://labthrift.com/guides/leftover-box-ping
Markdown: https://labthrift.com/md/guides/leftover-box-ping.md

*Notes › / › Faster network › / › Check that the computer can reach the house router*

[Notes](<./>) / [Faster network](<./#switches>) / Check that the computer can reach the house router

Written 27 Aug 2026. This is a how-to, not a product card.

# Check that the computer can reach the house router

Before you blame the switch or buy a new cable, ping the router from the computer.

Ping is a tiny "are you there?" check. The gateway (default route) is the house router's address on your network, the first hop out of the computer. You already know the computer's own number from [see the computer's address on the house network](<leftover-box-ip-addr>). This note checks the path to the router.

## Skip until SSH works

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). You can also type this at the keyboard. Prefer this look after a cable is plugged in and you know the address: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>), then [see the computer's address on the house network](<leftover-box-ip-addr>). This note assumes you can log in from the couch, or sit at the keyboard.

## What this is

A look, not a shopping trip. If ping to the router fails, fix the cable, Wi-Fi, or awake check before you buy a 2.5G switch. Start with [is the computer still on?](<leftover-box-still-on>) and [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). Don't buy a switch for a failed ping.

## Find the router number

SSH in from the couch, or sit at the keyboard, then ask:

`ip route`

Point at the `default via …` line. That via address is the gateway (the house router). It often looks like `192.168.1.1` or `10.0.0.1`.

## Ask

Ping that gateway three times. Replace GATEWAY with the via number you just saw:

`ping -c 3 GATEWAY`

Three replies with times mean the computer can reach the router. 100% loss means the path is broken: cable, sleep, or wrong network. That is [is the computer still on?](<leftover-box-still-on>), [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>), or [keep the computer on the house network](<leftover-box-house-network>).

## Ping past the router

Only after the router replies. That look is its own note: [check that the computer can reach the internet](<leftover-box-internet>).

## What next

Past the router: [check that the computer can reach the internet](<leftover-box-internet>). Cable speed: [see the cable speed](<leftover-box-link-speed>). Write down the hardware address: [see the computer's hardware address](<leftover-box-mac-addr>). Keep the number stable: [keep the computer on the same number](<leftover-box-dhcp-reservation>).

## Skip

  * Skip if SSH and the keyboard both fail. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip a new switch for a failed ping.
  * Skip forwarding port 22.
  * Skip buying a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: ip](<https://manpages.debian.org/bookworm/iproute2/ip.8.en.html>). [Debian: ping](<https://manpages.debian.org/bookworm/iputils-ping/ping.8.en.html>). Official pages only. For the address, see [see the computer's address on the house network](<leftover-box-ip-addr>). For the cable, see [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). For ping past the router, see [check that the computer can reach the internet](<leftover-box-internet>). For the cable speed, see [see the cable speed](<leftover-box-link-speed>). For the hardware address, see [see the computer's hardware address](<leftover-box-mac-addr>). For keeping the number, see [keep the computer on the same number](<leftover-box-dhcp-reservation>). For the awake check, see [is the computer still on?](<leftover-box-still-on>). For DNS after the router works, see [see which name server the computer is using](<leftover-box-dns-check>).

## Also on this topic

[See the computer's address on the house networkYou need the computer's number before you reserve DHCP or SSH from another room.](<leftover-box-ip-addr>) [Prefer a cable on the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [Check that the computer can reach the internetBefore you blame the computer or buy a mesh kit, ping a number past the house router.](<leftover-box-internet>) [See the cable speedBefore you buy a faster switch, check whether the computer is already at gigabit, or stuck at 100.](<leftover-box-link-speed>) [See the computer's hardware addressBefore you reserve the computer's number, write down the sticker-like address the router uses to recognize it.](<leftover-box-mac-addr>) [PreviousSee the computer's address on the house network](<leftover-box-ip-addr>) [NextCheck that the computer can reach the internet](<leftover-box-internet>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
