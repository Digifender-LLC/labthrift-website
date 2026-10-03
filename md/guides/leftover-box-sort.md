# Put lines in order

Source: https://labthrift.com/guides/leftover-box-sort
Markdown: https://labthrift.com/md/guides/leftover-box-sort.md

*Notes › / › Faster network › / › Put lines in order*

[Notes](<./>) / [Faster network](<./#switches>) / Put lines in order

Written 30 Aug 2026. This is a how-to, not a product card.

# Put lines in order

After SSH works, put lines in order with sort so a mixed list is easier to scan. You don't need a file manager for this.

A mixed list is harder to scan. Tonight you put lines in order: `sort`. Sort puts lines in A-to-Z order. Start with a tiny fruit list. You are still only looking. The computer does not need a file manager for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If copies dropped are what you want, that is [drop duplicate lines](<leftover-box-uniq>). Uniq wants sorted input. If output saved while you watch is what you want, that is [watch and save output at once](<leftover-box-tee>). If last line first is what you want, that is [reverse lines](<leftover-box-tac>).

## What this is

`sort` puts lines in order. You type `sort`, then a file. It prints the ordered lines. It does not rewrite the file unless you redirect. Default order is A-to-Z as text. Numbers as text put 10 before 2. `-n` sorts as numbers. `-r` reverses. It is not uniq. Uniq drops copies after sort.

## Sort a practice list

SSH into the computer. Make a tiny mixed list:

`printf 'pear\napple\nbanana\napple\n' > ~/fruit.txt`

`cat ~/fruit.txt`

Put lines in order:

`sort ~/fruit.txt`

You want apple, apple, banana, pear. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `sort`. Don't make apt the job. If `sort` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm ~/fruit.txt ~/fruit-sorted.txt ~/nums.txt`

## Useful extras, still looking only

Optional: save while you watch:

`sort ~/fruit.txt | tee ~/fruit-sorted.txt`

`cat ~/fruit-sorted.txt`

That tee is [watch and save output at once](<leftover-box-tee>).

Optional: reverse:

`sort -r ~/fruit.txt`

Optional: numbers as numbers, not text:

`printf '10\n2\n1\n' > ~/nums.txt`

`sort ~/nums.txt`

`sort -n ~/nums.txt`

Text sort puts 10 before 2. `-n` puts 1, then 2, then 10.

Optional: sort names in this folder:

`ls | sort`

Looking only. Skip sort piped into `rm`.

## What this is not

This is not uniq. That is [drop duplicate lines](<leftover-box-uniq>). It is not tee. That is [watch and save output at once](<leftover-box-tee>). It is not pipe as the lesson. That is [send output into another command](<leftover-box-pipe>). It is not tac. That is [reverse lines](<leftover-box-tac>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>).

## What next

Need copies dropped? [Drop duplicate lines](<leftover-box-uniq>). Need output saved while you watch? [Watch and save output at once](<leftover-box-tee>). Need last line first? [Reverse lines](<leftover-box-tac>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip uniq, tee, pipe, and tac as tonight's job. Those pages already exist.
  * Skip sort piped into `rm`. Sort prints. Don't mix delete into this drill.
  * Skip sorting `/etc` or whole home. Tonight: a tiny practice list.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[GNU coreutils: sort invocation](<https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html>). [Debian: sort](<https://manpages.debian.org/bookworm/coreutils/sort.1.en.html>). [Ubuntu: sort](<https://manpages.ubuntu.com/manpages/noble/man1/sort.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For duplicates, see [drop duplicate lines](<leftover-box-uniq>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Watch and save output at onceAfter SSH works, watch and save output at once with tee. You don't need a file manager for this.](<leftover-box-tee>) [Drop duplicate linesAfter SSH works, drop duplicate lines with uniq so a mixed list shows each line once. You don't need a file manager for this.](<leftover-box-uniq>) [Save output to a fileAfter SSH works, save output to a file with >. You don't need a file manager for this.](<leftover-box-redirect>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Reverse linesAfter SSH works, reverse lines with tac. You don't need extra software for this.](<leftover-box-tac>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousWatch and save output at once](<leftover-box-tee>) [NextDrop duplicate lines](<leftover-box-uniq>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
