# Clear old package downloads when the disk is tight

Source: https://labthrift.com/guides/leftover-box-apt-clean
Markdown: https://labthrift.com/md/guides/leftover-box-apt-clean.md

*Notes › / › File storage › / › Clear old package downloads when the disk is tight*

[Notes](<./>) / [File storage](<./#first-nas>) / Clear old package downloads when the disk is tight

Written 26 Aug 2026. This is a how-to, not a product card.

# Clear old package downloads when the disk is tight

After weekly updates, leftover downloads can sit on the disk. Clear them safely before you buy a bigger drive or a NAS.

This is a cleanup, not a shopping trip. The computer already has room checks and weekly fixes. You are clearing installer files that pile up after those updates, before you spend money on a bigger drive.

## Skip until you looked at disk room

If you have not checked room yet, stop. That look is [see if the computer still has room](<leftover-box-disk-space>). If you want to see which folders are taking the room, that is [see which folders are eating the disk](<leftover-box-largest-folders>). From the couch, ask:

`df -h`

Point at the line that ends in `/`. If `Use%` is fine, skip this note. If phones and laptops cannot open the house folder, fix that first: [when the house share disappeared, check the computer](<leftover-box-share-check>).

## What this is

`apt` is the Debian and Ubuntu tool that installs updates. Weekly [updates](<leftover-box-updates>) download installer files into a cache folder. Those files stay after the install finishes. Clearing them frees room. It does not uninstall Pi-hole, Samba, or your house folder.

## See how big the cache is

Optional, but nice before you clear:

`sudo du -sh /var/cache/apt/archives`

That number is the size of the leftover downloads, not your programs.

## Clear it

Clear the downloaded package files:

`sudo apt clean`

That empties the cache. Your installed programs stay. A second, careful step is:

`sudo apt autoremove`

That removes packages marked unused after upgrades. Skip `autoremove` on day one if you are nervous. `apt clean` alone is enough for this note.

## Check again

Ask about room once more:

`df -h`

Look at `/` again. The longer look is still [see if the computer still has room](<leftover-box-disk-space>). If it is still full, delete real junk (Downloads and Trash) from that note. Don't buy a NAS for cache files.

## What next

If there is no second copy yet, that is [a backup of the folder](<first-backup>). After one manual copy works, confirm it with [check that the backup actually copied](<leftover-box-backup-check>). Skip a NAS. Skip a new internal drive this weekend. Skip filling the old laptop with a movie library.

## Skip

  * Skip this note if disk room is fine.
  * Skip this note if you never ran updates.
  * Skip a NAS for this.
  * Skip deleting `/srv/share` to "make room."
  * Skip random `rm -rf` on system folders.



## Sources

[Debian: apt](<https://manpages.debian.org/bookworm/apt/apt.8.en.html>) (clean). [Ubuntu: apt](<https://manpages.ubuntu.com/manpages/noble/en/man8/apt.8.html>) (clean). Official pages only. For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For weekly fixes, see [keep the computer updated](<leftover-box-updates>). For the share, see [a file share on the computer](<first-file-share>).

## Also on this topic

[See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.](<leftover-box-updates>) [A backup of the folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [PreviousSee which folders are eating the disk](<leftover-box-largest-folders>) [NextClear old logs when the disk is tight](<leftover-box-old-logs>)

---

*Labthrift Markdown mirror. HTML version linked above.*
