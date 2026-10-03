# Watch and save output at once

Source: https://labthrift.com/guides/leftover-box-tee
Markdown: https://labthrift.com/md/guides/leftover-box-tee.md

*Notes › / › Faster network › / › Watch and save output at once*

[Notes](<./>) / [Faster network](<./#switches>) / Watch and save output at once

Written 30 Aug 2026. This is a how-to, not a product card.

# Watch and save output at once

After SSH works, watch command output and save it at the same time with `tee`. You don't need a file manager for this.

[Send output into another command](<leftover-box-pipe>) handed print to a second tool. [Save output to a file](<leftover-box-redirect>) parked that print in a file, but the window went quiet. Tonight you see the print _and_ keep a copy. `tee` does both. You are still only looking on the computer. It does not need a desktop, a file manager, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need to hand print to another tool, that is [send output into another command](<leftover-box-pipe>). If you only need a quiet file and don't care about the window, that is [save output to a file](<leftover-box-redirect>). If you only need words you typed, that is [put a short line into a file](<leftover-box-echo>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`tee` means show me the print, and also write a copy. You type a tool, a vertical bar, then `tee` and a file name. It prints the same lines in your window and parks them in that file. It is the bar from [send output into another command](<leftover-box-pipe>) plus the save from [save output to a file](<leftover-box-redirect>), in one step. It is not installing anything. It is not a second computer watching the first.

## Watch a practice dump and keep a copy

SSH in. Start with a tool you already used. `ls` is a safe first try:

`ls > ~/names.txt`

That quiet save is [save output to a file](<leftover-box-redirect>). The window stayed blank. Now try the same list with a copy you can watch:

`ls | tee ~/names-tee.txt`

You want the folder names on screen, same as a plain `ls`. Then peek at the copy:

`cat ~/names-tee.txt`

You want the same names again. That is the whole first-night trick: print in the window, copy on disk.

Try a short numbered flood next:

`seq 1 20 | tee ~/numbers.txt`

You want lines 1 through 20 on screen. Then:

`wc -l ~/numbers.txt`

You want `20`. The file kept every line you just watched.

## Useful extras, still looking only

Need to add to a file you already started, without wiping it?

`seq 21 30 | tee -a ~/numbers.txt`

You want lines 21 through 30 on screen. `-a` means append, same idea as `>>` in [save output to a file](<leftover-box-redirect>). Then:

`tail ~/numbers.txt`

You want the new lines at the end. That is [see the end of a file](<leftover-box-tail>).

Need the cheat sheet on screen and in a file?

`ls --help | tee ~/ls-help.txt | less`

You want the cheat sheet one screen at a time. Space turns the page. `q` leaves. The file still has the full cheat sheet when you leave. That is `tee` into `less`. Paging alone is [read a file one screen at a time](<leftover-box-less>).

If it says command not found for `tee` or `seq`, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have them. That install is not a reason to buy a file manager.

When you are done looking, throw away the practice files:

`rm ~/names-tee.txt ~/numbers.txt ~/ls-help.txt`

Careful delete only. That is [delete a file carefully](<leftover-box-rm>).

## What this is not

This is not a quiet save with a blank window. That is [save output to a file](<leftover-box-redirect>). It is not handing print to another tool without a file. That is [send output into another command](<leftover-box-pipe>). It is not words you typed. That is [put a short line into a file](<leftover-box-echo>). It is not the editor. That is [edit a file from the couch](<leftover-box-nano>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need a quiet save with no print in the window? [Save output to a file](<leftover-box-redirect>). Need to hand print to another tool without a file? [Send output into another command](<leftover-box-pipe>). Need words you typed? [Put a short line into a file](<leftover-box-echo>). Need a short dump of the file you just saved? [Read a file without opening the editor](<leftover-box-cat>). Need to page a file that got long? [Read a file one screen at a time](<leftover-box-less>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip pointing `tee` at anything under `/etc`, SSH settings, or a file you care about. Practice only in home tonight. `tee` without `-a` replaces the whole file.
  * Skip error pipes, `2>&1`, and `xargs` tonight. One bar into `tee` is enough.
  * Skip `tee` into `rm`, device names, or paths you did not just make. Practice only tools that print, then peek with `cat`.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip opening SSH to the internet so you can watch output from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU coreutils: tee invocation](<https://www.gnu.org/software/coreutils/manual/html_node/tee-invocation.html>). [Debian: tee](<https://manpages.debian.org/bookworm/coreutils/tee.1.en.html>). [Ubuntu: tee](<https://manpages.ubuntu.com/manpages/noble/man1/tee.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For handing print to another command, see [send output into another command](<leftover-box-pipe>). For a quiet save, see [save output to a file](<leftover-box-redirect>). For words you typed, see [put a short line into a file](<leftover-box-echo>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Save output to a fileAfter SSH works, save command output to a file with > so you can read it later. You don't need a file manager for this.](<leftover-box-redirect>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousSave output to a file](<leftover-box-redirect>) [NextPut lines in order](<leftover-box-sort>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
