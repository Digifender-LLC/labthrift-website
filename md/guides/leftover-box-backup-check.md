# Check that the backup actually copied

Source: https://labthrift.com/guides/leftover-box-backup-check
Markdown: https://labthrift.com/md/guides/leftover-box-backup-check.md

*Notes › / › File storage › / › Check that the backup actually copied*

[Notes](<./>) / [File storage](<./#first-nas>) / Check that the backup actually copied

Written 26 Aug 2026. This is a how-to, not a product card.

# Check that the backup actually copied

After the copy finishes, look on the USB disk and confirm the files are there before you trust it. You don't need a NAS for this look.

A backup is a second copy. `rsync` is the copy command from [a backup of the folder](<first-backup>). A green terminal without a look is how people learn the USB was empty. This note is the look. If the computer cannot even see the USB disk, see it first: [see if the USB backup disk showed up](<leftover-box-usb-disk>).

## Skip until one backup ran

If you never copied the house folder, do that first: [a backup of the folder](<first-backup>). This note assumes that rsync already finished once. If rsync never finished, start with [when the house backup won't run](<when-backup-wont-run>).

## What this is

You are not buying a NAS. You are asking whether the second copy has files, the same way [see if the computer still has room](<leftover-box-disk-space>) asks whether the disk has room. Look on the USB (or the second the computer) before you trust the copy.

## Keep the USB mounted for this look

If you already unmounted after first-backup, plug the disk back in and mount the same way that note taught:

`sudo mkdir -p /mnt/backup && sudo mount /dev/sdb1 /mnt/backup`

Swap `/dev/sdb1` for the partition first-backup used if yours differed. Leave it mounted until you finish this look. If your second copy was another old PC over SSH, skip the USB mount and look on that other box instead.

## Look at the copy

List what landed:

`ls /mnt/backup`

You should see a `share` folder (or the same names you copied). Then compare sizes:

`sudo du -sh /mnt/backup`

`sudo du -sh /srv/share`

Those two numbers should be in the same ballpark. Empty or tiny on the USB means the copy did not land. If you copied to another the computer, list and size that `share` folder there the same way.

## Spot-check one file

Open a photo or a document from the USB on the computer, or plug the USB into your laptop and open one file there. Don't trust the terminal alone. One real file you recognize beats a green prompt.

## Then unmount

When the look is done:

`sudo umount /mnt/backup`

Unmount before you yank the cable. Leave the disk unplugged most of the time, same advice as [a backup of the folder](<first-backup>).

## If the copy is empty or tiny

Re-run the rsync from [a backup of the folder](<first-backup>). Check the USB is writable and not full:

`df -h /mnt/backup`

Disk room on the computer itself is [see if the computer still has room](<leftover-box-disk-space>). Don't buy a NAS for a failed first copy.

## What next

After one real copy works, [restore one file from the USB backup](<leftover-box-restore-one>) so you know you can get it back. Then [back up the folder every week without remembering](<leftover-box-backup-timer>). Wrong clock: [set the computer clock to your house](<leftover-box-timezone>). Skip RAID. Skip restic and Borg. Skip cloud until the USB copy exists.

## Skip

  * Skip if you never ran [a backup of the folder](<first-backup>).
  * Skip a NAS for this look.
  * Skip RAID.
  * Skip leaving the USB plugged in forever.
  * Skip the 3-2-1 lecture tonight.



## Sources

[Debian: rsync](<https://manpages.debian.org/bookworm/rsync/rsync.1.en.html>). [Debian: df](<https://manpages.debian.org/bookworm/coreutils/df.1.en.html>). [Debian: du](<https://manpages.debian.org/bookworm/coreutils/du.1.en.html>). [Ubuntu: rsync](<https://manpages.ubuntu.com/manpages/noble/man1/rsync.1.html>). [Ubuntu: df](<https://manpages.ubuntu.com/manpages/noble/en/man1/df.1.html>). [Ubuntu: du](<https://manpages.ubuntu.com/manpages/noble/en/man1/du.1.html>). Official pages only. For the copy this checks, see [a backup of the folder](<first-backup>). For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For restoring one file after the look, see [restore one file from the USB backup](<leftover-box-restore-one>). For the weekly timer after one checked copy, see [back up the folder every week without remembering](<leftover-box-backup-timer>).

## Also on this topic

[A backup of the folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [When the house backup won't runrsync failed, the USB is missing, or the second copy never landed. Check the stick, the mount, the source path, then match the error (no space, permission, connection). You don't need a NAS.](<when-backup-wont-run>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Restore one file from the USB backupA backup you never copied back is a hope. Pull one file off the USB onto the computer so you know you can get it. You don't need a NAS for this.](<leftover-box-restore-one>) [Back up the folder every week without rememberingAfter one manual USB (or second-box) copy works, let the computer run the same rsync on a weekly timer. A phone reminder is still fine if you prefer.](<leftover-box-backup-timer>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [PreviousSee if the USB backup disk showed up](<leftover-box-usb-disk>) [NextRestore one file from the USB backup](<leftover-box-restore-one>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
