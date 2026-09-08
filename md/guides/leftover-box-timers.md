# See what the computer already runs on a schedule

Source: https://labthrift.com/guides/leftover-box-timers
Markdown: https://labthrift.com/md/guides/leftover-box-timers.md

*Notes › / › File storage › / › See what the computer already runs on a schedule*

[Notes](<./>) / [File storage](<./#first-nas>) / See what the computer already runs on a schedule

Written 28 Aug 2026. This is a how-to, not a product card.

# See what the computer already runs on a schedule

Before you add a weekly backup or buy a monitoring box, list the computer's scheduled jobs with systemctl list-timers.

An OptiPlex from Marketplace may already have old weekly jobs: a copy to someone else's folder, a cleanup, or a name you don't recognize. A timer runs a job on a schedule. Look first. You are not buying a monitoring box, and you are not adding your own weekly copy yet.

## Skip until SSH works

If you cannot log in from the couch, stop. That is [SSH from the couch](<first-ssh>). This note assumes you can type commands on the computer from the couch. If the computer clock still looks like UTC, set the house zone first: [set the computer clock to your house](<leftover-box-timezone>). NEXT and LAST only make sense on the house clock.

## Skip if you just installed a fresh OS

If this weekend you wiped the computer and installed Debian or Ubuntu Server, you will mostly see the usual house-keeping names. Skip this note until you add your own weekly copy. The install path is [what OS to put on the computer](<what-os-to-pick>). This look is for a computer that already had someone else's Linux on it, or for the look right before you add a timer.

## What this is

Debian and Ubuntu use timers to schedule jobs. `systemctl list-timers` prints the active timers. This is not the same note as [back up the house folder every week without remembering](<leftover-box-backup-timer>) (that is you adding a timer) or [see if any house jobs failed to start](<leftover-box-failed-units>) (that is a job that already broke). You are only reading the list.

## List the timers

SSH in from the couch, then run:

`systemctl list-timers`

Point at three columns. `NEXT` is when it will run. `LAST` is when it last ran. `UNIT` is the name. A short list of familiar names is normal. A name you have never heard of, on a Marketplace box, is leftover from the last owner.

Built-in timers you can leave alone: `apt-daily`, `apt-daily-upgrade`, `logrotate`, `man-db`, `fstrim`, `systemd-tmpfiles-clean`, `e2scrub`, `motd-news`. Those run daily or weekly maintenance jobs. Don't turn them off tonight.

Optional longer list, if you also want timers that are configured but inactive:

`systemctl list-timers --all`

## If a name looks extra

Don't disable a name you don't recognize on day one. Write it down. Read that job's recent log: [when something broke, look at the log](<leftover-box-read-logs>). If the computer feels busy at a regular hour, that is [see what is keeping the computer busy](<leftover-box-whats-busy>). A copy that fills the disk is still [see if the computer still has room](<leftover-box-disk-space>), not a new NAS.

## Optional cron

Some old office boxes still use cron, an older scheduler, instead of a timer. If `systemctl list-timers` only showed the usual names and the computer still does something at a regular hour, ask:

`crontab -l`

No crontab for you is fine. Then the system list:

`ls /etc/cron.d`

Names you already know from the timer list can wait. A file named after a person, a coin, or a folder you don't use is extra. Don't delete it tonight. Read it later, after SSH and a backup you trust are boring.

## What next

The house clock stays [set the computer clock to your house](<leftover-box-timezone>). After one manual copy worked, add your own weekly job: [back up the house folder every week without remembering](<leftover-box-backup-timer>). Weekly fixes stay [keep the computer updated](<leftover-box-updates>), or later [let the computer apply weekly fixes without you](<leftover-box-unattended>). Skip a camera. Skip a monitoring box for this look.

## Skip

  * Skip this note if you just installed a fresh OS and you have not added a timer yet.
  * Skip this note if SSH from the couch does not work yet. That is [SSH from the couch](<first-ssh>).
  * Skip turning off `apt-daily` or `apt-daily-upgrade` tonight.
  * Skip a monitoring box or a NAS for this look.
  * Skip opening SSH to the internet.



## Sources

[Debian: systemctl](<https://manpages.debian.org/bookworm/systemd/systemctl.1.en.html>) (`list-timers`). [Ubuntu: systemctl](<https://manpages.ubuntu.com/manpages/noble/en/man1/systemctl.1.html>). [Debian: crontab](<https://manpages.debian.org/bookworm/cron/crontab.1.en.html>). Official pages only. For the house clock, see [set the computer clock to your house](<leftover-box-timezone>). For adding your own weekly copy, see [back up the house folder every week without remembering](<leftover-box-backup-timer>). For a job that already broke, see [see if any house jobs failed to start](<leftover-box-failed-units>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Set the computer clock to your houseLogs, updates, and weekly backups only make sense if the computer uses your local time. timedatectl sets the city zone. The computer keeps the clock correct over the network.](<leftover-box-timezone>) [Back up the house folder every week without rememberingAfter one manual USB (or second-box) copy works, let the computer run the same rsync on a weekly timer. A phone reminder is still fine if you prefer.](<leftover-box-backup-timer>) [See if any house jobs failed to startAfter a reboot, check failed units before you blame the network or buy a new box.](<leftover-box-failed-units>) [Let the computer apply weekly fixes without youAfter the weekly two-command habit is boring, you can let the computer apply those same fixes by itself. Skip this until that habit is boring. Don't let it reboot on its own.](<leftover-box-unattended>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [PreviousSet the computer clock to your house](<leftover-box-timezone>) [NextBack up the house folder every week without remembering](<leftover-box-backup-timer>)

---

*Labthrift Markdown mirror. HTML version linked above.*
