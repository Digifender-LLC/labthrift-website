# Save phone photos to the house share

Source: https://labthrift.com/guides/phone-photos-to-share
Markdown: https://labthrift.com/md/guides/phone-photos-to-share.md

*Notes › / › Getting started › / › Save phone photos to the house share*

[Notes](<./>) / [Getting started](<./#start>) / Save phone photos to the house share

Written 4 Sep 2026. This is a how-to, not a product card.

# Save phone photos to the house share

Copy camera-roll photos from an iPhone or Android onto the house folder on the old PC. House Wi-Fi only. You don't need a NAS app or iCloud for this.

Haven't made the house folder yet? Start with [a file share](<first-file-share>). Can't open the folder from the phone yet? That walk is [open the house share from a phone](<open-share-from-phone>). This note is the dump: pick photos, save them into the share, check they landed.

## Skip until the phone can open the folder

If Files (iPhone), My Files (Samsung), or Material Files cannot already open the share, stop. Finish [open the house share from a phone](<open-share-from-phone>) first. Stay on house Wi-Fi. Cellular will not reach the computer. Don't forward SMB on the router. Skip this if you only ever copy photos from a laptop cable.

## What this is

Your phone already holds the photos. The house share is a folder on the old PC. You pick a batch in Photos or Gallery, send them to the file app that already knows the share, and drop them in a dated subfolder. The phone keeps its own copies unless you delete them. This is not iCloud, Google Photos backup, or a Synology app.

## What you need

  * The phone on house Wi-Fi
  * A working house share you can already open (often named `photos`)
  * A few minutes for a small batch; a big dump can take longer over Wi-Fi



Address shape, same as the open walk:

`smb://192.168.1.50/photos`

Swap the number for yours. If you don't know it, [find it on the house network](<find-the-leftover-box>).

## Make a dated folder on the share (optional, worth it)

Open the share once. Make a folder named like `2026-09-04` or `vacation`. Dump into that instead of the root. Later you will thank yourself when you search.

iPhone: Files → Shared → the server → New Folder. Samsung My Files or Material Files: same idea, New folder inside the share.

## iPhone or iPad

Open Photos. Tap Select. Tap the photos (and videos) you want. Tap the Share button.

Tap Save to Files. Under Browse, open Shared, then the house server, then the dated folder. Tap Save.

If Shared does not show the server, connect again: Files → Browse → three dots → Connect to Server, same address as before. Registered User, Samba username and share password. Then retry Save to Files.

Open Files, browse into that folder, and confirm thumbnails or file names showed up. That is the check. Leave the originals in Photos until you are sure.

## Samsung Android

Open Gallery (or Photos). Select the batch. Tap Share. Pick My Files (or "Save to Drive / My Files" style targets your phone shows).

Navigate to Network storage → the house share → your dated folder. Save or Copy there.

If Network storage is missing, install the Network Storage add-on from the Galaxy Store once, then reconnect the SMB share the same way as [open the house share from a phone](<open-share-from-phone>).

## Pixel, or Photos without a built-in SMB save

Google Photos and the stock Files app do not speak SMB. Install [Material Files](<https://github.com/zhanghai/MaterialFiles>) if you have not already, and keep the house share added there.

In Photos (or Gallery), select the batch, tap Share, then pick Material Files if it appears. If Share does not list it, Share → Files / Save a copy into Download, then open Material Files, move those files from Download into the house share folder.

Ugly once. Fine for a first dump. A laptop cable is still allowed if the phone is being stubborn: [open the house share from a laptop](<open-share-from-laptop>).

## After a big dump

On the computer, check room so the next dump does not fail halfway:

`df -h /srv/share`

Swap the path if your share lives elsewhere. The longer look is [see if the computer still has room](<leftover-box-disk-space>). If the system SSD is the share and it is getting tight, park the live folder on a USB disk that stays plugged in: [put the house folder on a USB disk](<house-folder-on-usb>).

A second copy of the house folder is still separate: [a backup of the house folder](<first-backup>).

## If save fails

Stay on house Wi-Fi. Reopen the share and confirm you can create a tiny text file by hand. If login fails, that is [the share password](<leftover-box-samba-password>). If the folder vanished for everyone, [when the house share disappeared, check the computer](<leftover-box-share-check>). If you can see the folder but cannot write, ownership on the Linux side is the usual fix:

`sudo chown -R youruser:youruser /srv/share`

Swap `youruser` and the path. Try the phone again.

## What this is not

This is not automatic camera-roll sync. You pick a batch when you want. It is not a reason to buy a NAS, a Synology phone app, or a VPN so cellular can reach SMB. It is not deleting the phone copies for you. Keep the phone copies until you have opened one file from the share on a laptop or the phone Files app.

## What next

Leave the share alone for a bit. Prefer a laptop for huge dumps? [Open the house share from a laptop](<open-share-from-laptop>). On a Linux desktop: [open the house share from a Linux laptop](<open-share-from-linux>). Watch room with [see if the computer still has room](<leftover-box-disk-space>). When the system disk fills, [put the house folder on a USB disk](<house-folder-on-usb>). When you want a second copy, that is [a backup of the house folder](<first-backup>).

## Skip

  * Skip a NAS app for a first dump.
  * Skip exposing SMB to the internet.
  * Skip deleting phone originals before you open one file from the share.
  * Skip dumping thousands of raw videos on Wi-Fi while everyone is streaming — use ethernet on the computer and a quiet hour, or a laptop cable.
  * Skip iCloud or Google Photos as the only copy of the house folder.
  * Skip this if the phone cannot open the share yet.



## Sources

[Apple: use the Files app on iPhone](<https://support.apple.com/guide/iphone/use-the-files-app-iphd30cf443a/ios>). [Apple: connect iPhone Files to a file server](<https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-server-iphe9aff429a/ios>). [Material Files](<https://github.com/zhanghai/MaterialFiles>). [Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). Official pages only. For opening the share first, see [open the house share from a phone](<open-share-from-phone>). For making the share, see [a file share](<first-file-share>).

## Also on this topic

[Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Open the house share from a ChromebookThe house folder is on the old PC. Open it from a Chromebook Files app on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-chromebook>) [Open the house share from a Linux laptopThe house folder is on the old PC. Open it from Ubuntu or Fedora Files (or KDE Dolphin) on the house network. You don't need a NAS for this.](<open-share-from-linux>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Put the house folder on a USB diskMove the house share onto a USB disk that stays plugged into the old PC so photos don't fill the system drive. You don't need a NAS for this.](<house-folder-on-usb>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [PreviousOpen the house share from a phone](<open-share-from-phone>) [NextSee if the computer still has room](<leftover-box-disk-space>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
