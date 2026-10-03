# See which folder you are in

Source: https://labthrift.com/guides/leftover-box-pwd
Markdown: https://labthrift.com/md/guides/leftover-box-pwd.md

*Notes › / › Faster network › / › See which folder you are in*

[Notes](<./>) / [Faster network](<./#switches>) / See which folder you are in

Written 29 Aug 2026. This is a how-to, not a product card.

# See which folder you are in

After SSH works, print the full path with `pwd` so you know where `ls` and `nano` will land. You don't need a file manager app for this.

[See what's in a folder](<leftover-box-ls>) lists names. [Move into a folder](<leftover-box-cd>) changes the folder. Tonight you only need the answer to “where am I?” `pwd` prints the full path of the folder you are sitting in. You are still only looking. The computer does not need a desktop, a file manager, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need the names in this folder, that is [see what's in a folder](<leftover-box-ls>). If you want to sit in a different folder, that is [move into a folder](<leftover-box-cd>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`pwd` means print working directory. It prints the full path of the folder your next commands use. You run it on the computer, after SSH. It does not list the names in that folder. That is `ls`. It does not move you. That is `cd`. It does not make a folder. That is `mkdir`. One short command, same computer, the full path.

## Print the path

SSH in. At the prompt:

`pwd`

You should see a full path that starts with a slash, often something like `/home/you` on a first login. That is the whole first-night trick. The tilde `~` is a short name for that home folder. `pwd` always prints the long form.

Then list the names in that same folder:

`ls`

Those names belong to the path `pwd` just printed. That list job is [see what's in a folder](<leftover-box-ls>).

## Useful extras, still looking only

Peek at another folder, then check where you landed:

`cd /etc`

`pwd`

You want `/etc`. You are only looking. Don't edit files there from this note. Go back home:

`cd ~`

`pwd`

You want something like `/home/you` again. Moving is [move into a folder](<leftover-box-cd>). Tonight `pwd` is only the check after you move.

If you see command not found, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file manager.

Skip extra flags tonight. Plain `pwd` is enough for tonight.

## What this is not

This is not a list of names. That is [see what's in a folder](<leftover-box-ls>). It is not a move into another folder. That is [move into a folder](<leftover-box-cd>). It is not making a folder. That is [make a folder](<leftover-box-mkdir>). It is not free disk left. That is [see if the computer still has room](<leftover-box-disk-space>). It is not a hunt for a file by name. That is [find a file by name](<leftover-box-find>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need the names in this folder? [See what's in a folder](<leftover-box-ls>). Need to sit somewhere else? [Move into a folder](<leftover-box-cd>). Need a folder that is not there yet? [Make a folder](<leftover-box-mkdir>). Need an empty file in this folder? [Make an empty file](<leftover-box-touch>). Need one short line without the editor? [Put a short line into a file](<leftover-box-echo>). Need to change a file here? [Edit a file from the couch](<leftover-box-nano>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `printenv` as tonight's job. Printenv prints environment (HOME and PATH), not pwd: [see HOME and PATH](<leftover-box-printenv>).
  * Skip buying a file manager, Midnight Commander, or a “cloud drive” app to see which folder you are in.
  * Skip `pwd` flags and symlink puzzles tonight. The plain path is the job.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can check folders from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: pwd](<https://manpages.debian.org/bookworm/coreutils/pwd.1.en.html>). [Ubuntu: pwd](<https://manpages.ubuntu.com/manpages/noble/man1/pwd.1.html>). [GNU coreutils: pwd](<https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For listing names, see [see what's in a folder](<leftover-box-ls>). For moving, see [move into a folder](<leftover-box-cd>). For making a folder, see [make a folder](<leftover-box-mkdir>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager app for this.](<leftover-box-cd>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager app for this.](<leftover-box-touch>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager app for this.](<leftover-box-echo>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Find a file by nameAfter SSH works, search the computer for a file by name with find so you don't have to open every folder. You don't need a file manager app for this.](<leftover-box-find>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousMove into a folder](<leftover-box-cd>) [NextMake a folder](<leftover-box-mkdir>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
