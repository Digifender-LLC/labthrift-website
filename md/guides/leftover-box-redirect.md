# Save output to a file

Source: https://labthrift.com/guides/leftover-box-redirect
Markdown: https://labthrift.com/md/guides/leftover-box-redirect.md

*Notes › / › Faster network › / › Save output to a file*

[Notes](<./>) / [Faster network](<./#switches>) / Save output to a file

Written 29 Aug 2026. This is a how-to, not a product card.

# Save output to a file

After SSH works, save command output to a file with `>` so you can read it later. You don't need a file manager for this.

[Send output into another command](<leftover-box-pipe>) handed what the first command printed to a second tool. Tonight you park that print in a file. The single arrow `>` does that. You can keep calling it "save this." You are still only writing a practice file in home on the computer. It does not need a desktop, a file manager, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need to hand what one command printed to another tool, that is [send output into another command](<leftover-box-pipe>). If you only need to park words you typed, that is [put a short line into a file](<leftover-box-echo>). If you only need to page a file that already lives on disk, that is [read a file one screen at a time](<leftover-box-less>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

The single arrow `>` means put what this command printed into this file. You type the tool, then the arrow, then a path. It writes that print to the file, and the window stays quiet. The single arrow replaces whatever was already in that file. The double arrow `>>` adds at the end. That is the difference from the bar in [send output into another command](<leftover-box-pipe>). The bar hands the print to another command. The arrow parks it in a file. It is not words you typed. That is [put a short line into a file](<leftover-box-echo>). It is not an editor. That is [edit a file from the couch](<leftover-box-nano>).

## Save a list in home

SSH in. Start with a tool you already used. `ls` is a safe first try:

`ls > ~/names.txt`

The tilde `~` is a short name for your home folder. The window stays quiet. That quiet is the list writing into `names.txt`. If that file already had words, they are gone. That is the whole first-night trick for a print you want to keep.

Then peek without opening the editor:

`cat ~/names.txt`

You want the folder names, one per line. That is the list, parked. That is enough for tonight.

## Useful extras, still writing only

Need a few extra lines parked too? Add them at the end with the double arrow:

`seq 1 5 >> ~/names.txt`

`cat ~/names.txt`

You want the folder names, then 1 through 5. The double arrow `>>` means add at the end. The list you saved first is still there.

Need only matching lines parked?

`ls --help | grep -i color > ~/help-color.txt`

You want a short file of cheat-sheet lines that mention color. The bar hands the print to [find a word in a file](<leftover-box-grep>). The arrow parks that handful. You can mix one bar and one arrow when the arrow is last.

If it says command not found for `ls`, `seq`, or `cat`, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have them. That install is not a reason to buy a file manager.

When you are done practicing:

`rm -i ~/names.txt`

Say yes only if that file is the practice list. If you also made `help-color.txt`, delete that file the same way.

## What this is not

This is not parking words you typed. That is [put a short line into a file](<leftover-box-echo>). It is not handing print to another command. That is [send output into another command](<leftover-box-pipe>). It is not paging a file that already lives on disk. That is [read a file one screen at a time](<leftover-box-less>). It is not an editor for several lines. That is [edit a file from the couch](<leftover-box-nano>). It is not a copy of a file that already exists. That is [copy a file without leaving the computer](<leftover-box-cp>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need to watch print and keep a copy at once? [Watch and save output at once](<leftover-box-tee>). Need to hand print to another tool instead of parking it? [Send output into another command](<leftover-box-pipe>). Need words you typed, not command print? [Put a short line into a file](<leftover-box-echo>). Need a short dump of the file you just saved? [Read a file without opening the editor](<leftover-box-cat>). Need to page a file that got long? [Read a file one screen at a time](<leftover-box-less>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip pointing the arrow at anything under `/etc`, SSH settings, or a file you care about. Practice only in home tonight. A single arrow replaces the whole file.
  * Skip error pipes and `2>&1` tonight if you only need a quiet file. Watching the print while you save is [watch and save output at once](<leftover-box-tee>).
  * Skip arrows into `rm`, device names, or paths you did not just make. Practice only tools that print, then peek with `cat`.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can save output from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU Bash: Redirecting Output](<https://www.gnu.org/software/bash/manual/html_node/Redirecting-Output.html>). [GNU Bash: Appending Redirected Output](<https://www.gnu.org/software/bash/manual/html_node/Appending-Redirected-Output.html>). [Debian: bash](<https://manpages.debian.org/bookworm/bash/bash.1.en.html>). [Ubuntu: bash](<https://manpages.ubuntu.com/manpages/noble/man1/bash.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For handing print to another command, see [send output into another command](<leftover-box-pipe>). For words you typed, see [put a short line into a file](<leftover-box-echo>). For a dump after you save, see [read a file without opening the editor](<leftover-box-cat>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSend output into another command](<leftover-box-pipe>) [NextWatch and save output at once](<leftover-box-tee>)

---

*Labthrift Markdown mirror. HTML version linked above.*
