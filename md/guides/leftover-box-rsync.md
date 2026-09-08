# Sync files so only changes copy

Source: https://labthrift.com/guides/leftover-box-rsync
Markdown: https://labthrift.com/md/guides/leftover-box-rsync.md

*Notes › / › Faster network › / › Sync files so only changes copy*

[Notes](<./>) / [Faster network](<./#switches>) / Sync files so only changes copy

Written 30 Aug 2026. This is a how-to, not a product card.

# Sync files so only changes copy

After SSH works, sync files with rsync so a copy only moves what changed. You don't need a NAS sync app for this.

A whole-file copy every time is wasteful once a folder already has most of the files. Tonight you sync two folders: `rsync`. Rsync copies what changed. Start with two folders in home so you don't need two machines for the lesson. You are still only practicing on the computer. It does not need a NAS sync app for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If one file from the laptop is what you want, that is [copy a file to the computer from your laptop](<leftover-box-scp>). If a whole file copy on the computer is what you want, that is [copy a file without leaving the computer](<leftover-box-cp>). If a folder packed is what you want, that is [pack files into one archive](<leftover-box-tar>). Skip `--delete` for this practice. It can erase files on the destination.

## What this is

`rsync` syncs files so only changes copy. You type `rsync -av ~/sync-src/ ~/sync-dst/`. The trailing slash on the source means the contents of sync-src go into sync-dst, not a nested sync-src folder. `-a` is archive mode: it keeps times and permissions. `-v` lists names as they move. `-n` is dry-run: see what would move without writing. Skip `--delete` until you are sure. It can erase files on the destination that are missing from the source.

## Practice rsync in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make two tiny folders:

`mkdir -p ~/sync-src ~/sync-dst`

`seq 1 20 > ~/sync-src/a.txt`

Optional second file:

`echo hello > ~/sync-src/b.txt`

First sync. The trailing slash on `~/sync-src/` means the contents go into sync-dst:

`rsync -av ~/sync-src/ ~/sync-dst/`

List both sides:

`ls ~/sync-src ~/sync-dst`

You want `a.txt` (and `b.txt` if you made it) on both sides. Change one file on the source:

`echo changed >> ~/sync-src/a.txt`

Run sync again:

`rsync -av ~/sync-src/ ~/sync-dst/`

You want `a.txt` to show up in the verbose list. Unchanged files stay quiet. Only the change moves. Optional dry-run so you see what would move without writing:

`rsync -avn ~/sync-src/ ~/sync-dst/`

`-n` means dry-run. Handy before a sync you are unsure about.

Debian and Ubuntu usually already have `rsync`. Don't make apt the job. If `rsync` is missing:

`sudo apt install rsync`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/sync-src/a.txt ~/sync-src/b.txt ~/sync-dst/a.txt ~/sync-dst/b.txt`

Then, if the folders are empty and you want them gone:

`rmdir ~/sync-src ~/sync-dst`

Skip `rm -rf`.

## Useful extras, still home only

Tonight's practice should work entirely on the computer between two home folders so you don't need two machines for the lesson. Optional aside later: from your laptop over SSH you can sync a local folder into home, for example `rsync -av ./local-folder/ user@lab:/home/user/sync-dst/`. Keep that aside short. The main path tonight is practice on the computer.

Skip `--delete` as tonight's flag. It can erase files on the destination that are missing from the source. Skip it until you are sure. Careful delete only when you mean to throw files away. That is [delete a file carefully](<leftover-box-rm>).

Skip buying a NAS sync app, Resilio, or Syncthing for tonight. `rsync` is enough for this lesson.

## What this is not

This is not a copy from your laptop of one whole file. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not a whole file copy on the computer every time. That is [copy a file without leaving the computer](<leftover-box-cp>). It is not pack for a folder. That is [pack files into one archive](<leftover-box-tar>). It is not shrink for one file. That is [shrink one file](<leftover-box-gzip>). It is not a USB backup. That is [a backup of the folder](<first-backup>). It is not a house share. That is [a folder the house can open](<first-file-share>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need pieces first? [Split a file into smaller pieces](<leftover-box-split>). Need one file from the laptop? [Copy a file to the computer from your laptop](<leftover-box-scp>). Need a whole file copy on the computer? [Copy a file without leaving the computer](<leftover-box-cp>). Need a folder packed? [Pack files into one archive](<leftover-box-tar>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `--delete` for this practice. It can erase files on the destination. Skip it until you are sure.
  * Skip sync into `rm` pipelines. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip buying a NAS sync app, Resilio, or Syncthing for tonight. Debian and Ubuntu already ship `rsync` (or `sudo apt install rsync`).
  * Skip if you actually need the USB backup. That is [a backup of the folder](<first-backup>).
  * Skip if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: rsync](<https://manpages.debian.org/bookworm/rsync/rsync.1.en.html>). [Ubuntu: rsync](<https://manpages.ubuntu.com/manpages/noble/man1/rsync.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a whole file copy on the computer, see [copy a file without leaving the computer](<leftover-box-cp>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Split a file into smaller piecesAfter SSH works, split one file into smaller pieces with split so a paste or copy fits size limits. You don't need a zip app for this.](<leftover-box-split>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [Shrink one fileAfter SSH works, shrink one file with gzip so a copy is smaller. You don't need a zip app for this.](<leftover-box-gzip>) [Encode a file so you can paste itAfter SSH works, turn a file into pasteable text with base64 so you can copy small text without a USB stick. You don't need a zip app for this.](<leftover-box-base64>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [Check a file fingerprintAfter SSH works, check a file with sha256sum so you know it still matches the fingerprint you expected. You don't need a download manager for this.](<leftover-box-sha256sum>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Browse folders then copy one fileAfter SSH works, browse folders with sftp so you can pick a file and copy it. You don't need FileZilla or a NAS for this.](<leftover-box-sftp>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSplit a file into smaller pieces](<leftover-box-split>) [NextBrowse folders then copy one file](<leftover-box-sftp>)

---

*Labthrift Markdown mirror. HTML version linked above.*
