# When SSH says the computer looks different

Source: https://labthrift.com/guides/leftover-box-ssh-host-key
Markdown: https://labthrift.com/md/guides/leftover-box-ssh-host-key.md

*Notes › / › Faster network › / › When SSH says the computer looks different*

[Notes](<./>) / [Faster network](<./#switches>) / When SSH says the computer looks different

Written 28 Aug 2026. This is a how-to, not a product card.

# When SSH says the computer looks different

After you reinstall the computer, SSH from the couch can refuse because your laptop still remembers the old ID. Clear that memory with ssh-keygen -R. You don't need a new router.

You wiped the computer this weekend, or you swapped it for another computer. [SSH from the couch](<first-ssh>) used to work. Now the laptop prints a loud warning that the computer looks different, and it will not connect. That is not a new router problem. Your laptop still remembers the ID from before the wipe. Clear that one memory. Then SSH again.

## Skip if SSH still works

If you can already type commands on the computer from the couch, you don't need this note. This look is only for the warning after a reinstall, a swap, or a rename.

## What this is

The ID is a fingerprint SSH stores on your laptop the first time you connect. Linux people call that a host key. You don't need the phrase. You need the check. This is not the same note as [log in with a key, not the password every time](<leftover-box-ssh-keys>) (that is your laptop proving it is you). This is the computer proving it is the same box your laptop met last time. After a wipe, it is a new computer on the same name or number. The laptop is right to pause. You are the one who wiped it.

## If you did not reinstall

Stop. Don't clear the memory yet. If you did not wipe the computer, did not swap it, and did not change its name, a new ID is a reason to look, not a reason to buy. Confirm SSH is still only on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22. Then come back to this note only if you now know you reinstalled or swapped the computer.

## Clear the old ID

On your laptop, not on the computer, in Terminal, forget the name lab:

`ssh-keygen -R lab`

If you connect by number instead of a name, swap in that number from [find the computer on the house network](<find-the-leftover-box>):

`ssh-keygen -R 192.168.1.50`

Use your real number. The command removes that ID from the laptop memory file, usually `~/.ssh/known_hosts`. It does not change the computer. It does not change your password. It does not add a login key. That later note is still [log in with a key, not the password every time](<leftover-box-ssh-keys>).

## Connect again

From the laptop:

`ssh you@lab`

Or the number, same as [SSH from the couch](<first-ssh>). The first time after a wipe, SSH will ask if you trust this computer. That is normal. Type yes only if this is the computer you just installed. Then the password, the one you set in [change the login password](<leftover-box-change-password>).

## What next

Password SSH should be boring again. Other connect failures (refused, timed out, wrong password) are [when SSH won't connect](<when-ssh-wont-connect>). Extra old logins stay [see if the computer still has old login accounts](<leftover-box-other-accounts>). When password login has been boring, [log in with a key, not the password every time](<leftover-box-ssh-keys>). A name that sticks is [give the computer a name that sticks](<leftover-box-hostname>). Skip a new router. Skip opening SSH to the internet.

## Skip

  * Skip this note if SSH from the couch already works.
  * Skip this note if you did not reinstall or swap the computer. Start with [keep the computer on the house network](<leftover-box-house-network>).
  * Skip buying a new router because SSH printed a warning.
  * Skip editing the SSH server for this. The memory lives on your laptop.
  * Skip opening SSH to the internet.



## Sources

[Debian: ssh-keygen](<https://manpages.debian.org/bookworm/openssh-client/ssh-keygen.1.en.html>) (`-R`). [Ubuntu: ssh-keygen](<https://manpages.ubuntu.com/manpages/noble/en/man1/ssh-keygen.1.html>). [OpenSSH: ssh-keygen](<https://man.openbsd.org/ssh-keygen>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For the number, see [find the computer on the house network](<find-the-leftover-box>). For a name, see [give the computer a name that sticks](<leftover-box-hostname>). For your laptop login key, see [log in with a key, not the password every time](<leftover-box-ssh-keys>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See other login names on the computerBefore you leave a Marketplace box on the house network, look at who else can still log in. You don't need extra login software for this.](<leftover-box-other-accounts>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [Give the computer a name that sticksPing and SSH are easier if the computer has a short name. lab works. Set it so the name survives a reboot.](<leftover-box-hostname>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousRun one command as admin](<leftover-box-sudo>) [NextLog in with a key, not the password every time](<leftover-box-ssh-keys>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
