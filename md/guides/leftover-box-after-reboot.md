# After a reboot, check the computer still does its jobs

Source: https://labthrift.com/guides/leftover-box-after-reboot
Markdown: https://labthrift.com/md/guides/leftover-box-after-reboot.md

*Notes › / › Faster network › / › After a reboot, check the computer still does its jobs*

[Notes](<./>) / [Faster network](<./#switches>) / After a reboot, check the computer still does its jobs

Written 26 Aug 2026. This is a how-to, not a product card.

# After a reboot, check the computer still does its jobs

The computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.

A reboot is a clean restart. The computer stops, then comes back. The three house jobs are couch login (SSH), house ad block (Pi-hole), and the shared folder (Samba). This note is the look after it is up. You are not buying anything.

## Skip until the computer answers

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) This note assumes the computer is awake again.

## Why a reboot happened

After [keep the computer updated](<leftover-box-updates>), check [see if a reboot is needed](<leftover-box-reboot-needed>). A kernel line can ask for a reboot too. A kernel line is a core-of-the-OS fix. A power blink is a reboot. [Shut down the computer without yanking the plug](<leftover-box-shutdown>) then power on is a restart too. You are not buying a monitoring box for one clean restart.

## SSH from the couch

Same habit as [SSH from the couch](<first-ssh>). If the password or key fails after the reboot, don't buy a new box. Check the name: [give the computer a name that sticks](<leftover-box-hostname>). Check the address: [keep the computer on the same number](<leftover-box-dhcp-reservation>).

## House ad block

Browse a site that used to show ads, or open the Pi-hole admin. If ads are back, that is [when ads come back, check the ad block](<leftover-box-ad-block-check>). If the router forgot the computer after a blink, set it again: [point the house at the ad block](<leftover-box-router-dns>).

## House share

Open the folder from a laptop or a phone. If it vanished, that is [when the house share disappeared, check the computer](<leftover-box-share-check>).

## Optional: check on the computer

If you already SSH'd in, you can check systemd, the computer's job list:

`systemctl is-active pihole-FTL`

`systemctl is-active smbd`

You want `active` on both. If Pi-hole is not active, [when ads come back, check the ad block](<leftover-box-ad-block-check>). If Samba is not active, [when the house share disappeared, check the computer](<leftover-box-share-check>).

## What next

Leave it. Skip a UPS for a single clean reboot: [you don't need a UPS yet](<leftover-box-no-ups>). Skip a NAS. Skip a mesh kit. Weekly updates stay [keep the computer updated](<leftover-box-updates>). Unattended stays [let the computer apply weekly fixes without you](<leftover-box-unattended>). If `systemctl` said inactive, or a restart did not help, that is [when something broke, look at the log](<leftover-box-read-logs>). If a job was active today but dies after every reboot, later: [make sure house jobs start after every reboot](<leftover-box-enable-boot>). If you want the failed-jobs list first, later: [see if any house jobs failed to start](<leftover-box-failed-units>).

## Skip

  * Skip if the computer is still off. That is [is the computer still on?](<leftover-box-still-on>)
  * Skip a monitoring appliance.
  * Skip a UPS this pass. That is [you don't need a UPS yet](<leftover-box-no-ups>).
  * Skip opening SSH to the internet.
  * Skip buying a second computer because one reboot scared you.



## Sources

[Debian: systemctl](<https://manpages.debian.org/bookworm/systemd/systemctl.1.en.html>). [Ubuntu: systemctl](<https://manpages.ubuntu.com/manpages/noble/en/man1/systemctl.1.html>). Official pages only. For the awake check, see [is the computer still on?](<leftover-box-still-on>). For the weekly habit, see [keep the computer updated](<leftover-box-updates>). For ads, see [when ads come back, check the ad block](<leftover-box-ad-block-check>). For the share, see [when the house share disappeared, check the computer](<leftover-box-share-check>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Make the computer come back on after a power cutBefore you buy a monitoring box, check that Pi-hole and the house share are set to start when the computer boots.](<leftover-box-enable-boot>) [See if a reboot is neededAfter weekly updates, check whether a reboot is needed before you buy a monitoring box.](<leftover-box-reboot-needed>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.](<leftover-box-updates>) [See if house ad block is answeringThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [See if the house folder is still sharedThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [PreviousLet the computer apply weekly fixes without you](<leftover-box-unattended>) [NextMake the computer come back on after a power cut](<leftover-box-enable-boot>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
