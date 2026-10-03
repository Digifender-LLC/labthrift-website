# Peek at partitions via /proc/partitions

Source: https://labthrift.com/guides/leftover-box-proc-partitions
Markdown: https://labthrift.com/md/guides/leftover-box-proc-partitions.md

*Notes › / › File storage › / › Peek at partitions via /proc/partitions*

[Notes](<./>) / [File storage](<./#first-nas>) / Peek at partitions via /proc/partitions

Written 2 Sep 2026. This is a how-to, not a product card.

# Peek at partitions via /proc/partitions

After a [parted -l](<leftover-box-parted-list>) layout printout, `/proc/partitions` is a look-only kernel list of names and sizes. Nothing is created, wiped, or mounted.

`/proc/partitions` is a text file the Linux kernel keeps in memory. It lists whole disks and slices the kernel already knows about. Tonight you only read that list on the computer. You don't format, wipe, or attach a folder.

## Skip until SSH works

If you cannot log in from the couch yet, stop. That is [SSH from the couch](<first-ssh>). A kernel partition list does not help a login that fails.

If you only need the friendly disk tree, that is [see disks and USB sticks](<leftover-box-lsblk>) (`lsblk`). If you only need which folders are already attached, that is [see which folders are already attached](<leftover-box-findmnt>) (`findmnt`).

## What this is

**/proc** is a special folder of live kernel facts. Files there are not ordinary documents on the disk. They are snapshots the kernel builds when you open them.

`parted -l` and `fdisk -l` print layout tools' views, often with table type and filesystem hints. `/proc/partitions` is the kernel's shorter list. It shows major and minor numbers, size in 1K blocks, and a short name like `sda` or `sda1`. Same computer, third look-only angle. Still no write, format, or wipe.

## Practice: read the kernel list (look only)

SSH in from the couch.

Then print the file:

`cat /proc/partitions`

The computer should show a short header, then lines with columns. Columns are often major, minor, blocks, and name. Whole disks and slices both appear. The kernel is telling you which block devices it already knows. It is not inviting you to rebuild them.

Optional: page through a long list:

`less /proc/partitions`

Press `q` to leave `less`.

Home-safe look only on the computer. Don't pipe this into a wipe tool. Don't run `wipefs`, `dd`, format, `mount`, or `umount` as tonight's job.

Optional: compare names with the friendly tree you already practiced:

`lsblk`

Names should line up with what you saw in `/proc/partitions`. If a USB stick is missing from both, reseat the stick. Then check [see if the USB backup disk showed up](<leftover-box-usb-disk>). Still no format tonight.

## Optional: after you plug in a USB for backup

Plug the stick into the computer.

Run `lsblk`.

Then run `cat /proc/partitions` again.

You should see a new short name for the stick. It is often `sdb` or `sdb1`, or similar. Compare with [parted -l](<leftover-box-parted-list>) if you want a layout-style map. The backup job, once a path is live, is [a backup of the house folder](<first-backup>).

## Useful extras, still a look

Skip editing anything under `/proc`. These files are read-only views. They are not a place to save a new partition map.

Skip `wipefs`, `smartctl`, interactive `parted`, `fdisk` without `-l`, `mount`, `umount`, `dd`, `shred`, format, and rewriting fstab. Those are not this note.

Skip buying a NAS because a computer number looks unfamiliar. Free room is [see if the computer still has room](<leftover-box-disk-space>).

Skip `screen`, `tmux`, and port 22 forwarding. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

## What this is not

This is not a `parted -l` layout printout. That is [peek at partition layout with parted](<leftover-box-parted-list>). It is not the classic `fdisk -l` table. That is [peek at partition tables with fdisk](<leftover-box-fdisk-list>). It is not the friendly disk tree. That is [see disks and USB sticks](<leftover-box-lsblk>).

## What next

Need parted's layout first? [Peek at partition layout with parted](<leftover-box-parted-list>). Need room left on a path? [See if the computer still has room](<leftover-box-disk-space>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `parted -l`, `fdisk -l`, `lsblk`, or `findmnt` as tonight's job if you only came for this look-only peek. Those notes already exist.
  * Skip writing under `/proc`. Read only.
  * Skip `wipefs`, `smartctl`, `mount`, `umount`, `dd`, `shred`, format, and rewriting fstab.
  * Skip buying a NAS because a blocks column looks unfamiliar.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: proc(5)](<https://manpages.debian.org/bookworm/manpages/proc.5.en.html>) (see partitions). [Linux kernel docs: The /proc Filesystem](<https://www.kernel.org/doc/html/latest/filesystems/proc.html>). Official pages only. For parted’s layout printout, see [peek at partition layout with parted](<leftover-box-parted-list>). For the classic fdisk table, see [peek at partition tables with fdisk](<leftover-box-fdisk-list>). For udev properties, see [peek at disk details with udevadm](<leftover-box-udevadm>). For printed labels and UUIDs, see [read disk labels and UUIDs](<leftover-box-blkid>). For the disk-name list, see [see disks and USB sticks](<leftover-box-lsblk>). For the mount map, see [see which folders are already attached](<leftover-box-findmnt>). For free room, see [see if the computer still has room](<leftover-box-disk-space>). For a second copy once a USB path is live, see [a backup of the house folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Peek at partition layout with partedAfter fdisk -l shows the partition table, a look-only parted -l printout shows sizes and filesystem hints. Nothing is created, resized, or rewritten.](<leftover-box-parted-list>) [Peek at partition tables with fdiskAfter udevadm shows disk properties, use fdisk -l (look-only) so you see the partition table layout, sizes and slice names, without creating, deleting, or rewriting anything.](<leftover-box-fdisk-list>) [See disks and USB sticksAfter SSH works (and before you blame a missing USB backup), list disks and USB sticks with lsblk so you see names like sda and sdb without opening a disk app.](<leftover-box-lsblk>) [See which folders are already attachedAfter you can list disks with lsblk (and before you blame a missing USB backup), use findmnt to see which folders are already attached (mounted) so you know what is live as / or a USB path.](<leftover-box-findmnt>) [Read disk labels and UUIDsAfter you can list disks with lsblk and see which folders are attached with findmnt, use blkid to read labels, UUIDs, and filesystem types on disk slices so you can tell which stick or slice is which.](<leftover-box-blkid>) [Peek at disk details with udevadmAfter by-id shows hardware-style fixed names, use udevadm info (look-only) on a disk path so you see the properties udev already knows, without mounting or rewriting anything.](<leftover-box-udevadm>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See how big the computer disk already isBefore you buy a tiny computer or a NAS, check how big the computer disk already is.](<leftover-box-disk>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another computer. You don't need a NAS for this.](<first-backup>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPeek at partition layout with parted](<leftover-box-parted-list>) [NextSee if the computer still has room](<leftover-box-disk-space>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
