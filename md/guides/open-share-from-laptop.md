# Open the house share from a laptop

Source: https://labthrift.com/guides/open-share-from-laptop
Markdown: https://labthrift.com/md/guides/open-share-from-laptop.md

*Notes › / › Getting started › / › Open the house share from a laptop*

[Notes](<./>) / [Getting started](<./#start>) / Open the house share from a laptop

Written 4 Sep 2026. This is a how-to, not a product card.

# Open the house share from a laptop

The house folder is on the old PC. Open it from Windows File Explorer or Mac Finder on the house network. You don't need a NAS for this.

Haven't made the house folder yet? Start with [a file share](<first-file-share>). Need the computer's address first? [Find it on the house network](<find-the-leftover-box>). Opening from a phone instead? That is [open the house share from a phone](<open-share-from-phone>). This note is the Windows and Mac walk: File Explorer on Windows, Finder on a Mac. Opening from Ubuntu or Fedora Files? That is [open the house share from a Linux laptop](<open-share-from-linux>).

## Skip until the folder exists

If you never made the share, stop. That is [a file share](<first-file-share>). This note assumes Samba is already serving a folder, often named photos, on the computer. The laptop has to be on the same house network. Cellular hotspot will not reach it. Don't forward SMB on the router.

## What this is

SMB is the language Windows and Mac already use for shared folders. You type the computer's address, the share name, and the share password. That password is the one Samba keeps, not always the SSH login. If you forgot it, set it again in [set or change the house-share password](<leftover-box-samba-password>).

## What you need

The computer's address, the same number you SSH to. Swap the example for yours.

Windows path bar:

`\\192.168.1.50\photos`

Mac Connect to Server:

`smb://192.168.1.50/photos`

If you don't know the number, [find it on the house network](<find-the-leftover-box>). If ping fails, start with [is the computer still on?](<leftover-box-still-on>) before you blame File Explorer.

## Windows (File Explorer)

Open File Explorer. Click the path bar at the top so the text highlights. Type the address with backslashes, like `\\192.168.1.50\photos`. Press Enter.

Windows asks for a username and password. Use the Samba username (usually the Linux login on the computer) and the share password. Check Remember my credentials if you want. Click OK.

The folder opens like any other drive. Copy one file in. Copy one out. That is the whole check.

To keep it handy: right-click the folder in the left tree, or open This PC, then Map network drive. Pick a letter, paste the same `\\192.168.1.50\photos` path, and check Reconnect at sign-in. Skip mapping if you only need it once.

If Windows says it cannot find the network path, stay on house Wi-Fi or ethernet. Recheck the number and the share name. Skip Guest. The share uses a username and password.

## Mac (Finder)

Open Finder. Menu Go → Connect to Server, or press Command-K. Type `smb://192.168.1.50/photos` or just `smb://192.168.1.50` if you want to pick the share from a list. Click Connect.

Pick Registered User. Type the Samba username and the share password. Check Remember this password in my keychain if you want. Click Connect.

The share shows under Locations in the Finder sidebar. Open it. Copy a file in. Copy one out.

Next time, that server sits in Recent Servers under Connect to Server. Stay on the house network. Skip Guest.

## If the laptop cannot see it

Confirm the laptop and the computer are on the same house network, not a guest Wi-Fi that isolates devices. Recheck the address and the share name. If a phone cannot see the folder either, start with symptom triage: [when the house share won't open](<when-share-wont-open>). If Samba stopped, or the firewall hid it: [when the house share disappeared, check the computer](<leftover-box-share-check>). If the login fails, that is [the share password](<leftover-box-samba-password>), not a vanished folder.

If you can see the folder but cannot drop a file in, the Linux folder owner is the usual culprit. Samba is using that same user, so that user has to own the folder:

`sudo chown youruser:youruser /srv/share`

Swap `youruser` and the path if you used a different folder. Try the laptop again.

Windows sometimes caches a bad password. Open Credential Manager, find the computer's address under Windows Credentials, remove it, and try again with the share password.

## What this is not

This is not a reason to buy a NAS, Synology Drive, or a VPN. It is not a reason to open SMB to the internet. The share stays on the house network. A phone can open the same folder if you need it on the couch without the laptop.

## What next

Leave it. Use the folder for a while. Open it from a phone in [open the house share from a phone](<open-share-from-phone>). On a Chromebook: [open the house share from a Chromebook](<open-share-from-chromebook>). On a Linux desktop: [open the house share from a Linux laptop](<open-share-from-linux>). On a Mac, overnight backups can land on a separate share: [back up a Mac to the house share with Time Machine](<time-machine-to-share>). On Windows, that is [File History to the house share](<file-history-to-share>). If you forgot the share password, [set or change the house-share password](<leftover-box-samba-password>). If it won't open later, start with [when the house share won't open](<when-share-wont-open>). If Samba stopped on an awake computer, [when the house share disappeared, check the computer](<leftover-box-share-check>). After the house can open it, [see if the computer still has room](<leftover-box-disk-space>). When you want a second copy of the house folder, that is [a backup of the house folder](<first-backup>).

## Skip

  * Skip a NAS or Synology app for a first folder.
  * Skip exposing SMB to the internet.
  * Skip a VPN so you can reach it from a coffee shop.
  * Skip third-party "network drive" apps that stuff ads.
  * Skip RAID.
  * Skip this if a phone already opens the folder and you never use a laptop for files.



## Sources

[Microsoft: map a network drive](<https://support.microsoft.com/windows/map-a-network-drive-in-windows-60c43704-9f29-b538-2dd4-92f39bf059de>). [Apple: connect to shared computers and servers](<https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac>). [Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). Official pages only. For the share this opens, see [a file share](<first-file-share>). For the address, see [find it on the house network](<find-the-leftover-box>). For the share password, see [set or change the house-share password](<leftover-box-samba-password>). For phones, see [open the house share from a phone](<open-share-from-phone>).

## Also on this topic

[A file shareA folder on the old PC that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [Open the house share from a ChromebookThe house folder is on the old PC. Open it from a Chromebook Files app on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-chromebook>) [Open the house share from a Linux laptopThe house folder is on the old PC. Open it from Ubuntu or Fedora Files (or KDE Dolphin) on the house network. You don't need a NAS for this.](<open-share-from-linux>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [When the house share won't openFinder, File Explorer, or the phone can't open the house folder. Check the computer is on, confirm the address, then match the error (path not found, login failed, can't write, disk full). You don't need a NAS.](<when-share-wont-open>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [Back up a Mac to the house share with Time MachinePoint Time Machine at a Samba folder on the old PC. Separate share from photos. Cap the size. You don't need a Time Capsule or a NAS for this.](<time-machine-to-share>) [Back up a Windows PC to the house share with File HistoryPoint Windows File History at a Samba folder on the old PC. Separate share from photos. You don't need a NAS for this.](<file-history-to-share>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [PreviousA file share](<first-file-share>) [NextOpen the house share from a phone](<open-share-from-phone>)

---

*Labthrift Markdown mirror. HTML version linked above.*
