# Join columns side by side

Source: https://labthrift.com/guides/leftover-box-paste
Markdown: https://labthrift.com/md/guides/leftover-box-paste.md

*Notes › / › Faster network › / › Join columns side by side*

[Notes](<./>) / [Faster network](<./#switches>) / Join columns side by side

Written 30 Aug 2026. This is a how-to, not a product card.

# Join columns side by side

After SSH works, join columns side by side with paste so two lists become one line each. You don't need a file manager for this.

[Change characters](<leftover-box-tr>) cleaned mixed lines. [Pull one column](<leftover-box-cut>) kept fruit and color apart. Tonight you join columns side by side so two lists become one line each. `paste` does that. Fruit can sit next to color. You are still only looking. The computer does not need a desktop, a file manager, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If a column pulled is what you want, that is [pull one column](<leftover-box-cut>). If files matched on a shared field are what you want, that is [match files on a shared field](<leftover-box-join>). `join` is a different tool. Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`paste` joins columns side by side. You type `paste`, then two files. `-d` is delimiter: the character that sits between columns. Default join is tab. Comma is optional tonight. It prints joined lines. It does not rewrite the files unless you ask it to.

It is not join. Join matches files on a shared field. Paste joins columns side by side without matching keys. It is not cut. Cut pulls one column out. It is not nl. Nl numbers lines.

## Join columns from practice files

SSH into the computer.

Make two tiny files in home:

`printf 'apple\nbanana\npear\n' > ~/fruit.txt`

`printf 'red\nyellow\ngreen\n' > ~/color.txt`

That save is [save output to a file](<leftover-box-redirect>). Peek first:

`cat ~/fruit.txt`

You want apple, then banana, then pear. Peek color too:

`cat ~/color.txt`

Join them side by side:

`paste ~/fruit.txt ~/color.txt`

You want apple next to red, banana next to yellow, pear next to green. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `paste`. Don't make apt the job. If `paste` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm ~/fruit.txt ~/color.txt`

## Useful extras, still looking only

Optional: comma between columns:

`paste -d, ~/fruit.txt ~/color.txt`

Optional: a pipe character:

`paste -d '|' ~/fruit.txt ~/color.txt`

Don't make `-d` required. You can stay on the default tab.

## What this is not

This is not join. That is [match files on a shared field](<leftover-box-join>). It is not cut. That is [pull one column](<leftover-box-cut>). It is not tr. That is [change characters](<leftover-box-tr>). It is not nl. That is [number lines](<leftover-box-nl>). It is not a house share. That is [a folder the house can open](<first-file-share>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need one column pulled? [Pull one column](<leftover-box-cut>). Need files matched on a key? [Match files on a shared field](<leftover-box-join>). Need characters cleaned? [Change characters](<leftover-box-tr>). Need lines numbered? [Number lines](<leftover-box-nl>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip join, cut, tr, and nl as tonight's job. Those pages already exist.
  * Skip paste into `rm`. Paste prints. Don't mix delete into this drill.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[GNU coreutils: paste invocation](<https://www.gnu.org/software/coreutils/manual/html_node/paste-invocation.html>). [Debian: paste](<https://manpages.debian.org/bookworm/coreutils/paste.1.en.html>). [Ubuntu: paste](<https://manpages.ubuntu.com/manpages/noble/man1/paste.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For one column, see [pull one column](<leftover-box-cut>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Pull one columnAfter SSH works, pull one column with cut so a mixed line is easier to scan. You don't need a file manager for this.](<leftover-box-cut>) [Match files on a shared fieldAfter column, match two practice files on a shared field with join so the lists line up on a key. You don't need extra software for this.](<leftover-box-join>) [Change charactersAfter SSH works, change characters with tr so a mixed line is easier to clean. You don't need a file manager for this.](<leftover-box-tr>) [Drop duplicate linesAfter SSH works, drop duplicate lines with uniq so a mixed list shows each line once. You don't need a file manager for this.](<leftover-box-uniq>) [Put lines in orderAfter SSH works, put lines in order with sort so a mixed list is easier to scan. You don't need a file manager for this.](<leftover-box-sort>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Number linesAfter SSH works, number lines with nl. You don't need extra software for this.](<leftover-box-nl>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousChange characters](<leftover-box-tr>) [NextNumber lines](<leftover-box-nl>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
