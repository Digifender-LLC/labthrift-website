# See who logged into the computer recently

Source: https://labthrift.com/guides/leftover-box-last-login
Markdown: https://labthrift.com/md/guides/leftover-box-last-login.md

*Notes › / › Faster network › / › See who logged into the computer recently*

[Notes](<./>) / [Faster network](<./#switches>) / See who logged into the computer recently

Written 28 Aug 2026. This is a how-to, not a product card.

# See who logged into the computer recently

Before you buy a camera or a monitoring box, peek at the computer login history with last.

SSH from the couch works. You changed the password. Maybe a key login is already boring. Once in a while, ask who has been getting in. You are reading a short history the computer already keeps. You are not buying a camera, a SIEM, or a monitoring appliance for this look.

## Skip until SSH works

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer a password you chose first: [change the login password](<leftover-box-change-password>). This note assumes you can log in from the couch. It is a quiet look, not day-one homework.

## What this is

A peek, not a shopping trip. `last` prints recent logins from the computer diary (who, when, from where on the house network). Your own SSH sessions will show up. That is normal. You are checking that the list looks like you, not a stranger. Failed password guesses are a different peek: [see if anyone guessed the password](<leftover-box-failed-guesses>).

## Ask who logged in

SSH in from the couch, then run:

`last -n 10`

You should see a short table. Your username, `pts/` or similar for SSH, a time, and often a house address or hostname. Empty or only your lines is fine. Don't buy anything because the table printed once.

## Optional: show the source address

If the from column is truncated and you want the address:

`last -n 5 -a`

Keep this note on the short list. You don't need a fancy log viewer for ten lines.

## If a line looks wrong

Stop. Change the password again: [change the login password](<leftover-box-change-password>). Prefer a key, then turn password login off when the key is boring: [log in with a key, not the password every time](<leftover-box-ssh-keys>), then [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network only: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22. Don't buy a camera for one odd line until you understand the list.

## What next

Leave it. Once a week is enough for this peek after the login habit is boring. For who is on right now, see [see who is on the computer right now](<leftover-box-who>). The firewall path is [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). Failed guesses are [see if anyone guessed the password](<leftover-box-failed-guesses>). Guess-slowing later is [slow down password guesses on SSH](<leftover-box-fail2ban>). The first rule stays [start with what you already have](<start-with-what-you-have>).

## Skip

  * Skip if SSH from the couch is not working yet. That is [SSH from the couch](<first-ssh>).
  * Skip a camera, a SIEM, or a monitoring box for this look.
  * Skip opening port 22 on the router. SSH stays on the house network.
  * Skip treating your own recent SSH lines as an attack.
  * Skip a NAS for this look.



## Sources

[Debian: last](<https://manpages.debian.org/bookworm/util-linux/last.1.en.html>). [Ubuntu: last](<https://manpages.ubuntu.com/manpages/noble/en/man1/last.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a password you chose, see [change the login password](<leftover-box-change-password>). For keys, see [log in with a key, not the password every time](<leftover-box-ssh-keys>). For failed guesses, see [see if anyone guessed the password](<leftover-box-failed-guesses>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>).

## Also on this topic

[Change the login passwordOnce SSH from the couch works, set a password you chose. Do this before you leave the install password sitting around.](<leftover-box-change-password>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Slow down password guesses on SSHAfter the firewall is on and key login is boring, you can let the computer briefly refuse an address that keeps guessing the password. Skip this on day one. Don't forward port 22.](<leftover-box-fail2ban>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [See who is on the computer right nowBefore you buy a camera or a monitoring box, ask who is logged into the computer right now with who.](<leftover-box-who>) [See if anyone guessed the passwordBefore you buy a camera or extra login software, peek at failed logins with lastb.](<leftover-box-failed-guesses>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousSlow down password guesses on SSH](<leftover-box-fail2ban>) [NextSee who is on the computer right now](<leftover-box-who>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
