# Make a boot USB for the install

Source: https://labthrift.com/guides/make-boot-usb
Markdown: https://labthrift.com/md/guides/make-boot-usb.md

*Notes › / › Getting started › / › Make a boot USB for the install*

[Notes](<./>) / [Getting started](<./#start>) / Make a boot USB for the install

Written 3 Sep 2026. This is a how-to, not a product card.

# Make a boot USB for the install

Write Ubuntu Server or Debian onto a USB stick so the old PC can boot the installer. Use Etcher or Rufus. Don't drag the ISO into a folder.

Haven't chosen an OS yet? See [what OS to put on it](<what-os-to-pick>). Got the computer from Marketplace? [Wipe it before you install](<wipe-marketplace-pc>). The full weekend install is [your first weekend](<first-weekend>). This note is only the stick.


Optional: jot which ISO and stick you used in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip until you have a stick and an ISO

You need an empty-enough USB stick (8 GB or more) and a computer that can download and flash it, usually your daily laptop. Skip this if the old PC already boots a working installer USB. Don't buy a fancy branded "bootable" stick. A plain USB drive is fine.

## What this is

A boot USB is a stick the old PC can start from instead of its hard disk. The installer lives on that stick. Copying the ISO file into a folder on the stick does not work. You have to flash (write) the image so the stick looks like a boot disk.

## 1\. Download the ISO

Pick one official image only:

  * [Ubuntu Server](<https://ubuntu.com/download/server>). LTS is the usual pick.
  * [Debian](<https://www.debian.org/download>). Use netinst or the live/server image from the download page.



Save the `.iso` file. Don't unpack it. Don't open it as a folder.

## 2\. Pick a flash tool

Tool| When to pick it  
---|---  
[balenaEtcher](<https://etcher.balena.io/>)| Default. Works on Windows, Mac, and Linux. Few buttons.  
Rufus| Windows only, and you already have it. Use DD mode if Rufus asks.  
Ventoy| You keep several ISOs on one stick. Fine later. Skip tonight if Etcher is enough.  
  
## 3\. Flash with Etcher

Plug the USB stick into your daily computer. Open Etcher.

  1. Flash from file: pick the `.iso` you downloaded.
  2. Select target: pick the USB stick. Check the size so you don't wipe an external hard drive.
  3. Flash. Wait until it finishes and says it validated (or completed).



Windows may warn that the stick needs formatting after. Don't format it. Eject it from the system tray, then unplug.

## 4\. Boot the old PC from the stick

Plug the stick into the old PC. Power on. Tap the boot menu key early (Dell often F12; others F10, Esc, or F2 then a boot menu). Pick the USB entry. Often the stick brand name, or "UEFI: …".

If it boots straight into old Windows, open the firmware setup, put USB first, or disable Secure Boot only if the menu won't show the stick. Then try again.

## 5\. You're done with this note

When the Ubuntu or Debian installer screen appears, the stick worked. Continue with [your first weekend](<first-weekend>). On a Marketplace box, wipe the whole disk in the installer: [wipe a Marketplace PC before you install](<wipe-marketplace-pc>).

## If the stick won't boot

  * Try another USB port (rear motherboard ports on a desktop beat front-panel hubs).
  * Reflash with Etcher. A half-written stick fails quietly.
  * Confirm you downloaded Server (or Debian), not a random remix ISO.
  * Try Rufus in DD image mode on Windows if Etcher keeps failing on that PC.



## What this is not

This is not a reason to buy a new mini PC. It is not Ventoy as homework. It is not a Windows-to-go stick. It is not "copy the ISO with File Explorer."

## What next

Next, get the old PC to start from that stick: [boot the old PC from the USB stick](<boot-from-usb>). Install weekend: [your first weekend](<first-weekend>). Still picking Debian vs Ubuntu Server? [What OS to put on it](<what-os-to-pick>). Marketplace box still has old Windows? [Wipe it before you install](<wipe-marketplace-pc>).

## Skip

  * Skip dragging the ISO onto the stick in Explorer or Finder.
  * Skip formatting the stick after Etcher finishes.
  * Skip buying a special "bootable USB" product.
  * Skip Ventoy until one plain Etcher stick has worked once.
  * Skip this if the old PC already boots a working installer.



## Sources

[Ubuntu Server download](<https://ubuntu.com/download/server>). [Debian download](<https://www.debian.org/download>). [balenaEtcher](<https://etcher.balena.io/>). [Rufus](<https://rufus.ie/>). Official pages only. For the OS choice, see [what OS to put on it](<what-os-to-pick>). For the install weekend, see [your first weekend](<first-weekend>). For a Marketplace wipe, see [wipe a Marketplace PC before you install](<wipe-marketplace-pc>).

## Also on this topic

[What OS to put on itDebian or Ubuntu Server if you can dedicate the old PC. Leave Windows if you still use the laptop as a laptop.](<what-os-to-pick>) [Wipe a Marketplace PC before you installA used OptiPlex may still have the last owner's Windows and logins. Wipe the disk with the installer before you plug it into the house network.](<wipe-marketplace-pc>) [Boot the old PC from the USB stickPlug in the installer stick, open the one-time boot menu, and pick the USB. Dell F12, HP Esc then F9, Lenovo F12. Don't dig through every BIOS screen tonight.](<boot-from-usb>) [Your first weekendInstall the OS, name it, and reach it from the couch.](<first-weekend>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousWhat OS to put on it](<what-os-to-pick>) [NextBoot the old PC from the USB stick](<boot-from-usb>)

---

*Labthrift Markdown mirror. HTML version linked above.*
