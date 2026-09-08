# Unlock your key once per laptop session

Source: https://labthrift.com/guides/leftover-box-ssh-agent
Markdown: https://labthrift.com/md/guides/leftover-box-ssh-agent.md

*Notes › / › Faster network › / › Unlock your key once per laptop session*

[Notes](<./>) / [Faster network](<./#switches>) / Unlock your key once per laptop session

Written 28 Aug 2026. This is a how-to, not a product card.

# Unlock your key once per laptop session

After the key has a passphrase, load it once with `ssh-add` so you are not typing that passphrase on every `ssh lab`. You don't need a YubiKey.

[Log in with a key](<leftover-box-ssh-keys>) put a passphrase on the private key so a stolen laptop file is not a free login. That is good. It also means every new SSH asks for that passphrase again. The agent is a small program on the laptop that remembers the unlocked key for this login session. The computer does not change. This is laptop-side only.

## Skip until the key login already works

[Log in with a key](<leftover-box-ssh-keys>) should already get you in. If you never set a passphrase on the key, you can skip this whole note. A short name is nicer when you try it: [give the computer a short name on your laptop](<leftover-box-ssh-config>). Prefer a second computer before you harden password SSH: [put a key on a second computer first](<leftover-box-second-key>).

## What this is

OpenSSH on your laptop can talk to an agent. You unlock the private key once. Later SSH and `scp` reuse that unlock until you log out of the laptop, reboot, or clear the agent. The computer still sees a normal key login. It never sees your passphrase.

## See if an agent is already running

On the laptop (Windows Terminal, PowerShell, Mac Terminal, or Linux):

`echo "$SSH_AUTH_SOCK"`

If that prints a path, an agent is already available in this terminal. On many Mac and Linux desktops it starts with your login. If the line is empty, start one for this terminal:

`eval "$(ssh-agent -s)"`

You should see a line about Agent pid. That only lasts for this terminal until you open a new one, unless your desktop already keeps an agent for every window.

## Load the key once

Default path from [log in with a key](<leftover-box-ssh-keys>):

`ssh-add ~/.ssh/id_ed25519`

Type the key passphrase when it asks. Optional check that it loaded:

`ssh-add -l`

You want one line that mentions `ED25519` and your comment, like `laptop` or `second-laptop`. If it says The agent has no identities, run `ssh-add` again with the private file path, not the `.pub` file.

## Try it

From the same laptop:

`ssh lab`

Or the long form if you have no short name yet:

`ssh you@that-address`

It should not ask for the key passphrase again in this session. It may still ask if the agent never loaded, or if this terminal is not using the same agent. Open a second terminal and try once more. If the second window asks again, that window has no agent yet. Run the `eval` and `ssh-add` steps there, or use a desktop that shares one agent across windows.

## Optional: remember the key in your SSH config

If you already have a short name from [give the computer a short name on your laptop](<leftover-box-ssh-config>), you can add one line under that Host block so a future login offers the key to the agent:
    
    
    Host lab
      AddKeysToAgent yes

The first SSH after a reboot may still ask for the passphrase once. Later ones in that session should stay quiet. This does not turn off the password. That harden step is later.

## What next

Need one file over without a USB stick? [Copy a file to the computer from your laptop](<leftover-box-scp>). When both computers get in without the password, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep a keyboard on the computer as the last backup. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if the key has no passphrase. There is nothing to unlock.
  * Skip if key login is still flaky. Finish [log in with a key](<leftover-box-ssh-keys>) first.
  * Skip a YubiKey for a computer.
  * Skip copying the private key to a USB stick so you never type a passphrase.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[OpenSSH: ssh-agent](<https://man.openbsd.org/ssh-agent>). [OpenSSH: ssh-add](<https://man.openbsd.org/ssh-add>). [Debian: ssh-add](<https://manpages.debian.org/bookworm/openssh-client/ssh-add.1.en.html>). Official pages only. For the key, see [log in with a key](<leftover-box-ssh-keys>). For the short name, see [give the computer a short name on your laptop](<leftover-box-ssh-config>). For a second computer, see [put a key on a second computer first](<leftover-box-second-key>). For turning off password SSH, see [turn off password login once the key works](<leftover-box-ssh-no-password>).

## Also on this topic

[Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [Give the computer a short name on your laptopAfter SSH works, put a short name in your laptop SSH config so you type ssh lab instead of the long address. You don't need a new router.](<leftover-box-ssh-config>) [Put a key on a second computer firstBefore you turn off password login, give a second laptop its own key so you are not locked out if the first one dies. You don't need a YubiKey.](<leftover-box-second-key>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [PreviousPut a key on a second computer first](<leftover-box-second-key>) [NextCopy a file to the computer from your laptop](<leftover-box-scp>)

---

*Labthrift Markdown mirror. HTML version linked above.*
