# Mix lines

Source: https://labthrift.com/guides/leftover-box-shuf
Markdown: https://labthrift.com/md/guides/leftover-box-shuf.md

*Notes › / › Faster network › / › Mix lines*

[Notes](<./>) / [Faster network](<./#switches>) / Mix lines

Written 31 Aug 2026. This is a how-to, not a product card.

# Mix lines

After `yes`, `shuf` mixes lines at random so a practice list is not in file order. You don't need extra software for this.

[Repeat a line until you stop](<leftover-box-yes>) repeated a line. Tonight you mix lines: `shuf`. Shuf means shuffle lines. Start with `seq 1 5 | shuf` so five numbers show mixed. Seq prints numbers in order. Shuf mixes that order.

You are still only practicing in home on the computer. It does not need extra software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If a number list in order is what you want, that is [print a number list](<leftover-box-seq>). Tonight uses `seq` only as input to `shuf`. If a repeating line is what you want, that is [repeat a line until you stop](<leftover-box-yes>). If lines in A-to-Z order are what you want, that is [put lines in order](<leftover-box-sort>).

## What this is

`shuf` mixes lines at random. You type `seq 1 5 | shuf`. Seq prints numbers in order. The pipe sends that print into shuf. Shuf mixes the order. Stick with that safe peek. You don't need extra software for this.

It is not `seq` as the job. Seq prints a number list in order. It is not `sort`. Sort orders lines. Shuf mixes lines. It is not `yes`. Yes repeats a line.

## Practice shuf in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Mix five numbers with a safe peek:

`seq 1 5 | shuf`

You want five numbers, mixed order, then the prompt back. The pipe sends seq into shuf. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `shuf` (coreutils). Don't make apt the job.

If `shuf` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: a range without seq:

`shuf -i 1-5`

That peek mixes numbers from 1 to 5 without typing `seq`. You can stay on `seq 1 5 | shuf`. Don't make the flag required.

Optional extra: pick one mixed line:

`seq 1 5 | shuf -n 1`

That peek keeps only one mixed line. Don't make pick one required.

Skip huge ranges as this job. Example `seq 1 100000 | shuf` is still a huge mix. Tonight: five numbers.

Skip `shuf` piped into `rm`. Shuf mixes lines. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `sort`, `yes`, `seq` as the job, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `seq` as the job. Seq prints a number list in order. That is [print a number list](<leftover-box-seq>). It is not `sort`. Sort orders. Shuf mixes. That is [put lines in order](<leftover-box-sort>). It is not `tac`. Tac reverses last line first. That is [reverse lines](<leftover-box-tac>).

## What next

Need last line first? [Reverse lines](<leftover-box-tac>). Need a number list in order? [Print a number list](<leftover-box-seq>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge ranges as this job. Tonight: five numbers.
  * Skip `shuf` piped into `rm`. Shuf mixes lines. Don't mix delete into this drill.
  * Skip `seq` and `sort` as this job. Tonight uses seq only as input to shuf.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip files under `/etc` and whole `/`. Practice only in home.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: shuf(1)](<https://manpages.debian.org/bookworm/coreutils/shuf.1.en.html>). [Ubuntu: shuf(1)](<https://manpages.ubuntu.com/manpages/noble/man1/shuf.1.html>). Official pages only. For a repeating line, see [repeat a line until you stop](<leftover-box-yes>). For a number list in order, see [print a number list](<leftover-box-seq>). For lines in order, see [put lines in order](<leftover-box-sort>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Repeat a line until you stopAfter seq, yes repeats a line until you stop. Use head so the flood stops. You don't need extra software for this.](<leftover-box-yes>) [Reverse linesAfter shuf, tac reverses line order so a practice list can be last line first. You don't need extra software for this.](<leftover-box-tac>) [Print a number listAfter tput, seq prints a number list so practice lines make sense. You don't need extra software for this.](<leftover-box-seq>) [Put lines in orderAfter SSH works, put lines in order with sort so a mixed list is easier to scan. You don't need a file manager for this.](<leftover-box-sort>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Number linesAfter SSH works, nl numbers lines of a file so a practice list is easier to scan. You don't need extra software for this.](<leftover-box-nl>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousRepeat a line until you stop](<leftover-box-yes>) [NextReverse lines](<leftover-box-tac>)

---

*Labthrift Markdown mirror. HTML version linked above.*
