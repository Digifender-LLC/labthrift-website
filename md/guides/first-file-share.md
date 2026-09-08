# A file share

Source: https://labthrift.com/guides/first-file-share
Markdown: https://labthrift.com/md/guides/first-file-share.md

*Notes › / › Getting started › / › A file share*

[Notes](<./>) / [Getting started](<./#start>) / A file share

[Getting started](<./#start>) · **7 of 9**

Written 24 Aug 2026. This is a how-to, not a product card.

# A file share

A folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.

A file share is a folder on this computer that phones and laptops can open like a USB drive on the network. Pi-hole can wait a week if you just put it on. This is the other small useful thing: a shared folder. Same computer. Same SSH from the couch.

## What this is

A program called Samba. Free software that speaks the language Windows, Mac, and phones already use for shared folders. You don't buy a Synology for a folder of photos. The computer already has a disk.

This assumes Debian or Ubuntu Server, the OS from [what OS to put on it](<what-os-to-pick>), installed as in [your first weekend](<first-weekend>). SSH in from the couch.

## Make a folder

Pick one place. `/srv/share` is fine, or a folder in your home. Keep it simple. One share, named something obvious like photos or house.

`sudo mkdir -p /srv/share`

## Install Samba

Samba is in the normal Debian and Ubuntu list. One command:

`sudo apt install samba`

Say yes. That is the whole install.

## Tell Samba about the folder

The settings live in `/etc/samba/smb.conf`. Open that file and add a small block at the bottom. Swap `youruser` for the login you created at install, and the path if you used a different folder.

`[photos]`

`path = /srv/share`

`browsable = yes`

`read only = no`

`valid users = youruser`

Then set a share password for that same user:

`sudo smbpasswd -a youruser`

This password is for the share. It can match the Linux login, or it can be different. Samba keeps its own copy. If you forgot it later, set it again in [set or change the house-share password](<leftover-box-samba-password>).

## Restart it

Samba only reads the file when you restart it.

`sudo systemctl restart smbd`

## Open it from a laptop or a phone

Use the address from the first weekend, the same number you SSH to.

On Windows, open File Explorer and type `\\lab-address\photos` in the path bar. On a Mac, Finder → Go → Connect to Server, then `smb://lab-address/photos`. The longer laptop walk is [open the house share from a laptop](<open-share-from-laptop>).

On a phone, the short path is [open the house share from a phone](<open-share-from-phone>), then [save phone photos to the house share](<phone-photos-to-share>). iPhone uses the Files app. Samsung uses My Files. A Pixel needs a different file app. Same address, same share password.

## If you cannot write

If you can see the folder but cannot drop a file in, the Linux folder owner is the usual culprit. Samba is using that same user, so that user has to own the folder. Run `sudo chown youruser:youruser /srv/share` and try again.

## If the share is invisible

Ubuntu may have a firewall called ufw. If the share does not show up, check it with `sudo ufw status`. If ufw is on, allow Samba with `sudo ufw allow Samba`. If you turned that firewall on deliberately, the full path is [turn on a simple firewall without locking yourself out](<leftover-box-ufw>), which has the Samba rule and the re-check together. Don't expose this to the internet. The share is for the house network only. If the share used to work and then vanished, that check is [when the house share disappeared, check the computer](<leftover-box-share-check>).

## What next

Leave it. Use the folder for a while. Open it from a laptop in [open the house share from a laptop](<open-share-from-laptop>), from a phone in [open the house share from a phone](<open-share-from-phone>), or from a Chromebook in [open the house share from a Chromebook](<open-share-from-chromebook>). If you forgot the share password, [set or change the house-share password](<leftover-box-samba-password>). If Finder, File Explorer, or the phone can't open it later, start with [when the house share won't open](<when-share-wont-open>). If Samba stopped on an awake computer, [when the house share disappeared, check the computer](<leftover-box-share-check>). After the house can open it, [see if the computer still has room](<leftover-box-disk-space>). If the system disk is small, park the share on a USB that stays plugged in: [put the house folder on a USB disk](<house-folder-on-usb>). On a Mac, Time Machine can use a separate Samba share: [back up a Mac to the house share with Time Machine](<time-machine-to-share>). When you want a second copy of the house folder, that is [a backup of the house folder](<first-backup>) (USB), or [copy to another old computer](<backup-to-another-pc>). Not a NAS. Not RAID.


Optional: track the share name and who can open it in [Lab plan](https://plan.labthrift.com) — username + passkey, no email. Skip if you just want to keep reading.

## Skip

  * Skip buying a NAS for a first folder. The disk already in the computer is enough.
  * Skip RAID.
  * Skip merging this with Pi-hole into a “homelab stack” on day one.
  * Skip exposing SMB to the internet.
  * Skip Synology or UGREEN until that disk is actually full.
  * Waiting a week after Pi-hole is fine. You can write this share now, or later. Both are the next step.



## Sources

[Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). [Ubuntu Server: Samba as a file server](<https://ubuntu.com/server/docs/how-to/samba/file-server/>). [Ubuntu: install and configure Samba](<https://ubuntu.com/tutorials/install-and-configure-samba>). Official pages only. For Pi-hole on this same computer, see [the first useful thing](<first-useful-service>). For the install, see [your first weekend](<first-weekend>). A dedicated file box is later: [a first file box (NAS)](<first-nas>).

## Also on this topic

[Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [Open the house share from a ChromebookThe house folder is on the old PC. Open it from a Chromebook Files app on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-chromebook>) [Save phone photos to the house shareCopy camera-roll photos from an iPhone or Android onto the house folder on the old PC. House Wi-Fi only. You don't need a NAS app or iCloud for this.](<phone-photos-to-share>) [Back up a Mac to the house share with Time MachinePoint Time Machine at a Samba folder on the old PC. Separate share from photos. Cap the size. You don't need a Time Capsule or a NAS for this.](<time-machine-to-share>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [When the house share won't openFinder, File Explorer, or the phone can't open the house folder. Check the computer is on, confirm the address, then match the error (path not found, login failed, can't write, disk full). You don't need a NAS.](<when-share-wont-open>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Put the house folder on a USB diskMove the house share onto a USB disk that stays plugged into the old PC so photos don't fill the system drive. You don't need a NAS for this.](<house-folder-on-usb>) [The first useful thingPut a house-wide ad block on that computer. The rest of the house keeps using the internet as usual. You don't need a Raspberry Pi.](<first-useful-service>) [Your first weekendInstall the OS, name it, and reach it from the couch.](<first-weekend>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousThe first useful thing](<first-useful-service>) [NextOpen the house share from a laptop](<open-share-from-laptop>)

---

*Labthrift Markdown mirror. HTML version linked above.*
