# Shrink one file

Source: https://labthrift.com/guides/leftover-box-gzip
Markdown: https://labthrift.com/md/guides/leftover-box-gzip.md

*Notes › / › Faster network › / › Shrink one file*

[Notes](<./>) / [Faster network](<./#switches>) / Shrink one file

Written 30 Aug 2026. This is a how-to, not a product card.

# Shrink one file

After SSH works, shrink one file with gzip so a copy is smaller. You don't need a zip app for this.

A copy is smaller if you shrink the file first. Tonight you shrink one file: `gzip`. Gzip shrinks one file. Use `-k` so the original stays. You are still only practicing in home on the computer. It does not need a zip app for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If a folder packed is what you want, that is [pack files into one archive](<leftover-box-tar>). If a zip a laptop can open is what you want, that is [pack files into a zip a laptop can open](<leftover-box-zip>). Skip shrinking `/etc` or a disk.

## What this is

`gzip` shrinks one file. You type `gzip -k ~/shrink-me.txt`. `-k` keeps the original. A `.gz` file appears next to it. `gzip -l` lists size. `gzip -cd` unpacks to the screen or a redirect. It is not tar. Tar packs a folder. It is not zip. Zip is a different archive a laptop often opens.

## Shrink a practice file in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make a tiny practice file:

`yes 'hello' | head -n 40 > ~/shrink-me.txt`

`ls -lh ~/shrink-me.txt`

Shrink it, keep the original:

`gzip -k ~/shrink-me.txt`

`ls -lh ~/shrink-me.txt ~/shrink-me.txt.gz`

List the shrink:

`gzip -l ~/shrink-me.txt.gz`

Unpack into a throwaway folder:

`mkdir -p ~/unpack-gz`

`gzip -cd ~/shrink-me.txt.gz > ~/unpack-gz/shrink-me.txt`

`ls -lh ~/unpack-gz/shrink-me.txt`

That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `gzip`. Don't make apt the job. If `gzip` is missing:

`sudo apt install gzip`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/shrink-me.txt ~/shrink-me.txt.gz`

Then the unpack copy:

`rm -i ~/unpack-gz/shrink-me.txt`

## Useful extras, still home only

Optional facts:

`stat ~/shrink-me.txt.gz`

Optional: verbose keep:

`gzip -kv ~/shrink-me.txt`

Skip shrinking `/etc`, whole disks, or files you care about. Tonight: a practice file in home.

## What this is not

This is not tar. That is [pack files into one archive](<leftover-box-tar>). It is not zip. That is [pack files into a zip a laptop can open](<leftover-box-zip>). It is not xargs. That is [run one command per line](<leftover-box-xargs>). It is not a fingerprint. That is [check a file fingerprint](<leftover-box-sha256sum>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need a folder packed? [Pack files into one archive](<leftover-box-tar>). Need one command per line? [Run one command per line](<leftover-box-xargs>). Need a fingerprint? [Check a file fingerprint](<leftover-box-sha256sum>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip shrinking `/etc`, whole disks, or files you care about. Tonight: a practice file in home.
  * Skip tar, zip, and xargs as tonight's job. Those pages already exist.
  * Skip gzip without `-k` on a file you still want. Keep the original.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: gzip](<https://manpages.debian.org/bookworm/gzip/gzip.1.en.html>). [Ubuntu: gzip](<https://manpages.ubuntu.com/manpages/noble/man1/gzip.1.html>). [GNU gzip](<https://www.gnu.org/software/gzip/manual/gzip.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a folder packed, see [pack files into one archive](<leftover-box-tar>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [Check a file fingerprintAfter SSH works, check a file with sha256sum so you know it still matches the fingerprint you expected. You don't need a download manager for this.](<leftover-box-sha256sum>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Run one command per lineAfter SSH works, run one command once per line with xargs so a list drives many short jobs. You don't need a scripting app for this.](<leftover-box-xargs>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPack files into one archive](<leftover-box-tar>) [NextRun one command per line](<leftover-box-xargs>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
