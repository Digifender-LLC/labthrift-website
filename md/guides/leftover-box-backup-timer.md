# Back up the folder every week without remembering

Source: https://labthrift.com/guides/leftover-box-backup-timer
Markdown: https://labthrift.com/md/guides/leftover-box-backup-timer.md

*Notes › / › File storage › / › Back up the folder every week without remembering*

[Notes](<./>) / [File storage](<./#first-nas>) / Back up the folder every week without remembering

Written 25 Aug 2026. This is a how-to, not a product card.

# Back up the folder every week without remembering

After one manual USB (or second-box) copy works, let the computer run the same rsync on a weekly timer. A phone reminder is still fine if you prefer.

A reminder on your phone is enough if you like it. This note is the later step: the computer runs the same backup command every week without you remembering.

## Skip until one manual backup worked

If the USB copy or the second-box copy from [a backup of the folder](<first-backup>) has not worked once, stop. Fix that first. After one checked copy ([check that the backup actually copied](<leftover-box-backup-check>)) and one restored file ([restore one file from the USB backup](<leftover-box-restore-one>)), a timer makes sense. A timer will not help a copy that does not work yet. The share that copy is for is [a file share on the computer](<first-file-share>).

## What a timer is

A timer is a schedule on the computer. systemd is how Debian and Ubuntu already keep Samba running. A systemd timer wakes up a small backup job once a week. You are not sitting there to type rsync. If you already like cron, a weekly crontab line can run the same script. A timer is the way.

## Put the rsync in a small script

The computer should run one small script, not a raw rsync pasted into a timer. Put it in `~/bin/backup-share.sh`. Use the same rsync that already worked in [a backup of the folder](<first-backup>).

Many first-timers plug a USB disk in, copy, and unplug. That is still the honest backup. A timer only copies when that disk is mounted. If you yank it most of the week, keep the phone reminder. If the USB stays plugged in, the script checks the mount, copies if it is there, and quietly exits if it is not, so a missing disk is not an error.

A second old PC on the house network is the other path. No USB to forget. Same rsync as first-backup's second option.

Make a folder for small scripts:

`mkdir -p ~/bin ~/.config/systemd/user`

Write the USB script. Trailing slashes still matter, same as the manual copy:

`tee ~/bin/backup-share.sh <<'EOF' #!/bin/sh if ! mountpoint -q /mnt/backup; then exit 0 fi rsync -a /srv/share/ /mnt/backup/share/ EOF`

Make it runnable:

`chmod +x ~/bin/backup-share.sh`

If you copy to another old PC instead, drop the mount check and use that rsync from first-backup. The computer has to log into the other box without typing a password. That is [log in with a key, not the password every time](<leftover-box-ssh-keys>), done from this computer to the other one, not from your laptop.

Leave the USB plugged in if this is the USB script. The user has to be able to write into that backup folder, the same as the copy you already ran.

Before you enable the timer, the computer clock should match the house. That is [set the computer clock to your house](<leftover-box-timezone>).

## A service and a weekly timer

These two small files live in your home. The service is the job. The timer is the weekly wake-up. Debian and Ubuntu computers after the first weekend already know `systemctl` from Samba.

The computer is usually sitting there with nobody SSH'd in. Your personal timers only run while you are logged in, unless you tell it to keep yours running after you log out. That is lingering. One command, then the weekly copy still happens from the couch.

The job:

`tee ~/.config/systemd/user/backup-share.service <<'EOF' [Unit] Description=Backup share [Service] Type=oneshot ExecStart=%h/bin/backup-share.sh EOF`

The weekly wake-up. Sunday at 3 in the morning. If the computer was off then, it still runs the copy when it comes back:

`tee ~/.config/systemd/user/backup-share.timer <<'EOF' [Unit] Description=Weekly share backup [Timer] OnCalendar=Sun 03:00 Persistent=true [Install] WantedBy=timers.target EOF`

Keep yours running after you log out. Swap `youruser` for the login:

`sudo loginctl enable-linger youruser`

Turn the timer on:

`systemctl --user daemon-reload`

`systemctl --user enable --now backup-share.timer`

## Check

See the timer:

`systemctl --user list-timers`

You should see `backup-share.timer`. Run the job once without waiting for Sunday:

`systemctl --user start backup-share.service`

Then look at the backup folder. Same files as the manual copy. If the USB was unplugged, the script did nothing, and that is correct. Plug it in, mount it the way [a backup of the folder](<first-backup>) taught you, and start the service again.

## What next

A dedicated file box is still later: [a first file box (NAS)](<first-nas>). Don't buy one for this. If overnight writes worry you, [you don't need a UPS yet](<leftover-box-no-ups>). A blink is a reboot. You can run the copy again.

## Skip

  * Skip this note if the manual copy has not worked once, or if a phone reminder is enough.
  * Skip restic and Borg on day one.
  * Skip a cloud plan.
  * Skip buying a NAS.
  * Skip RAID.
  * Skip leaving the USB plugged in forever without a mount check.



## Sources

[Debian: systemd.timer](<https://manpages.debian.org/bookworm/systemd/systemd.timer.5.en.html>). [Debian: systemd.service](<https://manpages.debian.org/bookworm/systemd/systemd.service.5.en.html>). [Debian: loginctl](<https://manpages.debian.org/bookworm/systemd/loginctl.1.en.html>). Official pages only. For the copy this repeats, see [a backup of the folder](<first-backup>). For the share, see [a file share on the computer](<first-file-share>).

## Also on this topic

[A backup of the folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [Restore one file from the USB backupA backup you never copied back is a hope. Pull one file off the USB onto the computer so you know you can get it. You don't need a NAS for this.](<leftover-box-restore-one>) [A file share on the computerA folder on the computer that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [You don't need a UPS yetThe computer can sit on a house outlet. A blink of the lights is a reboot. Skip a battery box this weekend.](<leftover-box-no-ups>) [A first file box (NAS) for one personA quiet box for photos and backups. Two drives if you want sleep.](<first-nas>) [PreviousSee what the computer already runs on a schedule](<leftover-box-timers>) [NextA first file box (NAS) for one person](<first-nas>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
