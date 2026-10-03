# Drop duplicate lines

Source: https://labthrift.com/guides/leftover-box-uniq
Markdown: https://labthrift.com/md/guides/leftover-box-uniq.md

*Notes › / › Faster network › / › Drop duplicate lines*

[Notes](<./>) / [Faster network](<./#switches>) / Drop duplicate lines

Written 30 Aug 2026. This is a how-to, not a product card.

# Drop duplicate lines

After SSH works, drop duplicate lines with uniq so a mixed list shows each line once. You don't need a file manager for this.

[Put lines in order](<leftover-box-sort>) put a mixed list in A-to-Z order. Tonight you find repeated lines: `uniq`. Uniq drops duplicate lines that sit next to each other. Sort first, then uniq. You are still only looking. The computer does not need a file manager for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If order is what you want, that is [put lines in order](<leftover-box-sort>). If one column pulled is what you want, that is [pull one column](<leftover-box-cut>). If a search is what you want, that is [find a word in a file](<leftover-box-grep>).

## What this is

`uniq` drops duplicate lines that sit next to each other. Unsorted copies that are apart stay. Start with `sort ~/fruit.txt | uniq`. `-c` counts. `-d` prints only copies. It is not sort. Sort puts lines in order. It is not grep. Grep finds a word.

## Drop copies from a practice list

SSH into the computer. Make a tiny mixed list:

`printf 'pear\napple\nbanana\napple\n' > ~/fruit.txt`

`cat ~/fruit.txt`

Uniq alone on mixed order often keeps both apples, because they are not neighbors:

`uniq ~/fruit.txt`

Sort first, then uniq:

`sort ~/fruit.txt | uniq`

You want apple, banana, pear, each once. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `uniq`. Don't make apt the job. If `uniq` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm ~/fruit.txt ~/fruit-unique.txt`

## Useful extras, still looking only

Optional: save while you watch:

`sort ~/fruit.txt | uniq | tee ~/fruit-unique.txt`

`cat ~/fruit-unique.txt`

Optional: counts:

`sort ~/fruit.txt | uniq -c`

Optional: only the copies:

`sort ~/fruit.txt | uniq -d`

Optional: names in this folder, unique:

`ls | sort | uniq`

Looking only. Skip uniq piped into `rm`.

## What this is not

This is not sort. That is [put lines in order](<leftover-box-sort>). It is not cut. That is [pull one column](<leftover-box-cut>). It is not tee. That is [watch and save output at once](<leftover-box-tee>). It is not grep. That is [find a word in a file](<leftover-box-grep>). It is not diff. That is [see whether two files are the same](<leftover-box-diff>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>).

## What next

Need order first? [Put lines in order](<leftover-box-sort>). Need one column? [Pull one column](<leftover-box-cut>). Need a search? [Find a word in a file](<leftover-box-grep>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip sort, cut, tee, and grep as tonight's job. Those pages already exist.
  * Skip uniq without sort if copies are not neighbors. Sort first.
  * Skip uniq piped into `rm`.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[GNU coreutils: uniq invocation](<https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html>). [Debian: uniq](<https://manpages.debian.org/bookworm/coreutils/uniq.1.en.html>). [Ubuntu: uniq](<https://manpages.ubuntu.com/manpages/noble/man1/uniq.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For order first, see [put lines in order](<leftover-box-sort>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Put lines in orderAfter SSH works, put lines in order with sort so a mixed list is easier to scan. You don't need a file manager for this.](<leftover-box-sort>) [Pull one columnAfter SSH works, pull one column with cut so a mixed line is easier to scan. You don't need a file manager for this.](<leftover-box-cut>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Watch and save output at onceAfter SSH works, watch and save output at once with tee. You don't need a file manager for this.](<leftover-box-tee>) [Save output to a fileAfter SSH works, save output to a file with >. You don't need a file manager for this.](<leftover-box-redirect>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousPut lines in order](<leftover-box-sort>) [NextPull one column](<leftover-box-cut>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
