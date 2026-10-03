# Peek at disk details with udevadm

Source: https://labthrift.com/guides/leftover-box-udevadm
Markdown: https://labthrift.com/md/guides/leftover-box-udevadm.md

*Notes › / › File storage › / › Peek at disk details with udevadm*

[Notes](<./>) / [File storage](<./#first-nas>) / Peek at disk details with udevadm

Written 2 Sep 2026. This is a how-to, not a product card.

# Peek at disk details with udevadm

After [by-id](<leftover-box-by-id>) shows hardware-style fixed names, use a look-only `udevadm info` on a disk path so you see the properties udev already knows - without mounting, formatting, or rewriting anything.

Linux keeps a small database of what each disk and stick looks like to the system. `udevadm` is the tool that can print that info. Tonight you only read. You don't trigger rules, settle devices, rewrite disks, or change fstab.

## Skip until SSH works

If you cannot log in from the couch yet, stop. That is [SSH from the couch](<first-ssh>). Disk details don't help a login that fails.

If you only need the list of disks and USB sticks, that is [see disks and USB sticks](<leftover-box-lsblk>) (`lsblk`). If you only need which folders are already attached, that is [see which folders are already attached](<leftover-box-findmnt>) (`findmnt`). If you only need labels and UUIDs printed as text, that is [read disk labels and UUIDs](<leftover-box-blkid>) (`blkid`). If you only need filesystem UUID paths, that is [see stable disk names by UUID](<leftover-box-by-uuid>). If you only need hardware-style fixed names, that is [see stable disk names by hardware id](<leftover-box-by-id>). If you only need room left on a path, that is [see if the computer still has room](<leftover-box-disk-space>) (`df`).

## What this is

**udev** is the part of Linux that notices when you plug in a disk or stick and sets up the short names under `/dev` (and the fixed folders under `/dev/disk/by-uuid` and `/dev/disk/by-id`). `udevadm info` prints what udev already knows about one device - look only.

Here is the one jargon split for tonight: `lsblk` and `blkid` show a friendly table or a short label/UUID line. `udevadm info` shows a longer property list (model, serial, bus, links). Same computer, deeper peek. Still no mount, format, or wipe.

## Practice: peek at one disk

SSH in from the couch. Pick a name you already trust from `lsblk` or from [by-id](<leftover-box-by-id>). Whole-disk examples often look like `/dev/sda` or `/dev/nvme0n1`. Then ask:

`udevadm info /dev/sda`

Swap `/dev/sda` for the name on the computer. You should see a block of lines - often starting with `P:` / `N:` / `E:` style fields - naming the device path, and many `E:` property lines (model, serial, filesystem hints when Linux knows them). In plain English: udev is showing the scrapbook it keeps for that disk.

Optional: use a stable by-id path instead of today’s letter (same look, fixed name):

`udevadm info /dev/disk/by-id/ata-YOURDISK`

Use a real name from `ls /dev/disk/by-id` on the computer. Don't invent one.

Optional: print only the property lines (a bit quieter):

`udevadm info -q property /dev/sda`

Home-safe look only. Don't format, wipe, remount, or edit fstab tonight.

## Optional: after you plug in a USB for backup

Plug the stick into the computer. Run `lsblk` so you know today’s letter, then run `udevadm info` on that `/dev/…` name (or on the `usb-…` by-id path). You should see USB-ish properties and a serial. Compare with [blkid](<leftover-box-blkid>) if you want the filesystem UUID next. If you need the mount map, that is [see which folders are already attached](<leftover-box-findmnt>). The backup job, once a path is live, is [a backup of the folder](<first-backup>).

## Useful extras, still a look

Skip `udevadm trigger`, `udevadm settle`, `udevadm control`, and rewriting udev rules as the lesson. Tonight you read of what udev already knows.

Skip `mount` and `umount` as the job. Skip rewriting disks, `dd`, `shred`, interactive `fdisk`, `parted`, format, or rewriting fstab. Those are not this note. A look-only partition table print is [fdisk-list](<leftover-box-fdisk-list>) (`fdisk -l`).

Skip buying a NAS because a property line looks unfamiliar. Free room is [disk-space](<leftover-box-disk-space>). Disk names without tags are [lsblk](<leftover-box-lsblk>). Mount maps are [findmnt](<leftover-box-findmnt>). Printed labels and UUIDs are [blkid](<leftover-box-blkid>). Filesystem UUID paths are [by-uuid](<leftover-box-by-uuid>). Hardware-style fixed names are [by-id](<leftover-box-by-id>).

Skip `screen`, `tmux`, and port 22 forwarding. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

Skip `awk`, `sed`, and install as new pages this cycle.

## What this is not

This is not `lsblk`. That lists disks and USB sticks by name: [see disks and USB sticks](<leftover-box-lsblk>). It is not `findmnt`. That shows which folders are already attached: [see which folders are already attached](<leftover-box-findmnt>). It is not `blkid`. That prints LABEL, UUID, and TYPE as text: [read disk labels and UUIDs](<leftover-box-blkid>). It is not by-uuid. That lists filesystem UUID paths under `/dev/disk/by-uuid`: [see stable disk names by UUID](<leftover-box-by-uuid>). It is not by-id. That lists hardware-style names under `/dev/disk/by-id`: [see stable disk names by hardware id](<leftover-box-by-id>). It is not disk-space (`df`). That shows how full a mounted path is: [see if the computer still has room](<leftover-box-disk-space>). It is not `disk`, which focuses on how big the main disk already is: [see how big the disk already is](<leftover-box-disk>). It is not USB-disk, a shorter “did the stick show up?” check: [see if the USB backup disk showed up](<leftover-box-usb-disk>). It is not the backup copy itself: [a backup of the folder](<first-backup>).

## What next

Want the partition table printout next? [Peek at partition tables with fdisk](<leftover-box-fdisk-list>) (`fdisk -l` look only). Need hardware-style fixed names first? [See stable disk names by hardware id](<leftover-box-by-id>). Need filesystem UUID paths? [See stable disk names by UUID](<leftover-box-by-uuid>). Need labels and UUIDs printed? [Read disk labels and UUIDs](<leftover-box-blkid>). Need the disk-name list? [See disks and USB sticks](<leftover-box-lsblk>). Need which folders are already attached? [See which folders are already attached](<leftover-box-findmnt>). Need room left on a path? [See if the computer still has room](<leftover-box-disk-space>). Stick visible and ready for a second copy? [A backup of the folder](<first-backup>). Need how big the main disk already is? [See how big the disk already is](<leftover-box-disk>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). awk, sed, and install stay deferred this cycle.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `lsblk`, `findmnt`, `blkid`, by-uuid, by-id, disk-space, or total disk size as tonight's job if you only came for the look-only `udevadm info` peek. Those notes already exist.
  * Skip `udevadm trigger` / `settle` / `control` and rewriting udev rules as the lesson.
  * Skip `mount`/`umount` as the lesson, and skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, format, and rewriting fstab.
  * Skip buying a NAS because a property line looks unfamiliar.
  * Skip `awk`/`sed`/install as new pages this cycle, `screen`, `tmux`, and port 22 forwarding.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: udevadm(8)](<https://manpages.debian.org/bookworm/udev/udevadm.8.en.html>). [Ubuntu: udevadm(8)](<https://manpages.ubuntu.com/manpages/noble/en/man8/udevadm.8.html>). Official pages only. For hardware-style fixed names, see [see stable disk names by hardware id](<leftover-box-by-id>). For filesystem UUID paths, see [see stable disk names by UUID](<leftover-box-by-uuid>). For printed labels and UUIDs, see [read disk labels and UUIDs](<leftover-box-blkid>). For the disk-name list, see [see disks and USB sticks](<leftover-box-lsblk>). For the mount map, see [see which folders are already attached](<leftover-box-findmnt>). For free room, see [see if the computer still has room](<leftover-box-disk-space>). For a second copy once a USB path is live, see [a backup of the folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See disks and USB sticksAfter SSH works (and before you blame a missing USB backup), list disks and USB sticks with lsblk so you see names like sda and sdb without opening a disk app.](<leftover-box-lsblk>) [See which folders are already attachedAfter you can list disks with lsblk (and before you blame a missing USB backup), use findmnt to see which folders are already attached (mounted) so you know what is live as / or a USB path.](<leftover-box-findmnt>) [Read disk labels and UUIDsAfter you can list disks with lsblk and see which folders are attached with findmnt, use blkid to read labels, UUIDs, and filesystem types on disk slices so you can tell which stick or slice is which.](<leftover-box-blkid>) [See stable disk names by UUIDAfter blkid shows labels and UUIDs, use ls on /dev/disk/by-uuid (and optional by-label) so you see the fixed paths Linux already made - names that don't move when sdb becomes sdc.](<leftover-box-by-uuid>) [See stable disk names by hardware idAfter by-uuid shows filesystem UUID paths, use ls on /dev/disk/by-id (and optional by-path) so you see hardware-style fixed names - ata-…, usb-…, nvme-… - that don't move when sdb becomes sdc.](<leftover-box-by-id>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the disk already is.](<leftover-box-disk>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [A backup of the folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee stable disk names by hardware id](<leftover-box-by-id>) [NextPeek at partition tables with fdisk](<leftover-box-fdisk-list>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
