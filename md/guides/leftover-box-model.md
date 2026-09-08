# See what computer you already have

Source: https://labthrift.com/guides/leftover-box-model
Markdown: https://labthrift.com/md/guides/leftover-box-model.md

*Notes › / › Small computers › / › See what computer you already have*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / See what computer you already have

Written 27 Aug 2026. This is a how-to, not a product card.

# See what computer you already have

Before you buy a tiny computer, check what computer you already have.

The computer already has a name on the sticker. Linux keeps a copy of that name. This note is that name, so you know whether this computer is an OptiPlex, an EliteDesk, an old laptop, or a generic board. The chip name is a different look: [see how many workers the computer already has](<leftover-box-cpu>). The OS name is [see which OS the computer is already running](<leftover-box-os-release>). You don't need an N100 this morning because you don't know the model.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after the computer is doing real work, before you shop: [start with what you already have](<start-with-what-you-have>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. You are reading the computer's own name, so you know what you already have. You are not buying an N100, an N150, or a Protectli tonight. You are not wiping it because the name is old.

## Print the model name

SSH in from the couch, then run:

`cat /sys/class/dmi/id/product_name`

That one line is the computer name. `OptiPlex 7050`, `EliteDesk 800 G4`, or an old laptop name is an old office box. Keep using it. Don't buy a mini PC because the name is old.

## Optional maker line

If you want the maker next to the name:

`cat /sys/class/dmi/id/sys_vendor /sys/class/dmi/id/product_name`

Two lines. The first is the maker. The second is the computer name. `Dell Inc.` plus `OptiPlex 7050` is enough. Keep this light. Don't install extra tools for this look. Don't read the serial files. Those are private, and they are not this look.

Optional spoken form, if you already used it for the OS:

`hostnamectl`

Point at `Chassis`. `laptop` or `desktop` tells you old laptop versus old office box. `Hardware Vendor` and `Hardware Model` show up on some computers, not all. The computer name on the house network is a different line. That name is [give the computer a name that sticks](<leftover-box-hostname>).

## If the name is empty or generic

No `/sys/class/dmi/id/product_name` usually means this computer is not a typical Intel or AMD office box. A Pi, some ARM boards, and some pretend computers skip that file. `To Be Filled By O.E.M.` or `System Product Name` is a generic board placeholder. The chip name still helps: [see how many workers the computer already has](<leftover-box-cpu>). Don't buy a tiny computer because the file is missing, or because it printed a placeholder.

## What next

Worker count stays [see how many workers the computer already has](<leftover-box-cpu>). Total memory size stays [see how much memory the computer already has](<leftover-box-ram>). The disk size is [see how big the disk already is](<leftover-box-disk>). Overflow memory on the disk is [see if the computer already has extra memory on disk](<leftover-box-swap>). The VM flag stays [see if the computer can run a pretend computer](<leftover-box-virt>). The first rule stays [start with what you already have](<start-with-what-you-have>). The later buy is [a tiny computer you can leave on](<n100-mini-pc>), when the computer is actually in the way.

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip buying an N100 because you don't know the model, or because it printed an old name.
  * Skip shopping from a model string. The computer you already have is still the first box.
  * Skip reading serial numbers or asset tags. Those are not this look.
  * Skip a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian wiki: identify a system](<https://wiki.debian.org/HowToIdentifyADevice/System>). [Debian: hostnamectl](<https://manpages.debian.org/bookworm/systemd/hostnamectl.1.en.html>). [Ubuntu: hostnamectl](<https://manpages.ubuntu.com/manpages/noble/en/man1/hostnamectl.1.html>). Official pages only. For the chip name, see [see how many workers the computer already has](<leftover-box-cpu>). For the OS name, see [see which OS the computer is already running](<leftover-box-os-release>). For the first rule, see [start with what you already have](<start-with-what-you-have>). A later mini: [a tiny computer you can leave on](<n100-mini-pc>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See how many workers the computer already hasBefore you buy a tiny computer, check how many workers the computer already has.](<leftover-box-cpu>) [See how much memory the computer already hasBefore you buy a tiny computer, check how much memory the computer already has.](<leftover-box-ram>) [See if the computer can run a pretend computerBefore you buy a tiny computer for Proxmox, check whether the computer already has the CPU feature for VMs.](<leftover-box-virt>) [See which OS the computer is already runningBefore you reinstall or buy a tiny computer, check which OS the computer already has.](<leftover-box-os-release>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the disk already is.](<leftover-box-disk>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [A tiny computer you can leave onDon't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.](<n100-mini-pc>) [PreviousSee if the computer can run a pretend computer](<leftover-box-virt>) [NextSee how big the disk already is](<leftover-box-disk>)

---

*Labthrift Markdown mirror. HTML version linked above.*
