# See the login name

Source: https://labthrift.com/guides/leftover-box-whoami
Markdown: https://labthrift.com/md/guides/leftover-box-whoami.md

*Notes › / › Faster network › / › See the login name*

[Notes](<./>) / [Faster network](<./#switches>) / See the login name

Written 31 Aug 2026. This is a how-to, not a product card.

# See the login name

After SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.

[See the month on a calendar](<leftover-box-cal>) printed this month as a grid. Tonight you ask for your login name: `whoami`. Whoami prints the login name on one line. That login name also appears in the home-folder path and sudo messages. You are still only practicing in home on the computer. It does not need extra login software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If who is sitting there is what you want, that is [see who is on the computer right now](<leftover-box-who>). If login history is what you want, that is [see who logged in recently](<leftover-box-last-login>). If sudo is what you want, that is [see if your login can use admin commands](<leftover-box-sudo>). If numbers and groups are what you want, that is [see user number and groups](<leftover-box-id>).

## What this is

`whoami` prints the login name. You type `whoami`. One line comes back. That same name appears in the home-folder path and sudo messages. It is not who. Who lists sessions. It is not id. Id prints numbers and groups. You can stop at `whoami`.

## Practice whoami in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask for the login name:

`whoami`

You should see the login name on one line. Read it once. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `whoami`. Don't make apt the job. If `whoami` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

## Useful extras, still home only

No extras required. If you want numbers and groups next, that is [see user number and groups](<leftover-box-id>).

## What this is not

This is not who. That is [see who is on the computer right now](<leftover-box-who>). It is not login history. That is [see who logged in recently](<leftover-box-last-login>). It is not old accounts. That is [see if the computer still has old login accounts](<leftover-box-other-accounts>). It is not sudo. That is [see if your login can use admin commands](<leftover-box-sudo>). It is not a password change. That is [change the login password](<leftover-box-change-password>). It is not id. That is [see user number and groups](<leftover-box-id>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need numbers and groups? [See user number and groups](<leftover-box-id>). Need who is sitting there? [See who is on the computer right now](<leftover-box-who>). Need kernel name? [See kernel name and architecture](<leftover-box-uname>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip who, last-login, sudo, and id as tonight's job. Those pages already exist.
  * Skip changing passwords tonight. That is [change the login password](<leftover-box-change-password>).
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: whoami(1)](<https://manpages.debian.org/bookworm/coreutils/whoami.1.en.html>). [Ubuntu: whoami(1)](<https://manpages.ubuntu.com/manpages/noble/man1/whoami.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For numbers and groups, see [see user number and groups](<leftover-box-id>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See who is on the computer right nowAfter SSH works, see who is logged in right now. You don't need extra software for this.](<leftover-box-who>) [See who logged in recentlyAfter SSH works, see who logged in recently. You don't need extra software for this.](<leftover-box-last-login>) [See if the computer still has old login accountsAfter SSH works, see if the computer still has old login accounts. You don't need extra software for this.](<leftover-box-other-accounts>) [See if your login can use admin commandsAfter SSH works, see if your login can use admin commands. You don't need extra software for this.](<leftover-box-sudo>) [Change the login passwordAfter SSH works, change the login password. You don't need extra software for this.](<leftover-box-change-password>) [Give the computer a name that sticksPing and SSH are easier if the computer has a short name. lab works. Set it so the name survives a reboot.](<leftover-box-hostname>) [See which OS the computer is already runningAfter SSH works, see which OS the computer is already running. You don't need extra software for this.](<leftover-box-os-release>) [See user number and groupsAfter whoami, print user number and groups with id so sudo and file ownership make sense. You don't need extra software for this.](<leftover-box-id>) [See kernel name and architectureAfter id, print kernel name and architecture with uname so you know what kernel is running. You don't need extra software for this.](<leftover-box-uname>) [See the month on a calendarAfter date, print this month as a grid with cal. You don't need extra software for this.](<leftover-box-cal>) [See what time the computer thinks it isAfter SSH works, print the clock with date. You don't need extra software for this.](<leftover-box-date>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee the month on a calendar](<leftover-box-cal>) [NextSee user number and groups](<leftover-box-id>)

---

*Labthrift Markdown mirror. HTML version linked above.*
