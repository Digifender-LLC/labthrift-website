# See the computer's address on the house network

Source: https://labthrift.com/guides/leftover-box-ip-addr
Markdown: https://labthrift.com/md/guides/leftover-box-ip-addr.md

*Notes › / › Faster network › / › See the computer's address on the house network*

[Notes](<./>) / [Faster network](<./#switches>) / See the computer's address on the house network

Written 27 Aug 2026. This is a how-to, not a product card.

# See the computer's address on the house network

You need the computer's number before you reserve DHCP or SSH from another room.

The address (IP) is the computer's number on the house network, like a house number on the street. `hostname -I` prints it in one line. You need that number before you reserve DHCP or SSH from another room.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). You can also type this at the keyboard. Prefer this look after a cable is plugged in: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). If Wi-Fi keeps waking up after a reboot, that is [keep Wi-Fi off after a reboot](<leftover-box-wifi-off>). This note assumes you can log in from the couch, or sit at the keyboard.

## What this is

A look, not a shopping trip. You need the computer's number to SSH from the couch later, to set a DHCP reservation ([keep the computer on the same number](<leftover-box-dhcp-reservation>)), or to check the computer is on the house network ([keep the computer on the house network](<leftover-box-house-network>)). Don't buy a switch for this look.

## Ask for the house number

SSH in from the couch, or sit at the keyboard, then ask:

`hostname -I`

One line of numbers. The first one that looks like 192.168.… or 10.… is usually the house address. Ignore long IPv6 strings for now unless that is all you see.

## Optional clearer print

If you want a table of plugs instead of one line:

`ip -brief addr`

Point at the ethernet line (often a name that starts with `en`, or `eth0`) with UP and an inet address. Wi-Fi lines can wait if a cable is plugged in.

## Write it down

Sticky note or phone. The next step to keep it stable is [keep the computer on the same number](<leftover-box-dhcp-reservation>). If the number keeps changing after a reboot, that reservation guide is the fix, not a new mini PC.

## What next

Path to the router: [check that the computer can reach the house router](<leftover-box-ping>). Cable speed: [see the cable speed](<leftover-box-link-speed>). Hardware address: [see the computer's hardware address](<leftover-box-mac-addr>). Same number after reboot: [keep the computer on the same number](<leftover-box-dhcp-reservation>). Cable: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>).

## Skip

  * Skip if SSH and the keyboard both fail. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip a new switch for this look.
  * Skip forwarding port 22.
  * Skip buying a NAS for an address.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: hostname](<https://manpages.debian.org/bookworm/hostname/hostname.1.en.html>). [Debian: ip](<https://manpages.debian.org/bookworm/iproute2/ip.8.en.html>). Official pages only. For the cable, see [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). For keeping the number, see [keep the computer on the same number](<leftover-box-dhcp-reservation>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Prefer a cable on the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [Keep Wi-Fi off after a rebootAfter the cable works, stop Wi-Fi from coming back so the computer keeps one address. You don't need a new router.](<leftover-box-wifi-off>) [Keep the computer on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousKeep Wi-Fi off after a reboot](<leftover-box-wifi-off>) [NextCheck that the computer can reach the house router](<leftover-box-ping>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
