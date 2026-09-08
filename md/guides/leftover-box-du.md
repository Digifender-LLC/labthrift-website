# See how big one folder is

Source: https://labthrift.com/guides/leftover-box-du
Markdown: https://labthrift.com/md/guides/leftover-box-du.md

*Notes › / › Faster network › / › See how big one folder is*

[Notes](<./>) / [Faster network](<./#switches>) / See how big one folder is

Written 30 Aug 2026. This is a how-to, not a product card.

# See how big one folder is

After SSH works, check how big one folder is with `du` so you know before you copy or delete. You don't need a file manager for this.

[See folders as a tree](<leftover-box-tree>) showed nested folders. [Unpack a zip you already have](<leftover-box-unzip>) unpacked a zip. [Pack files into one archive](<leftover-box-tar>) packed a folder. [See what's in a folder](<leftover-box-ls>) listed names. Tonight you check size: how big one folder you already know is. After you unpack a zip, nested folders are hard to size by eye. `du` tells you how big one folder is. You are still only looking on the computer. It does not need a file manager, a desktop, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you need nested folders as a drawing, that is [see folders as a tree](<leftover-box-tree>). If you need how much room the whole disk still has, that is [see if the computer still has room](<leftover-box-disk-space>). If you need which folders eat the disk, that is [see which folders are eating the disk](<leftover-box-largest-folders>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>). Skip if you need a USB copy of the house folder. That is [a backup of the house folder](<first-backup>).

## What this is

`du` means disk usage for a path you name. You type `du`, then a folder in home. Tonight: `du -sh ~/some-folder`. `-s` means summary: one number for the whole folder, not a line per nested path. `-h` means human sizes, like `12K` or `4.0M`, instead of raw bytes. It is not how full the whole disk is. That is [see if the computer still has room](<leftover-box-disk-space>) (`df`). It is not ranking every big folder on the computer. That is [see which folders are eating the disk](<leftover-box-largest-folders>). It is not one file's size, date, and permissions. That is [see file size, date, and permissions](<leftover-box-stat>). It is not a nested drawing. That is [see folders as a tree](<leftover-box-tree>). It is not a name list. That is [see what's in a folder](<leftover-box-ls>). It is not a search by name. That is [find a file by name](<leftover-box-find>). It is not a delete. That is [delete a file carefully](<leftover-box-rm>).

## Size a practice folder in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

If you still have `~/tree-me` from [see folders as a tree](<leftover-box-tree>), you can size that folder. Otherwise make a tiny practice tree in home only:

`mkdir -p ~/size-me/a/b`

`echo hi > ~/size-me/a/b/hi.txt`

Ask how big the whole folder is:

`du -sh ~/size-me`

Or, if you kept the tree practice folder:

`du -sh ~/tree-me`

You want one small human size, often a few kilobytes. A nearly empty folder still takes a little room because the computer stores the folder itself.

Optional: see each child sitting right under that folder, without listing every nested file:

`du -h -d 1 ~/size-me`

`-d 1` means one level deep. You get the folder you named, plus each child under it. Files further down are rolled into those children.

Skip `du /`, `du /etc`, and `sudo du` of the whole disk for this practice. Whole-disk room left is [see if the computer still has room](<leftover-box-disk-space>). Ranking the biggest folders is [see which folders are eating the disk](<leftover-box-largest-folders>).

If `du` says No such file or directory, you are not in home or the practice folder is missing. `pwd`, then `cd ~`, then try again.

When you are done practicing, throw away the practice files. Careful delete only. That is [delete a file carefully](<leftover-box-rm>):

`rm -i ~/size-me/a/b/hi.txt`

Delete practice folders the same careful way after they are empty. Skip `rm -rf`.

## Useful extras, still home only

Want a size for each item sitting right in that folder?

`du -sh ~/size-me/*`

That is still a summary per child, not a dump of every file.

Skip `du -a` as tonight's lesson. That flag lists every file. Tonight: one folder you already know.

Skip other disks, USB sticks, and `/srv` as tonight's lesson. Practice only in home.

If it says command not found for `du`, install coreutils, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a disk-space app.

## What this is not

This is not how full the whole disk is. That is [see if the computer still has room](<leftover-box-disk-space>). It is not ranking every big folder on the computer. That is [see which folders are eating the disk](<leftover-box-largest-folders>). It is not one file's size, date, and permissions. That is [see file size, date, and permissions](<leftover-box-stat>). It is not a nested drawing. That is [see folders as a tree](<leftover-box-tree>). It is not a name list. That is [see what's in a folder](<leftover-box-ls>). It is not a search by name. That is [find a file by name](<leftover-box-find>). It is not a careful delete. That is [delete a file carefully](<leftover-box-rm>). It is not a USB backup. That is [a backup of the house folder](<first-backup>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). It is not opening SSH to the internet so you can size folders from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need a zip a laptop can open? [Pack files into a zip a laptop can open](<leftover-box-zip>). Need size (or clock) to update by itself? [See change without typing again](<leftover-box-watch>). Need nested folders as a drawing? [See folders as a tree](<leftover-box-tree>). Need how much room the whole disk still has? [See if the computer still has room](<leftover-box-disk-space>). Need which folders eat the disk? [See which folders are eating the disk](<leftover-box-largest-folders>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip paths under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `du /`, `du /etc`, and `sudo du` of the whole disk for this practice. Whole-disk room is [see if the computer still has room](<leftover-box-disk-space>). Ranking biggest folders is [see which folders are eating the disk](<leftover-box-largest-folders>).
  * Skip `du -a` as tonight's lesson. That dumps every file.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip buying a disk-space app. Debian and Ubuntu already ship `du`.
  * Skip opening SSH to the internet so you can size folders from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.
  * Skip if you actually need the USB backup. That is [a backup of the house folder](<first-backup>).
  * Skip if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).



## Sources

[Debian: du](<https://manpages.debian.org/bookworm/coreutils/du.1.en.html>). [Ubuntu: du](<https://manpages.ubuntu.com/manpages/noble/man1/du.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For nested folders as a drawing, see [see folders as a tree](<leftover-box-tree>). For whole-disk room, see [see if the computer still has room](<leftover-box-disk-space>). For ranking biggest folders, see [see which folders are eating the disk](<leftover-box-largest-folders>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See folders as a treeAfter SSH works, show nested folders with tree so you can see what is inside without clicking around. You don't need a file manager for this.](<leftover-box-tree>) [Pack files into a zip a laptop can openAfter SSH works, pack files into a zip with zip so a Windows laptop can open them. You don't need a zip desktop app for this.](<leftover-box-zip>) [See change without typing againAfter SSH works, re-run a command with watch so you see change without typing again. You don't need a monitoring app for this.](<leftover-box-watch>) [Unpack a zip you already haveAfter SSH works, unpack a zip with unzip so files come out of a zip. You don't need a zip desktop app for this.](<leftover-box-unzip>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Find a file by nameAfter SSH works, search for a file by name with find so you don't have to open every folder. You don't need a file manager for this.](<leftover-box-find>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [See if the computer still has roomBefore you buy a bigger drive, check free space with df.](<leftover-box-disk-space>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee folders as a tree](<leftover-box-tree>) [NextPack files into a zip a laptop can open](<leftover-box-zip>)

---

*Labthrift Markdown mirror. HTML version linked above.*
