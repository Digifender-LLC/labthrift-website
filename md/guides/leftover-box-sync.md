# Finish disk writes

Source: https://labthrift.com/guides/leftover-box-sync
Markdown: https://labthrift.com/md/guides/leftover-box-sync.md

*Notes › / › Faster network › / › Finish disk writes*

[Notes](<./>) / [Faster network](<./#switches>) / Finish disk writes

Written 1 Sep 2026. This is a how-to, not a product card.

# Finish disk writes

After `printf`, `sync` finishes pending disk writes so practice files and USB copies are really on disk before you unplug or power off. You don't need extra software for this.

[Print words exactly](<leftover-box-printf>) put exact words into a practice file. Tonight you do the last step before you unplug a USB stick or power the computer off. Flush what is still buffered. `sync` means flush those pending disk writes. Silence means the kernel finished what it had pending.

That is not seeing whether a USB disk showed up. That is [see if the USB backup disk showed up](<leftover-box-usb-disk>). That is not a full shutdown. That is [shut down without yanking the plug](<leftover-box-shutdown>). You are still only practicing. It does not need htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need to write practice words, that is [print words exactly](<leftover-box-printf>) or [put a short line into a file](<leftover-box-echo>). If you only need to see whether a USB stick appeared, that is [see if the USB backup disk showed up](<leftover-box-usb-disk>). Skip this whole note if you only want free disk space. That is [see if the computer still has room](<leftover-box-disk-space>).

## What this is

`sync` asks the computer to finish writing buffered data to disk. Linux often parks writes in memory for a moment so the disk is not hit on every keystroke. That buffer is normal. `sync` flushes it. Tonight: one quiet `sync` after a practice write.

Silence and the prompt back means the flush finished. It does not print a progress bar. It does not invent a USB mount. It does not power the computer off.

## Practice sync

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Optional: park one short practice line so you have something to flush:

`printf 'hello\n' > ~/sync-a.txt`

Then finish disk writes (tonight's job):

`sync`

You want silence, then the prompt back. That silence means the computer finished flushing what the kernel had pending. That is enough for tonight.

Optional peek without opening the editor:

`cat ~/sync-a.txt`

You should see that same short line. Don't make `cat` the lesson. When you are done practicing:

`rm -i ~/sync-a.txt`

Ask first. Say yes only if the name matches. That careful delete is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

Debian and Ubuntu usually already have `sync`. Don't make apt the lesson.

## Useful extras, still home-safe

Optional: run `sync` again. A second `sync` is harmless. Some people type it twice out of habit before they unplug a stick. You don't need twice. One quiet flush after the write is enough for tonight.

Skip using `sync` as a reason to yank a USB stick without checking the mount. Seeing whether the stick showed up is [see if the USB backup disk showed up](<leftover-box-usb-disk>). Confirming a backup copy is [check that the backup actually copied](<leftover-box-backup-check>).

Skip `dd` and `shred` as tonight's job. Tonight: a quiet flush after a tiny practice write, not a disk image or a wipe. Skip dropping caches. Skip piping `sync` into `rm`. Skip huge dumps of `/etc`, disks, or logs.

Skip `screen`, `tmux`, apt as the lesson, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `printf`. That is [print words exactly](<leftover-box-printf>). It is not `echo`. That is [put a short line into a file](<leftover-box-echo>). It is not seeing whether a USB disk showed up. That is [see if the USB backup disk showed up](<leftover-box-usb-disk>). It is not a full power-off. That is [shut down without yanking the plug](<leftover-box-shutdown>).

## What next

Need a peek at file bytes? [Peek at file bytes](<leftover-box-od>). Need to empty or shrink without deleting the name? [Empty or shrink a practice file](<leftover-box-truncate>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `printf` or `echo` as tonight's job if you only came to flush. Those write notes already exist.
  * Skip using `sync` as permission to yank a USB stick without checking the mount. That check is [see if the USB backup disk showed up](<leftover-box-usb-disk>).
  * Skip shutdown as tonight's job if you only need a flush. That is [shut down without yanking the plug](<leftover-box-shutdown>).
  * Skip `dd`, `shred`, dropping caches, and `sync` into `rm` as tonight's job.
  * Skip huge dumps, files under `/etc`, htop, Grafana, and a NAS.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: sync(1)](<https://manpages.debian.org/bookworm/coreutils/sync.1.en.html>). [Ubuntu: sync(1)](<https://manpages.ubuntu.com/manpages/noble/man1/sync.1.html>). Official pages only. For exact words, see [print words exactly](<leftover-box-printf>). For a short line, see [put a short line into a file](<leftover-box-echo>). For the USB look, see [see if the USB backup disk showed up](<leftover-box-usb-disk>). For a careful delete, see [delete a file carefully](<leftover-box-rm>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Print words exactlyAfter mktemp, print words exactly with printf so practice files (and mktemp drills) get text without extra line echo always adds. You don't need extra software for this.](<leftover-box-printf>) [Peek at file bytesAfter sync (or after writing a practice file), peek with od so you see the characters and bytes that are actually on disk. You don't need extra software beyond coreutils.](<leftover-box-od>) [Empty or shrink a practice fileAfter od (or after writing a practice file), use truncate so you empty or shrink the file without deleting its name. You don't need extra software beyond coreutils.](<leftover-box-truncate>) [See printable text with stringsAfter od (or after writing a practice file), use strings so you see readable text without dumping every byte. You don't need extra software beyond binutils.](<leftover-box-strings>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [See if the USB backup disk showed upBefore you trust the weekly copy, confirm the computer can see the USB disk.](<leftover-box-usb-disk>) [Check that the backup actually copiedAfter the copy finishes, look on the USB disk and confirm the files are there before you trust it. You don't need a NAS for this look.](<leftover-box-backup-check>) [Shut down without yanking the plugWhen you're done for the night, shut it down and let it finish writing files before it powers off. Don't yank the cord. Skip this if you only need a reboot after updates.](<leftover-box-shutdown>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPrint words exactly](<leftover-box-printf>) [NextPeek at file bytes](<leftover-box-od>)

---

*Labthrift Markdown mirror. HTML version linked above.*
