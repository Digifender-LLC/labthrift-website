# Keep the computer on the same number

Source: https://labthrift.com/guides/leftover-box-dhcp-reservation
Markdown: https://labthrift.com/md/guides/leftover-box-dhcp-reservation.md

*Notes › / › Faster network › / › Keep the computer on the same number*

[Notes](<./>) / [Faster network](<./#switches>) / Keep the computer on the same number

Written 25 Aug 2026. This is a how-to, not a product card.

# Keep the computer on the same number

SSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.

You already found the computer once. That was [find the computer on the house network](<find-the-leftover-box>). Get the number first if you don't have it: [see the computer's address on the house network](<leftover-box-ip-addr>). Confirm the path to the router: [check that the computer can reach the house router](<leftover-box-ping>). Write down the sticker: [see the computer's hardware address](<leftover-box-mac-addr>). Then you SSHed with that number. After a reboot, the number may move. This note is the short generic pass. Brand menus: [keep the computer on the same address on common routers](<common-router-reservation>) [Give the computer a fixed address when the router won'tNest or an ISP gateway won't reserve DHCP. Set one stable number on Ubuntu Server so SSH and Pi-hole keep the same address after a reboot. You don't need a new router.](<fixed-address-on-pc>) .

## Why the number moves

The house router hands out addresses for a while, then may pick a new one when the computer comes back. You reboot after updates, or the power blips, and suddenly [SSH from the couch](<first-ssh>) fails with the number you wrote down. [Find the computer](<find-the-leftover-box>) works again, but you should not have to hunt every morning. Pi-hole is the same story: the house looks for it at the old number and ads come back.

## What a DHCP reservation is

DHCP is how the router hands out numbers on the house network. A reservation means this computer always gets the same number. It still asks the router for an address. The router just always answers with the one you chose. You do the work on the router, not by typing a static address into Linux on the computer. Router menus call it Reserve, Always use this IP, or Static lease. Same idea.

## Do it on the house router

Open a browser on your normal computer. Log into the house router with the address on the sticker, often `192.168.1.1` or `192.168.0.1`. That password is on the sticker, or the one you set. Find the client list, device list, or DHCP list. That is the same list from [find the computer on the house network](<find-the-leftover-box>).

Find the computer by name, by the number you already use for SSH, or by the hardware address from [see the computer's hardware address](<leftover-box-mac-addr>). Choose Reserve, Always use this IP, or Static lease. Keep the number you already use. Don't invent a new one unless the old one is already taken. Save.

Then reboot the computer, or wait for the lease to renew. Reboot lives on [shut down the computer without yanking the plug](<leftover-box-shutdown>). When it is back, SSH again with that same number.

## Check

From another computer on the house network, knock three times with the known number:

`ping -c 3 192.168.1.50`

Swap in your real number. Then SSH the way [SSH from the couch](<first-ssh>) taught you. If ping fails, see [is the computer still on?](<leftover-box-still-on>) before you touch the router again.

## What next

If Pi-hole is not up yet, that is [the first useful thing on the computer](<first-useful-service>). If Pi-hole is already up, [point the house at the ad block](<leftover-box-router-dns>) with that same address. Brand DNS menus: [point common home routers at Pi-hole](<common-router-dns>). If password SSH has been boring for a week, [log in with a key, not the password every time](<leftover-box-ssh-keys>). If the short name is still ugly, [give the computer a name that sticks](<leftover-box-hostname>). If it is still on Wi-Fi, plug a cable: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). Don't buy a NAS for this.

## Skip

  * Skip this note if SSH already works every day with the same number, or if the reservation is already set.
  * Skip typing a static IP into Linux on the computer for a first pass. The reservation on the router is enough.
  * Skip a new router.
  * Skip buying a Pi-hole just for this.
  * Skip a managed switch for this.



## Sources

Router UIs differ, so stay on the sticker login and the client or DHCP list. For the hardware address, see [see the computer's hardware address](<leftover-box-mac-addr>). For the address hunt, see [find the computer on the house network](<find-the-leftover-box>). For the login, see [SSH from the couch](<first-ssh>). For Pi-hole later, see [the first useful thing on the computer](<first-useful-service>).

## Also on this topic

[Keep the computer on the same address on common routersWhere to reserve DHCP on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so SSH and Pi-hole keep the same number after a reboot. You don't need a new router.](<common-router-reservation>) [See the computer's hardware addressBefore you reserve the computer's number, write down the sticker-like address the router uses to recognize it.](<leftover-box-mac-addr>) [A cable beats Wi-Fi for the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousSee the computer's hardware address](<leftover-box-mac-addr>) [NextChange the login password](<leftover-box-change-password>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
