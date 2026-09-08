# Make sizes readable with numfmt

Source: https://labthrift.com/guides/leftover-box-numfmt
Markdown: https://labthrift.com/md/guides/leftover-box-numfmt.md

*Notes › / › Faster network › / › Make sizes readable with numfmt*

[Notes](<./>) / [Faster network](<./#switches>) / Make sizes readable with numfmt

Written 1 Sep 2026. This is a how-to, not a product card.

# Make sizes readable with numfmt

After `du` or disk-space (or any big byte count), use `numfmt` so a huge number becomes something like `1.4G` that a first-timer can read. You don't need extra software beyond coreutils.

[See how big one folder is](<leftover-box-du>) already gives you a size for one path. [See if the computer still has room](<leftover-box-disk-space>) shows how full the whole disk is. [See which folders are eating the disk](<leftover-box-largest-folders>) ranks the heavy folders. Tonight you take a raw byte count and make it human. `numfmt` reformats numbers. It does not measure the disk. That is still `du` or `df`. You are still only practicing in home. It does not need a NAS, Grafana, or a disk-space app for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need one folder's size with a friendly unit already, that is [see how big one folder is](<leftover-box-du>) (`du -sh`). If you only need whole-disk room left, that is [see if the computer still has room](<leftover-box-disk-space>). If you only need which folders eat the disk, that is [see which folders are eating the disk](<leftover-box-largest-folders>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`numfmt` reformats numbers so humans can read them. Tonight that means: you hand it a big byte count, and it prints something like `1.4G`. `--to=iec` uses binary-ish units people expect on disks (powers of 1024: K, M, G). Optional `--to=si` uses powers of 1000 instead. Optional `--field=` picks a column when the line has more than one number. It does not measure disk itself. It does not rewrite files. It does not decide which folder is biggest. Those jobs already have their own notes.

## Practice numfmt in home

SSH in. Make sure home is where you are sitting:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Standalone (tonight's job). Paste a big byte count:

`numfmt --to=iec 1500000000`

You want something like `1.4G`, then the prompt back. That is enough for tonight: a huge number became readable.

Optional SI units (powers of 1000):

`numfmt --to=si 1500000000`

You may see `1.5G` instead. Fine. Don't make unit school the whole lesson. IEC is the usual habit for disk sizes.

Optional with `du` bytes (gentle - home only). On Debian and Ubuntu this works:

`du -sb ~ | numfmt --to=iec --field=1`

If the computer doesn't like `-sb`, the same idea with an explicit block size:

`du -s --block-size=1 ~ | numfmt --to=iec --field=1`

Or skip piping entirely and paste a number like the standalone line above. Keep it gentle. Don't make a whole-disk inventory tonight's job.

Optional from a tiny file of numbers:

`printf '1024\n1048576\n' > ~/numfmt-a.txt`

Then:

`numfmt --to=iec < ~/numfmt-a.txt`

You want lines like `1.0K` and `1.0M`, then the prompt back.

Debian and Ubuntu already ship `numfmt` in coreutils. Don't make apt the lesson. No install page tonight.

When you are done practicing:

`rm -i ~/numfmt-a.txt`

Ask first. Say yes only if the name matches. That careful delete is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home-safe

Skip rewriting disks, wiping USB sticks, or using `numfmt` as a reason to buy a NAS. Tonight: readable numbers in home.

Skip piping `numfmt` into `rm`. Numfmt reformats. Rm deletes. Don't mix those jobs.

Skip huge whole-disk inventories as the job. Measuring one folder is [du](<leftover-box-du>). Whole-disk room is [disk-space](<leftover-box-disk-space>). Ranking heavy folders is [largest-folders](<leftover-box-largest-folders>).

Skip `awk`, `sed`, and install as new pages this cycle. Printable text without a full dump stays on [strings](<leftover-box-strings>). A full byte peek stays on [od](<leftover-box-od>).

Skip `dd`, `shred`, `screen`, `tmux`, port 22 forwarding, apt as the lesson, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `du`. That measures one path: [see how big one folder is](<leftover-box-du>). It is not disk-space (`df`). That shows whole-disk room: [see if the computer still has room](<leftover-box-disk-space>). It is not `disk`. That is how big the disk already is: [see how big the disk already is](<leftover-box-disk>). It is not largest-folders. That ranks heavy folders: [see which folders are eating the disk](<leftover-box-largest-folders>). It is not `strings`. That shows printable text: [see printable text with strings](<leftover-box-strings>). It is not `od`. That peeks at bytes: [peek at file bytes](<leftover-box-od>). It is not `rm`. That removes the name: [delete a file carefully](<leftover-box-rm>). It is not `awk` or `sed` as tonight's job. It is not an install page. It is not opening SSH to the internet so you can reformat sizes from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need one folder's size first? [See how big one folder is](<leftover-box-du>). Need whole-disk room left? [See if the computer still has room](<leftover-box-disk-space>). Need which disks and USB sticks are attached? [See disks and USB sticks](<leftover-box-lsblk>). Need which folders eat the disk? [See which folders are eating the disk](<leftover-box-largest-folders>). Need printable text without a full dump? [See printable text with strings](<leftover-box-strings>). Need a full byte peek? [Peek at file bytes](<leftover-box-od>). Need the throwaway gone? [Delete a file carefully](<leftover-box-rm>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `du`, disk-space, or largest-folders as tonight's job if you only came to reformat a number. Those notes already exist.
  * Skip rewriting disks, piping `numfmt` into `rm`, and using numfmt as an excuse to buy a NAS.
  * Skip huge whole-disk inventories as the job. Home practice only.
  * Skip `awk`/`sed`/install as new pages this cycle, `dd`/`shred`, `screen`, `tmux`, apt as the lesson, htop, Grafana, and a NAS.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: numfmt(1)](<https://manpages.debian.org/bookworm/coreutils/numfmt.1.en.html>). [Ubuntu: numfmt(1)](<https://manpages.ubuntu.com/manpages/noble/man1/numfmt.1.html>). [GNU coreutils: numfmt](<https://www.gnu.org/software/coreutils/manual/html_node/numfmt-invocation.html>). Official pages only. For one folder's size, see [see how big one folder is](<leftover-box-du>). For whole-disk room, see [see if the computer still has room](<leftover-box-disk-space>). For ranking folders, see [see which folders are eating the disk](<leftover-box-largest-folders>). For a careful delete, see [delete a file carefully](<leftover-box-rm>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See how big one folder isAfter SSH works, check how big one folder is with du so you know before you copy or delete. You don't need a file manager for this.](<leftover-box-du>) [See if the computer still has roomBefore you buy a bigger drive, check free space on the computer with df.](<leftover-box-disk-space>) [See which folders are eating the diskBefore you buy a bigger drive or a NAS, ask which folders are taking the room.](<leftover-box-largest-folders>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the disk already is.](<leftover-box-disk>) [See printable text with stringsAfter od (or after writing a practice file), use strings so you see readable text without dumping every byte. You don't need extra software beyond binutils.](<leftover-box-strings>) [Peek at file bytesAfter sync (or after writing a practice file), peek with od so you see the characters and bytes that are actually on disk. You don't need extra software beyond coreutils.](<leftover-box-od>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee how big one folder is](<leftover-box-du>) [NextSee if the computer still has room](<leftover-box-disk-space>)

---

*Labthrift Markdown mirror. HTML version linked above.*
