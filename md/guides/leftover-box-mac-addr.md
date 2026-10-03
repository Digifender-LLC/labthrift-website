# See the computer's hardware address

Source: https://labthrift.com/guides/leftover-box-mac-addr
Markdown: https://labthrift.com/md/guides/leftover-box-mac-addr.md

*Notes › / › Faster network › / › See the computer's hardware address*

[Notes](<./>) / [Faster network](<./#switches>) / See the computer's hardware address

Written 27 Aug 2026. This is a how-to, not a product card.

# See the computer's hardware address

Before you reserve the computer's number, write down the sticker-like address the router uses to recognize it.

The hardware address (MAC) is a sticker-like number on the network plug. It stays put when the house number (IP) moves. The router uses it to pick this computer out of the client list. You already know the computer's house number from [see the computer's address on the house network](<leftover-box-ip-addr>). This note writes down the sticker so [keep the computer on the same number](<leftover-box-dhcp-reservation>) is easy.

## Skip until SSH works

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). You can also type this at the keyboard. Prefer this look after a cable is plugged in, ping to the router works, and you know the cable speed: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>), then [check that the computer can reach the house router](<leftover-box-ping>), then [see the cable speed](<leftover-box-link-speed>). This note assumes you can log in from the couch, or sit at the keyboard.

## What this is

A look, not a shopping trip. You need this sticker to reserve the computer's number on the house router. Don't buy a switch for a hardware address. The same command already told you the cable was UP in [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). This time, copy the six pairs.

## Ask for the sticker

SSH in from the couch, or sit at the keyboard, then ask:

`ip -br link`

Skip the `lo` line. That is the loopback line. The computer uses it internally. Point at the ethernet line that is UP (often a name that starts with `en`, or `eth0`). The six pairs with colons are the hardware address. Copy that one. Wi-Fi lines can wait if a cable is plugged in.

## Optional longer print

If you want the longer table:

`ip link show`

Point at the same UP ethernet name. The `link/ether` line is the same sticker. Keep this light. Don't change the address tonight.

## Write it down

Sticky note or phone, next to the house number from [see the computer's address on the house network](<leftover-box-ip-addr>). The next step is [keep the computer on the same number](<leftover-box-dhcp-reservation>). Match this sticker on the router client list so the reservation sticks to this computer, not a phone that borrowed the old number.

## What next

Keep the number stable: [keep the computer on the same number](<leftover-box-dhcp-reservation>). Cable speed: [see the cable speed](<leftover-box-link-speed>). Path to the router: [check that the computer can reach the house router](<leftover-box-ping>). Cable: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>).

## Skip

  * Skip if SSH and the keyboard both fail. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip a new switch for this look.
  * Skip typing a static IP into Linux on the computer. The reservation on the router is enough.
  * Skip forwarding port 22.
  * Skip buying a NAS for a sticker.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: ip-link](<https://manpages.debian.org/bookworm/iproute2/ip-link.8.en.html>). Official pages only. For the cable, see [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). For the house number, see [see the computer's address on the house network](<leftover-box-ip-addr>). For the cable speed, see [see the cable speed](<leftover-box-link-speed>). For the path to the router, see [check that the computer can reach the house router](<leftover-box-ping>). For keeping the number, see [keep the computer on the same number](<leftover-box-dhcp-reservation>).

## Also on this topic

[Wake the computer from the house networkSoft-off is fine overnight. Wake the old PC from a laptop or phone on the house network so SSH and Pi-hole come back. You don't need a smart plug for this.](<wake-on-lan>) [See the cable speedBefore you buy a faster switch, check whether the computer is already at gigabit, or stuck at 100.](<leftover-box-link-speed>) [Check that the computer can reach the house routerBefore you blame the switch or buy a new cable, ping the router from the computer.](<leftover-box-ping>) [See the computer's address on the house networkYou need the computer's number before you reserve DHCP or SSH from another room.](<leftover-box-ip-addr>) [Prefer a cable on the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [PreviousSee the cable speed](<leftover-box-link-speed>) [NextKeep the computer on the same number](<leftover-box-dhcp-reservation>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
