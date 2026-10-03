# What OS to put on it

Source: https://labthrift.com/guides/what-os-to-pick
Markdown: https://labthrift.com/md/guides/what-os-to-pick.md

*Notes › / › Getting started › / › What OS to put on it*

[Notes](<./>) / [Getting started](<./#start>) / What OS to put on it

[Getting started](<./#start>) · **2 of 9**

Written 23 Aug 2026. This is a how-to, not a product card.

# What OS to put on it

Debian or Ubuntu Server if the box is dedicated. Leave Windows if you still use the laptop as a laptop. Proxmox and NAS operating systems wait until you have a reason.

An OS is the software the computer boots into. Windows, macOS, Debian, Ubuntu. You pick one, install it, and that is what this computer is from then on. You don't need to buy a new computer to pick an OS.

If it is still your daily laptop, leave Windows, or macOS if that is what it has. You can learn later. Don't wipe a machine you still write papers on.

If it is an old PC you can dedicate, an old laptop in the closet, or a Marketplace OptiPlex, install Debian or Ubuntu Server. Both are boring, free, and every guide on the internet assumes one of these two.

Ubuntu Desktop if you want a screen and a mouse while you learn. Same family as Ubuntu Server, with a picture of the desktop instead of only a text login.

Debian if you want fewer surprise changes. Slightly less hand-holding than Ubuntu. Same idea: a free Linux you leave on.

Proxmox is for when you want several pretend computers, called virtual machines, on one box. Not day one unless you already know you want that.

TrueNAS, Unraid, and OpenMediaVault are file-box operating systems. Later, when you have disks to fill. See [a first file box](<first-nas>) when that is the job.

## The default

What you have| What to put on it| Spend  
---|---|---  
Daily laptop you still use| Leave the OS it has| Never for this  
An old PC you can dedicate| Ubuntu Server or Debian| $0, a USB stick you already have  
You already know you want many VMs| Proxmox| Still $0  
You already have disks to fill| A NAS OS, later. See [a first file box](<first-nas>).| Not this weekend  
  

Optional: jot the box and OS choice in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip

  * Skip paid hypervisors, Windows Server, wiping a daily driver, and buying an N100 just to run Linux.
  * Kubernetes can wait. The computer already has a disk. Use that.



## Sources

[Debian download](<https://www.debian.org/download>). [Ubuntu Server download](<https://ubuntu.com/download/server>). [Proxmox downloads](<https://www.proxmox.com/en/downloads>). Official pages only. For the computer itself, see [start with what you already have](<start-with-what-you-have>). After it is running, [see which OS the computer is already running](<leftover-box-os-release>). For the install, see [your first weekend](<first-weekend>).

## Also on this topic

[Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [See which OS the computer is already runningBefore you reinstall or buy a tiny computer, check which OS the computer already has.](<leftover-box-os-release>) [Wipe a Marketplace PC before you installA used OptiPlex may still have the last owner's Windows and logins. Wipe the disk with the installer before you plug it into the house network.](<wipe-marketplace-pc>) [Make a boot USB for the installWrite Ubuntu Server or Debian onto a USB stick so the old PC can boot the installer. Use Etcher or Rufus. Don't drag the ISO into a folder.](<make-boot-usb>) [Boot the old PC from the USB stickPlug in the installer stick, open the one-time boot menu, and pick the USB. Dell F12, HP Esc then F9, Lenovo F12. Don't dig through every BIOS screen tonight.](<boot-from-usb>) [Your first weekendInstall the OS, name it, and reach it from the couch.](<first-weekend>) [A tiny computer you can leave onLater. An old laptop or a Marketplace OptiPlex is the first box.](<n100-mini-pc>) [PreviousStart with what you already have](<start-with-what-you-have>) [NextYour first weekend](<first-weekend>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
