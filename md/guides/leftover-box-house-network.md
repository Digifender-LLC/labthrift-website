# Keep the computer on the house network

Source: https://labthrift.com/guides/leftover-box-house-network
Markdown: https://labthrift.com/md/guides/leftover-box-house-network.md

*Notes › / › Getting started › / › Keep the computer on the house network*

[Notes](<./>) / [Getting started](<./#start>) / Keep the computer on the house network

Written 25 Aug 2026. This is a how-to, not a product card.

# Keep the computer on the house network

SSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.

The computer should not have a public address. A public address is a number the whole internet can knock on. The computer already has a house number. That is enough.

## Skip this if you never opened the router

If you never opened the router settings, you already did this. Plugging a cable into a LAN port, not WAN, is [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). [SSH from the couch](<first-ssh>) already says don't forward port 22. Come back only if a forum told you to open a port, or to put the computer in the DMZ.

## What a port forward is

A port forward is a hole in the house router that lets the whole internet knock on the computer. The usual bad advice is "forward 22 so I can SSH from work." Don't do that on a computer with a password login. Anyone on the internet can try that password. SSH from the couch still works without the hole. DMZ is worse: it puts the whole computer on the open internet, not just one port.

## A thirty-second check

Open the house router page. The address is often printed on the sticker: `192.168.0.1` or `192.168.1.1`. Look for Port forwarding, Virtual server, or DMZ. If those lists are empty, you are done. You don't need a command for this.

## If you already forwarded 22

Turn that rule off. Then SSH still works from the couch, on house Wi-Fi or a cable. That is [SSH from the couch](<first-ssh>), with the number from [find the computer on the house network](<find-the-leftover-box>).

## Remote access can wait

Remote access is a later problem. This computer is for the house. A VPN or a "cloud tunnel" is later, and usually never.

## What next

If SSH keeps needing a new number after a reboot, [keep the computer on the same number](<leftover-box-dhcp-reservation>). If the computer is still on Wi-Fi, plug a cable: [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>). If you are done for the night, [shut down the computer without yanking the plug](<leftover-box-shutdown>). Don't buy a NAS. Don't buy a new router.

## Skip

  * Skip this note if you never opened the router settings.
  * Skip forwarding port 22.
  * Skip putting the computer in the DMZ.
  * Skip a new router, a firewall appliance, and a VPN this pass.



## Sources

[Ubuntu Server: OpenSSH server](<https://ubuntu.com/server/docs/how-to/security/openssh-server/>). [Debian: ssh man page](<https://manpages.debian.org/bookworm/openssh-client/ssh.1.en.html>). Official pages only. For the computer, see [start with what you already have](<start-with-what-you-have>). For the login, see [SSH from the couch](<first-ssh>). For the cable, see [a cable beats Wi-Fi for the computer](<leftover-box-ethernet>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [A cable beats Wi-Fi for the computerOnce the computer is doing real work, plug it into the router with a cable. House Wi-Fi can wait. Skip this if it is already on a cable.](<leftover-box-ethernet>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [Shut down the computer without yanking the plugWhen you're done for the night, shut it down and let it finish writing files before it powers off. Don't yank the cord. Skip this if you only need a reboot after updates.](<leftover-box-shutdown>) [PreviousA cable beats Wi-Fi for the computer](<leftover-box-ethernet>) [NextShut down the computer without yanking the plug](<leftover-box-shutdown>)

---

*Labthrift Markdown mirror. HTML version linked above.*
