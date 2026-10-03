# Put the house folder back from the backup

Source: https://labthrift.com/guides/restore-house-folder
Markdown: https://labthrift.com/md/guides/restore-house-folder.md

*Notes › / › Getting started › / › Put the house folder back from the backup*

[Notes](<./>) / [Getting started](<./#start>) / Put the house folder back from the backup

Written 4 Sep 2026. This is a how-to, not a product card.

# Put the house folder back from the backup

After a wipe, a reinstall, or an empty share, copy the house folder from the USB (or second old PC) back onto the computer. You don't need a NAS.

Haven't made a second copy yet? Start with [a backup of the house folder](<first-backup>). Want a safe one-file drill first? Use [restore one file from the USB backup](<leftover-box-restore-one>). This note is the bigger job: put the whole house folder back where the share expects it.

## Skip until the backup looks real

If the USB (or second box) never got a copy, stop. That is [a backup of the house folder](<first-backup>), not a restore. If you never looked on the stick, look first: [check that the backup actually copied](<leftover-box-backup-check>). Don't overwrite a live share that still has newer photos. Don't buy a NAS for a folder you can copy back with rsync.

## What this is

Same `rsync` you used to make the second copy, pointed the other way. Source is the backup. Destination is the live house folder (often `/srv/share`). Trailing slashes matter. You are not imaging the whole disk. You are not restoring Pi-hole settings; that zip is [save a Pi-hole backup before you change things](<backup-pihole>).

## Step 1: awake, then SSH

Power light. Fan. If it looks asleep, start with [is the computer still on?](<leftover-box-still-on>). Soft-off on purpose? [wake the computer from the house network](<wake-on-lan>). You need SSH from the couch: [SSH from the couch](<first-ssh>). Connect fails? [when SSH won't connect](<when-ssh-wont-connect>).

## Step 2: reach the backup

USB path. Plug the stick in. See it:

`lsblk`

Mount the same way the first-backup note taught (swap the device name if yours differs):

`sudo mkdir -p /mnt/backup && sudo mount /dev/sdb1 /mnt/backup`

Confirm the mount:

`findmnt /mnt/backup`

Stick not showing up? [see if the USB backup disk showed up](<leftover-box-usb-disk>).

Second-computer path. Skip the USB mount. You will pull over SSH from the other old PC instead. That box needs to be awake and reachable: [copy the house folder to another old computer](<backup-to-another-pc>).

## Step 3: confirm the backup has files

USB:

`ls /mnt/backup/share`

You should see folders and files you recognize. Empty listing means you are looking at the wrong path, or the copy never landed. Fix that before you write anything onto the live folder.

Second PC (from this computer):

`ssh otheruser@other-address 'ls share'`

Swap the user and address you used when that second copy was made.

## Step 4: make room for the live folder

Check free space on the computer:

`df -h /`

The live disk needs more free space than the size of the backup. Tight disk: [see if the computer still has room](<leftover-box-disk-space>). Photos that should live on a stick that stays plugged in: [put the house folder on a USB disk](<house-folder-on-usb>).

Create the live folder if it is missing (fresh install):

`sudo mkdir -p /srv/share && sudo chown "$USER:$USER" /srv/share`

If Samba is gone after a wipe, put the share back after this copy: [a file share](<first-file-share>). Restore the files first so the share has something to show.

## Step 5: copy backup → live folder

Read the arrows twice. Source left. Destination right. USB example:

`rsync -a /mnt/backup/share/ /srv/share/`

Second-PC example (pull onto this computer):

`rsync -a otheruser@other-address:share/ /srv/share/`

Leave `--delete` off on the first full restore. You want files to arrive. You do not want rsync removing something on the live side because the backup is older. After a wipe, the live folder is empty anyway, so a plain `-a` is enough.

Wrong direction (live folder as the source) can empty or dilute the backup. If the terminal looks wrong, stop and remount. Mount or copy failures that look like a backup job: [when the house backup won't run](<when-backup-wont-run>).

## Step 6: check, then unmount

Look on the live folder:

`ls /srv/share`

Pick one file you know and confirm size is not zero:

`ls -l /srv/share/some-photo.jpg`

Optional: open the share from a laptop once Samba is up again: [open the house share from a laptop](<open-share-from-laptop>). Phone: [open the house share from a phone](<open-share-from-phone>).

USB still mounted? Unmount before you yank the cable:

`sudo umount /mnt/backup`

## What this is not

This is not a reason to buy a NAS tonight. It is not RAID. It is not restic or Borg for a first restore. It is not a full disk clone. It is not Pi-hole Teleporter. It is not leaving the USB plugged in forever so one bad day can wipe both copies. It is not overwriting a live share that still has newer files you care about.

## What next

Share missing after a wipe? Rebuild it with [a file share](<first-file-share>). Prove one file first next time you practice: [restore one file from the USB backup](<leftover-box-restore-one>). Keep a weekly second copy: [back up the folder every week without remembering](<leftover-box-backup-timer>). Pi-hole settings zip after a reinstall: [save a Pi-hole backup before you change things](<backup-pihole>).

## Skip

- Skip buying a NAS for a first restore.
- Skip RAID. RAID is not a backup.
- Skip `--delete` on the first full restore unless you mean to make the live folder match an older backup exactly.
- Skip restoring over a live share that still has newer photos.
- Skip leaving the USB plugged in forever.
- Skip reversing source and destination.
- Skip this until the backup listing shows real files.

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
