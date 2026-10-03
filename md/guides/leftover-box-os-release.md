# See which OS the computer is already running

Source: https://labthrift.com/guides/leftover-box-os-release
Markdown: https://labthrift.com/md/guides/leftover-box-os-release.md

*Notes › / › Getting started › / › See which OS the computer is already running*

[Notes](<./>) / [Getting started](<./#start>) / See which OS the computer is already running

Written 27 Aug 2026. This is a how-to, not a product card.

# See which OS the computer is already running

Before you reinstall or buy a tiny computer, check which OS the computer already has.

An OS is the software the computer boots into. Windows, macOS, Debian, Ubuntu. [What OS to put on the computer](<what-os-to-pick>) is the pick before you install. This note is the look after: what is already on it. Don't wipe a working computer because you forgot the name. Don't buy an N100 this morning because you are not sure.

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). If you have not installed anything yet, start with [what OS to put on the computer](<what-os-to-pick>), then [your first weekend with the computer](<first-weekend>). This note assumes you can log in from the couch, or sit at the keyboard.

## What this is

A look, not a shopping trip. You are reading a small file the computer already keeps, so you know the name of the OS. You are not installing a second OS. You are not buying a tiny computer. You are not wiping the disk tonight. Kernel name is `uname`, not distro name. That is [see kernel name and architecture](<leftover-box-uname>). `printenv` is HOME and PATH (login environment), not distro name. That is [see HOME and PATH](<leftover-box-printenv>).

## Ask which OS it is

SSH in from the couch, or sit at the keyboard, then ask:

`cat /etc/os-release`

Point at the `PRETTY_NAME=` line. That is the name you can read. It often looks like `Debian GNU/Linux 12 (bookworm)` or `Ubuntu 24.04 LTS`. Debian or Ubuntu means this note applies. Weekly fixes from here are [keep the computer updated](<leftover-box-updates>).

## Optional second look

If you want one spoken line instead of the whole file:

`hostnamectl`

Point at `Operating System`. That is the same name, in a shorter print. The name on the house network is a different line. That name is [give the computer a name that sticks](<leftover-box-hostname>). Keep this light. Don't install extra tools for this look.

## If the file is missing

No `/etc/os-release` usually means this computer is still Windows, or it is not a Debian-family Linux. Don't wipe it this morning. If you still use that laptop as a laptop, leave the OS it has. That pick is [what OS to put on the computer](<what-os-to-pick>). A tiny computer is later: [a tiny computer you can leave on](<n100-mini-pc>), when the computer is actually in the way.

## If it already says Proxmox

You skipped ahead. You don't need to reinstall Debian tonight to “do it right.” House ad block and a file share can still live on that computer. The VM idea stays [what a VM is, and when you don't need one](<what-is-a-vm>). Whether the chip can even do VMs is [see if the computer can run a pretend computer](<leftover-box-virt>).

## What next

If the name is Debian or Ubuntu, leave it. Weekly habit: [keep the computer updated](<leftover-box-updates>). Worker count before you shop: [see how many workers the computer already has](<leftover-box-cpu>). The first rule stays [start with what you already have](<start-with-what-you-have>). The later buy is [a tiny computer you can leave on](<n100-mini-pc>), when you actually need it.

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip kernel name as tonight. Uname is kernel, not distro name: [see kernel name and architecture](<leftover-box-uname>).
  * Skip `printenv` as tonight. Printenv is HOME and PATH, not distro name: [see HOME and PATH](<leftover-box-printenv>).
  * Skip wiping a working computer because you forgot the OS name.
  * Skip buying an N100 because you were not sure which OS was on it.
  * Skip a NAS for this look.
  * Skip Proxmox tonight if the computer already has Debian or Ubuntu. That is [what a VM is, and when you don't need one](<what-is-a-vm>).



## Sources

[Debian: os-release](<https://manpages.debian.org/bookworm/systemd/os-release.5.en.html>). [Ubuntu: os-release](<https://manpages.ubuntu.com/manpages/noble/en/man5/os-release.5.html>). [Debian: hostnamectl](<https://manpages.debian.org/bookworm/systemd/hostnamectl.1.en.html>). Official pages only. For the pick before you install, see [what OS to put on the computer](<what-os-to-pick>). For the name on the house network, see [give the computer a name that sticks](<leftover-box-hostname>). For weekly fixes, see [keep the computer updated](<leftover-box-updates>). For the first rule, see [start with what you already have](<start-with-what-you-have>). A tiny computer is later: [a tiny computer you can leave on](<n100-mini-pc>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[What OS to put on the computerDebian or Ubuntu Server if it is dedicated. Leave Windows if you still use the laptop.](<what-os-to-pick>) [Give the computer a name that sticksPing and SSH are easier if the computer has a short name. lab works. Set it so the name survives a reboot.](<leftover-box-hostname>) [Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs. Skip this until next week if you just finished first weekend.](<leftover-box-updates>) [See how many workers the computer already hasBefore you buy a tiny computer, check how many workers the computer already has.](<leftover-box-cpu>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousGive the computer a name that sticks](<leftover-box-hostname>) [NextSee how many workers the computer already has](<leftover-box-cpu>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
