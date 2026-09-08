# See which folders are eating the disk

Source: https://labthrift.com/guides/leftover-box-largest-folders
Markdown: https://labthrift.com/md/guides/leftover-box-largest-folders.md

*Notes › / › File storage › / › See which folders are eating the disk*

[Notes](<./>) / [File storage](<./#first-nas>) / See which folders are eating the disk

Written 28 Aug 2026. This is a how-to, not a product card.

# See which folders are eating the disk

Before you buy a bigger drive or a NAS, ask which folders are taking the room.

The computer said the disk is getting full. You already looked with `df`. Now you want the next question: where did the room go? This is a look, not a shopping trip. You are not buying a NAS, a bigger laptop drive, or a tiny computer for this.

## Skip until you looked at disk room

If you have not checked room yet, stop. That look is [see if the computer still has room](<leftover-box-disk-space>). If copies fail while free space looks fine, check file slots: [when copies fail but free space looks fine](<leftover-box-inodes>). From the couch, ask:

`df -h`

Point at the line that ends in `/`. If `Use%` is fine, skip this note. If phones and laptops cannot open the house folder, fix that first: [when the house share disappeared, check the computer](<leftover-box-share-check>).

## What this is

`du` is the computer reporting how much room each folder is using. You are asking one folder deep on the disk, then reading the last line. The biggest folder is at the bottom. You are not installing a disk-space app, and you are not deleting anything yet.

## Ask which folders are big

SSH in from the couch, then run:

`sudo du -xh -d 1 / 2>/dev/null | sort -h`

This can take a minute on an old laptop. Let it finish. Don't buy anything while it runs. `-x` stays on the disk, so a USB backup stick is not in this list. `-d 1` means one folder deep. `sort -h` puts the smallest first, so the eater is last.

You should see lines like `/home`, `/var`, `/usr`, `/srv`. `/usr` is the OS. A few gigabytes there is normal. Don't delete it. `/srv` is the house folder from [a file share on the computer](<first-file-share>). That number should match what [see if the computer still has room](<leftover-box-disk-space>) already told you. `/var` is logs and leftover package downloads. `/home` is laptop Downloads and Trash if this computer still has a desktop user.

## Optional: look one folder deeper

If `/var` is the last line, look inside it:

`sudo du -xh -d 1 /var 2>/dev/null | sort -h`

Same idea for `/home` or `/srv`. Keep going one folder at a time. Don't jump into random `rm`.

## If a folder is the eater

If `/var` is huge, clear leftover package downloads: [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). Then trim old diary pages: [clear old logs when the disk is tight](<leftover-box-old-logs>). If `/srv` is huge, that is the house folder doing its job. Copy it off: [a backup of the house folder](<first-backup>). Then delete only files you recognize from the share, not system folders. If `/home` is huge and this computer is a laptop, empty Downloads and Trash from [see if the computer still has room](<leftover-box-disk-space>). Don't buy a NAS because an old laptop disk is small.

## What next

Room check stays [see if the computer still has room](<leftover-box-disk-space>). One safe cleanup is [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). Another is [clear old logs when the disk is tight](<leftover-box-old-logs>). How big the disk already is stays [see how big the disk already is](<leftover-box-disk>). A second copy is [a backup of the house folder](<first-backup>). Skip a new 4TB drive this weekend.

## Skip

  * Skip this note if disk room is fine.
  * Skip a NAS for this look.
  * Skip a new internal drive this weekend.
  * Skip deleting `/usr`, `/var`, or `/srv/share` to "make room."
  * Skip random `rm -rf` on system folders.
  * Skip installing a disk-space app tonight.



## Sources

[Debian: du](<https://manpages.debian.org/bookworm/coreutils/du.1.en.html>). [Debian: sort](<https://manpages.debian.org/bookworm/coreutils/sort.1.en.html>). [Ubuntu: du](<https://manpages.ubuntu.com/manpages/noble/en/man1/du.1.html>). [Ubuntu: sort](<https://manpages.ubuntu.com/manpages/noble/en/man1/sort.1.html>). Official pages only. For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For leftover package downloads, see [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). For disk size, see [see how big the disk already is](<leftover-box-disk>). For a second copy, see [a backup of the house folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Clear old package downloads when the disk is tightAfter weekly updates, leftover downloads can sit on the disk. Clear them safely before you buy a bigger drive or a NAS.](<leftover-box-apt-clean>) [Clear old logs when the disk is tightBefore you buy a bigger drive or a NAS, see how much room the computer diary is using, then trim old entries safely.](<leftover-box-old-logs>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the disk already is.](<leftover-box-disk>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [A file share on the computerA folder on the computer that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [A first file box (NAS) for one personA quiet box for photos and backups. Two drives if you want sleep.](<first-nas>) [PreviousWhen copies fail but free space looks fine](<leftover-box-inodes>) [NextClear old package downloads when the disk is tight](<leftover-box-apt-clean>)

---

*Labthrift Markdown mirror. HTML version linked above.*
