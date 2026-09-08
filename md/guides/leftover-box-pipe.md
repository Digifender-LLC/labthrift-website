# Send output into another command

Source: https://labthrift.com/guides/leftover-box-pipe
Markdown: https://labthrift.com/md/guides/leftover-box-pipe.md

*Notes › / › Faster network › / › Send output into another command*

[Notes](<./>) / [Faster network](<./#switches>) / Send output into another command

Written 29 Aug 2026. This is a how-to, not a product card.

# Send output into another command

After SSH works, send output into another command with `|` so a long dump does not flood the window. You don't need a file manager for this.

[Ask a command what it does](<leftover-box-help>) already printed a cheat sheet. That cheat sheet can flood. Tonight you hand what the first command printed to a second command. The vertical bar `|` does that. You can keep calling it a pipe. You already saw one: `ls --help | less`. You are still only looking on the computer. It does not need a desktop, a file manager, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need the short cheat sheet, that is [ask a command what it does](<leftover-box-help>). If you only need to page a file, that is [read a file one screen at a time](<leftover-box-less>). If you only need to park a short line in a file, that is [put a short line into a file](<leftover-box-echo>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

A pipe means take what the first command printed, and hand it to the second. You type the first tool, a vertical bar, then the second tool. It never makes a file in the middle. That is the difference from the arrow in [put a short line into a file](<leftover-box-echo>). The arrow parks words in a file. The bar hands words to another command. It is not installing anything. It is not a search of every file. That is [find a file by name](<leftover-box-find>).

## Page a cheat sheet

SSH in. Start with a tool you already used. `ls` is a safe first try:

`ls --help | less`

You want the same cheat sheet as [ask a command what it does](<leftover-box-help>), one screen at a time. Space turns the page. `q` leaves. Same keys as [read a file one screen at a time](<leftover-box-less>). It did not write a new file. It only handed the print to `less`.

Count a flood without dumping it:

`seq 1 80 | wc -l`

You want the number `80`. `seq` would have printed eighty lines. The pipe handed them to [see how long a file is](<leftover-box-wc>) instead. That is the whole first-night trick: first command prints, second command reads that print.

## Useful extras, still looking only

Need only the matching lines from a cheat sheet?

`ls --help | grep -i color`

You want a short handful of lines that mention color. That is [find a word in a file](<leftover-box-grep>), but the "file" tonight is the print, not a path.

Need the first ten of a flood?

`seq 1 80 | head`

You want lines 1 through 10. That is [see the start of a file](<leftover-box-head>) on a print, not on a file.

If it says command not found for `seq`, `wc`, or `head`, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have them. That install is not a reason to buy a file manager.

When you are done looking, you don't need to delete anything. This note only prints text.

## What this is not

This is not parking command print in a file. That is [save output to a file](<leftover-box-redirect>). It is not parking words you typed. That is [put a short line into a file](<leftover-box-echo>). It is not paging a file that already lives on disk. That is [read a file one screen at a time](<leftover-box-less>). It is not the cheat sheet by itself. That is [ask a command what it does](<leftover-box-help>). It is not a search for whether the tool exists. That is [see where a command lives](<leftover-box-which>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need the short cheat sheet first? [Ask a command what it does](<leftover-box-help>). Need to page a file that already lives on disk? [Read a file one screen at a time](<leftover-box-less>). Need a line count of a file? [See how long a file is](<leftover-box-wc>). Need only matching lines? [Find a word in a file](<leftover-box-grep>). Need to park command print in a file? [Save output to a file](<leftover-box-redirect>). Need words you typed, not command print? [Put a short line into a file](<leftover-box-echo>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip piping output into `rm`, `mv`, or anything that changes files. Practice only with tools that print: `less`, `wc`, `grep`, `head`.
  * Skip mixing the bar with arrows into files you care about. Parking command print is [save output to a file](<leftover-box-redirect>). Words you typed are [put a short line into a file](<leftover-box-echo>).
  * Skip `xargs`, `2>&1`, and error pipes tonight. Watching print while you save a copy is [watch and save output at once](<leftover-box-tee>). One bar between two tools is enough for the first look.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can pipe output from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU Bash: Pipelines](<https://www.gnu.org/software/bash/manual/html_node/Pipelines.html>). [Debian: bash](<https://manpages.debian.org/bookworm/bash/bash.1.en.html>). [Ubuntu: bash](<https://manpages.ubuntu.com/manpages/noble/man1/bash.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For the cheat sheet, see [ask a command what it does](<leftover-box-help>). For paging a file, see [read a file one screen at a time](<leftover-box-less>). For parking a line in a file, see [put a short line into a file](<leftover-box-echo>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Ask a command what it doesAfter SSH works, ask a command what it does with --help so you can read the short cheat sheet. You don't need a software store for this.](<leftover-box-help>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [See where a command livesAfter SSH works, ask where a command lives with command -v so you know if a tool is installed. You don't need a software store for this.](<leftover-box-which>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousAsk a command what it does](<leftover-box-help>) [NextSave output to a file](<leftover-box-redirect>)

---

*Labthrift Markdown mirror. HTML version linked above.*
