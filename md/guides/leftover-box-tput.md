# See terminal columns and colors

Source: https://labthrift.com/guides/leftover-box-tput
Markdown: https://labthrift.com/md/guides/leftover-box-tput.md

*Notes › / › Faster network › / › See terminal columns and colors*

[Notes](<./>) / [Faster network](<./#switches>) / See terminal columns and colors

Written 31 Aug 2026. This is a how-to, not a product card.

# See terminal columns and colors

After `reset`, `tput cols` prints window width in columns. An optional `tput colors` peek shows color support.

[Fix a garbled terminal](<leftover-box-reset>) restored terminal settings with `reset`. Tonight you ask for terminal columns (and colors): `tput`. Tput means terminal capability query. `tput cols` prints window width in columns. One column is one character wide. Example 80 is 80 columns wide.

Color support is `tput colors` (optional peek, not tonight's job). Type `tput cols`. You want a number. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If a garbled terminal fix is what you want, that is [fix a garbled terminal](<leftover-box-reset>). Skip `reset` as tonight's job. Skip `tput reset` too. That peek lives on reset. If window size is what you want (rows and columns), that is [see window size](<leftover-box-stty>). Skip `stty size` as tonight's job.

## What this is

`tput cols` means window width in columns. The command is `tput cols`. Tput means terminal capability query. One column is one character wide. Example 80 is 80 columns wide.

After `reset`, this is terminal columns so window width and color support make sense. You don't need extra system software for this.

## Practice tput in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask window width:

`tput cols`

You want a number. That number is window width in columns. Example 80 is 80 columns wide. Tput cols means window width. That is enough for tonight. Practice only in home.

Debian and Ubuntu already have `tput` (ncurses-bin, usual install). Don't make apt the job.

If `tput` is missing, optional aside:

`sudo apt install ncurses-bin`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: `tput lines` if present (peek rows):

`tput lines`

That peek is window rows, not window width. You can stop at `tput cols`. Don't make `tput lines` the job.

Optional extra: `tput colors` if present (peek color support):

`tput colors`

That peek is the color count the terminal claims. Example 8, 16, or 256. You don't paint the screen tonight. You only ask the number. You can stop at `tput cols`.

Optional extra: `tput clear` if present:

`tput clear`

That line is a window wipe, not window width. That is [clear the window](<leftover-box-clear>). Don't make `tput clear` the job.

Skip `tput reset` as tonight's job. That peek lives on reset. Skip `stty raw`, `stty -echo`, and `stty sane` as practice. Don't break the terminal on purpose. Tonight: `tput cols`.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Skip files under `/etc` and `/dev` as a dump. Practice only in home. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `reset`. Reset restores terminal settings, not window width. That is [fix a garbled terminal](<leftover-box-reset>). It is not `stty size`. Stty prints window size (rows then columns). That is [see window size](<leftover-box-stty>). It is not `clear`. Clear wipes the window. That is [clear the window](<leftover-box-clear>).

## What next

Need garbled terminal fix? [Fix a garbled terminal](<leftover-box-reset>). Need a number list? [Print a number list](<leftover-box-seq>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `reset` as tonight's job. Reset restores terminal settings: [fix a garbled terminal](<leftover-box-reset>).
  * Skip `stty size` as tonight's job. Stty prints window size: [see window size](<leftover-box-stty>).
  * Skip `clear` and `tput clear` as tonight's job. Tonight: `tput cols`.
  * Skip `stty raw` and `stty -echo` as practice. Don't break the terminal on purpose.
  * Skip `screen`, `tmux`, htop, Grafana, and a NAS.
  * Skip files under `/etc` and `/dev` as a dump. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: tput(1)](<https://manpages.debian.org/bookworm/ncurses-bin/tput.1.en.html>). [Ubuntu: tput(1)](<https://manpages.ubuntu.com/manpages/noble/man1/tput.1.html>). Official pages only. For a garbled terminal fix, see [fix a garbled terminal](<leftover-box-reset>). For window size, see [see window size](<leftover-box-stty>). For a window wipe, see [clear the window](<leftover-box-clear>). For the terminal name, see [see the terminal name](<leftover-box-tty>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Fix a garbled terminalAfter SSH works, fix a garbled terminal with reset. You don't need extra software for this.](<leftover-box-reset>) [See window sizeAfter SSH works, print window size with stty size. You don't need extra software for this.](<leftover-box-stty>) [Clear the windowAfter SSH works, clear the window so old output stops cluttering the session. You don't need extra software for this.](<leftover-box-clear>) [See the terminal nameAfter SSH works, print the terminal name with tty so you know which session you are in. You don't need extra software for this.](<leftover-box-tty>) [See language and regionAfter printenv, print language and region with locale so character encoding makes sense. You don't need extra software for this.](<leftover-box-locale>) [Reuse a command you already typedAfter SSH works, reuse a command you already typed. You don't need extra software for this.](<leftover-box-history>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Wrap long linesAfter SSH works, wrap long lines with fold. You don't need extra software for this.](<leftover-box-fold>) [See HOME and PATHAfter uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See who is on the computer right nowAfter SSH works, see who is logged in right now. You don't need extra software for this.](<leftover-box-who>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Print a number listAfter tput, print a number list with seq so practice lines make sense. You don't need extra software for this.](<leftover-box-seq>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousFix a garbled terminal](<leftover-box-reset>) [NextPrint a number list](<leftover-box-seq>)

---

*Labthrift Markdown mirror. HTML version linked above.*
