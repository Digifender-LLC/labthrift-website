# See if the old laptop is actually plugged in

Source: https://labthrift.com/guides/leftover-box-plugged-in
Markdown: https://labthrift.com/md/guides/leftover-box-plugged-in.md

*Notes › / › Getting started › / › See if the old laptop is actually plugged in*

[Notes](<./>) / [Getting started](<./#start>) / See if the old laptop is actually plugged in

Written 28 Aug 2026. This is a how-to, not a product card.

# See if the old laptop is actually plugged in

Before you trust the old laptop overnight, confirm it is drawing wall power. A dying battery is not a reason to buy a UPS.

You left the old laptop on. This morning ads are back, or SSH hangs. The lid was shut. The charger looked seated. The old laptop still ran on its own battery and died. Look first. You are not buying a house battery box for this.

## Skip until SSH works

If you cannot log in from the couch, stop. That is [SSH from the couch](<first-ssh>). This note assumes you can type commands on the computer from the couch.

## Skip if the computer is a desktop

An OptiPlex, EliteDesk, or mini PC has no laptop battery. It is on when the wall plug is in. Skip this note. Come back only if this computer is a laptop.

## What this is

An old laptop has two power stories. Wall power is the charger in the brick. The battery is the small pack inside the laptop. Linux people call that pack BAT0 or BAT1. You don't need the code. You need the check. This is not the same note as [don't let the old laptop sleep](<leftover-box-sleep>) (that is the lid) or [is the computer still on?](<leftover-box-still-on>) (that is a knock from the couch). A house battery box is later, and usually not this weekend: [you don't need a UPS yet](<leftover-box-no-ups>).

## See the power names

SSH in from the couch, then run:

`ls /sys/class/power_supply/`

You want a name that starts with BAT, often `BAT0` or `BAT1`. A desktop prints no BAT name. That is your skip. Names like AC, ADP, or ACAD are the wall plug the computer can see.

## Ask if it is charging

Swap in the BAT name you saw:

`cat /sys/class/power_supply/BAT0/status`

`Charging` or `Full` means the old laptop is on wall power. `Discharging` means it is running on the battery. That is the loose charger, the dead brick, or a battery that no longer holds a charge while unplugged.

Optional battery room, same BAT name:

`cat /sys/class/power_supply/BAT0/capacity`

That is a percent. Under about 20 and still `Discharging` means the old laptop will go dark soon. Seat the charger now. Don't buy a new battery this weekend if Charging works once the brick clicks in.

## If it says Discharging

Look at the old laptop, not a store page. Click the barrel or USB-C charger all the way in. Confirm the wall brick has a light, if it has one. Ask status again. If it flips to Charging, you are done. If it stays Discharging, try another charger you already have before you shop. An old laptop that only lives on wall power is still a lab. Leave it plugged in. That is enough.

## What next

The lid stays [don't let the old laptop sleep](<leftover-box-sleep>). Air stays [don't cook the computer](<leftover-box-heat>). If ads came back this morning, knock first: [is the computer still on?](<leftover-box-still-on>). A cable still beats Wi-Fi: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). Skip a UPS this weekend: [you don't need a UPS yet](<leftover-box-no-ups>).

## Skip

  * Skip this note if the computer is a desktop or a mini PC.
  * Skip this note if SSH from the couch does not work yet. That is [SSH from the couch](<first-ssh>).
  * Skip a new laptop battery this weekend if Charging works once the brick is seated.
  * Skip a UPS for this. That later skip is [you don't need a UPS yet](<leftover-box-no-ups>).
  * Skip a new mini PC because the charger was loose once.



## Sources

[Debian: ls](<https://manpages.debian.org/bookworm/coreutils/ls.1.en.html>). [Ubuntu: ls](<https://manpages.ubuntu.com/manpages/noble/en/man1/ls.1.html>). [Debian: cat](<https://manpages.debian.org/bookworm/coreutils/cat.1.en.html>). [Linux kernel: power supply class](<https://www.kernel.org/doc/html/latest/power/power_supply_class.html>) (`/sys/class/power_supply`). Official pages only. For the lid, see [don't let the old laptop sleep](<leftover-box-sleep>). For the morning knock, see [is the computer still on?](<leftover-box-still-on>). For a house battery box, see [you don't need a UPS yet](<leftover-box-no-ups>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Don't cook the computerThe computer stays on. It needs air. A laptop under a pile of clothes will cook. Skip this if the computer is a desktop with vents clear.](<leftover-box-heat>) [A cable beats Wi-Fi for the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [You don't need a UPS yetThe computer can sit on a house outlet. A blink of the lights is a reboot. Skip a battery box this weekend.](<leftover-box-no-ups>) [PreviousDon't let the old laptop sleep](<leftover-box-sleep>) [NextA cable beats Wi-Fi for the computer](<leftover-box-ethernet>)

---

*Labthrift Markdown mirror. HTML version linked above.*
