# Browse folders then copy one file

Source: https://labthrift.com/guides/leftover-box-sftp
Markdown: https://labthrift.com/md/guides/leftover-box-sftp.md

*Notes › / › Faster network › / › Browse folders then copy one file*

[Notes](<./>) / [Faster network](<./#switches>) / Browse folders then copy one file

Written 30 Aug 2026. This is a how-to, not a product card.

# Browse folders then copy one file

After SSH works, `sftp` browses folders so you can pick a file and copy it. You don't need FileZilla or a NAS for this.

[Copy a file to the computer from your laptop](<leftover-box-scp>) moves one file with no browse. [Sync files so only changes copy](<leftover-box-rsync>) syncs folder changes. Tonight you use `sftp`: an interactive session so you can `ls`, `cd`, `get`, `put`, then `bye`.

You don't need FileZilla, WinSCP, Cyberduck, or a NAS for this.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. A short name is nicer: [give the computer a short name on your laptop](<leftover-box-ssh-config>) so `sftp lab` is enough. If one file from the laptop with no browse is what you want, that is [copy a file to the computer from your laptop](<leftover-box-scp>). If folder sync of changes is what you want, that is [sync files so only changes copy](<leftover-box-rsync>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`sftp` means file transfer over the same SSH login you already have. You start `sftp lab` on the laptop. You get an interactive `sftp>` prompt. `ls` lists folders on the computer. `cd` changes folders on it. `get` copies one file to the laptop. `put` copies one file to the computer. `bye` leaves.

It is not one file with no browse. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not folder sync of changes. That is [sync files so only changes copy](<leftover-box-rsync>). It is not a copy already on the computer. That is [copy a file without leaving the computer](<leftover-box-cp>).

## Practice browse from the laptop

On the computer first (SSH in). Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Put a practice file in home:

`echo hello > ~/sftp-me.txt`

On the laptop, browse folders over SSH. A short name from [give the computer a short name on your laptop](<leftover-box-ssh-config>) is enough:

`sftp lab`

If you have no short name yet, use the long form from [SSH from the couch](<first-ssh>):

`sftp you@that-address`

It may ask for the password, or the key passphrase, the same way SSH does. You want an `sftp>` prompt. Inside `sftp`, list home:

`ls`

You want `sftp-me.txt` in that list. Copy that file to the laptop:

`get sftp-me.txt`

Optional: copy one small file the other way, from the laptop to home:

`put ./a-small-local.txt`

Skip `put` if you have no small local file yet. Leave:

`bye`

Check it landed. Still on the laptop:

`ssh lab ls ~`

Or still in the SSH session on the computer:

`ls ~/sftp-me.txt`

You want `sftp-me.txt` in home. On the laptop you also want `sftp-me.txt` in the folder you sat in when `get` ran.

Optional aside: if you are already on the computer and only want practice in home, `sftp localhost`, then `get sftp-me.txt sftp-got.txt`, then `bye`. Keep that aside short. The main path tonight is from the laptop.

Optional local commands inside `sftp`: `lls` lists files on the laptop. `lpwd` prints the laptop folder. `lcd` changes folders on the laptop. The `l` prefix means laptop side.

If `sftp` says command not found, install OpenSSH client, then try again:

`sudo apt install openssh-client`

Debian and Ubuntu laptops usually already have it. That install is not a reason to buy FileZilla.

## Useful extras, still home only

Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.

Skip recursive `get -r` of whole home for this practice. Pick one file first.

Skip `rm` inside `sftp` for this practice. Careful delete only when you mean to throw files away. That is [delete a file carefully](<leftover-box-rm>).

Don't forward port 22. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

When you are done practicing, throw away the practice file. Careful delete only:

`rm -i ~/sftp-me.txt`

If you made `sftp-got.txt` on the computer:

`rm -i ~/sftp-got.txt`

Skip `rm -rf`.

## What this is not

This is not one file with no browse. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not folder sync of changes. That is [sync files so only changes copy](<leftover-box-rsync>). It is not a download from a web address. That is [download a file onto the computer](<leftover-box-curl>).

## What next

Need folder sync of changes? [Sync files so only changes copy](<leftover-box-rsync>). Need one file from the laptop with no browse? [Copy a file to the computer from your laptop](<leftover-box-scp>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip FileZilla, WinSCP, and Cyberduck for this practice. `sftp lab` is enough for this browse.
  * Skip buying a NAS for one browse then copy.
  * Skip recursive `get -r` of whole home for this practice.
  * Skip `rm` inside `sftp` for this practice. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.
  * Skip if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).



## Sources

[Debian: sftp](<https://manpages.debian.org/bookworm/openssh-client/sftp.1.en.html>). [Ubuntu: sftp](<https://manpages.ubuntu.com/manpages/noble/man1/sftp.1.html>). [OpenSSH: sftp](<https://man.openbsd.org/sftp>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For one file with no browse, see [copy a file to the computer from your laptop](<leftover-box-scp>). For folder sync of changes, see [sync files so only changes copy](<leftover-box-rsync>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Sync files so only changes copyAfter SSH works, sync files with rsync so a copy only moves what changed. You don't need a NAS sync app for this.](<leftover-box-rsync>) [Give the computer a short name on your laptopAfter SSH works, put a short name in your laptop SSH config so you type ssh lab instead of the long address. You don't need a new router.](<leftover-box-ssh-config>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager for this.](<leftover-box-cd>) [Split a file into smaller piecesAfter SSH works, split one file into smaller pieces with split so a paste or copy fits size limits. You don't need a zip app for this.](<leftover-box-split>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [Shrink one fileAfter SSH works, shrink one file with gzip so a copy is smaller. You don't need a zip app for this.](<leftover-box-gzip>) [Unpack a zip you already haveAfter SSH works, unpack a zip with unzip so files come out of a zip. You don't need a zip desktop app for this.](<leftover-box-unzip>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSync files so only changes copy](<leftover-box-rsync>) [NextUnpack a zip you already have](<leftover-box-unzip>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
