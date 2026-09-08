# Read a file without opening the editor

Source: https://labthrift.com/guides/leftover-box-cat
Markdown: https://labthrift.com/md/guides/leftover-box-cat.md

*Notes › / › Faster network › / › Read a file without opening the editor*

[Notes](<./>) / [Faster network](<./#switches>) / Read a file without opening the editor

Written 29 Aug 2026. This is a how-to, not a product card.

# Read a file without opening the editor

After SSH works, print a file with `cat` so you can read it without opening nano. Short files only. You don't need a file viewer for this.

[See what's in a folder](<leftover-box-ls>) gives you names. Tonight you want the words inside one of those names. `cat` prints a file straight into the SSH window. Useful after [edit a file from the couch](<leftover-box-nano>), so you can check the save without opening the editor again. It does not need a desktop, a file manager, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only want the names in a folder, that is [see what's in a folder](<leftover-box-ls>). If you want to change a line, that is [edit a file from the couch](<leftover-box-nano>). If a house job broke and you need the computer's own log, that is [when something broke, look at the log](<leftover-box-read-logs>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`cat` prints a file. You run it on the computer, after SSH. The file stays on disk. You are only looking. It does not open an editor. That is `nano`. It does not list folder names. That is `ls`. It does not pull the computer's system journal. That is [when something broke, look at the log](<leftover-box-read-logs>). One path, same computer, words on the screen.

## Print a short file

SSH in. If you don't already have a throwaway file, make one in home:

`echo 'hello' > ~/hello.txt`

Then print it:

`cat ~/hello.txt`

You want the same line you wrote. Swap the name for yours. A short text file is the right first try. Photos, zip files, and programs will print junk. Skip those.

## See that you did not change it

List it:

`ls -lh ~/hello.txt`

You want the same name, a tiny size, and today's date if you just made it. Print it a second time if you want. The computer showed you the file. It did not edit it. Need a line changed? That is [edit a file from the couch](<leftover-box-nano>).

## Optional: first lines only

A long file can flood the SSH window. If that happens, Ctrl+C stops the print. For a peek at the top instead:

`head -n 20 ~/hello.txt`

That peek is also its own note: [see the start of a file](<leftover-box-head>).

That prints the first twenty lines and stops. Need the last lines instead? That is [see the end of a file](<leftover-box-tail>). Need the whole long file one screen at a time? That is [read a file one screen at a time](<leftover-box-less>). Optional line numbers on a short file:

`cat -n ~/hello.txt`

Practice in home. Skip SSH settings and anything under `/etc/shadow`.

## What this is not

This is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a list of names. That is [see what's in a folder](<leftover-box-ls>). It is not the computer's system journal. That is [when something broke, look at the log](<leftover-box-read-logs>). It is not a look at which laptop keys the computer already trusts. That is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need the whole long file one screen at a time? [Read a file one screen at a time](<leftover-box-less>). Need only the lines with one word? [Find a word in a file](<leftover-box-grep>). Need the names first? [See what's in a folder](<leftover-box-ls>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need a better name? [Rename or move a file](<leftover-box-mv>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `nano` if you only want to look. That tool is for changing a line.
  * Skip `cat` on photos, zip files, programs, or a file so long it never stops. Use [see the start of a file](<leftover-box-head>) for a peek, or [read a file one screen at a time](<leftover-box-less>) for the whole long file.
  * Skip buying a file viewer, a “cloud IDE,” or a NAS to read one text file.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can read files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU coreutils: cat invocation](<https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html>). [Debian: cat](<https://manpages.debian.org/bookworm/coreutils/cat.1.en.html>). [Ubuntu: cat](<https://manpages.ubuntu.com/manpages/noble/en/man1/cat.1.html>). [GNU coreutils: head invocation](<https://www.gnu.org/software/coreutils/manual/html_node/head-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For listing names, see [see what's in a folder](<leftover-box-ls>). For changing a line, see [edit a file from the couch](<leftover-box-nano>). For the computer's system journal, see [when something broke, look at the log](<leftover-box-read-logs>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Rename or move a fileAfter SSH works, rename or move a file with mv so the name matches the job. The old name is gone. You don't need a NAS for this.](<leftover-box-mv>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousDelete a file carefully](<leftover-box-rm>) [NextRead a file one screen at a time](<leftover-box-less>)

---

*Labthrift Markdown mirror. HTML version linked above.*
