# Log in with a key, not the password every time

Source: https://labthrift.com/guides/leftover-box-ssh-keys
Markdown: https://labthrift.com/md/guides/leftover-box-ssh-keys.md

*Notes › / › Faster network › / › Log in with a key, not the password every time*

[Notes](<./>) / [Faster network](<./#switches>) / Log in with a key, not the password every time

Written 25 Aug 2026. This is a how-to, not a product card.

# Log in with a key, not the password every time

After password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.

Password login from [SSH from the couch](<first-ssh>) should already be boring. The password should already be one you chose. That is [change the login password](<leftover-box-change-password>). A key is a small file on your laptop that proves it is you. You type a passphrase once, or not, instead of the password every time.

## Skip until password SSH is boring

If [SSH from the couch](<first-ssh>) still prints Permission denied, or the password is still wrong some days, stop. Fix that first. A key will not help a login that does not work yet. If SSH refuses because the computer looks different after a reinstall, that is [when SSH says the computer looks different](<leftover-box-ssh-host-key>).

## What a key is

You make two files. The public key goes on the computer. The private key stays on your laptop. The computer checks the public file and lets that laptop in. Never email the private key. Never copy it onto a stick you will lose. This is not a new router. The house number stays the same. The password can still work as a backup.

## Make a key on your laptop

On Windows, use Windows Terminal or PowerShell. On a Mac or Linux, use Terminal. Same command:

`ssh-keygen -t ed25519 -C "laptop"`

Accept the default path when it asks. A passphrase on the key is optional. A short one is still better than none, so a stolen laptop file is not a free login. If you skip the passphrase, press Enter at that prompt. It writes two files under `.ssh` in your home folder. One ends in `.pub`. That is the public key.

## Copy the public key to the computer

Use the username and the number from [find the computer on the house network](<find-the-leftover-box>). A reservation so that number stays put is [keep the computer on the same number](<leftover-box-dhcp-reservation>). Prefer this command, which asks for the password one last time:

`ssh-copy-id you@that-address`

Swap `you` and `that-address` the way [SSH from the couch](<first-ssh>) taught you.

If `ssh-copy-id` is missing, which happens on some Windows setups, SSH in with the password. On the computer, append the public line, the whole contents of the laptop file that ends in `.pub`, to `~/.ssh/authorized_keys`. Don't paste the private file. Then:

`chmod 700 ~/.ssh`

`chmod 600 ~/.ssh/authorized_keys`

## Try it

From the same laptop:

`ssh you@that-address`

It should not ask for the password. It may ask for the key passphrase, if you set one. You should see the prompt, the same as [SSH from the couch](<first-ssh>).

If it still asks for the password, the public line is not on that user, or you pasted the wrong file. Check you used the username, the same number, and the `.pub` file, not the private one. Run `ssh-copy-id` again. Don't start editing server config yet.

## Keep password login for now

Leave password login on. Don't turn off PasswordAuthentication. That is a later harden note. If the laptop dies, the password is how you get back in from another computer. Keep it as a backup. When typing the long address gets old, [give the computer a short name on your laptop](<leftover-box-ssh-config>). When the key login is boring, [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>), then [put a key on a second computer first](<leftover-box-second-key>), then [turn off password login once the key works](<leftover-box-ssh-no-password>).

## What next

The password should already be one you chose. That is [change the login password](<leftover-box-change-password>). Once a week, [keep the computer updated](<leftover-box-updates>). When SSH is reliable, [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). If Pi-hole is not up yet, that is [the first useful thing on the computer](<first-useful-service>). Don't forward port 22. SSH stays on the house network. That is [keep the computer on the house network](<leftover-box-house-network>).

## Skip

  * Skip this note if password SSH is still flaky.
  * Skip buying a YubiKey for the computer.
  * Skip fail2ban. Later is [slow down password guesses on SSH](<leftover-box-fail2ban>).
  * Skip a new firewall appliance.
  * Skip opening the computer to the internet.



## Sources

[OpenSSH: ssh-keygen](<https://man.openbsd.org/ssh-keygen>). [Debian: ssh-keygen](<https://manpages.debian.org/bookworm/openssh-client/ssh-keygen.1.en.html>). [Debian: ssh-copy-id](<https://manpages.debian.org/bookworm/openssh-client/ssh-copy-id.1.en.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For the address, see [find the computer on the house network](<find-the-leftover-box>). For a number that stays put, see [keep the computer on the same number](<leftover-box-dhcp-reservation>).

## Also on this topic

[Give the computer a short name on your laptopAfter SSH works, put a short name in your laptop SSH config so you type ssh lab instead of the long address. You don't need a new router.](<leftover-box-ssh-config>) [When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old ID. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace computer. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [Put a key on a second computer firstBefore you turn off password login, give a second laptop its own key so you are not locked out if the first one dies. You don't need a YubiKey.](<leftover-box-second-key>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [SSH from a phoneType commands on the old PC from an iPhone or Android on house Wi-Fi. Password login first. Don't open SSH to the internet.](<ssh-from-phone>) [Keep the computer on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [Find the computer on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousWhen SSH says the computer looks different](<leftover-box-ssh-host-key>) [NextSee which laptop keys the computer already trusts](<leftover-box-authorized-keys>)

---

*Labthrift Markdown mirror. HTML version linked above.*
