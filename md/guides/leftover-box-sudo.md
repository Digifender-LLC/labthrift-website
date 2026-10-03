# See if your login can use admin commands

Source: https://labthrift.com/guides/leftover-box-sudo
Markdown: https://labthrift.com/md/guides/leftover-box-sudo.md

*Notes › / › Faster network › / › See if your login can use admin commands*

[Notes](<./>) / [Faster network](<./#switches>) / See if your login can use admin commands

Written 28 Aug 2026. This is a how-to, not a product card.

# See if your login can use admin commands

Before you change passwords or turn on the firewall, check that your login can use sudo. You don't need extra login software.

You can SSH in from the couch. Then a note says type `sudo`, and the computer answers that your login is not in the sudoers file. That is not a broken router. That is not a reason to buy a new mini PC. Your login is missing the admin club. Marketplace boxes do this a lot: the old owner kept the admin login, and the account you use every day cannot install or change much.

## Skip until SSH works

If you cannot log in from the couch, stop. That is [SSH from the couch](<first-ssh>). You can also type this at the keyboard. Prefer this look after you know who else can still log in: [see if the computer still has old login accounts](<leftover-box-other-accounts>). This note assumes you can log in from the couch, or sit at the keyboard.

## What sudo is

sudo is the computer's "do this as an admin" button. Everyday install, update, firewall, and share notes use it. Without sudo, password changes for other people, weekly fixes, and ufw all stop. The admin club on Debian and Ubuntu is usually a group named `sudo`. Some images say `admin` or `wheel` instead. Same idea.

## Ask who you are, then which clubs

SSH in from the couch, or sit at the keyboard, then ask:

`whoami`

That prints your login name. Then ask which clubs that login is in:

`groups`

Look for the word `sudo` in the list. `admin` or `wheel` counts too. If you want the same answer as a numbered list:

`id`

You should see something like `groups=…(sudo)` when you are in the club.

## Confirm with a harmless sudo

Check sudo without changing anything:

`sudo -v`

Type your login password when it asks. If it returns to a quiet prompt, you are in. If it says you are not in the sudoers file, or that the password is wrong after you know the password is right, your login is not an admin yet.

Optional one-liner that needs no password prompt when sudo already trusts this session:

`sudo -n true && echo can sudo || echo cannot sudo`

## If you are not in the club

Don't buy login software. Sit at the keyboard and log in as the account that can already use sudo (often the first install user, or an old Marketplace admin you found in [see if the computer still has old login accounts](<leftover-box-other-accounts>)). From that admin login, add your everyday name to the club. Swap youruser for the name from `whoami`:

`sudo usermod -aG sudo youruser`

Then log out and log back in (a new SSH session is enough). Ask `groups` again. You should see `sudo`. Then retry `sudo -v`.

If no login can use sudo, you are stuck until you recover from a live USB or reinstall. That is a bigger job than this note. Don't open SSH to the internet to "fix" it.

## What next

Once sudo works, set a password you chose: [change the login password](<leftover-box-change-password>). Then put a key on your laptop: [log in with a key, not the password every time](<leftover-box-ssh-keys>). After a reinstall scare, that is [when SSH says the computer looks different](<leftover-box-ssh-host-key>). Skip buying a camera or extra login software for this look.

## Skip

  * Skip this note if `groups` already shows `sudo` (or `admin` / `wheel`) and `sudo -v` works.
  * Skip if SSH from the couch does not work yet. That is [SSH from the couch](<first-ssh>).
  * Skip buying a camera, a monitoring box, or extra login software because sudo failed.
  * Skip editing `/etc/sudoers` by hand tonight. Use `usermod -aG sudo` from an account that already works.
  * Skip opening SSH to the internet.



## Sources

[Debian: groups](<https://manpages.debian.org/bookworm/coreutils/groups.1.en.html>). [Debian: id](<https://manpages.debian.org/bookworm/coreutils/id.1.en.html>). [Debian: whoami](<https://manpages.debian.org/bookworm/coreutils/whoami.1.en.html>). [Debian: sudo](<https://manpages.debian.org/bookworm/sudo/sudo.8.en.html>). [Debian: usermod](<https://manpages.debian.org/bookworm/passwd/usermod.8.en.html>). [Ubuntu: sudo](<https://manpages.ubuntu.com/manpages/noble/en/man8/sudo.8.html>). Official pages only. For old Marketplace logins, see [see if the computer still has old login accounts](<leftover-box-other-accounts>). For the login, see [SSH from the couch](<first-ssh>). For the password, see [change the login password](<leftover-box-change-password>).

## Also on this topic

[See if the computer still has old login accountsBefore you leave a Marketplace box on the house network, look at who else can still log in. You don't need extra login software for this.](<leftover-box-other-accounts>) [Change the login passwordOnce SSH from the couch works, set a password you chose. Do this before you leave the install password sitting around.](<leftover-box-change-password>) [When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old ID. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousSee if the computer still has old login accounts](<leftover-box-other-accounts>) [NextWhen SSH says the computer looks different](<leftover-box-ssh-host-key>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
