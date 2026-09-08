# SSH from the couch

Source: https://labthrift.com/guides/first-ssh
Markdown: https://labthrift.com/md/guides/first-ssh.md

*Notes › / › Getting started › / › SSH from the couch*

[Notes](<./>) / [Getting started](<./#start>) / SSH from the couch

[Getting started](<./#start>) · **5 of 9**

Written 24 Aug 2026. This is a how-to, not a product card.

# SSH from the couch

Type commands on the old PC from your laptop, on the house network. Password login first. Don't open this to the internet.

You installed the OS on the computer. The next job is to reach it without sitting in front of it. That is SSH. The short version is already in [your first weekend](<first-weekend>). This page is for when that connect step is fussy. You need its number first. That is [find it on the house network](<find-the-leftover-box>).

## What this is

SSH, a way to type commands on that computer from your normal one, over the house network. Same idea as sitting at its keyboard, minus the closet.

This assumes Debian or Ubuntu Server, the OS from [what OS to put on it](<what-os-to-pick>), installed as in [your first weekend](<first-weekend>), with the SSH server checkbox on. Ubuntu Server offers that checkbox. If you skipped it, plug a screen in once and run:

`sudo apt install openssh-server`

## The command

On Windows, use Windows Terminal or PowerShell. On a Mac or Linux, use Terminal. The command is the same:

`ssh you@that-address`

Swap `you` for the username you created at install, and `that-address` for the number from the first weekend. That number is on the router device list, or from `hostname -I` on the computer.

## Trust the box, then the password

The first time, it asks to trust this machine. That is the host key, a fingerprint of this computer. That is normal on a house network. Say yes. Next time it will not ask, unless you reinstalled the OS.

Then it asks for that computer's password. Type it. Nothing will show as you type. That is normal. Press Enter.

You should see a prompt on that computer. You are in. Try `hostname` so you can see it is the right machine. Type `exit` to leave.

## Two usual failures

What you see| What it usually means  
---|---  
Connection refused, or timed out| The computer is off, the address is wrong, or openssh-server is not installed.  
Permission denied| Wrong user or wrong password. The user is the one you created at install, not Administrator, not pi unless you named it pi.  
  
For connection refused, confirm the address. Ping is optional. Plug in a screen if you have to, install openssh-server, try again. A longer walk for hangs, refused, Permission denied, and host-key scares is [when SSH won't connect](<when-ssh-wont-connect>). Ubuntu has a firewall called ufw. If ufw is on, allow SSH with `sudo ufw allow OpenSSH`. When SSH already works and you want to turn it on intentionally, follow [turn on a simple firewall without locking yourself out](<leftover-box-ufw>).

## Keep it on the house network

Don't forward port 22 on the router. SSH is for the house network. If you need this from a coffee shop, that is a later VPN note, not a hole in the firewall.

When password login has worked for a week, put a key on the laptop so you stop typing that password every time. That is [log in with a key, not the password every time](<leftover-box-ssh-keys>). If SSH used to work and now says the computer looks different after a wipe, that is [when SSH says the computer looks different](<leftover-box-ssh-host-key>).

## What next

SSH still fails after the table above? [When SSH won't connect](<when-ssh-wont-connect>). Once SSH works from a laptop, you can do the same from a phone on house Wi-Fi: [SSH from a phone](<ssh-from-phone>). Then [change the login password](<leftover-box-change-password>) before you lean on that login. When password login has been boring, [log in with a key, not the password every time](<leftover-box-ssh-keys>). The first useful thing on this computer is still Pi-hole, then a file share. That is [the first useful thing](<first-useful-service>). If a forum told you to open a port, that is [keep the computer on the house network](<leftover-box-house-network>).


Optional: note the hostname and how you reach it in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip

  * Skip exposing port 22 to the internet.
  * Skip changing the SSH port on day one.
  * Skip fail2ban on day one.
  * Skip Tailscale or WireGuard until you actually leave the house.
  * Skip buying a KVM for this.
  * Skip root login over SSH.



## Sources

[Ubuntu Server: OpenSSH server](<https://ubuntu.com/server/docs/how-to/security/openssh-server/>). [Debian: ssh man page](<https://manpages.debian.org/bookworm/openssh-client/ssh.1.en.html>). Official pages only. For the install, see [your first weekend](<first-weekend>). For the OS choice, see [what OS to put on it](<what-os-to-pick>). Next job: [the first useful thing](<first-useful-service>).

## Also on this topic

[When SSH won't connectSSH hangs, says connection refused, or Permission denied. Check the computer is on, confirm the address, then the user and password. You don't need a new router or a KVM.](<when-ssh-wont-connect>) [When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old host key. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [SSH from a phoneType commands on the old PC from an iPhone or Android on house Wi-Fi. Password login first. Don't open SSH to the internet.](<ssh-from-phone>) [Your first weekendInstall the OS, name it, and reach it from the couch.](<first-weekend>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [The first useful thingPut a house-wide ad block on that computer. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [PreviousFind it on the house network](<find-the-leftover-box>) [NextThe first useful thing](<first-useful-service>)

---

*Labthrift Markdown mirror. HTML version linked above.*
