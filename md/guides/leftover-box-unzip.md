# Unpack a zip you already have

Source: https://labthrift.com/guides/leftover-box-unzip
Markdown: https://labthrift.com/md/guides/leftover-box-unzip.md

*Notes › / › Faster network › / › Unpack a zip you already have*

[Notes](<./>) / [Faster network](<./#switches>) / Unpack a zip you already have

Written 30 Aug 2026. This is a how-to, not a product card.

# Unpack a zip you already have

After SSH works, unpack a zip with `unzip` so files come out of a zip you already have. You don't need a zip desktop app for this.

[Pack files into one archive](<leftover-box-tar>) packs a folder. [Shrink one file](<leftover-box-gzip>) shrinks one file to `.gz`. Tonight you unpack a zip you already have. Always use `-d` so zip contents don't scatter in home. You don't need a zip desktop app, FileZilla, WinZip, 7-Zip, or a NAS for this.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you need a folder packed first, that is [pack files into one archive](<leftover-box-tar>). If you need to shrink one file, that is [shrink one file](<leftover-box-gzip>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`unzip` unpacks a zip. `unzip -l` lists zip names. `unzip -d` unpacks files into a folder you name. Always use `-d` so contents don't scatter in home. Without `-d`, unzip dumps files into the folder you sit in.

It is not packing a folder. That is [pack files into one archive](<leftover-box-tar>). It is not shrinking one file. That is [shrink one file](<leftover-box-gzip>). It is not a download from a web address. That is [download a file onto the computer](<leftover-box-curl>).

## Unpack a practice zip in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Make a tiny practice zip in home only. Tonight's zip is only this practice zip, not zip of whole home:

`echo hello > ~/unzip-me.txt`

`zip -j ~/unzip-me.zip ~/unzip-me.txt`

`-j` means junk paths. The zip stores `unzip-me.txt` without the full path. Zip here is only a practice zip maker so unzip has something trusted to unpack. Skip zip of whole home. Skip zip as the job. That job is [pack files into a zip a laptop can open](<leftover-box-zip>).

List zip names. Don't unpack yet:

`unzip -l ~/unzip-me.zip`

You want `unzip-me.txt` in that list. Make a throwaway folder so zip contents don't scatter in home:

`mkdir -p ~/unpack-zip`

`unzip -d ~/unpack-zip ~/unzip-me.zip`

`ls ~/unpack-zip`

You want `unzip-me.txt` inside `unpack-zip`.

If `zip` or `unzip` says command not found, install both, then try again:

`sudo apt install zip unzip`

That install is not a reason to use a zip desktop app.

Skip `unzip` without `-d` for this practice. That command scatters files in home.

Skip `unzip -o` overwrite for this practice.

Skip unzip of files under `/etc`, SSH folders, whole home, huge ISOs, and random internet zips you don't trust.

When you are done practicing, throw away the practice files. Careful delete only. That is [delete a file carefully](<leftover-box-rm>):

`rm -i ~/unzip-me.txt ~/unzip-me.zip`

`rm -i ~/unpack-zip/unzip-me.txt`

Delete practice folders the same careful way after they are empty. Skip `rm -rf`.

## Useful extras, still home only

Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.

Want a zip test before unpack?

`unzip -t ~/unzip-me.zip`

You want no errors. Test stays in home. It does not unpack files.

Skip creating zip of whole home. Tonight's zip is only `~/unzip-me.zip`.

Skip 7z, rar, unrar, bzip2, xz, and zstd for this practice. Skip FileZilla, WinZip, and 7-Zip GUI for this practice. `unzip -d` is enough for this unpack. Skip NAS. This unpack does not need a NAS.

Skip unzip of untrusted internet zips for this practice. Curl a zip you chose is [download a file onto the computer](<leftover-box-curl>), then this note only if you already trust that zip.

Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not packing a folder. That is [pack files into one archive](<leftover-box-tar>). It is not shrinking one file. That is [shrink one file](<leftover-box-gzip>). It is not nested folders as a tree. That is [see folders as a tree](<leftover-box-tree>).

## What next

Just unpacked and want nested folders as a tree? [See folders as a tree](<leftover-box-tree>). Need a folder packed first? [Pack files into one archive](<leftover-box-tar>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `unzip` without `-d` for this practice. That command scatters files in home.
  * Skip `unzip -o` overwrite for this practice.
  * Skip creating zip of whole home. Tonight's zip is only practice `~/unzip-me.zip`.
  * Skip zip as the job. That job is [pack files into a zip a laptop can open](<leftover-box-zip>).
  * Skip 7z, rar, FileZilla, WinZip, huge ISOs, NAS, zip desktop apps, and untrusted internet zips for this practice.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.
  * Skip if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).



## Sources

[Debian: unzip](<https://manpages.debian.org/bookworm/unzip/unzip.1.en.html>). [Ubuntu: unzip](<https://manpages.ubuntu.com/manpages/noble/man1/unzip.1.html>). Practice zip maker only: [Debian: zip](<https://manpages.debian.org/bookworm/zip/zip.1.en.html>), [Ubuntu: zip](<https://manpages.ubuntu.com/manpages/noble/man1/zip.1.html>). Official man pages only. For the login, see [SSH from the couch](<first-ssh>). For pack, see [pack files into one archive](<leftover-box-tar>). For shrink, see [shrink one file](<leftover-box-gzip>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Pack files into one archiveAfter SSH works, tar packs files into one archive so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [Shrink one fileAfter SSH works, gzip shrinks one file so a copy is smaller. You don't need a zip app for this.](<leftover-box-gzip>) [Download a file onto the computerAfter SSH works, curl pulls one file from a web address so the computer has the file without a USB stick. You don't need a browser on the computer for this.](<leftover-box-curl>) [Browse folders then copy one fileAfter SSH works, sftp browses folders so you can pick a file and copy it. You don't need FileZilla or a NAS for this.](<leftover-box-sftp>) [Copy a file to the computer from your laptopAfter SSH works, scp moves one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Sync files so only changes copyAfter SSH works, rsync syncs files so a copy only moves what changed. You don't need a NAS sync app for this.](<leftover-box-rsync>) [Split a file into smaller piecesAfter SSH works, split cuts one file into smaller pieces so a paste or copy fits size limits. You don't need a zip app for this.](<leftover-box-split>) [See folders as a treeAfter SSH works, tree shows nested folders so you can see what is inside without clicking around. You don't need a file manager for this.](<leftover-box-tree>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousBrowse folders then copy one file](<leftover-box-sftp>) [NextSee folders as a tree](<leftover-box-tree>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
