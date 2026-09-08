# Match files on a shared field

Source: https://labthrift.com/guides/leftover-box-join
Markdown: https://labthrift.com/md/guides/leftover-box-join.md

*Notes › / › Faster network › / › Match files on a shared field*

[Notes](<./>) / [Faster network](<./#switches>) / Match files on a shared field

Written 1 Sep 2026. This is a how-to, not a product card.

# Match files on a shared field

After column, match two practice files on a shared field with join so the lists line up on a key. You don't need extra software for this.

[Line lists up in columns](<leftover-box-column>) asked two short lines to sit in columns with `printf` and `column -t`. Tonight you match two lists on a shared field: `join`. Join means match two files on a shared field. Start with two tiny practice files already sorted on field 1, then `join ~/join-a.txt ~/join-b.txt`. Shared keys print. Unmatched keys stay out. Key 1 lives only in the first file. Key 4 lives only in the second. That is not [join columns side by side](<leftover-box-paste>). Paste joins columns without matching keys. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If pretty columns are what you want, that is [line lists up in columns](<leftover-box-column>). If columns side by side without matching keys are what you want, that is [join columns side by side](<leftover-box-paste>). If one column pulled is what you want, that is [pull one column](<leftover-box-cut>). Join needs files already sorted. That sort is [put lines in order](<leftover-box-sort>). If sorted lists compared are what you want, that is [compare sorted lists](<leftover-box-comm>).

## What this is

`join` matches two files on a shared field. You make two tiny practice files, already sorted on field 1, then type `join ~/join-a.txt ~/join-b.txt`. Join looks at field 1 in both files. Whitespace splits fields. Shared keys print as `2 b x` and `3 c y`. Both files must already be sorted on the join field. Default field is 1. If files are mixed order, join can miss matches or warn. Put lines in order first: [put lines in order](<leftover-box-sort>). Tonight's practice files are already sorted. It is not paste, column, cut, uniq, comm, awk, SQL, or a spreadsheet app.

## Practice join in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make two tiny practice files, already sorted on field 1:

`printf '1 a\n2 b\n3 c\n' > ~/join-a.txt`

`printf '2 x\n3 y\n4 z\n' > ~/join-b.txt`

Match on a shared field:

`join ~/join-a.txt ~/join-b.txt`

You want lines for shared keys 2 and 3 (`2 b x` then `3 c y`), then the prompt back. Key 1 stays only in `join-a.txt`. Key 4 stays only in `join-b.txt`. That is enough for tonight. Practice only in home.

Don't make sort the job tonight. If files later need order, that is [put lines in order](<leftover-box-sort>).

Debian and Ubuntu usually already have `join`. Don't make apt the job. If `join` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/join-a.txt ~/join-b.txt`

## Useful extras, still home only

Optional: colon as the field split:

`printf '1:a\n2:b\n3:c\n' > ~/join-a.txt`

`printf '2:x\n3:y\n4:z\n' > ~/join-b.txt`

`join -t : ~/join-a.txt ~/join-b.txt`

That tells join to split fields on `:` instead of whitespace. You want `2:b:x` then `3:c:y`. You can stay on whitespace.

Optional: unmatched lines from file 1:

`join -a 1 ~/join-a.txt ~/join-b.txt`

That keeps unmatched keys from file 1 (key 1) plus matches. Don't make `-a 1` required.

Optional: pick output fields:

`join -o 1.1,1.2,2.2 ~/join-a.txt ~/join-b.txt`

That picks field 1 from file 1, field 2 from file 1, field 2 from file 2. You can stay on default print.

Optional: join then head the first lines:

`join ~/join-a.txt ~/join-b.txt | head -n 2`

That shows only the first two matched lines. Head is not tonight's job.

Skip huge dumps. Join of whole home, `/etc`, password files, or huge logs is still a huge dump. Tonight: two tiny practice files.

Skip join piped into `rm`. Join matches files. Rm deletes them. Don't mix those jobs.

## What this is not

This is not paste. Paste joins columns side by side without matching keys. That is [join columns side by side](<leftover-box-paste>). It is not column. That is [line lists up in columns](<leftover-box-column>). It is not cut. That is [pull one column](<leftover-box-cut>). It is not sort as the job. Join needs files already sorted. That is [put lines in order](<leftover-box-sort>). It is not uniq. That is [drop duplicate lines](<leftover-box-uniq>). It is not comm. That is [compare sorted lists](<leftover-box-comm>). It is not awk, SQL, or a spreadsheet. It is not echo as the job. Tonight uses `printf` only to make practice files. That is [put a short line into a file](<leftover-box-echo>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need lists lined up in columns? [Line lists up in columns](<leftover-box-column>). Need sorted lists compared? [Compare sorted lists](<leftover-box-comm>). Need columns side by side without matching keys? [Join columns side by side](<leftover-box-paste>). Need one column pulled out? [Pull one column](<leftover-box-cut>). Need files sorted first? [Put lines in order](<leftover-box-sort>). Need the practice files gone? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as tonight's job. Tonight: two tiny practice files.
  * Skip `join` piped into `rm`. Join matches files. Don't mix delete into this drill.
  * Skip paste, column, cut, sort, uniq, and comm as tonight's job. Those pages already exist.
  * Skip awk, SQL, and spreadsheet apps. Tonight: `join` on two tiny home files.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: join(1)](<https://manpages.debian.org/bookworm/coreutils/join.1.en.html>). [Ubuntu: join(1)](<https://manpages.ubuntu.com/manpages/noble/man1/join.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For columns that line up, see [line lists up in columns](<leftover-box-column>). For sorted lists compared, see [compare sorted lists](<leftover-box-comm>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Line lists up in columnsAfter unexpand, line lists up in columns with column so practice notes sit in columns that line up. You don't need extra software for this.](<leftover-box-column>) [Compare sorted listsAfter join, comm compares sorted lists so practice files show what is only in list 1, only in list 2, or in both. You don't need extra software for this.](<leftover-box-comm>) [Join columns side by sideAfter SSH works, join columns side by side with paste so two lists become one line each. You don't need a file manager for this.](<leftover-box-paste>) [Pull one columnAfter SSH works, pull one column with cut so a mixed line is easier to scan. You don't need a file manager for this.](<leftover-box-cut>) [Put lines in orderAfter SSH works, put lines in order with sort so a mixed list is easier to scan. You don't need a file manager for this.](<leftover-box-sort>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousLine lists up in columns](<leftover-box-column>) [NextCompare sorted lists](<leftover-box-comm>)

---

*Labthrift Markdown mirror. HTML version linked above.*
