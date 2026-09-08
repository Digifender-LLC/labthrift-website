# Put the old PC on house Wi-Fi

Source: https://labthrift.com/guides/wifi-on-the-pc
Markdown: https://labthrift.com/md/guides/wifi-on-the-pc.md

*Notes › / › Getting started › / › Put the old PC on house Wi-Fi*

[Notes](<./>) / [Getting started](<./#start>) / Put the old PC on house Wi-Fi

Written 4 Sep 2026. This is a how-to, not a product card.

# Put the old PC on house Wi-Fi

Ubuntu Server on an old laptop often has no cable nearby. Join house Wi-Fi so SSH and Pi-hole can work. Skip this if ethernet already works.

Haven't installed yet? Start with [your first weekend](<first-weekend>). Have a cable port and a cable that reaches the router? Prefer [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). This page is the other case: the laptop on a shelf, no cable in reach. Join house Wi-Fi so you can SSH from the couch.


Optional: jot the Wi-Fi name the lab box uses in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip until you actually need the radio

If a cable already works, skip this note. Don't join Wi-Fi and keep a cable up on the same computer — two numbers is how people lose SSH. The opposite job, after a cable works, is [keep Wi-Fi off after a reboot](<leftover-box-wifi-off>). Don't buy a USB Wi-Fi dongle or a mesh kit tonight.

## What this is

The old PC needs a house-network number. Wi-Fi is one way to get one. The easy path is the installer network screen, while a keyboard and screen are already plugged in. After install, Ubuntu Server talks to the radio with netplan (YAML files under `/etc/netplan/`) and systemd-networkd. It does not ship NetworkManager. The text Wi-Fi menu `nmtui` is often missing until you install that package. It often isn't there.

## What you need

  * A keyboard and a screen on the computer for this job
  * The house Wi-Fi name (SSID) and password
  * Ubuntu Server or Debian, or the installer USB if you have not installed yet
  * A few minutes



You don't need a new router. You don't need a mesh kit. You don't need a USB Wi-Fi dongle on day one.

## 1\. Join on the installer (do this if you still can)

This is the first-timer path. Ubuntu Server's installer has a network screen. It tries DHCP on whatever it sees. If a cable is not plugged in, pick the wireless interface, type the house name, type the password, and let DHCP give it a number. Debian's installer does the same idea: if it sees a wireless card, it asks for the Wireless ESSID (the house name) and a WPA/WPA2 passphrase. Finish the rest of the install on that radio. Then skip to “Confirm it worked.”

If you already installed and the computer has no house number, keep going. Sit at the computer. Don't try this over a dead SSH session.

## 2\. See whether there is a radio

On Debian or Ubuntu, on the computer:

`ip -br link`

Look for a line whose name starts with `wlan` or `wlp`. That is Wi-Fi. Cable names often start with `en` or are named `eth0`. Write the radio name down. You will type it again in a minute.

No `wlan` or `wlp` line? Jump to “If there is no radio line.”

## 3\. Use nmtui only if it is already there

Ask:

`command -v nmtui`

If that prints a path, the computer has NetworkManager. Open the menu:

`sudo nmtui`

Pick Activate a connection. Pick the house Wi-Fi. Type the password. Then skip to “Confirm it worked.”

If the command prints nothing, stop. Ubuntu Server 22.04 and 24.04 usually look like this. Don't `apt install network-manager` just to get a menu — you still have no network to download it. Use netplan instead.

## 4\. Ubuntu Server: write a short Wi-Fi plan

List the files the installer already left:

`ls /etc/netplan/`

Make a new file so you are not fighting the installer's ethernet stanza:

`sudo nano /etc/netplan/10-wifi.yaml`

Paste something shaped like this. Swap the interface name from step 2. Swap `HouseSSID` for your house name. Swap the password for yours — the one below is fake. Indentation is spaces, not tabs. Netplan's default renderer on Ubuntu Server is `networkd`, not NetworkManager.
    
    
    network:
      version: 2
      renderer: networkd
      wifis:
        wlp2s0:
          dhcp4: true
          access-points:
            "HouseSSID":
              password: "example-pass"
    

Save. The house password now lives in that file, readable by root. That is how a first server keeps Wi-Fi. Don't paste it into a chat.

From the keyboard, try it with a safety net:

`sudo netplan try`

It applies the plan and waits. If the radio gets a number, press Enter to keep it. If you lose the link, wait — it rolls back when the timer ends. If `try` is missing, or you are sitting at the screen anyway:

`sudo netplan apply`

systemd-networkd does not speak Wi-Fi by itself. Ubuntu Server uses `wpasupplicant` for that. The live-server install usually already has it. If apply succeeds but the radio stays DOWN with no address, that is firmware or a typo in the interface name, not a reason to buy a dongle.

## 5\. Confirm it worked

On the computer:

`ip -br addr`

Or:

`hostname -I`

You want a house number on the radio line, usually `192.168.…` or `10.…`. Then ping the router. Find its number with `ip route` (the `default via` line) and swap GATEWAY:

`ping -c 3 GATEWAY`

Three replies mean the radio reached the house. From the couch, find that number and log in: [find it on the house network](<find-the-leftover-box>), then [SSH from the couch](<first-ssh>).

## If there is no radio line

The card may need firmware. Debian's smaller installer images are the usual trap. Don't buy a USB Wi-Fi dongle on day one. Don't buy a mesh kit. Try, in this order: a cable if a port exists, a USB-Ethernet adapter you already have, or an official ISO that includes firmware (Ubuntu live-server, or a Debian image that ships firmware). Then come back to step 1 on a fresh install.

## What this is not

This is not a reason to leave Wi-Fi on after you later plug a cable. That opposite job is [keep Wi-Fi off after a reboot](<leftover-box-wifi-off>). It is not dual-homing (Wi-Fi plus ethernet as the plan). It is not forwarding a port. It is not buying a new router so the laptop can join the house.

## What next

Write down the number: [find it on the house network](<find-the-leftover-box>). Log in from the couch: [SSH from the couch](<first-ssh>). If it is a laptop, keep it awake when the lid closes: [don't let the old laptop sleep](<leftover-box-sleep>). Check the wall brick: [see if the old laptop is actually plugged in](<leftover-box-plugged-in>). When a cable can reach, switch: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). Don't follow the Wi-Fi-off note while the radio is the only door.

## Skip

  * Skip this note if a cable already works.
  * Skip a USB Wi-Fi dongle on day one.
  * Skip a mesh kit and a new router for this.
  * Skip installing NetworkManager just to get `nmtui` when you have no network yet.
  * Skip joining Wi-Fi and a cable at the same time.
  * Skip forwarding port 22.
  * Skip this if you have not installed an OS yet — that is [your first weekend](<first-weekend>).



## Sources

[Ubuntu: install Ubuntu Server](<https://ubuntu.com/tutorials/install-ubuntu-server>) (network screen). [Debian installer: configuring the network](<https://www.debian.org/releases/stable/amd64/ch06s03.en.html>) (wireless ESSID and WPA/WPA2 passphrase). [Netplan: examples](<https://netplan.readthedocs.io/en/stable/examples/>) (home Wi-Fi and WPA Personal). [Netplan: YAML](<https://netplan.readthedocs.io/en/stable/netplan-yaml/>) (renderer defaults to networkd; Wi-Fi needs wpasupplicant). [Netplan: netplan try](<https://netplan.readthedocs.io/en/stable/netplan-try/>). [Ubuntu Server: about Netplan](<https://documentation.ubuntu.com/server/explanation/networking/about-netplan/>). [Debian: nmtui](<https://manpages.debian.org/bookworm/network-manager/nmtui.1.en.html>). [Ubuntu: nmtui](<https://manpages.ubuntu.com/manpages/noble/en/man1/nmtui.1.html>). [Debian: ip-link](<https://manpages.debian.org/bookworm/iproute2/ip-link.8.en.html>). [Debian installer: devices requiring firmware](<https://d-i.debian.org/doc/installation-guide/en.amd64/ch02s02.html>). Official pages only. For the install, see [your first weekend](<first-weekend>). For a cable, see [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>).

## Also on this topic

[Your first weekendInstall the OS, give it a name, plug it into the wall, and make sure you can reach it from the couch.](<first-weekend>) [A cable beats Wi-Fi for the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [Keep Wi-Fi off after a rebootAfter the cable works, stop Wi-Fi from coming back so the computer keeps one address. You don't need a new router.](<leftover-box-wifi-off>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [SSH from the couchType commands on the old PC from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See if the old laptop is actually plugged inBefore you trust the old laptop overnight, confirm it is drawing wall power. A dying battery is not a reason to buy a UPS.](<leftover-box-plugged-in>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousYour first weekend](<first-weekend>) [NextFind it on the house network](<find-the-leftover-box>)

---

*Labthrift Markdown mirror. HTML version linked above.*
