# Make sure house jobs start after every reboot

Source: https://labthrift.com/guides/leftover-box-enable-boot
Markdown: https://labthrift.com/md/guides/leftover-box-enable-boot.md

*Notes › / › Faster network › / › Make sure house jobs start after every reboot*

[Notes](<./>) / [Faster network](<./#switches>) / Make sure house jobs start after every reboot

Written 28 Aug 2026. This is a how-to, not a product card.

# Make sure house jobs start after every reboot

Before you buy a monitoring box, check that Pi-hole and the house share are set to start when the computer boots.

You restarted Pi-hole or Samba by hand. Ads are gone again. The share is back. Then the computer reboots for weekly fixes, and the house jobs stay off. That is not a broken computer. A job can be running right now and still not be set to start on the next boot. You are not buying a monitoring box for this look.

## Skip until SSH works

If you cannot log in from the couch, stop. That is [SSH from the couch](<first-ssh>). If the computer just came back up and you have not checked the house jobs yet, start with [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). This note assumes you can type commands on the computer from the couch.

## What this is

`systemctl is-active` asks whether a job is running right now. That is the morning check in [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). `systemctl is-enabled` asks a different question: will this job start by itself the next time the computer boots? Enabled means yes. Disabled means you have to start it by hand again. You want the house jobs enabled.

## Ask if the house jobs start on boot

SSH in from the couch, then run:

`systemctl is-enabled pihole-FTL`

`systemctl is-enabled smbd`

You want `enabled` on both. SSH is usually already enabled on Debian or Ubuntu Server:

`systemctl is-enabled ssh`

Some computers call that unit `ssh.service` or `sshd`. If you see the unit was not found, try the other short name. If Pi-hole or Samba was never installed, skip that line. Install first: [the first useful thing on the computer](<first-useful-service>) and [a file share on the computer](<first-file-share>).

## If a house job says disabled

Turn it on for this boot and every later boot:

`sudo systemctl enable --now pihole-FTL`

or

`sudo systemctl enable --now smbd`

The `--now` part starts it immediately. Then check again:

`systemctl is-enabled pihole-FTL`

`systemctl is-active pihole-FTL`

You want `enabled` and `active`. Same for `smbd`. If a name showed up as failed instead, that is [see if any house jobs failed to start](<leftover-box-failed-units>). Don't edit unit files tonight.

## What next

Leave it. The morning checklist stays [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). Failed starts stay [see if any house jobs failed to start](<leftover-box-failed-units>). Ads that came back stay [when ads come back, check the ad block](<leftover-box-ad-block-check>). A vanished share stays [when the house share disappeared, check the computer](<leftover-box-share-check>). Skip a monitoring box for this look.

## Skip

  * Skip this note if SSH from the couch does not work yet. That is [SSH from the couch](<first-ssh>).
  * Skip if Pi-hole or the house share was never installed.
  * Skip buying a monitoring box because one reboot left a job off.
  * Skip editing unit files tonight.
  * Skip opening SSH to the internet.



## Sources

[Debian: systemctl](<https://manpages.debian.org/bookworm/systemd/systemctl.1.en.html>) (`is-enabled`, `enable`). [Ubuntu: systemctl](<https://manpages.ubuntu.com/manpages/noble/en/man1/systemctl.1.html>). Official pages only. For the reboot check, see [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). For failed starts, see [see if any house jobs failed to start](<leftover-box-failed-units>). For ads, see [when ads come back, check the ad block](<leftover-box-ad-block-check>). For the share, see [when the house share disappeared, check the computer](<leftover-box-share-check>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [See if any house jobs failed to startAfter a reboot, check failed units before you blame the network or buy a new box.](<leftover-box-failed-units>) [When ads come back, check the ad blockThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [PreviousAfter a reboot, check the computer still does its jobs](<leftover-box-after-reboot>) [NextWhen something broke, look at the log](<leftover-box-read-logs>)

---

*Labthrift Markdown mirror. HTML version linked above.*
