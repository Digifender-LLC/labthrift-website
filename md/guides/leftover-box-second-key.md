# Put a key on a second computer first

Source: https://labthrift.com/guides/leftover-box-second-key
Markdown: https://labthrift.com/md/guides/leftover-box-second-key.md

*Notes › / › Faster network › / › Put a key on a second computer first*

[Notes](<./>) / [Faster network](<./#switches>) / Put a key on a second computer first

Written 28 Aug 2026. This is a how-to, not a product card.

# Put a key on a second computer first

Before you turn off password login, give a second laptop its own key so you are not locked out if the first one dies. You don't need a YubiKey.

[Log in with a key](<leftover-box-ssh-keys>) put a key on one laptop. [Turn off password login](<leftover-box-ssh-no-password>) then stops the password at SSH. If that one laptop dies, the password is no longer a way in from the house. A second key is a second computer the computer already trusts. This is not a copy of the first private key. Make a new key on the second computer. A keyboard on the computer is still the last backup.

## Skip until the first key login is boring

[Log in with a key](<leftover-box-ssh-keys>) should already work from the first laptop. Prefer one look at the list first: [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>). A short name is nicer on the second laptop too: [give the computer a short name on your laptop](<leftover-box-ssh-config>). Skip this whole note if you only have one computer and you keep a keyboard on the computer. Skip buying a second laptop just for this.

## What this is

You make a new key pair on computer two. The public line goes on the computer. The computer then trusts two computers. Don't copy the private key from laptop one. Don't email it. Don't put it on a USB stick. Each computer gets its own key. If one laptop is lost, you remove that one public line later. The other computer still gets in.

## Make a key on the second computer

On the second laptop (Windows Terminal, PowerShell, Mac Terminal, or Linux), same command as the first key:

`ssh-keygen -t ed25519 -C "second-laptop"`

Accept the default path when it asks. A passphrase on the key is optional. A short one is still better than none, so a stolen laptop file is not a free login. If you skip the passphrase, press Enter at that prompt. It writes two files under `.ssh` in that computer's home folder. One ends in `.pub`. That is the public key.

## Copy the public key

From the second computer, prefer this. It asks for the password one last time, unless that computer already has a key:

`ssh-copy-id you@that-address`

Swap `you` and `that-address` the way [SSH from the couch](<first-ssh>) taught you. If this second laptop already has a short name, `ssh-copy-id lab` works the same. That short name is [give the computer a short name on your laptop](<leftover-box-ssh-config>), done again on this computer.

If `ssh-copy-id` is missing, SSH in with the password. On the computer, append the public line, the whole contents of the second-laptop file that ends in `.pub`, to `~/.ssh/authorized_keys`. Don't paste the private file. Then:

`chmod 700 ~/.ssh`

`chmod 600 ~/.ssh/authorized_keys`

## Try it

From the second computer:

`ssh lab`

Or the long form, if this laptop has no short name yet:

`ssh you@that-address`

It should not ask for the password. It may ask for the key passphrase, if you set one. You should see the prompt. Then, from the first laptop, log in the same way. That key should still work. If the second computer still asks for the password, the public line is not on that user, or you pasted the wrong file. Check you used the username, the same number, and the `.pub` file, not the private one. Run `ssh-copy-id` again.

## Look at the list

On the computer, you should now see two public lines. That look is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>):

`cat ~/.ssh/authorized_keys`

You want two lines that start with `ssh-ed25519`, one tagged `laptop` and one tagged `second-laptop` if you used those comments. Optional count:

`wc -l < ~/.ssh/authorized_keys`

Two is the usual win after this note. More than that is fine if you already added a third computer. A line you don't recognize is leftover from a Marketplace box. Remove that one the way the trusted-key note taught you.

## What next

If the key has a passphrase, [unlock your key once per laptop session](<leftover-box-ssh-agent>) so you are not typing it on every login. When both computers get in without the password, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep a keyboard on the computer as the last backup. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if the first key login is still flaky. Finish [log in with a key](<leftover-box-ssh-keys>) first.
  * Skip buying a second laptop just for this. Use a computer you already have, or keep a keyboard.
  * Skip copying the private key from laptop one. Make a new key on computer two.
  * Skip a YubiKey for a computer.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[OpenSSH: ssh-keygen](<https://man.openbsd.org/ssh-keygen>). [Debian: ssh-keygen](<https://manpages.debian.org/bookworm/openssh-client/ssh-keygen.1.en.html>). [Debian: ssh-copy-id](<https://manpages.debian.org/bookworm/openssh-client/ssh-copy-id.1.en.html>). Official pages only. For the first key, see [log in with a key](<leftover-box-ssh-keys>). For the trusted-key list, see [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>). For the short name, see [give the computer a short name on your laptop](<leftover-box-ssh-config>). For turning off password SSH after both keys work, see [turn off password login once the key works](<leftover-box-ssh-no-password>).

## Also on this topic

[Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [Give the computer a short name on your laptopAfter SSH works, put a short name in your laptop SSH config so you type ssh lab instead of the long address. You don't need a new router.](<leftover-box-ssh-config>) [Unlock your key once per laptop sessionAfter the key has a passphrase, load it once with ssh-add so you are not typing that passphrase on every ssh lab. You don't need a YubiKey.](<leftover-box-ssh-agent>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousGive the computer a short name on your laptop](<leftover-box-ssh-config>) [NextUnlock your key once per laptop session](<leftover-box-ssh-agent>)

---

*Labthrift Markdown mirror. HTML version linked above.*
