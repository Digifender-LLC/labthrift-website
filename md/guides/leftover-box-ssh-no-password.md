# Turn off password login once the key works

Source: https://labthrift.com/guides/leftover-box-ssh-no-password
Markdown: https://labthrift.com/md/guides/leftover-box-ssh-no-password.md

*Notes › / › Faster network › / › Turn off password login once the key works*

[Notes](<./>) / [Faster network](<./#switches>) / Turn off password login once the key works

Written 26 Aug 2026. This is a how-to, not a product card.

# Turn off password login once the key works

After the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.

PasswordAuthentication is the password at the SSH prompt. Once the laptop key works every time, you can tell SSH to stop accepting that password. The key is how you get in from the couch. A screen and keyboard on the computer are the backup if the laptop dies.

## Skip until the key login is boring

[Log in with a key](<leftover-box-ssh-keys>) should already be boring. Prefer one look at the list first: [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>). Prefer a second computer first: [put a key on a second computer first](<leftover-box-second-key>). If the key has a passphrase, [unlock your key once per laptop session](<leftover-box-ssh-agent>) is nicer before this harden step. If [SSH from the couch](<first-ssh>) still asks for the password, stop. Finish the key first. Don't turn off password login on a login that still needs the password.

## What this changes

Password login from another computer stops working. The laptop key still works. If that laptop dies, you need a screen and keyboard on the computer, or a second key already copied onto another computer. That is why this is later, not first weekend. Keep the password on the computer itself. You still type it at a local keyboard. You just cannot type it at an SSH prompt from the house anymore.

## Keep this SSH window open

Stay logged in. Open a second terminal on the laptop and prove the key login works first:

`ssh you@that-address`

Swap `you` and `that-address` the way [SSH from the couch](<first-ssh>) taught you. It should not ask for the password. If it does, stop. Go back to [log in with a key](<leftover-box-ssh-keys>).

## Turn off password login

Prefer a drop-in file so you don't hunt comments in `sshd_config`. On the computer, in the first SSH window, write one line:

`echo 'PasswordAuthentication no' | sudo tee /etc/ssh/sshd_config.d/99-no-password.conf`

Check the config before you reload:

`sudo sshd -t`

If that says the command is missing, try the full path:

`sudo /usr/sbin/sshd -t`

No news is good news. Then reload SSH so the drop-in takes effect. Keep the first session open.

`sudo systemctl reload ssh`

If reload says the unit is `sshd`, use:

`sudo systemctl reload sshd`

## Try it

From the laptop, a new login:

`ssh you@that-address`

The key should still get you in. A password-only attempt from a machine that has no key should be refused. Don't close the original SSH window until the new one works.

## If you lock yourself out

Plug a screen and keyboard into the computer. Log in locally with the password. Remove the drop-in, then reload:

`sudo rm /etc/ssh/sshd_config.d/99-no-password.conf`

`sudo systemctl reload ssh`

If that unit name is wrong, `sudo systemctl reload sshd` is the Debian spelling. Don't forward port 22 on the router. SSH stays on the house network. That is [keep the computer on the house network](<leftover-box-house-network>).

## What next

If the firewall is not on yet, [see which doors the computer left open](<leftover-box-listening>) first, then [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). Once a week, [keep the computer updated](<leftover-box-updates>). Skip fail2ban. Later is [slow down password guesses on SSH](<leftover-box-fail2ban>). Skip a YubiKey. Skip opening SSH to the internet.

## Skip

  * Skip this note if key login is still flaky.
  * Skip this note if you have no keyboard and only one laptop. That second computer is [put a key on a second computer first](<leftover-box-second-key>).
  * Skip fail2ban. Later is [slow down password guesses on SSH](<leftover-box-fail2ban>).
  * Skip forwarding port 22 on the router.
  * Skip a new firewall appliance.
  * Skip a YubiKey.



## Sources

[OpenSSH: sshd_config](<https://man.openbsd.org/sshd_config.5>). [Debian: sshd_config](<https://manpages.debian.org/bookworm/openssh-server/sshd_config.5.en.html>). [Ubuntu: OpenSSH server](<https://documentation.ubuntu.com/server/how-to/security/openssh-server/>). Official pages only. For the key, see [log in with a key](<leftover-box-ssh-keys>). For the list before this harden step, see [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>). For the login, see [SSH from the couch](<first-ssh>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>). For a second computer, see [put a key on a second computer first](<leftover-box-second-key>). For the firewall, see [turn on a simple firewall without locking yourself out](<leftover-box-ufw>).

## Also on this topic

[See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [Put a key on a second computer firstBefore you turn off password login, give a second laptop its own key so you are not locked out if the first one dies. You don't need a YubiKey.](<leftover-box-second-key>) [Unlock your key once per laptop sessionAfter the key has a passphrase, load it once with ssh-add so you are not typing that passphrase on every ssh. You don't need a YubiKey.](<leftover-box-ssh-agent>) [See login nameAfter SSH works, see login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See user number and groupsAfter whoami, see user number and groups with id so home numbers and sudo groups make sense. You don't need extra login software for this.](<leftover-box-id>) [See kernel name and architectureAfter id, see kernel name and architecture with uname so driver notes and 64-bit vs 32-bit make sense. You don't need extra software for this.](<leftover-box-uname>) [See HOME and PATHAfter uname, see HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [See change without typing againAfter SSH works, re-run a command every few seconds with watch so size (or clock) updates by itself. You don't need a monitoring app for this.](<leftover-box-watch>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager for this.](<leftover-box-cd>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [Slow down password guesses on SSHAfter the firewall is on and key login is boring, you can let the computer briefly refuse an address that keeps guessing the password. Skip this on day one. Don't forward port 22.](<leftover-box-fail2ban>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPrint a number list](<leftover-box-seq>) [NextSee which doors the computer left open](<leftover-box-listening>)

---

*Labthrift Markdown mirror. HTML version linked above.*
