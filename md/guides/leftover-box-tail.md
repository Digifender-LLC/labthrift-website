# See the end of a file

Source: https://labthrift.com/guides/leftover-box-tail
Markdown: https://labthrift.com/md/guides/leftover-box-tail.md

*Notes › / › Faster network › / › See the end of a file*

[Notes](<./>) / [Faster network](<./#switches>) / See the end of a file

Written 29 Aug 2026. This is a how-to, not a product card.

# See the end of a file

After SSH works, print the last lines of a file with `tail` so a long file does not flood the window. You don't need a log viewer app for this.

[Read a file without opening the editor](<leftover-box-cat>) dumps the whole short file. [Read a file one screen at a time](<leftover-box-less>) pages from the top. When you only care about the newest lines at the bottom, `tail` prints those and stops. You are still only looking. It does not need a desktop, a log viewer, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If the file is short and you want every line, that is [read a file without opening the editor](<leftover-box-cat>). If you want to turn pages from the start, that is [read a file one screen at a time](<leftover-box-less>). If a house job broke and you need the computer's own diary, that is [when something broke, look at the log](<leftover-box-read-logs>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`tail` prints the last lines of a file. You run it on the computer, after SSH. The file stays on disk. You are only looking. It does not dump every line. That is `cat`. It does not take over the window like a pager. That is `less`. It does not search for a word. That is `grep`. It does not pull the computer's system journal. That is [when something broke, look at the log](<leftover-box-read-logs>). One path, same computer, only the end.

## Print the last lines

SSH in. Make a throwaway file that is long enough to have an obvious end:

`seq 1 40 > ~/lines.txt`

Then print the last lines:

`tail ~/lines.txt`

You should see 31 through 40. With no extra flags, `tail` prints the last ten lines and stops. That is the whole first-night trick.

A real file that is safe to practice on:

`tail /etc/services`

That list is already on Debian and Ubuntu. You are only looking. Don't edit it.

## Useful extras, still looking only

Ask for a different count:

`tail -n 5 ~/lines.txt`

That prints the last five lines. Swap the number if you want more or fewer.

Need the first lines instead? That is [see the start of a file](<leftover-box-head>). Tonight you are at the other end.

If you see command not found, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a log viewer.

When you are done practicing:

`rm -i ~/lines.txt`

## What this is not

This is not a dump of the whole file. That is [read a file without opening the editor](<leftover-box-cat>). It is not paging through every line from the top. That is [read a file one screen at a time](<leftover-box-less>). It is not a search for a word. That is [find a word in a file](<leftover-box-grep>). It is not a hunt for a file by name. That is [find a file by name](<leftover-box-find>). It is not the computer's system journal. That is [when something broke, look at the log](<leftover-box-read-logs>). It is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need to know if a dump will flood the window first? [See how long a file is](<leftover-box-wc>). Need a short file printed all at once? [Read a file without opening the editor](<leftover-box-cat>). Need the whole long file one screen at a time? [Read a file one screen at a time](<leftover-box-less>). Need only the lines with one word? [Find a word in a file](<leftover-box-grep>). Forgot which folder holds the file? [Find a file by name](<leftover-box-find>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `cat` on a file that never stops when you only care about the end. That dump is the wrong tool for a peek at the bottom.
  * Skip `tail -f` on day one. That follows the file forever until you press Ctrl+C. Tonight you only want a snapshot of the end.
  * Skip `tail` on photos, zip files, or programs. Those print junk. A text file is the job.
  * Skip `sudo journalctl` if you only want the last lines of one ordinary file. The computer's own diary is [when something broke, look at the log](<leftover-box-read-logs>).
  * Skip buying a log viewer, a “cloud IDE,” or a NAS to read the end of one text file.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can peek at files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: tail](<https://manpages.debian.org/bookworm/coreutils/tail.1.en.html>). [Ubuntu: tail](<https://manpages.ubuntu.com/manpages/noble/en/man1/tail.1.html>). [GNU coreutils: tail](<https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>). For paging, see [read a file one screen at a time](<leftover-box-less>). For a word inside a file, see [find a word in a file](<leftover-box-grep>). For the computer's system journal, see [when something broke, look at the log](<leftover-box-read-logs>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [Find a file by nameAfter SSH works, search the computer for a file by name with find so you don't have to open every folder. You don't need a file manager for this.](<leftover-box-find>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousFind a file by name](<leftover-box-find>) [NextSee how long a file is](<leftover-box-wc>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
