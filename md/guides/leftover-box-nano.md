# Edit a file from the couch

Source: https://labthrift.com/guides/leftover-box-nano
Markdown: https://labthrift.com/md/guides/leftover-box-nano.md

*Notes › / › Faster network › / › Edit a file from the couch*

[Notes](<./>) / [Faster network](<./#switches>) / Edit a file from the couch

Written 28 Aug 2026. This is a how-to, not a product card.

# Edit a file from the couch

After SSH works, open a file with `nano`, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.

[SSH from the couch](<first-ssh>) lets you type commands on the computer. Sometimes the computer already has a file you need to change: a note, a share path, a line in a config. `nano` is a small text editor that is already on Debian and Ubuntu. You run it in the SSH window. The computer does not need VS Code, vim, or a USB stick for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. A short name is nicer: [give the computer a short name on your laptop](<leftover-box-ssh-config>). If you only need to move a file that already lives on the laptop, that is [copy a file to the computer from your laptop](<leftover-box-scp>). This note is `nano` after you have logged in. Laptop-side `nano` for the SSH nickname is on the short-name note. Skip this whole note if you are not changing a file tonight.

## What this is

`nano` opens a file in the SSH window. The bottom two lines are keyboard shortcuts. The caret `^` means Ctrl. You type, save, quit. The computer writes the file. On most Debian and Ubuntu installs, nano is already there. It is not vim. If you typed `vim` by accident and the screen looks stuck, type `:q!` and Enter to leave without saving, then start over with `nano`.

## Practice on a throwaway file first

Don't start on a login file. SSH in, then make a file that does not matter:

`echo 'hello' > ~/nano-practice.txt`

Then open it:

`nano ~/nano-practice.txt`

You should see the words, a cursor, and those two shortcut lines at the bottom. Add a second line. That is enough for a first save.

## Save and quit

The three keys you actually need:

  * **Ctrl+O** writes the file (think “out”). nano asks for the filename. Enter keeps the same name.
  * **Ctrl+X** leaves nano. If you changed something and forgot to save, it asks. Y then Enter saves. N discards.
  * **Ctrl+C** cancels the question nano is asking, if you typed the wrong name.



Arrow keys move. Backspace deletes. Optional later: Ctrl+K cuts the whole line, Ctrl+U pastes it back. You don't need those tonight.

## Check it landed

Back at the prompt:

`cat ~/nano-practice.txt`

You want your new line in the print. That print command is [read a file without opening the editor](<leftover-box-cat>). Optional look at size and date:

`ls -lh ~/nano-practice.txt`

Delete the practice file when you are done playing:

`rm ~/nano-practice.txt`

## Before you edit a real file, copy it

A config is easier to undo if you kept the old one. For a file in your home folder:

`cp ~/notes.txt ~/notes.txt.bak`

Then:

`nano ~/notes.txt`

Swap the filename for yours. If the original was fine, copy the `.bak` back over it later. Skip this extra copy on the throwaway practice file.

## Optional: a system file

Files under `/etc` need admin. Confirm you can use sudo first: [see if your login can use admin commands](<leftover-box-sudo>). Then:

`sudo nano /etc/hostname`

That hostname file is the computer's name. Changing it for real is [give the computer a name that sticks](<leftover-box-hostname>), not a random edit. Don't open SSH settings tonight. Turning off password login is [turn off password login once the key works](<leftover-box-ssh-no-password>), and it has a safer order than “open sshd_config and guess.”

## If nano is missing

Some skinny leftover installs skip it. Ask:

`nano --version`

If that says command not found, install it the same way as other fixes: [keep the computer updated](<leftover-box-updates>), then:

`sudo apt update && sudo apt install -y nano`

Skip buying an editor app. Skip vim as a first editor.

## What next

Need an empty file before you edit? [Make an empty file](<leftover-box-touch>). Want a spare before you edit? [Copy a file without leaving the computer](<leftover-box-cp>). Need the file on the laptop too? [Copy a file to the computer from your laptop](<leftover-box-scp>) (paths swap to pull one back). Cleaning leftover Marketplace keys uses this same editor: [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). Want to see the names in the folder first? [See what's in a folder](<leftover-box-ls>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip buying VS Code, a “cloud IDE,” or a KVM for a one-line change.
  * Skip starting with vim. Use nano until this is boring.
  * Skip editing `/etc/ssh/sshd_config` from this note. That harden step is [turn off password login once the key works](<leftover-box-ssh-no-password>).
  * Skip opening SSH to the internet so you can edit from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU nano](<https://www.nano-editor.org/>). [GNU nano: nano(1)](<https://www.nano-editor.org/dist/latest/nano.1.html>). [Debian: nano](<https://manpages.debian.org/bookworm/nano/nano.1.en.html>). [Ubuntu: nano](<https://manpages.ubuntu.com/manpages/noble/en/man1/nano.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short name, see [give the computer a short name on your laptop](<leftover-box-ssh-config>). For moving a file without editing it, see [copy a file to the computer from your laptop](<leftover-box-scp>). For sudo, see [see if your login can use admin commands](<leftover-box-sudo>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager app for this.](<leftover-box-touch>) [Give the computer a short name on your laptopAfter SSH works, put a short name in your laptop SSH config so you type ssh lab instead of the long address. You don't need a new router.](<leftover-box-ssh-config>) [See which laptop keys the computer already trustsBefore you turn off password login, look at which laptop keys can already get in. Remove leftovers from an old Marketplace box. You don't need a YubiKey for this.](<leftover-box-authorized-keys>) [See if your login can use admin commandsBefore you change passwords or turn on the firewall, check that your login can use sudo. You don't need extra login software.](<leftover-box-sudo>) [Give the computer a name that sticksPing and SSH are easier if the computer has a short name. lab works. Set it so the name survives a reboot.](<leftover-box-hostname>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager app for this.](<leftover-box-cd>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousCopy a file to the computer from your laptop](<leftover-box-scp>) [NextReuse a command you already typed](<leftover-box-history>)

---

*Labthrift Markdown mirror. HTML version linked above.*
