# See HOME and PATH

Source: https://labthrift.com/guides/leftover-box-printenv
Markdown: https://labthrift.com/md/guides/leftover-box-printenv.md

*Notes › / › Faster network › / › See HOME and PATH*

[Notes](<./>) / [Faster network](<./#switches>) / See HOME and PATH

Written 31 Aug 2026. This is a how-to, not a product card.

# See HOME and PATH

After uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.

[See kernel name and architecture](<leftover-box-uname>) printed the kernel. Tonight you list your login environment: `printenv`. Printenv prints HOME, PATH, USER, SHELL. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If kernel name is what you want, that is [see kernel name and architecture](<leftover-box-uname>). If language and region are what you want, that is [see language and region](<leftover-box-locale>). If login name is what you want, that is [see the login name](<leftover-box-whoami>). If user number and groups are what you want, that is [see user number and groups](<leftover-box-id>). Skip `echo $HOME` as tonight's job. That is echo, not printenv.

## What this is

`printenv` prints environment. You type `printenv` plus a name. HOME is your home folder. PATH is where the shell looks for commands. USER is the login name again. SHELL is which prompt program. It is not uname. Uname prints the kernel. It is not echo. Echo prints words you type. Skip `echo $HOME` as the job.

## Practice printenv in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask for HOME:

`printenv HOME`

You should see a path that ends in the login name (same idea as `pwd`). That path is HOME. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `printenv`. Don't make apt the job. If `printenv` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

## Useful extras, still home only

Ask for PATH:

`printenv PATH`

Ask for USER:

`printenv USER`

Ask for SHELL:

`printenv SHELL`

Optional: print the whole environment:

`printenv`

That can be a long list. You can stop at HOME and PATH. Skip editing `/etc/environment`, `/etc/profile`, or `~/.bashrc` tonight.

## What this is not

This is not uname. That is [see kernel name and architecture](<leftover-box-uname>). It is not id. That is [see user number and groups](<leftover-box-id>). It is not whoami. That is [see the login name](<leftover-box-whoami>). It is not pwd. That is [see which folder you are in](<leftover-box-pwd>). It is not echo. That is [put a short line into a file](<leftover-box-echo>). It is not OS name. That is [see which OS the computer is already running](<leftover-box-os-release>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need language and region? [See language and region](<leftover-box-locale>). Need the terminal name? [See the terminal name](<leftover-box-tty>). Need kernel name? [See kernel name and architecture](<leftover-box-uname>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `echo $HOME` and `echo $PATH` as tonight's job. That is echo, not printenv.
  * Skip editing `/etc/environment`, `/etc/profile`, or `~/.bashrc` tonight.
  * Skip uname, id, whoami, pwd, and locale as tonight's job. Those pages already exist.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: printenv(1)](<https://manpages.debian.org/bookworm/coreutils/printenv.1.en.html>). [Ubuntu: printenv(1)](<https://manpages.ubuntu.com/manpages/noble/man1/printenv.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For kernel name, see [see kernel name and architecture](<leftover-box-uname>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See kernel name and architectureAfter id, print kernel name and architecture with uname so you know what kernel is running. You don't need extra software for this.](<leftover-box-uname>) [See user number and groupsAfter whoami, print user number and groups with id so sudo and file ownership make sense. You don't need extra software for this.](<leftover-box-id>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See which folder you are inAfter SSH works, print which folder you are in. You don't need extra software for this.](<leftover-box-pwd>) [See where a command livesAfter SSH works, see where a command lives. You don't need extra software for this.](<leftover-box-which>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [See which OS the computer is already runningAfter SSH works, see which OS the computer is already running. You don't need extra software for this.](<leftover-box-os-release>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [See language and regionAfter printenv, print language and region with locale so character encoding makes sense. You don't need extra software for this.](<leftover-box-locale>) [See the terminal nameAfter SSH works, print the terminal name with tty so you know which session you are in. You don't need extra software for this.](<leftover-box-tty>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee kernel name and architecture](<leftover-box-uname>) [NextSee language and region](<leftover-box-locale>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
