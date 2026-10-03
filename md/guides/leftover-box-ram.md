# See how much memory the computer already has

Source: https://labthrift.com/guides/leftover-box-ram
Markdown: https://labthrift.com/md/guides/leftover-box-ram.md

*Notes › / › Small computers › / › See how much memory the computer already has*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / See how much memory the computer already has

Written 27 Aug 2026. This is a how-to, not a product card.

# See how much memory the computer already has

Before you buy a tiny computer, check how much memory the computer already has.

Memory is the computer's short-term workspace. Not the disk. Not free room when the computer feels slow. That free look is [see if the computer still has free memory](<leftover-box-free-memory>). This note is the total size already installed, before you shop for an N100. Worker count is [see how many workers the computer already has](<leftover-box-cpu>). You don't need a new mini this morning because the laptop is old.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after the computer is doing real work, before you shop: [start with what you already have](<start-with-what-you-have>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. You are reading how much memory the computer already has, so you know whether house ad block and a file share fit. You are not buying RAM sticks tonight. You are not buying an N100, an N150, or a Protectli this morning.

## Ask how much memory it has

SSH in from the couch, then run:

`free -h`

Point at the `Mem` line, `total` column. That is how much memory the computer already has. 4 GB is a tight old laptop. 8 GB is common and fine for Pi-hole plus a house share. 16 GB is comfortable. Don't buy a mini PC because total says 8G.

## Optional one-line total

If you want one number without the full table:

`grep MemTotal /proc/meminfo`

That line is kilobytes. Divide by about a million for a rough gigabyte count, or stay with `free -h` if the table is clearer. Keep this light. Don't install extra tools for this look.

## If the total is small

4 GB still runs the first lab if you keep the stack thin. If the computer feels slow, check [see if the computer still has free memory](<leftover-box-free-memory>) and [see what is keeping the computer busy](<leftover-box-whats-busy>) before you shop. Free room and one busy copy squeeze an old laptop more often than a low total. Worker count stays [see how many workers the computer already has](<leftover-box-cpu>). Whether the computer can run a pretend computer is [see if the computer can run a pretend computer](<leftover-box-virt>). A later mini is [a tiny computer you can leave on](<n100-mini-pc>), with the RAM shopping rule in [buy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>), when the computer is actually in the way. Skip buying one this morning because total said 4G.

## What next

Free room when it feels slow stays [see if the computer still has free memory](<leftover-box-free-memory>). Worker count stays [see how many workers the computer already has](<leftover-box-cpu>). The VM flag look is [see if the computer can run a pretend computer](<leftover-box-virt>). The computer model is [see what computer you already have](<leftover-box-model>). Overflow memory on disk is [see if the computer already has extra memory on disk](<leftover-box-swap>). The disk size is [see how big the computer disk already is](<leftover-box-disk>). The start-with-what-you-have rule stays [start with what you already have](<start-with-what-you-have>). The later buy is [a tiny computer you can leave on](<n100-mini-pc>), when you actually need it.

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip buying an N100 because `free -h` total printed 4G or 8G.
  * Skip stacking a movie library, a VM, and Pi-hole on 4 GB, then blaming the computer.
  * Skip buying RAM sticks for a soldered old laptop. That trap is [buy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>).
  * Skip a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: free](<https://manpages.debian.org/bookworm/procps/free.1.en.html>). [Ubuntu: free](<https://manpages.ubuntu.com/manpages/noble/en/man1/free.1.html>). [Debian: proc](<https://manpages.debian.org/bookworm/manpages/proc.5.en.html>). Official pages only. For free room when the computer feels slow, see [see if the computer still has free memory](<leftover-box-free-memory>). For worker count, see [see how many workers the computer already has](<leftover-box-cpu>). For the start-with-what-you-have rule, see [start with what you already have](<start-with-what-you-have>). A later mini is later: [a tiny computer you can leave on](<n100-mini-pc>) and [buy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See how many workers the computer already hasBefore you buy a tiny computer, check how many workers the computer already has.](<leftover-box-cpu>) [See if the computer still has free memoryThe computer feels slow. Check free memory before you buy a new mini PC.](<leftover-box-free-memory>) [See if the computer can run a pretend computerBefore you buy a tiny computer for Proxmox, check whether the computer already has the CPU feature for VMs.](<leftover-box-virt>) [See if the computer already has extra memory on diskBefore you buy a tiny computer, check whether the computer already has overflow memory on the disk.](<leftover-box-swap>) [See how big the computer disk already isBefore you buy a tiny computer or a NAS, check how big the computer disk already is.](<leftover-box-disk>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [Buy RAM you can add later; skip soldered 12 GB cubesBuy enough memory you can actually add later. Soldered RAM means memory you cannot add later. Skip 12 GB cubes. 16 GB is the floor for a later mini.](<n100-n150-ram-ceiling-soldered-traps>) [A tiny computer you can leave onDon't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.](<n100-mini-pc>) [PreviousSee how many workers the computer already has](<leftover-box-cpu>) [NextSee if the computer can run a pretend computer](<leftover-box-virt>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
