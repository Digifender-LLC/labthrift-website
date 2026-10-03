# See the month on a calendar

Source: https://labthrift.com/guides/leftover-box-cal
Markdown: https://labthrift.com/md/guides/leftover-box-cal.md

*Notes › / › Faster network › / › See the month on a calendar*

[Notes](<./>) / [Faster network](<./#switches>) / See the month on a calendar

Written 31 Aug 2026. This is a how-to, not a product card.

# See the month on a calendar

After date, print this month as a grid with cal. You don't need extra software for this.

[See what time the computer thinks it is](<leftover-box-date>) printed the clock line. Tonight you print a month grid: `cal`. Cal prints this month. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If the clock read is what you want, that is [see what time the computer thinks it is](<leftover-box-date>). If the clock zone is what you want to set, that is [set the clock to your house](<leftover-box-timezone>). If how long a command took is what you want, that is [see how long a command took](<leftover-box-time>).

## What this is

`cal` prints a month grid. You type `cal`. This month comes back. `cal -3` prints last month, this month, next month. `cal 2026` prints the year. It is not date. Date reads the clock. It is not timezone. Timezone sets the clock zone.

## Practice cal in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask for this month:

`cal`

You want a month grid, then the prompt back. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `cal` (ncal). Don't make apt the job.

## Useful extras, still home only

Optional: three months:

`cal -3`

Optional: the year 2026:

`cal 2026`

Don't make those required. You can stop at `cal`.

## What this is not

This is not date. That is [see what time the computer thinks it is](<leftover-box-date>). It is not timezone. That is [set the clock to your house](<leftover-box-timezone>). It is not time. That is [see how long a command took](<leftover-box-time>). It is not timeout. That is [stop a command after a few seconds](<leftover-box-timeout>). It is not whoami. That is [see the login name](<leftover-box-whoami>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need the clock? [See what time the computer thinks it is](<leftover-box-date>). Need the login name? [See the login name](<leftover-box-whoami>). Need how long a command took? [See how long a command took](<leftover-box-time>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip date, timezone, time, and timeout as tonight's job. Those pages already exist.
  * Skip setting the clock tonight. Tonight you take a look at the month grid.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: cal(1)](<https://manpages.debian.org/bookworm/ncal/cal.1.en.html>). [Ubuntu: cal(1)](<https://manpages.ubuntu.com/manpages/noble/man1/cal.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For the clock, see [see what time the computer thinks it is](<leftover-box-date>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See what time the computer thinks it isAfter SSH works, print the clock with date. You don't need extra software for this.](<leftover-box-date>) [See how long a command tookAfter timeout, see how long a command took with time. You don't need extra software for this.](<leftover-box-time>) [Stop a command after a few secondsAfter SSH works, stop a command after a few seconds with timeout so you don't wait forever. You don't need extra software for this.](<leftover-box-timeout>) [See change without typing againAfter SSH works, re-run a command with watch so you see change without typing again. You don't need a monitoring app for this.](<leftover-box-watch>) [Set the clock to your houseAfter SSH works, set the clock to your house. You don't need extra software for this.](<leftover-box-timezone>) [See how long the computer has been awakeAfter SSH works, see how long the computer has been awake. You don't need extra software for this.](<leftover-box-uptime>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [See what already runs on a scheduleAfter SSH works, see what already runs on a schedule. You don't need extra software for this.](<leftover-box-timers>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee what time the computer thinks it is](<leftover-box-date>) [NextSee the login name](<leftover-box-whoami>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
