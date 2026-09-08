# See if the computer still has old login accounts

Source: https://labthrift.com/guides/leftover-box-other-accounts
Markdown: https://labthrift.com/md/guides/leftover-box-other-accounts.md

*Notes › / › Faster network › / › See if the computer still has old login accounts*

[Notes](<./>) / [Faster network](<./#switches>) / See if the computer still has old login accounts

Written 28 Aug 2026. This is a how-to, not a product card.

# See if the computer still has old login accounts

Before you leave a Marketplace box on the house network, look at who else can still log in. You don't need extra login software for this.

An OptiPlex or office mini from Marketplace may still have the previous owner's login. That is a person folder, not a camera problem. Look first. You are not buying user-management software, and you are not deleting folders on day one.

## Skip until SSH works

If you cannot log in from the couch, stop. That is [SSH from the couch](<first-ssh>). Change your own password first if you have not: [change the login password](<leftover-box-change-password>). This note assumes you can type commands on the computer from the couch, as yourself.

## Skip if you just installed a fresh OS

If this weekend you wiped the computer and installed Debian or Ubuntu Server, you probably only have your own account. Skip this note. The install path is [what OS to put on the computer](<what-os-to-pick>). Still sitting on someone else's Windows or Linux from Marketplace? Prefer a full wipe first: [wipe a Marketplace PC before you install](<wipe-marketplace-pc>). This look is for a computer that already had someone else's Linux on it, when a wipe is not practical tonight.

## What this is

A login account is a name the computer will let in, plus a folder of that person's files. Those folders live under `/home`. Your name is one of them. Extra names are people from the last owner. This is not the same look as [see who logged into the computer recently](<leftover-box-last-login>) (history) or [see who is on the computer right now](<leftover-box-who>) (this minute).

## See your own name first

SSH in from the couch, then run:

`whoami`

That prints the account you are using. Don't lock this name later.

## See the people folders

Ask what lives under home:

`ls /home`

You should see your name from `whoami`. Extra names are extra accounts. One name is normal on a computer you just installed. Two or more names on a Marketplace box is the usual old-office story.

Optional longer list, if you want the computer to name every person account, not only the folders:

`getent passwd | awk -F: '$3 >= 1000 && $1 != "nobody" {print $1}'`

`nobody` is a system name. Ignore it. Stick to names you also saw under `/home`.

## If you see extra names

Don't delete the folders tonight. They may hold files you still want. Lock the extra login so that name cannot sign in, and leave the folder alone.

See whether that extra name still has a password. Swap in the extra name you saw:

`sudo passwd -S othername`

`P` means it still has a password. `L` means it is already locked. `NP` means no password, which is also a problem. Then lock it:

`sudo passwd -l othername`

Ask `passwd -S` again. You want `L`. The folder under `/home` stays. That is fine. You locked the door. You did not throw out the room.

Do this once per extra name. Never lock the name `whoami` printed.

Locking the password stops password login for that name. An extra SSH key can still get in. Optional look, swap in the extra name:

`ls /home/othername/.ssh`

If you see `authorized_keys` and you don't want that extra key, rename it for now. Don't delete the folder:

`sudo mv /home/othername/.ssh/authorized_keys /home/othername/.ssh/authorized_keys.bak`

Keys you add later for your own laptop are [log in with a key, not the password every time](<leftover-box-ssh-keys>).

## What next

If you have not wiped a Marketplace box yet, that is the better path: [wipe a Marketplace PC before you install](<wipe-marketplace-pc>). Your own password stays [change the login password](<leftover-box-change-password>). Recent logins stay [see who logged into the computer recently](<leftover-box-last-login>). When password login has been boring, [log in with a key, not the password every time](<leftover-box-ssh-keys>). Skip a camera. Skip opening port 22. SSH stays on the house network: [keep the computer on the house network](<leftover-box-house-network>).

## Skip

  * Skip this note if you just installed a fresh OS and `ls /home` only shows you.
  * Skip this note if SSH from the couch does not work yet. That is [SSH from the couch](<first-ssh>).
  * Skip deleting folders under `/home` on day one.
  * Skip a camera or extra login software for this look.
  * Skip opening SSH to the internet.



## Sources

[Debian: whoami](<https://manpages.debian.org/bookworm/coreutils/whoami.1.en.html>). [Ubuntu: whoami](<https://manpages.ubuntu.com/manpages/noble/en/man1/whoami.1.html>). [Debian: ls](<https://manpages.debian.org/bookworm/coreutils/ls.1.en.html>). [Ubuntu: ls](<https://manpages.ubuntu.com/manpages/noble/en/man1/ls.1.html>). [Debian: passwd](<https://manpages.debian.org/bookworm/passwd/passwd.1.en.html>) (`-S`, `-l`). [Ubuntu: passwd](<https://manpages.ubuntu.com/manpages/noble/en/man1/passwd.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For your own password, see [change the login password](<leftover-box-change-password>). For recent logins, see [see who logged into the computer recently](<leftover-box-last-login>).

## Also on this topic

[Wipe a Marketplace PC before you installA used OptiPlex may still have the last owner's Windows and logins. Wipe the disk with the installer before you plug it into the house network.](<wipe-marketplace-pc>) [Change the login passwordOnce SSH from the couch works, set a password you chose. Do this before you leave the install password sitting around.](<leftover-box-change-password>) [See if your login can use admin commandsBefore you change passwords or turn on the firewall, check that your login can use sudo. You don't need extra login software.](<leftover-box-sudo>) [See who logged into the computer recentlyBefore you buy a camera or a monitoring box, peek at the computer login history with last.](<leftover-box-last-login>) [See who is on the computer right nowBefore you buy a camera or a monitoring box, ask who is logged into the computer right now with who.](<leftover-box-who>) [When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old ID. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousChange the login password](<leftover-box-change-password>) [NextSee if your login can use admin commands](<leftover-box-sudo>)

---

*Labthrift Markdown mirror. HTML version linked above.*
