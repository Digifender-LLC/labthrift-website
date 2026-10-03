# See how long the computer has been awake

Source: https://labthrift.com/guides/leftover-box-uptime
Markdown: https://labthrift.com/md/guides/leftover-box-uptime.md

*Notes › / › Getting started › / › See how long the computer has been awake*

[Notes](<./>) / [Getting started](<./#start>) / See how long the computer has been awake

Written 27 Aug 2026. This is a how-to, not a product card.

# See how long the computer has been awake

Before you buy a UPS or a new mini PC, see how long the computer has been awake.

Ping says the computer answers. That is [is the computer still on?](<leftover-box-still-on>). This note is different. You are already logged in. You want the clock: up for two days, or up for fourteen minutes. A short awake time after you left it on overnight often means a reboot, a power blink, or sleep. A long awake time means it has been sitting there doing house jobs. You don't need a battery box this morning because you have not looked.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after the computer is supposed to stay on: [your first weekend with the computer](<first-weekend>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. You are reading how long the computer has been running since the last boot. You are not buying a UPS tonight. You are not buying an N100, a mesh kit, or a monitoring box this morning.

## Ask how long it has been awake

SSH in from the couch, then run:

`uptime -p`

You should see something like `up 2 days, 3 hours, 11 minutes`. That plain sentence is the whole answer. Days and hours mean the computer has been awake through your last night. Minutes alone, when you thought it had been on for days, means it rebooted or woke up recently. Don't buy a UPS because the sentence says `up 14 minutes` once. Look again tomorrow morning.

## Optional full line

If you want the longer line with load numbers:

`uptime`

The awake time is still in that line. The three load numbers at the end are a different look. When the computer feels slow, use [see what is keeping the computer busy](<leftover-box-whats-busy>) and [see if the computer still has free memory](<leftover-box-free-memory>). Keep this note on the awake clock.

## If the awake time is short

Confirm the house jobs came back: [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). An old laptop may have slept with the lid. That is [don't let the old laptop sleep](<leftover-box-sleep>). A blink of the lights can reboot a computer on a plain outlet. You still don't need a UPS this weekend: [you don't need a UPS yet](<leftover-box-no-ups>). A later cheap battery box, when blinks keep interrupting house jobs, is [cheap UPS for a closet that stays on overnight](<cheap-ups-closet>). Skip buying one because `uptime -p` said minutes once.

## What next

The awake knock from the couch stays [is the computer still on?](<leftover-box-still-on>). After a short awake time, confirm jobs in [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). Failed house jobs after a reboot are [see if any house jobs failed to start](<leftover-box-failed-units>). A clean power-off when you mean to stop is [shut down the computer without yanking the plug](<leftover-box-shutdown>). The first rule stays [start with what you already have](<start-with-what-you-have>).

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip a UPS because `uptime -p` printed minutes once.
  * Skip a new mini PC for a short awake time. Check sleep, power, and house jobs first.
  * Skip a monitoring appliance for this look.
  * Skip a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: uptime](<https://manpages.debian.org/bookworm/procps/uptime.1.en.html>). [Ubuntu: uptime](<https://manpages.ubuntu.com/manpages/noble/en/man1/uptime.1.html>). Official pages only. For the awake knock, see [is the computer still on?](<leftover-box-still-on>). For jobs after a reboot, see [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). For sleep on an old laptop, see [don't let the old laptop sleep](<leftover-box-sleep>). For skipping a UPS this weekend, see [you don't need a UPS yet](<leftover-box-no-ups>). A later battery box is [cheap UPS for a closet that stays on overnight](<cheap-ups-closet>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [Shut down the computer without yanking the plugWhen you're done for the night, shut it down and let it finish writing files before it powers off. Don't yank the cord. Skip this if you only need a reboot after updates.](<leftover-box-shutdown>) [You don't need a UPS yetThe computer can sit on a house outlet. A blink of the lights is a reboot. Skip a battery box this weekend.](<leftover-box-no-ups>) [See what is keeping the computer busyThe computer feels slow. Check which program is using the CPU before you buy a new mini PC.](<leftover-box-whats-busy>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousIs the computer still on?](<leftover-box-still-on>) [NextGive the computer a name that sticks](<leftover-box-hostname>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
