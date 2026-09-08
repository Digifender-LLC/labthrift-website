# When the house share won't open

Source: https://labthrift.com/guides/when-share-wont-open
Markdown: https://labthrift.com/md/guides/when-share-wont-open.md

*Notes › / › Getting started › / › When the house share won't open*

[Notes](<./>) / [Getting started](<./#start>) / When the house share won't open

Written 4 Sep 2026. This is a how-to, not a product card.

# When the house share won't open

Finder, File Explorer, or the phone can't open the house folder. Check the computer is on, confirm the address, then match the error (path not found, login failed, can't write, disk full). You don't need a NAS.

Haven't made the folder yet? Start with [a file share](<first-file-share>). Need the address? [Find it on the house network](<find-the-leftover-box>). First open walk: [open from a laptop](<open-share-from-laptop>) or [open from a phone](<open-share-from-phone>). This note is only for when open fails, or used to work and now doesn't.

## Skip until you have a real symptom

Copy the exact error from Finder, File Explorer, or the phone. "Network path not found," "login failed," "access denied," and "disk full" are different fixes. Don't buy a NAS for a wrong address or a stale password.

## What this is

The house share needs five things that still match: the computer awake, you on the same house network, the right address plus share name, the Samba password, and room on the disk. One of those usually drifted. Soft-off, guest Wi-Fi, a new DHCP lease, a remembered bad login, or a full drive. The walk below is order of cheap checks.

## Step 1: is the computer awake?

Power light. Fan. Screen if it has one. If it looks asleep or dead, start with [is the computer still on?](<leftover-box-still-on>). Soft-off on purpose? Wake it from the house network: [wake the computer from the house network](<wake-on-lan>). A laptop that slept with the lid closed needs [don't let the laptop sleep](<leftover-box-sleep>) before you chase share bugs.

## Step 2: same house Wi-Fi

Your laptop or phone must be on the main house Wi-Fi (or a cable into the same router). Not guest Wi-Fi. Not a work VPN. Not cellular. Guest Wi-Fi often cannot see the computer on purpose — same idea as [when guest Wi-Fi still shows ads](<guest-wifi-dns>). Turn the VPN off for this test. Stay on the house network only.

## Step 3: confirm the address and share name

Don't reuse last week's number from memory. Look it up again: [find it on the house network](<find-the-leftover-box>). Write down the address and the share name you set. Examples:

`\\192.168.1.50\photos`

`smb://192.168.1.50/photos`

Use the real number and share name, not those examples. Wrong share name looks a lot like "path not found."

## Step 4: match the symptom to a fix

What you see| What to do  
---|---  
Can't find path / connection failed / network path not found| The computer may be up, but Samba stopped or the firewall hid it. Check on the computer: `systemctl is-active smbd`. If ufw is on: `sudo ufw allow Samba`. Full walk: [when the house share disappeared, check the computer](<leftover-box-share-check>).  
Login / password failed / access denied at the prompt| Wrong share password, or a remembered bad one. Set or reset it: [set or change the house-share password](<leftover-box-samba-password>). On Windows, clear the old entry in Credential Manager. On a Mac, clear the keychain entry for that server. This is not the SSH login unless you chose the same password on purpose.  
Folder opens but you can't copy a file in| The Linux folder owner is usually wrong. Samba is using that user, so that user has to own the folder: `sudo chown youruser:youruser /srv/share`. Swap the user and path if yours differ. Try again.  
Photos stop / disk full / no space left| The share is fine; the disk is not. Check room: [see if the computer still has room](<leftover-box-disk-space>). If the system disk is small, park the folder on a USB that stays plugged in: [put the house folder on a USB disk](<house-folder-on-usb>).  
  
## Check

Open the share again from a laptop or a phone on house Wi-Fi. Copy one small file in. Copy one out. If that works, you're done. If it fails after a reboot, re-find the address — DHCP may have moved the number.

## What this is not

This is not a reason to buy a NAS tonight. It is not SMB opened to the internet. It is not Synology Drive, a coffee-shop VPN, or a third-party "network drive" app stuffed with ads. House network only until you actually need remote access.

## What next

First open walks: [from a laptop](<open-share-from-laptop>), [from a phone](<open-share-from-phone>), [from a Chromebook](<open-share-from-chromebook>), or [from a Linux laptop](<open-share-from-linux>). Share password stuck? [Set or change the house-share password](<leftover-box-samba-password>). Samba stopped? [When the house share disappeared, check the computer](<leftover-box-share-check>). Disk getting tight: [see if the computer still has room](<leftover-box-disk-space>). Dump camera-roll photos: [save phone photos to the house share](<phone-photos-to-share>). When you want a second copy, that is [a backup of the house folder](<first-backup>).

## Skip

  * Skip buying a NAS for a first-timer open failure.
  * Skip opening SMB to the internet.
  * Skip a VPN so you can reach it from a coffee shop.
  * Skip third-party network-drive apps that stuff ads.
  * Skip RAID.
  * Skip guessing last week's address instead of finding it again.



## Sources

[Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). [Ubuntu Server: Samba as a file server](<https://ubuntu.com/server/docs/how-to/samba/file-server/>). [Microsoft: map a network drive](<https://support.microsoft.com/windows/map-a-network-drive-in-windows-60c43704-9f29-b538-2dd4-92f39bf059de>). [Apple: connect to shared computers and servers](<https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac>). Official pages only. For the share itself, see [a file share](<first-file-share>). For the address, see [find it on the house network](<find-the-leftover-box>). For Samba stopped, see [when the house share disappeared, check the computer](<leftover-box-share-check>). For the share password, see [set or change the house-share password](<leftover-box-samba-password>).

## Also on this topic

[A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Is it still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [PreviousA file share](<first-file-share>) [NextOpen the house share from a laptop](<open-share-from-laptop>)

---

*Labthrift Markdown mirror. HTML version linked above.*
