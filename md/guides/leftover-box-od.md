# Peek at file bytes

Source: https://labthrift.com/guides/leftover-box-od
Markdown: https://labthrift.com/md/guides/leftover-box-od.md

*Notes › / › Faster network › / › Peek at file bytes*

[Notes](<./>) / [Faster network](<./#switches>) / Peek at file bytes

Written 1 Sep 2026. This is a how-to, not a product card.

# Peek at file bytes

After `sync` (or after writing a practice file), peek with `od` so you see the characters and bytes that are actually on disk. You don't need extra software beyond coreutils.

[Finish disk writes](<leftover-box-sync>) flushed pending writes. Tonight you take a small look at what landed: ask it to show the bytes inside a practice file. `od` historically meant octal dump. Tonight you use it as a safe peek at characters (and, if you want, hex bytes) so you trust a copy before you unplug. That is not printing the file as plain text. That is [read a file without opening the editor](<leftover-box-cat>). That is not asking what kind of file this is. That is [see what kind of file this is](<leftover-box-file>). That is not a fingerprint. That is [check a file fingerprint](<leftover-box-sha256sum>). That is not comparing two files. That is [see whether two files match byte for byte](<leftover-box-cmp>). You are still only practicing in home on the computer. It does not need hex editors, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need to write practice words, that is [print words exactly](<leftover-box-printf>) or [put a short line into a file](<leftover-box-echo>). If you only need to flush writes, that is [finish disk writes](<leftover-box-sync>). If you only need the text as text, that is [read a file without opening the editor](<leftover-box-cat>). If you only need a fingerprint, that is [check a file fingerprint](<leftover-box-sha256sum>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`od` dumps a file's bytes in a readable way. The name is old: octal dump. Tonight you mostly want the character view (`-c`), which shows letters and makes newlines and other control characters obvious. Optional hex (`-tx1`) shows each byte as two hex digits. It does not rewrite the file. It does not invent a checksum. It does not decide the file kind. Those jobs already have their own notes.

## Practice od in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Optional: park one short practice line, then flush (see [printf](<leftover-box-printf>) and [sync](<leftover-box-sync>)):

`printf 'hello\n' > ~/od-a.txt`

`sync`

Peek at characters (tonight's job, easiest first-timer view):

`od -c ~/od-a.txt`

You want something like the letters `h e l l o`, then a visible newline marker (often `\n`), then the prompt back. That is enough for tonight: you saw what is actually in the file.

Optional hex bytes (same tiny file):

`od -An -tx1 ~/od-a.txt`

Or characters and hex together:

`od -An -tx1c ~/od-a.txt`

`-An` means skip the address column. `-tx1` means one-byte hex. Don't make hex required. Character view is enough for tonight.

Debian and Ubuntu usually already have `od` (coreutils). Don't make apt the lesson. If it is somehow missing:

`sudo apt install coreutils`

Then stop. That install is not a reason to buy a hex editor.

When you are done practicing:

`rm -i ~/od-a.txt`

Ask first. Say yes only if the name matches. That careful delete is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home-safe

Skip huge dumps as tonight's job. Tonight: one tiny home file, not a giant dump of disks, logs, or `/etc`.

Skip piping `od` into `rm`. Od peeks. Rm deletes. Don't mix those jobs.

Skip `hexdump` and `xxd` as tonight's job. No new pages for those this cycle. Tonight's tool is `od`.

Skip `dd`, `shred`, and dropping caches. Tonight: a quiet peek, not a wipe or a cache lesson.

Skip file, sha256sum, cmp, and cat as tonight's job. Those pages already exist. Link them when you need them.

Skip `screen`, `tmux`, port 22 forwarding, apt as the lesson, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

Skip a separate df how-to, awk, sed, and install as new pages this cycle. Free space is already [see if the computer still has room](<leftover-box-disk-space>). Emptying or shrinking a practice file without deleting the name is [empty or shrink a practice file](<leftover-box-truncate>). Printable text without a full dump is [see printable text with strings](<leftover-box-strings>).

## What this is not

This is not `sync`. That is [finish disk writes](<leftover-box-sync>). It is not `printf` or `echo`. Those write words: [print words exactly](<leftover-box-printf>), [put a short line into a file](<leftover-box-echo>). It is not `cat`. That prints text as text: [read a file without opening the editor](<leftover-box-cat>). It is not `file`. That guesses the kind of file: [see what kind of file this is](<leftover-box-file>). It is not `sha256sum`. That fingerprints one file: [check a file fingerprint](<leftover-box-sha256sum>). It is not `cmp`. That compares two files byte for byte: [see whether two files match byte for byte](<leftover-box-cmp>). It is not opening SSH to the internet so you can dump files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need to empty or shrink a practice file without deleting the name? [Empty or shrink a practice file](<leftover-box-truncate>). Need printable text without a full dump? [See printable text with strings](<leftover-box-strings>). Need a flush first? [Finish disk writes](<leftover-box-sync>). Need exact practice words? [Print words exactly](<leftover-box-printf>). Need a fingerprint instead of a dump? [Check a file fingerprint](<leftover-box-sha256sum>). Need the throwaway gone? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `sync`, `printf`, or `echo` as tonight's job if you only came to peek. Those write/flush notes already exist.
  * Skip `cat`, `file`, `sha256sum`, and `cmp` as tonight's job. Link those pages instead.
  * Skip huge dumps, `od` into `rm`, `hexdump`/`xxd` as the job, `dd`/`shred`/drop_caches, files under `/etc`, `screen`, `tmux`, apt as the lesson, htop, Grafana, and a NAS.
  * Skip a separate df how-to, awk, sed, and install as new pages this cycle. Truncate is [empty or shrink a practice file](<leftover-box-truncate>). Strings is [see printable text with strings](<leftover-box-strings>).
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: od(1)](<https://manpages.debian.org/bookworm/coreutils/od.1.en.html>). [Ubuntu: od(1)](<https://manpages.ubuntu.com/manpages/noble/man1/od.1.html>). [GNU coreutils: od](<https://www.gnu.org/software/coreutils/manual/html_node/od-invocation.html>). Official pages only. For the flush, see [finish disk writes](<leftover-box-sync>). For exact words, see [print words exactly](<leftover-box-printf>). For a short dump as text, see [read a file without opening the editor](<leftover-box-cat>). For a careful delete, see [delete a file carefully](<leftover-box-rm>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Finish disk writesAfter a practice write, finish disk writes with sync so the file is really on disk before you unplug or power off. You don't need extra software for this.](<leftover-box-sync>) [Print words exactlyPrint words exactly with printf so a practice file gets the text you meant, without the extra newline echo always adds. You don't need extra software for this.](<leftover-box-printf>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Check a file fingerprintAfter SSH works, check a file with sha256sum so you know it still matches the fingerprint you expected. You don't need a download manager for this.](<leftover-box-sha256sum>) [See what kind of file this isAfter SSH works, ask what kind of file this is with file before you dump it. You don't need a file viewer for this.](<leftover-box-file>) [See whether two files match byte for byteAfter comm, compare two files byte for byte with cmp so you know if they match. You don't need extra software for this.](<leftover-box-cmp>) [Empty or shrink a practice fileAfter od, use truncate so you empty or shrink the file without deleting its name. You don't need extra software beyond coreutils.](<leftover-box-truncate>) [See printable text with stringsAfter od, use strings so you see readable text without dumping every byte. You don't need extra software beyond binutils.](<leftover-box-strings>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousFinish disk writes](<leftover-box-sync>) [NextEmpty or shrink a practice file](<leftover-box-truncate>)

---

*Labthrift Markdown mirror. HTML version linked above.*
