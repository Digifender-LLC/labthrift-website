# See if anyone guessed the password

Source: https://labthrift.com/guides/leftover-box-failed-guesses
Markdown: https://labthrift.com/md/guides/leftover-box-failed-guesses.md

*Notes › / › Faster network › / › See if anyone guessed the password*

[Notes](<./>) / [Faster network](<./#switches>) / See if anyone guessed the password

Written 28 Aug 2026. This is a how-to, not a product card.

# See if anyone guessed the password

Before you buy a camera or extra login software, peek at failed logins with lastb.

You already peeked at who got in with [see who logged into the computer recently](<leftover-box-last-login>), and who is on right now with [see who is on the computer right now](<leftover-box-who>). Those lists are successful logins. This note is the other diary: password guesses that did not work. You are reading a short list the computer already keeps. You are not buying a camera, a SIEM, or extra login software for this look.

## Skip until SSH works

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer a password you chose first: [change the login password](<leftover-box-change-password>). This note assumes you can log in from the couch. It is a quiet look, not day-one homework.

## What this is

A peek, not a shopping trip. `last` is who got in. `lastb` is who did not: mistyped passwords, and guesses that failed. Your own typos while learning SSH will show up. That is normal. Failed guesses that keep coming from outside the house are a different problem, and the fix is almost never a new gadget.

## Ask who guessed and failed

SSH in from the couch, then ask. The computer will ask for your password one more time, because this diary stays private:

`sudo lastb -n 10`

An empty print, or a line that says the diary is empty, is fine. A few lines with your username from a house address are usually you, mistyping. Don't buy anything because the table printed once. If it says permission denied, you skipped `sudo`.

## Optional: show the source address

If the from column is truncated and you want the address:

`sudo lastb -n 5 -a`

Keep this note on the short list. You don't need a fancy log viewer for ten lines. If `lastb` is missing, the same diary is:

`sudo last -f /var/log/btmp -n 10`

## If the list looks like the internet

A pile of names you did not type (`root`, `admin`, `pi`, `ubuntu`) from addresses that are not the house usually means SSH is reachable from the street. Stop. Close port 22 on the router. SSH stays on the house network: [keep the computer on the house network](<leftover-box-house-network>). Change the password: [change the login password](<leftover-box-change-password>). Don't buy a camera for a list of guesses. Don't install extra login software just because `lastb` printed. Guess-slowing later, after the firewall is on, is [slow down password guesses on SSH](<leftover-box-fail2ban>).

## What next

Leave it. Once in a while is enough for this peek after the login habit is boring. Successful history is [see who logged into the computer recently](<leftover-box-last-login>). Who is on right now is [see who is on the computer right now](<leftover-box-who>). The firewall path is [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). Guess-slowing later is [slow down password guesses on SSH](<leftover-box-fail2ban>). The first rule stays [start with what you already have](<start-with-what-you-have>).

## Skip

  * Skip if SSH from the couch is not working yet. That is [SSH from the couch](<first-ssh>).
  * Skip a camera, a SIEM, or extra login software for this look.
  * Skip opening port 22 on the router. SSH stays on the house network.
  * Skip treating your own mistyped password as an attack.
  * Skip a NAS for this look.



## Sources

[Debian: lastb](<https://manpages.debian.org/bookworm/util-linux/lastb.1.en.html>). [Ubuntu: lastb](<https://manpages.ubuntu.com/manpages/noble/en/man1/lastb.1.html>). Official pages only. Successful logins are [see who logged into the computer recently](<leftover-box-last-login>). Who is on right now is [see who is on the computer right now](<leftover-box-who>). For the login, see [SSH from the couch](<first-ssh>). For a password you chose, see [change the login password](<leftover-box-change-password>). For failed guesses later, see [slow down password guesses on SSH](<leftover-box-fail2ban>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>).

## Also on this topic

[See who logged into the computer recentlyBefore you buy a camera or a monitoring box, peek at the computer login history with last.](<leftover-box-last-login>) [See who is on the computer right nowBefore you buy a camera or a monitoring box, ask who is logged into the computer right now with who.](<leftover-box-who>) [Change the login passwordOnce SSH from the couch works, set a password you chose. Do this before you leave the install password sitting around.](<leftover-box-change-password>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [Slow down password guesses on SSHAfter the firewall is on and key login is boring, you can let the computer briefly refuse an address that keeps guessing the password. Skip this on day one. Don't forward port 22.](<leftover-box-fail2ban>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousSee who is on the computer right now](<leftover-box-who>) [NextLet the computer apply weekly fixes without you](<leftover-box-unattended>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
