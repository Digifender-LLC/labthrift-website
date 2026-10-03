# Open the house share from a Linux laptop

Source: https://labthrift.com/guides/open-share-from-linux
Markdown: https://labthrift.com/md/guides/open-share-from-linux.md

*Notes › / › Getting started › / › Open the house share from a Linux laptop*

[Notes](<./>) / [Getting started](<./#start>) / Open the house share from a Linux laptop

Written 4 Sep 2026. This is a how-to, not a product card.

# Open the house share from a Linux laptop

The house folder is on the old PC. Open it from Ubuntu or Fedora Files (or KDE Dolphin) on the house network. You don't need a NAS for this.

Haven't made the house folder yet? Start with [a file share](<first-file-share>). Need the computer's address first? [Find it on the house network](<find-the-leftover-box>). Opening from Windows or a Mac? That is [open the house share from a laptop](<open-share-from-laptop>). From a phone? That is [open the house share from a phone](<open-share-from-phone>). From a Chromebook? That is [open the house share from a Chromebook](<open-share-from-chromebook>). This note is the Linux desktop walk: GNOME Files, then a short Dolphin note.

## Skip until the folder exists

If you never made the share, stop. That is [a file share](<first-file-share>). This note assumes Samba is already serving a folder, often named photos, on the computer. The Linux laptop has to be on the same house network. A phone hotspot will not reach it. Don't forward SMB on the router.

## What this is

SMB is the language Windows, Mac, phones, and Linux already use for shared folders. GNOME Files (still called Nautilus in some menus) and KDE Dolphin can mount a Samba share without a NAS app. You type the computer's address, the share name, the Samba username, and the share password. That password is the one Samba keeps, not always the SSH login. If you forgot it, set it again in [set or change the house-share password](<leftover-box-samba-password>).

## What you need

The computer's address, the same number you SSH to. Swap the example for yours:

`smb://192.168.1.50/photos`

If you don't know the number, [find it on the house network](<find-the-leftover-box>). If ping fails from the laptop, start with [is the computer still on?](<leftover-box-still-on>) before you blame Files.

## Ubuntu or Fedora (GNOME Files)

Open Files. In the left sidebar, click Other Locations (some builds say + Other Locations). At the bottom, find the Connect to Server field.

Type `smb://192.168.1.50/photos` (your number, your share name). Click Connect.

A login window opens. Pick Registered User (not Anonymous). Username: the Samba username (usually the Linux login on the computer). Domain: leave blank or workgroup unless you already know a domain. Password: the share password. Check Remember forever if you want. Click Connect.

The share opens like any other folder. Copy one file in. Copy one out. That is the whole check.

Next time, that server often sits under Recent or Network in the sidebar. Stay on the house network. Skip Guest and Anonymous.

## KDE (Dolphin)

Open Dolphin. In the address bar, type `smb://192.168.1.50/photos` and press Enter. Or open Network in the Places panel, then add a network folder if your build shows that.

Enter the Samba username and the share password when asked. Open the folder. Copy one file in. Copy one out.

To keep it handy, right-click the mounted share and add it to Places, or bookmark it. Skip this if GNOME Files already works and you never open Dolphin.

## Optional: mount once from a terminal

If you prefer a one-liner on a laptop that already has GNOME:

`gio mount smb://192.168.1.50/photos`

It asks for the username and password the same way. The share lands under your user GVFS folder and shows in Files. Skip this if the Files UI already worked.

## If the laptop cannot see it

Stay on house Wi-Fi or ethernet, not Guest Wi-Fi that isolates devices. Recheck the URL, the share name, and the password. If a phone or Windows laptop cannot see the folder either, Samba probably stopped, or the firewall hid it: [when the house share disappeared, check the computer](<leftover-box-share-check>). If the login fails, that is [the share password](<leftover-box-samba-password>), not a vanished folder.

Some minimal Linux installs lack SMB client bits. On Ubuntu or Debian, install them once:

`sudo apt update && sudo apt install -y gvfs-backends smbclient`

On Fedora:

`sudo dnf install -y gvfs-smb samba-client`

Then retry Connect to Server.

If you can see the folder but cannot drop a file in, the Linux folder owner on the computer is the usual culprit. Samba is using that same user, so that user has to own the folder:

`sudo chown youruser:youruser /srv/share`

Swap `youruser` and the path if you used a different folder. Try the laptop again.

## What this is not

This is not a reason to buy a NAS, Synology Drive, or a VPN. It is not a reason to open SMB to the internet. The share stays on the house network. A phone or a Windows laptop can open the same folder if the Linux desktop is being stubborn.

## What next

Prefer Windows or a Mac? [Open the house share from a laptop](<open-share-from-laptop>). From a phone: [open the house share from a phone](<open-share-from-phone>). On a Chromebook: [open the house share from a Chromebook](<open-share-from-chromebook>). Dump camera-roll photos: [save phone photos to the house share](<phone-photos-to-share>). If you forgot the share password, [set or change the house-share password](<leftover-box-samba-password>). If the folder vanishes later, [when the house share disappeared, check the computer](<leftover-box-share-check>). After the house can open it, [see if the computer still has room](<leftover-box-disk-space>). When you want a second copy, that is [a backup of the house folder](<first-backup>).

## Skip

  * Skip a NAS app for a first folder.
  * Skip exposing SMB to the internet.
  * Skip a VPN so you can reach it from a coffee shop.
  * Skip writing `/etc/fstab` SMB mounts on day one. The Files bookmark is enough.
  * Skip RAID.
  * Skip this if a Windows or Mac laptop already opens the folder and you never use a Linux desktop for files.



## Sources

[GNOME Help: browse files](<https://help.gnome.org/users/gnome-help/stable/files-browse.html.en>). [Fedora Docs: Samba](<https://docs.fedoraproject.org/en-US/quick-docs/samba/>). [Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). [Ubuntu Server: Samba as a file server](<https://ubuntu.com/server/docs/how-to/samba/file-server/>). Official pages only. For the share this opens, see [a file share](<first-file-share>). For the address, see [find it on the house network](<find-the-leftover-box>). For the share password, see [set or change the house-share password](<leftover-box-samba-password>).

## Also on this topic

[A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [Open the house share from a ChromebookThe house folder is on the old PC. Open it from a Chromebook Files app on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-chromebook>) [Save phone photos to the house shareCopy camera-roll photos from an iPhone or Android onto the house folder on the old PC. House Wi-Fi only. You don't need a NAS app or iCloud for this.](<phone-photos-to-share>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [PreviousOpen the house share from a Chromebook](<open-share-from-chromebook>) [NextOpen the house share from a phone](<open-share-from-phone>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
