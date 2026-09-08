# Peek at partition layout with parted

Source: https://labthrift.com/guides/leftover-box-parted-list
Markdown: https://labthrift.com/md/guides/leftover-box-parted-list.md

*Notes › / › File storage › / › Peek at partition layout with parted*

[Notes](<./>) / [File storage](<./#first-nas>) / Peek at partition layout with parted

Written 2 Sep 2026. This is a how-to, not a product card.

# Peek at partition layout with parted

After [fdisk -l](<leftover-box-fdisk-list>) shows the partition table, a look-only `parted -l` printout shows sizes and filesystem hints. Nothing is created, resized, or rewritten.

**parted** is another Linux tool that can list or edit how a disk is sliced. Tonight you only list on the computer. You don't open the interactive prompt, make a new slice, resize one, or wipe a disk.

## Skip until SSH works

If you cannot log in from the couch yet, stop. That is [SSH from the couch](<first-ssh>). Partition layout does not help a login that fails.

If you only need the friendly disk tree, that is [see disks and USB sticks](<leftover-box-lsblk>) (`lsblk`). If you only need the classic fdisk table, that is [peek at partition tables with fdisk](<leftover-box-fdisk-list>) (`fdisk -l`).

## What this is

**parted** can both list and edit partitions. The list switch is `-l` (the letter L). That is the only mode you use tonight.

`fdisk -l` prints a technical map with start and end sectors. `parted -l` prints a similar map in parted's own style. It often has human-readable sizes and a filesystem column when it can guess. Same computer, second look-only printout. Still no write, format, or wipe.

## Practice: list the layout (look only)

SSH in from the couch.

Then ask for the list:

`parted -l`

If you see permission denied, try once with admin rights (still look-only):

`sudo parted -l`

If you see command not found, install the usual package, then try again:

`sudo apt install parted`

Debian and Ubuntu Server often already have it. That install is not a reason to buy a disk app or a NAS.

You should see blocks of text, one per disk. A block names the device (often `/dev/sda` or `/dev/nvme0n1`), the disk size, the partition table type (often gpt or msdos), and a table of slices. Parted is reading the map that already lives on the disk. It is not drawing a new one.

Optional: limit the printout to one disk you already trust from `lsblk`:

`sudo parted /dev/sda print`

Swap `/dev/sda` for the name on your computer. Don't invent one. `print` here means show the layout, not send to a printer. Home-safe look only on the computer. Don't type interactive verbs like `mkpart`, `resizepart`, `rm`, or `mklabel`. Don't format, wipe, remount, or edit fstab tonight.

## Optional: after you plug in a USB for backup

Plug the stick into the computer.

Run `lsblk` so you know today's letter.

Then run `sudo parted -l` (or `sudo parted /dev/sdb print` on that whole-disk name, not a slice like `sdb1`).

You should see a small table for the stick. Compare with [fdisk -l](<leftover-box-fdisk-list>) if you want the classic sector-style map. The backup job, once a path is live, is [a backup of the house folder](<first-backup>).

## Useful extras, still a look

Skip interactive `parted` (no bare `parted /dev/…` prompt where you type commands). Skip `mkpart`, `resizepart`, `rm`, `mklabel`, and `rescue` as the lesson. Tonight: `-l` (or one-disk `print`) only.

Skip `cfdisk`, `sfdisk`, `gdisk`, `mount`, `umount`, `dd`, `shred`, format, and rewriting fstab. Those are not this note.

Skip buying a NAS because a gpt line or a filesystem hint looks unfamiliar. Free room is [see if the computer still has room](<leftover-box-disk-space>). For the kernel's plain list, see [peek at partitions via /proc/partitions](<leftover-box-proc-partitions>).

Skip `screen`, `tmux`, and port 22 forwarding. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

## What this is not

This is not `fdisk -l`. That is [peek at partition tables with fdisk](<leftover-box-fdisk-list>). It is not `lsblk`. That is [see disks and USB sticks](<leftover-box-lsblk>). It is not `/proc/partitions`. That is [peek at partitions via /proc/partitions](<leftover-box-proc-partitions>).

## What next

Need the kernel's plain partition list? [Peek at partitions via /proc/partitions](<leftover-box-proc-partitions>). Need the classic fdisk table first? [Peek at partition tables with fdisk](<leftover-box-fdisk-list>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `fdisk -l`, `lsblk`, or total disk size as tonight's job if you only came for the look-only `parted -l` peek. Those notes already exist.
  * Skip interactive `parted` and any write verbs (`mkpart`, `resizepart`, `rm`, `mklabel`). List (or one-disk `print`) only.
  * Skip `cfdisk`, `sfdisk`, `gdisk`, `mount`, `umount`, `dd`, `shred`, format, and rewriting fstab.
  * Skip buying a NAS because a gpt or msdos line looks unfamiliar.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: parted(8)](<https://manpages.debian.org/bookworm/parted/parted.8.en.html>). [Ubuntu: parted(8)](<https://manpages.ubuntu.com/manpages/noble/en/man8/parted.8.html>). Official pages only. For the classic fdisk table, see [peek at partition tables with fdisk](<leftover-box-fdisk-list>). For udev properties, see [peek at disk details with udevadm](<leftover-box-udevadm>). For printed labels and UUIDs, see [read disk labels and UUIDs](<leftover-box-blkid>). For the disk-name list, see [see disks and USB sticks](<leftover-box-lsblk>). For the mount map, see [see which folders are already attached](<leftover-box-findmnt>). For free room, see [see if the computer still has room](<leftover-box-disk-space>). For a second copy once a USB path is live, see [a backup of the house folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Peek at partition tables with fdiskAfter udevadm shows disk properties, use fdisk -l (look-only) so you see the partition table layout - sizes and slice names - without creating, deleting, or rewriting anything.](<leftover-box-fdisk-list>) [See disks and USB sticksAfter SSH works (and before you blame a missing USB backup), list disks and USB sticks with lsblk so you see names like sda and sdb without opening a disk app.](<leftover-box-lsblk>) [See which folders are already attachedAfter you can list disks with lsblk (and before you blame a missing USB backup), use findmnt to see which folders are already attached (mounted) so you know what is live as / or a USB path.](<leftover-box-findmnt>) [Read disk labels and UUIDsAfter you can list disks with lsblk and see which folders are attached with findmnt, use blkid to read labels, UUIDs, and filesystem types on disk slices so you can tell which stick or slice is which.](<leftover-box-blkid>) [Peek at disk details with udevadmAfter by-id shows hardware-style fixed names, use udevadm info (look-only) on a disk path so you see the properties udev already knows - without mounting or rewriting anything.](<leftover-box-udevadm>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See how big the computer disk already isBefore you buy a tiny computer or a NAS, check how big the computer disk already is.](<leftover-box-disk>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPeek at partition tables with fdisk](<leftover-box-fdisk-list>) [NextPeek at partitions via /proc/partitions](<leftover-box-proc-partitions>)

---

*Labthrift Markdown mirror. HTML version linked above.*
