# Find a file by name

Source: https://labthrift.com/guides/leftover-box-find
Markdown: https://labthrift.com/md/guides/leftover-box-find.md

*Notes › / › Faster network › / › Find a file by name*

[Notes](<./>) / [Faster network](<./#switches>) / Find a file by name

Written 29 Aug 2026. This is a how-to, not a product card.

# Find a file by name

After SSH works, search the computer for a file by name with `find` so you don't have to open every folder. You don't need a file manager app for this.

[See what's in a folder](<leftover-box-ls>) lists the folder you are sitting in. [Find a word in a file](<leftover-box-grep>) searches inside one file. When you forgot which folder holds the file, `find` walks the tree and prints matching paths. You are still only looking. The computer does not need a desktop, a search app, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you already know the folder and only need the names in it, that is [see what's in a folder](<leftover-box-ls>). If you already have the file and want one word inside it, that is [find a word in a file](<leftover-box-grep>). If a house job broke and you need the computer's own diary, that is [when something broke, look at the log](<leftover-box-read-logs>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`find` walks a starting folder and prints paths whose names match what you asked for. You run it on the computer, after SSH. Matching paths print to the SSH window. The files stay on disk. You are only looking. It does not list only the current folder. That is `ls`. It does not open a file. That is `cat`, `less`, or `nano`. It does not search inside the file for a word. That is `grep`. One name pattern, same computer, only the matching paths.

## Search a practice file

SSH in. Make a short throwaway file in a nested folder:

`mkdir -p ~/practice/notes && printf 'hello\n' > ~/practice/notes/fruit.txt`

Then search your home folder for that exact name:

`find ~ -name 'fruit.txt'`

You should see a path that ends in `practice/notes/fruit.txt`. That is the whole first-night trick.

Match part of a name, ignoring capital letters:

`find ~ -iname '*fruit*'`

The stars mean “anything before or after.” You are only looking. Don't delete the hits yet.

A real folder that is safe to practice on:

`find /etc -name 'hosts'`

That file is already on Debian and Ubuntu. You are only looking. Don't edit it.

## Useful extras, still looking only

Stop after the first hit when you only need one path:

`find ~ -name 'fruit.txt' | head -n 1`

Limit how deep the walk goes so a huge home folder stays quiet:

`find ~ -maxdepth 3 -name 'fruit.txt'`

If you see command not found, install the usual tools, then try again:

`sudo apt install findutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file manager app.

When you are done practicing:

`rm -i ~/practice/notes/fruit.txt && rmdir ~/practice/notes ~/practice`

## What this is not

This is not a list of the folder you are sitting in. That is [see what's in a folder](<leftover-box-ls>). It is not a search inside a file for a word. That is [find a word in a file](<leftover-box-grep>). It is not a dump of a short file. That is [read a file without opening the editor](<leftover-box-cat>). It is not paging through a long file. That is [read a file one screen at a time](<leftover-box-less>). It is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not which folders are eating the disk. That is [see which folders are eating the disk](<leftover-box-largest-folders>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need the names in one folder only? [See what's in a folder](<leftover-box-ls>). Need to sit in the folder you found? [Move into a folder](<leftover-box-cd>). Need only the lines with one word? [Find a word in a file](<leftover-box-grep>). Need the last lines of a long file? [See the end of a file](<leftover-box-tail>). Need a short file printed all at once? [Read a file without opening the editor](<leftover-box-cat>). Need the whole long file one screen at a time? [Read a file one screen at a time](<leftover-box-less>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `ls` through every nested folder by hand when you forgot the path. That walk is the wrong tool for a hunt.
  * Skip `find /` on day one. Start under `~` or one folder you trust. The whole disk is slow and noisy.
  * Skip `-exec rm`, `-delete`, and any find that changes or removes files. Looking is the job today.
  * Skip fancy regex, permission filters, and size filters on day one. One name pattern is enough.
  * Skip buying a file manager app, a “cloud IDE,” or a NAS to find one file by name.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can hunt files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: find](<https://manpages.debian.org/bookworm/findutils/find.1.en.html>). [Ubuntu: find](<https://manpages.ubuntu.com/manpages/noble/en/man1/find.1.html>). [GNU Findutils manual](<https://www.gnu.org/software/findutils/manual/html_node/find_html/>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For names in one folder, see [see what's in a folder](<leftover-box-ls>). For a word inside a file, see [find a word in a file](<leftover-box-grep>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>). For paging, see [read a file one screen at a time](<leftover-box-less>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager app for this.](<leftover-box-cd>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer app for this.](<leftover-box-grep>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer app for this.](<leftover-box-cat>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer app for this.](<leftover-box-less>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousFind a word in a file](<leftover-box-grep>) [NextSee the end of a file](<leftover-box-tail>)

---

*Labthrift Markdown mirror. HTML version linked above.*
