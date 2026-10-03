# Copy a file to the computer from your laptop

Source: https://labthrift.com/guides/leftover-box-scp
Markdown: https://labthrift.com/md/guides/leftover-box-scp.md

*Notes › / › Faster network › / › Copy a file to the computer from your laptop*

[Notes](<./>) / [Faster network](<./#switches>) / Copy a file to the computer from your laptop

Written 28 Aug 2026. This is a how-to, not a product card.

# Copy a file to the computer from your laptop

After SSH works, use `scp` to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.

[SSH from the couch](<first-ssh>) lets you type commands on the computer. Sometimes you just want one file over there: a config, a photo, a small script. `scp` is secure copy. It rides the same SSH login you already have. The computer does not need Samba, a shared folder, or a USB stick for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. A short name is nicer: [give the computer a short name on your laptop](<leftover-box-ssh-config>). Key login is nicer than typing the password every time: [log in with a key](<leftover-box-ssh-keys>). If the key has a passphrase and you are tired of typing it, [unlock your key once per laptop session](<leftover-box-ssh-agent>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`scp` copies a file over SSH. Same user, same address, same key or password as a normal login. You run it on the laptop. The computer receives the file in a folder you name. Pulling a file back the other way is the same idea with the paths swapped. This is not the weekly USB backup. That is [a backup of the folder](<first-backup>).

## Copy one file to the computer

On the laptop, in the folder that already has the file (Windows Terminal, PowerShell, Mac Terminal, or Linux):

`scp ./photo.jpg lab:~/`

That puts `photo.jpg` in your home folder on the computer. Swap the filename for yours. If you have no short name yet, use the long form from [SSH from the couch](<first-ssh>):

`scp ./photo.jpg you@that-address:~/`

It may ask for the password, or the key passphrase, the same way SSH does. When it finishes without an error, the file is there.

## Check it landed

Still on the laptop:

`ssh lab ls ~`

Or the long form:

`ssh you@that-address ls ~`

You want your filename in the list. Optional look at size and date:

`ssh lab ls -lh ~/photo.jpg`

## Copy one file back to the laptop

Paths swap. The side comes first:

`scp lab:~/notes.txt ./`

Or:

`scp you@that-address:~/notes.txt ./`

That drops `notes.txt` in the folder you are sitting in on the laptop. Useful when you edited something on the computer and want a local copy.

## Optional: a whole folder

Need a folder first? [Make a folder](<leftover-box-mkdir>), then point the side at it:

`scp ./photo.jpg lab:~/notes/`

Add `-r` for a folder and everything inside it:

`scp -r ./scripts lab:~/`

Keep folders small. A movie library or a photo dump belongs on a house share or a backup disk, not a one-shot `scp` of gigabytes. For a house folder other computers open, see [a folder the house can open](<first-file-share>). For a checked USB copy, see [a backup of the folder](<first-backup>).

## What next

If the key passphrase keeps asking on every copy, [unlock your key once per laptop session](<leftover-box-ssh-agent>). Need browse folders then copy one file? [Browse folders then copy one file](<leftover-box-sftp>). Need a spare of a file that is already there? [Copy a file without leaving the computer](<leftover-box-cp>). Need to change a file in place instead of copying it? [Edit a file from the couch](<leftover-box-nano>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip buying a NAS to move one config file.
  * Skip a USB stick for a single small file when SSH already works.
  * Skip opening SSH to the internet so a friend can `scp` in. That is [keep the computer on the house network](<leftover-box-house-network>).
  * Skip turning this into your whole backup plan. Use [a backup of the folder](<first-backup>) for that.



## Sources

[OpenSSH: scp](<https://man.openbsd.org/scp>). [Debian: scp](<https://manpages.debian.org/bookworm/openssh-client/scp.1.en.html>). [Ubuntu: scp](<https://manpages.ubuntu.com/manpages/noble/en/man1/scp.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For the short name, see [give the computer a short name on your laptop](<leftover-box-ssh-config>). For the key, see [log in with a key](<leftover-box-ssh-keys>). For the agent, see [unlock your key once per laptop session](<leftover-box-ssh-agent>). For a house share, see [a folder the house can open](<first-file-share>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Give the computer a short name on your laptopAfter SSH works, put a short name in your laptop SSH config so you type ssh lab instead of the long address. You don't need a new router.](<leftover-box-ssh-config>) [Log in with a key, not the password every timeAfter password SSH works for a while, put a key on your laptop so the computer trusts that laptop. Keep the password as a backup at first.](<leftover-box-ssh-keys>) [Unlock your key once per laptop sessionAfter the key has a passphrase, load it once with ssh-add so you are not typing that passphrase on every ssh lab. You don't need a YubiKey.](<leftover-box-ssh-agent>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Move into a folderAfter SSH works, change folders with cd. You don't need a file manager app for this.](<leftover-box-cd>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Browse folders then copy one fileAfter SSH works, browse folders with sftp so you can pick a file and copy it. You don't need FileZilla or a NAS for this.](<leftover-box-sftp>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [A folder the house can openShare one folder from the computer so phones and laptops can open it. Samba is the usual name for that job on Debian and Ubuntu.](<first-file-share>) [A backup of the folderCopy the house folder to a USB disk or a second the computer. One checked copy beats a fancy NAS you never plugged in.](<first-backup>) [PreviousUnlock your key once per laptop session](<leftover-box-ssh-agent>) [NextEdit a file from the couch](<leftover-box-nano>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
