# See how many workers the computer already has

Source: https://labthrift.com/guides/leftover-box-cpu
Markdown: https://labthrift.com/md/guides/leftover-box-cpu.md

*Notes › / › Small computers › / › See how many workers the computer already has*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / See how many workers the computer already has

Written 27 Aug 2026. This is a how-to, not a product card.

# See how many workers the computer already has

Before you buy a tiny computer, check how many workers the computer already has.

The computer already has workers. A worker is one CPU core, the computer's ability to do more than one job at once. House ad block and a file share barely need two. Memory room is a different look: [see if the computer still has free memory](<leftover-box-free-memory>). A busy program is [see what is keeping the computer busy](<leftover-box-whats-busy>). You don't need an N100 this morning just because the laptop is old.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after the computer is doing real work, before you shop: [start with what you already have](<start-with-what-you-have>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. You are counting workers on the computer you already have, before you buy a tiny computer. Two workers still run the first lab. Four is plenty. You are not buying an N100, an N150, or a Protectli tonight.

## Ask how many workers

SSH in from the couch, then run:

`nproc`

`nproc` prints one number. That number is how many workers the computer can use right now. 2 is an old laptop or a small office box. 4 or more is a typical old desktop. House ad block plus a file share is fine on 2. Don't buy a mini PC for a 2.

## Optional chip name

If you want the computer's chip name, not just the count:

`lscpu | grep 'Model name'`

That line is the chip name. Enough to see it is not a 15-year-old box you should retire tonight. Keep this light. Don't shop from a model string. Don't install extra tools for this look.

## If the number is small

Two workers still do the first lab. If the computer feels slow, check [see if the computer still has free memory](<leftover-box-free-memory>) and [see what is keeping the computer busy](<leftover-box-whats-busy>) before you shop. RAM and one busy copy squeeze an old laptop more often than a low worker count. Whether the computer can run a pretend computer is [see if the computer can run a pretend computer](<leftover-box-virt>). A later tiny computer is [a tiny computer you can leave on](<n100-mini-pc>), when the computer is actually in the way. Skip buying one this morning because `nproc` printed 2.

## What next

Total memory size is [see how much memory the computer already has](<leftover-box-ram>). Memory room stays [see if the computer still has free memory](<leftover-box-free-memory>). A busy program stays [see what is keeping the computer busy](<leftover-box-whats-busy>). The first rule stays [start with what you already have](<start-with-what-you-have>). The VM flag look is [see if the computer can run a pretend computer](<leftover-box-virt>). The computer name is [see what computer you already have](<leftover-box-model>). The disk size is [see how big the disk already is](<leftover-box-disk>). The later buy is [a tiny computer you can leave on](<n100-mini-pc>), when you actually need it.

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip buying an N100 because `nproc` printed 2.
  * Skip stacking a movie library, a VM, and Pi-hole on two workers, then blaming the computer.
  * Skip a NAS for this look.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: nproc](<https://manpages.debian.org/bookworm/coreutils/nproc.1.en.html>). [Ubuntu: nproc](<https://manpages.ubuntu.com/manpages/noble/en/man1/nproc.1.html>). [Debian: lscpu](<https://manpages.debian.org/bookworm/util-linux/lscpu.1.en.html>). [Ubuntu: lscpu](<https://manpages.ubuntu.com/manpages/noble/en/man1/lscpu.1.html>). Official pages only. For memory room, see [see if the computer still has free memory](<leftover-box-free-memory>). For a busy program, see [see what is keeping the computer busy](<leftover-box-whats-busy>). For the first rule, see [start with what you already have](<start-with-what-you-have>). A tiny computer is later: [a tiny computer you can leave on](<n100-mini-pc>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [See if the computer still has free memoryThe computer feels slow. Check free memory before you buy a new mini PC.](<leftover-box-free-memory>) [See what is keeping the computer busyThe computer feels slow. Check which program is using the CPU before you buy a new mini PC.](<leftover-box-whats-busy>) [See which OS the computer is already runningBefore you reinstall or buy a tiny computer, check which OS the computer already has.](<leftover-box-os-release>) [What OS to put on the computerDebian or Ubuntu Server if it is dedicated. Leave Windows if you still use the laptop.](<what-os-to-pick>) [See if the computer can run a pretend computerBefore you buy a tiny computer for Proxmox, check whether the computer already has the CPU feature for VMs.](<leftover-box-virt>) [A tiny computer you can leave onDon't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.](<n100-mini-pc>) [PreviousSee which OS the computer is already running](<leftover-box-os-release>) [NextSee how much memory the computer already has](<leftover-box-ram>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
