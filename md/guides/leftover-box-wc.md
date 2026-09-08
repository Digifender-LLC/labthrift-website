# See how long a file is

Source: https://labthrift.com/guides/leftover-box-wc
Markdown: https://labthrift.com/md/guides/leftover-box-wc.md

*Notes › / › Faster network › / › See how long a file is*

[Notes](<./>) / [Faster network](<./#switches>) / See how long a file is

Written 29 Aug 2026. This is a how-to, not a product card.

# See how long a file is

After SSH works, count lines with `wc` so you know if a dump will flood the window. You don't need a file manager for this.

[Read a file without opening the editor](<leftover-box-cat>) dumps the whole short file. [Read a file one screen at a time](<leftover-box-less>) pages from the top. Before you print a mystery file, `wc` tells you how many lines it has. You are still only looking. It does not need a desktop, a file manager, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you want every line of a short file, that is [read a file without opening the editor](<leftover-box-cat>). If you want the last lines, that is [see the end of a file](<leftover-box-tail>). If you want room left on the disk, that is [see if the computer still has room](<leftover-box-disk-space>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`wc` counts lines, words, and bytes. You run it on the computer, after SSH. The file stays on disk. You are only looking. It does not dump the words. That is `cat`. It does not take over the window like a pager. That is `less`. It does not print the last lines. That is `tail`. It does not tell you how much disk is free. That is [see if the computer still has room](<leftover-box-disk-space>). One path, same computer, a count.

## Count the lines

SSH in. Make a throwaway file that is long enough to have an obvious count:

`seq 1 40 > ~/lines.txt`

Then count it:

`wc ~/lines.txt`

You should see three numbers, then the name. Lines, words, bytes. For `seq 1 40` that is 40 lines. That is the whole first-night trick.

A real file that is safe to practice on:

`wc -l /etc/services`

That list is already on Debian and Ubuntu. You are only looking. Don't edit it. `-l` prints the line count only, which is the number you want before a dump.

## Useful extras, still looking only

Ask for lines only, on your throwaway file:

`wc -l ~/lines.txt`

A small number is safe to `cat`. A huge number belongs to `less` or `tail`, not a dump of the whole file.

Need the byte size of one file instead? That is already on [see what's in a folder](<leftover-box-ls>) as `ls -lh`. Tonight you are counting lines, not shopping for a bigger drive.

If you see command not found, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file manager.

When you are done practicing:

`rm -i ~/lines.txt`

## What this is not

This is not a dump of the whole file. That is [read a file without opening the editor](<leftover-box-cat>). It is not paging through every line from the top. That is [read a file one screen at a time](<leftover-box-less>). It is not a peek at the last lines. That is [see the end of a file](<leftover-box-tail>). It is not a search for a word. That is [find a word in a file](<leftover-box-grep>). It is not how much disk is free. That is [see if the computer still has room](<leftover-box-disk-space>). It is not which folders are huge. That is [see which folders are eating the disk](<leftover-box-largest-folders>). It is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need a short file printed all at once? [Read a file without opening the editor](<leftover-box-cat>). Need the whole long file one screen at a time? [Read a file one screen at a time](<leftover-box-less>). Need only the newest lines at the bottom? [See the end of a file](<leftover-box-tail>). Need only the lines with one word? [Find a word in a file](<leftover-box-grep>). Forgot which folder holds the file? [Find a file by name](<leftover-box-find>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `cat` on a file you have not counted yet if the computer already flooded the window once. Count first, then pick `less` or `tail`.
  * Skip `wc` if you only want room left on the disk. That is [see if the computer still has room](<leftover-box-disk-space>).
  * Skip `wc` on photos, zip files, or programs. Those counts are not useful. A text file is the job.
  * Skip buying a file manager, a “cloud IDE,” or a NAS to count the lines in one text file.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can count files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: wc](<https://manpages.debian.org/bookworm/coreutils/wc.1.en.html>). [Ubuntu: wc](<https://manpages.ubuntu.com/manpages/noble/en/man1/wc.1.html>). [GNU coreutils: wc](<https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>). For paging, see [read a file one screen at a time](<leftover-box-less>). For the last lines, see [see the end of a file](<leftover-box-tail>). For disk room, see [see if the computer still has room](<leftover-box-disk-space>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [See the end of a fileAfter SSH works, print the last lines of a file with tail so a long file does not flood the window. You don't need a log viewer app for this.](<leftover-box-tail>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSee the end of a file](<leftover-box-tail>) [NextSee what kind of file this is](<leftover-box-file>)

---

*Labthrift Markdown mirror. HTML version linked above.*
