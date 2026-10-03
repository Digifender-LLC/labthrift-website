# Read disk labels and UUIDs

Source: https://labthrift.com/guides/leftover-box-blkid
Markdown: https://labthrift.com/md/guides/leftover-box-blkid.md

*Notes › / › File storage › / › Read disk labels and UUIDs*

[Notes](<./>) / [File storage](<./#first-nas>) / Read disk labels and UUIDs

Written 2 Sep 2026. This is a how-to, not a product card.

# Read disk labels and UUIDs

After you can list disks with `lsblk` and see which folders are attached with `findmnt`, use `blkid` to read labels, UUIDs, and filesystem types on disk slices - so you can tell which stick or slice is which without opening a disk app or formatting anything.

A device name like `sdb1` can change when you unplug and replug. A label is the friendly name someone put on the slice. A UUID is a long fixed ID for that slice. Filesystem type is the flavor on the disk (`ext4`, `vfat`, and so on). Tonight you only read those tags. You don't mount, format, or wipe anything.

## Skip until SSH works

If you cannot log in from the couch yet, stop. That is [SSH from the couch](<first-ssh>). Labels don't help a login that fails.

If you only need the list of disks and USB sticks, that is [see disks and USB sticks](<leftover-box-lsblk>) (`lsblk`). If you only need which folders are already attached, that is [see which folders are already attached](<leftover-box-findmnt>) (`findmnt`). If you only need room left on a path, that is [see if the computer still has room](<leftover-box-disk-space>) (`df`).

## What this is

`blkid` prints the tags on disk slices: LABEL, UUID, TYPE, and similar fields. In plain English: which stick or slice is which, by name and fixed ID, not only by a device letter that can move. Tonight you take a look. `blkid` does not mount, unmount, format, or wipe anything.

## Practice: read the tags

SSH in from the couch, then run:

`blkid`

You should see one line per slice that has a recognizable filesystem. In plain English:

  * `LABEL` \- the friendly name on that slice, if someone set one (often blank on a fresh install).
  * `UUID` \- the long fixed ID for that slice. Useful later when a path or fstab line wants a stable name.
  * `TYPE` \- the filesystem flavor (`ext4`, `xfs`, `vfat`, `exfat`, `ntfs`, and so on).
  * The path at the start of the line - usually something like `/dev/sda1` or `/dev/sdb1`.



Match a line to a name you already saw in `lsblk`. Home-safe look only. Don't format, wipe, or remount anything tonight.

Optional: a table-style list that is easier to scan:

`blkid -o list`

Same tags, arranged as columns. Still a look.

Optional: ask about one device only (use a name you already saw in `lsblk` \- don't guess):

`blkid /dev/sdb1`

That prints tags for that one slice. Still no change to the disk. If your stick uses a different letter, swap in the name from `lsblk`.

## Optional: after you plug in a USB for backup

Plug the stick into the computer. Run `lsblk` so you see the device name, then run `blkid` (or `blkid /dev/…` for that slice). You should see TYPE and maybe a LABEL that matches the stick you expect. If you need the mount map next, that is [see which folders are already attached](<leftover-box-findmnt>). The backup job, once a path is live, is [a backup of the house folder](<first-backup>).

## Useful extras, still a look

Skip `mount` and `umount` as the job. Tonight you read labels and IDs.

Skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, or format as the lesson. Those are not this note.

Skip buying a NAS because a label looks unfamiliar. Free room is [see if the computer still has room](<leftover-box-disk-space>). Disk names without tags are [see disks and USB sticks](<leftover-box-lsblk>). Mount maps are [see which folders are already attached](<leftover-box-findmnt>).

Skip `screen`, `tmux`, and port 22 forwarding. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

Skip `awk`, `sed`, and install as new pages this cycle.

## What this is not

This is not `lsblk`. That lists disks and USB sticks by name: [see disks and USB sticks](<leftover-box-lsblk>). It is not `findmnt`. That shows which folders are already attached: [see which folders are already attached](<leftover-box-findmnt>). It is not disk-space (`df`). That shows how full a mounted path is: [see if the computer still has room](<leftover-box-disk-space>). It is not `disk`, which focuses on how big the main disk already is: [see how big the disk already is](<leftover-box-disk>). It is not USB-disk, a shorter “did the stick show up?” check: [see if the USB backup disk showed up](<leftover-box-usb-disk>). It is not the backup copy itself: [a backup of the house folder](<first-backup>).

## What next

Need the disk-name list first? [See disks and USB sticks](<leftover-box-lsblk>). Need which folders are already attached? [See which folders are already attached](<leftover-box-findmnt>). Need the stable paths under `/dev/disk/by-uuid`? [See stable disk names by UUID](<leftover-box-by-uuid>). Need hardware-style fixed names under `/dev/disk/by-id`? [See stable disk names by hardware id](<leftover-box-by-id>). Need room left on a path? [See if the computer still has room](<leftover-box-disk-space>). Stick visible and ready for a second copy? [A backup of the house folder](<first-backup>). Need how big the main disk already is? [See how big the disk already is](<leftover-box-disk>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). awk, sed, and install stay deferred this cycle.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `lsblk`, `findmnt`, disk-space, or total disk size as tonight's job if you only came for labels and UUIDs. Those notes already exist.
  * Skip `mount`/`umount` as the lesson, and skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, and format.
  * Skip buying a NAS because a label looks unfamiliar.
  * Skip `awk`/`sed`/install as new pages this cycle, `screen`, `tmux`, and port 22 forwarding.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: blkid(8)](<https://manpages.debian.org/bookworm/util-linux/blkid.8.en.html>). [Ubuntu: blkid(8)](<https://manpages.ubuntu.com/manpages/noble/en/man8/blkid.8.html>). Part of util-linux. Official pages only. For the disk-name list, see [see disks and USB sticks](<leftover-box-lsblk>). For the mount map, see [see which folders are already attached](<leftover-box-findmnt>). For free room, see [see if the computer still has room](<leftover-box-disk-space>). For a second copy once a USB path is live, see [a backup of the house folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See disks and USB sticksAfter SSH works (and before you blame a missing USB backup), list disks and USB sticks with lsblk so you see names like sda and sdb without opening a disk app.](<leftover-box-lsblk>) [See which folders are already attachedAfter you can list disks with lsblk (and before you blame a missing USB backup), use findmnt to see which folders are already attached (mounted) so you know what is live as / or a USB path.](<leftover-box-findmnt>) [See stable disk names by UUIDAfter blkid shows labels and UUIDs, use ls on /dev/disk/by-uuid (and optional by-label) so you see the fixed paths Linux already made - names that don't move when sdb becomes sdc.](<leftover-box-by-uuid>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See how big the computer disk already isBefore you buy a tiny computer or a NAS, check how big the computer disk already is.](<leftover-box-disk>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee which folders are already attached](<leftover-box-findmnt>) [NextSee stable disk names by UUID](<leftover-box-by-uuid>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
