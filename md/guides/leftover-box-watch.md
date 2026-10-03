# See change without typing again

Source: https://labthrift.com/guides/leftover-box-watch
Markdown: https://labthrift.com/md/guides/leftover-box-watch.md

*Notes › / › Faster network › / › See change without typing again*

[Notes](<./>) / [Faster network](<./#switches>) / See change without typing again

Written 30 Aug 2026. This is a how-to, not a product card.

# See change without typing again

After SSH works, re-run a command with watch so you see change without typing again. You don't need a monitoring app for this.

Sometimes you want to see a folder grow without typing the command again. Tonight you re-run a command on a timer: `watch`. Watch re-runs a command until you stop. Start with a tiny folder in home. Press Ctrl+C to leave. You are still only practicing on the computer. It does not need a monitoring app, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If a time limit is what you want, that is [stop a command after a few seconds](<leftover-box-timeout>). If folder size is what you want once, that is [see how big one folder is](<leftover-box-du>). If what is busy is what you want, that is [see what is keeping the computer busy](<leftover-box-whats-busy>).

## What this is

`watch` re-runs a command. You type `watch -n 2 du -sh ~/watch-me`. `-n 2` means every two seconds. The screen refreshes. Ctrl+C leaves. It is not timeout. Timeout stops after a few seconds. It is not a monitoring stack. Tonight: one command in home.

## Watch a practice folder in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make a tiny folder:

`mkdir -p ~/watch-me`

`echo hello > ~/watch-me/hi.txt`

Watch its size every two seconds:

`watch -n 2 du -sh ~/watch-me`

The screen should refresh. Leave with Ctrl+C. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `watch`. Don't make apt the job. If `watch` is missing:

`sudo apt install procps`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/watch-me/hi.txt`

## Useful extras, still home only

Optional: watch the clock:

`watch -n 2 date`

Optional: watch a zip you already have from [pack files into a zip a laptop can open](<leftover-box-zip>):

`watch -n 2 du -sh ~/zip-me.zip`

Skip that if the zip is not there. Don't make zip the job tonight.

Skip watch of `/`, `/etc`, other disks, and production services. Tonight: a tiny folder in home.

## What this is not

This is not timeout. That is [stop a command after a few seconds](<leftover-box-timeout>). It is not du as the job. That is [see how big one folder is](<leftover-box-du>). It is not what is busy. That is [see what is keeping the computer busy](<leftover-box-whats-busy>). It is not lid sleep. That is [don't let the old laptop sleep](<leftover-box-sleep>). It is not timers. That is [see what already runs on a schedule](<leftover-box-timers>). It is not a monitoring app. It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need a time limit? [Stop a command after a few seconds](<leftover-box-timeout>). Need folder size once? [See how big one folder is](<leftover-box-du>). Need how long a command took? [See how long a command took](<leftover-box-time>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip watch of `/`, `/etc`, other disks, and production services. Tonight: a tiny folder in home.
  * Skip timeout, du, whats-busy, and timers as tonight's job. Those pages already exist.
  * Skip buying Grafana, a monitoring box, or a NAS for this look.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: watch(1)](<https://manpages.debian.org/bookworm/procps/watch.1.en.html>). [Ubuntu: watch(1)](<https://manpages.ubuntu.com/manpages/noble/man1/watch.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a time limit, see [stop a command after a few seconds](<leftover-box-timeout>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See how big one folder isAfter SSH works, see how big one folder is with du. You don't need extra software for this.](<leftover-box-du>) [Pack files into a zip a laptop can openAfter SSH works, pack files into a zip a laptop can open. You don't need extra software for this.](<leftover-box-zip>) [Stop a command after a few secondsAfter SSH works, stop a command after a few seconds with timeout so you don't wait forever. You don't need extra software for this.](<leftover-box-timeout>) [See what is keeping the computer busyAfter SSH works, see what is keeping the computer busy. You don't need extra software for this.](<leftover-box-whats-busy>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [See what already runs on a scheduleAfter SSH works, see what already runs on a schedule. You don't need extra software for this.](<leftover-box-timers>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPack files into a zip a laptop can open](<leftover-box-zip>) [NextStop a command after a few seconds](<leftover-box-timeout>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
