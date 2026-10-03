# Fix a garbled terminal

Source: https://labthrift.com/guides/leftover-box-reset
Markdown: https://labthrift.com/md/guides/leftover-box-reset.md

*Notes › / › Faster network › / › Fix a garbled terminal*

[Notes](<./>) / [Faster network](<./#switches>) / Fix a garbled terminal

Written 31 Aug 2026. This is a how-to, not a product card.

# Fix a garbled terminal

After `stty`, `reset` restores terminal settings so the prompt and typing make sense again.

[See window size](<leftover-box-stty>) saw window size with `stty size`. Tonight you fix a garbled terminal: `reset`. Reset means terminal settings restored. The prompt is usable again. Typing echoes again.

Garbled terminal means weird characters, no echo, or a prompt that looks broken after a bad program or paste. The command is `reset`. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If window size is what you want, that is [see window size](<leftover-box-stty>). Skip `stty size` as tonight's job. If window wipe is what you want, that is [clear the window](<leftover-box-clear>). Skip `clear` as tonight's job. Tonight: `reset`, not `stty` repair as the main job.

## What this is

`reset` means a garbled terminal fix. The command is `reset`. Reset restores terminal settings. The prompt is usable again. Typing echoes again.

After `stty`, this is terminal repair so prompt and typing make sense again. You don't need extra system software for this.

## Practice reset in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask it to restore terminal settings:

`reset`

You want the prompt usable again. Typing should echo. Weird characters should stop. Reset means terminal settings restored. That is enough for tonight. Practice only in home.

Don't break the terminal on purpose. Don't type `stty raw` or `stty -echo` as practice. If the terminal is already garbled, `reset` is how you fix it.

Debian and Ubuntu already have `reset` (ncurses-bin, usual install). Don't make apt the job.

If `reset` is missing, optional aside:

`sudo apt install ncurses-bin`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: Type a short line after `reset`, or run `stty size`, to confirm things look normal:

`stty size`

That peek is window size, not terminal repair. That is [see window size](<leftover-box-stty>). You can stop at `reset`.

Optional extra: `tput reset` if present:

`tput reset`

That line is another way to send terminal reset strings, if present. You can stop at `reset`. Need window width with `tput cols` instead? That is [see terminal columns and colors](<leftover-box-tput>).

Optional extra: `stty sane` as lighter peek:

`stty sane`

That line is lighter terminal settings, not a full reset. You can stop at `reset`.

Skip `stty raw` and `stty -echo` as practice. Don't break the terminal on purpose. Skip `screen`, `tmux`, htop, Grafana, and a NAS. Skip files under `/etc` and `/dev` as a dump. Practice only in home. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `stty size`. Stty prints window size, not garbled terminal fix. That is [see window size](<leftover-box-stty>). It is not `clear`. Clear wipes the window, not terminal settings. That is [clear the window](<leftover-box-clear>). It is not `tput cols`. That is [see terminal columns and colors](<leftover-box-tput>).

## What next

Need terminal columns and colors? [See terminal columns and colors](<leftover-box-tput>). Need window size? [See window size](<leftover-box-stty>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `stty size` as tonight's job. Stty prints window size: [see window size](<leftover-box-stty>).
  * Skip `clear` as tonight's job. Clear wipes window: [clear the window](<leftover-box-clear>).
  * Skip `tput reset` and `stty sane` as tonight's main job. Tonight: `reset`.
  * Skip `stty raw` and `stty -echo` as practice. Don't break the terminal on purpose.
  * Skip `screen`, `tmux`, htop, Grafana, and a NAS.
  * Skip files under `/etc` and `/dev` as a dump. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: reset(1)](<https://manpages.debian.org/bookworm/ncurses-bin/reset.1.en.html>). [Ubuntu: reset(1)](<https://manpages.ubuntu.com/manpages/noble/man1/reset.1.html>). [Debian: tput(1)](<https://manpages.debian.org/bookworm/ncurses-bin/tput.1.en.html>). [Ubuntu: tput(1)](<https://manpages.ubuntu.com/manpages/noble/man1/tput.1.html>). Official pages only. For window size, see [see window size](<leftover-box-stty>). For a window wipe, see [clear the window](<leftover-box-clear>). For the terminal name, see [see the terminal name](<leftover-box-tty>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See window sizeAfter SSH works, print window size with stty size. You don't need extra software for this.](<leftover-box-stty>) [See terminal columns and colorsAfter reset, tput cols prints window width in columns. You don't need extra software for this.](<leftover-box-tput>) [Clear the windowAfter SSH works, clear the window so old output stops cluttering the session. You don't need extra software for this.](<leftover-box-clear>) [See the terminal nameAfter SSH works, print the terminal name with tty so you know which session you are in. You don't need extra software for this.](<leftover-box-tty>) [See language and regionAfter printenv, print language and region with locale so character encoding makes sense. You don't need extra software for this.](<leftover-box-locale>) [Reuse a command you already typedAfter SSH works, reuse a command you already typed. You don't need extra software for this.](<leftover-box-history>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Wrap long linesAfter SSH works, wrap long lines with fold. You don't need extra software for this.](<leftover-box-fold>) [See HOME and PATHAfter uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See who is on the computer right nowAfter SSH works, see who is logged in right now. You don't need extra software for this.](<leftover-box-who>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee window size](<leftover-box-stty>) [NextSee terminal columns and colors](<leftover-box-tput>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
