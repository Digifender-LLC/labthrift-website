# Make a folder

Source: https://labthrift.com/guides/leftover-box-mkdir
Markdown: https://labthrift.com/md/guides/leftover-box-mkdir.md

*Notes › / › Faster network › / › Make a folder*

[Notes](<./>) / [Faster network](<./#switches>) / Make a folder

Written 28 Aug 2026. This is a how-to, not a product card.

# Make a folder

After SSH works, make a folder with `mkdir` so copies and edits have a place to land. You don't need a NAS for this.

[SSH from the couch](<first-ssh>) sits you in a folder. [See what's in a folder](<leftover-box-ls>) lists names. [Move into a folder](<leftover-box-cd>) sits you in one that already exists. `mkdir` is make directory. It creates an empty folder you named, usually in home, so the next copy or edit is not dumped on top of everything else. The computer does not need a desktop, a NAS, or a cloud drive for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need names, that is [see what's in a folder](<leftover-box-ls>). If the folder is already there and you just need to sit in it, that is [move into a folder](<leftover-box-cd>). If you only need one file from the laptop, that is [copy a file to the computer from your laptop](<leftover-box-scp>). Skip this whole note if the computer already has the folder you want.

## What this is

`mkdir` creates an empty folder. It does not copy files into that folder. It does not share the folder with phones and laptops. That is [a folder the house can open](<first-file-share>). It does not measure free disk. That is [see if the computer still has room](<leftover-box-disk-space>). A folder is just a named place. Home gets messy if every `scp` lands in `~`.

## Make one folder in home

SSH in. At the prompt, start in home if you are not sure:

`cd ~`

Then make a folder you named. A short name with no spaces is easier to type later:

`mkdir ~/notes`

The tilde `~` is a short name for your home folder. Swap `notes` for a name you will remember. Letters, numbers, and a hyphen are enough. Skip spaces tonight. If that folder already exists, it says so. That is fine. You don't need a second copy of the same name.

## See that it is there

List home:

`ls ~`

You want `notes` in the list. Optional look at just that folder:

`ls -ld ~/notes`

The `d` at the start of the line means directory, which is the computer's word for folder. Then sit in it:

`cd ~/notes`

`pwd`

You want something like `/home/you/notes`. An empty folder lists nothing useful. That is the point. You just made a place.

## Optional: a folder inside a folder

If you want `notes/keep` and `notes` is not there yet, one command can make both:

`mkdir -p ~/notes/keep`

The `-p` means make the parents if they are missing, and stay quiet if they already exist. Skip `-p` tonight if one folder in home is enough. Don't run `mkdir` under `/` or `/etc`. Those are system folders. Home is the practice place.

## Put something in it

A throwaway file you can delete later:

`echo 'hello' > ~/notes/hello.txt`

Then:

`ls ~/notes`

You want `hello.txt`. Optional edit: [edit a file from the couch](<leftover-box-nano>). Optional copy from the laptop into that folder:

`scp ./photo.jpg lab:~/notes/`

That is the same `scp` as [copy a file to the computer from your laptop](<leftover-box-scp>), with the folder on the side. Swap the filename for yours.

## Remove the practice folder if it is empty

If you only wanted a test:

`rm ~/notes/hello.txt`

Then, only if the folder is empty:

`rmdir ~/notes`

`rmdir` refuses if anything is still inside. That is the safe one. Skip `rm -r` and `rm -rf` tonight. Those delete a folder and everything in it, with no useful undo. Keep the folder if you are about to copy real files into it.

## What this is not

This folder is a name on the computer. It is not an empty file. That is [make an empty file](<leftover-box-touch>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). It is not a checked backup. That is [a backup of the folder](<first-backup>). Free disk left is still [see if the computer still has room](<leftover-box-disk-space>).

## What next

Need an empty file in that folder? [Make an empty file](<leftover-box-touch>). Need to sit in the new folder? [Move into a folder](<leftover-box-cd>). Want the names again? [See what's in a folder](<leftover-box-ls>). Need a file from the laptop in that folder? [Copy a file to the computer from your laptop](<leftover-box-scp>). Need a spare of a file that is already there? [Copy a file without leaving the computer](<leftover-box-cp>). Need to change a file in place? [Edit a file from the couch](<leftover-box-nano>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip buying a NAS, a “cloud drive,” or a file manager app to make one folder.
  * Skip `mkdir /`, `mkdir /etc`, or any folder outside home tonight.
  * Skip `rm -r` and `rm -rf` until you can live with losing that folder.
  * Skip opening SSH to the internet so you can make folders from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU coreutils: mkdir invocation](<https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html>). [Debian: mkdir](<https://manpages.debian.org/bookworm/coreutils/mkdir.1.en.html>). [Ubuntu: mkdir](<https://manpages.ubuntu.com/manpages/noble/en/man1/mkdir.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For listing names, see [see what's in a folder](<leftover-box-ls>). For sitting in a folder, see [move into a folder](<leftover-box-cd>). For moving a file, see [copy a file to the computer from your laptop](<leftover-box-scp>). For editing a file, see [edit a file from the couch](<leftover-box-nano>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager app for this.](<leftover-box-cd>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Rename or move a fileAfter SSH works, rename or move a file with mv so the name matches the job. The old name is gone. You don't need a NAS for this.](<leftover-box-mv>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager app for this.](<leftover-box-touch>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [A folder the house can openShare one folder from the computer so phones and laptops can open it. Samba is the usual name for that job on Debian and Ubuntu.](<first-file-share>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSee which folder you are in](<leftover-box-pwd>) [NextCopy a file without leaving the computer](<leftover-box-cp>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
