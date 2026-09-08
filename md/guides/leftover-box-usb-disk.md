# See if the USB backup disk showed up

Source: https://labthrift.com/guides/leftover-box-usb-disk
Markdown: https://labthrift.com/md/guides/leftover-box-usb-disk.md

*Notes › / › File storage › / › See if the USB backup disk showed up*

[Notes](<./>) / [File storage](<./#first-nas>) / See if the USB backup disk showed up

Written 27 Aug 2026. This is a how-to, not a product card.

# See if the USB backup disk showed up

Before you trust the weekly copy, confirm the computer can see the USB disk.

Before you trust a USB backup, confirm the computer can see the stick. `lsblk` lists the computer's disks. The USB one usually appears as a new `sd…` (or `nvme…` if that is what you plugged in) with a size that matches the stick. Mount means the computer made the disk's folder visible so a copy can write there.

## Skip until SSH works and one backup is in reach

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). If you have never copied the house folder (and are not about to), start with [a backup of the house folder](<first-backup>). This note assumes you can log in, and you already did one manual backup once, or you are about to.

## What this is

A look, not a shopping trip. Plug the USB disk you already have into the computer. Ask whether the computer sees it before you blame rsync or buy a NAS. You are not buying a file box, a new enclosure, or a bigger stick tonight.

## Ask if the computer sees the stick

Plug the USB in. Wait a few seconds. SSH in from the couch, then run:

`lsblk`

Point at a new disk line whose SIZE matches the stick, not the tiny system disk. The computer's own disk is usually the small one you installed Debian or Ubuntu on. That disk size is [see how big the computer disk already is](<leftover-box-disk>). The USB line is the one that showed up after you plugged in. If nothing new appears, try another port or cable, wait a few seconds, and run the same command again. Don't buy a NAS for a missing USB.

## Optional clearer print

If you want filesystem labels too (ext4, exfat, and the like):

`lsblk -f`

That extra column is a name check, not a wipe. Keep this light. Don't partition or format the stick tonight.

## If you see it but the backup path failed

The computer can see the disk. Confirm the folder you copy into is the mounted USB path from [a backup of the house folder](<first-backup>) (often `/mnt/backup`). Then confirm files landed: [check that the backup actually copied](<leftover-box-backup-check>). If the disk is full, that is [see if the computer still has room](<leftover-box-disk-space>).

## What next

Manual copy: [a backup of the house folder](<first-backup>). Confirm files landed: [check that the backup actually copied](<leftover-box-backup-check>). Weekly timer later: [back up the house folder every week without remembering](<leftover-box-backup-timer>). Skip a NAS for a missing USB.

## Skip

  * Skip if SSH fails. That is [SSH from the couch](<first-ssh>).
  * Skip a NAS for a missing USB.
  * Skip wiping the stick tonight.
  * Skip buying an enclosure for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: lsblk](<https://manpages.debian.org/bookworm/util-linux/lsblk.8.en.html>). [Ubuntu: lsblk](<https://manpages.ubuntu.com/manpages/noble/en/man8/lsblk.8.html>). Official pages only. For the copy, see [a backup of the house folder](<first-backup>). For confirming files landed, see [check that the backup actually copied](<leftover-box-backup-check>). For copying one file back, see [restore one file from the USB backup](<leftover-box-restore-one>). For disk size, see [see how big the computer disk already is](<leftover-box-disk>). For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [See if last week's backup actually ranAfter the copy finishes, look on the USB disk and confirm the files are there before you trust it. You don't need a NAS for this look.](<leftover-box-backup-check>) [Restore one file from the USB backupA backup you never copied back is a hope. Pull one file off the USB onto the computer so you know you can get it. You don't need a NAS for this.](<leftover-box-restore-one>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Put the house folder on a USB diskMove the house share onto a USB disk that stays plugged into the old PC so photos don't fill the system drive. You don't need a NAS for this.](<house-folder-on-usb>) [Back up the house folder every week without rememberingAfter one manual USB (or second-box) copy works, let the computer run the same rsync on a weekly timer. A phone reminder is still fine if you prefer.](<leftover-box-backup-timer>) [PreviousA backup of the house folder](<first-backup>) [NextSee if last week's backup actually ran](<leftover-box-backup-check>)

---

*Labthrift Markdown mirror. HTML version linked above.*
