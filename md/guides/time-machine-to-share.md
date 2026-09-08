# Back up a Mac to the house share with Time Machine

Source: https://labthrift.com/guides/time-machine-to-share
Markdown: https://labthrift.com/md/guides/time-machine-to-share.md

*Notes › / › Getting started › / › Back up a Mac to the house share with Time Machine*

[Notes](<./>) / [Getting started](<./#start>) / Back up a Mac to the house share with Time Machine

Written 4 Sep 2026. This is a how-to, not a product card.

# Back up a Mac to the house share with Time Machine

Point Time Machine at a Samba folder on the old PC. Use a separate share from photos, and cap the size so one Mac does not fill the disk. You don't need a Time Capsule or a NAS for this.

Haven't made a share yet? Start with [a file share](<first-file-share>). Opening photos from Finder first is safer: [open the house share from a laptop](<open-share-from-laptop>). Need the computer's address? [Find it on the house network](<find-the-leftover-box>). This note is the Mac Time Machine walk on a separate Samba share.

## Skip until the share works and the disk is big enough

If Finder cannot open a normal share yet, stop and fix that first. Time Machine wants a lot of free space — often hundreds of gigabytes for one laptop. If the old PC is a 128 GB SSD that already holds the OS, Pi-hole, and photos, skip this and use a USB disk or another old computer for Mac backups instead. Don't put Time Machine on the same tiny photos share you use for day-to-day files.

## What this is

macOS Time Machine can back up over SMB when Samba advertises Time Machine support with the fruit module. You make a dedicated folder, tell Samba it is a Time Machine target, set a size cap, then pick that share in System Settings. The Mac creates its own sparsebundle. You are not opening SMB to the internet.

## What you need

  * A Mac on the house network (Wi-Fi is fine; plug a cable for the first long backup if you can)
  * SSH or a keyboard on the computer (Debian or Ubuntu Server)
  * Free disk room on the computer — check with [see if the computer still has room](<leftover-box-disk-space>)
  * The Samba username and share password from [set or change the house-share password](<leftover-box-samba-password>)
  * About twenty minutes for the setup, then leave the first backup running



## 1\. Make a separate folder

Keep Time Machine off the photos folder. Example path:

`sudo mkdir -p /srv/timemachine`

`sudo chown youruser:youruser /srv/timemachine`

Swap `youruser` for the Linux login Samba already uses. Prefer a USB disk or a second internal drive mounted at that path when the system disk is small. See [see if the USB backup disk showed up](<leftover-box-usb-disk>) if you are parking this on a stick or USB drive for now.

## 2\. Install the Apple-friendly Samba bits

You already need Samba for the house folder. Add the VFS modules package if it is not there yet:

`sudo apt install samba samba-vfs-modules`

Say yes. That package brings the fruit, catia, and streams_xattr modules Time Machine expects.

## 3\. Add a Time Machine share in smb.conf

Open the Samba config:

`sudo nano /etc/samba/smb.conf`

Leave your existing `[photos]` block alone. At the bottom, add a second share. Swap the user and the size cap for yours. Indentation with spaces is fine in this file.
    
    
    [timemachine]
       path = /srv/timemachine
       valid users = youruser
       read only = no
       browseable = yes
       vfs objects = catia fruit streams_xattr
       fruit:time machine = yes
       fruit:time machine max size = 500G
    

The max size is what Samba reports to Time Machine. Cap it so one Mac does not eat the whole disk. Samba's docs say do not store other day-to-day files in a share that uses that size cap — keep photos on `[photos]`. Test the file before you restart:

`testparm -s`

Fix any typo it prints. Then restart Samba:

`sudo systemctl restart smbd`

If the share password was never set for this user:

`sudo smbpasswd -a youruser`

## 4\. Point Time Machine at the share (Mac)

On the Mac, open Finder → Go → Connect to Server (Command-K). Connect once so the Mac has credentials:

`smb://192.168.1.50/timemachine`

Swap the number for the computer's address. Sign in as Registered User with the Samba username and share password. Remember the password in the keychain if you want.

Then open System Settings → General → Time Machine (on older macOS, System Preferences → Time Machine). Click Add Backup Disk. Pick the timemachine share. Enter the same Samba username and password if asked. Start the backup and leave the Mac awake on house Wi-Fi or ethernet for the first long run.

Don't hand-build a sparsebundle unless a support note tells you to. Let Time Machine create it on the share.

## 5\. Check that it is writing

On the Mac, Time Machine should show a backup in progress, then a recent successful time. On the computer:

`ls -la /srv/timemachine`

You should see a `.sparsebundle` (or similar) for that Mac after the first pass starts. Recheck free space: [see if the computer still has room](<leftover-box-disk-space>). Prefer a cable for the old PC while big backups run: [a cable beats Wi-Fi for the old PC](<leftover-box-ethernet>).

## If Time Machine cannot see the disk

Confirm Finder can still open `smb://…/timemachine` on the house network, not guest Wi-Fi. Recheck `fruit:time machine = yes` and that `samba-vfs-modules` is installed. Run `testparm -s` again after edits. Restart `smbd`. If a normal photos share also vanished, start with [when the house share disappeared, check the computer](<leftover-box-share-check>).

On newer macOS releases, network Time Machine can be picky about SMB signing. If the share mounts in Finder but Time Machine fails with a disconnected-disk style error, Apple and Samba threads often point at an `/etc/nsmb.conf` on the Mac with signing enabled — only chase that after the share and fruit lines are confirmed. Keep SMB on the house network only.

## What this is not

This is not a reason to buy a Time Capsule, Synology, or a mesh kit on day one. It is not an offsite backup. A second copy of the house folder on USB or another PC is still [a backup of the house folder](<first-backup>) / [copy to another old computer](<backup-to-another-pc>). It is not forwarding SMB to the internet. Windows File History is a different walk: [back up a Windows PC to the house share with File History](<file-history-to-share>). This page is Mac only.

## What next

Leave the first backup finish. Keep using the photos share for day-to-day files: [open the house share from a laptop](<open-share-from-laptop>). Watch disk room: [see if the computer still has room](<leftover-box-disk-space>). On Windows, overnight Libraries backups can land on a separate share: [File History to the house share](<file-history-to-share>). When you want a second copy of the house folder itself, that is still [a backup of the house folder](<first-backup>). A dedicated file box is later: [a first file box (NAS)](<first-nas>).

## Skip

  * Skip this if you don't have a Mac.
  * Skip this if the computer disk is already tight.
  * Skip stuffing Time Machine into the photos share.
  * Skip buying a Time Capsule for a first house folder.
  * Skip exposing SMB to the internet.
  * Skip treating Time Machine as your only copy of the house share.



## Sources

[Samba: vfs_fruit man page](<https://www.samba.org/samba/docs/current/man-html/vfs_fruit.8.html>) (Time Machine options). [Apple: back up files with Time Machine](<https://support.apple.com/guide/mac-help/back-up-files-with-time-machine-mh35860/mac>). [Samba wiki: better with macOS](<https://wiki.samba.org/index.php/Configure_Samba_to_Work_Better_with_Mac_OS_X>). Official pages only. Menu labels move by macOS release. For the plain share this builds on, see [a file share](<first-file-share>). For Finder connect, see [open the house share from a laptop](<open-share-from-laptop>).

## Also on this topic

[A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Back up a Windows PC to the house share with File HistoryPoint Windows File History at a Samba folder on the old PC. Separate share from photos. You don't need a NAS for this.](<file-history-to-share>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [Copy the house folder to another old computerA second copy of the house folder, over the house network to another old PC. Not only a USB stick. You don't need a NAS for this.](<backup-to-another-pc>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [A first file box (NAS) for one personA quiet box for photos and backups. Two drives if you want sleep.](<first-nas>) [PreviousOpen the house share from a laptop](<open-share-from-laptop>) [NextBack up a Windows PC to the house share with File History](<file-history-to-share>)

---

*Labthrift Markdown mirror. HTML version linked above.*
