# See whether two files are the same

Source: https://labthrift.com/guides/leftover-box-diff
Markdown: https://labthrift.com/md/guides/leftover-box-diff.md

*Notes › / › Faster network › / › See whether two files are the same*

[Notes](<./>) / [Faster network](<./#switches>) / See whether two files are the same

Written 29 Aug 2026. This is a how-to, not a product card.

# See whether two files are the same

After SSH works, compare two files with `diff` so you can tell if the spare still matches. You don't need a file viewer for this.

[Copy a file without leaving the computer](<leftover-box-cp>) makes a spare. [Read a file without opening the editor](<leftover-box-cat>) dumps one short file. After you edit the spare, `diff` tells you whether the two files still match, without opening both. You are still only looking. It does not need a desktop, a compare app, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need a spare, that is [copy a file without leaving the computer](<leftover-box-cp>). If you want to dump one short file, that is [read a file without opening the editor](<leftover-box-cat>). If you want to change a line, that is [edit a file from the couch](<leftover-box-nano>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`diff` compares two files line by line. You run it on the computer, after SSH. The files stay on disk. You are only looking. It does not make a spare. That is `cp`. It does not dump one file. That is `cat`. It does not open an editor. That is `nano`. It does not ask what kind of file this is. That is `file`. Two paths, same computer, a match or the lines that differ.

## Compare two files

SSH in. Make a throwaway text file, then a spare:

`printf 'apple\\nbanana\\ncherry\\n' > ~/fruit.txt`

`cp ~/fruit.txt ~/fruit-spare.txt`

Then ask whether they match:

`diff ~/fruit.txt ~/fruit-spare.txt`

A blank window means they match. That is the whole first-night trick. No news is the good answer.

Now change the spare and ask again:

`printf 'apple\\nblueberry\\ncherry\\n' > ~/fruit-spare.txt`

`diff ~/fruit.txt ~/fruit-spare.txt`

You should see the banana line and the blueberry line. Lines with `<` are in the first file. Lines with `>` are in the second. You don't need to memorize the rest of the marks tonight.

## Useful extras, still looking only

Need a spare first? That is [copy a file without leaving the computer](<leftover-box-cp>). Need to know if the path is even text? That is [see what kind of file this is](<leftover-box-file>). Need a short dump of one file? That is [read a file without opening the editor](<leftover-box-cat>).

If you see command not found, install the usual tool, then try again:

`sudo apt install diffutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a compare app.

When you are done practicing:

`rm -i ~/fruit.txt ~/fruit-spare.txt`

## What this is not

This is not a copy. That is [copy a file without leaving the computer](<leftover-box-cp>). It is not a dump of one file. That is [read a file without opening the editor](<leftover-box-cat>). It is not an editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a line count. That is [see how long a file is](<leftover-box-wc>). It is not asking what kind of file this is. That is [see what kind of file this is](<leftover-box-file>). It is not a search for a word. That is [find a word in a file](<leftover-box-grep>). It is not a hunt for a file by name. That is [find a file by name](<leftover-box-find>). It is not an empty file. That is [make an empty file](<leftover-box-touch>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need an empty file first? [Make an empty file](<leftover-box-touch>). Need a spare to compare against? [Copy a file without leaving the computer](<leftover-box-cp>). Need to change the spare? [Edit a file from the couch](<leftover-box-nano>). Need a short dump of one file? [Read a file without opening the editor](<leftover-box-cat>). Need to know if the path is text before you compare it? [See what kind of file this is](<leftover-box-file>). Need the first lines of a long file? [See the start of a file](<leftover-box-head>). Need the last lines? [See the end of a file](<leftover-box-tail>). Need only the lines with one word? [Find a word in a file](<leftover-box-grep>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `diff` on photos, zip files, or programs. Those print junk. Two text files are the job. Ask first with [see what kind of file this is](<leftover-box-file>).
  * Skip a compare app, Git, or a NAS to see whether one spare still matches.
  * Skip extra flags tonight. A blank window or the differing lines is enough. You don't need a side-by-side view.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can compare files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: diff](<https://manpages.debian.org/bookworm/diffutils/diff.1.en.html>). [Ubuntu: diff](<https://manpages.ubuntu.com/manpages/noble/man1/diff.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a spare, see [copy a file without leaving the computer](<leftover-box-cp>). For a short dump, see [read a file without opening the editor](<leftover-box-cat>). For a kind-of-file check, see [see what kind of file this is](<leftover-box-file>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [See what kind of file this isAfter SSH works, ask what kind of file this is with file before you dump it. You don't need a file viewer for this.](<leftover-box-file>) [See the start of a fileAfter SSH works, print the first lines of a file with head so a long file does not flood the window. You don't need a file viewer for this.](<leftover-box-head>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager for this.](<leftover-box-touch>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSee the start of a file](<leftover-box-head>) [NextMake an empty file](<leftover-box-touch>)

---

*Labthrift Markdown mirror. HTML version linked above.*
