# Peek at partition tables with fdisk

Source: https://labthrift.com/guides/leftover-box-fdisk-list
Markdown: https://labthrift.com/md/guides/leftover-box-fdisk-list.md

*Notes › / › File storage › / › Peek at partition tables with fdisk*

[Notes](<./>) / [File storage](<./#first-nas>) / Peek at partition tables with fdisk

Written 2 Sep 2026. This is a how-to, not a product card.

# Peek at partition tables with fdisk

After [udevadm](<leftover-box-udevadm>) shows disk properties, use a look-only `fdisk -l` so you see the partition table layout, sizes and slice names, without creating, deleting, or rewriting anything.

A partition table is the map of how a disk is sliced into named pieces. `fdisk -l` prints that map as text. Tonight you only read. You don't enter the interactive editor, write a new table, format a slice, or wipe a disk.

## Skip until SSH works

If you cannot log in from the couch yet, stop. That is [SSH from the couch](<first-ssh>). Partition tables don't help a login that fails.

If you only need the list of disks and USB sticks, that is [see disks and USB sticks on the computer](<leftover-box-lsblk>) (`lsblk`). If you only need which folders are already attached, that is [see which folders are already attached](<leftover-box-findmnt>) (`findmnt`). If you only need labels and UUIDs printed as text, that is [read disk labels and UUIDs](<leftover-box-blkid>) (`blkid`). If you only need filesystem UUID paths, that is [see stable disk names by UUID](<leftover-box-by-uuid>). If you only need hardware-style fixed names, that is [see stable disk names by hardware id](<leftover-box-by-id>). If you only need udev's property scrapbook, that is [peek at disk details with udevadm](<leftover-box-udevadm>). If you only need room left on a path, that is [see if the computer still has room](<leftover-box-disk-space>) (`df`).

## What this is

**fdisk** is an old Linux tool that can both _list_ and _edit_ partition tables. The list switch is `-l` (the letter L). That is the only mode you use tonight.

Here is the one jargon split for tonight: `lsblk` shows a friendly tree of disks and slices. `fdisk -l` shows the same idea in a more technical printout: disk size, partition table type (often GPT or DOS/MBR), and each slice's start/end/size. Same computer, table-style peek. Still no write, format, or wipe.

## Practice: list the tables (look only)

SSH in from the couch. Then ask for the list:

`fdisk -l`

If you see permission denied, try once with admin rights (still look-only):

`sudo fdisk -l`

You should see blocks of text, one per disk, naming the device (often `/dev/sda` or `/dev/nvme0n1`), the disk size, the partition table type, and a table of slices with names like `/dev/sda1`. In plain English: fdisk is reading the map that already lives on the disk, not drawing a new one.

Optional: limit the printout to one disk you already trust from `lsblk`:

`sudo fdisk -l /dev/sda`

Swap `/dev/sda` for the name on your box. Don't invent one. Home-safe look only. Don't type interactive letters like `n`, `d`, or `w`. Don't format, wipe, remount, or edit fstab tonight.

## Optional: after you plug in a USB for backup

Plug the stick into the computer. Run `lsblk` so you know today's letter, then run `sudo fdisk -l` on that whole-disk name (for example `/dev/sdb`, not a slice like `sdb1`). You should see a small table for the stick. Compare with [blkid](<leftover-box-blkid>) if you want LABEL/UUID next, or with [udevadm](<leftover-box-udevadm>) if you want model/serial. If you need the mount map, that is [see which folders are already attached](<leftover-box-findmnt>). The backup job, once a path is live, is [a backup of the house folder](<first-backup>).

## Useful extras, still a look

Skip interactive `fdisk` (no bare `fdisk /dev/…` menu). Skip `n` / `d` / `w` / `o` / `g` as the lesson. Tonight: `-l` only.

Look-only `parted -l` is its own note: [peek at partition layout with parted](<leftover-box-parted-list>). Skip interactive parted write verbs, `cfdisk`, `sfdisk`, `gdisk`, `mount`, `umount`, rewriting disks, `dd`, `shred`, format, or rewriting fstab. Those are not this note.

Skip buying a NAS because a GPT line looks unfamiliar. Free room is [see if the computer still has room](<leftover-box-disk-space>). Disk names without tags are [see disks and USB sticks on the computer](<leftover-box-lsblk>). Mount maps are [see which folders are already attached](<leftover-box-findmnt>). Printed labels and UUIDs are [read disk labels and UUIDs](<leftover-box-blkid>). Filesystem UUID paths are [see stable disk names by UUID](<leftover-box-by-uuid>). Hardware-style fixed names are [see stable disk names by hardware id](<leftover-box-by-id>). Udev properties are [peek at disk details with udevadm](<leftover-box-udevadm>).

Skip `screen`, `tmux`, and port 22 forwarding. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

Skip `awk`, `sed`, and install as new pages this cycle. For a second layout printout, see [peek at partition layout with parted](<leftover-box-parted-list>).

## What this is not

This is not `lsblk`. That lists disks and USB sticks by name: [see disks and USB sticks on the computer](<leftover-box-lsblk>). It is not `findmnt`. That shows which folders are already attached: [see which folders are already attached](<leftover-box-findmnt>). It is not `blkid`. That prints LABEL, UUID, and TYPE as text: [read disk labels and UUIDs](<leftover-box-blkid>). It is not by-uuid. That lists filesystem UUID paths under `/dev/disk/by-uuid`: [see stable disk names by UUID](<leftover-box-by-uuid>). It is not by-id. That lists hardware-style names under `/dev/disk/by-id`: [see stable disk names by hardware id](<leftover-box-by-id>). It is not `udevadm`. That prints udev's property list: [peek at disk details with udevadm](<leftover-box-udevadm>). It is not `parted -l`. That is a second layout printout: [peek at partition layout with parted](<leftover-box-parted-list>). It is not disk-space (`df`). That shows how full a mounted path is: [see if the computer still has room](<leftover-box-disk-space>). It is not `disk`, which focuses on how big the main disk already is: [see how big the computer disk already is](<leftover-box-disk>). It is not USB-disk, a shorter "did the stick show up?" check: [see if the USB backup disk showed up](<leftover-box-usb-disk>). It is not the backup copy itself: [a backup of the house folder](<first-backup>).

## What next

Need udev properties first? [Peek at disk details with udevadm](<leftover-box-udevadm>). Need hardware-style fixed names? [See stable disk names by hardware id](<leftover-box-by-id>). Need filesystem UUID paths? [See stable disk names by UUID](<leftover-box-by-uuid>). Need labels and UUIDs printed? [Read disk labels and UUIDs](<leftover-box-blkid>). Need the disk-name list? [See disks and USB sticks on the computer](<leftover-box-lsblk>). Need which folders are already attached? [See which folders are already attached](<leftover-box-findmnt>). Need room left on a path? [See if the computer still has room](<leftover-box-disk-space>). Stick visible and ready for a second copy? [A backup of the house folder](<first-backup>). Need a second look-only layout printout? [Peek at partition layout with parted](<leftover-box-parted-list>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `lsblk`, `findmnt`, `blkid`, by-uuid, by-id, udevadm, disk-space, or total disk size as tonight's job if you only came for the look-only `fdisk -l` peek. Those notes already exist.
  * Skip interactive `fdisk` and any write letters (`n`/`d`/`w`/…). List mode only.
  * Skip interactive `parted` write verbs here. Look-only `parted -l` is [peek at partition layout with parted](<leftover-box-parted-list>). Skip `cfdisk`/`sfdisk`/`gdisk` as the lesson, and skip `mount`/`umount`, rewriting disks, `dd`, `shred`, format, and rewriting fstab.
  * Skip buying a NAS because a GPT or DOS line looks unfamiliar.
  * Skip `awk`/`sed`/install as new pages this cycle, `screen`, `tmux`, and port 22 forwarding.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: fdisk(8)](<https://manpages.debian.org/bookworm/fdisk/fdisk.8.en.html>). [Ubuntu: fdisk(8)](<https://manpages.ubuntu.com/manpages/noble/en/man8/fdisk.8.html>). Official pages only. For udev properties, see [peek at disk details with udevadm](<leftover-box-udevadm>). For hardware-style fixed names, see [see stable disk names by hardware id](<leftover-box-by-id>). For filesystem UUID paths, see [see stable disk names by UUID](<leftover-box-by-uuid>). For printed labels and UUIDs, see [read disk labels and UUIDs](<leftover-box-blkid>). For the disk-name list, see [see disks and USB sticks on the computer](<leftover-box-lsblk>). For the mount map, see [see which folders are already attached](<leftover-box-findmnt>). For free room, see [see if the computer still has room](<leftover-box-disk-space>). For a second copy once a USB path is live, see [a backup of the house folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See disks and USB sticks on the computerAfter SSH works (and before you blame a missing USB backup), list disks and USB sticks with lsblk so you see names like sda and sdb without opening a disk app.](<leftover-box-lsblk>) [See which folders are already attachedAfter you can list disks with lsblk (and before you blame a missing USB backup), use findmnt to see which folders are already attached (mounted) so you know what is live as / or a USB path.](<leftover-box-findmnt>) [Read disk labels and UUIDsAfter you can list disks with lsblk and see which folders are attached with findmnt, use blkid to read labels, UUIDs, and filesystem types on disk slices so you can tell which stick or slice is which.](<leftover-box-blkid>) [See stable disk names by UUIDAfter blkid shows labels and UUIDs, use ls on /dev/disk/by-uuid (and optional by-label) so you see the fixed paths Linux already made. Names that don't move when sdb becomes sdc.](<leftover-box-by-uuid>) [See stable disk names by hardware idAfter by-uuid shows filesystem UUID paths, use ls on /dev/disk/by-id (and optional by-path) so you see hardware-style fixed names (ata-..., usb-..., nvme-...) that don't move when sdb becomes sdc.](<leftover-box-by-id>) [Peek at disk details with udevadmAfter by-id shows hardware-style fixed names, use udevadm info (look-only) on a disk path so you see the properties udev already knows, without mounting or rewriting anything.](<leftover-box-udevadm>) [Peek at partition layout with partedAfter fdisk -l shows the partition table, use parted -l (look-only) so you see a second layout printout, sizes and filesystem hints, without creating, resizing, or rewriting anything.](<leftover-box-parted-list>) [See if the computer still has roomBefore you buy a bigger drive, check free space with df.](<leftover-box-disk-space>) [See how big the computer disk already isBefore you buy a tiny computer or a NAS, check how big the computer disk already is.](<leftover-box-disk>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPeek at disk details with udevadm](<leftover-box-udevadm>) [NextPeek at partition layout with parted](<leftover-box-parted-list>)

---

*Labthrift Markdown mirror. HTML version linked above.*
