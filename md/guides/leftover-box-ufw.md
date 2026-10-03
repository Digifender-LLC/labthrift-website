# Turn on a simple firewall without locking yourself out

Source: https://labthrift.com/guides/leftover-box-ufw
Markdown: https://labthrift.com/md/guides/leftover-box-ufw.md

*Notes › / › Faster network › / › Turn on a simple firewall without locking yourself out*

[Notes](<./>) / [Faster network](<./#switches>) / Turn on a simple firewall without locking yourself out

Written 25 Aug 2026. This is a how-to, not a product card.

# Turn on a simple firewall without locking yourself out

After SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.

This is a small safety step for a computer that is already working. Allow the door you use first. Then turn on the guard. Prefer [see which doors the computer left open](<leftover-box-listening>) first so you know what is already listening.

## Skip until SSH works

If you cannot log in with [SSH from the couch](<first-ssh>), stop. Fix that first. Password SSH should already work. A key is optional, but [logging in with a key](<leftover-box-ssh-keys>) is a nice next step once the password login is boring.

## What ufw is

ufw is a simple on/off firewall on Debian and Ubuntu. It blocks surprise inbound ports that you did not mean to leave open. It is software on the computer, not a new appliance, and it is not pfSense. SSH must be allowed before you turn it on or you can lock yourself out.

## Allow SSH first

While you are logged into the computer, run:

`sudo ufw allow OpenSSH`

This makes an exception for SSH before the firewall starts blocking inbound connections. If the OpenSSH profile is not available, `sudo ufw allow 22/tcp` is the direct version. The order matters. Allow first, enable second.

## Turn it on

Now enable ufw:

`sudo ufw enable`

It warns that existing SSH connections may be disrupted. Because OpenSSH is already allowed, type yes and press Enter. Then check:

`sudo ufw status`

You should see Status: active and an OpenSSH rule marked ALLOW. Keep the current SSH window open while you test a second login from the laptop.

On a computer that only does SSH, OpenSSH is the whole rule list. If it already serves files or answers DNS, the two sections below add those services back.

## If you lock yourself out

Plug a screen and keyboard into the computer, log in at the console, and run `sudo ufw disable`. Then fix the SSH rule and try again. Don't solve this by opening port 22 on the router. SSH stays inside the house, as explained in [keep the computer on the house network](<leftover-box-house-network>).

## If you already have a file share

Turning on the firewall can make a working [file share](<first-file-share>) disappear from Finder or File Explorer. Nothing broke. Samba was simply never told it was welcome. While you are logged into the computer, run:

`sudo ufw allow Samba`

Samba is a profile that ships with Debian and Ubuntu, so one word covers the ports the share needs. If you see the profile is unknown, `sudo ufw app list` prints the profile names it actually has. Then re-check the rules:

`sudo ufw status`

You should now see Samba marked ALLOW next to OpenSSH. Open the share again from the laptop or the phone and it should be back. If the share vanished after ufw and allowing Samba did not bring it back, [when the house share disappeared, check the computer](<leftover-box-share-check>). If the share is there but the password fails, that is [set or change the house-share password](<leftover-box-samba-password>). This rule is for the house network only. Don't open SMB to the internet and don't forward its ports on the router, the same boundary as [keep the computer on the house network](<leftover-box-house-network>).

## If you already run Pi-hole

Same story for [the house ad block](<first-useful-service>). Pi-hole answers name lookups for every phone and laptop, so the firewall has to let DNS in. If it does not, names stop resolving and the whole house looks like the internet is down. Allow DNS on the computer:

`sudo ufw allow 53/tcp`

`sudo ufw allow 53/udp`

DNS uses both, so allow both. Ubuntu does not ship a Pi-hole ufw profile, so the two port lines are the honest path. Then re-check:

`sudo ufw status`

You should see 53/tcp and 53/udp marked ALLOW next to OpenSSH. Load a couple of sites from a phone. Names should still resolve and ads should still drop. House network only. Don't forward port 53 on the router.

Nothing on the router changes here. Router DNS still points at the computer, exactly as in [point the house at the ad block](<leftover-box-router-dns>). You are only letting the house reach a service that was already running.

## What next

Once a week, [keep the computer updated](<leftover-box-updates>). That is enough for now. Don't buy a firewall appliance for this job.

## Skip

  * Skip a new Protectli.
  * Skip fail2ban on day one. Later is [slow down password guesses on SSH](<leftover-box-fail2ban>).
  * Skip disabling password login until the key login is boring. That is [turn off password login once the key works](<leftover-box-ssh-no-password>).
  * Skip forwarding port 22 on the router.
  * Skip buying a rack firewall.
  * Skip opening Samba to the internet.
  * Skip forwarding port 53 to the internet.
  * Skip buying a firewall appliance for a rule you can type.



## Sources

[Ubuntu Server: firewalls](<https://ubuntu.com/server/docs/how-to/security/firewalls/>). [Debian: ufw manual](<https://manpages.debian.org/bookworm/ufw/ufw.8.en.html>). Official pages only. For a working login, see [SSH from the couch](<first-ssh>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>). For the share these rules protect, see [a file share on the computer](<first-file-share>). For the ad block, see [the first useful thing on the computer](<first-useful-service>).

## Also on this topic

[Slow down password guesses on SSHAfter the firewall is on and key login is boring, you can let the computer briefly refuse an address that keeps guessing the password. Skip this on day one. Don't forward port 22.](<leftover-box-fail2ban>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [Keep the computer updatedOnce a week, give the computer its fixes so SSH and Pi-hole are not sitting on last year's bugs.](<leftover-box-updates>) [Let the computer apply weekly fixes without youAfter the weekly two-command habit is boring, you can let the computer apply those same fixes by itself. Skip this until that habit is boring. Don't let it reboot on its own.](<leftover-box-unattended>) [PreviousSee which doors the computer left open](<leftover-box-listening>)[NextSlow down password guesses on SSH](<leftover-box-fail2ban>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
