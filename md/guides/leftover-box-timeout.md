# Stop a command after a few seconds

Source: https://labthrift.com/guides/leftover-box-timeout
Markdown: https://labthrift.com/md/guides/leftover-box-timeout.md

*Notes › / › Faster network › / › Stop a command after a few seconds*

[Notes](<./>) / [Faster network](<./#switches>) / Stop a command after a few seconds

Written 30 Aug 2026. This is a how-to, not a product card.

# Stop a command after a few seconds

After SSH works, stop a command after a few seconds with timeout so you don't wait forever. You don't need extra software for this.

[See change without typing again](<leftover-box-watch>) re-runs a command until you stop. Tonight you put a time limit on a command: `timeout`. Timeout stops a command after a few seconds so you don't wait forever. You are still only practicing in home on the computer. It does not need extra software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If re-run until you stop is what you want, that is [see change without typing again](<leftover-box-watch>). If how long a command took is what you want, that is [see how long a command took](<leftover-box-time>). If lid sleep is what you want, that is [don't let the old laptop sleep](<leftover-box-sleep>). `sleep` in the practice below is a wait, not lid sleep.

## What this is

`timeout` means give one command a time limit, then stop it. You type `timeout`, then `3`, then the command. `3` means three seconds. When the time is up, timeout stops that command. You don't wait forever. You don't sit on Ctrl+C. Ctrl+C still means hold Control, tap C, if you want to stop early. That is stop, not delete. Tonight: `timeout 3` then one command in home. It is not watch. Watch re-runs until Ctrl+C. It is not lid sleep. It is not kill -9.

## Practice timeout in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Give `sleep` a three-second limit. `sleep` here is a wait, not lid sleep. Lid sleep is [don't let the old laptop sleep](<leftover-box-sleep>).

`timeout 3 sleep 10`

Then:

`echo stopped waiting`

The computer should print the echo after about three seconds, not ten. Timeout stopped sleep when the time was up. Practice only in home.

Skip timeout of `/`, `/etc`, whole home, other disks, USB, and `/srv`. Practice only in home.

Skip `timeout 0` for this practice. Tonight: `timeout 3`.

Debian and Ubuntu usually already have `timeout`. Don't make apt the job. If `timeout` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra after [see change without typing again](<leftover-box-watch>): watch can stop after five seconds instead of Ctrl+C:

`timeout 5 watch -n 1 date`

Don't make watch the job tonight. Watch is [see change without typing again](<leftover-box-watch>).

Optional: ping can stop after three seconds, house network only:

`timeout 3 ping -c 20 127.0.0.1`

Don't make ping the job tonight. Ping is [check that the computer can reach the house router](<leftover-box-ping>).

## What this is not

This is not watch. That is [see change without typing again](<leftover-box-watch>). It is not time. That is [see how long a command took](<leftover-box-time>). It is not lid sleep. That is [don't let the old laptop sleep](<leftover-box-sleep>). It is not which program uses CPU. That is [see what is keeping the computer busy](<leftover-box-whats-busy>). It is not systemd timers. That is [see what already runs on a schedule](<leftover-box-timers>). It is not ping as the job. That is [check that the computer can reach the house router](<leftover-box-ping>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need re-run until you stop? [See change without typing again](<leftover-box-watch>). Need how long a command took? [See how long a command took](<leftover-box-time>). Need the clock? [See what time the computer thinks it is](<leftover-box-date>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip timeout of `/`, `/etc`, whole home, other disks, USB, and `/srv`. Practice only in home.
  * Skip `timeout 0` for this practice. Tonight: `timeout 3`.
  * Skip watch, time, lid sleep, ping, and curl as tonight's job. Those pages already exist.
  * Skip kill, `kill -9`, and pkill as tonight's job. Timeout stops. It is not a kill lesson.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: timeout(1)](<https://manpages.debian.org/bookworm/coreutils/timeout.1.en.html>). [Ubuntu: timeout(1)](<https://manpages.ubuntu.com/manpages/noble/man1/timeout.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For re-run, see [see change without typing again](<leftover-box-watch>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See change without typing againAfter SSH works, re-run a command with watch so you see change without typing again. You don't need a monitoring app for this.](<leftover-box-watch>) [See how long a command tookAfter timeout, see how long a command took with time. You don't need extra software for this.](<leftover-box-time>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [See what is keeping the computer busyAfter SSH works, see what is keeping the computer busy. You don't need extra software for this.](<leftover-box-whats-busy>) [See what already runs on a scheduleAfter SSH works, see what already runs on a schedule. You don't need extra software for this.](<leftover-box-timers>) [Check that the computer can reach the house routerAfter SSH works, check that the computer can reach the house router. You don't need extra software for this.](<leftover-box-ping>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee change without typing again](<leftover-box-watch>) [NextSee how long a command took](<leftover-box-time>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
