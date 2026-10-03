# Set or change the house-share password

Source: https://labthrift.com/guides/leftover-box-samba-password
Markdown: https://labthrift.com/md/guides/leftover-box-samba-password.md

*Notes › / › File storage › / › Set or change the house-share password*

[Notes](<./>) / [File storage](<./#first-nas>) / Set or change the house-share password

Written 27 Aug 2026. This is a how-to, not a product card.

# Set or change the house-share password

Finder and File Explorer ask for a share password that is not always the login. Samba keeps its own copy. Set it once. Change it when you forget.

Finder and File Explorer ask for a password when they open the house folder. That password belongs to Samba. Samba is the program that serves the house folder. `smbpasswd` sets the password that phones and laptops use for that folder. It is not always the computer SSH login.

## Skip until the share exists

If you never made the folder, stop. That is [a file share on the computer](<first-file-share>). Finish that first. This note is the password step, including when you forgot it later.

## What this is

You are setting the password phones and laptops type for the house folder. Not [the login password](<leftover-box-change-password>) that SSH asks for. Not [the Pi-hole admin password](<leftover-box-pihole-password>). Not the router. The share password can match the computer Linux login, or it can be different. Samba keeps its own copy.

## Set or change it from SSH

SSH from the couch the way you already do. Replace `youruser` with the computer username from install:

`sudo smbpasswd -a youruser`

The first time, this adds that user to Samba. If they are already there, the same command sets a new password. It asks twice. Nothing shows as you type. That is normal. Pick a password you chose. It can match the login, or it can be different.

## Confirm

Open the share from a laptop the way [a file share on the computer](<first-file-share>) taught, or from a phone in [open the house share from a phone](<open-share-from-phone>). Use the share password you just set, not the computer SSH login unless you chose the same one. If the folder itself is gone, check the service and the firewall in [when the house share disappeared, check the computer](<leftover-box-share-check>) before you buy a NAS.

## What next

When the folder fills, [see if the computer still has room](<leftover-box-disk-space>). If the share vanished, [when the house share disappeared, check the computer](<leftover-box-share-check>). Skip exposing SMB to the internet. Skip a NAS for a password problem.

## Skip

  * Skip if the share was never set up. That is [a file share on the computer](<first-file-share>).
  * Skip changing the router password here.
  * Skip opening SMB to the internet.
  * Skip a NAS.
  * Skip RAID.



## Sources

[Samba: smbpasswd](<https://www.samba.org/samba/docs/current/man-html/smbpasswd.8.html>). [Samba wiki: standalone server](<https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server>). [Ubuntu Server: Samba as a file server](<https://ubuntu.com/server/docs/how-to/samba/file-server/>). [Ubuntu: install and configure Samba](<https://ubuntu.com/tutorials/install-and-configure-samba>). Official pages only. For the share this belongs to, see [a file share on the computer](<first-file-share>). If the share vanished, see [when the house share disappeared, check the computer](<leftover-box-share-check>). For the login, see [change the login password](<leftover-box-change-password>). For the Pi-hole admin page, see [change the Pi-hole admin password](<leftover-box-pihole-password>).

## Also on this topic

[A file share on the computerA folder on the computer that the house can open from a laptop or a phone. You don't need a NAS for this.](<first-file-share>) [Open the house share from a phoneThe house folder is on the old PC. Open it from an iPhone or Android on house Wi-Fi. You don't need a NAS app for this.](<open-share-from-phone>) [When the house share disappeared, check the computerThe computer is awake, but Finder or File Explorer cannot see the folder. Check that Samba is still running before you buy a NAS.](<leftover-box-share-check>) [Change the login passwordOnce SSH from the couch works, set a password you chose. Do this before you leave the install password sitting around.](<leftover-box-change-password>) [Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [PreviousOpen the house share from a phone](<open-share-from-phone>) [NextWhen the house share disappeared, check the computer](<leftover-box-share-check>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
