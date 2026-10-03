# Make an empty file

Source: https://labthrift.com/guides/leftover-box-touch
Markdown: https://labthrift.com/md/guides/leftover-box-touch.md

*Notes › / › Faster network › / › Make an empty file*

[Notes](<./>) / [Faster network](<./#switches>) / Make an empty file

Written 29 Aug 2026. This is a how-to, not a product card.

# Make an empty file

After SSH works, make an empty file with `touch` so nano and copies have a file to land on. You don't need a file manager for this.

[Make a folder](<leftover-box-mkdir>) creates a named place. [Edit a file from the couch](<leftover-box-nano>) puts words in a file. Tonight you only need the empty file itself. `touch` makes that empty file with a name you chose. You are still only making a place for later. It does not need a desktop, a file manager, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you need a folder first, that is [make a folder](<leftover-box-mkdir>). If the file already exists and you want a spare, that is [copy a file without leaving the computer](<leftover-box-cp>). If you already have words to put in, that is [edit a file from the couch](<leftover-box-nano>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`touch` makes an empty file, or leaves an existing file alone. You run it on the computer, after SSH. It does not make a folder. That is `mkdir`. It does not write a line of words. That is [put a short line into a file](<leftover-box-echo>). It does not open an editor. That is `nano`. It does not copy a file that already has words. That is `cp`. One path, same computer, an empty file with a name.

## Make one empty file in home

SSH in. Make an empty file you named. A short name with no spaces is easier to type later:

`touch ~/hello.txt`

The tilde `~` is a short name for your home folder. Swap `hello.txt` for a name you will remember. Letters, numbers, a hyphen, and a dot are enough. Skip spaces tonight.

Then see that it is there:

`ls -lh ~/hello.txt`

You want a size of zero. That is the whole first-night trick. Optional peek without opening the editor:

`cat ~/hello.txt`

A blank window is correct. There is nothing in it yet. Now you can put words in: [edit a file from the couch](<leftover-box-nano>).

## Useful extras, still making only

Need a folder first? That is [make a folder](<leftover-box-mkdir>). Then keep the filename and drop the empty file inside:

`touch ~/notes/hello.txt`

If `notes` is missing, make it first. `touch` will not invent the folder for you.

If you see command not found, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file manager.

If the name already exists, a plain `touch` leaves the words alone and only updates the computer's memory of when you last touched it. That is fine for tonight. You don't need a second empty file with a stamp trick. Skip extra flags. Skip using `touch` to fake dates.

When you are done practicing:

`rm -i ~/hello.txt`

## What this is not

This is not a folder. That is [make a folder](<leftover-box-mkdir>). It is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a copy of a file that already has words. That is [copy a file without leaving the computer](<leftover-box-cp>). It is not a dump of a file. That is [read a file without opening the editor](<leftover-box-cat>). It is not a compare of two files. That is [see whether two files are the same](<leftover-box-diff>). It is not asking what kind of file this is. That is [see what kind of file this is](<leftover-box-file>). It is not a hunt for a file by name. That is [find a file by name](<leftover-box-find>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need a folder for the empty file to land in? [Make a folder](<leftover-box-mkdir>). Need one short line without the editor? [Put a short line into a file](<leftover-box-echo>). Need several lines? [Edit a file from the couch](<leftover-box-nano>). Need a spare of a file that already has words? [Copy a file without leaving the computer](<leftover-box-cp>). Need the names again? [See what's in a folder](<leftover-box-ls>). Need a short dump after you add a line? [Read a file without opening the editor](<leftover-box-cat>). Need to see if a spare still matches? [See whether two files are the same](<leftover-box-diff>). Need to know if the path is text? [See what kind of file this is](<leftover-box-file>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `mkdir` if you wanted an empty file, not a folder. That folder job is [make a folder](<leftover-box-mkdir>).
  * Skip using `touch` to stamp fake dates tonight. An empty file with a name is the job.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip buying a file manager, a “cloud IDE,” or a NAS to make one empty text file.
  * Skip opening SSH to the internet so you can make files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: touch](<https://manpages.debian.org/bookworm/coreutils/touch.1.en.html>). [Ubuntu: touch](<https://manpages.ubuntu.com/manpages/noble/man1/touch.1.html>). [GNU coreutils: touch](<https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a folder, see [make a folder](<leftover-box-mkdir>). For words in the file, see [edit a file from the couch](<leftover-box-nano>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [See what kind of file this isAfter SSH works, ask what kind of file this is with file before you dump it. You don't need a file viewer for this.](<leftover-box-file>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSee whether two files are the same](<leftover-box-diff>) [NextPut a short line into a file](<leftover-box-echo>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
