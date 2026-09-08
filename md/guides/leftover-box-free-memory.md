# See if the computer still has free memory

Source: https://labthrift.com/guides/leftover-box-free-memory
Markdown: https://labthrift.com/md/guides/leftover-box-free-memory.md

*Notes › / › Faster network › / › See if the computer still has free memory*

[Notes](<./>) / [Faster network](<./#switches>) / See if the computer still has free memory

Written 27 Aug 2026. This is a how-to, not a product card.

# See if the computer still has free memory

The computer feels slow. Check free memory before you buy a new mini PC.

This is free room right now, not the total size already installed. The total-size look is [see how much memory the computer already has](<leftover-box-ram>).

The computer feels slow. Before you shop for a quiet mini PC, ask how much short-term workspace it still has. Memory (RAM) is that workspace: the computer holds running work there. A full disk is different. Disk room is [see if the computer still has room](<leftover-box-disk-space>). This note is memory room.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. Slow can be a full disk, a stuck service, or tight memory. If copies fail, check disk first: [see if the computer still has room](<leftover-box-disk-space>). If a house job quit after a reboot, that is [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>) or [when something broke, look at the log](<leftover-box-read-logs>). Here you are only asking whether memory is squeezed.

## Ask how much memory is free

SSH in from the couch, then run:

`free -h`

`free -h` prints how much workspace is left, in human sizes (G for gigabytes, M for megabytes). Point at the `Mem` line. `available` (or free plus buff/cache on older prints) is what matters for starting new work. If available is tiny (hundreds of MB on an old 4–8 GB old laptop) while you run Pi-hole and Samba, the computer is squeezed. Don't buy a NAS for this look.

## Optional one-liner

If you want a second hint that the computer is thrashing:

`uptime`

Load numbers that stay high with nothing happening can mean the computer is swapping hard. Keep this light. You don't need to learn load averages in depth tonight.

## If memory is tight

Close heavy extras you added. Don't stack a movie library, a VM, and Pi-hole on a 4 GB old laptop. A later mini with more RAM is [a tiny computer you can leave on](<n100-mini-pc>), and the RAM shopping rule is [buy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>), when you actually need it. Skip buying RAM sticks for a soldered laptop.

## What next

Leave it. Disk room stays [see if the computer still has room](<leftover-box-disk-space>). Weekly habit stays [keep the computer updated](<leftover-box-updates>). Skip a new mini PC this morning if available memory is fine. Overflow memory on disk is [see if the computer already has extra memory on disk](<leftover-box-swap>). If memory is fine but the computer still feels slow, later: [see what is keeping the computer busy](<leftover-box-whats-busy>). If a house job quit after a reboot, later: [see if any house jobs failed to start](<leftover-box-failed-units>).

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip a new mini PC for a full disk. Fix disk first: [see if the computer still has room](<leftover-box-disk-space>).
  * Skip soldered-RAM lottery cubes. That is [buy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>).
  * Skip a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: free](<https://manpages.debian.org/bookworm/procps/free.1.en.html>). [Ubuntu: free](<https://manpages.ubuntu.com/manpages/noble/en/man1/free.1.html>). [Debian: uptime](<https://manpages.debian.org/bookworm/procps/uptime.1.en.html>). [Ubuntu: uptime](<https://manpages.ubuntu.com/manpages/noble/en/man1/uptime.1.html>). Official pages only. For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For the awake check, see [is the computer still on?](<leftover-box-still-on>). For the login, see [SSH from the couch](<first-ssh>). A later mini with more RAM is later: [a tiny computer you can leave on](<n100-mini-pc>) and [buy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>).

## Also on this topic

[See what is keeping the computer busyThe computer feels slow. Check which program is using the CPU before you buy a new mini PC.](<leftover-box-whats-busy>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [When something broke, look at the logSSH works, but a house job doesn't. Read the program's recent log before you buy a monitoring box.](<leftover-box-read-logs>) [See if the computer already has extra memory on diskBefore you buy a tiny computer, check whether the computer already has overflow memory on the disk.](<leftover-box-swap>) [See how much memory the computer already hasBefore you buy a tiny computer, check how much memory the computer already has.](<leftover-box-ram>) [See how many workers the computer already hasBefore you buy a tiny computer, check how many workers the computer already has.](<leftover-box-cpu>) [A tiny computer you can leave onDon't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.](<n100-mini-pc>) [PreviousWhen something broke, look at the log](<leftover-box-read-logs>) [NextSee what is keeping the computer busy](<leftover-box-whats-busy>)

---

*Labthrift Markdown mirror. HTML version linked above.*
