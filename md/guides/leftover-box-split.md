# Split a file into smaller pieces

Source: https://labthrift.com/guides/leftover-box-split
Markdown: https://labthrift.com/md/guides/leftover-box-split.md

*Notes › / › Faster network › / › Split a file into smaller pieces*

[Notes](<./>) / [Faster network](<./#switches>) / Split a file into smaller pieces

Written 30 Aug 2026. This is a how-to, not a product card.

# Split a file into smaller pieces

After SSH works, split one file into smaller pieces with split so a paste or copy fits size limits. You don't need a zip app for this.

A paste or copy sometimes has a size limit. Tonight you cut one file into pieces: `split`. Split cuts one file into smaller files. Start with a 200-line practice file, fifty lines per piece. You are still only practicing in home on the computer. It does not need a zip app for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If encode for paste is what you want, that is [encode a file so you can paste it](<leftover-box-base64>). If shrink is what you want, that is [shrink one file](<leftover-box-gzip>). If a folder packed is what you want, that is [pack files into one archive](<leftover-box-tar>). Skip huge ISOs and whole disks as tonight's lesson.

## What this is

`split` cuts one file into smaller pieces. You type `split -l 50`, then the file, then a prefix in home. `-l 50` means fifty lines per piece. Names look like `pieces-me-aa`, `pieces-me-ab`. `-b 1k` is about one kilobyte per piece. Stick with split by lines first. It is not tar. Tar packs a folder. It is not gzip. Gzip shrinks one file. Skip csplit, zip split, rar, and 7z tonight.

## Practice split in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make a 200-line practice file:

`seq 1 200 > ~/pieces-me.txt`

`wc -l ~/pieces-me.txt`

You want 200. Split by lines into pieces of fifty. The prefix stays in home:

`split -l 50 ~/pieces-me.txt ~/pieces-me-`

List the pieces:

`ls ~/pieces-me-*`

You want names like `pieces-me-aa`, `pieces-me-ab`, and so on. Count lines on each piece:

`wc -l ~/pieces-me-*`

You want fifty lines on most pieces, and two hundred lines total when you include the original. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `split`. Don't make apt the job. If `split` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/pieces-me.txt ~/pieces-me-back.txt ~/pieces-me-*`

## Useful extras, still home only

Optional: split by bytes for a size limit:

`split -b 1k ~/pieces-me.txt ~/pieces-me-b-`

`-b 1k` means about one kilobyte per piece. Stick with split by lines first.

Optional: numbered suffixes on GNU split (Debian and Ubuntu):

`split -d -l 50 ~/pieces-me.txt ~/pieces-me-`

`-d` means digits instead of letters. Handy when you want `pieces-me-00` style names.

Put the pieces back into one file:

`cat ~/pieces-me-aa ~/pieces-me-ab ~/pieces-me-ac ~/pieces-me-ad > ~/pieces-me-back.txt`

Or, if your pieces are only the letter names and you listed them in order:

`cat ~/pieces-me-a* > ~/pieces-me-back.txt`

Be careful: glob order usually matches letter order for short prefixes. Compare length:

`wc -l ~/pieces-me.txt ~/pieces-me-back.txt`

You want the same line count. Optional compare:

`diff ~/pieces-me.txt ~/pieces-me-back.txt`

Quiet compare means the files match. For a fingerprint instead, that is [check a file fingerprint](<leftover-box-sha256sum>).

Skip huge ISOs and whole disks as tonight's lesson. Tonight's split is for a paste limit or a copy limit on a practice file, not a disk image.

## What this is not

This is not encode for paste. That is [encode a file so you can paste it](<leftover-box-base64>). It is not pack for a folder. That is [pack files into one archive](<leftover-box-tar>). It is not shrink for one file. That is [shrink one file](<leftover-box-gzip>). It is not run-once-per-line. That is [run one command per line](<leftover-box-xargs>). It is not a USB backup. That is [a backup of the folder](<first-backup>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need encode for paste? [Encode a file so you can paste it](<leftover-box-base64>). Need shrink? [Shrink one file](<leftover-box-gzip>). Need a folder packed? [Pack files into one archive](<leftover-box-tar>). Need sync so only changes copy? [Sync files so only changes copy](<leftover-box-rsync>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge ISOs and whole disks tonight. Practice split on a home file first.
  * Skip csplit, zip split, rar, and 7z as tonight's names.
  * Skip splitting into `rm` pipelines. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip buying a zip app. Debian and Ubuntu already ship `split`.
  * Skip if you actually need the USB backup. That is [a backup of the folder](<first-backup>).
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: split](<https://manpages.debian.org/bookworm/coreutils/split.1.en.html>). [Ubuntu: split](<https://manpages.ubuntu.com/manpages/noble/man1/split.1.html>). [GNU coreutils: split invocation](<https://www.gnu.org/software/coreutils/manual/html_node/split-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For encode, see [encode a file so you can paste it](<leftover-box-base64>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Encode a file so you can paste itAfter SSH works, turn a file into pasteable text with base64 so you can copy small text without a USB stick. You don't need a zip app for this.](<leftover-box-base64>) [Run one command per lineAfter SSH works, run one command once per line with xargs so a list drives many short jobs. You don't need a scripting app for this.](<leftover-box-xargs>) [Shrink one fileAfter SSH works, shrink one file with gzip so a copy is smaller. You don't need a zip app for this.](<leftover-box-gzip>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [Check a file fingerprintAfter SSH works, check a file with sha256sum so you know it still matches the fingerprint you expected. You don't need a download manager for this.](<leftover-box-sha256sum>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Sync files so only changes copyAfter SSH works, sync files with rsync so a copy only moves what changed. You don't need a NAS sync app for this.](<leftover-box-rsync>) [Browse folders then copy one fileAfter SSH works, browse folders with sftp so you can pick a file and copy it. You don't need FileZilla or a NAS for this.](<leftover-box-sftp>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousEncode a file so you can paste it](<leftover-box-base64>) [NextSync files so only changes copy](<leftover-box-rsync>)

---

*Labthrift Markdown mirror. HTML version linked above.*
