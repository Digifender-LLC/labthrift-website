# When the house share disappeared, check the computer

Source: https://labthrift.com/guides/leftover-box-share-check
Markdown: https://labthrift.com/md/guides/leftover-box-share-check.md

*Notes › / › File storage › / › When the house share disappeared, check the computer*

[Notes](<./>) / [File storage](<./#first-nas>) / When the house share disappeared, check the computer

Written 26 Aug 2026. This is a how-to, not a product card.

# When the house share disappeared, check the computer

The computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.

The share is a folder the house opens over the network. Samba is the program that serves it. If Finder or File Explorer cannot see that folder, Samba usually stopped, or the firewall hid it. You don't need a NAS for this. Check the computer that already served it once.

## Skip until the computer is awake

If ping and SSH fail, fix that first in [is the computer still on?](<leftover-box-still-on>) This note assumes the computer answers SSH from the couch.

## Skip until a share worked once

If you never made the house folder, start with [a file share on the computer](<first-file-share>). This note is for the morning when Finder or File Explorer cannot see a folder that used to work.

## Is Samba still running?

SSH from the couch, then:

`systemctl is-active smbd`

You want active. Some computers also run `nmbd`, a helper that helps Windows find the share by name. If that service is there:

`systemctl is-active nmbd`

You want active. If you see the unit was not found, skip `nmbd`.

If `smbd` is not active, restart it:

`sudo systemctl restart smbd`

If `nmbd` exists, restart that too:

`sudo systemctl restart nmbd`

Then try the share again from the laptop, the way [a file share on the computer](<first-file-share>) taught, or from a phone in [open the house share from a phone](<open-share-from-phone>).

## Firewall can hide the share

If ufw is on, it can hide the share. Check:

`sudo ufw status`

If Status is active, allow Samba:

`sudo ufw allow Samba`

That is the same rule as [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). House network only. Don't forward SMB ports on the router.

## Disk full can look like a dead share

Photos stop copying when the disk is full. That can look like the share died. The quick look is [see if the computer still has room](<leftover-box-disk-space>).

## Wrong password is not a vanished share

If Finder or File Explorer asks for a password and the login does not work, the share is still there. Samba keeps its own copy. That is [set or change the house-share password](<leftover-box-samba-password>). This note is for when the folder itself disappeared.

## Still invisible?

Re-check the computer address and the share name from [a file share on the computer](<first-file-share>). On Windows that is `\\leftover-address\photos` in File Explorer. On a Mac that is `smb://leftover-address/photos` in Finder. If ping leftover fails but the number still works, [give the computer a name that sticks](<leftover-box-hostname>). Don't buy a NAS for this.

## What next

Leave it. Skip a NAS. Skip RAID. Skip exposing SMB to the internet. If a restart did not help, that is [when something broke, look at the log](<leftover-box-read-logs>). When you want a second copy, that is [a backup of the house folder](<first-backup>).

## Skip

  * Skip if the computer is off.
  * Skip if the share was never set up.
  * Skip a NAS.
  * Skip RAID.
  * Skip opening SMB to the internet.
  * Skip a second box for this check.



## Sources

[Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). [Ubuntu Server: Samba as a file server](<https://ubuntu.com/server/docs/how-to/samba/file-server/>). [Ubuntu: install and configure Samba](<https://ubuntu.com/tutorials/install-and-configure-samba>). Official pages only. For the awake check, see [is the computer still on?](<leftover-box-still-on>). For the share this looks at, see [a file share on the computer](<first-file-share>). For the firewall ports, see [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). For disk room, see [see if the computer still has room](<leftover-box-disk-space>).

## Also on this topic

[A file share on the computerA folder on the computer that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [Set or change the house-share passwordFinder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.](<leftover-box-samba-password>) [Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Is the computer still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [PreviousSet or change the house-share password](<leftover-box-samba-password>) [NextSee if the computer still has room](<leftover-box-disk-space>)

---

*Labthrift Markdown mirror. HTML version linked above.*
