# Find a word in a file

Source: https://labthrift.com/guides/leftover-box-grep
Markdown: https://labthrift.com/md/guides/leftover-box-grep.md

*Notes › / › Faster network › / › Find a word in a file*

[Notes](<./>) / [Faster network](<./#switches>) / Find a word in a file

Written 29 Aug 2026. This is a how-to, not a product card.

# Find a word in a file

After SSH works, search a file with `grep` so you see only the matching lines. You don't need a file viewer app for this.

[Read a file without opening the editor](<leftover-box-cat>) dumps the whole short file. [Read a file one screen at a time](<leftover-box-less>) pages through a long one. When you already know the word you care about, `grep` prints only the lines that have it. You are still only looking. The computer does not need a desktop, a search app, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If the file is short and you want every line, that is [read a file without opening the editor](<leftover-box-cat>). If the file is long and you want to turn pages, that is [read a file one screen at a time](<leftover-box-less>). If a house job broke and you need the computer's own diary, that is [when something broke, look at the log](<leftover-box-read-logs>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`grep` searches one file (or a few) for a word or short phrase. You run it on the computer, after SSH. Matching lines print to the SSH window. The file stays on disk. You are only looking. It does not open an editor. That is `nano`. It does not dump every line. That is `cat`. It does not take over the window like a pager. That is `less`. One word, same computer, only the hits.

## Search a practice file

SSH in. Make a short throwaway file:

`printf 'apple\nbanana\napple pie\ncarrot\n' > ~/fruit.txt`

Then search for the word apple:

`grep apple ~/fruit.txt`

You should see two lines: `apple` and `apple pie`. The banana and carrot lines stay quiet. That is the whole first-night trick.

A real file that is safe to practice on:

`grep ssh /etc/services`

That list is already on Debian and Ubuntu. You are only looking. Don't edit it.

## Useful extras, still looking only

Show line numbers so you can find the hit later:

`grep -n apple ~/fruit.txt`

Ignore capital letters if you are not sure how the file spelled it:

`grep -i apple ~/fruit.txt`

Count how many matching lines without printing them:

`grep -c apple ~/fruit.txt`

If you see command not found, install the usual tools, then try again:

`sudo apt install grep`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a search app.

When you are done practicing:

`rm -i ~/fruit.txt`

## What this is not

This is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a dump of the whole file. That is [read a file without opening the editor](<leftover-box-cat>). It is not paging through every line. That is [read a file one screen at a time](<leftover-box-less>). It is not the computer's system journal. That is [when something broke, look at the log](<leftover-box-read-logs>). It is not a list of names in one folder. That is [see what's in a folder](<leftover-box-ls>). It is not a hunt for a file by name across folders. That is [find a file by name](<leftover-box-find>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need a short file printed all at once? [Read a file without opening the editor](<leftover-box-cat>). Need the whole long file one screen at a time? [Read a file one screen at a time](<leftover-box-less>). Need the names first? [See what's in a folder](<leftover-box-ls>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). Forgot which folder holds the file? [Find a file by name](<leftover-box-find>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `cat` on a long file when you only care about one word. That dump is the wrong tool for a hunt.
  * Skip `nano` if you only want to find a line. That tool is for changing a line.
  * Skip `grep` on photos, zip files, or programs. Those print junk. A text file is the job.
  * Skip recursive folder hunts and fancy regex on day one. One file, one plain word is enough.
  * Skip buying a search app, a “cloud IDE,” or a NAS to find one word in a text file.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can search files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU grep manual](<https://www.gnu.org/software/grep/manual/grep.html>). [Debian: grep](<https://manpages.debian.org/bookworm/grep/grep.1.en.html>). [Ubuntu: grep](<https://manpages.ubuntu.com/manpages/noble/en/man1/grep.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>). For paging, see [read a file one screen at a time](<leftover-box-less>). For changing a line, see [edit a file from the couch](<leftover-box-nano>). For the computer's system journal, see [when something broke, look at the log](<leftover-box-read-logs>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer app for this.](<leftover-box-cat>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer app for this.](<leftover-box-less>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [Find a file by nameAfter SSH works, search the computer for a file by name with find so you don't have to open every folder. You don't need a file manager app for this.](<leftover-box-find>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousRead a file one screen at a time](<leftover-box-less>) [NextFind a file by name](<leftover-box-find>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
