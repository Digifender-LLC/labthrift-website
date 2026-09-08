# Read a file one screen at a time

Source: https://labthrift.com/guides/leftover-box-less
Markdown: https://labthrift.com/md/guides/leftover-box-less.md

*Notes › / › Faster network › / › Read a file one screen at a time*

[Notes](<./>) / [Faster network](<./#switches>) / Read a file one screen at a time

Written 29 Aug 2026. This is a how-to, not a product card.

# Read a file one screen at a time

After SSH works, open a file with `less` so a long file does not flood the window. Space turns the page. `q` leaves. You don't need a file viewer for this.

[Read a file without opening the editor](<leftover-box-cat>) prints the whole file at once. That is fine for a short note. A long file fills the SSH window and keeps going. `less` shows one screen, then waits. You are still only looking. It does not need a desktop, a file viewer, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If the file is short, that is [read a file without opening the editor](<leftover-box-cat>). If you want to change a line, that is [edit a file from the couch](<leftover-box-nano>). If a house job broke and you need the computer's own diary, that is [when something broke, look at the log](<leftover-box-read-logs>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`less` is a pager. You run it on the computer, after SSH. The file stays on disk. You are only looking. It does not print everything at once. That is `cat`. It does not open an editor. That is `nano`. It does not pull the computer's system journal. That is [when something broke, look at the log](<leftover-box-read-logs>). One path, same computer, one screen at a time.

## Open a file that is longer than the window

SSH in. Make a throwaway file that is long enough to page:

`seq 1 80 > ~/lines.txt`

Then open it:

`less ~/lines.txt`

The computer takes over the SSH window. You see the first screen of numbers, and a colon at the bottom. That colon means `less` is waiting. You are still in the file. You have not left SSH.

A real file that is safe to practice on:

`less /etc/services`

That list is long and already on Debian and Ubuntu. You are only looking. Don't edit it.

## Turn the page, then leave

While `less` is open:

  * Space turns the next page.
  * `b` goes back one page.
  * `q` leaves and gives you the prompt back.



That is the whole first-night trick. Optional search: type `/`, then a word, then Enter. `n` jumps to the next match. `q` still leaves. If you forget the keys, `h` opens a help screen. `q` leaves that too.

If you see command not found, install the pager, then try again:

`sudo apt install less`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file viewer.

## What this is not

This is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a dump of the whole file. That is [read a file without opening the editor](<leftover-box-cat>). It is not the computer's system journal. That is [when something broke, look at the log](<leftover-box-read-logs>). It is not a list of names. That is [see what's in a folder](<leftover-box-ls>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need a short file printed all at once? [Read a file without opening the editor](<leftover-box-cat>). Need the names first? [See what's in a folder](<leftover-box-ls>). Forgot which folder holds the file? [Find a file by name](<leftover-box-find>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `cat` on a file that never stops. That dump is [read a file without opening the editor](<leftover-box-cat>), and it is the wrong tool for a long file.
  * Skip `nano` if you only want to look. That tool is for changing a line.
  * Skip `less` on photos, zip files, or programs. Those print junk. A text file is the job.
  * Skip buying a file viewer, a “cloud IDE,” or a NAS to read one text file.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can read files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[less home (Greenwood Software)](<https://www.greenwoodsoftware.com/less/>). [Debian: less](<https://manpages.debian.org/bookworm/less/less.1.en.html>). [Ubuntu: less](<https://manpages.ubuntu.com/manpages/noble/en/man1/less.1.html>). Official pages only. Space pages forward, `b` pages back, `q` quits. For the login, see [SSH from the couch](<first-ssh>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>). For changing a line, see [edit a file from the couch](<leftover-box-nano>). For the computer's system journal, see [when something broke, look at the log](<leftover-box-read-logs>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [Find a file by nameAfter SSH works, search the computer for a file by name with find so you don't have to open every folder. You don't need a file manager for this.](<leftover-box-find>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousRead a file without opening the editor](<leftover-box-cat>) [NextFind a word in a file](<leftover-box-grep>)

---

*Labthrift Markdown mirror. HTML version linked above.*
