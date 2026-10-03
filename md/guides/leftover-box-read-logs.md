# When something broke, look at the log

Source: https://labthrift.com/guides/leftover-box-read-logs
Markdown: https://labthrift.com/md/guides/leftover-box-read-logs.md

*Notes › / › Faster network › / › When something broke, look at the log*

[Notes](<./>) / [Faster network](<./#switches>) / When something broke, look at the log

Written 26 Aug 2026. This is a how-to, not a product card.

# When something broke, look at the log

SSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.

SSH from the couch works. A house job does not: ads are back, the share vanished, or a restart after a reboot did not help. Read that program's recent log. You are not buying a monitoring box for this look.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). If the computer is off, fix that first. This note assumes you can log in from the couch.

## Skip until you know which job failed

If you just rebooted and have not checked the house jobs yet, start with [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). If ads are back, that is [when ads come back, check the ad block](<leftover-box-ad-block-check>). If the share vanished, that is [when the house share disappeared, check the computer](<leftover-box-share-check>). This note is the next look when `systemctl` said inactive, or a restart did not help.

## What this is

A log records messages from programs. `journalctl` is the Debian/Ubuntu tool that reads those messages. You are reading recent log entries from one program. You are not installing Grafana. You are not buying a monitoring appliance.

## Check one service

SSH in from the couch. Check the job that failed, not the whole computer. For house ad block:

`systemctl status pihole-FTL`

For the house share:

`systemctl status smbd`

Then read the recent log lines for that same program. For Pi-hole:

`journalctl -u pihole-FTL -n 50 --no-pager`

For Samba:

`journalctl -u smbd -n 50 --no-pager`

`-u` picks the program. `-n 50` is the last fifty lines. `--no-pager` prints them without a scrolling trap.

## If the name is wrong

If systemctl says the unit wasn't found, don't invent a fancy name. List the services that failed:

`systemctl list-units --type=service --state=failed`

That list shows the service names. Stick to the jobs this site already named: Pi-hole as `pihole-FTL`, Samba as `smbd`. Don't chase exotic unit names that are not on this site.

## What to do with what you see

Read the last lines. A clear error about a full disk is [see if the computer still has room](<leftover-box-disk-space>), then [clear old package downloads when the disk is tight](<leftover-box-apt-clean>), then [clear old logs when the disk is tight](<leftover-box-old-logs>). Permission or firewall is [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). Otherwise copy the last error lines into a note for yourself and re-check the matching how-to. Don't paste logs to strangers on day one.

## What next

Leave it. Skip a monitoring box. Skip a NAS. Skip opening SSH to the internet. If the computer feels slow, later: [see if the computer still has free memory](<leftover-box-free-memory>). Weekly habit stays [keep the computer updated](<leftover-box-updates>).

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip if nothing is broken.
  * Skip Grafana or Prometheus tonight.
  * Skip a second computer.
  * Skip buying a KVM because a log line scared you.



## Sources

[Debian: journalctl](<https://manpages.debian.org/bookworm/systemd/journalctl.1.en.html>). [Ubuntu: journalctl](<https://manpages.ubuntu.com/manpages/noble/en/man1/journalctl.1.html>). [Debian: systemctl](<https://manpages.debian.org/bookworm/systemd/systemctl.1.en.html>). [Ubuntu: systemctl](<https://manpages.ubuntu.com/manpages/noble/en/man1/systemctl.1.html>). Official pages only. For the reboot check, see [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). For ads, see [when ads come back, check the ad block](<leftover-box-ad-block-check>). For the share, see [when the house share disappeared, check the computer](<leftover-box-share-check>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [When ads come back, check the ad blockThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [PreviousMake sure house jobs start after every reboot](<leftover-box-enable-boot>) [NextSee if the computer still has free memory](<leftover-box-free-memory>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
