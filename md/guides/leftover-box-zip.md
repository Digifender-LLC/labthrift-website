# Pack files into a zip a laptop can open

Source: https://labthrift.com/guides/leftover-box-zip
Markdown: https://labthrift.com/md/guides/leftover-box-zip.md

*Notes › / › Faster network › / › Pack files into a zip a laptop can open*

[Notes](<./>) / [Faster network](<./#switches>) / Pack files into a zip a laptop can open

Written 30 Aug 2026. This is a how-to, not a product card.

# Pack files into a zip a laptop can open

After SSH works, pack files into a zip with `zip` so a Windows laptop can open them. You don't need a zip desktop app for this.

[See how big one folder is](<leftover-box-du>) showed size. [Unpack a zip you already have](<leftover-box-unzip>) unpacked a zip. [Pack files into one archive](<leftover-box-tar>) packed an archive Linux tools expect. [Shrink one file](<leftover-box-gzip>) shrunk one file to `.gz`. Tonight you make one: a `.zip` a laptop can open without `tar`. You are still only practicing in home on the computer. It does not need a zip desktop app, WinZip, 7-Zip, FileZilla, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need to unpack a zip you already have, that is [unpack a zip you already have](<leftover-box-unzip>). If you only need a Linux archive, that is [pack files into one archive](<leftover-box-tar>). If you only need to shrink one file, that is [shrink one file](<leftover-box-gzip>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>). Skip if you need a USB copy of the house folder. That is [a backup of the house folder](<first-backup>).

## What this is

`zip` means pack files into a `.zip`. You type `zip`, then `-r`, then a zip path, then a folder in home. Tonight: `zip -r` of one small folder in home. `-r` means recursive, so the folder's files go in. Practice from home so the zip stores `zip-me/hi.txt`, not a long `/home/...` path. `unzip -l` lists names without unpacking. That list command already lives on [unpack a zip you already have](<leftover-box-unzip>); using it here is fine. It is not unpack. That is [unpack a zip you already have](<leftover-box-unzip>). It is not `tar`. That is [pack files into one archive](<leftover-box-tar>). It is not `gzip`. That is [shrink one file](<leftover-box-gzip>). It is not split. That is [split a file into smaller pieces](<leftover-box-split>). It is not size of one folder. That is [see how big one folder is](<leftover-box-du>). It is not a zip desktop app, WinZip, 7-Zip, FileZilla, or a NAS.

## Pack a practice folder in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make a tiny practice folder in home only:

`mkdir -p ~/zip-me`

`echo hello > ~/zip-me/hi.txt`

Sit in home, then pack a relative folder name. Don't pack a long `/home/...` path:

`cd ~`

`zip -r ~/zip-me.zip zip-me`

List names. Don't unpack yet:

`unzip -l ~/zip-me.zip`

You want `zip-me/hi.txt` in that list.

Skip `zip` without `-r` when the thing is a folder. That stores only the empty folder name, not the files inside.

Skip `zip /`, `zip /etc`, and zip of whole home for this practice. Tonight: one small folder in home.

If `zip` or `unzip` says command not found, install both, then try again:

`sudo apt install zip unzip`

Debian and Ubuntu often don't ship `zip` by default. That install is not a reason to buy a zip app.

If `zip` says zip error: Nothing to do, you are not in home or the practice folder is missing. `pwd`, then `cd ~`, then pack `zip-me` again.

When you are done practicing, throw away the practice files. Careful delete only. That is [delete a file carefully](<leftover-box-rm>):

`rm -i ~/zip-me/hi.txt`

`rm -i ~/zip-me.zip`

Delete practice folders the same careful way after they are empty. Skip `rm -rf`.

## Useful extras, still home only

Want the zip to store only the file name, not the folder path?

`zip -j ~/hi.zip ~/zip-me/hi.txt`

`-j` means junk paths. The zip stores only `hi.txt`. Clean that extra zip up the same careful way:

`rm -i ~/hi.zip`

Want a size of the folder next to the zip, using the size note you just did?

`du -sh ~/zip-me ~/zip-me.zip`

That look is [see how big one folder is](<leftover-box-du>). It is not tonight's job. It is a useful extra after you already packed.

Skip `zip -e` encryption, `zip -P`, and `--remove-files` for this practice. Encryption and a password on the command line are later. `--remove-files` is a tar flag. Zip's close cousin is `zip -m`, which deletes after packing. Tonight you keep the practice folder.

Skip zip of huge photo libraries as tonight's lesson. Tonight: one small folder in home.

Skip `tar`, `gzip`, 7z, rar, bzip2, xz, and zstd as tonight's lesson. Unpack of a zip you already have is [unpack a zip you already have](<leftover-box-unzip>).

Skip files under `/etc`, SSH folders, other disks, USB sticks, and `/srv` as tonight's lesson. Practice only in home.

Skip buying WinZip, 7-Zip, or a zip desktop app. `zip -r` is enough for this pack.

## What this is not

This is not unpack of a zip you already have. That is [unpack a zip you already have](<leftover-box-unzip>). It is not a Linux archive. That is [pack files into one archive](<leftover-box-tar>). It is not shrink of one file to `.gz`. That is [shrink one file](<leftover-box-gzip>). It is not split. That is [split a file into smaller pieces](<leftover-box-split>). It is not size of one folder. That is [see how big one folder is](<leftover-box-du>). It is not a nested drawing. That is [see folders as a tree](<leftover-box-tree>). It is not a copy from your laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not a careful delete. That is [delete a file carefully](<leftover-box-rm>). It is not a USB backup. That is [a backup of the house folder](<first-backup>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). It is not a zip desktop app, WinZip, 7-Zip, FileZilla, or a NAS. It is not opening SSH to the internet so you can pack files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need to unpack a zip you already have? [Unpack a zip you already have](<leftover-box-unzip>). Need a Linux archive instead? [Pack files into one archive](<leftover-box-tar>). Need to shrink one file to `.gz`? [Shrink one file](<leftover-box-gzip>). Need folder size first? [See how big one folder is](<leftover-box-du>). Need size (or clock) to update by itself? [See change without typing again](<leftover-box-watch>). Need nested folders as a drawing? [See folders as a tree](<leftover-box-tree>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip paths under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `zip /`, `zip /etc`, and zip of whole home for this practice. Tonight: one small folder in home.
  * Skip `zip` without `-r` when the thing is a folder. That stores only the empty folder name.
  * Skip unpack as tonight's job. That is [unpack a zip you already have](<leftover-box-unzip>).
  * Skip `tar`, `gzip`, 7z, rar, bzip2, xz, and zstd as tonight's lesson. A Linux archive is [pack files into one archive](<leftover-box-tar>). Shrink of one file is [shrink one file](<leftover-box-gzip>).
  * Skip `zip -e` encryption, `zip -P`, `--remove-files`, and zip of huge photo libraries for this practice.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip buying WinZip, 7-Zip, or a zip desktop app. Debian and Ubuntu install `zip` with `apt`.
  * Skip opening SSH to the internet so you can pack files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.
  * Skip if you actually need the USB backup. That is [a backup of the house folder](<first-backup>).
  * Skip if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).



## Sources

[Debian: zip](<https://manpages.debian.org/bookworm/zip/zip.1.en.html>). [Ubuntu: zip](<https://manpages.ubuntu.com/manpages/noble/man1/zip.1.html>). For the list flag, [Debian: unzip](<https://manpages.debian.org/bookworm/unzip/unzip.1.en.html>). [Ubuntu: unzip](<https://manpages.ubuntu.com/manpages/noble/man1/unzip.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For unpack, see [unpack a zip you already have](<leftover-box-unzip>). For a Linux archive, see [pack files into one archive](<leftover-box-tar>). For folder size, see [see how big one folder is](<leftover-box-du>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See how big one folder isAfter SSH works, check how big one folder is with du so you know before you copy or delete. You don't need a file manager for this.](<leftover-box-du>) [See change without typing againAfter SSH works, re-run a command with watch so you see change without typing again. You don't need a monitoring app for this.](<leftover-box-watch>) [Unpack a zip you already haveAfter SSH works, unpack a zip with unzip so files come out of a zip. You don't need a zip desktop app for this.](<leftover-box-unzip>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [Shrink one fileAfter SSH works, shrink one file with gzip so a copy is smaller. You don't need a zip app for this.](<leftover-box-gzip>) [See folders as a treeAfter SSH works, show nested folders with tree so you can see what is inside without clicking around. You don't need a file manager for this.](<leftover-box-tree>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee how big one folder is](<leftover-box-du>) [NextSee change without typing again](<leftover-box-watch>)

---

*Labthrift Markdown mirror. HTML version linked above.*
