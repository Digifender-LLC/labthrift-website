# Open the house share from a phone

Source: https://labthrift.com/guides/open-share-from-phone
Markdown: https://labthrift.com/md/guides/open-share-from-phone.md

*Notes › / › Getting started › / › Open the house share from a phone*

[Notes](<./>) / [Getting started](<./#start>) / Open the house share from a phone

Written 3 Sep 2026. This is a how-to, not a product card.

# Open the house share from a phone

The house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.

Haven't made the house folder yet? Start with [a file share](<first-file-share>). Need the computer's address first? [Find it on the house network](<find-the-leftover-box>). Opening from a laptop instead? That is [open the house share from a laptop](<open-share-from-laptop>). This note is the phone walk: Files on iPhone, My Files on Samsung, and what to do on a Pixel.

## Skip until the folder exists

If you never made the share, stop. That is [a file share](<first-file-share>). This note assumes Samba is already serving a folder, often named photos, on the computer. The phone has to be on the same house Wi-Fi. Cellular will not reach it. Don't forward SMB on the router.

## What this is

SMB is the language Windows, Mac, and phones already use for shared folders. The phone talks to the computer the same way a laptop does. You type the computer's address, the share name, and the share password. That password is the one Samba keeps, not always the SSH login. If you forgot it, set it again in [set or change the house-share password](<leftover-box-samba-password>).

## What you need

The computer's address, the same number you SSH to. Swap the example for yours:

`smb://192.168.1.50/photos`

If you don't know the number, [find it on the house network](<find-the-leftover-box>). If ping fails from a laptop, start with [is the computer still on?](<leftover-box-still-on>) before you blame the phone.

## iPhone or iPad

Open the Files app. Tap Browse at the bottom. Tap the three dots at the top, then Connect to Server. Type the address, like `smb://192.168.1.50` or the full share `smb://192.168.1.50/photos`. Tap Connect.

Pick Registered User. Type the Samba username (usually the Linux login on the computer) and the share password. Tap Next. The share shows under Shared in Browse. Open it like any other folder. Copy a photo in. Copy one out. That is the whole check.

The next time, that server sits in Recent Servers. Stay on house Wi-Fi. Skip Guest. The share uses a username and password.

## Samsung Android

Open My Files. Scroll to Network storage. The first time, the phone may ask to install a Network Storage add-on from the Galaxy Store. Install it.

Tap Add network storage, then Network drive (SMB). If it finds the computer, tap it. If not, add it by hand with the same address, username, and share password. Open the folder. Copy one file. Don't hunt for a Synology app.

## Pixel, or Files by Google

The Files app that ships on Pixel phones does not open a house share. There is no hidden SMB menu. Don't pay for a NAS because of that.

Install [Material Files](<https://github.com/zhanghai/MaterialFiles>), a free file app that speaks SMB. Add a storage, pick SMB, and type the same address, username, and share password. A laptop still works if you would rather skip another app.

## If the phone cannot see it

Stay on house Wi-Fi. Forget the house network and join again if the phone was on cellular a minute ago. Recheck the address and the share name. If a laptop cannot see the folder either, start with symptom triage: [when the house share won't open](<when-share-wont-open>). If Samba stopped, or the firewall hid it: [when the house share disappeared, check the computer](<leftover-box-share-check>). If the phone asks for a password and the login fails, that is [the share password](<leftover-box-samba-password>), not a vanished folder.

If you can see the folder but cannot drop a file in, the Linux folder owner is the usual culprit. Samba is using that same user, so that user has to own the folder:

`sudo chown youruser:youruser /srv/share`

Swap `youruser` and the path if you used a different folder. Try the phone again.

## What this is not

This is not a reason to buy a NAS, a Synology phone app, or a VPN. It is not a reason to open SMB to the internet. The share stays on the house network. A laptop can open the same folder if the phone is being stubborn.

## What next

Dump camera-roll photos into that folder: [save phone photos to the house share](<phone-photos-to-share>). Prefer a laptop? [Open the house share from a laptop](<open-share-from-laptop>). On a Chromebook: [open the house share from a Chromebook](<open-share-from-chromebook>). On a Linux desktop: [open the house share from a Linux laptop](<open-share-from-linux>). If you forgot the share password, [set or change the house-share password](<leftover-box-samba-password>). If it won't open later, start with [when the house share won't open](<when-share-wont-open>). If Samba stopped on an awake computer, [when the house share disappeared, check the computer](<leftover-box-share-check>). After phones can open it, [see if the computer still has room](<leftover-box-disk-space>). When you want a second copy, that is [a backup of the house folder](<first-backup>).

## Skip

  * Skip a NAS app for a first folder.
  * Skip exposing SMB to the internet.
  * Skip a VPN or remote-access kit so the phone can reach it from cellular.
  * Skip ES File Explorer and other ad-stuffed file apps.
  * Skip RAID.
  * Skip this if you only use a laptop and that already opens the folder.



## Sources

[Apple: connect iPhone Files to a file server](<https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-server-iphe9aff429a/ios>). [Material Files](<https://github.com/zhanghai/MaterialFiles>). [Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). [Ubuntu Server: Samba as a file server](<https://ubuntu.com/server/docs/how-to/samba/file-server/>). Official pages only. For the share this opens, see [a file share](<first-file-share>). For the address, see [find it on the house network](<find-the-leftover-box>). For the share password, see [set or change the house-share password](<leftover-box-samba-password>).

## Also on this topic

[A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Save phone photos to the house shareCopy camera-roll photos from an iPhone or Android onto the house folder on the old PC. House Wi-Fi only. You don't need a NAS app or iCloud for this.](<phone-photos-to-share>) [SSH from a phoneType commands on the old PC from an iPhone or Android on house Wi-Fi. Password login first. Don't open SSH to the internet.](<ssh-from-phone>) [Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Open the house share from a ChromebookThe house folder is on the old PC. Open it from a Chromebook Files app on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-chromebook>) [Open the house share from a Linux laptopThe house folder is on the old PC. Open it from Ubuntu or Fedora Files (or KDE Dolphin) on the house network. You don't need a NAS for this.](<open-share-from-linux>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [When the house share won't openFinder, File Explorer, or the phone can't open the house folder. Check the computer is on, confirm the address, then match the error (path not found, login failed, can't write, disk full). You don't need a NAS.](<when-share-wont-open>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [PreviousOpen the house share from a laptop](<open-share-from-laptop>) [NextSave phone photos to the house share](<phone-photos-to-share>)

---

*Labthrift Markdown mirror. HTML version linked above.*
