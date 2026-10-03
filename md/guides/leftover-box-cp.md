# Copy a file without leaving the computer

Source: https://labthrift.com/guides/leftover-box-cp
Markdown: https://labthrift.com/md/guides/leftover-box-cp.md

*Notes › / › Faster network › / › Copy a file without leaving the computer*

[Notes](<./>) / [Faster network](<./#switches>) / Copy a file without leaving the computer

Written 29 Aug 2026. This is a how-to, not a product card.

# Copy a file without leaving the computer

After SSH works, copy a file with `cp` so you can edit a spare without wrecking the original. You don't need a NAS for this.

[Copy a file to the computer from your laptop](<leftover-box-scp>) is the laptop-to-computer path. Tonight you are already on the computer. `cp` is copy. It makes a second file from one that is already there. Useful before [edit a file from the couch](<leftover-box-nano>), so a bad save does not eat the only copy. It does not need a desktop, a NAS, or a cloud drive for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If the file is still on the laptop, that is [copy a file to the computer from your laptop](<leftover-box-scp>). If you need a folder for the spare to land in, that is [make a folder](<leftover-box-mkdir>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`cp` copies a file to another name or folder. You run it on the computer, after SSH. It does not talk to the laptop. That is `scp`. It does not share the copy with phones. That is Samba. It does not measure free disk. That is [see if the computer still has room](<leftover-box-disk-space>). Two names, same computer.

## Make a spare with a new name

SSH in. If you don't already have a throwaway file, make one in home:

`echo 'hello' > ~/hello.txt`

Then copy it to a second name:

`cp ~/hello.txt ~/hello-copy.txt`

The first path is the file you already have. The second path is the spare. Swap the names for yours. A short name with no spaces is easier to type later.

## See that both are there

List home:

`ls ~`

You want `hello.txt` and `hello-copy.txt`. Optional look at size and date:

`ls -lh ~/hello.txt ~/hello-copy.txt`

The sizes should match. Optional peek at the spare without opening the editor:

`cat ~/hello-copy.txt`

You want the same line you wrote. Now you can edit the spare: [edit a file from the couch](<leftover-box-nano>). The original stays put.

## Copy into a folder

Need a folder first? [Make a folder](<leftover-box-mkdir>). Then keep the same filename and drop the copy inside:

`cp ~/hello.txt ~/notes/`

The trailing slash on `notes/` is a reminder that the last thing is a folder. List it:

`ls ~/notes`

You want `hello.txt` in that folder. A full second path also works if you want a different name in there:

`cp ~/hello.txt ~/notes/hello-keep.txt`

## Optional: ask before overwriting

If the spare name already exists, a plain `cp` replaces it with no useful undo. Ask first:

`cp -i ~/hello.txt ~/hello-copy.txt`

The computer will wait for a yes if that second name is already taken. Type `n` if you did not mean to replace it. Skip `cp -r` tonight unless you are copying one small folder you made. Skip copying anything under `/` or `/etc`. Home is the practice place.

## What this is not

This copy lives on the computer. It is not a shortcut. That is [make a shortcut](<leftover-box-ln>). It is not a compare of two files. That is [see whether two files are the same](<leftover-box-diff>). It is not a file from the laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). It is not a checked backup. That is [a backup of the folder](<first-backup>). Free disk left is still [see if the computer still has room](<leftover-box-disk-space>).

## What next

Need to see if the spare still matches? [See whether two files are the same](<leftover-box-diff>). Need to change the spare? [Edit a file from the couch](<leftover-box-nano>). Need the spare under a better name? [Rename or move a file](<leftover-box-mv>). Need an empty file first? [Make an empty file](<leftover-box-touch>). Need a folder for copies to land in? [Make a folder](<leftover-box-mkdir>). Need the names again? [See what's in a folder](<leftover-box-ls>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `scp` for a file that is already on the computer. That tool is the laptop path.
  * Skip buying a NAS, a “cloud drive,” or a file manager to duplicate one file.
  * Skip `cp -r /`, anything under `/etc`, or SSH settings tonight.
  * Skip opening SSH to the internet so you can copy files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU coreutils: cp invocation](<https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html>). [Debian: cp](<https://manpages.debian.org/bookworm/coreutils/cp.1.en.html>). [Ubuntu: cp](<https://manpages.ubuntu.com/manpages/noble/en/man1/cp.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For the laptop path, see [copy a file to the computer from your laptop](<leftover-box-scp>). For making a folder, see [make a folder](<leftover-box-mkdir>). For listing names, see [see what's in a folder](<leftover-box-ls>). For editing a spare, see [edit a file from the couch](<leftover-box-nano>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager for this.](<leftover-box-touch>) [Rename or move a fileAfter SSH works, rename or move a file with mv so the name matches the job. The old name is gone. You don't need a NAS for this.](<leftover-box-mv>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager for this.](<leftover-box-cd>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [A folder the house can openShare one folder from the computer so phones and laptops can open it. Samba is the usual name for that job on Debian and Ubuntu.](<first-file-share>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousMake a folder](<leftover-box-mkdir>) [NextRename or move a file](<leftover-box-mv>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
