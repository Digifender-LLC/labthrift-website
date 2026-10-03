# Keep Wi-Fi off after a reboot

Source: https://labthrift.com/guides/leftover-box-wifi-off
Markdown: https://labthrift.com/md/guides/leftover-box-wifi-off.md

*Notes › / › Faster network › / › Keep Wi-Fi off after a reboot*

[Notes](<./>) / [Faster network](<./#switches>) / Keep Wi-Fi off after a reboot

Written 28 Aug 2026. This is a how-to, not a product card.

# Keep Wi-Fi off after a reboot

After the cable works, stop Wi-Fi from coming back so the computer keeps one address. You don't need a new router.

You plugged the cable. SSH from the couch worked. Then the computer rebooted for weekly fixes, and Wi-Fi woke up again. Now the computer has two numbers: one on the cable, one on the radio. SSH hangs. Pi-hole is flaky. That is not a broken router. The computer is answering on two doors. You are not buying a mesh kit for this.

## Skip until the cable works

If the computer is still only on house Wi-Fi, stop. Plug a cable first: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). That note also turns the radio off for this session, as a check. This note is the next step: make that stay off after a reboot. Never joined house Wi-Fi, and there is no cable? That walk is [put the old PC on house Wi-Fi](<wifi-on-the-pc>). If you cannot log in from the couch, that is [SSH from the couch](<first-ssh>). Skip this note if it is a desktop or OptiPlex with no Wi-Fi radio.

## What this is

The one-session off in [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>) is `sudo ip link set wlan0 down`. That lasts until the computer reboots. After a reboot, Wi-Fi often comes back by itself. Two numbers is how people lose SSH, and how a DHCP reservation on the cable address looks like it failed. This look asks Wi-Fi to stay off.

## See if Wi-Fi is even there

SSH in from the couch, then run:

`ip -br link`

Look for a line whose name starts with `wlan` or `wlp`. That is Wi-Fi. The cable line often starts with `en` or is named `eth0`. If you see no radio line, you are done. An old desktop can skip the rest.

## Turn it off so it stays off

Ask whether the computer has NetworkManager:

`command -v nmcli`

If that prints a path, turn Wi-Fi off this way. It usually survives a reboot:

`nmcli radio wifi off`

Then confirm:

`nmcli radio`

You want the WIFI line to say `disabled` or `off`.

If `nmcli` is missing, use rfkill instead. rfkill is the radio switch. On Debian and Ubuntu, that block usually survives a reboot:

`sudo rfkill block wifi`

Then confirm:

`rfkill`

The Wi-Fi (wlan) line should say Soft blocked. If the computer only understands the older list command:

`rfkill list`

## Confirm the cable is the only door

Ask again:

`ip -br link`

The radio line should say DOWN. The cable line should stay UP. Then check the computer still has one house number:

`hostname -I`

You want one 192.168.… or 10.… address, not two. If SSH from the couch still works after that, you are done. Don't reboot just to prove it tonight. The next reboot (weekly fixes, or [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>)) is the real test. After that reboot, run `ip -br link` again. The radio should still be DOWN.

## If Wi-Fi comes back anyway

Some old laptops turn the radio back on after a reboot. Try the other command from the pair above (`nmcli` if you used rfkill, or rfkill if you used `nmcli`). Then check again. Don't blacklist kernel modules tonight. Don't buy a new router because the computer grew a second number.

## What next

Write down the computer's one remaining number: [see the computer's address on the house network](<leftover-box-ip-addr>). Then keep that number: [keep the computer on the same number](<leftover-box-dhcp-reservation>). Cable speed stays [see the cable speed](<leftover-box-link-speed>). Skip a mesh kit and a new router for this look.

## Skip

  * Skip this note if the computer has no Wi-Fi radio. An old desktop or OptiPlex often does not.
  * Skip if the computer is still only on house Wi-Fi. Plug a cable first: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>).
  * Skip if SSH from the couch does not work yet. That is [SSH from the couch](<first-ssh>).
  * Skip buying a mesh kit or a new router because SSH hops between two numbers.
  * Skip blacklisting kernel modules tonight.
  * Skip opening SSH to the internet.



## Sources

[Debian: nmcli](<https://manpages.debian.org/bookworm/network-manager/nmcli.1.en.html>). [Ubuntu: nmcli](<https://manpages.ubuntu.com/manpages/noble/en/man1/nmcli.1.html>). [Debian: rfkill](<https://manpages.debian.org/bookworm/rfkill/rfkill.8.en.html>) (`block wifi`). [Ubuntu: rfkill](<https://manpages.ubuntu.com/manpages/noble/en/man8/rfkill.8.html>). [Debian: ip-link](<https://manpages.debian.org/bookworm/iproute2/ip-link.8.en.html>). Official pages only. For the cable, see [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). For the house number, see [see the computer's address on the house network](<leftover-box-ip-addr>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Put the old PC on house Wi-FiUbuntu Server on an old laptop often has no cable nearby. Join house Wi-Fi so SSH and Pi-hole can work. Skip this if ethernet already works.](<wifi-on-the-pc>) [Prefer a cable on the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [See the computer's address on the house networkYou need the computer's number before you reserve DHCP or SSH from another room.](<leftover-box-ip-addr>) [Keep the computer on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [PreviousPrefer a cable on the computer](<leftover-box-ethernet>) [NextSee the computer's address on the house network](<leftover-box-ip-addr>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
