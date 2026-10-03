# Reverse characters

Source: https://labthrift.com/guides/leftover-box-rev
Markdown: https://labthrift.com/md/guides/leftover-box-rev.md

*Notes › / › Faster network › / › Reverse characters*

[Notes](<./>) / [Faster network](<./#switches>) / Reverse characters

Written 1 Sep 2026. This is a how-to, not a product card.

# Reverse characters

After `tac`, `rev` reverses characters on each line so a short word reads last letter first. You don't need extra software for this.

[Reverse lines](<leftover-box-tac>) reversed line order. Tonight you flip each line, last letter first: `rev`. Start with `echo hello | rev` as a safe peek.

You are still only practicing in home on the computer. It does not need extra software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If last line first is what you want, that is [reverse lines](<leftover-box-tac>). If reflow is what you want, that is [reflow paragraphs](<leftover-box-fmt>). If mixed lines are what you want, that is [mix lines](<leftover-box-shuf>).

## What this is

`rev` reverses characters on each line. You type `echo hello | rev`. Echo prints hello once. Rev prints olleh. Stick with that safe peek. You don't need extra software for this.

It is not `tac`. Tac reverses line order. It is not `fmt`. Fmt reflows paragraphs. It is not `tr`. Tr swaps or deletes characters, and does not reverse a line.

## Practice rev in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Reverse characters on one short word:

`echo hello | rev`

You want olleh, then the prompt back. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `rev` (util-linux). Don't make apt the job.

If `rev` is missing, install util-linux:

`sudo apt install util-linux`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: reverse two short lines:

`printf 'hello\nworld\n' | rev`

That peek prints olleh, then dlrow. Line order stays the same. Only characters reverse. Don't make that line required.

Optional extra: reverse twice, back to the original word:

`echo hello | rev | rev`

That peek prints hello again. Don't make the round trip required. You can stay on `echo hello | rev`.

Skip huge dumps as this job. Skip `rev` piped into `rm`. Rev reverses characters. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `tac`. Tac reverses line order. Rev reverses characters on each line. That is [reverse lines](<leftover-box-tac>). It is not `fmt`. That is [reflow paragraphs](<leftover-box-fmt>). It is not `tr`. That is [change characters](<leftover-box-tr>).

## What next

Need reflow to a width? [Reflow paragraphs](<leftover-box-fmt>). Need last line first? [Reverse lines](<leftover-box-tac>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as this job. Tonight: one short word.
  * Skip `rev` piped into `rm`. Rev reverses characters. Don't mix delete into this drill.
  * Skip `tac`, `fmt`, and `tr` as this job. Those notes already exist.
  * Skip apt as this job. The util-linux aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: rev(1)](<https://manpages.debian.org/bookworm/util-linux/rev.1.en.html>). [Ubuntu: rev(1)](<https://manpages.ubuntu.com/manpages/noble/man1/rev.1.html>). Official pages only. For reverse lines, see [reverse lines](<leftover-box-tac>). For reflow, see [reflow paragraphs](<leftover-box-fmt>). For character swap, see [change characters](<leftover-box-tr>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Reflow paragraphsAfter rev, fmt reflows paragraphs so a practice note wraps to a readable width. You don't need extra software for this.](<leftover-box-fmt>) [Reverse linesAfter shuf, tac reverses line order so a practice list can be last line first. You don't need extra software for this.](<leftover-box-tac>) [Mix linesAfter yes, shuf mixes lines at random so a practice list is not in file order. You don't need extra software for this.](<leftover-box-shuf>) [Print a number listAfter tput, seq prints a number list in order so practice lines make sense. You don't need extra software for this.](<leftover-box-seq>) [Repeat a line until you stopAfter seq, yes repeats a line until you stop. Use head so the flood stops. You don't need extra software for this.](<leftover-box-yes>) [Change charactersAfter SSH works, tr changes characters so you can swap or delete letters without opening nano. You don't need extra software for this.](<leftover-box-tr>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Send output into another commandAfter SSH works, a pipe sends output into another command so a long dump does not flood the window. You don't need extra software for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousReverse lines](<leftover-box-tac>) [NextReflow paragraphs](<leftover-box-fmt>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
