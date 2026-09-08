# SSH from a phone

Source: https://labthrift.com/guides/ssh-from-phone
Markdown: https://labthrift.com/md/guides/ssh-from-phone.md

*Notes › / › Getting started › / › SSH from a phone*

[Notes](<./>) / [Getting started](<./#start>) / SSH from a phone

Written 4 Sep 2026. This is a how-to, not a product card.

# SSH from a phone

Type commands on the old PC from an iPhone or Android on house Wi-Fi. Password login first. Don't open SSH to the internet.

Haven't got SSH working from a laptop yet? Start with [SSH from the couch](<first-ssh>). Need the computer's number first? [Find it on the house network](<find-the-leftover-box>). This note is the phone walk: one free app, house Wi-Fi only, same user and password you already use on the laptop.

## Skip until laptop SSH works

If a laptop cannot log in yet, fix that first. The phone will fail the same way, and the typing is harder. This note assumes OpenSSH is already listening on the computer, and that `ssh you@that-address` already worked once from a laptop. The phone has to be on the same house Wi-Fi. Cellular will not reach it. Don't forward port 22 on the router.

## What this is

SSH is still SSH. The phone runs a client app that speaks the same language as Terminal on a Mac or Windows Terminal on a PC. You type the computer's address, the Linux username from install, and that user's password. You get a prompt on the old PC. That is enough for tonight.

## Pick one app

Install [Termius](<https://termius.com>) from the App Store or Google Play. Free tier is enough for one house computer and password login. You don't need a paid plan, a NAS terminal, or a cloud SSH gateway. Skip random "SSH Terminal" clones that stuff ads into the prompt.

## What you need

Write these down before you open the app:

  * Address: the same number you SSH to from the laptop, like `192.168.1.50`
  * Username: the Linux user you created at install, not Administrator, not root
  * Password: that user's login password
  * Port: `22` unless you already changed it (you shouldn't have)



If you don't know the number, [find it on the house network](<find-the-leftover-box>). If ping fails from a laptop, start with [is the computer still on?](<leftover-box-still-on>) before you blame the phone.

## iPhone or iPad

Open Termius. Tap Hosts (or New Host). Fill in:

  * Alias: something short, like `lab`
  * Address / Hostname: the house number
  * Username: your Linux user
  * Password: that password



Leave the port at 22. Save. Tap the host. The first time, accept the host key when it asks — same trust prompt as the laptop. Type a command you already know, like `hostname`. You should see the computer's name. Type `exit` when you are done.

Stay on house Wi-Fi. The next open is one tap on that saved host.

## Android

Same app, same fields. Open Termius → New Host → address, username, password, port 22. Save. Connect. Accept the host key once. Run `hostname`. Exit when finished.

Some Android skins put Termius behind a battery saver that kills the session when the screen sleeps. If the prompt dies the moment you lock the phone, exempt Termius from battery optimization for that first week. You still don't need a paid plan for house password login.

## If the phone cannot connect

Stay on house Wi-Fi. Forget the house network and join again if the phone was on cellular a minute ago. Recheck the address and username. If a laptop also fails, the computer is off, the address changed, or SSH is not running — that is [SSH from the couch](<first-ssh>) and [is it still on?](<leftover-box-still-on>), not a phone bug.

Permission denied on the phone with the same password that works on the laptop usually means a typo in the username field, or Autofill pasted an old iCloud / Google password. Type the Linux password by hand once.

If ufw is on and only the laptop worked because you allowed it somehow, allow OpenSSH on the computer:

`sudo ufw allow OpenSSH`

Then try the phone again. Fuller firewall walk: [turn on a simple firewall without locking yourself out](<leftover-box-ufw>).

## What this is not

This is not a reason to forward port 22 to the internet. It is not a VPN so you can SSH from a coffee shop. It is not a KVM over IP box. It is the same house SSH you already have, from the phone in your pocket.

## What next

Phone SSH fails the same ways as the laptop: [when SSH won't connect](<when-ssh-wont-connect>). Leave password login on for now. When the laptop key path is boring, that is [log in with a key, not the password every time](<leftover-box-ssh-keys>) — phone keys can wait until the laptop key is easy. Need the share from this same phone? [Open the house share from a phone](<open-share-from-phone>). Ads or Pi-hole next: [the first useful thing](<first-useful-service>). If SSH used to work and now says the computer looks different after a wipe, that is [when SSH says the computer looks different](<leftover-box-ssh-host-key>).

## Skip

  * Skip forwarding port 22 on the router.
  * Skip a paid SSH cloud plan for one house computer.
  * Skip root login over SSH.
  * Skip changing the SSH port on day one.
  * Skip Tailscale or WireGuard until you actually leave the house.
  * Skip this if a laptop already covers every command you need.



## Sources

[Termius](<https://termius.com>). [Ubuntu Server: OpenSSH server](<https://ubuntu.com/server/docs/how-to/security/openssh-server/>). [Debian: ssh man page](<https://manpages.debian.org/bookworm/openssh-client/ssh.1.en.html>). Official pages only. For laptop SSH first, see [SSH from the couch](<first-ssh>). For the address, see [find it on the house network](<find-the-leftover-box>). For keys later, see [log in with a key, not the password every time](<leftover-box-ssh-keys>).

## Also on this topic

[SSH from the couchType commands on the old PC from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old host key. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [Is it still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [The first useful thingPut a house-wide ad block on the old PC. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [PreviousSSH from the couch](<first-ssh>) [NextOpen the house share from a phone](<open-share-from-phone>)

---

*Labthrift Markdown mirror. HTML version linked above.*
