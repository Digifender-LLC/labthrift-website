# Set the computer clock to your house

Source: https://labthrift.com/guides/leftover-box-timezone
Markdown: https://labthrift.com/md/guides/leftover-box-timezone.md

*Notes › / › File storage › / › Set the computer clock to your house*

[Notes](<./>) / [File storage](<./#first-nas>) / Set the computer clock to your house

Written 25 Aug 2026. This is a how-to, not a product card.

# Set the computer clock to your house

Logs, updates, and weekly backups only make sense if the computer uses your local time. timedatectl sets the city zone. The computer keeps the clock correct over the network.

The computer needs to know which city clock to use, or Sunday 2am backups become wrong. A timezone is that city clock. NTP is how the computer asks the internet for the correct time, so it does not drift.

## Skip if the clock is already right

On the computer, ask:

`timedatectl`

Or the short check:

`date`

If you see your local zone and a time that matches the house, you are done. You don't need this note.

## Why it matters

A weekly timer in [back up the house folder every week without remembering](<leftover-box-backup-timer>) wakes on the computer's idea of Sunday morning. Log lines and apt timestamps use the same clock. If the computer still looks like UTC, first-timers stare at a "wrong" hour and think the job failed.

## List zones lightly

Pick the city zone that matches the house. America/Chicago is one example. It is not the only one. Browse a short list:

`timedatectl list-timezones | grep America`

Swap America for Europe, Asia, or Africa if that is where the house is. Choose the city closest to home, not a random airport code.

## Set it

On Debian or Ubuntu, set the zone with timedatectl. Swap America/Chicago for your city:

`sudo timedatectl set-timezone America/Chicago`

Confirm:

`timedatectl`

You should see Time zone with your city, and a sensible local time. On modern Ubuntu and Debian, NTP or timesync is usually already on. If the status line shows `NTP: inactive`, turn it on:

`sudo timedatectl set-ntp true`

That is the whole network-time step. The computer asks the internet for the correct time and keeps it.

## Check

Ask once more:

`date`

It should match the house clock. When you are ready for a weekly copy, that is [back up the house folder every week without remembering](<leftover-box-backup-timer>).

## What next

If the weekly timer is not set yet, set it after one manual copy worked: [back up the house folder every week without remembering](<leftover-box-backup-timer>). Once a week, [keep the computer updated](<leftover-box-updates>). Don't buy a GPS clock or an RTC hat for this.

## Skip

  * Skip RTC modules and battery clock hats.
  * Skip GPS NTP appliances.
  * Skip dual-boot Windows clock lectures.
  * Skip changing the BIOS clock by hand if NTP works.



## Sources

[Debian: timedatectl](<https://manpages.debian.org/bookworm/systemd/timedatectl.1.en.html>). [Ubuntu: timedatectl](<https://manpages.ubuntu.com/manpages/noble/en/man1/timedatectl.1.html>). Official pages only. For the computer install, see [your first weekend](<first-weekend>). For the weekly copy, see [back up the house folder every week without remembering](<leftover-box-backup-timer>).

## Also on this topic

[A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [Back up the house folder every week without rememberingAfter one manual USB (or second-box) copy works, let the computer run the same rsync on a weekly timer. A phone reminder is still fine if you prefer.](<leftover-box-backup-timer>) [Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.](<leftover-box-updates>) [Your first weekend with the computerInstall the OS, name it, and reach it from the couch.](<first-weekend>) [PreviousRestore one computer file from the USB backup](<leftover-box-restore-one>) [NextSee what the computer already runs on a schedule](<leftover-box-timers>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
