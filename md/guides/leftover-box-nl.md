# Number lines

Source: https://labthrift.com/guides/leftover-box-nl
Markdown: https://labthrift.com/md/guides/leftover-box-nl.md

*Notes › / › Faster network › / › Number lines*

[Notes](<./>) / [Faster network](<./#switches>) / Number lines

Written 30 Aug 2026. This is a how-to, not a product card.

# Number lines

After SSH works, `nl` numbers lines so a long file is easier to point at. You don't need a file manager for this.

[Join columns side by side](<leftover-box-paste>) kept two lists as one line each. Tonight you number lines so you can say look at line 3. `nl` does that. Long files get numbers in the window. You are still only looking on the computer. It does not need a desktop, a file manager, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If columns joined are what you want, that is [join columns side by side](<leftover-box-paste>). If a whole dump with no numbers is what you want, that is [read a file without opening the editor](<leftover-box-cat>). If a number list from scratch is what you want, that is [print a number list](<leftover-box-seq>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`nl` numbers lines. You type `nl`, then a file. Default numbers are body lines: text lines get numbers, blank lines usually don't. `-ba` is optional all lines, blanks included. It prints numbered lines. It does not rewrite the file unless you ask it to.

It is not `seq`. Seq makes numbers from scratch. Nl labels lines you already have. It is not `cat`. Cat dumps without numbers. It is not `cat -n` as this lesson. Tonight the tool is `nl`.

## Number lines from a practice file

SSH in. Make a tiny file in home:

`printf 'apple\nbanana\npear\n' > ~/fruit.txt`

That save is [save output to a file](<leftover-box-redirect>). Peek first:

`cat ~/fruit.txt`

You want apple, then banana, then pear. Now number lines:

`nl ~/fruit.txt`

You want 1 then apple, 2 then banana, 3 then pear. The file on disk is still three fruit lines with no numbers baked in. That is the whole first-night trick: numbers in a window, file left alone.

Need blank lines numbered too? Make a file with a blank in the middle:

`printf 'apple\n\nbanana\n' > ~/fruit.txt`

Default `nl` numbers apple and banana, and skips the blank line. Number every line including blanks:

`nl -ba ~/fruit.txt`

You want 1 apple, 2 on the blank line, 3 banana. `-ba` is optional. Default body lines are enough for tonight.

If it says command not found for `nl`, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have them. That install is not a reason to buy a file manager.

When you are done looking, throw away the practice file:

`rm ~/fruit.txt`

Careful delete only. That is [delete a file carefully](<leftover-box-rm>).

## Useful extras, still looking only

Need narrower numbers and a clearer separator?

`nl -w2 -s'. ' ~/fruit.txt`

`-w2` is width. `-s'. '` is separator after the number. Skip fancy section numbering tonight. Plain `nl` is enough for first look.

Some pages mention `cat -n`. That also prints numbers. Tonight the tool is `nl`. Skip `cat -n` as this lesson.

Skip files under `/etc`, SSH settings, `sed`, `awk`, `xargs`, and huge logs tonight. Practice only files you just made in home. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not columns joined. That is [join columns side by side](<leftover-box-paste>). It is not `seq`. Seq makes numbers from scratch. That is [print a number list](<leftover-box-seq>). It is not wrap of long lines. That is [wrap long lines](<leftover-box-fold>).

## What next

Need long lines wrapped? [Wrap long lines](<leftover-box-fold>). Need columns joined first? [Join columns side by side](<leftover-box-paste>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `nl` over files you care about, paths under `/etc`, and SSH settings. Practice only files you just made in home.
  * Skip fancy section numbering, huge logs, `sed`, `awk`, and `xargs` tonight. `nl` by itself is enough for first line numbers.
  * Skip `nl` piped into `rm`. Practice tools that print, then peek with `cat`.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[GNU coreutils: nl invocation](<https://www.gnu.org/software/coreutils/manual/html_node/nl-invocation.html>). [Debian: nl](<https://manpages.debian.org/bookworm/coreutils/nl.1.en.html>). [Ubuntu: nl](<https://manpages.ubuntu.com/manpages/noble/man1/nl.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For columns joined, see [join columns side by side](<leftover-box-paste>). For wrap, see [wrap long lines](<leftover-box-fold>). For numbers from scratch, see [print a number list](<leftover-box-seq>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Join columns side by sideAfter SSH works, join columns side by side with paste so two lists become one line each. You don't need a file manager for this.](<leftover-box-paste>) [Pull one columnAfter SSH works, pull one column with cut so a mixed line is easier to scan. You don't need a file manager for this.](<leftover-box-cut>) [Change charactersAfter SSH works, change characters with tr so a mixed line is easier to clean. You don't need a file manager for this.](<leftover-box-tr>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [See the start of a fileAfter SSH works, print the first lines of a file with head so a long file does not flood the window. You don't need a file viewer for this.](<leftover-box-head>) [See the end of a fileAfter SSH works, print the last lines of a file with tail so a long file does not flood the window. You don't need a log viewer for this.](<leftover-box-tail>) [See how long a file isAfter SSH works, count lines with wc so you know if a dump will flood the window. You don't need a file manager for this.](<leftover-box-wc>) [Wrap long linesAfter SSH works, wrap long lines with fold. You don't need extra software for this.](<leftover-box-fold>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousJoin columns side by side](<leftover-box-paste>) [NextWrap long lines](<leftover-box-fold>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
