# Move into a folder

Source: https://labthrift.com/guides/leftover-box-cd
Markdown: https://labthrift.com/md/guides/leftover-box-cd.md

*Notes › / › Faster network › / › Move into a folder*

[Notes](<./>) / [Faster network](<./#switches>) / Move into a folder

Written 28 Aug 2026. This is a how-to, not a product card.

# Move into a folder

After SSH works, change folders with `cd`. You don't need a file manager app for this.

[SSH from the couch](<first-ssh>) sits you in a folder. [See what's in a folder](<leftover-box-ls>) lists the names in that folder. `cd` is change directory. It moves you into another folder so the next `ls`, `nano`, or copy lands where you meant. The computer does not need a desktop or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need names, that is [see what's in a folder](<leftover-box-ls>). If you only need to move a file, that is [copy a file to the computer from your laptop](<leftover-box-scp>). This note is how you sit in a different folder. Skip this whole note if you are still stuck on the first login.

## What this is

`cd` changes the folder your next commands use. `ls /etc` can look at a folder without moving. After `cd /etc`, a plain `ls` lists that folder, and a filename with no path is in that folder. You are not measuring free disk. That is [see if the computer still has room](<leftover-box-disk-space>).

## Move into a folder

SSH in. At the prompt, pick a folder you already saw with `ls`. A first login is usually home. Try the settings folder just to look:

`cd /etc`

If that folder is not there, the computer says no such file or directory. Check the name, or [make a folder](<leftover-box-mkdir>). That is not a reason to buy a NAS. A folder you copied into, if it exists:

`cd ~/scripts`

The tilde `~` is a short name for your home folder. Swap `scripts` for a folder you actually have.

## See that you moved

After you change folders:

`pwd`

That prints the full path. The dedicated note is [see which folder you are in](<leftover-box-pwd>). Then:

`ls`

You want the names for the folder you just named. Listing without moving is still [see what's in a folder](<leftover-box-ls>).

## Go back home

Plain `cd` with no folder, or:

`cd ~`

Both put you in the login's home folder. That is the usual first-login folder. Optional check:

`pwd`

You want something like `/home/you`.

## Go up one folder

Two dots mean the folder that holds this one:

`cd ..`

From `/home/you` that lands in `/home`. From `/etc` that lands in `/`, the root. Check with `pwd` again. You are only moving. Don't delete names you don't know.

## Optional: the folder you just left

To bounce back to the folder you were in a moment ago:

`cd -`

That prints the path it moved to. Useful when you peeked at `/etc` and want home again without typing the long path. Skip this if the two-dot form already got you where you wanted.

## What this is not

This move is not a backup. It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). Copying one file from the laptop is [copy a file to the computer from your laptop](<leftover-box-scp>). Editing a file once you are in the folder is [edit a file from the couch](<leftover-box-nano>).

## What next

Need only the full path after you move? [See which folder you are in](<leftover-box-pwd>). Need a folder that is not there yet? [Make a folder](<leftover-box-mkdir>). Want the names in this folder? [See what's in a folder](<leftover-box-ls>). Need to change one of those files? [Edit a file from the couch](<leftover-box-nano>). Need the file on the laptop too? [Copy a file to the computer from your laptop](<leftover-box-scp>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip buying a file manager, Midnight Commander, or a “cloud drive” app to change folders.
  * Skip `cd /` tonight and wandering the whole the computer. Home, one named folder, and two dots are enough.
  * Skip deleting names you don't know. Moving is the job.
  * Skip opening SSH to the internet so you can change folders from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU Bash: Bourne Shell Builtins](<https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html>). [Debian: bash](<https://manpages.debian.org/bookworm/bash/bash.1.en.html>). [Ubuntu: bash](<https://manpages.ubuntu.com/manpages/noble/en/man1/bash.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For listing names, see [see what's in a folder](<leftover-box-ls>). For making a folder, see [make a folder](<leftover-box-mkdir>). For a short leftover name, see [give the computer a short name on your laptop](<leftover-box-ssh-config>). For moving a file, see [copy a file to the computer from your laptop](<leftover-box-scp>). For editing a file, see [edit a file from the couch](<leftover-box-nano>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [See which folder you are inAfter SSH works, print the full path with pwd so you know where ls and nano will land. You don't need a file manager app for this.](<leftover-box-pwd>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [Give the computer a short name on your laptopAfter SSH works, put a short name in your laptop SSH config so you type ssh lab instead of the long address. You don't need a new router.](<leftover-box-ssh-config>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSee what's in a folder](<leftover-box-ls>) [NextSee which folder you are in](<leftover-box-pwd>)

---

*Labthrift Markdown mirror. HTML version linked above.*
