# See the cable speed

Source: https://labthrift.com/guides/leftover-box-link-speed
Markdown: https://labthrift.com/md/guides/leftover-box-link-speed.md

*Notes › / › Faster network › / › See the cable speed*

[Notes](<./>) / [Faster network](<./#switches>) / See the cable speed

Written 27 Aug 2026. This is a how-to, not a product card.

# See the cable speed

Before you buy a faster switch, check whether the computer is already at gigabit, or stuck at 100.

Link speed is how fast this cable is actually running, in megabits per second. Ping can still work at 100. File copies crawl. You already plugged a cable in [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>) and reached the router in [check that the computer can reach the house router](<leftover-box-ping>). Packets past the router are [check that the computer can reach the internet](<leftover-box-internet>). This note reads the speed on that plug.

## Skip until SSH works

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). You can also type this at the keyboard. Prefer this look after a cable is plugged in and ping to the router works: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>), then [check that the computer can reach the house router](<leftover-box-ping>). This note assumes you can log in from the couch, or sit at the keyboard.

## What this is

A look, not a shopping trip. 1000 is gigabit, the speed old laptops and OptiPlex boxes usually do. 100 is ten times slower: a bad cable, a cheap 100-only port, or an old laptop NIC. 2500 means a faster 2.5G port already. Don't buy a 2.5G switch for a computer stuck at 100. Try another cable from the drawer first.

## Find the cable name

SSH in from the couch, or sit at the keyboard, then ask:

`ip -br link`

Skip the `lo` line. That is the loopback line. The computer uses it internally. Point at the ethernet line that is UP (often a name that starts with `en`, or `eth0`). Copy that name. Wi-Fi lines can wait if a cable is plugged in.

## Ask for the speed

Replace NAME with the cable name you just copied:

`cat /sys/class/net/NAME/speed`

One number comes back. That number is megabits per second.

  * `1000` is gigabit. Fine for a computer. File copies that still crawl are a later switch note: [a faster switch for a first home lab](<2-5g-switch>).
  * `100` is the slow trap. Swap the cable from the drawer, try another LAN port on the router, then ask again. Don't buy 2.5G for this.
  * `2500` means this computer already has a faster port. You don't need a new switch for this computer.
  * `-1`, or the words Invalid argument, means that name is down. Pick the UP cable line from `ip -br link`.



## Optional longer print

If `ethtool` is already installed, the same speed is on a Speed line:

`ethtool NAME`

Skip installing extra packages tonight. The `cat` look is enough.

## What next

Write down the hardware address: [see the computer's hardware address](<leftover-box-mac-addr>). Keep the number stable: [keep the computer on the same number](<leftover-box-dhcp-reservation>). Path to the router: [check that the computer can reach the house router](<leftover-box-ping>). Past the router: [check that the computer can reach the internet](<leftover-box-internet>).

## Skip

  * Skip if SSH and the keyboard both fail. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip a new switch for a computer stuck at 100. Try another cable first.
  * Skip buying Cat6 because Cat5 was in the drawer. The extra-fast ports can wait.
  * Skip forwarding port 22.
  * Skip buying a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: ip-link](<https://manpages.debian.org/bookworm/iproute2/ip-link.8.en.html>). [Linux: sysfs class net (speed)](<https://www.kernel.org/doc/Documentation/ABI/testing/sysfs-class-net>). Official pages only. For the cable, see [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). For the path to the router, see [check that the computer can reach the house router](<leftover-box-ping>). For ping past the router, see [check that the computer can reach the internet](<leftover-box-internet>). For the hardware address, see [see the computer's hardware address](<leftover-box-mac-addr>). For keeping the number, see [keep the computer on the same number](<leftover-box-dhcp-reservation>). For a later faster switch, see [a faster switch for a first home lab](<2-5g-switch>).

## Also on this topic

[Check that the computer can reach the internetBefore you blame the computer or buy a mesh kit, ping a number past the house router.](<leftover-box-internet>) [Check that the computer can reach the house routerBefore you blame the switch or buy a new cable, ping the router from the computer.](<leftover-box-ping>) [Prefer a cable on the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [See the computer's hardware addressBefore you reserve the computer's number, write down the sticker-like address the router uses to recognize it.](<leftover-box-mac-addr>) [Keep the computer on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [PreviousCheck that the computer can reach the internet](<leftover-box-internet>) [NextSee the computer's hardware address](<leftover-box-mac-addr>)

---

*Labthrift Markdown mirror. HTML version linked above.*
