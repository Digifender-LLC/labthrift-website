# Ask a command what it does

Source: https://labthrift.com/guides/leftover-box-help
Markdown: https://labthrift.com/md/guides/leftover-box-help.md

*Notes › / › Faster network › / › Ask a command what it does*

[Notes](<./>) / [Faster network](<./#switches>) / Ask a command what it does

Written 29 Aug 2026. This is a how-to, not a product card.

# Ask a command what it does

After SSH works, ask a command what it does with `--help` so you can read the short cheat sheet without leaving the window. Optional `man` for the longer page. You don't need a software store for this.

[See where a command lives](<leftover-box-which>) told you if the tool is installed. Tonight you only need one more answer: what flags does it take? Most tools print a short cheat sheet when you add `--help`. You are still only looking. The computer does not need a desktop, a software store, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need to know whether the tool exists, that is [see where a command lives](<leftover-box-which>). If you only need names in a folder, that is [see what's in a folder](<leftover-box-ls>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`--help` means "print the short cheat sheet." You can keep calling it "what does this do." You type the tool name, then two dashes and the word help. The computer prints a short page of options, then drops you back at the prompt. It is not installing anything. It is not a web search. It prints the tool's own short options list. Some older tools only answer to `-h`. Try `--help` first.

## Ask a practice command for its cheat sheet

SSH in. Pick a tool you already used. `ls` is a safe first try:

`ls --help`

You want a short flood of lines: usage at the top, then flags like `-l` and `-a`. That is the cheat sheet. You don't need to memorize it. Glance, then press Up and edit the real command.

Try the editor next:

`nano --help`

You want a short page about nano. If you see command not found, install only that one tool, then try again:

`sudo apt install nano`

Then:

`nano --help`

If a tool ignores `--help`, try the short form:

`ping -h`

Careful: on some tools `-h` means something else. On `ls`, `-h` means human-readable sizes, not help. When the short form looks wrong, stick with `--help`.

## Useful extras, still looking only

Need the longer manual for one night?

`man ls`

Space pages forward. `b` goes back. `q` leaves. Same keys as [read a file one screen at a time](<leftover-box-less>). If `man` itself is missing, install the manuals once:

`sudo apt install man-db`

Stick with `--help`. It is shorter, and you stay at the prompt when it finishes.

Confirm the tool exists before you ask it for help:

`command -v ls`

A path means go. A blank window means install that one tool first. That is [see where a command lives](<leftover-box-which>).

When the cheat sheet is long, page it:

`ls --help | less`

Space turns the page. `q` leaves. Same idea as reading a long file. That bar is [send output into another command](<leftover-box-pipe>).

When you are done looking, you don't need to delete anything. This note only prints text.

## What this is not

This is not a search for whether the tool is installed. That is [see where a command lives](<leftover-box-which>). It is not a dump of a file. That is [read a file without opening the editor](<leftover-box-cat>). It is not flipping back through lines you already typed. That is [reuse a command you already typed](<leftover-box-history>). It is not installing a package store or a "software center." One missing tool is `sudo apt install` for that one name. It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need to hand the cheat sheet to another command? [Send output into another command](<leftover-box-pipe>). Need to park command print in a file? [Save output to a file](<leftover-box-redirect>). Need to know if the tool is even there? [See where a command lives](<leftover-box-which>). Need the editor after the cheat sheet pointed at a flag? [Edit a file from the couch](<leftover-box-nano>). Need names in a folder again? [See what's in a folder](<leftover-box-ls>). Need to flip back through lines you already typed? [Reuse a command you already typed](<leftover-box-history>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip buying a software store, Softaculous, or a new mini PC because one cheat sheet looked long. Glance, then try the real command.
  * Skip deep `info` pages, `apropos`, and installing every `-doc` package tonight. `--help` is enough for the first look.
  * Skip copying random flags from a blog into `/etc` just because the cheat sheet listed them. Practice only on tools you already met.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can read help pages from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU coreutils: common options (including --help)](<https://www.gnu.org/software/coreutils/manual/html_node/Common-options.html>). [Debian: man](<https://manpages.debian.org/bookworm/man-db/man.1.en.html>). [Ubuntu: man](<https://manpages.ubuntu.com/manpages/noble/man1/man.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For whether the tool exists, see [see where a command lives](<leftover-box-which>). For paging a long dump, see [read a file one screen at a time](<leftover-box-less>). For reusing a typed line, see [reuse a command you already typed](<leftover-box-history>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See where a command livesAfter SSH works, ask where a command lives with command -v so you know if nano or python is installed before you chase a missing package. You don't need a software store for this.](<leftover-box-which>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer app for this.](<leftover-box-less>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager app for this.](<leftover-box-pipe>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSee where a command lives](<leftover-box-which>) [NextSend output into another command](<leftover-box-pipe>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
