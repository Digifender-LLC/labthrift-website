# When the house backup won't run

Source: https://labthrift.com/guides/when-backup-wont-run
Markdown: https://labthrift.com/md/guides/when-backup-wont-run.md

*Notes › / › Getting started › / › When the house backup won't run*

[Notes](<./>) / [Getting started](<./#start>) / When the house backup won't run

Written 4 Sep 2026. This is a how-to, not a product card.

# When the house backup won't run

rsync failed, the USB is missing, or the second copy never landed. Check the stick, the mount, the source path, then match the error (no space, permission, connection). You don't need a NAS.

Haven't made a second copy yet? Start with [a backup of the house folder](<first-backup>). Copying to another old PC instead of a stick? See [copy the house folder to another old computer](<backup-to-another-pc>). This note is only for when the copy fails, or used to work and now doesn't.

## Skip until you have a real error

Copy the exact line from the terminal. "No such file or directory," "No space left on device," "Permission denied," and "Connection refused" are different fixes. Don't buy a NAS for a stick that never mounted.

## What this is

A house backup is usually `rsync` from the house folder (often `/srv/share`) onto a USB disk or another old PC. It needs the source folder to exist, the destination to be mounted and writable, and room on that destination. One of those usually drifted. Stick unplugged, wrong `/dev/sdX`, empty mount point, full USB, or SSH broken to the second box. The walk below is order of cheap checks.

## Step 1: is the computer awake?

Power light. Fan. Screen if it has one. If it looks asleep or dead, start with [is the computer still on?](<leftover-box-still-on>). Soft-off on purpose? Wake it from the house network: [wake the computer from the house network](<wake-on-lan>). You need SSH from the couch before any of the commands below: [SSH from the couch](<first-ssh>). If that connect fails first, fix it with [when SSH won't connect](<when-ssh-wont-connect>).

## Step 2: USB path — see the stick, then mount it

If your second copy is a USB disk, plug it in. Confirm the computer sees it:

`lsblk`

You should see a new disk (often `sdb` with a partition like `sdb1`). Use the name `lsblk` printed, not a guess from last week. Fuller walk: [see if the USB backup disk showed up](<leftover-box-usb-disk>).

Mount it the same way the first-backup note taught:

`sudo mkdir -p /mnt/backup && sudo mount /dev/sdb1 /mnt/backup`

Swap `/dev/sdb1` if yours differs. Check it stuck:

`findmnt /mnt/backup`

If that prints nothing, the mount failed. Don't run rsync into an empty `/mnt/backup` on the system disk by accident.

## Step 3: confirm the source folder

The house folder has to exist before you copy it:

`ls /srv/share`

If that path is wrong on your box, use the folder you actually share. Haven't made one yet? That is [a file share](<first-file-share>), not a backup bug.

## Step 4: match the symptom to a fix

What you see| What to do  
---|---  
No such file or directory (source)| Wrong source path. Fix Step 3. Trailing slashes matter on rsync: `rsync -a /srv/share/ /mnt/backup/share/` copies the contents into that backup folder.  
No such file or directory (destination) / empty mount| USB never mounted, or you typed the wrong mount folder. Redo Step 2. Confirm with `findmnt /mnt/backup` before rsync.  
No space left on device| The destination is full (USB or second box), or you wrote onto the system disk by mistake. Full walk: [when the backup USB is full](<when-backup-usb-full>). Quick check: `df -h /mnt/backup` and [see if the computer still has room](<leftover-box-disk-space>).  
Permission denied| Destination folder not writable, or you need sudo for the mount only. After a normal mount, your user should own the copy target: `sudo mkdir -p /mnt/backup/share && sudo chown "$USER:$USER" /mnt/backup/share`. Then rerun rsync without stuffing every file through root.  
Connection refused / timed out / Permission denied (second PC)| The other-computer path needs working SSH to that box first. Fix connect: [when SSH won't connect](<when-ssh-wont-connect>). Full second-box walk: [copy the house folder to another old computer](<backup-to-another-pc>).  
rsync exits 0 but the USB looks empty| You may have copied into an unmounted path on the system disk, or looked at the wrong folder. Confirm the mount, then check the copy landed: [check that the backup actually copied](<leftover-box-backup-check>).  
  
## Check

Run the copy again (USB example):

`rsync -a /srv/share/ /mnt/backup/share/`

Then look:

`ls /mnt/backup/share`

You should see the same folders as `/srv/share`. Unmount before you yank the cable:

`sudo umount /mnt/backup`

Pull one file back sometime so you know restore works: [restore one file from the USB backup](<leftover-box-restore-one>).

## What this is not

This is not a reason to buy a NAS tonight. It is not RAID. It is not restic, Borg, or a cloud plan until a plain second copy exists on a stick or another old PC. It is not leaving the USB plugged in forever so one bad day can wipe both copies.

## What next

First successful copy still lives on [a backup of the house folder](<first-backup>). Stick packed full: [when the backup USB is full](<when-backup-usb-full>). Stick not showing up: [see if the USB backup disk showed up](<leftover-box-usb-disk>). After a green terminal, confirm files landed: [check that the backup actually copied](<leftover-box-backup-check>). Second old PC instead of USB: [copy the house folder to another old computer](<backup-to-another-pc>). When the copy is boring, let the computer do it weekly: [back up the folder every week without remembering](<leftover-box-backup-timer>).

## Skip

  * Skip buying a NAS for a first-timer rsync failure.
  * Skip RAID. RAID is not a backup.
  * Skip restic and Borg until a plain second copy works.
  * Skip a cloud plan until the USB (or second-box) copy exists.
  * Skip leaving the USB plugged in forever.
  * Skip guessing last week's `/dev/sdb1` instead of running `lsblk` again.



## Sources

[Debian: rsync man page](<https://manpages.debian.org/bookworm/rsync/rsync.1.en.html>). [Ubuntu: rsync man page](<https://manpages.ubuntu.com/manpages/noble/man1/rsync.1.html>). [Debian: lsblk](<https://manpages.debian.org/bookworm/util-linux/lsblk.8.en.html>). [Debian: df](<https://manpages.debian.org/bookworm/coreutils/df.1.en.html>). Official pages only. For the copy this fixes, see [a backup of the house folder](<first-backup>). For the stick check, see [see if the USB backup disk showed up](<leftover-box-usb-disk>). For a landed-copy look, see [check that the backup actually copied](<leftover-box-backup-check>). For the second-box path, see [copy the house folder to another old computer](<backup-to-another-pc>).

## Also on this topic

[A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [Check that the backup actually copiedAfter the copy finishes, look on the USB disk and confirm the files are there before you trust it. You don't need a NAS for this look.](<leftover-box-backup-check>) [Restore one file from the USB backupA backup you never copied back is a hope. Pull one file off the USB onto the computer so you know you can get it. You don't need a NAS for this.](<leftover-box-restore-one>) [Copy the house folder to another old computerA second copy of the house folder, over the house network to another old PC. Not only a USB stick. You don't need a NAS for this.](<backup-to-another-pc>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [When SSH won't connectSSH hangs, says connection refused, or Permission denied. Check the computer is on, confirm the address, then the user and password. You don't need a new router or a KVM.](<when-ssh-wont-connect>) [A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [PreviousA backup of the house folder](<first-backup>) [NextCheck that the backup actually copied](<leftover-box-backup-check>)

---

*Labthrift Markdown mirror. HTML version linked above.*
