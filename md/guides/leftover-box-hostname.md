# Give the computer a name that sticks

Source: https://labthrift.com/guides/leftover-box-hostname
Markdown: https://labthrift.com/md/guides/leftover-box-hostname.md

*Notes › / › Getting started › / › Give the computer a name that sticks*

[Notes](<./>) / [Getting started](<./#start>) / Give the computer a name that sticks

Written 25 Aug 2026. This is a how-to, not a product card.

# Give the computer a name that sticks

Ping and SSH are easier if the computer has a short name. lab works. Set it so the name survives a reboot.

closet or office work too. Letters and numbers, no spaces. A hostname is the computer's name on the house network. [Is the computer still on?](<leftover-box-still-on>) tells you to ping that name. [Your first weekend](<first-weekend>) names it during install, then people forget. This note is hostnamectl, the command that writes the name so it comes back after a reboot.

## Skip this if the name is already good

On the computer, ask for the name:

`hostname`

If it already prints lab, or a name you recognize and like, you are done. You don't need this note.

## Set the name so it survives a reboot

On Debian or Ubuntu, as in [what OS to put on the computer](<what-os-to-pick>), set the name with hostnamectl. That writes the computer's name so it comes back after a reboot.

`sudo hostnamectl set-hostname lab`

Swap lab for closet or office if you picked one of those. Then log out and SSH back, or reboot. Reboot lives on [shut down the computer without yanking the plug](<leftover-box-shutdown>). If you were already rebooting after [keep the computer updated](<leftover-box-updates>), that reboot is enough.

## Check from the couch

From another computer on the house network, knock three times. That is [is the computer still on?](<leftover-box-still-on>):

`ping -c 3 lab`

If ping still needs the number, the house router has not learned the name yet. Use the address from [find the computer on the house network](<find-the-leftover-box>). A new router will not help. Some phones find `lab.local`. Some don't. Don't buy a Pi-hole for this.

## What next

If ping lab works, you are done naming. If ads came back this morning, or SSH hangs, that is [is the computer still on?](<leftover-box-still-on>). If the computer is still on Wi-Fi, plug a cable: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). Don't buy a NAS.

## Skip

  * Skip this note if `hostname` already prints lab or a name you like.
  * Skip a new router.
  * Skip buying a Pi-hole just to make lab resolve.



## Sources

[Debian: hostnamectl](<https://manpages.debian.org/bookworm/systemd/hostnamectl.1.en.html>). [Ubuntu: hostnamectl](<https://manpages.ubuntu.com/manpages/noble/en/man1/hostnamectl.1.html>). [Debian: hostname](<https://manpages.debian.org/bookworm/hostname/hostname.1.en.html>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the first name, see [your first weekend](<first-weekend>). For ping, see [is the computer still on?](<leftover-box-still-on>).

## Also on this topic

[When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old ID. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [Your first weekend with the computerInstall the OS, name it, and reach it from the couch.](<first-weekend>) [See which OS the computer is already runningBefore you reinstall or buy a tiny computer, check which OS the computer already has.](<leftover-box-os-release>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousSee how long the computer has been awake](<leftover-box-uptime>) [NextSee which OS the computer is already running](<leftover-box-os-release>)

---

*Labthrift Markdown mirror. HTML version linked above.*
