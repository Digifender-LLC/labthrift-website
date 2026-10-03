# Print a number list

Source: https://labthrift.com/guides/leftover-box-seq
Markdown: https://labthrift.com/md/guides/leftover-box-seq.md

*Notes › / › Faster network › / › Print a number list*

[Notes](<./>) / [Faster network](<./#switches>) / Print a number list

Written 31 Aug 2026. This is a how-to, not a product card.

# Print a number list

After `tput`, `seq` prints a number list so practice lines make sense. You don't need extra software for this.

[See terminal columns and colors](<leftover-box-tput>) asked window width. Tonight you print a number list: `seq`. Seq prints numbers from a start to a stop. Each number sits on its own line. Start with `seq 1 5`.

Clear later uses `seq 1 40` as clutter. Tonight seq is the job, not a wipe. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If window width is what you want, that is [see terminal columns and colors](<leftover-box-tput>). If a wipe is what you want, that is [clear the window](<leftover-box-clear>). If numbers on a file you already have are what you want, that is [number lines](<leftover-box-nl>).

## What this is

`seq` prints a number list. You type `seq 1 5`. First number is the start. Last number is the stop. Default step is 1. You don't need extra system software for this.

It is not `nl`. Nl numbers lines you already have. Seq makes the numbers. It is not `echo`. Echo prints words you type. It is not `clear`. Clear wipes the window.

## Practice seq in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Print a short number list:

`seq 1 5`

You want 1, 2, 3, 4, 5, each on its own line. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `seq` (coreutils). Don't make apt the job.

If `seq` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: forty numbers, the clear drill size:

`seq 1 40`

That peek is the size [clear the window](<leftover-box-clear>) uses as clutter. Don't make `clear` the job. You can stop at `seq 1 5`.

Optional extra: a step, even numbers:

`seq 2 2 10`

That peek is start 2, step 2, stop 10. You want 2, 4, 6, 8, 10. Don't make the step required.

Optional extra: equal width with leading zeroes:

`seq -w 1 10`

That peek is 01 through 10. `-w` pads so numbers line up. Don't make padding required. If `-w` is missing, skip it.

Skip huge ranges as this job. Example `seq 1 1000000` floods the window. Tonight: `seq 1 5`, not a million lines.

Skip `seq` piped into `rm`. Seq prints numbers. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `yes`, `nl`, `clear`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `tput`. Tput prints window width. That is [see terminal columns and colors](<leftover-box-tput>). It is not `clear`. That is [clear the window](<leftover-box-clear>). It is not `nl`. That is [number lines](<leftover-box-nl>).

## What next

Need a repeating line? [Repeat a line until you stop](<leftover-box-yes>). Need mixed lines? [Mix lines](<leftover-box-shuf>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge ranges as this job. Tonight: `seq 1 5`.
  * Skip `seq` piped into `rm`. Seq prints numbers. Don't mix delete into this drill.
  * Skip `clear` and `nl` as this job. Those notes already exist.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip files under `/etc` and whole `/`. Practice only in home.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: seq(1)](<https://manpages.debian.org/bookworm/coreutils/seq.1.en.html>). [Ubuntu: seq(1)](<https://manpages.ubuntu.com/manpages/noble/man1/seq.1.html>). Official pages only. For window width, see [see terminal columns and colors](<leftover-box-tput>). For a wipe, see [clear the window](<leftover-box-clear>). For numbers on a file, see [number lines](<leftover-box-nl>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Repeat a line until you stopAfter seq, yes repeats a line until you stop. Use head so the flood stops. You don't need extra software for this.](<leftover-box-yes>) [Mix linesAfter yes, shuf mixes lines at random so a practice list is not in file order. You don't need extra software for this.](<leftover-box-shuf>) [Reverse linesAfter shuf, tac reverses line order so a practice list can be last line first. You don't need extra software for this.](<leftover-box-tac>) [See terminal columns and colorsAfter reset, tput cols prints window width in columns. You don't need extra software for this.](<leftover-box-tput>) [Clear the windowAfter SSH works, clear the window so old output stops cluttering the session. You don't need extra software for this.](<leftover-box-clear>) [Number linesAfter SSH works, nl numbers lines so a long file is easier to point at. You don't need a file manager for this.](<leftover-box-nl>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Fix a garbled terminalAfter SSH works, fix a garbled terminal with reset. You don't need extra software for this.](<leftover-box-reset>) [See window sizeAfter SSH works, print window size with stty size. You don't need extra software for this.](<leftover-box-stty>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee terminal columns and colors](<leftover-box-tput>) [NextRepeat a line until you stop](<leftover-box-yes>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
