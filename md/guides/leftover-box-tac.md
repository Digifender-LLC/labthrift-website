# Reverse lines

Source: https://labthrift.com/guides/leftover-box-tac
Markdown: https://labthrift.com/md/guides/leftover-box-tac.md

*Notes › / › Faster network › / › Reverse lines*

[Notes](<./>) / [Faster network](<./#switches>) / Reverse lines

Written 1 Sep 2026. This is a how-to, not a product card.

# Reverse lines

After `shuf`, `tac` reverses lines so a practice list can be last line first. You don't need extra system software for this.

[Mix lines](<leftover-box-shuf>) mixed lines at random. Tonight you print a file last line first: `tac`. Tac reverses line order. Start with `seq 1 5 | tac` so a short number list is a safe peek.

You are still only practicing in home on the computer. The computer does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If last letter first on each line is what you want, that is [reverse characters](<leftover-box-rev>). If mixed lines are what you want, that is [mix lines](<leftover-box-shuf>). If a number list in order is what you want, that is [print a number list](<leftover-box-seq>).

## What this is

`tac` reverses line order. Last line prints first. You type `seq 1 5 | tac`. Seq prints 1 through 5 once. Tac prints those lines last-first. Stick with that safe peek. You don't need extra system software for this.

It is not `rev`. Rev reverses characters on each line. It is not `shuf`. Shuf mixes lines at random. It is not `seq` as the job. Seq prints a number list once.

## Practice tac in home

SSH into the computer.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Reverse a short number list, last line first:

`seq 1 5 | tac`

You want 5, then 4, then 3, then 2, then 1. Then the prompt back. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `tac` (coreutils). Don't make apt the job.

If `tac` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: reverse a short word list:

`printf 'pear\napple\nbanana\n' | tac`

That peek prints banana, then apple, then pear. Don't make that line required. You can stay on `seq 1 5 | tac`.

Optional extra: tac, then head the first two lines:

`seq 1 5 | tac | head -n 2`

That peek shows only 5 then 4. Don't make head the job.

Skip huge dumps as this job. Skip `tac` piped into `rm`. Tac reverses lines. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `rev`. Rev reverses characters on each line. Tac reverses line order. That is [reverse characters](<leftover-box-rev>). It is not `shuf`. That is [mix lines](<leftover-box-shuf>). It is not `seq` as the job. That is [print a number list](<leftover-box-seq>).

## What next

Need last letter first on each line? [Reverse characters](<leftover-box-rev>). Need mixed lines? [Mix lines](<leftover-box-shuf>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as this job. Tonight: a short number list.
  * Skip `tac` piped into `rm`. Tac reverses lines. Don't mix delete into this drill.
  * Skip `rev`, `shuf`, and `seq` as this job. Those notes already exist.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: tac(1)](<https://manpages.debian.org/bookworm/coreutils/tac.1.en.html>). [Ubuntu: tac(1)](<https://manpages.ubuntu.com/manpages/noble/man1/tac.1.html>). Official pages only. For reverse characters, see [reverse characters](<leftover-box-rev>). For mixed lines, see [mix lines](<leftover-box-shuf>). For a number list, see [print a number list](<leftover-box-seq>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Reverse charactersAfter tac, rev reverses characters on each line so a short word reads last letter first. You don't need extra system software for this.](<leftover-box-rev>) [Mix linesAfter yes, shuf mixes lines at random so a practice list is not in file order. You don't need extra system software for this.](<leftover-box-shuf>) [Print a number listAfter tput, seq prints a number list in order so practice lines make sense. You don't need extra system software for this.](<leftover-box-seq>) [Repeat a line until you stopAfter seq, yes repeats a line until you stop. Use head so the flood stops. You don't need extra system software for this.](<leftover-box-yes>) [Put lines in orderAfter SSH works, sort puts lines in order so a mixed list is easier to scan. You don't need a file manager app for this.](<leftover-box-sort>) [See the end of a fileAfter SSH works, tail prints the last lines of a file so a long file does not flood the window. You don't need a file viewer app for this.](<leftover-box-tail>) [Read a file without opening the editorAfter SSH works, cat prints a file so you can read it without opening nano. Short files only. You don't need a file viewer app for this.](<leftover-box-cat>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager app for this.](<leftover-box-echo>) [Send output into another commandAfter SSH works, a pipe sends output into another command so a long dump does not flood the window. You don't need extra system software for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousMix lines](<leftover-box-shuf>) [NextReverse characters](<leftover-box-rev>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
