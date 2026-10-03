# Repeat a line until you stop

Source: https://labthrift.com/guides/leftover-box-yes
Markdown: https://labthrift.com/md/guides/leftover-box-yes.md

*Notes › / › Faster network › / › Repeat a line until you stop*

[Notes](<./>) / [Faster network](<./#switches>) / Repeat a line until you stop

Written 1 Sep 2026. This is a how-to, not a product card.

# Repeat a line until you stop

After `seq`, `yes` repeats a line until you stop. Use `head` so the flood stops. You don't need extra software for this.

[Print a number list](<leftover-box-seq>) printed a number list once. Tonight you print a repeating line: `yes`. Yes repeats y, or words you type, until you stop it. Start with `yes | head -n 5` so only five lines print.

Plain `yes` with no stop floods until you act. You are still only practicing in home on the computer. It does not need extra software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If a number list in order is what you want, that is [print a number list](<leftover-box-seq>). If words you type once are what you want, that is [put a short line into a file](<leftover-box-echo>). If a window wipe is what you want, that is [clear the window](<leftover-box-clear>).

## What this is

`yes` repeats a line until you stop. Default line is y. You type `yes | head -n 5`. Head keeps the first five lines and stops yes. Stick with that safe peek. You don't need extra software for this.

It is not `echo`. Echo prints words you type once. It is not `seq`. Seq prints a number list once. It is not `head` as the job. Head is only the stop tonight.

## Practice yes in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Repeat y five times, then stop:

`yes | head -n 5`

You want five lines of y, then the prompt back. Head stops yes. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `yes` (coreutils). Don't make apt the job.

If `yes` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: plain yes plus Ctrl+C if present (stop by hand):

`yes`

Then press Ctrl+C when you have seen enough. Ctrl+C stops the running command. You can stay on `yes | head -n 5`. Don't run it forever with no stop.

Optional extra: your own word, still with a stop:

`yes hello | head -n 3`

That peek is three lines of hello. Yes repeats the words you type after yes. Don't make custom words required.

Skip yes without a stop as this job. Plain yes with no Ctrl+C and no head floods until you act. Tonight: `yes | head -n 5`, not an endless scroll.

Skip huge floods as this job. Example `yes | head -n 1000000` is still a huge flood. Tonight: five lines.

Skip `yes` piped into `rm`. Yes repeats a line. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `seq`. Seq prints a number list once. Yes repeats a line. That is [print a number list](<leftover-box-seq>). It is not `echo`. That is [put a short line into a file](<leftover-box-echo>). It is not `head` as the job. That is [see the start of a file](<leftover-box-head>).

## What next

Need mixed lines? [Mix lines](<leftover-box-shuf>). Need a number list in order? [Print a number list](<leftover-box-seq>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip yes without a stop as this job. Tonight: `yes | head -n 5`.
  * Skip `yes` piped into `rm`. Yes repeats a line. Don't mix delete into this drill.
  * Skip huge floods as this job. Tonight: five lines.
  * Skip `seq` and `echo` as this job. Those notes already exist.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: yes(1)](<https://manpages.debian.org/bookworm/coreutils/yes.1.en.html>). [Ubuntu: yes(1)](<https://manpages.ubuntu.com/manpages/noble/man1/yes.1.html>). Official pages only. For a number list, see [print a number list](<leftover-box-seq>). For words you type once, see [put a short line into a file](<leftover-box-echo>). For a window wipe, see [clear the window](<leftover-box-clear>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Print a number listAfter tput, seq prints a number list in order so practice lines make sense. You don't need extra software for this.](<leftover-box-seq>) [Mix linesAfter yes, shuf mixes lines at random so a practice list is not in file order. You don't need extra software for this.](<leftover-box-shuf>) [Reverse linesAfter shuf, tac reverses line order so a practice list can be last line first. You don't need extra software for this.](<leftover-box-tac>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Clear the windowAfter tty, clear wipes the window so old output stops cluttering the session. You don't need extra software for this.](<leftover-box-clear>) [Number linesAfter SSH works, nl numbers lines of a file so a practice list is easier to scan. You don't need extra software for this.](<leftover-box-nl>) [See the start of a fileAfter SSH works, head prints the start of a file so a long file does not flood the window. You don't need a file viewer for this.](<leftover-box-head>) [See change without typing againAfter SSH works, watch re-runs a command so you can see change without typing again. You don't need extra software for this.](<leftover-box-watch>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPrint a number list](<leftover-box-seq>) [NextMix lines](<leftover-box-shuf>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
