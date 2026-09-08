# Rename or move a file

Source: https://labthrift.com/guides/leftover-box-mv
Markdown: https://labthrift.com/md/guides/leftover-box-mv.md

*Notes › / › Faster network › / › Rename or move a file*

[Notes](<./>) / [Faster network](<./#switches>) / Rename or move a file

Written 29 Aug 2026. This is a how-to, not a product card.

# Rename or move a file

After SSH works, rename or move a file with `mv` so the name matches the job. The old name is gone. You don't need a NAS for this.

[Copy a file without leaving the computer](<leftover-box-cp>) leaves the original sitting there. Tonight you want the same file under a better name, or in a folder you already made. `mv` is move. It is also rename. Same computer, one file, new path. Useful after [make a folder](<leftover-box-mkdir>), so the spare is not still sitting in home. The computer does not need a desktop, a NAS, or a file manager app for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you want a second copy and the original to stay, that is [copy a file without leaving the computer](<leftover-box-cp>). If the file is still on the laptop, that is [copy a file to the computer from your laptop](<leftover-box-scp>). If you only want to sit in a different folder, that is [move into a folder](<leftover-box-cd>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`mv` gives a file a new name, or puts it in another folder. You run it on the computer, after SSH. The old name is gone. That is the whole difference from `cp`. It does not change which folder you are sitting in. That is `cd`. It does not talk to the laptop. That is `scp`. It does not share the file with phones. That is Samba. Two paths, same computer, one file.

## Give it a better name

SSH in. If you don't already have a throwaway file, make one in home:

`echo 'hello' > ~/hello.txt`

Then rename it:

`mv ~/hello.txt ~/hello-keep.txt`

The first path is the name you have. The second path is the name you want. Swap the names for yours. A short name with no spaces is easier to type later. Want the original to stay too? Copy first: [copy a file without leaving the computer](<leftover-box-cp>).

## See that the old name is gone

List home:

`ls ~`

You want `hello-keep.txt`. You don't want `hello.txt` any more. Optional look at size and date:

`ls -lh ~/hello-keep.txt`

Optional peek without opening the editor. That print command is [read a file without opening the editor](<leftover-box-cat>):

`cat ~/hello-keep.txt`

You want the same line you wrote. The computer moved the file. It did not make a spare.

## Move it into a folder

Need a folder first? [Make a folder](<leftover-box-mkdir>). Then keep the same filename and drop the file inside:

`mv ~/hello-keep.txt ~/notes/`

The trailing slash on `notes/` is a reminder that the last thing is a folder. List it:

`ls ~/notes`

You want `hello-keep.txt` in that folder. List home again. The old home name should be gone. A full second path also works if you want a different name in there:

`mv ~/hello-keep.txt ~/notes/hello-later.txt`

Sitting in the folder yourself is a different job. That is [move into a folder](<leftover-box-cd>).

## Optional: ask before overwriting

If the new name already exists, a plain `mv` replaces it with no useful undo. Ask first:

`mv -i ~/hello-keep.txt ~/notes/hello-keep.txt`

The computer will wait for a yes if that second name is already taken. Type `n` if you did not mean to replace it. Skip `mv` of anything under `/` or `/etc`. Home is the practice place. Skip SSH settings tonight.

## What this is not

This is not a second copy. That is [copy a file without leaving the computer](<leftover-box-cp>). It is not a file from the laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not changing which folder you sit in. That is [move into a folder](<leftover-box-cd>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). It is not a checked backup. That is [a backup of the folder](<first-backup>).

## What next

Need a spare before you rename? [Copy a file without leaving the computer](<leftover-box-cp>). Need a folder for the file to land in? [Make a folder](<leftover-box-mkdir>). Need the names again? [See what's in a folder](<leftover-box-ls>). Need to change a line? [Edit a file from the couch](<leftover-box-nano>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `cp` if you want the old name gone. That tool leaves a second file.
  * Skip `cd` if the file is what you want to move. That tool only changes where you sit.
  * Skip buying a NAS, a “cloud drive,” or a file manager app to rename one file.
  * Skip `mv /`, anything under `/etc`, SSH settings, or `rm -rf`. Deleting one practice file is [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can rename files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU coreutils: mv invocation](<https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html>). [Debian: mv](<https://manpages.debian.org/bookworm/coreutils/mv.1.en.html>). [Ubuntu: mv](<https://manpages.ubuntu.com/manpages/noble/en/man1/mv.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a spare that keeps the original, see [copy a file without leaving the computer](<leftover-box-cp>). For making a folder, see [make a folder](<leftover-box-mkdir>). For listing names, see [see what's in a folder](<leftover-box-ls>). For sitting in a folder, see [move into a folder](<leftover-box-cd>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager app for this.](<leftover-box-cd>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousCopy a file without leaving the computer](<leftover-box-cp>) [NextDelete a file carefully](<leftover-box-rm>)

---

*Labthrift Markdown mirror. HTML version linked above.*
