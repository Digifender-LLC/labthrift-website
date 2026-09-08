# Let the computer apply weekly fixes without you

Source: https://labthrift.com/guides/leftover-box-unattended
Markdown: https://labthrift.com/md/guides/leftover-box-unattended.md

*Notes › / › Faster network › / › Let the computer apply weekly fixes without you*

[Notes](<./>) / [Faster network](<./#switches>) / Let the computer apply weekly fixes without you

Written 26 Aug 2026. This is a how-to, not a product card.

# Let the computer apply weekly fixes without you

After the weekly two-command habit is boring, you can let the computer apply those same fixes by itself. Skip this until that habit is boring. Don't let it reboot on its own.

unattended-upgrades is the computer applying the weekly fixes without you typing them. Same job as the weekly two commands. The computer does it in the background. A reboot is still yours.

## Skip until the weekly habit is boring

[Keep the computer updated](<leftover-box-updates>) should already be boring. If you have not run `sudo apt update` then `sudo apt upgrade` a couple of weeks in a row, stop. Come back when that habit is dull. A timer will not help a computer you never patch.

## What this changes

The computer applies the same fixes as [keep the computer updated](<leftover-box-updates>), in the background, while SSH and Pi-hole stay up. You still look once a week if you want. You still reboot when [see if a reboot is needed](<leftover-box-reboot-needed>) says yes, or when a kernel line needs it. If the computer reboots itself at 3am, ads come back and SSH drops until it is up. Leave automatic reboot off.

## Install the package

From your normal computer, [SSH from the couch](<first-ssh>). Then install the package:

`sudo apt install unattended-upgrades`

Turn it on so it actually runs:

`sudo dpkg-reconfigure --priority=low unattended-upgrades`

Choose Yes. That writes the small on switch. If reconfigure is missing, `sudo apt install apt-config-auto-update` is not the path. Stay on Debian or Ubuntu from [what OS to put on the computer](<what-os-to-pick>).

## Keep automatic reboot off

Write a drop-in so you don't hunt comments. This is a small extra settings file, same idea as the SSH drop-in on [turn off password login once the key works](<leftover-box-ssh-no-password>).

`echo 'Unattended-Upgrade::Automatic-Reboot "false";' | sudo tee /etc/apt/apt.conf.d/99-labthrift-no-reboot`

The computer can apply the weekly fixes. It will not reboot itself at 3am.

## Check it is on

Ask if the job is running:

`systemctl is-active unattended-upgrades`

It should say `active`. After a day, you can look quietly in `/var/log/unattended-upgrades/`. That folder is the log. You don't need a noisy test as the main path. If you want to watch it pretend, optional:

`sudo unattended-upgrade --dry-run --debug`

That prints a lot. Skip it unless something looks off.

## Turn it off if you hate it

You can flip the same switch back. Choose No:

`sudo dpkg-reconfigure --priority=low unattended-upgrades`

Or stop it and keep it from starting:

`sudo systemctl stop unattended-upgrades`

`sudo systemctl disable unattended-upgrades`

The weekly two commands in [keep the computer updated](<leftover-box-updates>) are still enough.

## What next

The honest weekly look is still [keep the computer updated](<leftover-box-updates>). After a reboot, confirm SSH, ads, and the share: [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). If the computer clock is wrong, the job runs at the wrong hour: [set the computer clock to your house](<leftover-box-timezone>). If the firewall is not on yet, [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). Skip fail2ban. Later is [slow down password guesses on SSH](<leftover-box-fail2ban>). Skip a NAS. Skip opening SSH to the internet.

## Skip

  * Skip this note if weekly apt is still new.
  * Skip automatic reboot.
  * Skip fail2ban. Later is [slow down password guesses on SSH](<leftover-box-fail2ban>).
  * Skip a new NAS, a new mini PC, and a new switch.
  * Skip forwarding port 22 on the router.



## Sources

[Debian: unattended-upgrades](<https://manpages.debian.org/bookworm/unattended-upgrades/unattended-upgrades.8.en.html>). [Ubuntu Server: automatic updates](<https://ubuntu.com/server/docs/how-to/software/automatic-updates/>). Official pages only. For the weekly habit, see [keep the computer updated](<leftover-box-updates>). For the house clock, see [set the computer clock to your house](<leftover-box-timezone>). For the firewall, see [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See if a reboot is neededAfter weekly updates, check whether a reboot is needed before you buy a monitoring box.](<leftover-box-reboot-needed>) [Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.](<leftover-box-updates>) [Set the computer clock to your houseLogs, updates, and weekly backups only make sense if the computer uses your local time. timedatectl sets the city zone. It keeps the clock correct over the network.](<leftover-box-timezone>) [Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [Slow down password guesses on SSHAfter the firewall is on and key login is boring, you can let the computer briefly refuse an address that keeps guessing the password. Skip this on day one. Don't forward port 22.](<leftover-box-fail2ban>) [Turn the computer off from the couchWhen you're done for the night, shut it down and let it finish writing files before it powers off. Don't yank the cord. Skip this if you only need a reboot after updates.](<leftover-box-shutdown>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [PreviousSee if anyone guessed the password](<leftover-box-failed-guesses>) [NextAfter a reboot, check the computer still does its jobs](<leftover-box-after-reboot>)

---

*Labthrift Markdown mirror. HTML version linked above.*
