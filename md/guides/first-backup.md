# A backup of the house folder

Source: https://labthrift.com/guides/first-backup
Markdown: https://labthrift.com/md/guides/first-backup.md

*Notes › / › Getting started › / › A backup of the house folder*

[Notes](<./>) / [Getting started](<./#start>) / A backup of the house folder

[Getting started](<./#start>) · **8 of 9**

Written 24 Aug 2026. This is a how-to, not a product card.

# A backup of the house folder

A second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.

The [share on this computer](<first-file-share>) is useful the day that computer dies, only if a second copy exists. That second copy is a backup. Same computer. Same SSH from the couch.

## What this is

A program called rsync. A tool already on Debian and Ubuntu that copies a folder and, next time, only copies what changed. You don't buy Synology Backup or a cloud plan for a folder of photos.

This assumes the share from [a file share](<first-file-share>), or any folder you care about, like `/srv/share`. Debian or Ubuntu Server, the OS from [what OS to put on it](<what-os-to-pick>), installed as in [your first weekend](<first-weekend>). SSH in from the couch.

## Where the copy lives

Where the copy lives| When to pick it  
---|---  
A USB disk you already have| The default. Plug it in, copy, unplug. You don't need a second computer.  
Another old PC on the house network| You already did the first weekend on that computer too, so SSH already works.  
  
## USB disk you already have

Plug the disk into the computer. Find it with `lsblk`. That is a list of disks. It often shows up as `/dev/sdb1`. Use the name `lsblk` actually printed, not a guess.

`lsblk`

Mount it, which means make the USB disk show up as a folder:

`sudo mkdir -p /mnt/backup && sudo mount /dev/sdb1 /mnt/backup`

Then copy the share:

`rsync -a /srv/share/ /mnt/backup/share/`

The trailing slashes matter. They tell rsync to copy the contents of the share into that backup folder. Leave both slashes on.

## Another old PC

If you have a second old PC on the house network, the short version is copy over SSH:

`rsync -a /srv/share/ otheruser@other-address:share-backup/`

Swap `otheruser` and `other-address` for the login and address of that second box. Trailing slashes still matter, same as the USB copy. For the full walk (prove SSH, make a landing folder, dry-run, check it landed), see [copy the house folder to another old computer](<backup-to-another-pc>).

## After the copy

Before you trust it, look on the USB (or the second box) and confirm files landed: [check that the backup actually copied](<leftover-box-backup-check>). Copy fails or the stick vanished? [When the house backup won't run](<when-backup-wont-run>).

If you used the USB disk, unmount it before you yank the cable:

`sudo umount /mnt/backup`

Leave the disk unplugged most of the time. A problem on this computer cannot also wipe a copy that is sitting in a drawer.

## Do it again next week

Same command. rsync will skip files that did not change, and copy the ones that did. A reminder on your phone is enough for now. After one manual copy worked, this computer can run that same rsync every week: [back up the folder every week without remembering](<leftover-box-backup-timer>).

## What next

See the USB disk first: [see if the USB backup disk showed up](<leftover-box-usb-disk>) (or the fuller disk list: [see disks and USB sticks on the computer](<leftover-box-lsblk>)). Confirm the copy landed: [check that the backup actually copied](<leftover-box-backup-check>). If rsync fails: [when the house backup won't run](<when-backup-wont-run>). Then copy one file back: [restore one file from the USB backup](<leftover-box-restore-one>). Then leave it. Use the folder, and copy it again next week. A Mac can also back up overnight to a separate share: [Time Machine to the house share](<time-machine-to-share>). A VM is [this note](<what-is-a-vm>), still later. Not a NAS. Not RAID. Not Backblaze on day one.


Optional: jot what you back up and where in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip

  * Skip buying a NAS for backups. The USB disk you already have is enough.
  * Skip RAID. RAID is not a backup.
  * Skip restic and Borg on day one.
  * Skip a cloud plan until the USB copy exists.
  * Skip the 3-2-1 lecture.
  * Skip leaving the USB plugged in forever.



## Sources

[Debian: rsync man page](<https://manpages.debian.org/bookworm/rsync/rsync.1.en.html>). [Ubuntu: rsync man page](<https://manpages.ubuntu.com/manpages/noble/man1/rsync.1.html>). Official pages only. For the share this copies, see [a file share](<first-file-share>). For the install, see [your first weekend](<first-weekend>). A dedicated file box is later: [a first file box (NAS)](<first-nas>).

## Also on this topic

[See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Put the house folder on a USB diskMove the house share onto a USB disk that stays plugged into the old PC so photos don't fill the system drive. You don't need a NAS for this.](<house-folder-on-usb>) [Back up a Mac to the house share with Time MachinePoint Time Machine at a Samba folder on the old PC. Separate share from photos. Cap the size. You don't need a Time Capsule or a NAS for this.](<time-machine-to-share>) [Back up a Windows PC to the house share with File HistoryPoint Windows File History at a Samba folder on the old PC. Separate share from photos. You don't need a NAS for this.](<file-history-to-share>) [Copy the house folder to another old computerA second copy over the house network to another old PC. Not only a USB stick. You don't need a NAS for this.](<backup-to-another-pc>) [When the house backup won't runrsync failed, the USB is missing, or the second copy never landed. Check the stick, the mount, the source path, then match the error (no space, permission, connection). You don't need a NAS.](<when-backup-wont-run>) [Check that the backup actually copiedAfter the copy finishes, look on the USB disk and confirm the files are there before you trust it. You don't need a NAS for this look.](<leftover-box-backup-check>) [Restore one file from the USB backupA backup you never copied back is a hope. Pull one file off the USB onto the computer so you know you can get it. You don't need a NAS for this.](<leftover-box-restore-one>) [A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [The first useful thingPut a house-wide ad block on that computer. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousClear old logs when the disk is tight](<leftover-box-old-logs>) [NextSee if the USB backup disk showed up](<leftover-box-usb-disk>)

---

*Labthrift Markdown mirror. HTML version linked above.*
