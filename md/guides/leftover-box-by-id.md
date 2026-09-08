# See stable disk names by hardware id

Source: https://labthrift.com/guides/leftover-box-by-id
Markdown: https://labthrift.com/md/guides/leftover-box-by-id.md

*Notes › / › File storage › / › See stable disk names by hardware id*

[Notes](<./>) / [File storage](<./#first-nas>) / See stable disk names by hardware id

Written 2 Sep 2026. This is a how-to, not a product card.

# See stable disk names by hardware id

After [by-uuid](<leftover-box-by-uuid>) shows filesystem UUID paths, use a simple `ls` under `/dev/disk/by-id` (and optional `by-path`) so you see hardware-style fixed names - `ata-…`, `usb-…`, `nvme-…` \- that don't move when `sdb` becomes `sdc`.

A device letter like `sdb1` can change when you unplug and replug. Linux already keeps another set of names under `/dev/disk/by-id` that follow how the hardware presents itself - serial and bus style, not the filesystem UUID. Tonight you only list those folders. You don't mount, format, wipe, or rewrite fstab.

## Skip until SSH works

If you cannot log in from the couch yet, stop. That is [SSH from the couch](<first-ssh>). Stable paths don't help a login that fails.

If you only need the list of disks and USB sticks, that is [see disks and USB sticks](<leftover-box-lsblk>) (`lsblk`). If you only need which folders are already attached, that is [see which folders are already attached](<leftover-box-findmnt>) (`findmnt`). If you only need labels and UUIDs printed as text, that is [read disk labels and UUIDs](<leftover-box-blkid>) (`blkid`). If you only need filesystem UUID paths, that is [see stable disk names by UUID](<leftover-box-by-uuid>). If you only need room left on a path, that is [see if the computer still has room](<leftover-box-disk-space>) (`df`).

## What this is

`/dev/disk/by-id` (and optional `/dev/disk/by-path`) are folders of short names Linux builds for you. Each name is a **symlink** \- in plain English, a pointer that says “this hardware id is really `/dev/sda` (or `sdb1`) right now.”

Here is the one jargon split for tonight: **by-uuid** names come from the _filesystem_ UUID (the tag `blkid` prints). **by-id** names come from how the _hardware_ presents itself - often a serial and a bus prefix like `ata-`, `usb-`, or `nvme-`. Both stay put when the letter moves. Both are look-only tonight. You don't mount, unmount, format, or wipe anything.

## Practice: list the hardware-style names

SSH in from the couch, then run:

`ls /dev/disk/by-id`

You should see a list of longer names - often starting with `ata-`, `usb-`, `nvme-`, or similar - plus partition suffixes like `-part1` on some entries. In plain English: Linux already made a fixed hardware-style name for each disk (and often each slice) it can identify.

Optional: the same idea by how the disk is plugged in (controller / port style):

`ls /dev/disk/by-path`

Optional: see what each by-id name points at right now:

`ls -l /dev/disk/by-id`

The right-hand side is usually something like `../../sda` or `../../sdb1`. That is the symlink target - today’s device letter. Tomorrow the letter might change; the by-id entry stays. Home-safe look only. Don't format, wipe, remount, or edit fstab tonight.

## Optional: after you plug in a USB for backup

Plug the stick into the computer. Run `lsblk` so you know today’s letter, then run `ls /dev/disk/by-id` (or `ls -l`). You should see a `usb-…` style name appear, pointing at today’s `/dev/…` name. Compare with [by-uuid](<leftover-box-by-uuid>) if you already know the filesystem UUID - same stick, two kinds of fixed name. If you need the mount map next, that is [see which folders are already attached](<leftover-box-findmnt>). The backup job, once a path is live, is [a backup of the folder](<first-backup>).

## Useful extras, still a look

Skip `mount` and `umount` as the job. Tonight you list the stable hardware-style names Linux already made.

Skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, format, or rewriting fstab as the lesson. Those are not this note.

Skip buying a NAS because a by-id name looks unfamiliar. Free room is [disk-space](<leftover-box-disk-space>). Disk names without tags are [lsblk](<leftover-box-lsblk>). Mount maps are [findmnt](<leftover-box-findmnt>). Printed labels and UUIDs are [blkid](<leftover-box-blkid>). Filesystem UUID paths are [by-uuid](<leftover-box-by-uuid>).

Skip `screen`, `tmux`, and port 22 forwarding. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

Skip `awk`, `sed`, and install as new pages this cycle.

## What this is not

This is not `lsblk`. That lists disks and USB sticks by name: [see disks and USB sticks](<leftover-box-lsblk>). It is not `findmnt`. That shows which folders are already attached: [see which folders are already attached](<leftover-box-findmnt>). It is not `blkid`. That prints LABEL, UUID, and TYPE as text: [read disk labels and UUIDs](<leftover-box-blkid>). It is not by-uuid. That lists filesystem UUID (and optional label) paths under `/dev/disk/by-uuid`: [see stable disk names by UUID](<leftover-box-by-uuid>). It is not disk-space (`df`). That shows how full a mounted path is: [see if the computer still has room](<leftover-box-disk-space>). It is not `disk`, which focuses on how big the main disk already is: [see how big the disk already is](<leftover-box-disk>). It is not USB-disk, a shorter “did the stick show up?” check: [see if the USB backup disk showed up](<leftover-box-usb-disk>). It is not the backup copy itself: [a backup of the folder](<first-backup>).

## What next

Want a deeper look at what udev knows about one disk? [Peek at disk details with udevadm](<leftover-box-udevadm>). Need filesystem UUID paths first? [See stable disk names by UUID](<leftover-box-by-uuid>). Need labels and UUIDs printed? [Read disk labels and UUIDs](<leftover-box-blkid>). Need the disk-name list? [See disks and USB sticks](<leftover-box-lsblk>). Need which folders are already attached? [See which folders are already attached](<leftover-box-findmnt>). Need room left on a path? [See if the computer still has room](<leftover-box-disk-space>). Stick visible and ready for a second copy? [A backup of the folder](<first-backup>). Need how big the main disk already is? [See how big the disk already is](<leftover-box-disk>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). awk, sed, and install stay deferred this cycle.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `lsblk`, `findmnt`, `blkid`, by-uuid, disk-space, or total disk size as tonight's job if you only came for the stable `/dev/disk/by-id` names. Those notes already exist.
  * Skip `mount`/`umount` as the lesson, and skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, format, and rewriting fstab.
  * Skip buying a NAS because a by-id name looks unfamiliar.
  * Skip `awk`/`sed`/install as new pages this cycle, `screen`, `tmux`, and port 22 forwarding.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: ls(1)](<https://manpages.debian.org/bookworm/coreutils/ls.1.en.html>). [Ubuntu: ls(1)](<https://manpages.ubuntu.com/manpages/noble/en/man1/ls.1.html>). Device naming under `/dev/disk/` (including `by-id` and `by-path`) is standard Linux (udev). Official pages only. For filesystem UUID paths, see [see stable disk names by UUID](<leftover-box-by-uuid>). For printed labels and UUIDs, see [read disk labels and UUIDs](<leftover-box-blkid>). For the disk-name list, see [see disks and USB sticks](<leftover-box-lsblk>). For the mount map, see [see which folders are already attached](<leftover-box-findmnt>). For free room, see [see if the computer still has room](<leftover-box-disk-space>). For a second copy once a USB path is live, see [a backup of the folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See disks and USB sticksAfter SSH works (and before you blame a missing USB backup), list disks and USB sticks with lsblk so you see names like sda and sdb without opening a disk app.](<leftover-box-lsblk>) [See which folders are already attachedAfter you can list disks with lsblk (and before you blame a missing USB backup), use findmnt to see which folders are already attached (mounted) so you know what is live as / or a USB path.](<leftover-box-findmnt>) [Read disk labels and UUIDsAfter you can list disks with lsblk and see which folders are attached with findmnt, use blkid to read labels, UUIDs, and filesystem types on disk slices so you can tell which stick or slice is which.](<leftover-box-blkid>) [See stable disk names by UUIDAfter blkid shows labels and UUIDs, use ls on /dev/disk/by-uuid (and optional by-label) so you see the fixed paths Linux already made - names that don't move when sdb becomes sdc.](<leftover-box-by-uuid>) [Peek at disk details with udevadmAfter by-id shows hardware-style fixed names, use udevadm info (look-only) on a disk path so you see the properties udev already knows - without mounting or rewriting anything.](<leftover-box-udevadm>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the disk already is.](<leftover-box-disk>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [A backup of the folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee stable disk names by UUID](<leftover-box-by-uuid>) [NextPeek at disk details with udevadm](<leftover-box-udevadm>)

---

*Labthrift Markdown mirror. HTML version linked above.*
