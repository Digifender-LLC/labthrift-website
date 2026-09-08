# See the start of a file

Source: https://labthrift.com/guides/leftover-box-head
Markdown: https://labthrift.com/md/guides/leftover-box-head.md

*Notes › / › Faster network › / › See the start of a file*

[Notes](<./>) / [Faster network](<./#switches>) / See the start of a file

Written 29 Aug 2026. This is a how-to, not a product card.

# See the start of a file

After SSH works, print the first lines of a file with `head` so a long file does not flood the window. You don't need a file viewer for this.

[Read a file without opening the editor](<leftover-box-cat>) dumps the whole short file. [Read a file one screen at a time](<leftover-box-less>) pages from the top. [See the end of a file](<leftover-box-tail>) prints the newest lines at the bottom. When you only care about the opening lines, `head` prints those and stops. You are still only looking. It does not need a desktop, a file viewer, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If the file is short and you want every line, that is [read a file without opening the editor](<leftover-box-cat>). If you want the newest lines at the bottom, that is [see the end of a file](<leftover-box-tail>). If you want to turn pages from the start, that is [read a file one screen at a time](<leftover-box-less>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`head` prints the first lines of a file. You run it on the computer, after SSH. The file stays on disk. You are only looking. It does not dump every line. That is `cat`. It does not take over the window like a pager. That is `less`. It does not print the end. That is `tail`. It does not search for a word. That is `grep`. It does not ask what kind of file this is. That is `file`. One path, same computer, only the start.

## Print the first lines

SSH in. Make a throwaway file that is long enough to have an obvious start:

`seq 1 40 > ~/lines.txt`

Then print the first lines:

`head ~/lines.txt`

You should see 1 through 10. With no extra flags, `head` prints the first ten lines and stops. That is the whole first-night trick.

A real file that is safe to practice on:

`head /etc/services`

That list is already on Debian and Ubuntu. You are only looking. Don't edit it.

## Useful extras, still looking only

Ask for a different count:

`head -n 5 ~/lines.txt`

That prints the first five lines. Swap the number if you want more or fewer.

Need the last lines instead? That is [see the end of a file](<leftover-box-tail>). Need a line count before a dump? That is [see how long a file is](<leftover-box-wc>). Need to know if the path is even text? That is [see what kind of file this is](<leftover-box-file>).

If you see command not found, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file viewer.

When you are done practicing:

`rm -i ~/lines.txt`

## What this is not

This is not a dump of the whole file. That is [read a file without opening the editor](<leftover-box-cat>). It is not paging through every line from the top. That is [read a file one screen at a time](<leftover-box-less>). It is not a peek at the last lines. That is [see the end of a file](<leftover-box-tail>). It is not a line count. That is [see how long a file is](<leftover-box-wc>). It is not asking what kind of file this is. That is [see what kind of file this is](<leftover-box-file>). It is not a compare of two files. That is [see whether two files are the same](<leftover-box-diff>). It is not a search for a word. That is [find a word in a file](<leftover-box-grep>). It is not a hunt for a file by name. That is [find a file by name](<leftover-box-find>). It is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need only the newest lines at the bottom? [See the end of a file](<leftover-box-tail>). Need to know if a dump will flood the window first? [See how long a file is](<leftover-box-wc>). Need to know if the path is text before you dump it? [See what kind of file this is](<leftover-box-file>). Need to see if a spare still matches? [See whether two files are the same](<leftover-box-diff>). Need a short file printed all at once? [Read a file without opening the editor](<leftover-box-cat>). Need the whole long file one screen at a time? [Read a file one screen at a time](<leftover-box-less>). Need only the lines with one word? [Find a word in a file](<leftover-box-grep>). Forgot which folder holds the file? [Find a file by name](<leftover-box-find>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `cat` on a file that never stops when you only care about the opening lines. That dump is the wrong tool for a peek at the start.
  * Skip `head` on photos, zip files, or programs. Those print junk. A text file is the job. Ask first with [see what kind of file this is](<leftover-box-file>).
  * Skip `head` if you already know the path is a short text note you made tonight. That is [read a file without opening the editor](<leftover-box-cat>).
  * Skip buying a file manager, a “cloud IDE,” or a NAS to read the start of one text file.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can peek at files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: head](<https://manpages.debian.org/bookworm/coreutils/head.1.en.html>). [Ubuntu: head](<https://manpages.ubuntu.com/manpages/noble/man1/head.1.html>). [GNU coreutils: head](<https://www.gnu.org/software/coreutils/manual/html_node/head-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>). For the end of a file, see [see the end of a file](<leftover-box-tail>). For paging, see [read a file one screen at a time](<leftover-box-less>). For a kind-of-file check, see [see what kind of file this is](<leftover-box-file>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [See the end of a fileAfter SSH works, print the last lines of a file with tail so a long file does not flood the window. You don't need a log viewer app for this.](<leftover-box-tail>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [See what kind of file this isAfter SSH works, ask what kind of file this is with file before you dump it. You don't need a file viewer for this.](<leftover-box-file>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSee what kind of file this is](<leftover-box-file>) [NextSee whether two files are the same](<leftover-box-diff>)

---

*Labthrift Markdown mirror. HTML version linked above.*
