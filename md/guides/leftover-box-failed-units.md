# See if any house jobs failed to start

Source: https://labthrift.com/guides/leftover-box-failed-units
Markdown: https://labthrift.com/md/guides/leftover-box-failed-units.md

*Notes › / › Faster network › / › See if any house jobs failed to start*

[Notes](<./>) / [Faster network](<./#switches>) / See if any house jobs failed to start

Written 27 Aug 2026. This is a how-to, not a product card.

# See if any house jobs failed to start

After a reboot, check failed units before you blame the network or buy a new box.

After a reboot, or when the share, ad block, or backup feels dead, ask which house jobs failed before you rip cables or buy gear. A unit is one house program systemd tries to keep running (Pi-hole, Samba, a backup timer). `systemctl --failed` lists the ones that tried and lost.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). If the computer just came back up and you have not checked the house jobs yet, start with [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. After a reboot, or when the share, ad block, or backup feels dead, ask which jobs failed before you rip cables or buy gear. You are not buying a switch for this look.

## Ask which jobs failed

SSH in from the couch, then run:

`systemctl --failed`

Empty, or a line that says `0 loaded units listed`, means nothing failed this way. If names appear (smbd, pihole-FTL, a timer), that is the clue. Don't buy a switch for this look.

## Optional one-liner for one failed name

If a name showed up and you want a short reason:

`systemctl status NAME`

Replace NAME with the short name you saw. Enough to see `Active: failed` and a short reason. For a deeper diary, that is [when something broke, look at the log](<leftover-box-read-logs>). Don't edit unit files tonight.

## If something failed

Restart that one job only if you already know it:

`sudo systemctl restart NAME`

One careful restart, then re-check:

`systemctl --failed`

If it fails again, read the log. Don't stack random installs. The morning checklist is [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>).

## What next

Leave it. The morning checklist stays [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). Boot start stays [make sure house jobs start after every reboot](<leftover-box-enable-boot>). Logs stay [when something broke, look at the log](<leftover-box-read-logs>). If the computer feels slow, memory is [see if the computer still has free memory](<leftover-box-free-memory>) and disk is [see if the computer still has room](<leftover-box-disk-space>).

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip buying a new mini PC for one failed unit.
  * Skip editing unit files tonight.
  * Skip a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: systemctl](<https://manpages.debian.org/bookworm/systemd/systemctl.1.en.html>). [Ubuntu: systemctl](<https://manpages.ubuntu.com/manpages/noble/en/man1/systemctl.1.html>). Official pages only. For the reboot check, see [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). For the log look, see [when something broke, look at the log](<leftover-box-read-logs>). For the awake check, see [is the computer still on?](<leftover-box-still-on>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Make sure house jobs start after every rebootBefore you buy a monitoring box, check that Pi-hole and the house share are set to start when the computer boots.](<leftover-box-enable-boot>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [See if the computer still has free memoryThe computer feels slow. Check free memory before you buy a new mini PC.](<leftover-box-free-memory>) [See what is keeping the computer busyThe computer feels slow. Check which program is using the CPU before you buy a new mini PC.](<leftover-box-whats-busy>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [PreviousSee what is keeping the computer busy](<leftover-box-whats-busy>) [NextA faster switch for a first home lab](<2-5g-switch>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
