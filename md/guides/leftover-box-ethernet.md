# A cable beats Wi-Fi for the computer

Source: https://labthrift.com/guides/leftover-box-ethernet
Markdown: https://labthrift.com/md/guides/leftover-box-ethernet.md

*Notes › / › Getting started › / › A cable beats Wi-Fi for the computer*

[Notes](<./>) / [Getting started](<./#start>) / A cable beats Wi-Fi for the computer

Written 24 Aug 2026. This is a how-to, not a product card.

# A cable beats Wi-Fi for the computer

Once the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.

Real work means SSH from the couch, or Pi-hole answering names for the house. Ethernet is the cable with the click. Wi-Fi is the radio. An old laptop often stays on the house radio. That is fine for a first install. It is a poor fit once it has a job.

## Why a cable

Wi-Fi drops when the laptop lid is shut, when it roams to another access point, or when the radio sleeps to save power. A cable stays up. Pi-hole is house DNS, the phone book that turns names into numbers. If the computer vanishes, phones stop loading pages. SSH dies too. It is not off. The radio just went quiet.

## Skip this if the computer is already on a cable

If the computer is already plugged into the router, or into a switch, with a cable, skip this note. A desktop, OptiPlex, or mini PC often already is. You don't need to unplug a working cable to read this. No ethernet port, or no cable that reaches? Join house Wi-Fi instead: [put the old PC on house Wi-Fi](<wifi-on-the-pc>).

## What you need

Any Ethernet cable. Cat5 is fine. Plug one end into the computer. Plug the other end into a LAN port on the house router, not the WAN or internet port. LAN is a house port. WAN is the port that faces the street. Don't buy a new switch this weekend. The extra-fast ports can wait. Those later notes live under [Faster network](<./#switches>), starting with [a faster switch for a first home lab](<2-5g-switch>).

## How to tell it worked

On Debian or Ubuntu, on the computer, look at the plugs:

`ip -br link`

Or look at the route it is using:

`ip route`

Look for an `eth0` or `enp` address, not only `wlan0`. The cable name is often `eth0`, or it starts with `enp`. The radio is often `wlan0`, or it starts with `wlp`. The cable line should say UP. The route should go out that cable name.

Then turn Wi-Fi off as a check. Use the radio name you just saw. If it is `wlan0`:

`sudo ip link set wlan0 down`

[SSH from the couch](<first-ssh>) should still work, with the number from [find the computer on the house network](<find-the-leftover-box>). If SSH dies, the cable did not take. Check the click in both jacks, and that you used a LAN port, not WAN.

Bring the radio back if you still need it:

`sudo ip link set wlan0 up`

If the radio is not named `wlan0`, swap in the name from `ip -br link`.

## Leave Wi-Fi off

Once the cable works, leave Wi-Fi off. The computer then has one address. Two numbers, one on the cable and one on the radio, is how people lose it after a reboot. To make that survive a reboot, see [keep Wi-Fi off after a reboot](<leftover-box-wifi-off>). [Find the computer on the house network](<find-the-leftover-box>) is easier with one number.

## What next

If the computer is a laptop, keep it awake when the lid closes. That is [don't let the old laptop sleep](<leftover-box-sleep>). If Pi-hole is not up yet, that is [the first useful thing on the computer](<first-useful-service>). Once a week, [keep the computer updated](<leftover-box-updates>). Then keep Wi-Fi off after a reboot: [keep Wi-Fi off after a reboot](<leftover-box-wifi-off>). Then write down the computer's number: [see the computer's address on the house network](<leftover-box-ip-addr>). Then check the cable speed: [see the cable speed](<leftover-box-link-speed>). Don't buy a NAS. Don't buy a 2.5G switch for this.

## Skip

  * Skip this note if the computer is already on a cable.
  * Skip this note if there is no port and no cable — that is [put the old PC on house Wi-Fi](<wifi-on-the-pc>).
  * Skip a new switch, a mesh kit, and a NAS this weekend.
  * Skip buying Cat6 because Cat5 was in the drawer. The extra-fast ports can wait.



## Sources

[Debian: ip-link](<https://manpages.debian.org/bookworm/iproute2/ip-link.8.en.html>). [Ubuntu: ip-link](<https://manpages.ubuntu.com/manpages/noble/en/man8/ip-link.8.html>). [Debian: ip-route](<https://manpages.debian.org/bookworm/iproute2/ip-route.8.en.html>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the address, see [find the computer on the house network](<find-the-leftover-box>). For later, faster ports, see [Faster network](<./#switches>).

## Also on this topic

[Put the old PC on house Wi-FiUbuntu Server on an old laptop often has no cable nearby. Join house Wi-Fi so SSH and Pi-hole can work. Skip this if ethernet already works.](<wifi-on-the-pc>) [Keep Wi-Fi off after a rebootAfter the cable works, stop Wi-Fi from coming back so the computer keeps one address. You don't need a new router.](<leftover-box-wifi-off>) [See if the old laptop is actually plugged inBefore you trust the old laptop overnight, confirm it is drawing wall power. A dying battery is not a reason to buy a UPS.](<leftover-box-plugged-in>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [The first useful thing on the computerPut a house-wide ad block on the computer. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousFind the computer on the house network](<find-the-leftover-box>) [NextKeep Wi-Fi off after a reboot](<leftover-box-wifi-off>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
