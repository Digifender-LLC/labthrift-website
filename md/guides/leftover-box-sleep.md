# Don't let the old laptop sleep

Source: https://labthrift.com/guides/leftover-box-sleep
Markdown: https://labthrift.com/md/guides/leftover-box-sleep.md

*Notes › / › Getting started › / › Don't let the old laptop sleep*

[Notes](<./>) / [Getting started](<./#start>) / Don't let the old laptop sleep

Written 24 Aug 2026. This is a how-to, not a product card.

# Don't let the old laptop sleep

Close the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.

The old laptop goes dark, and the house stops seeing it. You close the lid to tuck it away. A minute later you cannot type on it from the couch. Pi-hole stops answering names. It is not off. It is asleep.

## Why it sleeps

Sleep is a pause, not a shutdown. The machine is still on, but it has stopped doing work. The lid is the flap over the screen. Closing it is the usual signal to sleep. Sitting idle with no keyboard can do the same. SSH, a way to type commands on it from your normal computer, over the house network, dies while it sleeps. Pi-hole dies too. The house looks for names, and nobody is home.

## Skip this if the computer is a desktop

An OptiPlex, EliteDesk, or mini PC already stays on. There is no lid to close. Skip this note. Come back only if it still sleeps on its own.

## Keep the lid shut without sleeping

This is for Debian or Ubuntu, the OS from [what OS to put on the computer](<what-os-to-pick>), on an old laptop that is now the lab. A server install has no settings app. A few commands tell Linux to ignore the lid. Ignoring the lid means closing it does not sleep the machine.

Make a folder for a small extra config file:

`sudo mkdir -p /etc/systemd/logind.conf.d`

Then write a drop-in that ignores the lid, on power or docked:

`sudo tee /etc/systemd/logind.conf.d/lid.conf <<'EOF' [Login] HandleLidSwitch=ignore HandleLidSwitchExternalPower=ignore HandleLidSwitchDocked=ignore EOF`

Reload the service that watches the lid:

`sudo systemctl restart systemd-logind`

## Stop idle sleep

A server install often has this off already. If you used a laptop image, idle sleep can still kick in after a stretch with no keyboard. Turn suspend off:

`sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target`

That is one command. It is enough.

## Leave it plugged in

Leave the charger in the wall. Closing the lid is fine once sleep is ignored. Don't bury the laptop under a sweater. Heat needs somewhere to go. Under a desk, on a shelf, with a little air, is enough. To confirm the old laptop is actually drawing wall power, see [see if the old laptop is actually plugged in](<leftover-box-plugged-in>).

## Check it worked

Close the lid. Wait a minute. [SSH from the couch](<first-ssh>) should still work, with the number from [find the computer on the house network](<find-the-leftover-box>). If it times out, it slept. Run the lid commands again, and confirm it is still plugged in.

## What next

If it does not have a useful job yet, put Pi-hole on it. That is [the first useful thing on the computer](<first-useful-service>). If ads already skip, a second copy of the house folder is [a backup of the house folder](<first-backup>). If the laptop is still on house Wi-Fi, plug a cable: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). If you tucked it under a sweater or into a closed cabinet, give it air: [don't cook the computer](<leftover-box-heat>). Confirm the old laptop is on wall power: [see if the old laptop is actually plugged in](<leftover-box-plugged-in>). If you shut a desktop down on purpose and want it back from the couch, that is [wake the computer from the house network](<wake-on-lan>). Don't buy a NAS for this.

## Skip

  * Skip this note if the computer is a desktop or a mini PC.
  * Skip a dummy HDMI plug as the first fix. The lid is the problem, not a missing screen.
  * Skip buying a new mini PC because the laptop slept.
  * Skip a cooling pad.



## Sources

[Debian: logind.conf](<https://manpages.debian.org/bookworm/systemd/logind.conf.5.en.html>). [Ubuntu: logind.conf](<https://manpages.ubuntu.com/manpages/noble/en/man5/logind.conf.5.html>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the OS, see [what OS to put on the computer](<what-os-to-pick>). For the install, see [your first weekend](<first-weekend>).

## Also on this topic

[Wake the computer from the house networkSoft-off is fine overnight. Wake the old PC from a laptop or phone on the house network so SSH and Pi-hole come back. You don't need a smart plug for this.](<wake-on-lan>) [See if the old laptop is actually plugged inBefore you trust the old laptop overnight, confirm it is drawing wall power. A dying battery is not a reason to buy a UPS.](<leftover-box-plugged-in>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [Your first weekend with the computerInstall the OS, name it, and reach it from the couch.](<first-weekend>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [PreviousYour first weekend with the computer](<first-weekend>) [NextSSH from the couch](<first-ssh>)

---

*Labthrift Markdown mirror. HTML version linked above.*
