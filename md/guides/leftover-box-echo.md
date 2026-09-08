# Put a short line into a file

Source: https://labthrift.com/guides/leftover-box-echo
Markdown: https://labthrift.com/md/guides/leftover-box-echo.md

*Notes › / › Faster network › / › Put a short line into a file*

[Notes](<./>) / [Faster network](<./#switches>) / Put a short line into a file

Written 29 Aug 2026. This is a how-to, not a product card.

# Put a short line into a file

After SSH works, put one short line into a file with `echo` so you don't need to open nano. You don't need a file manager for this.

[Make an empty file](<leftover-box-touch>) makes a blank name. [Edit a file from the couch](<leftover-box-nano>) opens the editor. Tonight you only need one short line on disk. `echo` prints those words, and the arrow next to it parks them in a file. You are still only writing a practice line in home. The computer does not need a desktop, a file manager, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need an empty name with no words yet, that is [make an empty file](<leftover-box-touch>). If you need to change several lines, that is [edit a file from the couch](<leftover-box-nano>). If you only want to read a file that already has words, that is [read a file without opening the editor](<leftover-box-cat>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`echo` prints a short line. The single arrow `>` puts that line into a file (and replaces whatever was there). The double arrow `>>` adds a line at the end. You run it on the computer, after SSH.

It does not open an editor, make an empty file, or dump a file you already have. Those jobs are `nano`, `touch`, and `cat`. One short line, same computer, parked in a file you named.

## Write one line in home

SSH in. Put one short line into a practice file. A short name with no spaces is easier to type later:

`echo 'hello from the computer' > ~/hello.txt`

The tilde `~` is a short name for your home folder. Single quotes keep the words together. The single arrow `>` means put this into the file. If `hello.txt` already had words, they are gone. That is the whole first-night trick for a brand-new line.

Then peek without opening the editor:

`cat ~/hello.txt`

You should see that same short line. That is enough for tonight.

## Useful extras, still writing only

Need a second line under the first? Use the double arrow so you don't wipe the first line:

`echo 'second line' >> ~/hello.txt`

`cat ~/hello.txt`

You should see both lines. The double arrow `>>` means add at the end.

Need the file empty again before a clean rewrite? That empty-file job is [make an empty file](<leftover-box-touch>), or rewrite with one `echo` and a single arrow.

Need a folder first? That is [make a folder](<leftover-box-mkdir>). Then keep the filename and drop the line inside:

`echo 'hello from the computer' > ~/notes/hello.txt`

If `notes` is missing, make it first. `echo` will not invent the folder for you.

If you see command not found, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file manager.

When you are done practicing:

`rm -i ~/hello.txt`

## What this is not

This is not an empty file with no words. That is [make an empty file](<leftover-box-touch>). It is not an editor for several lines. That is [edit a file from the couch](<leftover-box-nano>). It is not a dump of a file you already have. That is [read a file without opening the editor](<leftover-box-cat>).

## What next

Need an empty name first? [Make an empty file](<leftover-box-touch>). Need to change several lines? [Edit a file from the couch](<leftover-box-nano>). Need a short dump after you write? [Read a file without opening the editor](<leftover-box-cat>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `printenv` as tonight's job. Printenv prints HOME and PATH, not echo: [see HOME and PATH](<leftover-box-printenv>).
  * Skip `yes` as tonight's job. Yes repeats a line: [repeat a line until you stop](<leftover-box-yes>). Echo prints once.
  * Skip pointing the single arrow at anything under `/etc`, SSH settings, or a file you care about. Practice only in home tonight. A single arrow replaces the whole file.
  * Skip `nano` if one short line is enough. That editor job is [edit a file from the couch](<leftover-box-nano>).
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip buying a file manager, a “cloud IDE,” or a NAS to put one short line in a text file.
  * Skip opening SSH to the internet so you can write files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: echo](<https://manpages.debian.org/bookworm/coreutils/echo.1.en.html>). [Ubuntu: echo](<https://manpages.ubuntu.com/manpages/noble/man1/echo.1.html>). [GNU coreutils: echo](<https://www.gnu.org/software/coreutils/manual/html_node/echo-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For an empty file, see [make an empty file](<leftover-box-touch>). For the editor, see [edit a file from the couch](<leftover-box-nano>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager for this.](<leftover-box-touch>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousMake an empty file](<leftover-box-touch>) [NextMake a file runnable](<leftover-box-chmod>)

---

*Labthrift Markdown mirror. HTML version linked above.*
