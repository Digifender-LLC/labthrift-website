# See disks and USB sticks

Source: https://labthrift.com/guides/leftover-box-lsblk
Markdown: https://labthrift.com/md/guides/leftover-box-lsblk.md

*Notes › / › File storage › / › See disks and USB sticks*

[Notes](<./>) / [File storage](<./#first-nas>) / See disks and USB sticks

Written 1 Sep 2026. This is a how-to, not a product card.

# See disks and USB sticks

After SSH works (and before you blame a missing USB backup), list disks and USB sticks with `lsblk` so you see names like `sda` and `sdb` without opening a disk app.

The computer already has at least one disk. A USB stick for backup is a second block device when you plug it in. Tonight you only want the list: which disks are attached, how big they look, and whether a stick you just plugged in showed up. You don't need a NAS, a disk utility app, or a shopping cart for this look.

## Skip until SSH works

If you cannot log in from the couch yet, stop. That is [SSH from the couch](<first-ssh>). Disk names don't help a login that fails.

If you only need room left on the main disk, that is [see if the computer still has room](<leftover-box-disk-space>) (`df`). If you only need one folder's size, that is [see how big one folder is](<leftover-box-du>). If you only need how big the main disk already is, that is [see how big the disk already is](<leftover-box-disk>).

## What this is

`lsblk` lists block devices: whole disks, the slices on them called partitions, and USB sticks when they are plugged in. A disk is the whole drive. A partition is one slice of that drive (you often see `sda1` under `sda`). Mount means the computer made that slice show up as a folder path. Tonight you take a look. `lsblk` does not format, mount, or wipe anything.

## Practice: list what is attached

SSH in from the couch, then run:

`lsblk`

You should see a short table. In plain English:

  * `NAME`: the short name the computer uses (`sda`, `sdb`, sometimes `nvme0n1`).
  * `SIZE`: how big that disk or slice looks.
  * `TYPE`: `disk` for the whole drive, `part` for a partition under it.
  * `MOUNTPOINTS`: folder paths where a partition is already attached (often `/` for the main system).



Point at the disk line whose partition shows `/`. That is the main disk. A second disk name that appeared when you plugged a USB stick in is usually that stick. Home-safe look only. Don't pick a name at random for a wipe.

Optional: see filesystem labels and types too:

`lsblk -f`

Same list, with a little more about how each slice is labeled. Still a look. Still no format.

## Optional: after you plug in a USB for backup

Plug the stick into the computer. Run `lsblk` again. Notice the new name (often a second `sd*` disk with a partition under it). Use the name `lsblk` actually printed, not a guess.

Don't make formatting, partitioning, or mounting tonight's job. Once the stick is visible, the backup job is [a backup of the folder](<first-backup>). A shorter “did the USB show up?” check also lives on [see if the USB backup disk showed up](<leftover-box-usb-disk>).

## Useful extras, still a look

Skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, or `wipefs` as the job. Tonight: the list.

Skip buying a NAS because `lsblk` showed a small disk. A small old laptop disk is normal for house ad block and a thin share. Free room is [disk-space](<leftover-box-disk-space>). Total size of the main disk is [disk](<leftover-box-disk>).

Skip `screen`, `tmux`, and port 22 forwarding. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

Skip `awk`, `sed`, and install as new pages this cycle.

## What this is not

This is not `findmnt`. That shows which folders are already attached: [see which folders are already attached](<leftover-box-findmnt>). It is not disk-space (`df`). That shows how full a mounted filesystem is: [see if the computer still has room](<leftover-box-disk-space>). It is not `du`. That measures one folder: [see how big one folder is](<leftover-box-du>). It is not `disk`, which focuses on how big the main disk already is: [see how big the disk already is](<leftover-box-disk>). It is not `numfmt`. That only reformats a big number: [make sizes readable with numfmt](<leftover-box-numfmt>). It is not free memory: [see if the computer still has free memory](<leftover-box-free-memory>). It is not ranking heavy folders: [see which folders are eating the disk](<leftover-box-largest-folders>). It is not the backup copy itself: [a backup of the folder](<first-backup>).

## What next

Need which folders are already attached (mounted)? [See which folders are already attached](<leftover-box-findmnt>). Need labels, UUIDs, and filesystem types on a slice? [Read disk labels and UUIDs](<leftover-box-blkid>). Need room left on the main disk? [See if the computer still has room](<leftover-box-disk-space>). Need one folder's size? [See how big one folder is](<leftover-box-du>). Need how big the main disk already is? [See how big the disk already is](<leftover-box-disk>). Need a huge byte count made readable? [Make sizes readable with numfmt](<leftover-box-numfmt>). Stick visible and ready for a second copy? [A backup of the folder](<first-backup>). If the computer feels slow and the disk is fine, later: [see if the computer still has free memory](<leftover-box-free-memory>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). awk, sed, and install stay deferred this cycle.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `df`, `du`, or total disk size as tonight's job if you only came to list attached disks. Those notes already exist.
  * Skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, `wipefs`, and mounting as the lesson.
  * Skip buying a NAS because the list showed a small disk.
  * Skip `awk`/`sed`/install as new pages this cycle, `screen`, `tmux`, and port 22 forwarding.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: lsblk(8)](<https://manpages.debian.org/bookworm/util-linux/lsblk.8.en.html>). [Ubuntu: lsblk(8)](<https://manpages.ubuntu.com/manpages/noble/en/man8/lsblk.8.html>). Part of util-linux. Official pages only. For free room, see [see if the computer still has room](<leftover-box-disk-space>). For one folder's size, see [see how big one folder is](<leftover-box-du>). For total disk size, see [see how big the disk already is](<leftover-box-disk>). For a second copy once the stick is visible, see [a backup of the folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See which folders are already attachedAfter you can list disks with lsblk (and before you blame a missing USB backup), use findmnt to see which folders are already attached (mounted) so you know what is live as / or a USB path.](<leftover-box-findmnt>) [Read disk labels and UUIDsAfter you can list disks with lsblk and see which folders are attached with findmnt, use blkid to read labels, UUIDs, and filesystem types on disk slices so you can tell which stick or slice is which.](<leftover-box-blkid>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the computer disk already is.](<leftover-box-disk>) [See how big one folder isAfter SSH works, check how big one folder is with du so you know before you copy or delete. You don't need a file manager app for this.](<leftover-box-du>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [A backup of the folderA second copy of the house folder, on a USB disk you already have, or on another leftover computer. You don't need a NAS for this.](<first-backup>) [Make sizes readable with numfmtAfter du or disk-space (or any big byte count), use numfmt so a huge number becomes something like 1.4G that a first-timer can read. You don't need extra system software beyond coreutils.](<leftover-box-numfmt>) [See if the computer still has free memoryThe computer feels slow. Check free memory before you buy a new mini PC.](<leftover-box-free-memory>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee if the computer still has room](<leftover-box-disk-space>) [NextA backup of the folder](<first-backup>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
