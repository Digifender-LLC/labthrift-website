# Your first weekend

Source: https://labthrift.com/guides/first-weekend
Markdown: https://labthrift.com/md/guides/first-weekend.md

*Notes › / › Getting started › / › Your first weekend*

[Notes](<./>) / [Getting started](<./#start>) / Your first weekend

[Getting started](<./#start>) · **3 of 9**

Written 23 Aug 2026. This is a how-to, not a product card.

# Your first weekend

Install the OS, give it a name, plug it into the wall, and make sure you can reach it from the couch.

This is a weekend, not a shopping trip. You already have the computer. You already picked an OS, or you can pick one on [what OS to put on it](<what-os-to-pick>). The job is to get it on, named, and reachable.

## 1\. Backup anything you care about

Copy off photos, school papers, or a game save you still want. If the computer is empty, skip this step.

## 2\. Make a USB installer

Download the [Ubuntu Server](<https://ubuntu.com/download/server>) or [Debian](<https://www.debian.org/download>) ISO from the official site. Write it to a USB stick with [balenaEtcher](<https://etcher.balena.io/>) or Ventoy. An 8 GB stick is enough. You probably already have one. Step-by-step flash: [make a boot USB for the install](<make-boot-usb>). Boot menu keys: [boot the old PC from the USB stick](<boot-from-usb>). Got it from Marketplace? Wipe first: [wipe a Marketplace PC before you install](<wipe-marketplace-pc>).

## 3\. Boot it from the USB

Most PCs: tap F12 or F10 at power-on and pick the stick. Brand keys and stuck-stick fixes: [boot the old PC from the USB stick](<boot-from-usb>). Install to the internal disk. One disk is fine. Take the defaults.

## 4\. Give it a name and a user

Pick a name you will remember: lab, closet, office. Create a user. Don't skip the SSH server checkbox if Ubuntu Server offers it. SSH is a way to type commands on that computer from your normal one, over the network.

## 5\. Plug ethernet if it has a port

Wi-Fi is fine. Plug a cable if the computer has a port. It drops fewer connections overnight. No cable nearby? The walk is [put the old PC on house Wi-Fi](<wifi-on-the-pc>).

## 6\. Find its address

Look on your router’s device list, or on the computer itself (`hostname -I`, or the installer summary). You don't need a fancy static IP yet.

## 7\. Connect from the couch

From your normal computer, connect. Windows: Windows Terminal or PowerShell, `ssh you@that-address`. Mac or Linux: Terminal, same command. The first time it will ask to trust this machine. Say yes.

## 8\. Update

On Debian or Ubuntu, run `sudo apt update && sudo apt upgrade`. Reboot if it asks.

## 9\. Leave it on

That is the lab. Don't buy a rack, a switch, or a NAS this weekend.

## What next

Find its number on the house network first. That is [find it on the house network](<find-the-leftover-box>). Then [SSH from the couch](<first-ssh>). If it is a laptop, keep it awake when the lid closes: [don't let the laptop sleep](<leftover-box-sleep>). Later, put a small useful thing on this same computer. The ad-block one is [the first useful thing](<first-useful-service>). A file share can wait a week. Next week, [keep the computer updated](<leftover-box-updates>). Not a shopping trip.

## Skip

  * Skip Kubernetes until it has been on a week.
  * Skip Docker Swarm until it has been on a week.
  * Skip buying a new mini PC until it has been on a week.
  * Skip a 10G card until it has been on a week.
  * Skip a UPS until it has been on a week.



## Sources

[Ubuntu Server download](<https://ubuntu.com/download/server>). [Debian download](<https://www.debian.org/download>). [balenaEtcher](<https://etcher.balena.io/>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the OS choice, see [what OS to put on it](<what-os-to-pick>).

## Also on this topic

[Optional: track the weekend pathLab plan at plan.labthrift.com. Username and a passkey. No email. Skip it if you just want the install done.](<https://plan.labthrift.com>) [Keep a lab plan with a passkey, not an emailOptional checklist on plan.labthrift.com. Username and a passkey. No email recovery. Add a second passkey.](<lab-plan-passkeys>) [What OS to put on itDebian or Ubuntu Server if you can dedicate the old PC. Leave Windows if you still use the laptop as a laptop.](<what-os-to-pick>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [Make a boot USB for the installWrite Ubuntu Server or Debian onto a USB stick so the old PC can boot the installer. Use Etcher or Rufus. Don't drag the ISO into a folder.](<make-boot-usb>) [Boot the old PC from the USB stickPlug in the installer stick, open the one-time boot menu, and pick the USB. Dell F12, HP Esc then F9, Lenovo F12. Don't dig through every BIOS screen tonight.](<boot-from-usb>) [Put the old PC on house Wi-FiUbuntu Server on an old laptop often has no cable nearby. Join house Wi-Fi so SSH and Pi-hole can work. Skip this if ethernet already works.](<wifi-on-the-pc>) [A tiny computer you can leave onLater. An old laptop or a Marketplace OptiPlex is the first box.](<n100-mini-pc>) [PreviousWhat OS to put on it](<what-os-to-pick>) [NextFind it on the house network](<find-the-leftover-box>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
