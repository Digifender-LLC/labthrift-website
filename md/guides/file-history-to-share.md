# Back up a Windows PC to the house share with File History

Source: https://labthrift.com/guides/file-history-to-share
Markdown: https://labthrift.com/md/guides/file-history-to-share.md

*Notes › / › Getting started › / › Back up a Windows PC to the house share with File History*

[Notes](<./>) / [Getting started](<./#start>) / Back up a Windows PC to the house share with File History

Written 4 Sep 2026. This is a how-to, not a product card.

# Back up a Windows PC to the house share with File History

Point Windows File History at a Samba folder on the old PC. Use a separate share from photos so one laptop does not fill the disk. You don't need a NAS for this.

Haven't made a share yet? Start with [a file share](<first-file-share>). Opening the photos folder from File Explorer first is safer: [open the house share from a laptop](<open-share-from-laptop>). Need the computer's address? [Find it on the house network](<find-the-leftover-box>). On a Mac instead? That is [back up a Mac to the house share with Time Machine](<time-machine-to-share>). This note is the Windows File History walk on a separate Samba share.

## Skip until the share works and the disk is big enough

If File Explorer cannot open a normal share yet, stop and fix that first. File History wants real free space — often tens to hundreds of gigabytes for one laptop's Documents, Desktop, and Pictures. If the old PC is a small SSD that already holds the OS, Pi-hole, and photos, skip this and use a USB disk for Windows backups instead. Don't dump File History into the same tiny photos share you use for day-to-day files.

## What this is

File History is the built-in Windows tool that copies your Libraries (Documents, Desktop, Pictures, Music, Videos) to another disk on a schedule. It still lives in Control Panel on Windows 10 and 11. You can point it at a network folder with a UNC path like `\\192.168.1.50\filehistory`. Samba on the old PC is just that network folder. You are not opening SMB to the internet.

## What you need

  * A Windows 10 or 11 PC on the house network (Wi-Fi is fine; plug a cable for the first long backup if you can)
  * SSH or a keyboard on the computer (Debian or Ubuntu Server)
  * Free disk room on the computer — check with [see if the computer still has room](<leftover-box-disk-space>)
  * The Samba username and share password from [set or change the house-share password](<leftover-box-samba-password>)
  * About twenty minutes for the setup, then leave the first backup running



## 1\. Make a separate folder

Keep File History off the photos folder. Example path:

`sudo mkdir -p /srv/filehistory`

`sudo chown youruser:youruser /srv/filehistory`

Swap `youruser` for the Linux login Samba already uses. Prefer a USB disk or a second internal drive mounted at that path when the system disk is small. See [see if the USB backup disk showed up](<leftover-box-usb-disk>) if you are parking this on a stick or USB drive for now.

## 2\. Add a File History share in smb.conf

You already need Samba for the house folder. Open the Samba config:

`sudo nano /etc/samba/smb.conf`

Leave your existing `[photos]` block alone. At the bottom, add a second share. Swap the user for yours. Indentation with spaces is fine in this file.
    
    
    [filehistory]
       path = /srv/filehistory
       valid users = youruser
       read only = no
       browseable = yes
       create mask = 0660
       directory mask = 0770
    

File History does not need the Apple fruit modules. A normal writable share is enough. Test the file before you restart:

`testparm -s`

Fix any typo it prints. Then restart Samba:

`sudo systemctl restart smbd`

If the share password was never set for this user:

`sudo smbpasswd -a youruser`

## 3\. Confirm File Explorer can open it

On the Windows PC, open File Explorer. Click the path bar and type:

`\\192.168.1.50\filehistory`

Swap the number for the computer's address. Sign in with the Samba username and share password. Check Remember my credentials. Drop a tiny text file in, then delete it. If that fails, fix the share first: [open the house share from a laptop](<open-share-from-laptop>).

## 4\. Point File History at the share

Open Control Panel (search Start for Control Panel). Go to System and Security → File History. On some builds the label is "Save backup copies of your files with File History."

Click Select drive on the left. Click Add network location. Browse to `\\192.168.1.50\filehistory` or type that UNC path. Select the folder. Click OK / Select folder.

Click Turn on. The first pass copies Libraries. Later passes only copy what changed. Leave the PC awake on house Wi-Fi or ethernet for that first long run.

Optional: Advanced settings lets you change how often it saves (hourly is fine) and how long it keeps versions. Exclude folders you do not care about if the share is tight on space.

## 5\. Check that it is writing

In File History, you should see a recent successful time after the first pass. On the computer:

`ls -la /srv/filehistory`

You should see a `FileHistory` folder (Windows creates that layout). Recheck free space: [see if the computer still has room](<leftover-box-disk-space>). Prefer a cable for the old PC while big backups run: [a cable beats Wi-Fi for the old PC](<leftover-box-ethernet>).

## If File History cannot see the disk

Confirm File Explorer can still open `\\…\filehistory` on the house network, not guest Wi-Fi. Use the IP address, not a hostname that sometimes fails to resolve. Save the Samba credentials in Credential Manager (Control Panel → Credential Manager → Windows Credentials) if Windows keeps asking and then failing. Run `testparm -s` again after Samba edits. Restart `smbd`. If a normal photos share also vanished, start with [when the house share disappeared, check the computer](<leftover-box-share-check>).

File History only watches Libraries by default. To include another folder, add it to a Library in File Explorer, or accept that random folders outside Libraries are not in this backup.

## What this is not

This is not a reason to buy a Synology, a mesh kit, or cloud backup on day one. It is not an offsite backup. A second copy of the house folder on USB or another PC is still [a backup of the house folder](<first-backup>) / [copy to another old computer](<backup-to-another-pc>). It is not a full system image (that is Backup and Restore / wbadmin, a different tool). It is not forwarding SMB to the internet. macOS Time Machine is a different walk — that page is Mac only: [back up a Mac to the house share with Time Machine](<time-machine-to-share>).

## What next

Leave the first backup finish. Keep using the photos share for day-to-day files: [open the house share from a laptop](<open-share-from-laptop>). Watch disk room: [see if the computer still has room](<leftover-box-disk-space>). When you want a second copy of the house folder itself, that is still [a backup of the house folder](<first-backup>). A dedicated file box is later: [a first file box (NAS)](<first-nas>).

## Skip

  * Skip this if you don't have a Windows PC.
  * Skip this if the computer disk is already tight.
  * Skip stuffing File History into the photos share.
  * Skip buying a NAS for a first Windows file backup.
  * Skip exposing SMB to the internet.
  * Skip treating File History as your only copy of the house share.



## Sources

[Microsoft: backup and restore in Windows](<https://support.microsoft.com/windows/backup-and-restore-in-windows-2cacb626-5684-bef6-0ba2-a198239ecec4>) (File History still lives under Control Panel). [Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). Official pages only. Menu labels move by Windows build. For the plain share this builds on, see [a file share](<first-file-share>). For File Explorer connect, see [open the house share from a laptop](<open-share-from-laptop>). For Mac, see [Time Machine to the house share](<time-machine-to-share>).

## Also on this topic

[A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a laptopThe house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.](<open-share-from-laptop>) [Back up a Mac to the house share with Time MachinePoint Time Machine at a Samba folder on the old PC. Separate share from photos. Cap the size. You don't need a Time Capsule or a NAS for this.](<time-machine-to-share>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Put the house folder on a USB diskMove the house share onto a USB disk that stays plugged into the old PC so photos don't fill the system drive. You don't need a NAS for this.](<house-folder-on-usb>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [Copy the house folder to another old computerA second copy of the house folder, over the house network to another old PC. Not only a USB stick. You don't need a NAS for this.](<backup-to-another-pc>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [A first file box (NAS) for one personA quiet box for photos and backups. Two drives if you want sleep.](<first-nas>) [PreviousBack up a Mac to the house share with Time Machine](<time-machine-to-share>) [NextA backup of the house folder](<first-backup>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
