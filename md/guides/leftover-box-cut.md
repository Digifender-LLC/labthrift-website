# Pull one column

Source: https://labthrift.com/guides/leftover-box-cut
Markdown: https://labthrift.com/md/guides/leftover-box-cut.md

*Notes › / › Faster network › / › Pull one column*

[Notes](<./>) / [Faster network](<./#switches>) / Pull one column

Written 30 Aug 2026. This is a how-to, not a product card.

# Pull one column

After SSH works, pull one column with cut so a mixed line is easier to scan. You don't need a file manager for this.

[Drop duplicate lines](<leftover-box-uniq>) dropped copies. Tonight you pull one column out of a line: `cut`. Cut pulls one field out of a mixed line. Start with a tiny fruit list with commas. You are still only looking. The computer does not need a file manager for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If duplicates dropped are what you want, that is [drop duplicate lines](<leftover-box-uniq>). If characters changed are what you want, that is [change characters](<leftover-box-tr>). If columns side by side are what you want, that is [join columns side by side](<leftover-box-paste>).

## What this is

`cut` pulls one column. You type `cut -d, -f1`, then a file. `-d,` means comma is the split. `-f1` is field 1. It prints that column. It does not rewrite the file. It is not paste. Paste joins columns from two files. It is not tr. Tr changes characters. Skip `ls -lh` piped into cut. `ls -lh` pads spaces, and cut on one space lands in the wrong fields.

## Practice cut in home

SSH into the computer. Make a tiny practice file:

`printf 'apple,red\nbanana,yellow\npear,green\n' > ~/fruit.csv`

`cat ~/fruit.csv`

Pull fruit:

`cut -d, -f1 ~/fruit.csv`

You want apple, then banana, then pear. Need colors instead?

`cut -d, -f2 ~/fruit.csv`

You want red, then yellow, then green. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `cut`. Don't make apt the job. If `cut` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm ~/fruit.csv`

## Useful extras, still looking only

Need fruit and color together?

`cut -d, -f1,2 ~/fruit.csv`

Need first letters, not columns?

`cut -c1-5 ~/fruit.csv`

`-c` means characters from the start of the line, commas too. That look is optional.

Need first letters from folder names, without a file in the middle?

`ls | cut -c1-4`

That bar is [send output into another command](<leftover-box-pipe>). Skip `ls -lh` piped into cut. Padded spaces land in the wrong fields. That trap is not tonight.

## What this is not

This is not search. That is [find a word in a file](<leftover-box-grep>). It is not order. That is [put lines in order](<leftover-box-sort>). It is not copies dropped. That is [drop duplicate lines](<leftover-box-uniq>). It is not paste. That is [join columns side by side](<leftover-box-paste>). It is not tr. That is [change characters](<leftover-box-tr>). It is not a house share. That is [a folder the house can open](<first-file-share>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>).

## What next

Need columns side by side? [Join columns side by side](<leftover-box-paste>). Need characters cleaned? [Change characters](<leftover-box-tr>). Need copies dropped? [Drop duplicate lines](<leftover-box-uniq>). Need lines in order? [Put lines in order](<leftover-box-sort>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip cut over files you care about, paths under `/etc`, and SSH settings. Practice only files you just made in home.
  * Skip awk, xargs, and huge logs tonight. Cut by itself is enough for a first look.
  * Skip cut on `ls -lh` spaces. Skip cut piped into `rm`.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[GNU coreutils: cut invocation](<https://www.gnu.org/software/coreutils/manual/html_node/cut-invocation.html>). [Debian: cut](<https://manpages.debian.org/bookworm/coreutils/cut.1.en.html>). [Ubuntu: cut](<https://manpages.ubuntu.com/manpages/noble/man1/cut.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For duplicates, see [drop duplicate lines](<leftover-box-uniq>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Drop duplicate linesAfter SSH works, drop duplicate lines with uniq so a mixed list shows each line once. You don't need a file manager for this.](<leftover-box-uniq>) [Change charactersAfter SSH works, change characters with tr so a mixed line is easier to clean. You don't need a file manager for this.](<leftover-box-tr>) [Join columns side by sideAfter SSH works, join columns side by side with paste so two lists become one line each. You don't need a file manager for this.](<leftover-box-paste>) [Put lines in orderAfter SSH works, put lines in order with sort so a mixed list is easier to scan. You don't need a file manager for this.](<leftover-box-sort>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Find a word in a fileAfter SSH works, search a file with grep so you see only the matching lines. You don't need a file viewer for this.](<leftover-box-grep>) [See the start of a fileAfter SSH works, see the start of a file with head. You don't need a file viewer for this.](<leftover-box-head>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousDrop duplicate lines](<leftover-box-uniq>) [NextChange characters](<leftover-box-tr>)

---

*Labthrift Markdown mirror. HTML version linked above.*
