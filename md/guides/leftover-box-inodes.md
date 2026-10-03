# When copies fail but free space looks fine

Source: https://labthrift.com/guides/leftover-box-inodes
Markdown: https://labthrift.com/md/guides/leftover-box-inodes.md

*Notes › / › File storage › / › When copies fail but free space looks fine*

[Notes](<./>) / [File storage](<./#first-nas>) / When copies fail but free space looks fine

Written 28 Aug 2026. This is a how-to, not a product card.

# When copies fail but free space looks fine

Before you buy a bigger drive or a NAS, check computer file slots with df -i when copies fail but free space looks fine.

Photos stop copying. The computer says the disk is full. Then [see if the computer still has room](<leftover-box-disk-space>) shows plenty of gigabytes left. That is not a broken meter. The computer also has a limited count of file slots. When those slots are used up, new files fail even if there are gigabytes free. You are not buying a NAS for this look.

## Skip until SSH works

If you cannot log in from the couch, stop. That is [SSH from the couch](<first-ssh>). This note assumes you can type commands on the computer from the couch.

## What this is

A file slot is the computer's name for each file and folder. Linux people call that an inode. You don't need the word. You need the check. `df -h` is gigabytes. `df -i` is file slots. This is not the same note as [see which folders are eating the disk](<leftover-box-largest-folders>) (that is which folders ate the gigabytes) or [clear old logs when the disk is tight](<leftover-box-old-logs>) (that is diary size). You are only asking whether the file-slot column is full.

## Ask for the file slots

SSH in from the couch, then run:

`df -i`

Point at the line for the computer root, usually `/`. Read `IUse%` (or the Use% column on some boxes). Under about 80% is normal. Near 100% means the computer ran out of file slots, not gigabytes. That is why a copy can fail while `df -h` still looks fine.

Optional one-line focus, if the full table is noisy:

`df -i /`

## If the file slots are nearly full

Don't format the disk. Don't buy a drive tonight. First see which folders are busy: [see which folders are eating the disk](<leftover-box-largest-folders>). Lots of tiny files in one folder (old logs, leftover package lists, a previous person's Downloads) eat file slots fast. Safe cleanups that often help:

  * [clear old package downloads when the disk is tight](<leftover-box-apt-clean>)
  * [clear old logs when the disk is tight](<leftover-box-old-logs>)



If `IUse%` is low and copies still fail, go back to gigabytes: [see if the computer still has room](<leftover-box-disk-space>). Skip a monitoring box for this look.

## What next

Gigabyte room stays [see if the computer still has room](<leftover-box-disk-space>). Folder sizes stay [see which folders are eating the disk](<leftover-box-largest-folders>). How big the disk already is stays [see how big the disk already is](<leftover-box-disk>). A second copy is [a backup of the house folder](<first-backup>). Skip a new 4TB drive this weekend.

## Skip

  * Skip this note if SSH from the couch does not work yet. That is [SSH from the couch](<first-ssh>).
  * Skip buying a bigger drive or a NAS because one copy failed once.
  * Skip formatting the disk tonight.
  * Skip a monitoring box for this look.
  * Skip opening SSH to the internet.



## Sources

[Debian: df](<https://manpages.debian.org/bookworm/coreutils/df.1.en.html>) (`-i`). [Ubuntu: df](<https://manpages.ubuntu.com/manpages/noble/en/man1/df.1.html>). Official pages only. For gigabyte room, see [see if the computer still has room](<leftover-box-disk-space>). For folder sizes, see [see which folders are eating the disk](<leftover-box-largest-folders>). For leftover package downloads, see [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). For old diary pages, see [clear old logs when the disk is tight](<leftover-box-old-logs>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [Clear old package downloads when the disk is tightAfter weekly updates, leftover downloads can sit on the disk. Clear them safely before you buy a bigger drive or a NAS.](<leftover-box-apt-clean>) [Clear old logs when the disk is tightBefore you buy a bigger drive or a NAS, see how much room the computer diary is using, then trim old entries safely.](<leftover-box-old-logs>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the disk already is.](<leftover-box-disk>) [PreviousSee if the computer still has room](<leftover-box-disk-space>) [NextSee which folders are eating the disk](<leftover-box-largest-folders>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
