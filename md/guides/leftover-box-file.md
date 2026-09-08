# See what kind of file this is

Source: https://labthrift.com/guides/leftover-box-file
Markdown: https://labthrift.com/md/guides/leftover-box-file.md

*Notes › / › Faster network › / › See what kind of file this is*

[Notes](<./>) / [Faster network](<./#switches>) / See what kind of file this is

Written 29 Aug 2026. This is a how-to, not a product card.

# See what kind of file this is

After SSH works, ask what kind of file this is with `file` before you dump it. You don't need a file viewer for this.

[See what's in a folder](<leftover-box-ls>) shows names. [Read a file without opening the editor](<leftover-box-cat>) dumps text. Before you print a mystery name, `file` tells you whether it is text, a picture, a zip, or a program. You are still only looking. It does not need a desktop, a file manager, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you already know the file is short text, that is [read a file without opening the editor](<leftover-box-cat>). If you want how many lines a text file has, that is [see how long a file is](<leftover-box-wc>). If you want the name of a file somewhere on the computer, that is [find a file by name](<leftover-box-find>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`file` peeks at a path and says what kind of thing it looks like. You run it on the computer, after SSH. The file stays on disk. You are only looking. It does not dump the words. That is `cat`. It does not list the folder. That is `ls`. It does not count lines. That is `wc`. It does not open an editor. That is `nano`. One path, same computer, a kind.

## Ask what kind it is

SSH in. Make a throwaway text file, then ask:

`printf 'apple\\nbanana\\ncherry\\n' > ~/fruit.txt`

`file ~/fruit.txt`

You should see something like ASCII text, or Unicode text. That means a dump with `cat` is safe. That is the whole first-night trick.

A real path that is safe to practice on:

`file /etc/hosts`

That file is already on Debian and Ubuntu. You are only looking. Don't edit it.

Compare with a program the computer already has:

`file /bin/ls`

That answer should mention executable or ELF. Don't `cat` that. A dump of a program floods the window with garbage.

## Useful extras, still looking only

Ask about a few paths at once:

`file ~/fruit.txt /etc/hosts /bin/ls`

Need a short text dump after `file` says text? That is [read a file without opening the editor](<leftover-box-cat>). Need a line count first? That is [see how long a file is](<leftover-box-wc>).

If you see command not found, install the usual tool, then try again:

`sudo apt install file`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file viewer.

When you are done practicing:

`rm -i ~/fruit.txt`

## What this is not

This is not a dump of the file. That is [read a file without opening the editor](<leftover-box-cat>). It is not paging through every line. That is [read a file one screen at a time](<leftover-box-less>). It is not a peek at the last lines. That is [see the end of a file](<leftover-box-tail>). It is not a peek at the first lines. That is [see the start of a file](<leftover-box-head>). It is not a line count. That is [see how long a file is](<leftover-box-wc>). It is not a list of names in a folder. That is [see what's in a folder](<leftover-box-ls>). It is not a search by name across the computer. That is [find a file by name](<leftover-box-find>). It is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need only the opening lines of a long file? [See the start of a file](<leftover-box-head>). Need a short text file printed all at once? [Read a file without opening the editor](<leftover-box-cat>). Need the whole long file one screen at a time? [Read a file one screen at a time](<leftover-box-less>). Need only the newest lines at the bottom? [See the end of a file](<leftover-box-tail>). Need a line count before a dump? [See how long a file is](<leftover-box-wc>). Need only the lines with one word? [Find a word in a file](<leftover-box-grep>). Forgot which folder holds the file? [Find a file by name](<leftover-box-find>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `cat` on a mystery name until `file` says text. A program or a zip dumps garbage.
  * Skip `file` if you already know the path is a short text note you made tonight. That is [read a file without opening the editor](<leftover-box-cat>).
  * Skip buying a file manager, a “cloud IDE,” or a NAS to ask what kind one path is.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can inspect files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: file](<https://manpages.debian.org/bookworm/file/file.1.en.html>). [Ubuntu: file](<https://manpages.ubuntu.com/manpages/noble/en/man1/file.1.html>). [file(1) home](<https://www.darwinsys.com/file/>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>). For a line count, see [see how long a file is](<leftover-box-wc>). For names in a folder, see [see what's in a folder](<leftover-box-ls>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Find a file by nameAfter SSH works, search the computer for a file by name with find so you don't have to open every folder. You don't need a file manager for this.](<leftover-box-find>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSee how long a file is](<leftover-box-wc>) [NextSee the start of a file](<leftover-box-head>)

---

*Labthrift Markdown mirror. HTML version linked above.*
