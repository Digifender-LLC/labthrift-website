# See which laptop keys the computer already trusts

Source: https://labthrift.com/guides/leftover-box-authorized-keys
Markdown: https://labthrift.com/md/guides/leftover-box-authorized-keys.md

*Notes › / › Faster network › / › See which laptop keys the computer already trusts*

[Notes](<./>) / [Faster network](<./#switches>) / See which laptop keys the computer already trusts

Written 28 Aug 2026. This is a how-to, not a product card.

# See which laptop keys the computer already trusts

Before you turn off password login, look at which laptop keys can already get into the computer. Remove leftovers from an old Marketplace computer. You don't need a YubiKey for this.

[Log in with a key](<leftover-box-ssh-keys>) puts your laptop's public line on the computer. This note is the look after that: open the list and see who else is already trusted. A Marketplace computer can still hold an old owner's key. That is not a reason to buy a camera or a YubiKey. It is a reason to look once.

## Skip until a key login works

If password SSH is still the only way in, stop. Put a key on first: [log in with a key, not the password every time](<leftover-box-ssh-keys>). If you cannot log in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after you know who else can still log in with a password: [see if the computer still has old login accounts](<leftover-box-other-accounts>). This note assumes you can open a shell as your everyday user.

## What this file is

Each line in `~/.ssh/authorized_keys` is one laptop (or phone, or other computer) the computer will let in without the password. Your line from [log in with a key](<leftover-box-ssh-keys>) should be there. Extra lines you don't recognize are the problem. This is not the laptop's private key. It is the public half the computer remembers.

## See if the file exists

From the computer (SSH or the keyboard):

`ls -la ~/.ssh/`

You want a file named `authorized_keys`. If the folder is missing, or that file is missing, you have not finished the key note yet. Go back to [log in with a key](<leftover-box-ssh-keys>). Optional count of lines:

`test -f ~/.ssh/authorized_keys && wc -l < ~/.ssh/authorized_keys || echo no keys file yet`

One line is normal after one laptop. Zero means the file is empty. More than one means more than one key is trusted. That can be fine (your laptop plus a second computer). It can also be an old Marketplace key.

## Read the list

`cat ~/.ssh/authorized_keys`

Each line starts with `ssh-ed25519` or `ssh-rsa`, then a long blob, then often a short comment (an email or a laptop name). That comment is a hint, not a password. Match the comment to a laptop you own. A comment you don't recognize, or a second long blob you never pasted, is a leftover to remove before you harden login.

## Remove a line you don't trust

Keep one SSH window open so you don't lock yourself out. Open the file in a simple editor:

`nano ~/.ssh/authorized_keys`

Delete only the full line you don't trust. Save and quit (in nano: Ctrl+O, Enter, then Ctrl+X). The editor walkthrough is [edit a file from the couch](<leftover-box-nano>). Don't delete your own laptop's line. Then prove your key still works from a second terminal:

`ssh you@that-address`

Swap `you` and `that-address` the way [SSH from the couch](<first-ssh>) taught you. If that works, you are done with the cleanup. Skip buying login software for this look.

## Optional: check root too

Most Debian and Ubuntu installs don't let root SSH in. If you ever enabled that, peek:

`sudo test -f /root/.ssh/authorized_keys && sudo wc -l < /root/.ssh/authorized_keys || echo no root keys file`

If that prints a number, read it the same way with `sudo cat /root/.ssh/authorized_keys`. Empty or missing is the usual win. Skip this optional look if you never logged in as root over SSH.

## What next

Once the list is only keys you trust, [give the computer a short name on your laptop](<leftover-box-ssh-config>), then [put a key on a second computer first](<leftover-box-second-key>). When both computers get in, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep a keyboard on the computer as the backup. Then see which doors are open: [see which doors the computer left open](<leftover-box-listening>). Skip a YubiKey. Skip forwarding port 22.

## Skip

  * Skip if key login is not working yet. Finish [log in with a key](<leftover-box-ssh-keys>) first.
  * Skip a YubiKey for the computer.
  * Skip buying a camera or extra login software for this look.
  * Skip turning off password login until this list is only keys you trust. That harden step is [turn off password login once the key works](<leftover-box-ssh-no-password>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[OpenSSH: sshd](<https://man.openbsd.org/sshd.8>) (AUTHORIZED_KEYS FILE FORMAT). [Debian: sshd](<https://manpages.debian.org/bookworm/openssh-server/sshd.8.en.html>). [Debian: ssh-keygen](<https://manpages.debian.org/bookworm/openssh-client/ssh-keygen.1.en.html>). [Ubuntu: OpenSSH server](<https://documentation.ubuntu.com/server/how-to/security/openssh-server/>). Official pages only. For putting your key on, see [log in with a key](<leftover-box-ssh-keys>). For old password accounts, see [see if the computer still has old login accounts](<leftover-box-other-accounts>). For a second computer, see [put a key on a second computer first](<leftover-box-second-key>). For turning off password SSH after this look, see [turn off password login once the key works](<leftover-box-ssh-no-password>).

## Also on this topic

[Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [Put a key on a second computer firstBefore you turn off password login, give a second laptop its own key so you are not locked out if the first one dies. You don't need a YubiKey.](<leftover-box-second-key>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [See if the computer still has old login accountsBefore you leave a Marketplace box on the house network, look at who else can still log in. You don't need extra login software for this.](<leftover-box-other-accounts>) [When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old ID. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousLog in with a key, not the password every time](<leftover-box-ssh-keys>) [NextGive the computer a short name on your laptop](<leftover-box-ssh-config>)

---

*Labthrift Markdown mirror. HTML version linked above.*
