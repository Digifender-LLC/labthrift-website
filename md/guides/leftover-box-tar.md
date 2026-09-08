# Pack files into one archive

Source: https://labthrift.com/guides/leftover-box-tar
Markdown: https://labthrift.com/md/guides/leftover-box-tar.md

*Notes › / › Faster network › / › Pack files into one archive*

[Notes](<./>) / [Faster network](<./#switches>) / Pack files into one archive

Written 30 Aug 2026. This is a how-to, not a product card.

# Pack files into one archive

After SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.

A folder is easier to copy as one file. Tonight you pack a folder: `tar`. Tar packs files into one archive. Start with a tiny folder in home. Unpack into a throwaway folder. Don't unpack into `/etc`. You are still only practicing on the computer. It does not need a zip app for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If shrink for one file is what you want, that is [shrink one file](<leftover-box-gzip>). If a whole file copy on the computer is what you want, that is [copy a file without leaving the computer](<leftover-box-cp>). If a folder is what you want to make, that is [make a folder](<leftover-box-mkdir>).

## What this is

`tar` packs files into one file. Archive means that pack file. You type `tar`, then flags, then an archive path, then names to pack. `-c` means create. `-f` means the archive file name comes next. `-t` means list the pack. `-x` means unpack. `-C` means change folder first. Order matters, so put `-C` with the throwaway folder when you unpack. Sit in home, then pack a relative name. Don't pack `/home/...` paths. `tar -xf` unpacks into the folder you are sitting in unless you pass `-C`. Don't unpack into `/etc`. Don't pack `.` from a folder you don't own.

## Pack a practice folder in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make a tiny practice folder:

`mkdir -p ~/pack-me`

`printf 'hello\n' > ~/pack-me/hello.txt`

`printf 'second line\n' > ~/pack-me/notes.txt`

Sit in home, then pack a relative name. Don't pack `/home/...` paths:

`cd ~`

`tar -cf ~/pack-me.tar pack-me`

Look at archive size:

`ls -lh ~/pack-me.tar`

Optional facts on the archive:

`stat ~/pack-me.tar`

List pack contents. Don't unpack yet:

`tar -tf ~/pack-me.tar`

You want names like:

`pack-me/`

`pack-me/hello.txt`

`pack-me/notes.txt`

Unpack into a throwaway folder so you don't dump files into home:

`mkdir -p ~/unpack-me`

`tar -xf ~/pack-me.tar -C ~/unpack-me`

`ls ~/unpack-me/pack-me`

You want `hello.txt` and `notes.txt`. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `tar`. Don't make apt the job. If `tar` is missing:

`sudo apt install tar`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/pack-me.tar`

Then the practice files:

`rm -i ~/pack-me/hello.txt ~/pack-me/notes.txt`

## Useful extras, still home only

Want names printed while packing?

`tar -cvf ~/pack-me.tar pack-me`

Want a list with facts?

`tar -tvf ~/pack-me.tar`

Want a smaller archive? Optional gzip:

`tar -czf ~/pack-me.tar.gz pack-me`

Then list:

`tar -tzf ~/pack-me.tar.gz`

Unpack the gzip archive into the throwaway folder:

`tar -xzf ~/pack-me.tar.gz -C ~/unpack-me`

Don't unpack into `/etc`. Don't pack whole disks.

## What this is not

This is not gzip as the job. That is [shrink one file](<leftover-box-gzip>). It is not a copy from your laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not a copy on the computer. That is [copy a file without leaving the computer](<leftover-box-cp>). It is not mkdir. That is [make a folder](<leftover-box-mkdir>). It is not a USB backup. That is [a backup of the folder](<first-backup>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need shrink? [Shrink one file](<leftover-box-gzip>). Need a fingerprint? [Check a file fingerprint](<leftover-box-sha256sum>). Need a folder first? [Make a folder](<leftover-box-mkdir>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip unpacking into `/etc` or home. Unpack into a throwaway folder with `-C`.
  * Skip packing whole disks, `.` from a folder you don't own, or `/home/...` absolute paths. Sit in home, pack a relative name.
  * Skip gzip, scp, cp, and mkdir as tonight's job. Those pages already exist.
  * Skip if you actually need the USB backup. That is [a backup of the folder](<first-backup>).
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: tar](<https://manpages.debian.org/bookworm/tar/tar.1.en.html>). [Ubuntu: tar](<https://manpages.ubuntu.com/manpages/noble/man1/tar.1.html>). [GNU tar: create](<https://www.gnu.org/software/tar/manual/html_node/create.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For shrink, see [shrink one file](<leftover-box-gzip>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [Check a file fingerprintAfter SSH works, check a file with sha256sum so you know it still matches the fingerprint you expected. You don't need a download manager for this.](<leftover-box-sha256sum>) [Make a folderAfter SSH works, make a folder with mkdir. You don't need a NAS for this.](<leftover-box-mkdir>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Shrink one fileAfter SSH works, shrink one file with gzip so a copy is smaller. You don't need a zip app for this.](<leftover-box-gzip>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee file size, date, and permissions](<leftover-box-stat>) [NextShrink one file](<leftover-box-gzip>)

---

*Labthrift Markdown mirror. HTML version linked above.*
