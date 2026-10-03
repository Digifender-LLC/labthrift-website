# Encode a file so you can paste it

Source: https://labthrift.com/guides/leftover-box-base64
Markdown: https://labthrift.com/md/guides/leftover-box-base64.md

*Notes › / › Faster network › / › Encode a file so you can paste it*

[Notes](<./>) / [Faster network](<./#switches>) / Encode a file so you can paste it

Written 30 Aug 2026. This is a how-to, not a product card.

# Encode a file so you can paste it

After SSH works, turn a file into pasteable text with base64 so you can copy small text without a USB stick. You don't need a zip app for this.

Sometimes you want to paste a small file as text, without a USB stick. Tonight you encode a file as text: `base64`. Base64 turns bytes into pasteable text, and back. Start with a tiny practice file in home. You are still only practicing on the computer. It does not need a zip app for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If pieces for a paste limit are what you want, that is [split a file into smaller pieces](<leftover-box-split>). If shrink is what you want, that is [shrink one file](<leftover-box-gzip>). If one file from the laptop is what you want, that is [copy a file to the computer from your laptop](<leftover-box-scp>).

## What this is

`base64` encodes a file so you can paste it. You type `base64 ~/paste-me.txt`. Text comes back. Decode with `base64 -d`. `-w 0` means one long line, no wrap. Tonight: a tiny file, not a disk image. It is not gzip. Gzip shrinks. It is not split. Split cuts into pieces.

## Practice base64 in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make a tiny practice file:

`printf 'hello\n' > ~/paste-me.txt`

`cat ~/paste-me.txt`

Encode:

`base64 ~/paste-me.txt`

Save the encoded text:

`base64 ~/paste-me.txt > ~/paste-me.b64`

`cat ~/paste-me.b64`

Decode it back:

`base64 -d ~/paste-me.b64 > ~/paste-me-out.txt`

`cat ~/paste-me-out.txt`

You want the same hello line. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `base64`. Don't make apt the job. If `base64` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/paste-me.txt ~/paste-me.b64 ~/paste-me-out.txt`

## Useful extras, still home only

Optional: one long line, no wrap:

`base64 -w 0 ~/paste-me.txt`

Optional facts on the encoded file:

`stat ~/paste-me.b64`

Skip huge dumps and whole disks. Tonight: a tiny practice file.

## What this is not

This is not split. That is [split a file into smaller pieces](<leftover-box-split>). It is not gzip. That is [shrink one file](<leftover-box-gzip>). It is not tar. That is [pack files into one archive](<leftover-box-tar>). It is not scp. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not echo. That is [put a short line into a file](<leftover-box-echo>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need pieces? [Split a file into smaller pieces](<leftover-box-split>). Need shrink? [Shrink one file](<leftover-box-gzip>). Need one file from the laptop? [Copy a file to the computer from your laptop](<leftover-box-scp>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps and whole disks. Tonight: a tiny practice file.
  * Skip gzip, tar, split, and scp as tonight's job. Those pages already exist.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: base64](<https://manpages.debian.org/bookworm/coreutils/base64.1.en.html>). [Ubuntu: base64](<https://manpages.ubuntu.com/manpages/noble/man1/base64.1.html>). [GNU coreutils: base64 invocation](<https://www.gnu.org/software/coreutils/manual/html_node/base64-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For pieces, see [split a file into smaller pieces](<leftover-box-split>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Run one command per lineAfter SSH works, run one command once per line with xargs so a list drives many short jobs. You don't need a scripting app for this.](<leftover-box-xargs>) [Shrink one fileAfter SSH works, shrink one file with gzip so a copy is smaller. You don't need a zip app for this.](<leftover-box-gzip>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Check a file fingerprintAfter SSH works, check a file with sha256sum so you know it still matches the fingerprint you expected. You don't need a download manager for this.](<leftover-box-sha256sum>) [Split a file into smaller piecesAfter SSH works, split one file into smaller pieces with split so a paste or copy fits size limits. You don't need a zip app for this.](<leftover-box-split>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousRun one command per line](<leftover-box-xargs>) [NextSplit a file into smaller pieces](<leftover-box-split>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
