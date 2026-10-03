# See if a reboot is needed

Source: https://labthrift.com/guides/leftover-box-reboot-needed
Markdown: https://labthrift.com/md/guides/leftover-box-reboot-needed.md

*Notes › / › Getting started › / › See if a reboot is needed*

[Notes](<./>) / [Getting started](<./#start>) / See if a reboot is needed

Written 28 Aug 2026. This is a how-to, not a product card.

# See if a reboot is needed

After weekly updates, check whether a reboot is needed before you buy a monitoring box.

[Keep the computer updated](<leftover-box-updates>) says reboot only if the flag says so. This note is the quiet look that answers that. Debian and Ubuntu leave a small flag file when a reboot will finish the fixes. You are not guessing from a kernel line. You are reading the flag. You don't need a monitoring appliance for one flag.

## Skip until the weekly habit exists

If you have never run the two update commands, start with [keep the computer updated](<leftover-box-updates>). If SSH from the couch is not working yet, that is [SSH from the couch](<first-ssh>). Prefer this look right after an upgrade finishes, or any morning you wonder whether last week's fixes still need a restart. This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. You are reading a reboot flag the computer already wrote. You are not buying a UPS, an N100, a mesh kit, or a monitoring box this morning. A reboot finishes some updates. A power-off for the night is different: [shut down the computer without yanking the plug](<leftover-box-shutdown>).

## Ask if a reboot is needed

SSH in from the couch, then run:

`test -f /var/run/reboot-required && echo needs reboot || echo no reboot needed`

If you see `needs reboot`, a restart will finish the last fixes. If you see `no reboot needed`, leave it alone. Don't reboot every week on habit. Don't buy anything because the line printed once.

## Optional: which packages asked

If the flag is there and you want the short list of packages that asked:

`cat /var/run/reboot-required.pkgs`

No file, or an empty look, is fine. The flag file is enough. Keep this note on yes or no.

## If it needs a reboot

Finish with a clean restart:

`sudo reboot`

Wait a minute. Then [is the computer still on?](<leftover-box-still-on>), log back in, and confirm the house jobs: [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). Failed jobs after that are [see if any house jobs failed to start](<leftover-box-failed-units>). Don't yank the cord for this. That is for a night you mean to power off: [shut down the computer without yanking the plug](<leftover-box-shutdown>).

## What next

The weekly two commands stay [keep the computer updated](<leftover-box-updates>). When that habit is boring, later is [let the computer apply weekly fixes without you](<leftover-box-unattended>) (still leave automatic reboot off). How long it has been awake after a restart is [see how long the computer has been awake](<leftover-box-uptime>). The first rule stays [start with what you already have](<start-with-what-you-have>).

## Skip

  * Skip if you have not run weekly updates yet. That is [keep the computer updated](<leftover-box-updates>).
  * Skip a reboot when the line says `no reboot needed`.
  * Skip a monitoring box, a UPS, or a new mini PC for this look.
  * Skip letting unattended upgrades reboot the computer by itself. That is still off in [let the computer apply weekly fixes without you](<leftover-box-unattended>).
  * Skip a NAS for this look.



## Sources

[Debian Reference: the kernel (reboot-required)](<https://www.debian.org/doc/manuals/debian-reference/ch09.en.html#_the_kernel>). [Debian: apt](<https://manpages.debian.org/bookworm/apt/apt.8.en.html>). [Ubuntu: apt](<https://manpages.ubuntu.com/manpages/noble/en/man8/apt.8.html>). Official pages only. For the weekly habit, see [keep the computer updated](<leftover-box-updates>). For jobs after a restart, see [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). For a night power-off, see [shut down the computer without yanking the plug](<leftover-box-shutdown>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.](<leftover-box-updates>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [Shut down the computer without yanking the plugWhen you're done for the night, shut it down and let it finish writing files before it powers off. Don't yank the cord. Skip this if you only need a reboot after updates.](<leftover-box-shutdown>) [Let the computer apply weekly fixes without youAfter the weekly two-command habit is boring, you can let the computer apply those same fixes by itself. Skip this until that habit is boring. Don't let it reboot on its own.](<leftover-box-unattended>) [See how long the computer has been awakeBefore you buy a UPS or a new mini PC, see how long the computer has been awake.](<leftover-box-uptime>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousKeep the computer updated](<leftover-box-updates>) [NextShut down the computer without yanking the plug](<leftover-box-shutdown>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
