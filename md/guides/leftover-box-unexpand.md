# Turn spaces into tabs

Source: https://labthrift.com/guides/leftover-box-unexpand
Markdown: https://labthrift.com/md/guides/leftover-box-unexpand.md

*Notes › / › Faster network › / › Turn spaces into tabs*

[Notes](<./>) / [Faster network](<./#switches>) / Turn spaces into tabs

Written 1 Sep 2026. This is a how-to, not a product card.

# Turn spaces into tabs

After `expand`, `unexpand` turns spaces into tabs at tab stops so a practice line can go back to tabs. You don't need extra software for this.

[Turn tabs into spaces](<leftover-box-expand>) filled tab stops with spaces. Tonight you go the other way: `unexpand`. Unexpand turns spaces that fit tab stops back into tabs. Start with one short practice line: `printf 'a\tb\tc\n' | expand | unexpand -a`.

`\t` is a tab. Expand fills those stops with spaces. Unexpand `-a` puts tabs back. You are still only practicing in home on the computer. It does not need extra software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If tabs to spaces is what you want, that is [turn tabs into spaces](<leftover-box-expand>). If reflow is what you want, that is [reflow paragraphs](<leftover-box-fmt>). If a hard wrap is what you want, that is [wrap long lines](<leftover-box-fold>).

## What this is

`unexpand` turns spaces into tabs at tab stops. You type `printf 'a\tb\tc\n' | expand | unexpand -a`. Printf prints one short practice line once. Expand fills tab stops with spaces. Unexpand `-a` turns spaces that fit those stops back into tabs. Stick with that round trip as a safe peek. You don't need extra software for this.

It is not `expand`. Expand is tabs to spaces. It is not `fmt`. Fmt reflows paragraphs to fill a width. It is not `fold`. Fold hard-wraps lines at a column and can split a word.

## Practice unexpand in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Turn spaces into tabs on one short practice line:

`printf 'a\tb\tc\n' | expand | unexpand -a`

You want the same letters back with tabs. Expand made spaces. Unexpand `-a` put tabs back. Then the prompt back. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `unexpand` (coreutils). Don't make apt the job.

If `unexpand` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: unexpand spaces that fit tab stops, without expand first:

`printf 'hello world\n' | unexpand -a`

That peek turns spaces between hello and world into a tab when they fit. Don't make that line required. You can stay on `printf 'a\tb\tc\n' | expand | unexpand -a`.

Optional extra: a narrower tab width of 4:

`printf 'a\tb\tc\n' | expand -t 4 | unexpand -t 4 -a`

That peek uses tab stops every 4 columns instead of the usual 8. Don't make `unexpand -t 4` required.

Optional extra: unexpand, then head the first line:

`printf 'a\tb\tc\n' | expand | unexpand -a | head -n 1`

That peek shows only the first unexpanded line. Don't make head the job.

Optional aside: peek tabs as `^I` with `cat -A` or `cat -T` after unexpand. Keep that optional. Skip `cat -A` as the main job.

Skip huge dumps as this job. Skip `unexpand` piped into `rm`. Unexpand turns spaces into tabs. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `expand`. Expand turns tabs into spaces. Unexpand turns spaces into tabs. That is [turn tabs into spaces](<leftover-box-expand>). It is not `fmt`. That is [reflow paragraphs](<leftover-box-fmt>). It is not `fold`. That is [wrap long lines](<leftover-box-fold>).

## What next

Need tabs to spaces? [Turn tabs into spaces](<leftover-box-expand>). Need reflow to a width? [Reflow paragraphs](<leftover-box-fmt>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as this job. Tonight: one short practice line.
  * Skip `unexpand` piped into `rm`. Unexpand turns spaces into tabs. Don't mix delete into this drill.
  * Skip `expand`, `fmt`, and `fold` as this job. Those notes already exist.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: unexpand(1)](<https://manpages.debian.org/bookworm/coreutils/unexpand.1.en.html>). [Ubuntu: unexpand(1)](<https://manpages.ubuntu.com/manpages/noble/man1/unexpand.1.html>). Official pages only. For tabs to spaces, see [turn tabs into spaces](<leftover-box-expand>). For reflow, see [reflow paragraphs](<leftover-box-fmt>). For a hard wrap, see [wrap long lines](<leftover-box-fold>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Turn tabs into spacesAfter fmt, expand turns tabs into spaces so practice notes line up. You don't need extra software for this.](<leftover-box-expand>) [Line lists up in columnsAfter SSH works, column lines lists up in columns so a dump is easier to scan. You don't need extra software for this.](<leftover-box-column>) [Reflow paragraphsAfter rev, fmt reflows paragraphs so a practice note wraps to a readable width. You don't need extra software for this.](<leftover-box-fmt>) [Wrap long linesAfter SSH works, fold wraps long lines so they don't run off the window. You don't need a file manager for this.](<leftover-box-fold>) [Reverse charactersAfter tac, rev reverses characters on each line so a short word reads last letter first. You don't need extra software for this.](<leftover-box-rev>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Change charactersAfter SSH works, tr changes characters so you can swap or delete letters without opening nano. You don't need extra software for this.](<leftover-box-tr>) [Send output into another commandAfter SSH works, a pipe sends output into another command so a long dump does not flood the window. You don't need extra software for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousTurn tabs into spaces](<leftover-box-expand>) [NextLine lists up in columns](<leftover-box-column>)

---

*Labthrift Markdown mirror. HTML version linked above.*
