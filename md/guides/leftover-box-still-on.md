# Is the computer still on?

Source: https://labthrift.com/guides/leftover-box-still-on
Markdown: https://labthrift.com/md/guides/leftover-box-still-on.md

*Notes › / › Getting started › / › Is the computer still on?*

[Notes](<./>) / [Getting started](<./#start>) / Is the computer still on?

Written 25 Aug 2026. This is a how-to, not a product card.

# Is the computer still on?

You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.

Ping is a knock to see if the computer answers. That is a thirty-second check from the couch. Distinct from finding the address the first time. A new router will not help.

## Skip this if SSH already works

If you can already [SSH from the couch](<first-ssh>), the computer is on. That is the whole test. You don't need this note.

## Knock from another computer

From another computer on the house network, in Terminal, knock three times:

`ping -c 3 lab`

If you used an address instead of a name, swap `lab` for the number from [find the computer on the house network](<find-the-leftover-box>). On Windows, use `ping lab` and stop it after a few replies. If ping answers, the computer is on. Then [SSH from the couch](<first-ssh>).

## If ping fails

The computer may be asleep, cooked, off the cable, or actually off. Don't start with a new router. Check these:

  * A laptop lid put it to sleep. That is [don't let the old laptop sleep](<leftover-box-sleep>).
  * The old laptop battery died because the charger was loose. That is [see if the old laptop is actually plugged in](<leftover-box-plugged-in>).
  * It is buried under clothes or in a closed cabinet. That is [don't cook the computer](<leftover-box-heat>).
  * House Wi-Fi dropped. That is [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>).
  * You shut it off last night. That is [shut down the computer without yanking the plug](<leftover-box-shutdown>). Press the power button once, then ping again.
  * It is in soft-off and you want to wake it from the couch. That is [wake the computer from the house network](<wake-on-lan>).



## A phone can tell you too

A phone on the house network still blocking ads means the computer is doing work. If ads came back, DNS may have fallen to the router. Point the house at the computer again in [the first useful thing on the computer](<first-useful-service>). If the computer is awake and banners are still back, check Pi-hole in [when ads come back, check the ad block](<leftover-box-ad-block-check>).

## What next

If it is soft-off on purpose, wake it with [wake the computer from the house network](<wake-on-lan>). If ping answered and SSH still fails, walk [when SSH won't connect](<when-ssh-wont-connect>). If ping answered and SSH works, you are done. To see how long it has been awake, not only that it answers, use [see how long the computer has been awake](<leftover-box-uptime>). When the computer is awake again, confirm the three house jobs: [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). If ping needed the number, not lab, [give the computer a name that sticks](<leftover-box-hostname>). If it has been a week, [keep the computer updated](<leftover-box-updates>). Don't buy a NAS. Don't buy a monitoring box.

## Skip

  * Skip this note if you can already SSH from the couch.
  * Skip a new router.
  * Skip a monitoring appliance, a UPS, and a new switch this pass.



## Sources

[Debian: ping](<https://manpages.debian.org/bookworm/iputils-ping/ping.8.en.html>). [Ubuntu: ping](<https://manpages.ubuntu.com/manpages/noble/en/man8/ping.8.html>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the address, see [find the computer on the house network](<find-the-leftover-box>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[See if the old laptop is actually plugged inBefore you trust the old laptop overnight, confirm it is drawing wall power. A dying battery is not a reason to buy a UPS.](<leftover-box-plugged-in>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See how long the computer has been awakeBefore you buy a UPS or a new mini PC, see how long the computer has been awake.](<leftover-box-uptime>) [Wake the computer from the house networkSoft-off is fine overnight. Wake the old PC from a laptop or phone on the house network so SSH and Pi-hole come back. You don't need a smart plug for this.](<wake-on-lan>) [Don't let the old laptop sleepClose the lid. The old laptop has to stay awake so SSH and Pi-hole keep working. A desktop can skip this note.](<leftover-box-sleep>) [A cable beats Wi-Fi for the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [When ads come back, check the ad blockThe computer is awake, but banners are back. Check that Pi-hole is still answering before you buy a mesh kit or blame the router.](<leftover-box-ad-block-check>) [PreviousDon't cook the computer](<leftover-box-heat>) [NextSee how long the computer has been awake](<leftover-box-uptime>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
