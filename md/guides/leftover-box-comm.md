# Compare sorted lists

Source: https://labthrift.com/guides/leftover-box-comm
Markdown: https://labthrift.com/md/guides/leftover-box-comm.md

*Notes › / › Faster network › / › Compare sorted lists*

[Notes](<./>) / [Faster network](<./#switches>) / Compare sorted lists

Written 1 Sep 2026. This is a how-to, not a product card.

# Compare sorted lists

After join, comm compares sorted lists so practice files show what is only in list 1, only in list 2, or in both. You don't need extra software for this.

[Match files on a shared field](<leftover-box-join>) matched files on a key. Tonight you compare two sorted lists: `comm`. Comm compares two sorted lists. Start with two tiny practice files already sorted, then `comm ~/comm-a.txt ~/comm-b.txt`. Comm prints three tab-separated columns. Column 1 is lines only in file 1. Column 2 is lines only in file 2. Column 3 is lines in both. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If files matched on a shared field are what you want, that is [match files on a shared field](<leftover-box-join>). If columns side by side without matching keys are what you want, that is [join columns side by side](<leftover-box-paste>). If files compared for edits are what you want, that is [see whether two files are the same](<leftover-box-diff>). Comm needs files already sorted. That sort is [put lines in order](<leftover-box-sort>).

## What this is

`comm` compares sorted lists. You make two tiny practice files, already sorted, then type `comm ~/comm-a.txt ~/comm-b.txt`. Comm prints three tab-separated columns. Stick with that safe peek: a in column 1, d in column 2, b and c in column 3. Both files must already be sorted. If files are mixed order, comm can miss lines or warn. Put lines in order first: [put lines in order](<leftover-box-sort>). It is not join. Join matches files on a key into one line. It is not paste. Paste joins columns side by side. It is not diff. Diff compares files for edits.

## Practice comm in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make two tiny practice files, already sorted:

`printf 'a\nb\nc\n' > ~/comm-a.txt`

`printf 'b\nc\nd\n' > ~/comm-b.txt`

Compare sorted lists:

`comm ~/comm-a.txt ~/comm-b.txt`

You want three tab-separated columns. Column 1 is a. Column 2 is d. Column 3 is b then c. Then the prompt back. That is enough for tonight. Practice only in home.

Don't make sort the job. If files later need order, that is [put lines in order](<leftover-box-sort>).

Debian and Ubuntu usually already have `comm`. Don't make apt the job. If `comm` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/comm-a.txt ~/comm-b.txt`

## Useful extras, still home only

Optional: only lines in both:

`comm -12 ~/comm-a.txt ~/comm-b.txt`

Optional: only lines in file 1:

`comm -13 ~/comm-a.txt ~/comm-b.txt`

Optional: only lines in file 2:

`comm -23 ~/comm-a.txt ~/comm-b.txt`

`-1` hides column 1, and so on. Don't make those required. You can stay on default print.

## What this is not

This is not join. That is [match files on a shared field](<leftover-box-join>). It is not cmp. That is [see whether two files match byte for byte](<leftover-box-cmp>). It is not sort as the job. That is [put lines in order](<leftover-box-sort>). It is not uniq. That is [drop duplicate lines](<leftover-box-uniq>). It is not paste. That is [join columns side by side](<leftover-box-paste>). It is not diff. That is [see whether two files are the same](<leftover-box-diff>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need files matched on a key? [Match files on a shared field](<leftover-box-join>). Need byte-for-byte compare? [See whether two files match byte for byte](<leftover-box-cmp>). Need files sorted first? [Put lines in order](<leftover-box-sort>). Need the practice files gone? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps. Tonight: two tiny practice files.
  * Skip join, cmp, sort, uniq, paste, and diff as tonight's job. Those pages already exist.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: comm(1)](<https://manpages.debian.org/bookworm/coreutils/comm.1.en.html>). [Ubuntu: comm(1)](<https://manpages.ubuntu.com/manpages/noble/man1/comm.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For matching on a key, see [match files on a shared field](<leftover-box-join>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Match files on a shared fieldAfter column, match two practice files on a shared field with join so the lists line up on a key. You don't need extra software for this.](<leftover-box-join>) [See whether two files match byte for byteAfter comm, compare two files byte for byte with cmp so you know if they match. You don't need extra software for this.](<leftover-box-cmp>) [Put lines in orderAfter SSH works, put lines in order with sort so a mixed list is easier to scan. You don't need a file manager for this.](<leftover-box-sort>) [Drop duplicate linesAfter SSH works, drop duplicate lines with uniq so a mixed list shows each line once. You don't need a file manager for this.](<leftover-box-uniq>) [Join columns side by sideAfter SSH works, join columns side by side with paste so two lists become one line each. You don't need a file manager for this.](<leftover-box-paste>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousMatch files on a shared field](<leftover-box-join>) [NextSee whether two files match byte for byte](<leftover-box-cmp>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
