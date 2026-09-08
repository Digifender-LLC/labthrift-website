# Shut down the computer without yanking the plug

Source: https://labthrift.com/guides/leftover-box-shutdown
Markdown: https://labthrift.com/md/guides/leftover-box-shutdown.md

*Notes › / › Getting started › / › Shut down the computer without yanking the plug*

[Notes](<./>) / [Getting started](<./#start>) / Shut down the computer without yanking the plug

Written 24 Aug 2026. This is a how-to, not a product card.

# Shut down the computer without yanking the plug

When you're done for the night, shut it down and let it finish writing files before it powers off. Don't yank the cord. Skip this if you only need a reboot after updates.

The computer is still writing files. Pi-hole and the house share live there. A shutdown finishes writing files, then powers off. One command. Wait for the lights to go dark.

## Skip this if you only need a reboot

If you just ran [keep the computer updated](<leftover-box-updates>) and [see if a reboot is needed](<leftover-box-reboot-needed>) said yes, use `sudo reboot` there. You don't need this shutdown. Come back when you are done for the night.

## SSH in, then shut it down

From your normal computer, [SSH from the couch](<first-ssh>). Then run one command.

`sudo shutdown -h now`

That powers the computer off. Wait for the lights to go dark before you unplug. Yanking the cord while it is still writing can leave SSH and Pi-hole dirty when it comes back.

## Reboot instead

If you are moving it, not done for the week, reboot instead of shutting down.

`sudo reboot`

Then [find the computer on the house network](<find-the-leftover-box>) and SSH back.

## The lid is not a shutdown

Closing a laptop lid is sleep, not shutdown. Sleep is a pause. The machine is still on, but it has stopped doing work. That is [don't let the old laptop sleep](<leftover-box-sleep>). A desktop can skip the lid talk. Yanking the charger is also not a shutdown. It may keep running on battery, or it may cut power mid-write.

## What next

To bring it back from soft-off without walking over, that is [wake the computer from the house network](<wake-on-lan>). If it has been a week, [keep the computer updated](<leftover-box-updates>). If the computer is a laptop you leave on, that is [don't let the old laptop sleep](<leftover-box-sleep>). A house outlet is enough. That is [you don't need a UPS yet](<leftover-box-no-ups>). Don't buy a NAS.

## Skip

  * Skip this note if you only need a reboot after computer-updates.
  * Skip yanking the cord.
  * Skip a UPS, a NAS, and a new switch this pass.



## Sources

[Debian: shutdown](<https://manpages.debian.org/bookworm/systemd-sysv/shutdown.8.en.html>). [Ubuntu: shutdown](<https://manpages.ubuntu.com/manpages/noble/en/man8/shutdown.8.html>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the weekly fixes, see [keep the computer updated](<leftover-box-updates>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See if a reboot is neededAfter weekly updates, check whether a reboot is needed before you buy a monitoring box.](<leftover-box-reboot-needed>) [Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.](<leftover-box-updates>) [Wake the computer from the house networkSoft-off is fine overnight. Wake the old PC from a laptop or phone on the house network so SSH and Pi-hole come back. You don't need a smart plug for this.](<wake-on-lan>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [PreviousSee if a reboot is needed](<leftover-box-reboot-needed>) [NextDon't let the old laptop sleep](<leftover-box-sleep>)

---

*Labthrift Markdown mirror. HTML version linked above.*
