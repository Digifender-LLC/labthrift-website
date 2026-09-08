# See where a command lives

Source: https://labthrift.com/guides/leftover-box-which
Markdown: https://labthrift.com/md/guides/leftover-box-which.md

*Notes › / › Faster network › / › See where a command lives*

[Notes](<./>) / [Faster network](<./#switches>) / See where a command lives

Written 29 Aug 2026. This is a how-to, not a product card.

# See where a command lives

After SSH works, ask where a command lives with `command -v` so you know if nano or python is installed before you chase a missing package. You don't need a software store for this.

[Reuse a command you already typed](<leftover-box-history>) flips back through lines you already ran. Tonight you only need one answer: is this tool on the computer, and where? `command -v` prints the path for a name you type. Blank output means it is not there. You are still only looking. The computer does not need a desktop, a software store, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need the names in a folder, that is [see what's in a folder](<leftover-box-ls>). If you only need to reuse a line you typed earlier, that is [reuse a command you already typed](<leftover-box-history>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`command -v` means "command, verbose path." You can keep calling it "where does this live." You give one short name. If that name is a real program, it prints the full path, something like `/usr/bin/nano`. If the name is missing, the window stays blank and the command exits with nothing useful. That blank line is the useful answer. It is not a package install. It is not a search of every file. That is [find a file by name](<leftover-box-find>). One name, one path, or nothing.

## Ask where a practice command lives

SSH in. Pick a tool you already used. `ls` is a safe first try:

`command -v ls`

You want a path, usually `/usr/bin/ls` or `/bin/ls`. That means the computer already has it.

Try the editor next:

`command -v nano`

A path means [edit a file from the couch](<leftover-box-nano>) can open. A blank window means nano is not installed yet. Install only that one tool if you need it:

`sudo apt install nano`

Then ask again. You want a path this time.

Try a name that is probably missing, so you see the blank case:

`command -v this-is-not-a-real-tool`

You want a blank window. That is the whole first-night trick: path means go, blank means stop and install (or pick a different tool).

## Useful extras, still looking only

Need several names in one go?

`command -v ls nano python3`

Each name that exists prints its path on its own line. Missing names stay quiet. That is enough to see which of three tools are already on the computer.

Some guides still say `which`. It often works the same way:

`which nano`

Prefer `command -v` tonight. It is built into the shell, so you are not depending on an extra package. If `which` itself is missing, that is not a reason to buy anything. Stick with `command -v`.

If you see command not found for everyday tools like `ls` or `cp`, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have them. That install is not a reason to buy a software store.

When you are done looking, you don't need to delete anything. This note only prints paths.

## What this is not

This is not a search for a file by name. That is [find a file by name](<leftover-box-find>). It is not a dump of a file. That is [read a file without opening the editor](<leftover-box-cat>). It is not a list of folders. That is [see what's in a folder](<leftover-box-ls>). It is not installing a package store or a "software center." One missing tool is `sudo apt install` for that one name. It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need the short cheat sheet for a tool you found? [Ask a command what it does](<leftover-box-help>). Need the editor and it was missing? Install nano, then [edit a file from the couch](<leftover-box-nano>). Need a short line without the editor? [Put a short line into a file](<leftover-box-echo>). Need names in a folder again? [See what's in a folder](<leftover-box-ls>). Need a shortcut? [Make a shortcut](<leftover-box-ln>). Need to flip back through lines you already typed? [Reuse a command you already typed](<leftover-box-history>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `printenv` as tonight's job. Printenv prints environment (HOME and PATH), not which: [see HOME and PATH](<leftover-box-printenv>).
  * Skip buying a software store, Softaculous, or a new mini PC because one name printed blank. Install that one tool, or pick a tool that is already there.
  * Skip `type -a`, `whereis`, and deep PATH edits tonight. `command -v` is enough to see if the name exists.
  * Skip installing random packages from a blog just because the window was blank. Prefer the tool names you already met on Labthrift.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can hunt commands from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[POSIX: command](<https://pubs.opengroup.org/onlinepubs/9699919799/utilities/command.html>). [Debian: bash (see command built-in)](<https://manpages.debian.org/bookworm/bash/bash.1.en.html>). [Ubuntu: bash](<https://manpages.ubuntu.com/manpages/noble/man1/bash.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For the editor, see [edit a file from the couch](<leftover-box-nano>). For finding a file by name, see [find a file by name](<leftover-box-find>). For reusing a typed line, see [reuse a command you already typed](<leftover-box-history>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Find a file by nameAfter SSH works, search the computer for a file by name with find so you don't have to open every folder. You don't need a file manager app for this.](<leftover-box-find>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Make a shortcutAfter SSH works, make a shortcut with ln -s so a second name points at the same file. You don't need a file manager app for this.](<leftover-box-ln>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager app for this.](<leftover-box-echo>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousMake a shortcut](<leftover-box-ln>) [NextAsk a command what it does](<leftover-box-help>)

---

*Labthrift Markdown mirror. HTML version linked above.*
