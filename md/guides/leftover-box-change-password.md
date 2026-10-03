# Change the login password

Source: https://labthrift.com/guides/leftover-box-change-password
Markdown: https://labthrift.com/md/guides/leftover-box-change-password.md

*Notes › / › Faster network › / › Change the login password*

[Notes](<./>) / [Faster network](<./#switches>) / Change the login password

Written 26 Aug 2026. This is a how-to, not a product card.

# Change the login password

Once SSH from the couch works, set a password you chose. Do this before you leave the install password sitting around.

You can already log in from the couch. Before you lean harder on that login, or turn on more services, replace the password from install day with one you chose.

## Skip until SSH works

If you cannot log in yet, stop. That is [SSH from the couch](<first-ssh>). Fix that first. This note assumes you can type commands on the computer from the couch.

## What this is

You are changing the user password only. That is the password SSH asks for until you move to a key. Changing it does not change the Wi-Fi password. It does not change the router password. It is not the Pi-hole admin password, unless you set those the same on purpose. It is not the Samba share password. That is [set or change the house-share password](<leftover-box-samba-password>). The share itself is [a file share on the computer](<first-file-share>).

## Change it while logged in

SSH in the way [SSH from the couch](<first-ssh>) taught you. Then run:

`passwd`

It asks for the current password, then the new one twice. Nothing shows as you type. That is normal. Pick a password you chose, not the one from install day.

## Open a second window before you leave

Keep the first SSH session open. Open a second SSH window and log in with the new password:

`ssh you@that-address`

Swap `you` and `that-address` the way [SSH from the couch](<first-ssh>) taught you. If the new password fails, you still have the old session open. Don't close the first window until the second login works.

## What next

If this computer came from Marketplace, look for leftover accounts next: [see if the computer still has old login accounts](<leftover-box-other-accounts>). When password login has been boring for a bit, [log in with a key, not the password every time](<leftover-box-ssh-keys>). Later, [turn off password login once the key works](<leftover-box-ssh-no-password>). Don't open port 22 to the internet. SSH stays on the house network. That is [keep the computer on the house network](<leftover-box-house-network>).

## Skip

  * Skip this note if SSH from the couch does not work yet. That is [SSH from the couch](<first-ssh>).
  * Skip changing the router password here.
  * Skip a password manager appliance.
  * Skip opening SSH to the internet.
  * Skip fail2ban on day one. Later is [slow down password guesses on SSH](<leftover-box-fail2ban>).



## Sources

[Debian: passwd](<https://manpages.debian.org/bookworm/passwd/passwd.1.en.html>). [Ubuntu: passwd](<https://manpages.ubuntu.com/manpages/noble/en/man1/passwd.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). When password login is boring, see [log in with a key, not the password every time](<leftover-box-ssh-keys>). Don't open port 22. That is [keep the computer on the house network](<leftover-box-house-network>).

## Also on this topic

[See if the computer still has old login accountsBefore you leave a Marketplace box on the house network, look at who else can still log in. You don't need extra login software for this.](<leftover-box-other-accounts>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [See who logged into the computer recentlyBefore you buy a camera or a monitoring box, peek at the computer login history with last.](<leftover-box-last-login>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousKeep the computer on the same number](<leftover-box-dhcp-reservation>) [NextSee if the computer still has old login accounts](<leftover-box-other-accounts>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
