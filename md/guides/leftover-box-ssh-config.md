# Give the computer a short name on your laptop

Source: https://labthrift.com/guides/leftover-box-ssh-config
Markdown: https://labthrift.com/md/guides/leftover-box-ssh-config.md

*Notes › / › Faster network › / › Give the computer a short name on your laptop*

[Notes](<./>) / [Faster network](<./#switches>) / Give the computer a short name on your laptop

Written 28 Aug 2026. This is a how-to, not a product card.

# Give the computer a short name on your laptop

After SSH works, put a short name in your laptop SSH config so you type `ssh lab` instead of the long address every time. You don't need a new router.

[SSH from the couch](<first-ssh>) taught you `ssh you@that-address`. That works. It is also a lot to type when you check Pi-hole or a share every day. A short name is a few lines in a file on your laptop. The computer does not change. This is not a new hostname on the house network. Prefer a reserved number first so the address in the file stays true: [keep the computer on the same number](<leftover-box-dhcp-reservation>).

## Skip until SSH is boring

If [SSH from the couch](<first-ssh>) still fails, stop. Fix that first. If the address changes after every reboot, reserve it before you lock a number into this file. A key login is nicer with a short name, but not required: [log in with a key, not the password every time](<leftover-box-ssh-keys>). This note is laptop-side only.

## What this file is

On your laptop, OpenSSH reads `~/.ssh/config`. A `Host` block is a nickname. When you type that nickname, SSH fills in the real address and username for you. The computer never sees the nickname. It still sees a normal SSH login.

## Add a Host block

On the laptop (Windows Terminal, PowerShell, Mac Terminal, or Linux), create the folder if it is missing, then open the file:

`mkdir -p ~/.ssh`

`chmod 700 ~/.ssh`

`nano ~/.ssh/config`

If the file already has other Host blocks, leave them. Add this at the end. Swap the username and the house number the way [SSH from the couch](<first-ssh>) taught you. Prefer the reserved number from [keep the computer on the same number](<leftover-box-dhcp-reservation>):
    
    
    Host lab
      HostName 192.168.1.50
      User you

Save and quit (in nano: Ctrl+O, Enter, then Ctrl+X). That nano is on your laptop. To edit a file that lives on the computer, see [edit a computer file from the couch](<leftover-box-nano>). Then lock the file down:

`chmod 600 ~/.ssh/config`

Optional: if your key is not the default path, add one more line under that Host block:

` IdentityFile ~/.ssh/id_ed25519`

That is the private key file from [log in with a key](<leftover-box-ssh-keys>), not the `.pub` file.

## Try it

From the same laptop:

`ssh lab`

You should land on the computer prompt the same way as before. If it asks for a password or key passphrase, that is normal until you harden later. If it says Host key verification failed after a reinstall, that is [when SSH says the computer looks different](<leftover-box-ssh-host-key>), not a bad config nickname.

## What next

Need one file over without a USB stick? [Copy a file to the computer from your laptop](<leftover-box-scp>). Before you turn off password login, [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>), then [put a key on a second computer first](<leftover-box-second-key>). When both computers get in with `ssh lab`, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH from the couch still fails.
  * Skip buying a jump host, bastion, or VPN appliance for a computer on the house network.
  * Skip a YubiKey for this nickname.
  * Skip editing computer `sshd_config` for a laptop shortcut. That harden step is later.
  * Skip opening SSH to the internet.



## Sources

[OpenSSH: ssh_config](<https://man.openbsd.org/ssh_config.5>). [Debian: ssh_config](<https://manpages.debian.org/bookworm/openssh-client/ssh_config.5.en.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a number that stays put, see [keep the computer on the same number](<leftover-box-dhcp-reservation>). For the key, see [log in with a key](<leftover-box-ssh-keys>). For the trusted-key list, see [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>). For a second computer, see [put a key on a second computer first](<leftover-box-second-key>).

## Also on this topic

[Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [Put a key on a second computer firstBefore you turn off password login, give a second laptop its own key so you are not locked out if the first one dies. You don't need a YubiKey.](<leftover-box-second-key>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the same numberSSH and Pi-hole keep working after a reboot when the router always gives the computer the same address.](<leftover-box-dhcp-reservation>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [When SSH says the computer looks differentAfter you reinstall, SSH can refuse because your laptop still remembers the old ID. Clear that memory. You don't need a new router.](<leftover-box-ssh-host-key>) [PreviousSee which laptop keys the computer already trusts](<leftover-box-authorized-keys>) [NextPut a key on a second computer first](<leftover-box-second-key>)

---

*Labthrift Markdown mirror. HTML version linked above.*
