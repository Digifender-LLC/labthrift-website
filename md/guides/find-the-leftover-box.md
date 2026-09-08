# Find it on the house network

Source: https://labthrift.com/guides/find-the-leftover-box
Markdown: https://labthrift.com/md/guides/find-the-leftover-box.md

*Notes › / › Getting started › / › Find it on the house network*

[Notes](<./>) / [Getting started](<./#start>) / Find it on the house network

[Getting started](<./#start>) · **4 of 9**

Written 24 Aug 2026. This is a how-to, not a product card.

# Find it on the house network

The computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.

You installed the OS. The computer is on. To type commands from the couch you need its number on the house network. That number is the address. The install is [your first weekend](<first-weekend>). Next is [SSH from the couch](<first-ssh>). This page is for when you cannot find that number.

## What this is

Every gadget on Wi-Fi or ethernet has a number. This computer has one too. That number is the address, sometimes called an IP. Think of it as a house number on the street. SSH uses that number. It isn't the password. It isn't a website.

## Two ways

If a screen is still plugged in, stay at the computer. That is the default. If it is already headless in a closet, use the router device list.

## 1\. On the computer

Screen still plugged in. Log in locally, the way you did at install. Then run:

`hostname -I`

The first number that looks like 192.168.something or 10.something is the one. Write it down.

## 2\. On the router

Open a browser on your normal computer. Try the address printed on the router sticker, often `192.168.1.1` or `192.168.0.1`. Log in. That password is on the sticker, or the one you set. Find the device list, client list, or DHCP list. Look for the name you gave it: lab, closet, office, or ubuntu. The number next to it is the address.

## Ethernet vs Wi-Fi

Wi-Fi is fine. Plug a cable if the computer has a port. It drops fewer connections overnight. If both are connected you may see two numbers. Use the cable one if you plugged a cable. Need to join house Wi-Fi first? [Put the old PC on house Wi-Fi](<wifi-on-the-pc>). Prefer a cable when a port and a cable exist: [a cable beats Wi-Fi for the old PC](<leftover-box-ethernet>).

## The number can change

Write the number down. Try SSH. If it fails tomorrow, look again. The number can change after a reboot. A DHCP reservation tells the router to always give this computer the same number. That how-to is [keep the computer on the same number](<leftover-box-dhcp-reservation>). Brand menus: [keep the computer on the same address on common routers](<common-router-reservation>).

You don't need a static IP tutorial, a VLAN, or a new UniFi gateway for this.

## What next

SSH from the couch, with that number. That is [SSH from the couch](<first-ssh>). If that connect fails, [when SSH won't connect](<when-ssh-wont-connect>).


Optional: save the IP or name once you find it in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip

  * Skip buying a new router.
  * Skip UniFi for "visibility."
  * Skip scanning the network with Angry IP Scanner as the first move.
  * Skip exposing this computer to the internet.
  * Skip changing LAN subnets on day one.



## Sources

Router login is on the sticker. `hostname -I` is on Debian and Ubuntu. [Debian: hostname man page](<https://manpages.debian.org/bookworm/hostname/hostname.1.en.html>). [Ubuntu: hostname man page](<https://manpages.ubuntu.com/manpages/noble/man1/hostname.1.html>). Official pages only. For the install, see [your first weekend](<first-weekend>). Next job: [SSH from the couch](<first-ssh>). A DHCP reservation is [keep the computer on the same number](<leftover-box-dhcp-reservation>).

## Also on this topic

[Your first weekendInstall the OS, name it, and reach it from the couch.](<first-weekend>) [Put the old PC on house Wi-FiUbuntu Server on an old laptop often has no cable nearby. Join house Wi-Fi so SSH and Pi-hole can work. Skip this if ethernet already works.](<wifi-on-the-pc>) [SSH from the couchType commands on it from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [SSH from a phoneType commands on the old PC from an iPhone or Android on house Wi-Fi. Password login first. Don't open SSH to the internet.](<ssh-from-phone>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousYour first weekend](<first-weekend>) [NextSSH from the couch](<first-ssh>)

---

*Labthrift Markdown mirror. HTML version linked above.*
