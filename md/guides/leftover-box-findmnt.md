# See which folders are already attached

Source: https://labthrift.com/guides/leftover-box-findmnt
Markdown: https://labthrift.com/md/guides/leftover-box-findmnt.md

*Notes › / › File storage › / › See which folders are already attached*

[Notes](<./>) / [File storage](<./#first-nas>) / See which folders are already attached

Written 1 Sep 2026. This is a how-to, not a product card.

# See which folders are already attached

After you can list disks with `lsblk` (and before you blame a missing USB backup), use `findmnt` to see which folders are already attached (mounted) so you know what is live as `/` or a USB path.

A disk name from `lsblk` is not the same as a folder you can open. Mount means the computer made a disk slice show up as a folder path. Tonight you only want the map: which paths are already live. You don't need a disk app, a format step, or a shopping cart for this look.

## Skip until SSH works

If you cannot log in from the couch yet, stop. That is [SSH from the couch](<first-ssh>). Mount maps don't help a login that fails.

If you only need the list of disks and USB sticks, that is [see disks and USB sticks](<leftover-box-lsblk>) (`lsblk`). If you only need room left on a path, that is [see if the computer still has room](<leftover-box-disk-space>) (`df`). If you only need whether a USB stick showed up as a device name, that is [see if the USB backup disk showed up](<leftover-box-usb-disk>).

## What this is

`findmnt` lists mounted filesystems: folder paths already attached, plus where each one came from. In plain English: which folders are live right now. Mount means that attachment - a disk slice showing up as a path like `/` or `/media/…`. Tonight you take a look. `findmnt` does not mount, unmount, format, or wipe anything.

## Practice: see what is already attached

SSH in from the couch, then run:

`findmnt`

You should see a tree or table. In plain English:

  * `TARGET` \- the folder path that is live (often `/` for the main system).
  * `SOURCE` \- which disk slice feeds that path (a name like `/dev/sda1` or similar).
  * `FSTYPE` \- the filesystem flavor on that slice (`ext4`, `xfs`, `vfat`, and so on).
  * `OPTIONS` \- how it is attached (read-write, and other flags). Tonight, you mostly ignore the long option string.



Point at the row whose target is `/`. That is the live root of the system. A USB path, when it is attached, often shows under `/media/` or `/mnt/`. Home-safe look only. Don't unmount or remount anything tonight.

Optional: narrow to common disk flavors:

`findmnt -t ext4,xfs,btrfs,vfat,exfat,ntfs`

Same idea, fewer rows - useful when the full list feels noisy. Still a look.

Optional: ask about one path only:

`findmnt /`

That prints how `/` is attached. Still no change to the disk.

## Optional: after you plug in a USB for backup

Plug the stick into the computer. Run `lsblk` so you see the device name, then run `findmnt` again. If the stick is already attached, you will see a target path for it. If you only see the device in `lsblk` and no path in `findmnt`, the stick is plugged in but not showing as a folder yet - don't make mounting tonight's job. The backup job, once a path is live, is [a backup of the house folder](<first-backup>).

## Useful extras, still a look

Skip `mount` and `umount` as the job. Tonight: the map of what is already attached.

Skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, or format as the lesson. Those are not this note.

Skip buying a NAS because a path looks small. Free room is [see if the computer still has room](<leftover-box-disk-space>). Disk names without the mount map are [see disks and USB sticks](<leftover-box-lsblk>).

Skip `screen`, `tmux`, and port 22 forwarding. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>).

Skip `awk`, `sed`, and install as new pages this cycle.

## What this is not

This is not `lsblk`. That lists disks and USB sticks by name: [see disks and USB sticks](<leftover-box-lsblk>). It is not disk-space (`df`). That shows how full a mounted path is: [see if the computer still has room](<leftover-box-disk-space>). It is not `disk`, which focuses on how big the main disk already is: [see how big the disk already is](<leftover-box-disk>). It is not USB-disk, a shorter “did the stick show up?” check: [see if the USB backup disk showed up](<leftover-box-usb-disk>). It is not the backup copy itself: [a backup of the house folder](<first-backup>).

## What next

Need the disk-name list first? [See disks and USB sticks](<leftover-box-lsblk>). Need labels, UUIDs, and filesystem types on a slice? [Read disk labels and UUIDs](<leftover-box-blkid>). Need room left on a path? [See if the computer still has room](<leftover-box-disk-space>). Stick visible and ready for a second copy? [A backup of the house folder](<first-backup>). Need how big the main disk already is? [See how big the disk already is](<leftover-box-disk>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). awk, sed, and install stay deferred this cycle.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `lsblk`, disk-space, or total disk size as tonight's job if you only came for the mount map. Those notes already exist.
  * Skip `mount`/`umount` as the lesson, and skip rewriting disks, `dd`, `shred`, `fdisk`, `parted`, and format.
  * Skip buying a NAS because a path looks small.
  * Skip `awk`/`sed`/install as new pages this cycle, `screen`, `tmux`, and port 22 forwarding.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: findmnt(8)](<https://manpages.debian.org/bookworm/util-linux/findmnt.8.en.html>). [Ubuntu: findmnt(8)](<https://manpages.ubuntu.com/manpages/noble/en/man8/findmnt.8.html>). Part of util-linux. Official pages only. For the disk-name list, see [see disks and USB sticks](<leftover-box-lsblk>). For free room, see [see if the computer still has room](<leftover-box-disk-space>). For a second copy once a USB path is live, see [a backup of the house folder](<first-backup>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See disks and USB sticksAfter SSH works (and before you blame a missing USB backup), list disks and USB sticks with lsblk so you see names like sda and sdb without opening a disk app.](<leftover-box-lsblk>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See how big the computer disk already isBefore you buy a tiny computer or a NAS, check how big the computer disk already is.](<leftover-box-disk>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee disks and USB sticks](<leftover-box-lsblk>) [NextRead disk labels and UUIDs](<leftover-box-blkid>)

---

*Labthrift Markdown mirror. HTML version linked above.*
