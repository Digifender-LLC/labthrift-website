# Clear the window

Source: https://labthrift.com/guides/leftover-box-clear
Markdown: https://labthrift.com/md/guides/leftover-box-clear.md

*Notes › / › Faster network › / › Clear the window*

[Notes](<./>) / [Faster network](<./#switches>) / Clear the window

Written 31 Aug 2026. This is a how-to, not a product card.

# Clear the window

After SSH works, clear the window so old output stops cluttering the session. History still remembers the commands. You don't need extra software for this.

[See the terminal name](<leftover-box-tty>) showed which session you are in. Tonight you clear the window: `clear`. Clear wipes the screen. Old output is gone from the window. History still remembers the commands. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If the terminal name is what you want, that is [see the terminal name](<leftover-box-tty>). If window size is what you want, that is [see window size](<leftover-box-stty>). If a garbled terminal is what you want to fix, that is [fix a garbled terminal](<leftover-box-reset>). If reusing a command you already typed is what you want, that is [reuse a command you already typed](<leftover-box-history>).

## What this is

`clear` wipes the window. You type `clear`. The prompt sits near the top. History still remembers the commands. That history job is [reuse a command you already typed](<leftover-box-history>), not tonight. It is not reset. Reset is a garbled terminal fix. It is not stty. Stty prints window size.

## Practice clear in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make a little clutter so the window has lines:

`seq 1 40`

Or `echo hello` a few times. Seq prints numbers. That clutter is only so `clear` has lines to wipe. Don't make seq the job.

Wipe the window:

`clear`

The window should look empty. The prompt sits near the top. Old output is gone from the window. History still remembers the commands. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `clear`. Don't make apt the job. If `clear` is missing:

`sudo apt install ncurses-bin`

Then stop. That install is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional: `clear -x` if present:

`clear -x`

On some terminals, `clear` also wipes scrollback. `clear -x` means window only; scrollback stays. You can stop at `clear`.

Optional: Ctrl+L often clears the window too in many shells. You can stop at `clear`.

Optional: window size:

`stty size`

That line is rows and columns. That is [see window size](<leftover-box-stty>). Don't make stty the job tonight.

Skip reset as tonight's job. Reset is a garbled terminal fix. That is [fix a garbled terminal](<leftover-box-reset>).

## What this is not

This is not tty. That is [see the terminal name](<leftover-box-tty>). It is not stty. That is [see window size](<leftover-box-stty>). It is not reset. That is [fix a garbled terminal](<leftover-box-reset>). It is not history. That is [reuse a command you already typed](<leftover-box-history>). It is not less. That is [read a file one screen at a time](<leftover-box-less>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need the terminal name? [See the terminal name](<leftover-box-tty>). Need window size? [See window size](<leftover-box-stty>). Need a garbled terminal fixed? [Fix a garbled terminal](<leftover-box-reset>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip reset as tonight's job. Reset is a garbled terminal fix.
  * Skip tty, stty, history, and less as tonight's job. Those pages already exist.
  * Skip screen, tmux, script, mesg, wall, and write as tonight's job. Tonight: the window, not session school.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: clear(1)](<https://manpages.debian.org/bookworm/ncurses-bin/clear.1.en.html>). [Ubuntu: clear(1)](<https://manpages.ubuntu.com/manpages/noble/man1/clear.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a garbled terminal, see [fix a garbled terminal](<leftover-box-reset>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See the terminal nameAfter SSH works, print the terminal name with tty so you know which session you are in. You don't need extra software for this.](<leftover-box-tty>) [See window sizeAfter SSH works, print window size with stty size. You don't need extra software for this.](<leftover-box-stty>) [Fix a garbled terminalAfter SSH works, fix a garbled terminal with reset. You don't need extra software for this.](<leftover-box-reset>) [See language and regionAfter printenv, print language and region with locale so character encoding makes sense. You don't need extra software for this.](<leftover-box-locale>) [Reuse a command you already typedAfter SSH works, reuse a command you already typed. You don't need extra software for this.](<leftover-box-history>) [Read a file one screen at a timeAfter SSH works, read a file one screen at a time with less. Press q to leave. You don't need a file viewer for this.](<leftover-box-less>) [Wrap long linesAfter SSH works, wrap long lines with fold. You don't need extra software for this.](<leftover-box-fold>) [See HOME and PATHAfter uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See who is on the computer right nowAfter SSH works, see who is logged in right now. You don't need extra software for this.](<leftover-box-who>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee the terminal name](<leftover-box-tty>) [NextSee window size](<leftover-box-stty>)

---

*Labthrift Markdown mirror. HTML version linked above.*
