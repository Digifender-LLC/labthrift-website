# Reflow paragraphs

Source: https://labthrift.com/guides/leftover-box-fmt
Markdown: https://labthrift.com/md/guides/leftover-box-fmt.md

*Notes › / › Faster network › / › Reflow paragraphs*

[Notes](<./>) / [Faster network](<./#switches>) / Reflow paragraphs

Written 1 Sep 2026. This is a how-to, not a product card.

# Reflow paragraphs

After `rev`, `fmt` reflows paragraphs so a practice note wraps to a readable width. You don't need extra software for this.

[Reverse characters](<leftover-box-rev>) reversed letters on each line. Tonight you reflow a paragraph: `fmt`. Fmt fills a width. Words stay whole when they can. Start with one long practice line piped into `fmt -w 20`.

You are still only practicing in home on the computer. It does not need extra software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If a hard wrap is what you want, that is [wrap long lines](<leftover-box-fold>). If tabs to spaces is what you want, that is [turn tabs into spaces](<leftover-box-expand>). If last letter first is what you want, that is [reverse characters](<leftover-box-rev>).

## What this is

`fmt` reflows paragraphs to fill a width. Words stay whole when they can. You type `printf 'hello world this is a long practice line\n' | fmt -w 20`. Stick with that safe peek. You don't need extra software for this.

It is not `fold`. Fold hard-wraps at a column and can split a word. It is not `expand`. Expand is tabs to spaces. It is not `rev`. Rev reverses characters on each line.

## Practice fmt in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Reflow one long practice line to width 20:

`printf 'hello world this is a long practice line\n' | fmt -w 20`

You want the same words, wrapped to about 20 columns, without splitting a word when it can stay whole. Then the prompt back. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `fmt` (coreutils). Don't make apt the job.

If `fmt` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

No files are required for this practice. If you made practice files anyway, throw them away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home only

Optional extra: a wider wrap of 40:

`printf 'hello world this is a long practice line\n' | fmt -w 40`

That peek uses a wider width. Don't make width 40 required. You can stay on `fmt -w 20`.

Optional extra: fmt, then head the first two lines:

`printf 'hello world this is a long practice line\n' | fmt -w 20 | head -n 2`

That peek shows only the first two reflowed lines. Don't make head the job.

Skip huge dumps as this job. Skip `fmt` piped into `rm`. Fmt reflows paragraphs. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `fold`. Fold hard-wraps lines at a column and can split a word. Fmt reflows paragraphs. That is [wrap long lines](<leftover-box-fold>). It is not `expand`. That is [turn tabs into spaces](<leftover-box-expand>). It is not `rev`. That is [reverse characters](<leftover-box-rev>).

## What next

Need tabs to spaces? [Turn tabs into spaces](<leftover-box-expand>). Need a hard wrap? [Wrap long lines](<leftover-box-fold>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as this job. Tonight: one short practice line.
  * Skip `fmt` piped into `rm`. Fmt reflows paragraphs. Don't mix delete into this drill.
  * Skip `fold`, `expand`, and `rev` as this job. Those notes already exist.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: fmt(1)](<https://manpages.debian.org/bookworm/coreutils/fmt.1.en.html>). [Ubuntu: fmt(1)](<https://manpages.ubuntu.com/manpages/noble/man1/fmt.1.html>). Official pages only. For a hard wrap, see [wrap long lines](<leftover-box-fold>). For reverse characters, see [reverse characters](<leftover-box-rev>). For tabs to spaces, see [turn tabs into spaces](<leftover-box-expand>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Turn tabs into spacesAfter fmt, expand turns tabs into spaces so practice notes line up. You don't need extra software for this.](<leftover-box-expand>) [Reverse charactersAfter tac, rev reverses characters on each line so a short word reads last letter first. You don't need extra software for this.](<leftover-box-rev>) [Reverse linesAfter shuf, tac reverses line order so a practice list can be last line first. You don't need extra software for this.](<leftover-box-tac>) [Wrap long linesAfter SSH works, fold wraps long lines so they don't run off the window. You don't need a file manager for this.](<leftover-box-fold>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Change charactersAfter SSH works, tr changes characters so you can swap or delete letters without opening nano. You don't need extra software for this.](<leftover-box-tr>) [Send output into another commandAfter SSH works, a pipe sends output into another command so a long dump does not flood the window. You don't need extra software for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousReverse characters](<leftover-box-rev>) [NextTurn tabs into spaces](<leftover-box-expand>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
