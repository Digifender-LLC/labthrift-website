# See if the computer already has extra memory on disk

Source: https://labthrift.com/guides/leftover-box-swap
Markdown: https://labthrift.com/md/guides/leftover-box-swap.md

*Notes › / › Small computers › / › See if the computer already has extra memory on disk*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / See if the computer already has extra memory on disk

Written 27 Aug 2026. This is a how-to, not a product card.

# See if the computer already has extra memory on disk

Before you buy a tiny computer, check whether the computer already has overflow memory on the disk.

Swap is extra memory room on the disk. When real memory is full, the computer can park unused work there. That is slower than real memory. This note is whether that overflow is already set up. Total memory size is a different look: [see how much memory the computer already has](<leftover-box-ram>). Free room when the computer feels slow is [see if the computer still has free memory](<leftover-box-free-memory>). You don't need a new mini this morning because the Swap line printed 0B.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after the computer is doing real work, before you shop: [start with what you already have](<start-with-what-you-have>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. You are reading whether the computer already has overflow memory on the disk, so you know what you already have. You are not creating a swap file tonight. You are not buying RAM sticks, an N100, an N150, a Protectli, or a NAS this morning.

## Ask if overflow memory is already there

SSH in from the couch, then run:

`free -h`

Point at the `Swap` line, `total` column. That is how much overflow memory the computer already has. `0B` means none. Common old laptops print that. 1G to 4G is an old office box. Fine. Don't buy a mini PC because total said 0B.

## Optional where it lives

If you want the disk file or partition behind that number:

`swapon --show`

An empty print means no overflow is on. A table with `NAME` and `SIZE` is the overflow already in use. Keep this light. Don't turn swap off. Don't create a new file tonight. Don't install extra tools for this look.

## If the Swap line is zero, or used is high

0B still runs the first lab if you keep the stack thin. House ad block and a thin file share fit. If the computer feels slow, check [see if the computer still has free memory](<leftover-box-free-memory>) and [see what is keeping the computer busy](<leftover-box-whats-busy>) before you shop. Don't add a swap file this weekend because the line printed 0B. If `used` is close to `total` and available memory is tiny, the computer is parking a lot on disk. Close extras. A later mini is [a tiny computer you can leave on](<n100-mini-pc>), with the RAM shopping rule in [buy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>), when the computer is actually in the way. Skip buying one this morning because Swap said 0B.

## What next

Total memory size stays [see how much memory the computer already has](<leftover-box-ram>). Free room when it feels slow stays [see if the computer still has free memory](<leftover-box-free-memory>). The disk size stays [see how big the disk already is](<leftover-box-disk>). Worker count stays [see how many workers the computer already has](<leftover-box-cpu>). The first rule stays [start with what you already have](<start-with-what-you-have>). The later buy is [a tiny computer you can leave on](<n100-mini-pc>), when you actually need it.

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip buying an N100 because `free -h` Swap printed 0B.
  * Skip creating a swap file this weekend unless available memory is already tiny and the computer is actually squeezed.
  * Skip buying RAM sticks for a soldered old laptop. That trap is [buy RAM you can add later; skip soldered 12 GB cubes](<n100-n150-ram-ceiling-soldered-traps>).
  * Skip a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: free](<https://manpages.debian.org/bookworm/procps/free.1.en.html>). [Ubuntu: free](<https://manpages.ubuntu.com/manpages/noble/en/man1/free.1.html>). [Debian: swapon](<https://manpages.debian.org/bookworm/mount/swapon.8.en.html>). [Ubuntu: swapon](<https://manpages.ubuntu.com/manpages/noble/en/man8/swapon.8.html>). Official pages only. For total memory size, see [see how much memory the computer already has](<leftover-box-ram>). For free room when it feels slow, see [see if the computer still has free memory](<leftover-box-free-memory>). For disk size, see [see how big the disk already is](<leftover-box-disk>). For the first rule, see [start with what you already have](<start-with-what-you-have>). A later mini: [a tiny computer you can leave on](<n100-mini-pc>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See how much memory the computer already hasBefore you buy a tiny computer, check how much memory the computer already has.](<leftover-box-ram>) [See if the computer still has free memoryThe computer feels slow. Check free memory before you buy a new mini PC.](<leftover-box-free-memory>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the disk already is.](<leftover-box-disk>) [See what is keeping the computer busyThe computer feels slow. Check which program is using the CPU before you buy a new mini PC.](<leftover-box-whats-busy>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [A tiny computer you can leave onDon't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.](<n100-mini-pc>) [PreviousSee how big the disk already is](<leftover-box-disk>) [NextA tiny computer you can leave on](<n100-mini-pc>)

---

*Labthrift Markdown mirror. HTML version linked above.*
