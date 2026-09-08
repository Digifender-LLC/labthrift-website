# When the backup USB is full

Source: https://labthrift.com/guides/when-backup-usb-full
Markdown: https://labthrift.com/md/guides/when-backup-usb-full.md

*Notes › / › Getting started › / › When the backup USB is full*

[Notes](<./>) / [Getting started](<./#start>) / When the backup USB is full

Written 5 Sep 2026. This is a how-to, not a product card.

# When the backup USB is full

rsync says no space, or `df` shows the stick is packed. Confirm the mount, free room or use a bigger stick, or copy to another old PC. You don't need a NAS.

Haven't made a second copy yet? Start with [a backup of the house folder](<first-backup>). Other rsync errors (missing stick, permission, SSH)? That wider walk is [when the house backup won't run](<when-backup-wont-run>). This note is only for a destination that ran out of room.

## Skip until you see no space

Copy the exact line. `No space left on device` is this page. A stick that never mounted is not "full." Don't buy a NAS because one 32 GB stick filled up with photos.

## What this is

The house folder grew. The USB (or the second PC folder you copy into) did not. `rsync` needs free bytes on the destination. Sometimes the failure is a fake full: you wrote into an empty `/mnt/backup` on the system disk because the stick never mounted. The checks below separate those two problems before you delete anything.

## Step 1: awake, then SSH

Power light. Fan. If it looks asleep, start with [is the computer still on?](<leftover-box-still-on>). You need SSH from the couch: [SSH from the couch](<first-ssh>). Connect fails? [when SSH won't connect](<when-ssh-wont-connect>).

## Step 2: confirm the stick is really mounted

Plug the backup USB in. See it:

`lsblk`

You should see a disk and a partition (often `sdb1`). Fuller look: [see if the USB backup disk showed up](<leftover-box-usb-disk>).

Mount the usual way if it is not already attached:

`sudo mkdir -p /mnt/backup && sudo mount /dev/sdb1 /mnt/backup`

Swap `/dev/sdb1` for what `lsblk` printed. Confirm the mount:

`findmnt /mnt/backup`

A line with a real device under `SOURCE` means the stick is attached. No line means the mount failed. Do not run `rsync` into a bare folder on the system disk. Blank or Windows-formatted stick? [Format a USB stick for the house backup](<format-usb-for-backup>).

## Step 3: see how full the destination is

Print human sizes for the backup mount and the system disk:

`df -h /mnt/backup /`

Look at the `Use%` and `Avail` columns. If `/mnt/backup` shows 95–100% (or `Avail` is tiny) and the source is a USB device, the stick is the problem. If `/` is full and `/mnt/backup` is not a USB device, you filled the computer itself. System disk check: [see if the computer still has room](<leftover-box-disk-space>).

## Step 4: see what is eating the stick

List top-level sizes on the backup folder:

`sudo du -h --max-depth=1 /mnt/backup | sort -h`

You usually see one big `share` (or whatever folder name you used) that matches the house folder. Old practice copies, leftover ISOs, or a second dated folder from an earlier experiment are fair game to delete. Do not wipe the only good second copy unless you already have another one (second old PC, or a fresh stick you just filled).

Compare to the live house folder:

`sudo du -sh /srv/share /mnt/backup/share`

If the live share is bigger than the stick's free space plus what is already on the stick, a plain `rsync` cannot finish on this stick. You need a bigger destination, not a luckier retry.

## Step 5: pick one fix

Situation| What to do  
---|---  
Stick is full; you still want USB| Delete junk you recognize on the stick, or move to a bigger spare. A clean bigger stick: [format a USB stick for the house backup](<format-usb-for-backup>), then run the copy from [a backup of the house folder](<first-backup>).  
You can spare another old PC| Park the second copy on the network instead: [copy the house folder to another old computer](<backup-to-another-pc>). Keep the small stick for a short emergency copy if you want, or retire it.  
Live share filled the system disk| The house folder itself needs a bigger home on a disk that stays plugged in: [put the house folder on a USB disk](<house-folder-on-usb>). That is the live share, not the backup stick.  
Mount was empty; system disk filled| You may have written a fake "backup" onto `/`. Free room on the computer ([see if the computer still has room](<leftover-box-disk-space>)), mount the stick for real, then copy again. Confirm it landed: [check that the backup actually copied](<leftover-box-backup-check>).  

Deleting on the stick (only after you know what it is):

`rm -ri /mnt/backup/some-old-folder`

Ask first. Skip `rm -rf /`. Skip wiping the live `/srv/share` to "make the backup fit."

## Step 6: copy again, then unplug safely

With room available and the stick mounted:

`rsync -a /srv/share/ /mnt/backup/share/`

Then look:

`ls /mnt/backup/share`

You should see the same folders as `/srv/share`. Check free space again:

`df -h /mnt/backup`

Leave a little headroom so next week's photos don't fail on day one. Unmount before you yank the cable: [unplug the backup USB safely](<unplug-backup-usb>).

## What this is not

This is not a reason to buy a NAS tonight. It is not RAID. It is not a cloud plan until a plain second copy exists on a stick or another old PC. It is not deleting the live house folder to shrink the backup. It is not leaving the only backup stick plugged in forever so one bad day can wipe both copies.

## What next

First successful copy still lives on [a backup of the house folder](<first-backup>). Other failure modes: [when the house backup won't run](<when-backup-wont-run>). Confirm files landed: [check that the backup actually copied](<leftover-box-backup-check>). Bigger destination on the network: [copy the house folder to another old computer](<backup-to-another-pc>). Weekly habit: [back up the folder every week without remembering](<leftover-box-backup-timer>). Whole folder back after a wipe: [put the house folder back from the backup](<restore-house-folder>).

## Skip

- Skip buying a NAS because one stick filled up.
- Skip RAID. RAID is not a backup.
- Skip deleting the live house folder to make rsync fit.
- Skip `rm -rf` on paths you have not listed with `du` first.
- Skip running rsync into `/mnt/backup` when `findmnt` prints nothing.
- Skip leaving the only backup stick plugged in forever.
