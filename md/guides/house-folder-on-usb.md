# Put the house folder on a USB disk

Source: https://labthrift.com/guides/house-folder-on-usb
Markdown: https://labthrift.com/md/guides/house-folder-on-usb.md

*Notes › / › Getting started › / › Put the house folder on a USB disk*

[Notes](<./>) / [Getting started](<./#start>) / Put the house folder on a USB disk

Written 4 Sep 2026. This is a how-to, not a product card.

# Put the house folder on a USB disk

Move the house share onto a USB disk that stays plugged into the old PC so photos don't fill the system drive. You don't need a NAS for this.

Haven't made a share yet? Start with [a file share](<first-file-share>). Need to see whether the system disk is already tight? [See if the computer still has room](<leftover-box-disk-space>). This note is the move: format one dedicated USB disk, mount it, point Samba at it, leave the stick plugged in.

## Skip until the share works and you have a spare disk

If Finder or File Explorer cannot open the house folder yet, stop. That is [a file share](<first-file-share>). Skip this if the system disk still has plenty of room and you are happy there. You need a USB disk you can wipe — not the tiny installer stick, not the only backup copy of the house folder. A second copy of the house folder is still [a backup of the house folder](<first-backup>). This disk is for live photos, not that backup.

## What this is

The share from [a file share](<first-file-share>) usually lives on the same disk as the OS, often under `/srv/share`. Small OptiPlex SSDs fill up. This note parks that folder on a USB disk that stays in the computer. Samba keeps the same share name. Phones and laptops keep the same path. The system disk only holds the OS, Pi-hole, and a bit of room to breathe.

## What you need

  * SSH from the couch: [SSH from the couch](<first-ssh>)
  * A working house share (or you are about to make one)
  * A USB disk you accept wiping — 500 GB or bigger is fine for photos; a spinning USB drive is fine
  * About twenty minutes, then leave the disk plugged in



## 1\. See the USB disk

Plug the USB disk into the computer. Wait a few seconds. SSH in, then list disks:

`lsblk`

Find the new disk by size. Note the device name, often `sdb` or `sdc`. The first partition is often `sdb1`. If nothing new appears, that look is [see if the USB backup disk showed up](<leftover-box-usb-disk>). Don't guess. Wrong device names wipe the wrong disk.

## 2\. Wipe and format (only the USB you chose)

This erases that USB disk. Stop if you are not sure which name is the stick.

Example for `sdb` — swap the letter if yours is different:

`sudo wipefs -a /dev/sdb`

`sudo parted -s /dev/sdb mklabel gpt`

`sudo parted -s /dev/sdb mkpart primary ext4 1MiB 100%`

`sudo mkfs.ext4 -L house /dev/sdb1`

The label `house` is only a name so you can spot it later. Use another label if you want. Wait for `mkfs.ext4` to finish.

## 3\. Mount it at /srv/share

If you already have files in `/srv/share` on the system disk, move them aside first:

`sudo systemctl stop smbd`

`sudo mv /srv/share /srv/share-old`

Make the mount point and attach the USB partition:

`sudo mkdir -p /srv/share`

`sudo mount /dev/sdb1 /srv/share`

Copy old files onto the USB if you moved them aside:

`sudo rsync -aHAX --info=progress2 /srv/share-old/ /srv/share/`

Check free space on the mounted disk:

`df -h /srv/share`

You should see the USB size, not the tiny system SSD size.

## 4\. Make it mount after every reboot

Read the UUID so the path does not depend on `sdb` becoming `sdc` next week:

`sudo blkid /dev/sdb1`

Copy the `UUID="…"` value. Open fstab:

`sudo nano /etc/fstab`

Add one line at the bottom. Swap the UUID for yours:

`UUID=PASTE-UUID-HERE /srv/share ext4 defaults,nofail 0 2`

`nofail` lets the computer boot even if the USB is unplugged. Test without rebooting:

`sudo findmnt --verify --verbose`

`sudo umount /srv/share`

`sudo mount -a`

`df -h /srv/share`

If the size looks like the USB again, the fstab line is good. Longer looks at UUIDs and mounts: [read disk labels and UUIDs](<leftover-box-blkid>), [stable names by UUID](<leftover-box-by-uuid>), [see which folders are already attached](<leftover-box-findmnt>).

## 5\. Ownership and Samba

Give the share user the folder:

`sudo chown -R youruser:youruser /srv/share`

Swap `youruser` for the Linux login Samba already uses. If Samba still points at `/srv/share`, you do not need to edit `smb.conf`. Restart it:

`sudo systemctl start smbd`

`sudo systemctl restart smbd`

If you never set the share password, that is [set or change the house-share password](<leftover-box-samba-password>).

## 6\. Check from a laptop or phone

Open the same share as before. Drop a tiny text file in. Delete it. Laptop walk: [open the house share from a laptop](<open-share-from-laptop>). Phone walk: [open the house share from a phone](<open-share-from-phone>).

When you are sure the files live on the USB, you can remove the old copy on the system disk:

`sudo rm -rf /srv/share-old`

Only after a successful open and a successful `df -h /srv/share` that shows the USB size.

## If the share vanishes after a reboot

Check that the USB is still plugged in. Run `lsblk` and `df -h /srv/share`. If `/srv/share` is empty or shows the system disk size, the mount failed — fix fstab and `sudo mount -a`. If Samba itself stopped, that check is [when the house share disappeared, check the computer](<leftover-box-share-check>).

## What this is not

This is not a backup. Unplug the USB and the live share goes with it. Keep a second copy with [a backup of the house folder](<first-backup>) or [copy to another old computer](<backup-to-another-pc>). This is not a reason to buy a NAS on day one. It is not RAID. It is not a tiny installer stick left in the front port. Leave the disk plugged in.

## What next

Use the folder. Watch room with [see if the computer still has room](<leftover-box-disk-space>) (now it should report the USB). Prefer a cable for the computer while big copies run: [a cable beats Wi-Fi for the old PC](<leftover-box-ethernet>). When you want a second copy of the house folder, that is still [a backup of the house folder](<first-backup>). A dedicated file box is later: [a first file box (NAS)](<first-nas>).

## Skip

  * Skip formatting a disk you are not sure about.
  * Skip using the installer USB as the house folder.
  * Skip unplugging the disk while files are copying.
  * Skip treating this USB as your only copy.
  * Skip buying a NAS just because the system SSD was small.
  * Skip exposing SMB to the internet.



## Sources

[Debian: lsblk](<https://manpages.debian.org/bookworm/util-linux/lsblk.8.en.html>). [Debian: blkid](<https://manpages.debian.org/bookworm/util-linux/blkid.8.en.html>). [Debian: fstab](<https://manpages.debian.org/bookworm/mount/fstab.5.en.html>). [Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). Official pages only. For the share this moves, see [a file share](<first-file-share>). For disk room, see [see if the computer still has room](<leftover-box-disk-space>). For a second copy, see [a backup of the house folder](<first-backup>).

## Also on this topic

[A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [Save phone photos to the house shareCopy camera-roll photos from an iPhone or Android onto the house folder on the old PC. House Wi-Fi only. You don't need a NAS app or iCloud for this.](<phone-photos-to-share>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [Back up a Windows PC to the house share with File HistoryPoint Windows File History at a Samba folder on the old PC. Separate share from photos. You don't need a NAS for this.](<file-history-to-share>) [A first file box (NAS) for one personA quiet box for photos and backups. Two drives if you want sleep.](<first-nas>) [PreviousSee if the computer still has room](<leftover-box-disk-space>) [NextA backup of the house folder](<first-backup>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
