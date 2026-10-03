# See the terminal name

Source: https://labthrift.com/guides/leftover-box-tty
Markdown: https://labthrift.com/md/guides/leftover-box-tty.md

*Notes › / › Faster network › / › See the terminal name*

[Notes](<./>) / [Faster network](<./#switches>) / See the terminal name

Written 31 Aug 2026. This is a how-to, not a product card.

# See the terminal name

After SSH works, print the terminal name with tty so you know which session you are in. You don't need extra software for this.

[See language and region](<leftover-box-locale>) printed LANG and friends. Tonight you ask which terminal you are on: `tty`. Tty prints a path like `/dev/pts/0`. That is the name of this session. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If language and region are what you want, that is [see language and region](<leftover-box-locale>). If HOME and PATH are what you want, that is [see HOME and PATH](<leftover-box-printenv>). If login name is what you want, that is [see the login name](<leftover-box-whoami>). If who is sitting there is what you want, that is [see who is on the computer right now](<leftover-box-who>).

## What this is

`tty` prints the terminal name. You type `tty`. The computer prints a path, often under `/dev/pts/`. That name is this session, not the login name, not HOME, not the kernel. It is not whoami. Whoami prints the login name. It is not who. Who lists sessions.

## Practice tty in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask for the terminal name:

`tty`

You want a path like `/dev/pts/0` or similar, then the prompt back. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `tty`. Don't make apt the job. If `tty` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

## Useful extras, still home only

Optional: quiet check (exit status only):

`tty -s`

`-s` means silent. You can stop at `tty`.

Optional: SSH's idea of the terminal:

`printenv SSH_TTY`

That is printenv, not tty. Printenv is [see HOME and PATH](<leftover-box-printenv>).

Optional: who is sitting there:

`who`

Who lists sessions. That is [see who is on the computer right now](<leftover-box-who>). Don't make who the job tonight.

## What this is not

This is not whoami. That is [see the login name](<leftover-box-whoami>). It is not who. That is [see who is on the computer right now](<leftover-box-who>). It is not printenv. That is [see HOME and PATH](<leftover-box-printenv>). It is not locale. That is [see language and region](<leftover-box-locale>). It is not clear. That is [clear the window](<leftover-box-clear>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need the window wiped? [Clear the window](<leftover-box-clear>). Need HOME and PATH? [See HOME and PATH](<leftover-box-printenv>). Need the login name? [See the login name](<leftover-box-whoami>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip whoami, who, printenv, locale, and clear as tonight's job. Those pages already exist.
  * Skip screen, tmux, script, mesg, wall, and write as tonight's job.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: tty(1)](<https://manpages.debian.org/bookworm/coreutils/tty.1.en.html>). [Ubuntu: tty(1)](<https://manpages.ubuntu.com/manpages/noble/man1/tty.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For HOME and PATH, see [see HOME and PATH](<leftover-box-printenv>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See language and regionAfter printenv, print language and region with locale so character encoding makes sense. You don't need extra software for this.](<leftover-box-locale>) [See HOME and PATHAfter uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See who is on the computer right nowAfter SSH works, see who is logged in right now. You don't need extra software for this.](<leftover-box-who>) [See who logged in recentlyAfter SSH works, see who logged in recently. You don't need extra software for this.](<leftover-box-last-login>) [See user number and groupsAfter whoami, print user number and groups with id so sudo and file ownership make sense. You don't need extra software for this.](<leftover-box-id>) [See kernel name and architectureAfter id, print kernel name and architecture with uname so you know what kernel is running. You don't need extra software for this.](<leftover-box-uname>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Clear the windowAfter SSH works, clear the window so old output stops cluttering the session. History still remembers the commands. You don't need extra software for this.](<leftover-box-clear>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee language and region](<leftover-box-locale>) [NextClear the window](<leftover-box-clear>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
