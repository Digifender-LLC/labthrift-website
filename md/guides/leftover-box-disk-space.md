# See if the computer still has room

Source: https://labthrift.com/guides/leftover-box-disk-space
Markdown: https://labthrift.com/md/guides/leftover-box-disk-space.md

*Notes › / › File storage › / › See if the computer still has room*

[Notes](<./>) / [File storage](<./#first-nas>) / See if the computer still has room

Written 26 Aug 2026. This is a how-to, not a product card.

# See if the computer still has room

After the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.

This is a look, not a shopping trip. The house folder is already on the computer. You are asking whether that disk still has room, before a phone copy fails. How big the disk already is, before you shop, is a different look: [see how big the disk already is](<leftover-box-disk>).

## Skip until the share works

If phones and laptops cannot open the house folder yet, stop. Fix that first. That is [a file share on the computer](<first-file-share>). Disk room does not help a share that is not working.

## What this is

The computer has one main disk. House photos go on that same disk. An old laptop disk fills faster than people expect. This is a look, not a shopping trip. You are not buying a file box this weekend.

## Ask how full it is

From the couch, [SSH in](<first-ssh>), then ask:

`df -h`

`df` is the computer reporting how full its disk is. Point at the line that ends in `/`. That is the disk. When `Use%` is in the 80s, it is time to clean. 100% is why copies failed.

## See what the house folder is using

The share lives at `/srv/share/`. Ask how big that folder is, not the whole disk:

`sudo du -sh /srv/share`

That number is the shared folder size. Old Downloads and a full Trash on an old laptop also eat room. If this computer is a laptop that still has a desktop user, you can look at those two:

`du -sh ~/Downloads ~/.local/share/Trash 2>/dev/null`

## If it is filling

Delete obvious junk. Empty the Trash. Clear old Downloads you don't need. If a copy fails while free space still looks fine, check file slots: [when copies fail but free space looks fine](<leftover-box-inodes>). If you want the next question (where the room went), that is [see which folders are eating the disk](<leftover-box-largest-folders>). After weekly updates, clear leftover package downloads: [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). Old diary pages: [clear old logs when the disk is tight](<leftover-box-old-logs>). Don't buy a NAS because an old laptop disk is small. A second copy on a USB disk you already have is [a backup of the house folder](<first-backup>). A real file box is later: [a first file box (NAS)](<first-nas>).

## What next

Need the list of attached disks and USB sticks? [See disks and USB sticks](<leftover-box-lsblk>). How big the disk already is stays [see how big the disk already is](<leftover-box-disk>). Need a huge byte count made readable? [Make sizes readable with numfmt](<leftover-box-numfmt>). If you want to see which folders are taking the room, that is [see which folders are eating the disk](<leftover-box-largest-folders>). If the disk is still tight after junk cleanup, [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). If the computer feels slow and the disk is fine, later: [see if the computer still has free memory](<leftover-box-free-memory>). If there is no second copy yet, that is [a backup of the house folder](<first-backup>). After one manual copy works, [back up the folder every week without remembering](<leftover-box-backup-timer>). If weekly jobs wake at the wrong hour, [set the computer clock to your house](<leftover-box-timezone>). Skip a new 4TB drive this weekend. If the system disk is the problem, move the live share onto a USB that stays plugged in: [put the house folder on a USB disk](<house-folder-on-usb>).

## Skip

  * Skip this note if the share is not working yet.
  * Skip a NAS for this look.
  * Skip a new internal drive this weekend.
  * Skip filling the old laptop with a movie library.



## Sources

[Debian: df](<https://manpages.debian.org/bookworm/coreutils/df.1.en.html>). [Debian: du](<https://manpages.debian.org/bookworm/coreutils/du.1.en.html>). [Ubuntu: df](<https://manpages.ubuntu.com/manpages/noble/en/man1/df.1.html>). [Ubuntu: du](<https://manpages.ubuntu.com/manpages/noble/en/man1/du.1.html>). Official pages only. For the share this looks at, see [a file share on the computer](<first-file-share>). For the login, see [SSH from the couch](<first-ssh>). For a second copy, see [a backup of the house folder](<first-backup>). A dedicated file box is later: [a first file box (NAS)](<first-nas>).

## Also on this topic

[See how big the computer disk already isBefore you buy a tiny computer or a NAS, check how big the computer disk already is.](<leftover-box-disk>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [Clear old logs if the disk is filling upBefore you buy a bigger drive or a NAS, see how much room the diary is using, then trim old entries safely.](<leftover-box-old-logs>) [See if the house folder is still sharedThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [A file share on the computerA folder on the computer that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Put the house folder on a USB diskMove the house share onto a USB disk that stays plugged into the old PC so photos don't fill the system drive. You don't need a NAS for this.](<house-folder-on-usb>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [Back up the house folder every week without rememberingAfter one manual USB (or second-box) copy works, let the computer run the same rsync on a weekly timer. A phone reminder is still fine if you prefer.](<leftover-box-backup-timer>) [A first file box (NAS) for one personA quiet box for photos and backups. Two drives if you want sleep.](<first-nas>) [PreviousSee if the house folder is still shared](<leftover-box-share-check>) [NextSee if the computer is out of file slots](<leftover-box-inodes>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
