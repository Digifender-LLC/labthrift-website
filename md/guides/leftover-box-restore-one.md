# Restore one file from the USB backup

Source: https://labthrift.com/guides/leftover-box-restore-one
Markdown: https://labthrift.com/md/guides/leftover-box-restore-one.md

*Notes › / › File storage › / › Restore one file from the USB backup*

[Notes](<./>) / [File storage](<./#first-nas>) / Restore one file from the USB backup

Written 28 Aug 2026. This is a how-to, not a product card.

# Restore one file from the USB backup

A backup you never copied back is a hope. Pull one file off the USB onto the computer so you know you can get it. You don't need a NAS for this.

[Check that the backup actually copied](<leftover-box-backup-check>) asks whether files landed. This note is the next job: copy one of those files back onto the computer. Opening a photo on the USB is a look. A restore is a file you can hold again after the computer forgets it. Same computer. Same SSH from the couch. No backup software.

## Skip until one copy looked good

If you never copied the house folder, stop. That is [a backup of the house folder](<first-backup>). If you never looked on the USB, do that first: [check that the backup actually copied](<leftover-box-backup-check>). If the computer cannot see the USB disk, see it first: [see if the USB backup disk showed up](<leftover-box-usb-disk>). This note assumes that rsync already finished once and the look found real files.

## What restore is

Restore means copy one file from the second copy back onto the computer. Do it into a safe folder, not on top of the live house share. The first test should not overwrite `/srv/share`. If that copy matches, you know the USB is a backup, not a folder you never opened. You are not buying a NAS. You are not restoring the whole share tonight.

## Keep the USB mounted for this job

If you already unmounted after the look, plug the disk back in and mount the same way [a backup of the house folder](<first-backup>) taught:

`sudo mkdir -p /mnt/backup && sudo mount /dev/sdb1 /mnt/backup`

Swap `/dev/sdb1` for the partition first-backup used if yours differed. Leave it mounted until you finish. If your second copy was another computer over SSH, skip the USB mount and pull one file from that other box instead.

## Pick one file you recognize

List what the backup holds:

`ls /mnt/backup/share`

Pick one photo or document you know by name. Swap `some-photo.jpg` below for that real name. If the share has folders, list one of those first, then pick a file inside it.

## Copy it into a safe folder

Make a landing spot in your home, then copy that one file:

`mkdir -p ~/restore-test`

`cp /mnt/backup/share/some-photo.jpg ~/restore-test/`

If the file lives in a folder on the USB, keep that path after `share/`. The copy lands in `~/restore-test`, not in the live house share. That is on purpose. A first restore should prove you can get the file, not risk the original.

If the second copy is another computer, pull one file over SSH from this computer:

`scp otheruser@other-address:share/some-photo.jpg ~/restore-test/`

Swap `otheruser` and `other-address` for the login and address from first-backup. Same one-file idea.

## Confirm it is the same file

See that it landed:

`ls -l ~/restore-test/`

You should see the name you picked, with a size that is not zero. Optional check that the two copies match, byte for byte:

`cmp /mnt/backup/share/some-photo.jpg ~/restore-test/some-photo.jpg && echo same || echo different`

Quiet `same` is the win. Open the file if you want (copy it to the house share later, or plug the USB into your laptop). Don't trust a green prompt alone. One real file you recognize beats a folder listing.

## Then unmount, then tidy

When the restore is done:

`sudo umount /mnt/backup`

Unmount before you yank the cable. Leave the disk unplugged most of the time, same advice as [a backup of the house folder](<first-backup>). After you saw the file, you can throw the test folder away:

`rm -r ~/restore-test`

Skip that delete if you still want the file on the computer. Don't delete the copy on the USB.

## If the copy is empty or different

Re-run the rsync from [a backup of the house folder](<first-backup>), then look again: [check that the backup actually copied](<leftover-box-backup-check>). Check the USB is writable and not full:

`df -h /mnt/backup`

Disk room on the computer itself is [see if the computer still has room](<leftover-box-disk-space>). Don't buy a NAS for a failed first restore. Don't restore the whole share over `/srv/share` until one file works.

## What next

After one file comes back, [back up the house folder every week without remembering](<leftover-box-backup-timer>). Wrong clock: [set the computer clock to your house](<leftover-box-timezone>). Skip RAID. Skip restic and Borg. Skip cloud until the USB copy exists and one file comes back.

## Skip

  * Skip if you never ran [a backup of the house folder](<first-backup>), or never did the look in [check that the backup actually copied](<leftover-box-backup-check>).
  * Skip a NAS for this restore.
  * Skip RAID.
  * Skip restic and Borg tonight.
  * Skip restoring the whole share over the live folder as the first test.
  * Skip leaving the USB plugged in forever.
  * Skip the 3-2-1 lecture tonight.



## Sources

[Debian: cp](<https://manpages.debian.org/bookworm/coreutils/cp.1.en.html>). [Debian: mkdir](<https://manpages.debian.org/bookworm/coreutils/mkdir.1.en.html>). [Debian: ls](<https://manpages.debian.org/bookworm/coreutils/ls.1.en.html>). [Debian: cmp](<https://manpages.debian.org/bookworm/coreutils/cmp.1.en.html>). [Debian: scp](<https://manpages.debian.org/bookworm/openssh/scp.1.en.html>). [Ubuntu: cp](<https://manpages.ubuntu.com/manpages/noble/en/man1/cp.1.html>). Official pages only. For the copy this restores from, see [a backup of the house folder](<first-backup>). For the look before this job, see [check that the backup actually copied](<leftover-box-backup-check>). For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For the weekly timer after one restored file, see [back up the house folder every week without remembering](<leftover-box-backup-timer>).

## Also on this topic

[A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [See if last week's backup actually ranAfter the copy finishes, look on the USB disk and confirm the files are there before you trust it. You don't need a NAS for this look.](<leftover-box-backup-check>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [Back up the house folder every week without rememberingAfter one manual USB (or second-box) copy works, let the computer run the same rsync on a weekly timer. A phone reminder is still fine if you prefer.](<leftover-box-backup-timer>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [PreviousSee if last week's backup actually ran](<leftover-box-backup-check>) [NextSet the computer clock to your house](<leftover-box-timezone>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
