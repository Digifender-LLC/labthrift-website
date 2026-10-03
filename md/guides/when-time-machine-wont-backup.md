# When Time Machine won't back up to the house share

Source: https://labthrift.com/guides/when-time-machine-wont-backup
Markdown: https://labthrift.com/md/guides/when-time-machine-wont-backup.md

*Notes › / › Getting started › / › When Time Machine won't back up to the house share*

[Notes](<./>) / [Getting started](<./#start>) / When Time Machine won't back up to the house share

Written 5 Sep 2026. This is a how-to, not a product card.

# When Time Machine won't back up to the house share

Finder can open the share, or it used to, but Time Machine fails, stalls, or says the disk disappeared. Check the computer, the fruit lines, free space, then the Mac. You don't need a Time Capsule.

Haven't set this up yet? Start with [back up a Mac to the house share with Time Machine](<time-machine-to-share>). Plain share won't open at all? Fix that first: [when the house share won't open](<when-share-wont-open>). This note is only for when Time Machine is the thing that fails.

## Skip until you have a Mac symptom

Write down what Time Machine actually said. "Backup disk not available," "disk is full," a forever "Preparing backup," and a share that never appears in Add Backup Disk are different fixes. Don't buy a Time Capsule because Samba stopped, or because the Mac is on guest Wi-Fi.

## What this is

Time Machine over SMB needs the computer awake, you on the house network, a dedicated Samba share with the fruit Time Machine lines, free disk room under the size cap, and a Mac that still trusts the password. One of those usually drifted. Soft-off, a missing `samba-vfs-modules` package, a full disk, a stale keychain password, or guest Wi-Fi. Cheap checks first.

## Step 1: computer awake, same house network

Power light. Fan. If it looks asleep or dead, start with [is the computer still on?](<leftover-box-still-on>). Soft-off on purpose? [Wake the computer from the house network](<wake-on-lan>).

The Mac must be on the main house Wi-Fi or a cable into the same router. Not guest Wi-Fi. Not a work VPN. Not cellular. Guest Wi-Fi often cannot see the computer on purpose. Turn the VPN off for this test.

## Step 2: open the Time Machine share in Finder

Before you touch Time Machine settings, open the share once by hand:

`smb://192.168.1.50/timemachine`

Swap the number and share name for yours. Sign in as Registered User with the Samba username and share password.

If Finder cannot open it, stop here. That is a share problem, not a Time Machine problem: [when the house share won't open](<when-share-wont-open>). Forgot the password? [Set or change the house-share password](<leftover-box-samba-password>). Need the address again? [Find it on the house network](<find-the-leftover-box>).

## Step 3: confirm the fruit lines and modules

SSH into the computer: [SSH from the couch](<first-ssh>). Connection fails? [When SSH won't connect](<when-ssh-wont-connect>).

Check the VFS package is installed:

`dpkg -l samba-vfs-modules | tail -1`

You want a line that starts with `ii`. Missing? Install it:

`sudo apt install samba-vfs-modules`

Print the Time Machine share block:

`testparm -s 2>/dev/null | sed -n '/\[timemachine\]/,/^\[/p'`

Swap `timemachine` if your share name differs. You want something like:

`path = /srv/timemachine`

`vfs objects = catia fruit streams_xattr`

`fruit:time machine = yes`

A size cap line is fine too (`fruit:time machine max size`). If fruit lines are missing, add them the way [the setup note](<time-machine-to-share>) shows, then:

`testparm -s`

`sudo systemctl restart smbd`

If every share vanished on an awake computer: [when the house share disappeared, check the computer](<leftover-box-share-check>).

## Step 4: free space under the cap

Time Machine needs room on the computer disk, and it also respects the Samba size cap. Check real free space:

`df -h /srv/timemachine`

Or check the disk the path lives on. Fuller walk: [see if the computer still has room](<leftover-box-disk-space>).

If the disk is nearly full, Time Machine stalls or fails. Free space, raise the cap only when the disk can hold it, or park the folder on a bigger USB or second drive: [see if the USB backup disk showed up](<leftover-box-usb-disk>), [put the house folder on a USB disk](<house-folder-on-usb>) (same idea for a Time Machine path on a bigger disk).

Don't put Time Machine on the tiny photos share. Separate share, separate path.

## Step 5: match the Mac symptom

**Share never appears in Add Backup Disk.** Finder must open `smb://…/timemachine` first (step 2). Confirm `fruit:time machine = yes` and restart `smbd`. Stay on house Wi-Fi. Then open System Settings → General → Time Machine → Add Backup Disk again.

**Backup disk not available / disk disconnected mid-backup.** Computer asleep, Wi-Fi drop, or Samba restarted. Power light first. Re-open the share in Finder. Soft-off overnight is fine if you wake it before the Mac backs up: [wake the computer from the house network](<wake-on-lan>). Prefer a cable on the old PC while big backups run: [a cable beats Wi-Fi for the old PC](<leftover-box-ethernet>).

**Password / authentication failed.** Reset the Samba password: [set or change the house-share password](<leftover-box-samba-password>). On the Mac, open Keychain Access, search for the computer's address or `timemachine`, delete the stale internet-password rows, then Connect to Server again and re-add the backup disk.

**Disk is full / not enough space.** Free space on the computer (step 4). Lower how much the Mac keeps, or raise `fruit:time machine max size` only when `df -h` shows room. One Mac can eat hundreds of gigabytes.

**Preparing backup forever, or first backup never finishes.** Leave the Mac awake on house Wi-Fi or ethernet. Plug a cable if you can. Don't sleep the Mac mid-first-pass. Check the computer side for a growing `.sparsebundle`:

`ls -la /srv/timemachine`

If nothing new appears there, go back to steps 2–3. If the bundle exists and grows, wait. First backups are slow.

**Finder mounts, Time Machine still fails with a disconnected-disk style error.** After fruit lines and free space are confirmed, newer macOS releases can be picky about SMB signing. Some people add a Mac-side `/etc/nsmb.conf` with signing turned on. Only chase that after steps 1–4 are clean. Keep SMB on the house network only. Don't forward SMB on the router.

## Step 6: one clean retry

On the Mac, remove the broken backup disk in Time Machine settings if it is stuck. Connect to Server once more. Add the disk again. Start a backup. Watch `ls -la /srv/timemachine` on the computer for the sparsebundle. When the first pass finishes, Time Machine should show a recent successful time.

## What this is not

This is not a reason to buy a Time Capsule, Synology, or a mesh kit tonight. It is not an offsite backup. A second copy of the house folder on USB or another PC is still [a backup of the house folder](<first-backup>) / [copy to another old computer](<backup-to-another-pc>). It is not Windows File History (different walk): [File History to the house share](<file-history-to-share>). It is not opening SMB to the internet.

## What next

Once a backup finishes, leave the Mac on the house network overnight now and then. Watch disk room: [see if the computer still has room](<leftover-box-disk-space>). Day-to-day photos stay on the normal share: [open the house share from a laptop](<open-share-from-laptop>). Setup walk again if you wipe the share: [back up a Mac to the house share with Time Machine](<time-machine-to-share>).

## Skip

* Skip buying a Time Capsule for a Samba hiccup.
* Skip if you don't have a Mac.
* Skip stuffing Time Machine into the photos share.
* Skip exposing SMB past the house network.
* Skip guessing last week's address instead of finding it again.
* Skip treating Time Machine as the only copy of the house folder.

## Sources

[Samba: vfs_fruit man page](<https://www.samba.org/samba/docs/current/man-html/vfs_fruit.8.html>). [Apple: back up files with Time Machine](<https://support.apple.com/guide/mac-help/back-up-files-with-time-machine-mh35860/mac>). [Samba wiki: better with macOS](<https://wiki.samba.org/index.php/Configure_Samba_to_Work_Better_with_Mac_OS_X>). Official pages only. Menu labels move by macOS release. For the setup walk, see [back up a Mac to the house share with Time Machine](<time-machine-to-share>). For a plain share that won't open, see [when the house share won't open](<when-share-wont-open>).

## Also on this topic

[Back up a Mac to the house share with Time Machine](<time-machine-to-share>) — Point Time Machine at a Samba folder on the old PC. Separate share from photos. Cap the size. You don't need a Time Capsule or a NAS for this.

[When the house share won't open](<when-share-wont-open>) — Finder, File Explorer, or the phone can't open the house folder. Check the computer is on, confirm the address, then match the error.

[Set or change the house-share password](<leftover-box-samba-password>) — Finder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy.

[See if the computer still has room](<leftover-box-disk-space>) — After the house folder is working, check that the computer is not filling up.

[When the house share disappeared, check the computer](<leftover-box-share-check>) — The computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running.

[Back up a Windows PC to the house share with File History](<file-history-to-share>) — Point Windows File History at a Samba folder on the old PC. Separate share from photos.

[A backup of the house folder](<first-backup>) — A second copy of the house folder, on a USB disk you already have, or on another old computer.

[Open the house share from a laptop](<open-share-from-laptop>) — The house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network.

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
