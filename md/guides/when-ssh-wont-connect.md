# When SSH won't connect

Source: https://labthrift.com/guides/when-ssh-wont-connect
Markdown: https://labthrift.com/md/guides/when-ssh-wont-connect.md

*Notes › / › Getting started › / › When SSH won't connect*

[Notes](<./>) / [Getting started](<./#start>) / When SSH won't connect

Written 4 Sep 2026. This is a how-to, not a product card.

# When SSH won't connect

SSH hangs, says connection refused, or Permission denied. Check the computer is on, confirm the address, then the user and password. You don't need a new router or a KVM.

Haven't reached it from the couch yet? Start with [SSH from the couch](<first-ssh>). Need the number first? [Find it on the house network](<find-the-leftover-box>). This note is only for when the connect step fails, or used to work and now doesn't.

## Skip until you have a real error

Copy the exact line from the terminal. "Connection refused," "Connection timed out," "Permission denied," and "REMOTE HOST IDENTIFICATION HAS CHANGED" are different fixes. Don't buy anything for a typo.

## What this is

SSH needs three things that still match: the computer awake on the house network, the address you type, and the user plus password (or key) from install. One of those usually drifted. Soft-off, a new DHCP lease, a wrong username, or a wiped OS that changed the host key. The walk below is order of cheap checks.

## Step 1: is the computer awake?

Power light. Fan. Screen if it has one. If it looks asleep or dead, start with [is the computer still on?](<leftover-box-still-on>). Soft-off on purpose? Wake it from the house network: [wake the computer from the house network](<wake-on-lan>). A laptop that slept with the lid closed needs [don't let the laptop sleep](<leftover-box-sleep>) before you chase SSH bugs.

## Step 2: confirm the address

Don't reuse last week's number from memory. Look it up again: [find it on the house network](<find-the-leftover-box>). Write it down. Try:

`ssh youruser@192.168.1.50`

Use the real user and the number you just found, not that example. If the ISP swapped the gateway, the old lease is gone: [when the ISP swaps your router](<when-isp-swaps-router>). If Nest will not reserve DHCP, pin the number on the computer: [give the computer a fixed address when the router won't](<fixed-address-on-pc>).

## Step 3: match the error to a fix

What you see| What to do  
---|---  
Connection timed out| Wrong address, wrong Wi-Fi (guest vs house), or the computer is off. Confirm Step 1 and Step 2. Stay on the main house network, not guest Wi-Fi.  
Connection refused| The computer answered, but nothing is listening on port 22. Plug in a screen once and install the server: `sudo apt install openssh-server`. If ufw is on, allow SSH: `sudo ufw allow OpenSSH`. Intentional firewall later: [turn on a simple firewall without locking yourself out](<leftover-box-ufw>).  
Permission denied| Wrong user or wrong password. Use the account from install, not Administrator, not root, not pi unless you named it pi. Caps Lock off. Nothing shows as you type the password. That is normal.  
Host key / identification has changed| You reinstalled, or the laptop still remembers an old fingerprint. Clear that memory: [when SSH says the computer looks different](<leftover-box-ssh-host-key>).  
  
## Step 4: same Wi-Fi, same house

Your laptop or phone must be on the main house Wi-Fi (or a cable into the same router). Guest Wi-Fi often cannot see the computer on purpose. VPN apps on the phone can hide the house LAN. Turn the VPN off for this test. Phone SSH is the same rules: [SSH from a phone](<ssh-from-phone>).

## Check

From the laptop on house Wi-Fi:

`ssh youruser@THE-ADDRESS`

You should get a password prompt (or a key login), then a shell. Run:

`hostname`

That name should be the old PC. Type `exit` to leave. If this works once and fails after a reboot, reserve the address or set a fixed one so the number stops moving.

## What this is not

This is not a reason to forward port 22 to the internet. It is not a KVM purchase for day-two flakiness. It is not fail2ban, a new SSH port, or Tailscale tonight. House network only until you actually need coffee-shop access.

## What next

First successful login still lives on [SSH from the couch](<first-ssh>). Phone on house Wi-Fi: [SSH from a phone](<ssh-from-phone>). Change a weak install password: [change the login password](<leftover-box-change-password>). After a boring week of passwords, [log in with a key, not the password every time](<leftover-box-ssh-keys>). Keep SSH off the public internet: [keep it on the house network](<leftover-box-house-network>). Next useful job on the box is still [the first useful thing](<first-useful-service>).

## Skip

  * Skip opening port 22 on the router.
  * Skip buying a KVM for a refused or timed-out connect.
  * Skip changing the SSH port on day one.
  * Skip fail2ban until SSH is boring from the couch.
  * Skip Tailscale or WireGuard until you leave the house on purpose.
  * Skip guessing last week's address instead of finding it again.



## Sources

[Ubuntu Server: OpenSSH server](<https://ubuntu.com/server/docs/how-to/security/openssh-server/>). [Debian: ssh man page](<https://manpages.debian.org/bookworm/openssh-client/ssh.1.en.html>). [OpenBSD: ssh](<https://man.openbsd.org/ssh>). Official pages only. For the first connect, see [SSH from the couch](<first-ssh>). For the address, see [find it on the house network](<find-the-leftover-box>). For a host-key scare after a wipe, see [when SSH says the computer looks different](<leftover-box-ssh-host-key>).

## Also on this topic

[SSH from the couchType commands on the old PC from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [Is it still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Wake the computer from the house networkSoft-off is fine overnight. Wake the old PC from a laptop or phone on the house network so SSH and Pi-hole come back. You don't need a smart plug for this.](<wake-on-lan>) [When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old host key. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [SSH from a phoneType commands on the old PC from an iPhone or Android on house Wi-Fi. Password login first. Don't open SSH to the internet.](<ssh-from-phone>) [When the ISP swaps your routerTech left a new gateway (or reset yours). Ads are back, and SSH may miss the old address. Re-find the computer, re-point DNS, re-do the reservation. You don't need a new router or a new Pi-hole.](<when-isp-swaps-router>) [Keep it on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSSH from the couch](<first-ssh>) [NextSSH from a phone](<ssh-from-phone>)

---

*Labthrift Markdown mirror. HTML version linked above.*
