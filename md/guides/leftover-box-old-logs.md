# Clear old logs when the disk is tight

Source: https://labthrift.com/guides/leftover-box-old-logs
Markdown: https://labthrift.com/md/guides/leftover-box-old-logs.md

*Notes › / › File storage › / › Clear old logs when the disk is tight*

[Notes](<./>) / [File storage](<./#first-nas>) / Clear old logs when the disk is tight

Written 28 Aug 2026. This is a how-to, not a product card.

# Clear old logs when the disk is tight

Before you buy a bigger drive or a NAS, see how much room the computer diary is using, then trim old entries safely.

The computer keeps a diary of what programs said. That diary can grow for months. When the disk is tight and `/var` looked big, this is a safe trim. You are not buying a bigger drive, a NAS, or a monitoring box for this.

## Skip until you looked at disk room

If you have not checked room yet, stop. That look is [see if the computer still has room](<leftover-box-disk-space>). If you want to see which folders are taking the room, that is [see which folders are eating the disk](<leftover-box-largest-folders>). Clear leftover package downloads first if you have not: [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). From the couch, ask:

`df -h`

Point at the line that ends in `/`. If `Use%` is fine, skip this note. If phones and laptops cannot open the house folder, fix that first: [when the house share disappeared, check the computer](<leftover-box-share-check>).

## What this is

`journalctl` is the Debian and Ubuntu tool that reads the computer diary. The same tool can tell you how big that diary is, and trim old pages. You are keeping recent words. You are not deleting the house folder, Pi-hole, or Samba. You are not installing a log app.

## See how big the diary is

SSH in from the couch, then run:

`journalctl --disk-usage`

You should see a line like `Archived and active journals take up X`. A few hundred megabytes is common on a computer that has been on for weeks. A few gigabytes is worth trimming. If the number is tiny, skip the rest of this note.

## Trim old entries

Keep about two weeks of diary, and drop older pages:

`sudo journalctl --vacuum-time=14d`

Or cap the diary at a size you pick (200 megabytes is a sensible computer ceiling):

`sudo journalctl --vacuum-size=200M`

Pick one. You don't need both tonight. Recent errors stay. Months-old noise goes. Don't run random `rm` under `/var/log`.

## Check again

Ask about the diary size once more:

`journalctl --disk-usage`

Then look at disk room:

`df -h`

The longer look is still [see if the computer still has room](<leftover-box-disk-space>). If you need to read a current error, that is [when something broke, look at the log](<leftover-box-read-logs>). Don't buy a NAS because old diary pages filled an old laptop.

## What next

Package download cleanup stays [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). Folder hunters stay [see which folders are eating the disk](<leftover-box-largest-folders>). A second copy is [a backup of the house folder](<first-backup>). Skip a new 4TB drive this weekend.

## Skip

  * Skip this note if disk room is fine.
  * Skip this note if the diary size is already tiny.
  * Skip a NAS for this look.
  * Skip a new internal drive this weekend.
  * Skip deleting `/var`, `/var/log`, or `/srv/share` by hand.
  * Skip installing a log or monitoring app tonight.



## Sources

[Debian: journalctl](<https://manpages.debian.org/bookworm/systemd/journalctl.1.en.html>) (--disk-usage, --vacuum-time, --vacuum-size). [Ubuntu: journalctl](<https://manpages.ubuntu.com/manpages/noble/en/man1/journalctl.1.html>). Official pages only. For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For which folders are big, see [see which folders are eating the disk](<leftover-box-largest-folders>). For leftover package downloads, see [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). For reading a current error, see [when something broke, look at the log](<leftover-box-read-logs>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [Clear old package downloads when the disk is tightAfter weekly updates, leftover downloads can sit on the disk. Clear them safely before you buy a bigger drive or a NAS.](<leftover-box-apt-clean>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [A file share on the computerA folder on the computer that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [PreviousClear old package downloads when the disk is tight](<leftover-box-apt-clean>) [NextA backup of the house folder](<first-backup>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
