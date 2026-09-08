# Wipe a Marketplace PC before you install

Source: https://labthrift.com/guides/wipe-marketplace-pc
Markdown: https://labthrift.com/md/guides/wipe-marketplace-pc.md

*Notes › / › Getting started › / › Wipe a Marketplace PC before you install*

[Notes](<./>) / [Getting started](<./#start>) / Wipe a Marketplace PC before you install

Written 3 Sep 2026. This is a how-to, not a product card.

# Wipe a Marketplace PC before you install

A used OptiPlex may still have the last owner's Windows and logins. Wipe the disk with the installer before you plug it into the house network.

Haven't found a computer yet? Start with [what you already have](<start-with-what-you-have>). Haven't chosen an OS? See [what OS to put on it](<what-os-to-pick>). The install weekend itself is [your first weekend](<first-weekend>). This note is the wipe before that weekend.


Optional: note which Marketplace box you wiped in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip until you have a used PC to dedicate

If you don't have a used computer you plan to leave on — Marketplace, buy-nothing, or a closet OptiPlex — stop. That is [start with what you already have](<start-with-what-you-have>). Skip this note if the machine is still your daily Windows laptop. Leaving Windows on a daily driver is [what OS to put on it](<what-os-to-pick>), not a wipe.

## What this is

Wiping means the Ubuntu Server or Debian installer overwrites the whole internal disk. Old Windows, old accounts, and old files go away. You don't need DBAN or a shredder for a home-lab box you keep. The installer is enough.

## Don't plug the house cable first

Leave ethernet unplugged. Skip joining house Wi-Fi. Do this until the fresh OS is on. An old Windows with someone else's accounts does not belong on the house network, even for "just a look."

## Copy off anything you still want

Rare on a Marketplace box, but if there are photos or papers you care about, copy them to a USB stick first. If the computer is empty, skip this step.

## Make the USB installer

Download [Ubuntu Server](<https://ubuntu.com/download/server>) or [Debian](<https://www.debian.org/download>) from the official site only. An 8 GB stick is enough.

Write the ISO with [balenaEtcher](<https://etcher.balena.io/>) or Ventoy. On Windows, Rufus is fine if you already have it. Flash the stick. Don't drag the ISO onto it in Explorer. That does not make a bootable installer. Full stick walkthrough: [make a boot USB for the install](<make-boot-usb>).

## Boot from the USB

Power on and tap F12, F10, or Esc (Dell often uses F12). Pick the USB stick from the boot menu. Enter the installer.

## Wipe during install

Pick the whole internal disk. Use guided install / use entire disk (or erase disk). One disk is fine. Don't dual-boot with leftover Windows on a Marketplace box. Create your own user. Enable the OpenSSH server checkbox if Ubuntu offers it.

## After install

Remove the USB stick. Reboot into the new OS. Then plug ethernet. Continue with [your first weekend](<first-weekend>) — find the address, SSH from the couch, update, leave it on. If you already finished that shape, next is [find it on the house network](<find-the-leftover-box>) and [SSH from the couch](<first-ssh>).

## If you already installed Linux but left old accounts

That look is [see if the computer still has old login accounts](<leftover-box-other-accounts>) — locking leftovers. Prefer a wipe for a Marketplace box when you can.

## What this is not

This is not a reason to buy a new N100. It is not a secure-erase lecture for selling the disk. It is not BitLocker recovery theater. If the disk is BitLocker-locked and you have no key, the installer still overwrites when you wipe the whole disk.

## What next

Need the boot menu keys to start the installer? [Boot the old PC from the USB stick](<boot-from-usb>). After the wipe, do the install weekend: [your first weekend](<first-weekend>). If you still need to pick Debian or Ubuntu Server, see [what OS to put on it](<what-os-to-pick>). Once it is on the house network, [find it](<find-the-leftover-box>), then [SSH from the couch](<first-ssh>).

## Skip

  * Skip plugging into the house network before the wipe.
  * Skip keeping dual-boot Windows on a Marketplace box.
  * Skip DBAN or a shredder for a computer you keep.
  * Skip buying a new mini PC because the wipe felt scary.
  * Skip this if it is still your daily laptop.



## Sources

[Ubuntu Server download](<https://ubuntu.com/download/server>). [Debian download](<https://www.debian.org/download>). [balenaEtcher](<https://etcher.balena.io/>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the OS choice, see [what OS to put on it](<what-os-to-pick>). For the install weekend, see [your first weekend](<first-weekend>).

## Also on this topic

[Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [What OS to put on itDebian or Ubuntu Server if you can dedicate the old PC. Leave Windows if you still use the laptop as a laptop.](<what-os-to-pick>) [Your first weekendInstall the OS, name it, and reach it from the couch.](<first-weekend>) [Make a boot USB for the installWrite Ubuntu Server or Debian onto a USB stick so the old PC can boot the installer. Use Etcher or Rufus. Don't drag the ISO into a folder.](<make-boot-usb>) [Boot the old PC from the USB stickPlug in the installer stick, open the one-time boot menu, and pick the USB. Dell F12, HP Esc then F9, Lenovo F12. Don't dig through every BIOS screen tonight.](<boot-from-usb>) [See if the computer still has old login accountsBefore you leave a Marketplace box on the house network, look at who else can still log in. You don't need extra login software for this.](<leftover-box-other-accounts>) [When used office gear is a giftA cheap used switch can be perfect if it is quiet. A trap if it was built for a data-center aisle.](<used-vs-new>) [PreviousStart with what you already have](<start-with-what-you-have>) [NextYour first weekend](<first-weekend>)

---

*Labthrift Markdown mirror. HTML version linked above.*
