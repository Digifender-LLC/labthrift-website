# Turn tabs into spaces

Source: https://labthrift.com/guides/leftover-box-expand
Markdown: https://labthrift.com/md/guides/leftover-box-expand.md

*Notes › / › Faster network › / › Turn tabs into spaces*

[Notes](<./>) / [Faster network](<./#switches>) / Turn tabs into spaces

Written 1 Sep 2026. This is a how-to, not a product card.

# Turn tabs into spaces

After `fmt`, `expand` turns tabs into spaces so practice notes line up without tab stops jumping. You don't need extra software for this.

[Reflow paragraphs](<leftover-box-fmt>) reflowed words to fill a width. Tonight you turn tabs into spaces: `expand`. Expand fills tab stops with spaces so letters sit still. Start with one short practice line: `printf 'a\tb\tc\n' | expand`.

`\t` is a tab. Expand replaces those tabs with spaces. You are still only practicing in home on the computer. It does not need extra software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If spaces to tabs is what you want, that is [turn spaces into tabs](<leftover-box-unexpand>). If reflow is what you want, that is [reflow paragraphs](<leftover-box-fmt>). If a hard wrap is what you want, that is [wrap long lines](<leftover-box-fold>).

## What this is

`expand` turns tabs into spaces at tab stops. You type `printf 'a\tb\tc\n' | expand`. Printf prints one short practice line once. Expand fills tab stops with spaces. Stick with that safe peek. You don't need extra software for this.

It is not `unexpand`. Unexpand is spaces to tabs. It is not `fmt`. Fmt reflows paragraphs to fill a width. It is not `fold`. Fold hard-wraps lines at a column and can split a word.

## Practice expand in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Turn tabs into spaces on one short practice line:

`printf 'a\tb\tc\n' | expand`

You want the same letters with spaces where the tabs were. Then the prompt back. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `expand` (coreutils). Don't make apt the job.

If `expand` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: a narrower tab width of 4:

`printf 'a\tb\tc\n' | expand -t 4`

That peek uses tab stops every 4 columns instead of the usual 8. Don't make `expand -t 4` required.

Optional extra: expand a short word with a tab in the middle:

`printf 'hello\tworld\n' | expand`

That peek fills the tab between hello and world with spaces. Don't make that line required.

Optional extra: expand, then head the first line:

`printf 'a\tb\tc\n' | expand | head -n 1`

That peek shows only the first expanded line. Don't make head the job.

Skip huge dumps as this job. Skip `expand` piped into `rm`. Expand turns tabs into spaces. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `unexpand`. Unexpand turns spaces into tabs. Expand turns tabs into spaces. That is [turn spaces into tabs](<leftover-box-unexpand>). It is not `fmt`. That is [reflow paragraphs](<leftover-box-fmt>). It is not `fold`. That is [wrap long lines](<leftover-box-fold>).

## What next

Need spaces back to tabs? [Turn spaces into tabs](<leftover-box-unexpand>). Need a hard wrap? [Wrap long lines](<leftover-box-fold>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as this job. Tonight: one short practice line.
  * Skip `expand` piped into `rm`. Expand turns tabs into spaces. Don't mix delete into this drill.
  * Skip `unexpand`, `fmt`, and `fold` as this job. Those notes already exist.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: expand(1)](<https://manpages.debian.org/bookworm/coreutils/expand.1.en.html>). [Ubuntu: expand(1)](<https://manpages.ubuntu.com/manpages/noble/man1/expand.1.html>). Official pages only. For spaces to tabs, see [turn spaces into tabs](<leftover-box-unexpand>). For reflow, see [reflow paragraphs](<leftover-box-fmt>). For a hard wrap, see [wrap long lines](<leftover-box-fold>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Reflow paragraphsAfter rev, fmt reflows paragraphs so a practice note wraps to a readable width. You don't need extra software for this.](<leftover-box-fmt>) [Turn spaces into tabsAfter expand, unexpand turns spaces into tabs so a practice line can go back to tabs. You don't need extra software for this.](<leftover-box-unexpand>) [Wrap long linesAfter SSH works, fold wraps long lines so they don't run off the window. You don't need a file manager for this.](<leftover-box-fold>) [Reverse charactersAfter tac, rev reverses characters on each line so a short word reads last letter first. You don't need extra software for this.](<leftover-box-rev>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Change charactersAfter SSH works, tr changes characters so you can swap or delete letters without opening nano. You don't need extra software for this.](<leftover-box-tr>) [Send output into another commandAfter SSH works, a pipe sends output into another command so a long dump does not flood the window. You don't need extra software for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousReflow paragraphs](<leftover-box-fmt>) [NextTurn spaces into tabs](<leftover-box-unexpand>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
