# See what's in a folder

Source: https://labthrift.com/guides/leftover-box-ls
Markdown: https://labthrift.com/md/guides/leftover-box-ls.md

*Notes › / › Faster network › / › See what's in a folder*

[Notes](<./>) / [Faster network](<./#switches>) / See what's in a folder

Written 28 Aug 2026. This is a how-to, not a product card.

# See what's in a folder

After SSH works, list the folder you are sitting in with `ls`. You don't need a file manager app for this.

[SSH from the couch](<first-ssh>) puts you at a prompt. You are sitting in a folder. `ls` prints the names in that folder. That is how you confirm a copied file landed, pick a file for `nano`, and stop guessing. The computer does not need a desktop, a file manager, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. A short name is nicer: [give the computer a short name on your laptop](<leftover-box-ssh-config>). If you only need to move a file, that is [copy a file to the computer from your laptop](<leftover-box-scp>). If you are changing a file, that is [edit a file from the couch](<leftover-box-nano>). This note is how you look at names. Skip this whole note if you are still stuck on the first login.

## What this is

`ls` lists names in a folder. Leave off a path and it lists the folder you are already in. After a normal SSH login that is your home folder (the login’s own files). You are not measuring free disk. That is [see if the computer still has room](<leftover-box-disk-space>). You are not ranking which folders are huge. That is [see which folders are eating the disk](<leftover-box-largest-folders>).

## List the folder you are in

SSH in. At the prompt:

`ls`

You get a list of names. Folders and files sit together. If the list is empty, you are in a fresh home folder. That is fine. You have not broken anything.

## See where you are

If you are not sure which folder that list belongs to:

`pwd`

That prints the full path. The dedicated note is [see which folder you are in](<leftover-box-pwd>). A first login is usually something like `/home/you`. The tilde `~` is a short name for that home folder. Optional same list, named:

`ls ~`

If you are already home, that is the same names as plain `ls`.

## Optional: sizes and dates

After [you copy a file over](<leftover-box-scp>), you want more than a name:

`ls -lh`

`-l` is the long list (size, date, who owns it). `-h` makes sizes readable (12K, 3.1M) instead of raw bytes. Look at one name:

`ls -lh ~/photo.jpg`

You want the filename, a size that is not zero, and today’s date if you just copied it. Swap the filename for yours.

## Optional: names that start with a dot

`ls` hides names that start with a dot. Those are ordinary files the computer uses for settings. `~/.ssh` is one of them. Seeing which laptop keys already live there is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>). To include those names:

`ls -a`

or the long form:

`ls -lah`

Skip deleting anything you don't recognize in that list.

## Look at a folder you name

You can point `ls` at a folder without moving:

`ls /etc`

That is the settings folder. It is long. You are only looking. Don't edit those files from this note. Optional one folder you copied into:

`ls ~/scripts`

If you see no such file or directory, the folder is not there yet. Check the name, or [make a folder](<leftover-box-mkdir>). That is not a reason to buy a NAS.

## What this is not

This list is names. It is not a backup. It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). Free disk left is [see if the computer still has room](<leftover-box-disk-space>). Which folders are huge is [see which folders are eating the disk](<leftover-box-largest-folders>).

## What next

Not sure which folder that list belongs to? [See which folder you are in](<leftover-box-pwd>). Need a folder that is not there yet? [Make a folder](<leftover-box-mkdir>). Need to sit in one of those folders? [Move into a folder](<leftover-box-cd>). Forgot which folder holds the file? [Find a file by name](<leftover-box-find>). Need to change one of those files? [Edit a file from the couch](<leftover-box-nano>). Need the file on the laptop too? [Copy a file to the computer from your laptop](<leftover-box-scp>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip buying a file manager, Midnight Commander, or a “cloud drive” app to see names.
  * Skip `ls -R /` tonight. That dumps the whole the computer and is not a backup.
  * Skip deleting names you don't know. Looking is the job.
  * Skip opening SSH to the internet so you can list folders from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU coreutils: ls invocation](<https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html>). [Debian: ls](<https://manpages.debian.org/bookworm/coreutils/ls.1.en.html>). [Ubuntu: ls](<https://manpages.ubuntu.com/manpages/noble/en/man1/ls.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short name, see [give the computer a short name on your laptop](<leftover-box-ssh-config>). For moving a file, see [copy a file to the computer from your laptop](<leftover-box-scp>). For editing a file, see [edit a file from the couch](<leftover-box-nano>). For disk room, see [see if the computer still has room](<leftover-box-disk-space>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager app for this.](<leftover-box-cd>) [See which folder you are inAfter SSH works, print the full path with pwd so you know where ls and nano will land. You don't need a file manager app for this.](<leftover-box-pwd>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousReuse a command you already typed](<leftover-box-history>) [NextMove into a folder](<leftover-box-cd>)

---

*Labthrift Markdown mirror. HTML version linked above.*
