# Delete a file carefully

Source: https://labthrift.com/guides/leftover-box-rm
Markdown: https://labthrift.com/md/guides/leftover-box-rm.md

*Notes › / › Faster network › / › Delete a file carefully*

[Notes](<./>) / [Faster network](<./#switches>) / Delete a file carefully

Written 29 Aug 2026. This is a how-to, not a product card.

# Delete a file carefully

After SSH works, delete one file with `rm -i`. The computer asks before it goes. Skip `rm -rf`. You don't need a NAS for this.

[Rename or move a file](<leftover-box-mv>) keeps the bytes under a new name. Tonight the throwaway practice file can go away for real. `rm` is remove. One file, home folder, ask first. Useful after [copy a file without leaving the computer](<leftover-box-cp>) left a spare you no longer want. The computer does not need a trash can app, a desktop, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you want the file under a better name and still on disk, that is [rename or move a file](<leftover-box-mv>). If you want a second copy and the original to stay, that is [copy a file without leaving the computer](<leftover-box-cp>). If the file is still only on the laptop, that is [copy a file to the computer from your laptop](<leftover-box-scp>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`rm` deletes a file. You run it on the computer, after SSH. The name is gone. There is no Recycle Bin on a typical server. That is why tonight we type `rm -i`. The `-i` means ask. It does not rename. That is `mv`. It does not leave a spare. That is `cp`. It does not talk to the laptop. That is `scp`. One path, same computer, file gone.

## Make a throwaway, then delete it

SSH in. Make a practice file in home if you don't already have one:

`echo 'delete me' > ~/delete-me.txt`

See that it is there:

`ls ~/delete-me.txt`

Then ask before delete:

`rm -i ~/delete-me.txt`

The computer should ask something like remove regular file. Type `y` and Enter if that is the file you meant. Type `n` if it is not. Swap the name for yours. Practice in home. Skip anything under `/` or `/etc`.

## See that it is gone

List home:

`ls ~`

You don't want `delete-me.txt` any more. Optional exact check:

`ls ~/delete-me.txt`

You want “No such file or directory.” That is success. The computer removed the file. It did not hide it in a trash folder.

## Optional: one empty folder

Empty folders are a different tool. If you made a practice folder with [make a folder](<leftover-box-mkdir>) and it is empty:

`rmdir ~/notes-practice`

`rmdir` only works when the folder has nothing inside. If it complains the directory is not empty, list it with [see what's in a folder](<leftover-box-ls>), move or delete the files first, then try again. Skip `rm -rf`. That flag can wipe a whole tree with no useful undo, and it is not tonight’s job.

## What this is not

This is not a rename that keeps the bytes. That is [rename or move a file](<leftover-box-mv>). It is not a second copy. That is [copy a file without leaving the computer](<leftover-box-cp>). It is not a file from the laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not emptying the disk of old logs. That is [clear old logs when the disk is tight](<leftover-box-old-logs>). It is not a checked backup. That is [a backup of the folder](<first-backup>).

## What next

Need a spare before you delete? [Copy a file without leaving the computer](<leftover-box-cp>). Need the name to change instead? [Rename or move a file](<leftover-box-mv>). Need the names again? [See what's in a folder](<leftover-box-ls>). Need a folder for practice files? [Make a folder](<leftover-box-mkdir>). Need to read a file without opening the editor? [Read a file without opening the editor](<leftover-box-cat>). Need to change a line first? [Edit a file from the couch](<leftover-box-nano>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). Tired of retyping the same long line? [Reuse a command you already typed](<leftover-box-history>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `mv` if you want the file gone. That tool keeps the bytes under a new name.
  * Skip `rm -rf`, `rm -rf /`, and anything under `/etc` or SSH settings.
  * Skip buying a NAS, a “cloud drive,” or a trash-can app to delete one practice file.
  * Skip deleting the only copy of something you care about. Make a [copy](<leftover-box-cp>) or a [backup](<first-backup>) first.
  * Skip opening SSH to the internet so you can delete files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[GNU coreutils: rm invocation](<https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html>). [Debian: rm](<https://manpages.debian.org/bookworm/coreutils/rm.1.en.html>). [Ubuntu: rm](<https://manpages.ubuntu.com/manpages/noble/en/man1/rm.1.html>). [GNU coreutils: rmdir invocation](<https://www.gnu.org/software/coreutils/manual/html_node/rmdir-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a rename that keeps the file, see [rename or move a file](<leftover-box-mv>). For a spare that keeps the original, see [copy a file without leaving the computer](<leftover-box-cp>). For listing names, see [see what's in a folder](<leftover-box-ls>). For making a folder, see [make a folder](<leftover-box-mkdir>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Rename or move a fileAfter SSH works, rename or move a file with mv so the name matches the job. The old name is gone. You don't need a NAS for this.](<leftover-box-mv>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. A short name like lab makes the typing shorter. You don't need a NAS for this.](<leftover-box-scp>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Reuse a command you already typedAfter SSH works, flip back through commands with the Up arrow or history. You don't need a notebook for the same long line twice.](<leftover-box-history>) [See if the computer still has roomAfter the house folder is working, check that the computer is not filling up. Photos stop copying when the disk is full. You don't need a NAS for this look.](<leftover-box-disk-space>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousRename or move a file](<leftover-box-mv>) [NextRead a file without opening the editor](<leftover-box-cat>)

---

*Labthrift Markdown mirror. HTML version linked above.*
