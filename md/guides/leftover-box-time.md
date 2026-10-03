# See how long a command took

Source: https://labthrift.com/guides/leftover-box-time
Markdown: https://labthrift.com/md/guides/leftover-box-time.md

*Notes › / › Faster network › / › See how long a command took*

[Notes](<./>) / [Faster network](<./#switches>) / See how long a command took

Written 30 Aug 2026. This is a how-to, not a product card.

# See how long a command took

After timeout, see how long a command took with time. You don't need extra software for this.

[Stop a command after a few seconds](<leftover-box-timeout>) gave a command a time limit. Tonight you time a command: `time`. Time runs a command, then prints how long it ran. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If a time limit is what you want, that is [stop a command after a few seconds](<leftover-box-timeout>). If the clock read is what you want, that is [see what time the computer thinks it is](<leftover-box-date>). If re-run until you stop is what you want, that is [see change without typing again](<leftover-box-watch>).

## What this is

`time` times a command. You type `time`, then the command. After it finishes, time prints real, user, and sys. Real is wall-clock. Start with `time sleep 2`. It is not date. Date reads the clock. It is not timeout. Timeout stops a command. Lid sleep is a different job: [don't let the old laptop sleep](<leftover-box-sleep>).

## Practice time in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Time a two-second wait:

`time sleep 2`

You want the wait, then a short timing report. Real should be about two seconds. That is enough for tonight. Practice only in home.

Debian and Ubuntu shells already have `time`. Don't make apt the job.

## Useful extras, still home only

Optional: a command that returns at once:

`time true`

Optional: time a listing:

`time ls`

Optional: POSIX format:

`time -p sleep 2`

Don't make `-p` required. You can stop at `time sleep 2`.

## What this is not

This is not timeout. That is [stop a command after a few seconds](<leftover-box-timeout>). It is not date. That is [see what time the computer thinks it is](<leftover-box-date>). It is not watch. That is [see change without typing again](<leftover-box-watch>). It is not lid sleep. That is [don't let the old laptop sleep](<leftover-box-sleep>). It is not what is busy. That is [see what is keeping the computer busy](<leftover-box-whats-busy>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need a time limit? [Stop a command after a few seconds](<leftover-box-timeout>). Need the clock? [See what time the computer thinks it is](<leftover-box-date>). Need a month grid? [See the month on a calendar](<leftover-box-cal>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip timeout, date, watch, and lid sleep as tonight's job. Those pages already exist.
  * Skip timing `/`, `/etc`, or a huge dump. Tonight: `time sleep 2`.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: bash(1)](<https://manpages.debian.org/bookworm/bash/bash.1.en.html>) (shell builtin time). [Ubuntu: bash(1)](<https://manpages.ubuntu.com/manpages/noble/man1/bash.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a time limit, see [stop a command after a few seconds](<leftover-box-timeout>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Stop a command after a few secondsAfter SSH works, stop a command after a few seconds with timeout so you don't wait forever. You don't need extra software for this.](<leftover-box-timeout>) [See change without typing againAfter SSH works, re-run a command with watch so you see change without typing again. You don't need a monitoring app for this.](<leftover-box-watch>) [Set the clock to your houseAfter SSH works, set the clock to your house. You don't need extra software for this.](<leftover-box-timezone>) [See how long the computer has been awakeAfter SSH works, see how long the computer has been awake. You don't need extra software for this.](<leftover-box-uptime>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [See what is keeping the computer busyAfter SSH works, see what is keeping the computer busy. You don't need extra software for this.](<leftover-box-whats-busy>) [See what already runs on a scheduleAfter SSH works, see what already runs on a schedule. You don't need extra software for this.](<leftover-box-timers>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [See what time the computer thinks it isAfter SSH works, print the clock with date. You don't need extra software for this.](<leftover-box-date>) [See the month on a calendarAfter date, print this month as a grid with cal. You don't need extra software for this.](<leftover-box-cal>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousStop a command after a few seconds](<leftover-box-timeout>) [NextSee what time the computer thinks it is](<leftover-box-date>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
