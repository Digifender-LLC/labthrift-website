# Open the house share from a Chromebook

Source: https://labthrift.com/guides/open-share-from-chromebook
Markdown: https://labthrift.com/md/guides/open-share-from-chromebook.md

*Notes › / › Getting started › / › Open the house share from a Chromebook*

[Notes](<./>) / [Getting started](<./#start>) / Open the house share from a Chromebook

Written 4 Sep 2026. This is a how-to, not a product card.

# Open the house share from a Chromebook

The house folder is on the old PC. Open it from a Chromebook Files app on house Wi-Fi. You don't need a NAS app for this.

Haven't made the house folder yet? Start with [a file share](<first-file-share>). Need the computer's address first? [Find it on the house network](<find-the-leftover-box>). Opening from a Windows or Mac laptop? That is [open the house share from a laptop](<open-share-from-laptop>). From a phone? That is [open the house share from a phone](<open-share-from-phone>). From a Linux desktop? That is [open the house share from a Linux laptop](<open-share-from-linux>). This note is the Chromebook walk: Files, then SMB file share.

## Skip until the folder exists

If you never made the share, stop. That is [a file share](<first-file-share>). This note assumes Samba is already serving a folder, often named photos, on the computer. The Chromebook has to be on the same house Wi-Fi. A phone hotspot will not reach it. Don't forward SMB on the router.

## What this is

SMB is the language Windows, Mac, phones, and ChromeOS already use for shared folders. The Chromebook Files app can mount a Samba share without a Play Store NAS app. You type the computer's address, the share name, the Samba username, and the share password. That password is the one Samba keeps, not always the SSH login. If you forgot it, set it again in [set or change the house-share password](<leftover-box-samba-password>).

## What you need

The computer's address, the same number you SSH to. Swap the example for yours:

`smb://192.168.1.50/photos`

If you don't know the number, [find it on the house network](<find-the-leftover-box>). If ping fails from another laptop, start with [is the computer still on?](<leftover-box-still-on>) before you blame the Chromebook.

## Add the share in Files

Open the Launcher. Open Files. In the top right, open the three-dot menu (More). Pick Add new service, then SMB file share. Some ChromeOS builds say Services → SMB file share. Same idea.

A window opens. Fill it in:

  * File share URL: `smb://192.168.1.50/photos` (your number, your share name)
  * Display name: something short you will recognize, like House photos
  * Username: the Samba username (usually the Linux login on the computer)
  * Password: the share password



Leave Guest off. Tap Add. The share shows in the Files sidebar, next to Downloads and Google Drive. Open it. Copy one file in. Copy one out. That is the whole check.

The next time, that share stays in the sidebar. Stay on house Wi-Fi. Skip Guest.

## If Files will not mount it

Stay on house Wi-Fi, not Guest Wi-Fi that isolates devices. Recheck the URL, the share name, and the password. If a phone or Windows laptop cannot see the folder either, Samba probably stopped, or the firewall hid it: [when the house share disappeared, check the computer](<leftover-box-share-check>). If the login fails, that is [the share password](<leftover-box-samba-password>), not a vanished folder.

School or work Chromebooks sometimes block SMB. The policy name is around NTLM share authentication. If Add new service is missing, or every mount fails with a credentials error while a personal Chromebook works, that is an admin lock. Use a personal Chromebook, or open the folder from a phone or Windows/Mac laptop instead.

If you can see the folder but cannot drop a file in, the Linux folder owner is the usual culprit. Samba is using that same user, so that user has to own the folder:

`sudo chown youruser:youruser /srv/share`

Swap `youruser` and the path if you used a different folder. Try the Chromebook again.

## What this is not

This is not a reason to buy a NAS, a Synology app, or a VPN. It is not a reason to open SMB to the internet. The share stays on the house network. A phone or a Windows laptop can open the same folder if the Chromebook is being stubborn.

## What next

Prefer Windows or a Mac for big dumps? [Open the house share from a laptop](<open-share-from-laptop>). On a Linux desktop: [open the house share from a Linux laptop](<open-share-from-linux>). From the couch on a phone: [open the house share from a phone](<open-share-from-phone>). Dump camera-roll photos: [save phone photos to the house share](<phone-photos-to-share>). If you forgot the share password, [set or change the house-share password](<leftover-box-samba-password>). If the folder vanishes later, [when the house share disappeared, check the computer](<leftover-box-share-check>). After the house can open it, [see if the computer still has room](<leftover-box-disk-space>). When you want a second copy, that is [a backup of the house folder](<first-backup>).

## Skip

  * Skip a NAS app for a first folder.
  * Skip exposing SMB to the internet.
  * Skip a VPN so you can reach it from a coffee shop.
  * Skip ad-stuffed Android file apps when Files already speaks SMB.
  * Skip RAID.
  * Skip this if a Windows or Mac laptop already opens the folder and you never use a Chromebook for files.



## Sources

[Google: file types and external devices on Chromebooks](<https://support.google.com/chromebook/answer/183093>) (SMB file share in Files). [Google: open, save, or delete files on your Chromebook](<https://support.google.com/chromebook/answer/1700055>). [Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). [Ubuntu Server: Samba as a file server](<https://ubuntu.com/server/docs/how-to/samba/file-server/>). Official pages only. For the share this opens, see [a file share](<first-file-share>). For the address, see [find it on the house network](<find-the-leftover-box>). For the share password, see [set or change the house-share password](<leftover-box-samba-password>).

## Also on this topic

[A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [Open the house share from a Linux laptopThe house folder is on the old PC. Open it from Ubuntu or Fedora Files (or KDE Dolphin) on the house network. You don't need a NAS for this.](<open-share-from-linux>) [Save phone photos to the house shareCopy camera-roll photos from an iPhone or Android onto the house folder on the old PC. House Wi-Fi only. You don't need a NAS app or iCloud for this.](<phone-photos-to-share>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [PreviousOpen the house share from a laptop](<open-share-from-laptop>) [NextOpen the house share from a phone](<open-share-from-phone>)

---

*Labthrift Markdown mirror. HTML version linked above.*
