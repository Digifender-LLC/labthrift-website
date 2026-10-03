# See folders as a tree

Source: https://labthrift.com/guides/leftover-box-tree
Markdown: https://labthrift.com/md/guides/leftover-box-tree.md

*Notes › / › Faster network › / › See folders as a tree*

[Notes](<./>) / [Faster network](<./#switches>) / See folders as a tree

Written 30 Aug 2026. This is a how-to, not a product card.

# See folders as a tree

After SSH works, tree shows nested folders so you can see what is inside without clicking around. You don't need a file manager for this.

[Unpack a zip you already have](<leftover-box-unzip>) unpacks a zip. [See what's in a folder](<leftover-box-ls>) lists one folder. Tonight you see nested folders as a tree. After unpack of a zip or tar, nested folders are hard to see with one `ls`. `tree` draws nested folders so you see what is inside without clicking around. You don't need a file manager, Finder, Explorer, Nautilus, or a NAS browser for this.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you just unpacked a zip, that is [unpack a zip you already have](<leftover-box-unzip>). If you only need names in one folder, that is [see what's in a folder](<leftover-box-ls>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>). Skip if you need a USB copy of the house folder. That is [a backup of the house folder](<first-backup>).

## What this is

`tree` prints folders and files as a tree. You type `tree`, then a path in home. Nested folders are visible in one look. Start with a tiny practice folder, not a tree of whole home.

It is not a list of one folder. That is [see what's in a folder](<leftover-box-ls>). It is not a search by name. That is [find a file by name](<leftover-box-find>). It is not unpack of a zip. That is [unpack a zip you already have](<leftover-box-unzip>).

## Show a practice tree in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Make a tiny practice tree in home only:

`mkdir -p ~/tree-me/a/b`

`echo hi > ~/tree-me/a/b/hi.txt`

Show nested folders:

`tree ~/tree-me`

You want `a`, `b`, and `hi.txt` drawn as a tree.

If `tree` says command not found, install `tree`, then try again:

`sudo apt install tree`

That install is not a reason to use a GUI file manager.

Skip `tree /`, `tree /etc`, and tree of whole home for this practice.

Skip `tree -a` of home for this practice if that dumps `.ssh`. Prefer skip listing `~/.ssh`.

When you are done practicing, throw away the practice files. Careful delete only. That is [delete a file carefully](<leftover-box-rm>):

`rm -i ~/tree-me/a/b/hi.txt`

Delete practice folders the same careful way after they are empty. Skip `rm -rf`.

## Useful extras, still home only

Skip paths under `/etc`, SSH folders, or paths you don't own. Practice only in home.

Want depth limited so the tree stays short?

`tree -L 2 ~/tree-me`

`-L 2` means two levels deep. Deeper folders stay hidden.

Want folders only, no files?

`tree -d ~/tree-me`

`-d` means directories only.

Skip GUI file managers for this practice. `tree` is enough for this look. Skip NAS browsers. This tree does not need a NAS.

Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not a list of one folder. That is [see what's in a folder](<leftover-box-ls>). It is not a search by name. That is [find a file by name](<leftover-box-find>). It is not unpack of a zip. That is [unpack a zip you already have](<leftover-box-unzip>).

## What next

Need how big one folder is? [See how big one folder is](<leftover-box-du>). Just unpacked a zip? [Unpack a zip you already have](<leftover-box-unzip>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip paths under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `tree /`, `tree /etc`, and tree of whole home for this practice.
  * Skip `tree -a` of home for this practice if that dumps `.ssh`. Prefer skip listing `~/.ssh`.
  * Skip GUI file managers, Finder, Explorer, Nautilus, and NAS browsers for this practice.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.
  * Skip if you actually need the USB backup. That is [a backup of the house folder](<first-backup>).
  * Skip if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).



## Sources

[Debian: tree](<https://manpages.debian.org/bookworm/tree/tree.1.en.html>). [Ubuntu: tree](<https://manpages.ubuntu.com/manpages/noble/man1/tree.1.html>). Official man pages only. For the login, see [SSH from the couch](<first-ssh>). For unpack of a zip, see [unpack a zip you already have](<leftover-box-unzip>). For pack, see [pack files into one archive](<leftover-box-tar>). For list of one folder, see [see what's in a folder](<leftover-box-ls>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Unpack a zip you already haveAfter SSH works, unzip unpacks a zip so files come out of a zip you already have. You don't need a zip app for this.](<leftover-box-unzip>) [Pack files into one archiveAfter SSH works, tar packs files into one archive so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [See what's in a folderAfter SSH works, ls lists folder contents so you know what names are there. You don't need a file manager for this.](<leftover-box-ls>) [Find a file by nameAfter SSH works, find searches the computer for a file by name so you don't have to open every folder. You don't need a file manager for this.](<leftover-box-find>) [See how big one folder isAfter SSH works, du shows how big one folder is so you know before you copy or delete. You don't need a file manager for this.](<leftover-box-du>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [Browse folders then copy one fileAfter SSH works, sftp browses folders so you can pick a file and copy it. You don't need FileZilla or a NAS for this.](<leftover-box-sftp>) [Copy a file to the computer from your laptopAfter SSH works, scp moves one file without a USB stick. A short name makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousUnpack a zip you already have](<leftover-box-unzip>) [NextSee how big one folder is](<leftover-box-du>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
