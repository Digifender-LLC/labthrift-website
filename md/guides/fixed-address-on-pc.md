# Give the computer a fixed address when the router won't

Source: https://labthrift.com/guides/fixed-address-on-pc
Markdown: https://labthrift.com/md/guides/fixed-address-on-pc.md

*Notes › / › Getting started › / › Give the computer a fixed address when the router won't*

[Notes](<./>) / [Getting started](<./#start>) / Give the computer a fixed address when the router won't

Written 4 Sep 2026. This is a how-to, not a product card.

# Give the computer a fixed address when the router won't

Nest or an ISP gateway won't reserve DHCP. Set one stable number on Ubuntu Server so SSH and Pi-hole keep the same address after a reboot. You don't need a new router.

Prefer a reservation on the router when it offers one: [keep the computer on the same address on common routers](<common-router-reservation>). Short generic pass: [keep it on the same number](<leftover-box-dhcp-reservation>). This page is the fallback when Nest, Google Wifi, or the ISP combo box has no clean reserve menu. Need the current number first? [Find it on the house network](<find-the-leftover-box>).

## Skip until the router path is blocked

If TP-Link, ASUS, eero, or Netgear already has Address Reservation / IP Binding, use that and leave Linux on automatic DHCP. Stop here. Only continue when you confirmed the gateway will not stick an address to this computer after a reboot.

## What this is

A fixed address means the computer stops asking the router for a random number. You type the address, the gateway, and the DNS it should use. SSH keeps the same target. Pi-hole keeps the same target. You are not opening a port to the internet.

## What you need

  * SSH or a keyboard on the computer (Debian or Ubuntu Server)
  * The address it already uses today (example `192.168.1.50`)
  * The router / gateway address (example `192.168.1.1`)
  * The ethernet interface name (often `enp1s0` or `eth0`)
  * About ten minutes, and a second device already logged in if you can — a bad edit can drop SSH until you fix it at the screen



Keep the number the computer already has. Don't invent a new one unless that number is already taken by another device.

## 1\. Write down what works today

On the computer:

`hostname -I`

`ip -br link`

`ip route | head`

From `hostname -I`, take the house address (usually starts with `192.168.` or `10.`). From `ip -br link`, take the cable interface that shows UP — not `lo`, not a Wi-Fi name if you already moved to ethernet. From the route line that says `default via`, take the gateway. Prefix is almost always `/24` on a house network. If you are unsure, stay on the address DHCP already gave you.

## 2\. Back up the netplan file (Ubuntu Server)

Ubuntu Server stores the network plan under `/etc/netplan/`. List it:

`ls /etc/netplan/`

Copy the existing file before you edit. Example name `00-installer-config.yaml`:

`sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak`

Open it:

`sudo nano /etc/netplan/00-installer-config.yaml`

Debian without netplan is different — see the short note below. Don't mix a fixed address on Linux with a conflicting reservation on the router.

## 3\. Put a fixed address in the plan

Replace the ethernet stanza with something shaped like this. Swap the interface name, address, and gateway for yours. Indentation matters in YAML — use spaces, not tabs.
    
    
    network:
      version: 2
      ethernets:
        enp1s0:
          dhcp4: false
          addresses:
            - 192.168.1.50/24
          routes:
            - to: default
              via: 192.168.1.1
          nameservers:
            addresses:
              - 192.168.1.1
    

Use the interface from step 1, not a guessed `eth0`. DNS on this first pass can be the router. If this computer already runs Pi-hole, prefer `127.0.0.1` for nameservers on the Pi-hole host itself so it can still resolve while it serves the house. Haven't installed Pi-hole yet? That is [the first useful thing](<first-useful-service>).

## 4\. Try it safely, then keep it

From a keyboard on the computer when you can:

`sudo netplan try`

It applies the plan, then waits. If SSH from the couch still works with the same address, press Enter to keep it. If you lose the link, wait — it rolls back when the timer ends. If `try` is missing on a very old box:

`sudo netplan apply`

Only use `apply` when you can reach a screen if the address goes wrong.

## 5\. Check from the couch

On the computer:

`hostname -I`

`ping -c 3 192.168.1.1`

Swap in your gateway. Then from your laptop, SSH to the same number you wrote down. Prefer a cable for this computer: [a cable beats Wi-Fi for the old PC](<leftover-box-ethernet>). After a reboot, confirm the number did not wander: [find it on the house network](<find-the-leftover-box>).

## Debian without netplan

Some Debian installs still use `/etc/network/interfaces` instead of netplan. The idea is the same: turn off DHCP on that interface, set address, netmask, gateway. Example shape:
    
    
    auto enp1s0
    iface enp1s0 inet static
        address 192.168.1.50
        netmask 255.255.255.0
        gateway 192.168.1.1
        dns-nameservers 192.168.1.1
    

Then `sudo systemctl restart networking`, or reboot once with a screen attached. If your Debian box uses NetworkManager, set a manual IPv4 profile in `nmtui` instead of editing interfaces by hand.

## If SSH dies after apply

Plug in a keyboard and screen. Restore the backup:

`sudo cp /etc/netplan/00-installer-config.yaml.bak /etc/netplan/00-installer-config.yaml`

`sudo netplan apply`

Check the interface name and the `/24` prefix. A typo in the gateway is the usual way to keep a local address but lose the internet. Wrong interface name leaves the cable on DHCP while you edited a ghost name.

## What this is not

This is not a reason to buy a new router on day one. It is not forwarding port 22. It is not a VPN. It is not typing a fixed address when the router already reserves cleanly. Prefer the router reservation when that menu exists.

## What next

Point the house at Pi-hole when the router allows it: [point common home routers at Pi-hole](<common-router-dns>). Nest or ISP gateway still hides LAN DNS? Set one device: [point a phone or laptop at Pi-hole when the router won't](<manual-dns-on-devices>). Pi-hole not installed yet: [the first useful thing](<first-useful-service>). SSH still fussy: [SSH from the couch](<first-ssh>).

## Skip

  * Skip this if the router already reserves the address cleanly.
  * Skip inventing a new IP when the current one still works.
  * Skip setting a fixed address and a conflicting router reservation at the same time.
  * Skip forwarding port 22 on the ISP box.
  * Skip buying mesh “so reservation works.”



## Sources

[Netplan documentation](<https://netplan.readthedocs.io/en/stable/>). [Ubuntu Server: network configuration](<https://ubuntu.com/server/docs/network-configuration>). [Debian Wiki: NetworkConfiguration](<https://wiki.debian.org/NetworkConfiguration>). Official pages only. Interface names and menu labels move by release. For router reservation first, see [keep the computer on the same address on common routers](<common-router-reservation>). For finding the number, see [find it on the house network](<find-the-leftover-box>).

## Also on this topic

[Keep the computer on the same address on common routersWhere to reserve DHCP on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so SSH and Pi-hole keep the same number after a reboot. You don't need a new router.](<common-router-reservation>) [Keep it on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [Point a phone or laptop at Pi-hole when the router won'tWhen Nest, Google Wifi, or an ISP gateway will not take custom DNS, set DNS on one phone or laptop so it asks Pi-hole. You don't need a new router for this device.](<manual-dns-on-devices>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [A cable beats Wi-Fi for the old PCOnce it is doing real work, plug it into the router with a cable. Skip if it is already on a cable.](<leftover-box-ethernet>) [Point common home routers at Pi-holeWhere to set DNS on TP-Link, ASUS, eero, Netgear, Nest, and ISP gateways so the house asks Pi-hole. Prefer LAN DHCP DNS. You don't need a new router.](<common-router-dns>) [SSH from the couchType commands on the old PC from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousKeep the computer on the same address on common routers](<common-router-reservation>) [NextPoint a phone or laptop at Pi-hole when the router won't](<manual-dns-on-devices>)

---

*Labthrift Markdown mirror. HTML version linked above.*
