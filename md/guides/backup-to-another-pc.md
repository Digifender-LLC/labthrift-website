# Copy the house folder to another old computer

Source: https://labthrift.com/guides/backup-to-another-pc
Markdown: https://labthrift.com/md/guides/backup-to-another-pc.md

*Notes › / › Getting started › / › Copy the house folder to another old computer*

[Notes](<./>) / [Getting started](<./#start>) / Copy the house folder to another old computer

Written 3 Sep 2026. This is a how-to, not a product card.

# Copy the house folder to another old computer

A second copy of the house folder, over the house network to another old PC. Not only a USB stick. You don't need a NAS for this.

Only have one computer so far? The USB path is enough: [a backup of the house folder](<first-backup>). Haven't made a house folder yet? Start with [a file share](<first-file-share>). This note is only the second-computer copy.

## Skip until you have two boxes on the house network

You need the computer that holds the share, plus another old PC that already has Debian or Ubuntu Server and SSH from the couch. Both stay on the house network. Don't forward port 22. Skip this if you only have one machine; use a USB disk instead.

## What this is

Same tool as the USB backup: `rsync`. Instead of writing to a plugged-in disk, it copies over SSH to the other computer. Next time you run it, only changed files move. You don't buy Synology Backup or a cloud plan for a folder of photos.

## 1\. Write down the other computer's address

On the second old PC, find its house number the same way you did for the first:

`hostname -I`

Or look it up in the router list: [find it on the house network](<find-the-leftover-box>). Write down the login name you use on that second box too. You'll need both for the copy.

## 2\. Prove SSH works from the first computer

SSH into the computer that holds the share. From there, reach the second box:

`ssh otheruser@other-address`

Swap `otheruser` and `other-address` for the real login and number. Accept the host key the first time if SSH asks. When you get a shell on the second box, type `exit` and come back. If this fails, fix SSH on that second box first: [SSH from the couch](<first-ssh>).

## 3\. Make a landing folder on the second box

Still on the second box (SSH in again if you left), make a folder for the copy:

`mkdir -p ~/share-backup`

That lands in the other user's home. You don't need a second Samba share for this. A plain folder is enough.

## 4\. Copy from the first computer

Back on the computer that holds the house folder, run:

`rsync -a /srv/share/ otheruser@other-address:share-backup/`

Trailing slashes matter. They tell rsync to copy the contents of the share into that backup folder. Leave both slashes on. Swap the path if your share lives somewhere else. The first run can take a while on Wi-Fi. Plug both computers into a cable if you can, for a big photo dump.

Want a dry look first? Add `-n` once so rsync only prints what it would copy:

`rsync -an /srv/share/ otheruser@other-address:share-backup/`

Then drop the `n` and run the real copy.

## 5\. Check that files landed

SSH into the second box again. List what arrived:

`ls ~/share-backup`

Pick one file you know should be there and open it, or check size with `du -sh ~/share-backup`. A green terminal without a look is how people learn the copy was empty. Same idea as [check that the backup actually copied](<leftover-box-backup-check>), just on the other computer instead of a USB disk.

## Do it again next week

Same `rsync` command. Unchanged files stay put. Changed ones move. A phone reminder is enough at first. After one checked copy works, you can put that command on a weekly timer on the first computer: [back up the folder every week without remembering](<leftover-box-backup-timer>).

## What this is not

This is not RAID. Two computers with the same folder is still a backup only if a problem on one cannot wipe the other. This is not a reason to buy a NAS tonight. It is not opening SSH to the internet. Keep both boxes on the house network: [keep it on the house network](<leftover-box-house-network>).

## What next

USB still works as a third copy you can unplug and put in a drawer: [a backup of the house folder](<first-backup>). Copy fails on either path? [When the house backup won't run](<when-backup-wont-run>). Confirm one file can come back: [restore one file from the USB backup](<leftover-box-restore-one>) (same idea if you pull a file back from the second box with rsync the other way). A VM is still later: [what a VM is](<what-is-a-vm>).

## Skip

  * Skip buying a NAS for this job.
  * Skip RAID. RAID is not a backup.
  * Skip restic and Borg on day one.
  * Skip forwarding port 22 so "backup works from anywhere."
  * Skip cloud until a second house copy exists.
  * Skip this if you only have one computer. Use USB instead.



## Sources

[Debian: rsync man page](<https://manpages.debian.org/bookworm/rsync/rsync.1.en.html>). [Ubuntu: rsync man page](<https://manpages.ubuntu.com/manpages/noble/man1/rsync.1.html>). Official pages only. For the USB path, see [a backup of the house folder](<first-backup>). For the share this copies, see [a file share](<first-file-share>). For SSH on the second box, see [SSH from the couch](<first-ssh>).

## Also on this topic

[A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [When the house backup won't runrsync failed, the USB is missing, or the second copy never landed. Check the stick, the mount, the source path, then match the error (no space, permission, connection). You don't need a NAS.](<when-backup-wont-run>) [A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Check that the backup actually copiedAfter the copy finishes, look on the USB disk (or the other computer) and confirm the files are there before you trust it.](<leftover-box-backup-check>) [Back up the folder every week without rememberingAfter one manual copy worked, let the computer run that same rsync on a schedule.](<leftover-box-backup-timer>) [SSH from the couchType commands on the old PC from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [PreviousA backup of the house folder](<first-backup>) [NextCheck that the backup actually copied](<leftover-box-backup-check>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
