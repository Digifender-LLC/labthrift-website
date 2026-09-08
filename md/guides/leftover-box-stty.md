# See window size

Source: https://labthrift.com/guides/leftover-box-stty
Markdown: https://labthrift.com/md/guides/leftover-box-stty.md

*Notes › / › Faster network › / › See window size*

[Notes](<./>) / [Faster network](<./#switches>) / See window size

Written 31 Aug 2026. This is a how-to, not a product card.

# See window size

After `clear`, `stty size` prints rows and columns so window size makes sense. You don't need extra software for this.

[Clear the window](<leftover-box-clear>) wiped the window with `clear`. Tonight you check the window size: `stty size`. Stty size means rows and columns (window size). The first number is rows. The second number is columns. Example 24 80 is 24 rows and 80 columns. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If `clear` is what you want (window wipe), that is [clear the window](<leftover-box-clear>). Skip `clear` as tonight's job. `stty size` prints window size. Skip `reset` as tonight's job. Reset is garbled terminal fix. That is [fix a garbled terminal](<leftover-box-reset>).

## What this is

`stty size` means window size. The command is `stty size`. Stty size means rows and columns. The first number is rows. The second number is columns.

After `clear`, this is window size so rows and columns make sense. You don't need extra system software for this.

## Practice stty in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask for window size:

`stty size`

You want two numbers: rows then columns. Example 24 80 is 24 rows and 80 columns. Stty size means window size. The first number is rows. The second number is columns. That is enough for tonight. Practice only in home.

Debian and Ubuntu already have `stty` (coreutils / util-linux, usual install). Don't make apt the job.

If `stty` is missing, optional aside:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: `stty -a` if present (peek settings):

`stty -a`

That peek is settings, not window size. You can stop at `stty size`. Don't make `stty -a` the job.

Optional extra: `echo $LINES $COLUMNS` if present:

`echo $LINES $COLUMNS`

That line is rows and columns from the shell environment, if present. You can stop at `stty size`.

Optional extra: Resize the SSH window, then run `stty size` again:

`stty size`

Numbers can change after a resize. You can stop at `stty size` once.

Skip `stty raw`, `stty -echo`, and `stty sane` as repair beyond peek. Tonight: window size, not terminal repair. Skip `screen`, `tmux`, htop, Grafana, and a NAS. Skip files under `/etc` and `/dev` as a dump. Practice only in home. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `clear`. Clear wipes the window, not window size. That is [clear the window](<leftover-box-clear>). It is not `reset`. Reset is garbled terminal fix. That is [fix a garbled terminal](<leftover-box-reset>). It is not `tput cols`. That is [see terminal columns and colors](<leftover-box-tput>).

## What next

Need a garbled terminal fixed? [Fix a garbled terminal](<leftover-box-reset>). Need the window cleared? [Clear the window](<leftover-box-clear>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `clear` as tonight's job. Clear wipes window: [clear the window](<leftover-box-clear>).
  * Skip `reset` as tonight's job. Reset is garbled terminal fix. That is [fix a garbled terminal](<leftover-box-reset>).
  * Skip `stty -a` as tonight's job. Tonight: `stty size`.
  * Skip `stty raw`, `stty -echo`, and `stty sane` as repair beyond peek.
  * Skip `screen`, `tmux`, htop, Grafana, and a NAS.
  * Skip files under `/etc` and `/dev` as a dump. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: stty(1)](<https://manpages.debian.org/bookworm/coreutils/stty.1.en.html>). [Ubuntu: stty(1)](<https://manpages.ubuntu.com/manpages/noble/man1/stty.1.html>). Official pages only. For a window wipe, see [clear the window](<leftover-box-clear>). For the terminal name, see [see the terminal name](<leftover-box-tty>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Clear the windowAfter SSH works, clear the window so old output stops cluttering the session. You don't need extra software for this.](<leftover-box-clear>) [Fix a garbled terminalAfter SSH works, fix a garbled terminal with reset. You don't need extra software for this.](<leftover-box-reset>) [See the terminal nameAfter SSH works, print the terminal name with tty so you know which session you are in. You don't need extra software for this.](<leftover-box-tty>) [See language and regionAfter printenv, print language and region with locale so character encoding makes sense. You don't need extra software for this.](<leftover-box-locale>) [Reuse a command you already typedAfter SSH works, reuse a command you already typed. You don't need extra software for this.](<leftover-box-history>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Wrap long linesAfter SSH works, wrap long lines with fold. You don't need extra software for this.](<leftover-box-fold>) [See HOME and PATHAfter uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See who is on the computer right nowAfter SSH works, see who is logged in right now. You don't need extra software for this.](<leftover-box-who>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousClear the window](<leftover-box-clear>) [NextFix a garbled terminal](<leftover-box-reset>)

---

*Labthrift Markdown mirror. HTML version linked above.*
