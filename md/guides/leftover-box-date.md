# See what time the computer thinks it is

Source: https://labthrift.com/guides/leftover-box-date
Markdown: https://labthrift.com/md/guides/leftover-box-date.md

*Notes › / › Faster network › / › See what time the computer thinks it is*

[Notes](<./>) / [Faster network](<./#switches>) / See what time the computer thinks it is

Written 31 Aug 2026. This is a how-to, not a product card.

# See what time the computer thinks it is

After SSH works, print the clock with date. You don't need extra software for this.

[See how long a command took](<leftover-box-time>) timed one command. Tonight you ask for the clock: `date`. Date prints what time the computer thinks it is. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If a month grid is what you want, that is [see the month on a calendar](<leftover-box-cal>). If the clock zone is what you want to set, that is [set the clock to your house](<leftover-box-timezone>). If how long a command took is what you want, that is [see how long a command took](<leftover-box-time>).

## What this is

`date` prints the clock. You type `date`. One line comes back. `date -u` prints UTC. A format string like `+%Y-%m-%d %H:%M:%S` is optional. It is not timezone. Timezone sets the clock zone. It is not cal. Cal prints a month grid. Tonight you take a look, not a set.

## Practice date in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask what time the computer thinks it is:

`date`

You want one clock line, then the prompt back. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `date`. Don't make apt the job. If `date` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

## Useful extras, still home only

Optional: UTC:

`date -u`

Optional: a format string:

`date '+%Y-%m-%d %H:%M:%S'`

Don't make those required. Skip setting the clock tonight. That is [set the clock to your house](<leftover-box-timezone>).

## What this is not

This is not cal. That is [see the month on a calendar](<leftover-box-cal>). It is not timezone. That is [set the clock to your house](<leftover-box-timezone>). It is not time. That is [see how long a command took](<leftover-box-time>). It is not timeout. That is [stop a command after a few seconds](<leftover-box-timeout>). It is not watch. That is [see change without typing again](<leftover-box-watch>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need a month grid? [See the month on a calendar](<leftover-box-cal>). Need how long a command took? [See how long a command took](<leftover-box-time>). Need the clock zone set? [Set the clock to your house](<leftover-box-timezone>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip setting the clock tonight. Tonight you take a look.
  * Skip cal, timezone, time, timeout, and watch as tonight's job. Those pages already exist.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: date(1)](<https://manpages.debian.org/bookworm/coreutils/date.1.en.html>). [Ubuntu: date(1)](<https://manpages.ubuntu.com/manpages/noble/man1/date.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a month grid, see [see the month on a calendar](<leftover-box-cal>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See the month on a calendarAfter date, print this month as a grid with cal. You don't need extra software for this.](<leftover-box-cal>) [See how long a command tookAfter timeout, see how long a command took with time. You don't need extra software for this.](<leftover-box-time>) [Stop a command after a few secondsAfter SSH works, stop a command after a few seconds with timeout so you don't wait forever. You don't need extra software for this.](<leftover-box-timeout>) [See change without typing againAfter SSH works, re-run a command with watch so you see change without typing again. You don't need a monitoring app for this.](<leftover-box-watch>) [Set the clock to your houseAfter SSH works, set the clock to your house. You don't need extra software for this.](<leftover-box-timezone>) [See how long the computer has been awakeAfter SSH works, see how long the computer has been awake. You don't need extra software for this.](<leftover-box-uptime>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [See what already runs on a scheduleAfter SSH works, see what already runs on a schedule. You don't need extra software for this.](<leftover-box-timers>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee how long a command took](<leftover-box-time>) [NextSee the month on a calendar](<leftover-box-cal>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
