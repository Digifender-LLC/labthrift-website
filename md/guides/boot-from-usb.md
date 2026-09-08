# Boot the old PC from the USB stick

Source: https://labthrift.com/guides/boot-from-usb
Markdown: https://labthrift.com/md/guides/boot-from-usb.md

*Notes › / › Getting started › / › Boot the old PC from the USB stick*

[Notes](<./>) / [Getting started](<./#start>) / Boot the old PC from the USB stick

Written 4 Sep 2026. This is a how-to, not a product card.

# Boot the old PC from the USB stick

Plug in the installer stick, open the one-time boot menu, and pick the USB. Dell F12, HP Esc then F9, Lenovo F12. Don't dig through every BIOS screen tonight.

Haven't written the stick yet? Start with [make a boot USB for the install](<make-boot-usb>). Still picking Debian or Ubuntu Server? See [what OS to put on it](<what-os-to-pick>). This note is only the boot step: get the old PC to start from that stick once, then the installer takes over.


Optional: note which PC booted the stick in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip until the stick is ready

If Etcher or Rufus has not finished writing the ISO, stop. A half-written stick fails quietly. You need a keyboard and a screen on the old PC for this step. A headless Marketplace box still needs a monitor for the first install. Skip changing the permanent boot order tonight. The one-time boot menu is enough.

## What this is

Every PC can start from the internal disk, or from a USB stick, for one power-on. The boot menu is that short list. You pick the USB, the installer loads, and next reboot goes back to the internal disk unless you install. You are not rewriting the BIOS for fun.

## What you need

  * The USB stick you already flashed
  * A keyboard plugged into the old PC
  * A screen (HDMI, DisplayPort, or the laptop lid)
  * About two minutes of tapping a key at power-on



Marketplace Windows still on the disk? Fine for this step. Wipe during install: [wipe a Marketplace PC before you install](<wipe-marketplace-pc>). Leave house ethernet unplugged until the wipe or fresh install is done if that box still has someone else's Windows.

## Plug the stick in first

Power the computer off. Plug the stick into a USB port on the back of a desktop when you can — those ports are usually simpler. On a laptop, try a USB-A port on the machine itself before a hub. Then power on and start tapping the brand key below. Fast Boot can skip past a slow tap, so mash early and often.

## One-time boot keys by brand

Pick the row that matches the badge on the case. Keys vary a little by year. If the first key does nothing, try the backup, or open Setup with Del / F2 and look for a Boot Menu / Boot Override line.

Brand| Boot menu| Notes  
---|---|---  
Dell (OptiPlex, Latitude)| F12| Common on Marketplace office PCs. Pick the USB UEFI entry when you see both.  
HP (EliteDesk, ProDesk, ProBook)| Esc, then F9| Esc opens a menu. F9 is Boot Device Options. Some older boxes use F9 alone.  
Lenovo (ThinkCentre, ThinkPad)| F12| Some ThinkPads want Enter first, then F12. Novo button on tiny desktops can open the same menu.  
ASUS| Esc| F8 on some boards. Setup is often Del or F2.  
Acer| F12| F12 may need enabling once in Setup. Setup is usually F2.  
Microsoft Surface| Volume-down + power| Hold volume-down, press power, keep holding volume until the boot screen. USB-C stick or hub that the Surface likes.  
Other / unknown| Esc, F10, F11, or F12| Watch the splash screen. It often prints the key for one second. Setup (Del / F2) has a Boot tab if the menu never appears.  
  
## Pick the USB line

In the list you want the stick, not the internal hard disk, not the network boot (PXE / IPv4), not a second empty USB. Names look like `UEFI: Kingston DataTraveler`, `USB HDD`, or the stick brand. Prefer a line that says UEFI when both UEFI and Legacy / USB appear. Arrow keys, Enter.

Ubuntu Server or Debian should show their installer menu in under a minute. That is success. Continue the install weekend from there: [your first weekend](<first-weekend>).

## If the stick is missing from the list

  * Power off. Move the stick to another port. Try a USB 2 port if the back has blue and black ports — black is often USB 2.
  * Reflash with Etcher if the stick never worked on any PC. That path is [make a boot USB for the install](<make-boot-usb>).
  * Disable Fast Boot / Quick Boot in Setup for one try so the keyboard is awake early.
  * On a few office PCs, USB boot is turned off in Setup under Boot or Security. Turn USB boot on. Leave Secure Boot alone at first — official Ubuntu Server and Debian installers usually boot with it on.



## If it boots, then says the disk is locked or Secure Boot blocked it

Official Ubuntu Server and current Debian live/installer images are signed for Secure Boot on most house PCs. A random remix ISO may not be. Re-download from the official pages linked in [make a boot USB](<make-boot-usb>). Turning Secure Boot off is a last resort for tonight, not homework. If Windows BitLocker asks for a recovery key on a Marketplace box, you are not unlocking their Windows — wipe the whole disk in the installer instead: [wipe a Marketplace PC before you install](<wipe-marketplace-pc>).

## What this is not

This is not a full BIOS rewrite. It is not a reason to buy a new mini PC because F12 felt scary. It is not Ventoy homework. It is one power-on from the stick you already made.

## What next

Installer on screen: keep going with [your first weekend](<first-weekend>) (name, user, SSH checkbox, ethernet after install). Marketplace disk still full of old Windows? Wipe during that install: [wipe a Marketplace PC before you install](<wipe-marketplace-pc>). Stick not written yet? [Make a boot USB for the install](<make-boot-usb>).

## Skip

  * Skip rewriting the permanent boot order when the one-time menu works.
  * Skip buying a new USB stick before you try a second port.
  * Skip turning Secure Boot off before you try an official ISO.
  * Skip dual-boot with leftover Marketplace Windows.
  * Skip this if the old PC already boots the installer without help.



## Sources

[Ubuntu: install Ubuntu Server](<https://ubuntu.com/tutorials/install-ubuntu-server>). [Debian: booting the installer on amd64](<https://www.debian.org/releases/stable/amd64/ch03s06.en.html>). [Dell: one-time boot menu](<https://www.dell.com/support/kbdoc/en-us/000125184/how-to-use-the-one-time-boot-menu-on-a-dell-pc>). Brand support pages only for the key chart. For the flash step, see [make a boot USB for the install](<make-boot-usb>). For the weekend install, see [your first weekend](<first-weekend>).

## Also on this topic

[Make a boot USB for the installWrite Ubuntu Server or Debian onto a USB stick so the old PC can boot the installer. Use Etcher or Rufus. Don't drag the ISO into a folder.](<make-boot-usb>) [Wipe a Marketplace PC before you installA used OptiPlex may still have the last owner's Windows and logins. Wipe the disk with the installer before you plug it into the house network.](<wipe-marketplace-pc>) [Your first weekendInstall the OS, name it, and reach it from the couch. Don't buy anything this weekend.](<first-weekend>) [What OS to put on itDebian or Ubuntu Server if you can dedicate the old PC. Leave Windows if you still use the laptop as a laptop.](<what-os-to-pick>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousMake a boot USB for the install](<make-boot-usb>) [NextYour first weekend](<first-weekend>)

---

*Labthrift Markdown mirror. HTML version linked above.*
