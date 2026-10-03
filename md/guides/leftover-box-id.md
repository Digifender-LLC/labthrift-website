# See user number and groups

Source: https://labthrift.com/guides/leftover-box-id
Markdown: https://labthrift.com/md/guides/leftover-box-id.md

*Notes › / › Faster network › / › See user number and groups*

[Notes](<./>) / [Faster network](<./#switches>) / See user number and groups

Written 31 Aug 2026. This is a how-to, not a product card.

# See user number and groups

After whoami, print user number and groups with id so sudo and file ownership make sense. You don't need extra software for this.

[See the login name](<leftover-box-whoami>) printed who you are. Tonight you look up your numbers and groups: `id`. Id prints uid, gid, and groups on one line. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If login name only is what you want, that is [see the login name](<leftover-box-whoami>). If who is sitting there is what you want, that is [see who is on the computer right now](<leftover-box-who>). If sudo is what you want, that is [see if your login can use admin commands](<leftover-box-sudo>). If old accounts are what you want, that is [see if the computer still has old login accounts](<leftover-box-other-accounts>).

## What this is

`id` prints user number and groups. You type `id`. uid is the user number. gid is the group number. groups is the list. `id -u` prints only the user number. It is not whoami. Whoami prints the login name. It is not sudo. Sudo asks if this login can use admin commands. You can stop at `id`.

## Practice id in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask for user number and groups:

`id`

You want one line with uid, gid, and groups, then the prompt back. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `id`. Don't make apt the job. If `id` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

## Useful extras, still home only

Optional: user number only:

`id -u`

Don't make `-u` required. You can stop at `id`.

## What this is not

This is not whoami. That is [see the login name](<leftover-box-whoami>). It is not who. That is [see who is on the computer right now](<leftover-box-who>). It is not sudo. That is [see if your login can use admin commands](<leftover-box-sudo>). It is not a password change. That is [change the login password](<leftover-box-change-password>). It is not uname. That is [see kernel name and architecture](<leftover-box-uname>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need login name only? [See the login name](<leftover-box-whoami>). Need kernel name? [See kernel name and architecture](<leftover-box-uname>). Need HOME and PATH? [See HOME and PATH](<leftover-box-printenv>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip whoami, who, sudo, and uname as tonight's job. Those pages already exist.
  * Skip editing `/etc/passwd` or `/etc/group` tonight. Tonight you take a look.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: id(1)](<https://manpages.debian.org/bookworm/coreutils/id.1.en.html>). [Ubuntu: id(1)](<https://manpages.ubuntu.com/manpages/noble/man1/id.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For login name only, see [see the login name](<leftover-box-whoami>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See who is on the computer right nowAfter SSH works, see who is logged in right now. You don't need extra software for this.](<leftover-box-who>) [See who logged in recentlyAfter SSH works, see who logged in recently. You don't need extra software for this.](<leftover-box-last-login>) [See if the computer still has old login accountsAfter SSH works, see if the computer still has old login accounts. You don't need extra software for this.](<leftover-box-other-accounts>) [See if your login can use admin commandsAfter SSH works, see if your login can use admin commands. You don't need extra software for this.](<leftover-box-sudo>) [Change the login passwordAfter SSH works, change the login password. You don't need extra software for this.](<leftover-box-change-password>) [Give the computer a name that sticksPing and SSH are easier if the computer has a short name. lab works. Set it so the name survives a reboot.](<leftover-box-hostname>) [See which OS the computer is already runningAfter SSH works, see which OS the computer is already running. You don't need extra software for this.](<leftover-box-os-release>) [See kernel name and architectureAfter id, print kernel name and architecture with uname so you know what kernel is running. You don't need extra software for this.](<leftover-box-uname>) [See HOME and PATHAfter uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [See the month on a calendarAfter date, print this month as a grid with cal. You don't need extra software for this.](<leftover-box-cal>) [See what time the computer thinks it isAfter SSH works, print the clock with date. You don't need extra software for this.](<leftover-box-date>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee the login name](<leftover-box-whoami>) [NextSee kernel name and architecture](<leftover-box-uname>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
