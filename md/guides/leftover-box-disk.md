# See how big the disk already is

Source: https://labthrift.com/guides/leftover-box-disk
Markdown: https://labthrift.com/md/guides/leftover-box-disk.md

*Notes › / › Small computers › / › See how big the disk already is*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / See how big the disk already is

Written 27 Aug 2026. This is a how-to, not a product card.

# See how big the disk already is

Before you buy a tiny computer or a NAS, check how big the disk already is.

The computer already has a disk. This note is that disk's total size, before you shop for an N100 or a file box. Free room when photos stop copying is a different look: [see if the computer still has room](<leftover-box-disk-space>). A USB stick for the weekly copy is [see if the USB backup disk showed up](<leftover-box-usb-disk>). You don't need a new mini this morning because the laptop is old.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after the computer is doing real work, before you shop: [start with what you already have](<start-with-what-you-have>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. You are reading how big the disk already is, so you know whether house ad block and a thin file share fit. You are not buying a bigger internal drive tonight. You are not buying an N100, an N150, a Protectli, or a NAS this morning.

## Ask how big the disk is

SSH in from the couch, then run:

`lsblk -d -o NAME,SIZE,TYPE`

Point at a line whose `TYPE` is `disk`. The `SIZE` column is how big that disk already is. Skip loop and ram lines if they show up. 128G is an old laptop. Fine for Pi-hole plus a thin house share. 256G or 500G is comfortable. Don't buy a mini PC or a NAS because SIZE said 128G.

## Optional disk name, and the OS folder size

If you want the disk's own name next to the size:

`lsblk -d -o NAME,SIZE,TYPE,MODEL`

The last column is the disk name, when the computer knows it. Keep this light. Don't shop from a model string. Don't wipe anything tonight.

Optional filesystem size, if you want the OS folder instead of the whole disk:

`df -h /`

Point at the `Size` column, not `Use%`. Size is how big the OS disk looks. Use% is how full it is, and that look is [see if the computer still has room](<leftover-box-disk-space>). Keep this light. Don't install extra tools for this look.

## If the disk is small

128G still runs the first lab if you keep the stack thin. House ad block barely uses any of it. A thin house share is fine. A movie library will fill an old laptop. If photos are already failing, check [see if the computer still has room](<leftover-box-disk-space>) and [clear old package downloads when the disk is tight](<leftover-box-apt-clean>) before you shop. A second copy on a USB disk you already have is [a backup of the house folder](<first-backup>). A later mini is [a tiny computer you can leave on](<n100-mini-pc>), when the computer is actually in the way. A real file box is later: [a first file box (NAS)](<first-nas>). Skip buying one this morning because SIZE said 128G.

## What next

Free room when copies fail stays [see if the computer still has room](<leftover-box-disk-space>). The USB stick look stays [see if the USB backup disk showed up](<leftover-box-usb-disk>). Total memory size stays [see how much memory the computer already has](<leftover-box-ram>). Worker count stays [see how many workers the computer already has](<leftover-box-cpu>). The computer name stays [see what computer you already have](<leftover-box-model>). Overflow memory on the disk is [see if the computer already has extra memory on disk](<leftover-box-swap>). The first rule stays [start with what you already have](<start-with-what-you-have>). The later buy is [a tiny computer you can leave on](<n100-mini-pc>), when you actually need it.

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip buying an N100 or a NAS because `lsblk` SIZE printed 128G.
  * Skip filling an old laptop with a movie library, then blaming the computer.
  * Skip wiping or partitioning the disk tonight.
  * Skip a new internal drive this weekend.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: lsblk](<https://manpages.debian.org/bookworm/util-linux/lsblk.8.en.html>). [Ubuntu: lsblk](<https://manpages.ubuntu.com/manpages/noble/en/man8/lsblk.8.html>). [Debian: df](<https://manpages.debian.org/bookworm/coreutils/df.1.en.html>). [Ubuntu: df](<https://manpages.ubuntu.com/manpages/noble/en/man1/df.1.html>). Official pages only. For free room when copies fail, see [see if the computer still has room](<leftover-box-disk-space>). For a USB stick, see [see if the USB backup disk showed up](<leftover-box-usb-disk>). For the first rule, see [start with what you already have](<start-with-what-you-have>). A later mini: [a tiny computer you can leave on](<n100-mini-pc>). A dedicated file box is later: [a first file box (NAS)](<first-nas>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See what computer you already haveBefore you buy a tiny computer, check what computer you already have.](<leftover-box-model>) [See how much memory the computer already hasBefore you buy a tiny computer, check how much memory the computer already has.](<leftover-box-ram>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [See if the computer already has extra memory on diskBefore you buy a tiny computer, check whether the computer already has overflow memory on the disk.](<leftover-box-swap>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [A tiny computer you can leave onDon't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.](<n100-mini-pc>) [PreviousSee what computer you already have](<leftover-box-model>) [NextSee if the computer already has extra memory on disk](<leftover-box-swap>)

---

*Labthrift Markdown mirror. HTML version linked above.*
