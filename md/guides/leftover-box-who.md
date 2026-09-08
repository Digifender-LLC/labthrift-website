# See who is on the computer right now

Source: https://labthrift.com/guides/leftover-box-who
Markdown: https://labthrift.com/md/guides/leftover-box-who.md

*Notes › / › Faster network › / › See who is on the computer right now*

[Notes](<./>) / [Faster network](<./#switches>) / See who is on the computer right now

Written 28 Aug 2026. This is a how-to, not a product card.

# See who is on the computer right now

Before you buy a camera or a monitoring box, ask who is logged into the computer right now with who.

You already peeked at recent logins with [see who logged into the computer recently](<leftover-box-last-login>). That is history. This note is the live room: who has a session open this second. You are reading a short list the computer already knows. You are not buying a camera, a SIEM, or a monitoring appliance for this look.

## Skip until SSH works

If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer a password you chose first: [change the login password](<leftover-box-change-password>). This note assumes you can log in from the couch. It is a quiet look, not day-one homework.

## What this is

A live peek, not a shopping trip. `who` prints who is logged in right now (your SSH session will show up; that is normal). History is a different tool: [see who logged into the computer recently](<leftover-box-last-login>). Failed password guesses are a different peek: [see if anyone guessed the password](<leftover-box-failed-guesses>). Guess-slowing later is [slow down password guesses on SSH](<leftover-box-fail2ban>).

## Ask who is on right now

SSH in from the couch, then run:

`who`

You should see one line for your session, often with a house address or hostname and a time. Only your line is fine. An empty print is rare while you are connected; if you see a stranger name or an address you don't recognize, stop and fix the login path below. Don't buy anything because the list printed once.

## Optional: a little more detail

If you want a one-line load hint plus who is on:

`w`

Keep this note on the short list. You don't need a fancy dashboard for two lines. When the computer feels slow later, that is a different check: [see which program is using the computer CPU](<leftover-box-whats-busy>).

## If a line looks wrong

Stop. Change the password again: [change the login password](<leftover-box-change-password>). Prefer a key, then turn password login off when the key is boring: [log in with a key, not the password every time](<leftover-box-ssh-keys>), then [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network only: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22. Don't buy a camera for one odd line until you understand the list.

## What next

Leave it. Once in a while is enough for this peek after the login habit is boring. History when you want the diary is [see who logged into the computer recently](<leftover-box-last-login>). The firewall path is [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). Guess-slowing later is [slow down password guesses on SSH](<leftover-box-fail2ban>). The start-with-what-you-have rule stays [start with what you already have](<start-with-what-you-have>).

## Skip

  * Skip if SSH from the couch is not working yet. That is [SSH from the couch](<first-ssh>).
  * Skip `tty` as tonight's job. Tty prints YOUR terminal name: [see terminal name](<leftover-box-tty>). Who lists people.
  * Skip a camera, a SIEM, or a monitoring box for this look.
  * Skip opening port 22 on the router. SSH stays on the house network.
  * Skip treating your own current SSH line as an attack.
  * Skip a NAS for this look.



## Sources

[Debian: who](<https://manpages.debian.org/bookworm/coreutils/who.1.en.html>). [Ubuntu: who](<https://manpages.ubuntu.com/manpages/noble/en/man1/who.1.html>). [Debian: w](<https://manpages.debian.org/bookworm/procps/w.1.en.html>). Official pages only. For history, see [see who logged into the computer recently](<leftover-box-last-login>). For the login, see [SSH from the couch](<first-ssh>). For a password you chose, see [change the login password](<leftover-box-change-password>). For keys, see [log in with a key, not the password every time](<leftover-box-ssh-keys>). For failed guesses, see [slow down password guesses on SSH](<leftover-box-fail2ban>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>).

## Also on this topic

[See who logged into the computer recentlyBefore you buy a camera or a monitoring box, peek at the computer login history with last.](<leftover-box-last-login>) [See the terminal nameAfter locale, see terminal name with tty so SSH session vs keyboard session makes sense. You don't need extra system software for this.](<leftover-box-tty>) [See if anyone guessed the passwordBefore you buy a camera or extra login software, peek at failed logins with lastb.](<leftover-box-failed-guesses>) [Change the login passwordOnce SSH from the couch works, set a password you chose. Do this before you leave the install password sitting around.](<leftover-box-change-password>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Slow down password guesses on SSHAfter the firewall is on and key login is boring, you can let the computer briefly refuse an address that keeps guessing the password. Skip this on day one. Don't forward port 22.](<leftover-box-fail2ban>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousSee who logged into the computer recently](<leftover-box-last-login>) [NextSee if anyone guessed the password](<leftover-box-failed-guesses>)

---

*Labthrift Markdown mirror. HTML version linked above.*
