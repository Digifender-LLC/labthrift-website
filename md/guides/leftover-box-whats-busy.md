# See what is keeping the computer busy

Source: https://labthrift.com/guides/leftover-box-whats-busy
Markdown: https://labthrift.com/md/guides/leftover-box-whats-busy.md

*Notes › / › Faster network › / › See what is keeping the computer busy*

[Notes](<./>) / [Faster network](<./#switches>) / See what is keeping the computer busy

Written 27 Aug 2026. This is a how-to, not a product card.

# See what is keeping the computer busy

The computer feels slow. Check which program is using the CPU before you buy a new mini PC.

The computer feels slow. Memory room is a different look: [see if the computer still has free memory](<leftover-box-free-memory>). Disk room is [see if the computer still has room](<leftover-box-disk-space>). This note asks which program is using the computer's worker (the CPU) right now.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after you already checked memory: [see if the computer still has free memory](<leftover-box-free-memory>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. One busy program can make SSH feel late. A copy, a weekly update, or a movie job you started can sit at the top and then go away. Don't buy a mini PC for a one-off copy. Don't kill programs tonight.

## Ask which program is busy

SSH in from the couch, then run:

`ps aux --sort=-%cpu | head`

`ps` is the computer listing running programs. `| head` keeps the first few lines so you don't get a wall of text. The first line is labels. Point at `%CPU` (how busy that program is) and `COMMAND` (the name). The top names after the labels are the busy ones right now.

A copy often shows `rsync`. A weekly fix often shows `apt` or `unattended-upgrades`. Those can wait. If the same name stays at the top while you are not copying or updating, that program is the squeeze.

## Optional load hint

If you want a second hint that the computer is piled up:

`uptime`

That is the same optional look as [see if the computer still has free memory](<leftover-box-free-memory>). Load numbers that stay high with nothing happening can mean the computer is working too hard. Keep this light. You don't need to learn load averages in depth tonight.

## If something is busy

Wait out a copy or a weekly update. Don't kill processes tonight. Don't stack a movie library, a VM, and Pi-hole on a 4 GB old laptop. If memory is also tight, that is still [see if the computer still has free memory](<leftover-box-free-memory>). A later mini is [a tiny computer you can leave on](<n100-mini-pc>), when you actually need it. Skip buying one this morning if the busy name was a one-off job.

## What next

Memory room stays [see if the computer still has free memory](<leftover-box-free-memory>). Disk room stays [see if the computer still has room](<leftover-box-disk-space>). If a house job quit after a reboot, later: [see if any house jobs failed to start](<leftover-box-failed-units>). How many workers the computer already has: [see how many workers the computer already has](<leftover-box-cpu>). Skip a new mini PC this morning if the computer was only busy for a copy.

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip killing programs tonight.
  * Skip installing a prettier process viewer for this look.
  * Skip a new mini PC for a one-off copy.
  * Skip a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: ps](<https://manpages.debian.org/bookworm/procps/ps.1.en.html>). [Ubuntu: ps](<https://manpages.ubuntu.com/manpages/noble/en/man1/ps.1.html>). [Debian: uptime](<https://manpages.debian.org/bookworm/procps/uptime.1.en.html>). Official pages only. For memory room, see [see if the computer still has free memory](<leftover-box-free-memory>). For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For the awake check, see [is the computer still on?](<leftover-box-still-on>). For the login, see [SSH from the couch](<first-ssh>). A later mini: [a tiny computer you can leave on](<n100-mini-pc>).

## Also on this topic

[See if the computer still has free memoryThe computer feels slow. Check free memory before you buy a new mini PC.](<leftover-box-free-memory>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [See how many workers the computer already hasBefore you buy a tiny computer, check how many workers the computer already has.](<leftover-box-cpu>) [A tiny computer you can leave onDon't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.](<n100-mini-pc>) [PreviousSee if the computer still has free memory](<leftover-box-free-memory>) [NextSee if any house jobs failed to start](<leftover-box-failed-units>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
