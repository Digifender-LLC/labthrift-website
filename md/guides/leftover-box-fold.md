# Wrap long lines

Source: https://labthrift.com/guides/leftover-box-fold
Markdown: https://labthrift.com/md/guides/leftover-box-fold.md

*Notes › / › Faster network › / › Wrap long lines*

[Notes](<./>) / [Faster network](<./#switches>) / Wrap long lines

Written 30 Aug 2026. This is a how-to, not a product card.

# Wrap long lines

After SSH works, `fold` wraps long lines so they don't run off the window. You don't need a file manager for this.

[Number lines](<leftover-box-nl>) put numbers next to each line. Tonight you wrap long lines. `fold` does that. A long line becomes several short lines in the window. The file on disk stays one long line.

You are still only looking. It does not need a desktop, a file manager, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If line numbers are what you want, that is [number lines](<leftover-box-nl>). If a whole dump with no wrap is what you want, that is [read a file without opening the editor](<leftover-box-cat>). If one screen at a time is what you want, that is [read a file one screen at a time](<leftover-box-less>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`fold` wraps long lines. You type `fold`, then a file. Default width is 80 columns. `-w` is optional narrower wrap. `-s` is optional break at spaces so words stay whole. The computer prints wrapped lines. It does not rewrite the file unless you ask it to.

It is not `cat`. Cat dumps without wrap. It is not `less`. Less is one screen at a time. It is not `fmt`. Fmt reflows paragraphs. That is [reflow paragraphs](<leftover-box-fmt>).

## Wrap long lines from a practice file

SSH in.

Make a long line in home:

`printf 'The old PC in the closet still turns on and you can type commands from the couch.\n' > ~/note.txt`

That save is [save output to a file](<leftover-box-redirect>). Peek first:

`cat ~/note.txt`

You want the line to run long across the window. Now wrap long lines:

`fold ~/note.txt`

You want several short lines in the window. Default width is 80 columns. The file on disk is still one long line. That is the whole first-night trick: wrap in a window, file left alone.

Need a narrower wrap?

`fold -w 40 ~/note.txt`

`-w 40` is width 40 columns. The long line becomes more short lines.

Need break at spaces so words stay whole?

`fold -s -w 40 ~/note.txt`

`-s` breaks near spaces when it can. Plain `fold` is enough for tonight.

If you see command not found for `fold`, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have them. That install is not a reason to buy a file manager.

When you are done looking, throw away the practice file:

`rm ~/note.txt`

Careful delete only. That is [delete a file carefully](<leftover-box-rm>).

## Useful extras, still looking only

Skip `fmt`, `sed`, `awk`, and `xargs` tonight. Tonight the tool is `fold`. Skip rewriting the file with a redirect tonight. Practice print first.

Skip fold over files you care about, paths under `/etc`, and SSH settings. Practice only files you just made in home. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not line numbers. That is [number lines](<leftover-box-nl>). It is not a whole dump without wrap. That is [read a file without opening the editor](<leftover-box-cat>). It is not one screen at a time. That is [read a file one screen at a time](<leftover-box-less>).

## What next

Need line numbers first? [Number lines](<leftover-box-nl>). Need columns joined? [Join columns side by side](<leftover-box-paste>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `fold` over files you care about, paths under `/etc`, and SSH settings. Practice only in home.
  * Skip `sed`, `awk`, `xargs`, `fmt`, and huge logs tonight. Fold by itself is enough for first wrap.
  * Skip `fold` piped into `rm`. Practice tools that print, then peek with `cat`.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[GNU coreutils: fold invocation](<https://www.gnu.org/software/coreutils/manual/html_node/fold-invocation.html>). [Debian: fold](<https://manpages.debian.org/bookworm/coreutils/fold.1.en.html>). [Ubuntu: fold](<https://manpages.ubuntu.com/manpages/noble/man1/fold.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For line numbers, see [number lines](<leftover-box-nl>). For a whole dump, see [read a file without opening the editor](<leftover-box-cat>). For one screen, see [read a file one screen at a time](<leftover-box-less>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Number linesAfter SSH works, nl numbers lines of a file so a practice list is easier to scan. You don't need extra software for this.](<leftover-box-nl>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [See the start of a fileAfter SSH works, print the first lines of a file with head so a long file does not flood the window. You don't need a file viewer for this.](<leftover-box-head>) [See the end of a fileAfter SSH works, print the last lines of a file with tail so a long file does not flood the window. You don't need a log viewer app for this.](<leftover-box-tail>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [Pull one columnAfter SSH works, pull one column with cut so a mixed line is easier to scan. You don't need a file manager for this.](<leftover-box-cut>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousNumber lines](<leftover-box-nl>) [NextDownload a file onto the computer](<leftover-box-curl>)

---

*Labthrift Markdown mirror. HTML version linked above.*
