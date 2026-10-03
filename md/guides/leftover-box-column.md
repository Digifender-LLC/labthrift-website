# Line lists up in columns

Source: https://labthrift.com/guides/leftover-box-column
Markdown: https://labthrift.com/md/guides/leftover-box-column.md

*Notes › / › Faster network › / › Line lists up in columns*

[Notes](<./>) / [Faster network](<./#switches>) / Line lists up in columns

Written 1 Sep 2026. This is a how-to, not a product card.

# Line lists up in columns

After unexpand, line lists up in columns with column so practice notes sit in columns that line up. You don't need extra software for this.

[Turn spaces into tabs](<leftover-box-unexpand>) handled spaces to tabs. Tonight you line text up in columns: `column`. Start with two short practice lines piped into `column -t` so a sits over d, b over e, c over f. Printf prints those two lines once. Pipe is only the send. That is not unexpand, expand, cut, paste, or join. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If spaces to tabs are what you want, that is [turn spaces into tabs](<leftover-box-unexpand>). If tabs to spaces are what you want, that is [turn tabs into spaces](<leftover-box-expand>). If one column pulled is what you want, that is [pull one column](<leftover-box-cut>). If columns side by side from two files are what you want, that is [join columns side by side](<leftover-box-paste>). If files matched on a shared field are what you want, that is [match files on a shared field](<leftover-box-join>).

## What this is

`column` lines lists up in columns. You type two short lines into `printf`, send them with a pipe, then `column -t` tables the fields. Stick with that safe peek. It is not cut. Cut pulls one column. It is not paste. Paste joins columns from two files. It is not join. Join matches files on a key.

## Practice column in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Line lists up in columns with a safe peek:

`printf 'a b c\nd e f\n' | column -t`

You want two lines with columns that line up (a over d, b over e, c over f), then the prompt back. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `column`. Don't make apt the job. If `column` is missing:

`sudo apt install bsdextrautils`

Then stop. That install is not the lesson.

## Useful extras, still home only

Optional: a second pair of practice lines:

`printf 'one two three\nfour five six\n' | column -t`

Optional: colon as the split:

`printf 'a:b:c\nd:e:f\n' | column -t -s :`

`-s :` tells column to split on `:` instead of whitespace.

Optional: column then head:

`printf 'a b c\nd e f\n' | column -t | head -n 2`

Head is not tonight's job.

## What this is not

This is not unexpand. That is [turn spaces into tabs](<leftover-box-unexpand>). It is not expand. That is [turn tabs into spaces](<leftover-box-expand>). It is not cut. That is [pull one column](<leftover-box-cut>). It is not paste. That is [join columns side by side](<leftover-box-paste>). It is not join. That is [match files on a shared field](<leftover-box-join>). It is not comm. That is [compare sorted lists](<leftover-box-comm>). It is not fmt. That is [reflow paragraphs](<leftover-box-fmt>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need files matched on a key? [Match files on a shared field](<leftover-box-join>). Need columns side by side? [Join columns side by side](<leftover-box-paste>). Need one column pulled? [Pull one column](<leftover-box-cut>). Need spaces to tabs? [Turn spaces into tabs](<leftover-box-unexpand>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip unexpand, expand, cut, paste, join, and comm as tonight's job. Those pages already exist.
  * Skip huge dumps. Tonight: two short practice lines.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: column(1)](<https://manpages.debian.org/bookworm/bsdextrautils/column.1.en.html>). [Ubuntu: column(1)](<https://manpages.ubuntu.com/manpages/noble/man1/column.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For matching on a key, see [match files on a shared field](<leftover-box-join>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Turn spaces into tabsAfter SSH works, turn spaces into tabs with unexpand. You don't need extra software for this.](<leftover-box-unexpand>) [Turn tabs into spacesAfter SSH works, turn tabs into spaces with expand. You don't need extra software for this.](<leftover-box-expand>) [Pull one columnAfter SSH works, pull one column with cut so a mixed line is easier to scan. You don't need a file manager for this.](<leftover-box-cut>) [Join columns side by sideAfter SSH works, join columns side by side with paste so two lists become one line each. You don't need a file manager for this.](<leftover-box-paste>) [Match files on a shared fieldAfter column, match two practice files on a shared field with join so the lists line up on a key. You don't need extra software for this.](<leftover-box-join>) [Compare sorted listsAfter join, comm compares sorted lists so practice files show what is only in list 1, only in list 2, or in both. You don't need extra software for this.](<leftover-box-comm>) [Reflow paragraphsAfter SSH works, reflow paragraphs with fmt. You don't need extra software for this.](<leftover-box-fmt>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousTurn spaces into tabs](<leftover-box-unexpand>) [NextMatch files on a shared field](<leftover-box-join>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
