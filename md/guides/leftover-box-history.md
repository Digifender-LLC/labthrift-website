# Reuse a command you already typed

Source: https://labthrift.com/guides/leftover-box-history
Markdown: https://labthrift.com/md/guides/leftover-box-history.md

*Notes › / › Faster network › / › Reuse a command you already typed*

[Notes](<./>) / [Faster network](<./#switches>) / Reuse a command you already typed

Written 28 Aug 2026. This is a how-to, not a product card.

# Reuse a command you already typed

After SSH works, flip back through commands you already typed with the Up arrow or `history`. You don't need a notebook for the same long line twice.

[SSH from the couch](<first-ssh>) puts you at a prompt. You will type the same long lines more than once: updates, a `nano` path, a check after reboot. The computer already remembers what you typed in this login. Your job is to ask for that list, not to retype it from a sticky note.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. A short name is nicer: [give the computer a short name on your laptop](<leftover-box-ssh-config>). If you only need to move a file, that is [copy a file to the computer from your laptop](<leftover-box-scp>). If you are changing a file, that is [edit a file from the couch](<leftover-box-nano>). This note is how you reuse a command you already ran. Skip this whole note if you are still stuck on the first login.

## What this is

Bash (the usual prompt on Debian and Ubuntu) keeps a list of recent commands for your login. The Up arrow brings the last one back. `history` prints the numbered list. You are not installing software. You are not buying a “command notebook” app. This is the computer's own memory of what you typed.

## The Up arrow is enough most nights

SSH in. At the prompt, press the **Up** arrow once. The last command you ran appears. Press Enter to run it again. Press Up a few more times to walk further back. Down walks forward. Edit the line with the arrow keys if only one word changed, then Enter.

That alone covers weekly updates, a second `nano` on the same file, and “run that check again.”

## See the list with history

When Up is not enough, ask for the list:

`history`

You get numbered lines. The newest are at the bottom. Optional: only the last ten:

`history | tail`

or:

`history 10`

on some computers. If `history 10` looks wrong, stick with `history | tail`.

## Run one again by number

If the list shows line 142 and that is the command you want:

`!142`

Enter runs that exact line again. Look twice before you press Enter on anything with `rm`, `passwd`, or `reboot`. Optional peek without running:

`!142:p`

That prints the line and leaves it alone. Skip the bang shortcuts until Up arrow feels boring.

## Optional: search without scrolling

At an empty prompt, press **Ctrl+R** , then type a word from the old command (for example `nano` or `apt`). Bash shows the newest match. Ctrl+R again walks older matches. Enter runs it. Esc cancels. Skip this until Up and `history` are comfortable.

## What history is not

This list is your login’s recent commands. It is not a security camera. It is not every other person’s login. It is not a backup of files. Failed password guesses are [see if anyone guessed the password](<leftover-box-failed-guesses>). Who is logged in right now is [see who is on the computer right now](<leftover-box-who>).

## What next

Need to change a file? [Edit a file from the couch](<leftover-box-nano>). Need the file on the laptop too? [Copy a file to the computer from your laptop](<leftover-box-scp>). Want to see the names in the folder first? [See what's in a folder](<leftover-box-ls>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip buying a command-history app, a “cheat sheet” SaaS, or a second monitor for this.
  * Skip clearing history tonight to “look clean.” You are learning. The list helps.
  * Skip opening SSH to the internet so you can reuse commands from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU Bash: Bash History Facilities](<https://www.gnu.org/software/bash/manual/html_node/Bash-History-Facilities.html>). [Debian: bash](<https://manpages.debian.org/bookworm/bash/bash.1.en.html>). [Ubuntu: bash](<https://manpages.ubuntu.com/manpages/noble/en/man1/bash.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short name, see [give the computer a short name on your laptop](<leftover-box-ssh-config>). For editing a file, see [edit a file from the couch](<leftover-box-nano>). For moving a file, see [copy a file to the computer from your laptop](<leftover-box-scp>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager for this.](<leftover-box-cd>) [Give the computer a short name on your laptopAfter SSH works, put a short name in your laptop SSH config so you type ssh lab instead of the long address. You don't need a new router.](<leftover-box-ssh-config>) [Unlock your key once per laptop sessionAfter the key has a passphrase, load it once with ssh-add so you are not typing that passphrase on every ssh lab. You don't need a YubiKey.](<leftover-box-ssh-agent>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousEdit a file from the couch](<leftover-box-nano>) [NextSee what's in a folder](<leftover-box-ls>)

---

*Labthrift Markdown mirror. HTML version linked above.*
