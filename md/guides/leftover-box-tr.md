# Change characters

Source: https://labthrift.com/guides/leftover-box-tr
Markdown: https://labthrift.com/md/guides/leftover-box-tr.md

*Notes › / › Faster network › / › Change characters*

[Notes](<./>) / [Faster network](<./#switches>) / Change characters

Written 30 Aug 2026. This is a how-to, not a product card.

# Change characters

After SSH works, change characters with tr so a mixed line is easier to clean. You don't need a file manager for this.

[Pull one column](<leftover-box-cut>) pulled fruit apart from color. Tonight you change characters: `tr`. Tr swaps or deletes characters. Start with a tiny fruit list. You are still only looking. The computer does not need a file manager for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If one column pulled is what you want, that is [pull one column](<leftover-box-cut>). If columns side by side are what you want, that is [join columns side by side](<leftover-box-paste>). If copies dropped are what you want, that is [drop duplicate lines](<leftover-box-uniq>).

## What this is

`tr` changes characters. You send text in, tr prints the changed text out. It does not rewrite a file unless you redirect. Start with commas to newlines, or upper case to lower case. It is not cut. Cut pulls a column. It is not paste. Paste joins columns from two files.

## Practice tr in home

SSH into the computer. Make a tiny practice file:

`printf 'apple,red\nbanana,yellow\npear,green\n' > ~/fruit.csv`

`cat ~/fruit.csv`

Turn commas into newlines:

`tr ',' '\n' < ~/fruit.csv`

You want each word on its own line. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `tr`. Don't make apt the job. If `tr` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm ~/fruit.csv`

## Useful extras, still looking only

Optional: from a typed line, no file:

`printf 'apple,red,banana\n' | tr ',' '\n'`

Optional: lower case:

`printf 'Apple,RED\n' | tr 'A-Z' 'a-z'`

Optional: delete commas:

`tr -d ',' < ~/fruit.csv`

Optional: squeeze extra spaces:

`printf 'apple red\n' | tr -s ' '`

Optional: cut then tr:

`cut -d, -f1 ~/fruit.csv | tr 'A-Z' 'a-z'`

Don't make those required. You can stay on commas to newlines.

## What this is not

This is not cut. That is [pull one column](<leftover-box-cut>). It is not paste. That is [join columns side by side](<leftover-box-paste>). It is not uniq. That is [drop duplicate lines](<leftover-box-uniq>). It is not sort. That is [put lines in order](<leftover-box-sort>). It is not grep. That is [find a word in a file](<leftover-box-grep>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>).

## What next

Need one column? [Pull one column](<leftover-box-cut>). Need columns side by side? [Join columns side by side](<leftover-box-paste>). Need copies dropped? [Drop duplicate lines](<leftover-box-uniq>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip cut, paste, uniq, and sort as tonight's job. Those pages already exist.
  * Skip tr into `rm`. Tr prints. Don't mix delete into this drill.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[GNU coreutils: tr invocation](<https://www.gnu.org/software/coreutils/manual/html_node/tr-invocation.html>). [Debian: tr](<https://manpages.debian.org/bookworm/coreutils/tr.1.en.html>). [Ubuntu: tr](<https://manpages.ubuntu.com/manpages/noble/man1/tr.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For one column, see [pull one column](<leftover-box-cut>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Pull one columnAfter SSH works, pull one column with cut so a mixed line is easier to scan. You don't need a file manager for this.](<leftover-box-cut>) [Join columns side by sideAfter SSH works, join columns side by side with paste so two lists become one line each. You don't need a file manager for this.](<leftover-box-paste>) [Drop duplicate linesAfter SSH works, drop duplicate lines with uniq so a mixed list shows each line once. You don't need a file manager for this.](<leftover-box-uniq>) [Put lines in orderAfter SSH works, put lines in order with sort so a mixed list is easier to scan. You don't need a file manager for this.](<leftover-box-sort>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousPull one column](<leftover-box-cut>) [NextJoin columns side by side](<leftover-box-paste>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
