# See whether two files match byte for byte

Source: https://labthrift.com/guides/leftover-box-cmp
Markdown: https://labthrift.com/md/guides/leftover-box-cmp.md

*Notes › / › Faster network › / › See whether two files match byte for byte*

[Notes](<./>) / [Faster network](<./#switches>) / See whether two files match byte for byte

Written 1 Sep 2026. This is a how-to, not a product card.

# See whether two files match byte for byte

After comm, compare two files byte for byte with cmp so you know if they match. You don't need extra software for this.

[Compare sorted lists](<leftover-box-comm>) compared two sorted lists. Tonight you compare two files byte for byte: `cmp`. Cmp says whether two files match, or where the first difference is. Start with two tiny practice files. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If sorted lists compared are what you want, that is [compare sorted lists](<leftover-box-comm>). If a line-oriented compare is what you want, that is [see whether two files are the same](<leftover-box-diff>). If a fingerprint is what you want, that is [check a file fingerprint](<leftover-box-sha256sum>).

## What this is

`cmp` compares two files byte for byte. You make two tiny practice files, then type `cmp ~/cmp-a.txt ~/cmp-b.txt`. Quiet output means they match. A short report means they differ, and where. It is not diff. Diff is line-oriented. It is not sha256sum. Sha256sum fingerprints one file. It is not comm. Comm compares sorted lists.

## Practice cmp in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make two tiny matching files:

`printf 'hello\n' > ~/cmp-a.txt`

`printf 'hello\n' > ~/cmp-b.txt`

Compare them:

`cmp ~/cmp-a.txt ~/cmp-b.txt`

Quiet output means they match. Then change one:

`printf 'hello!\n' > ~/cmp-b.txt`

`cmp ~/cmp-a.txt ~/cmp-b.txt`

You want a short report that they differ, then the prompt back. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `cmp`. Don't make apt the job. If `cmp` is missing:

`sudo apt install diffutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/cmp-a.txt ~/cmp-b.txt`

## Useful extras, still home only

Optional: silent, then print the exit status:

`cmp -s ~/cmp-a.txt ~/cmp-b.txt; echo $?`

`0` means match. Non-zero means they differ. Don't make `-s` required.

Optional: list differing bytes:

`cmp -l ~/cmp-a.txt ~/cmp-b.txt`

Don't make `-l` required. You can stay on the default report.

Skip cmp piped into `rm`. Cmp compares. Rm deletes. Don't mix those jobs.

## What this is not

This is not comm. That is [compare sorted lists](<leftover-box-comm>). It is not diff. That is [see whether two files are the same](<leftover-box-diff>). It is not sha256sum. That is [check a file fingerprint](<leftover-box-sha256sum>). It is not join. That is [match files on a shared field](<leftover-box-join>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need sorted lists compared? [Compare sorted lists](<leftover-box-comm>). Need a line-oriented compare? [See whether two files are the same](<leftover-box-diff>). Need a fingerprint? [Check a file fingerprint](<leftover-box-sha256sum>). Need the practice files gone? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps. Tonight: two tiny practice files.
  * Skip cmp piped into `rm`. Cmp compares. Don't mix delete into this drill.
  * Skip comm, diff, and sha256sum as tonight's job. Those pages already exist.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: cmp(1)](<https://manpages.debian.org/bookworm/diffutils/cmp.1.en.html>). [Ubuntu: cmp(1)](<https://manpages.ubuntu.com/manpages/noble/man1/cmp.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For line-oriented compare, see [see whether two files are the same](<leftover-box-diff>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Compare sorted listsAfter join, comm compares sorted lists so practice files show what is only in list 1, only in list 2, or in both. You don't need extra software for this.](<leftover-box-comm>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Check a file fingerprintAfter SSH works, check a file with sha256sum so you know it still matches the fingerprint you expected. You don't need a download manager for this.](<leftover-box-sha256sum>) [Match files on a shared fieldAfter column, match two practice files on a shared field with join so the lists line up on a key. You don't need extra software for this.](<leftover-box-join>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousCompare sorted lists](<leftover-box-comm>) [NextSee the full path](<leftover-box-realpath>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
