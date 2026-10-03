# See file size, date, and permissions

Source: https://labthrift.com/guides/leftover-box-stat
Markdown: https://labthrift.com/md/guides/leftover-box-stat.md

*Notes › / › Faster network › / › See file size, date, and permissions*

[Notes](<./>) / [Faster network](<./#switches>) / See file size, date, and permissions

Written 30 Aug 2026. This is a how-to, not a product card.

# See file size, date, and permissions

After SSH works, look at one file with `stat` so you can see its size, last-change date, and permissions without opening it. You don't need a file manager for this.

[Download a file onto the computer](<leftover-box-curl>) put a practice file in home. [Check a file fingerprint](<leftover-box-sha256sum>) proved the bytes. Tonight you take one more look: how big that file is, when it last changed, and who can read it. `stat` prints those facts. You are still only looking on the computer. It does not need a file manager, a desktop, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. Prefer a practice file from [download a file onto the computer](<leftover-box-curl>) (`~/example.html`). If you only need names in a folder, that is [see what's in a folder](<leftover-box-ls>). If you only need what kind of file this is, that is [see what kind of file this is](<leftover-box-file>). If you only need a line count, that is [see how long a file is](<leftover-box-wc>). If you only need a fingerprint, that is [check a file fingerprint](<leftover-box-sha256sum>). If you want to change permissions, that is [make a file runnable](<leftover-box-chmod>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`stat` prints facts about a file. You type `stat`, then a path in home. It prints a short block: File, Size, Access (permission letters), then Access/Modify/Change dates. Size is how many bytes the file takes. Modify is when the file last changed. Permissions are letters like `-rw-r--r--`. They say who can read, write, or run. It is not a folder list. That is [see what's in a folder](<leftover-box-ls>). It is not a kind-of-file guess. That is [see what kind of file this is](<leftover-box-file>). It is not a fingerprint. That is [check a file fingerprint](<leftover-box-sha256sum>). It is not a line count. That is [see how long a file is](<leftover-box-wc>). It is not changing permissions. That is [make a file runnable](<leftover-box-chmod>). It is not dumping text. That is [read a file without opening the editor](<leftover-box-cat>).

## Look at one practice file in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. Prefer the practice page from curl:

`ls -lh ~/example.html`

If that file is missing, make a tiny practice file instead:

`printf 'hello\n' > ~/check-me.txt`

Now ask for facts:

`stat ~/example.html`

Or, if you made the tiny file:

`stat ~/check-me.txt`

You want a block that starts with File:, then Size:, then an Access: line with permission letters like `-rw-r--r--`, then Access/Modify/Change dates. Tonight, Size, Modify, and the permission letters are the three facts you need. GNU `stat` (Debian/Ubuntu) prints that multi-line block. A real GNU sample from a 6-byte practice file looks like:

`File: /home/you/check-me.txt`

`Size: 6 Blocks: … IO Block: 4096 regular file`

`Access: (0644/-rw-r--r--) Uid: …`

`Modify: 2026-08-30 …`

You may also see Device, Inode, Birth, and a Change date. Ignore those tonight. They are internals, not facts for tonight.

## Useful extras, still looking only

Want only the size?

`stat -c '%n %s bytes' ~/example.html`

Want only the modify time, when the file last changed?

`stat -c '%y' ~/example.html`

Want the permission letters plus who owns the file?

`stat -c '%A %U %G' ~/example.html`

`-c` means print only these facts. `%n` is the name. `%s` is the size in bytes. `%y` is the modify time. `%A` is the permission letters. `%U` is the owner name. `%G` is the group name. That is GNU `stat` on Debian and Ubuntu.

Skip macOS `stat -f` as tonight's lesson. That is the laptop. The computer is GNU `stat`.

Skip `lsattr`, `getfacl`, and `find -ls` for this practice. Tonight you only print facts about one file in home.

Skip `chmod` as tonight's lesson. You are looking, not changing permissions. Changing them is [make a file runnable](<leftover-box-chmod>).

If it says command not found for `stat`, install coreutils, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file manager.

When you are done looking, throw away the practice file if you made it:

`rm ~/check-me.txt`

Keep `~/example.html` if you still want it from curl, or delete that one the same way. Careful delete only. That is [delete a file carefully](<leftover-box-rm>).

## What this is not

This is not a folder list. That is [see what's in a folder](<leftover-box-ls>). It is not a kind-of-file guess. That is [see what kind of file this is](<leftover-box-file>). It is not a fingerprint. That is [check a file fingerprint](<leftover-box-sha256sum>). It is not a line count. That is [see how long a file is](<leftover-box-wc>). It is not changing permissions. That is [make a file runnable](<leftover-box-chmod>). It is not dumping text. That is [read a file without opening the editor](<leftover-box-cat>). It is not wrapping long lines. That is [wrap long lines](<leftover-box-fold>). It is not line numbers. That is [number lines](<leftover-box-nl>). It is not the whole disk. That is [see if the computer still has room](<leftover-box-disk-space>). It is not folder sizes. That is [see which folders are eating the disk](<leftover-box-largest-folders>). It is not packing files into one archive. That is [pack files into one archive](<leftover-box-tar>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). It is not opening SSH to the internet so you can inspect files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).

## What next

Need the practice file first? [Download a file onto the computer](<leftover-box-curl>). Need a fingerprint of those bytes? [Check a file fingerprint](<leftover-box-sha256sum>). Need names in a folder? [See what's in a folder](<leftover-box-ls>). Need what kind of file this is? [See what kind of file this is](<leftover-box-file>). Need a line count? [See how long a file is](<leftover-box-wc>). Need to change permissions? [Make a file runnable](<leftover-box-chmod>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `chmod`, `chown`, `lsattr`, and `getfacl` as tonight's lesson. Tonight you only print facts.
  * Skip macOS `stat -f` as tonight's tool. The computer is GNU `stat`.
  * Skip buying a file manager. Debian and Ubuntu already ship `stat` with coreutils.
  * Skip opening SSH to the internet so you can inspect files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: stat](<https://manpages.debian.org/bookworm/coreutils/stat.1.en.html>). [Ubuntu: stat](<https://manpages.ubuntu.com/manpages/noble/man1/stat.1.html>). [GNU coreutils: stat invocation](<https://www.gnu.org/software/coreutils/manual/html_node/stat-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a download first, see [download a file onto the computer](<leftover-box-curl>). For a fingerprint first, see [check a file fingerprint](<leftover-box-sha256sum>). For names in a folder, see [see what's in a folder](<leftover-box-ls>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [Check a file fingerprintAfter SSH works, check a file with sha256sum so you know it still matches the fingerprint you expected. You don't need a download manager for this.](<leftover-box-sha256sum>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [See what kind of file this isAfter SSH works, ask what kind of file this is with file before you dump it. You don't need a file viewer for this.](<leftover-box-file>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [Make a file runnableAfter SSH works, change file permissions with chmod so a practice script can run. You don't need a permissions GUI for this.](<leftover-box-chmod>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousCheck a file fingerprint](<leftover-box-sha256sum>) [NextPack files into one archive](<leftover-box-tar>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
