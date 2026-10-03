# Keep the computer updated

Source: https://labthrift.com/guides/leftover-box-updates
Markdown: https://labthrift.com/md/guides/leftover-box-updates.md

*Notes › / › Getting started › / › Keep the computer updated*

[Notes](<./>) / [Getting started](<./#start>) / Keep the computer updated

Written 24 Aug 2026. This is a how-to, not a product card.

# Keep the computer updated

Once a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.

An update is the computer downloading those fixes. Two commands. That is the weekly job, not a shopping trip.

## Skip this until next week

If you just finished [your first weekend with the computer](<first-weekend>), that note already updates once. You can wait a week. Come back then.

## SSH in, then two commands

From your normal computer, [SSH from the couch](<first-ssh>). Then run two commands, one after the other.

Refresh the list of fixes:

`sudo apt update`

Install them:

`sudo apt upgrade`

Say yes to the upgrade prompt. If it asks about restarting services, yes is fine on a computer that is not a store.

## Reboot only if it says so

Reboot only if the flag says so, or after a kernel line shows up. A kernel line is a core-of-the-OS fix. The quiet check is [see if a reboot is needed](<leftover-box-reboot-needed>). If that flag is set, reboot is the clean way to finish.

`sudo reboot`

Then [find the computer on the house network](<find-the-leftover-box>) and SSH back.

## Don't turn on unattended-upgrades

Don't turn on unattended-upgrades this weekend. That is the setting that applies fixes by itself. One weekly habit is enough. When that habit is boring, the later note is [let the computer apply weekly fixes without you](<leftover-box-unattended>).

## What next

If the computer is a laptop, keep it awake when the lid closes. That is [don't let the old laptop sleep](<leftover-box-sleep>). If it is still on Wi-Fi, plug a cable: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). If weekly jobs wake at the wrong hour, [set the computer clock to your house](<leftover-box-timezone>). If you have no second copy of the house folder, that is [a backup of the house folder](<first-backup>). When you're done for the night, don't yank the cord. That is [shut down the computer without yanking the plug](<leftover-box-shutdown>). After the upgrade, check the reboot flag: [see if a reboot is needed](<leftover-box-reboot-needed>). Apt does not refresh Pi-hole itself: [keep Pi-hole updated](<update-pihole>). After a reboot, confirm SSH, ads, and the share still work: [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). After weekly updates leave installer files behind, [clear old package downloads when the disk is tight](<leftover-box-apt-clean>). Don't buy a NAS.

## Skip

  * Skip this note until next week if you just ran the first-weekend update.
  * Skip unattended-upgrades this weekend. Later is [let the computer apply weekly fixes without you](<leftover-box-unattended>).
  * Skip a NAS, a new mini PC, and a new switch.



## Sources

[Debian: apt](<https://manpages.debian.org/bookworm/apt/apt.8.en.html>). [Ubuntu: apt](<https://manpages.ubuntu.com/manpages/noble/en/man8/apt.8.html>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the first update, see [your first weekend](<first-weekend>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Keep Pi-hole updatedWeekly apt does not refresh Pi-hole. Update the software and the block lists on the old PC so ads stay gone. You don't need a new Raspberry Pi.](<update-pihole>) [Let the computer apply weekly fixes without youAfter the weekly two-command habit is boring, you can let the computer apply those same fixes by itself. Skip this until that habit is boring. Don't let it reboot on its own.](<leftover-box-unattended>) [See which OS the computer is already runningBefore you reinstall or buy a tiny computer, check which OS the computer already has.](<leftover-box-os-release>) [Your first weekend with the computerInstall the OS, name it, and reach it from the couch.](<first-weekend>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [A cable beats Wi-Fi for the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [PreviousYour first weekend with the computer](<first-weekend>) [NextSee if a reboot is needed](<leftover-box-reboot-needed>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
