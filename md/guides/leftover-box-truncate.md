# Empty or shrink a practice file

Source: https://labthrift.com/guides/leftover-box-truncate
Markdown: https://labthrift.com/md/guides/leftover-box-truncate.md

*Notes › / › Faster network › / › Empty or shrink a practice file*

[Notes](<./>) / [Faster network](<./#switches>) / Empty or shrink a practice file

Written 1 Sep 2026. This is a how-to, not a product card.

# Empty or shrink a practice file

After `od` (or after writing a practice file), use `truncate` so you empty or shrink the file without deleting its name. You don't need extra software beyond coreutils.

[Finish disk writes](<leftover-box-sync>) flushed pending writes. [Peek at file bytes](<leftover-box-od>) showed what landed. Tonight you change a file's size on purpose: keep the same home path, but empty or shrink the file. `truncate` sets length. It does not remove the name. Removing the name is [delete a file carefully](<leftover-box-rm>). That is not a wipe with shred. That is not copying disks with dd. You are still only practicing in home on the computer. It does not need htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need to write practice words, that is [print words exactly](<leftover-box-printf>) or [put a short line into a file](<leftover-box-echo>). If you only need to flush writes, that is [finish disk writes](<leftover-box-sync>). If you only need a peek at bytes, that is [peek at file bytes](<leftover-box-od>). If you only need the throwaway gone, that is [delete a file carefully](<leftover-box-rm>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`truncate` sets a file's length in bytes. `-s 0` empties the file and leaves the name. `-s N` sets the exact size to N bytes (shrink keeps the start of the file; grow can pad with empty space, sometimes called a hole). It does not delete the path. It is not `rm -i`. Rm removes the name. Truncate changes size.

## Practice truncate in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Park one short practice line (see [printf](<leftover-box-printf>) or [echo](<leftover-box-echo>)):

`printf 'hello\n' > ~/trunc-a.txt`

Optional flush (see [sync](<leftover-box-sync>)):

`sync`

Note the size before you change it:

`ls -l ~/trunc-a.txt`

You want a small non-zero size (hello plus a newline is typically 6 bytes).

Optional peek (see [od](<leftover-box-od>)):

`od -c ~/trunc-a.txt`

Empty the file, keep the name (tonight's job):

`truncate -s 0 ~/trunc-a.txt`

Check again:

`ls -l ~/trunc-a.txt`

You want size 0. The name `~/trunc-a.txt` is still there. That is the whole point of tonight.

Optional shrink after rewrite: put the line back, then keep only the first three bytes:

`printf 'hello\n' > ~/trunc-a.txt`

`truncate -s 3 ~/trunc-a.txt`

`od -c ~/trunc-a.txt`

You want something like the letters `h e l` and then the prompt back. The rest is gone, the name remains.

Optional grow (lightly. Don't make sparse files the lesson):

`truncate -s 10 ~/trunc-a.txt`

`ls -l ~/trunc-a.txt`

Size can show 10 even if the middle is empty space on disk. You only need two: empty with `-s 0`, or shrink with a small N. Skip sparse deep-dives.

Debian and Ubuntu usually already have `truncate` (coreutils). Don't make apt the lesson. If it is somehow missing:

`sudo apt install coreutils`

Then stop. That install is not a reason to buy disk tools.

When you are done practicing:

`rm -i ~/trunc-a.txt`

Ask first. Say yes only if the name matches. That careful delete is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

## Useful extras, still home-safe

Skip `truncate` on `/etc`, whole disks, USB device nodes, or anything outside home. Tonight: one tiny home practice file.

Skip `truncate` as a wipe. Emptying a practice file is not shred and not dd. Those are different (and scarier) jobs.

Skip huge files as tonight's job. Tonight: a tiny home file, not logs, images, or disk images.

Skip piping `truncate` into `rm`. Truncate changes size. Rm deletes. Don't mix those jobs.

Skip `awk`, `sed`, and install as new pages this cycle. Free space is already [see if the computer still has room](<leftover-box-disk-space>) (that is the df look. Don't invent a separate df how-to).

Skip `hexdump` and `xxd` as tonight's job. Peeking stays on [od](<leftover-box-od>).

Skip `screen`, `tmux`, port 22 forwarding, apt as the lesson, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `sync`. That is [finish disk writes](<leftover-box-sync>). It is not `od`. That peeks at bytes: [peek at file bytes](<leftover-box-od>). It is not `strings`. That shows printable text without a full dump: [see printable text with strings](<leftover-box-strings>). It is not `printf` or `echo`. Those write words: [print words exactly](<leftover-box-printf>), [put a short line into a file](<leftover-box-echo>). It is not `rm`. That removes the name: [delete a file carefully](<leftover-box-rm>). It is not `cat`. That prints text as text: [read a file without opening the editor](<leftover-box-cat>). It is not `cmp`. That compares two files: [see whether two files match byte for byte](<leftover-box-cmp>). It is not `sha256sum`. That fingerprints one file: [check a file fingerprint](<leftover-box-sha256sum>). It is not free disk space. That is [see if the computer still has room](<leftover-box-disk-space>). It is not opening SSH to the internet so you can shrink files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need a peek first? [Peek at file bytes](<leftover-box-od>). Need printable text without a full dump? [See printable text with strings](<leftover-box-strings>). Need a flush first? [Finish disk writes](<leftover-box-sync>). Need exact practice words? [Print words exactly](<leftover-box-printf>). Need the throwaway gone (name and all)? [Delete a file carefully](<leftover-box-rm>). Need free space? [See if the computer still has room](<leftover-box-disk-space>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `sync`, `od`, `printf`, or `echo` as tonight's job if you only came to change size. Those notes already exist.
  * Skip `truncate` on `/etc`, disks, USB devices, or anything outside home.
  * Skip `truncate` as a wipe (not shred/dd), huge files as the job, and piping `truncate` into `rm`.
  * Skip `awk`/`sed`/install as new pages this cycle, `hexdump`/`xxd` as the job, `screen`, `tmux`, apt as the lesson, htop, Grafana, and a NAS.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: truncate(1)](<https://manpages.debian.org/bookworm/coreutils/truncate.1.en.html>). [Ubuntu: truncate(1)](<https://manpages.ubuntu.com/manpages/noble/man1/truncate.1.html>). [GNU coreutils: truncate](<https://www.gnu.org/software/coreutils/manual/html_node/truncate-invocation.html>). Official pages only. For the peek, see [peek at file bytes](<leftover-box-od>). For the flush, see [finish disk writes](<leftover-box-sync>). For exact words, see [print words exactly](<leftover-box-printf>). For a careful delete, see [delete a file carefully](<leftover-box-rm>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Finish disk writesAfter a practice write, finish disk writes with sync so the file is really on disk before you unplug or power off. You don't need extra software for this.](<leftover-box-sync>) [Peek at file bytesAfter writing a practice file, peek with od so you see the characters and bytes that are actually on disk. You don't need extra software beyond coreutils.](<leftover-box-od>) [See printable text with stringsAfter od, use strings so you see readable text without dumping every byte. You don't need extra software beyond binutils.](<leftover-box-strings>) [Print words exactlyPrint words exactly with printf so a practice file gets the text you meant, without the extra newline echo always adds. You don't need extra software for this.](<leftover-box-printf>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [See if the computer still has roomBefore you buy a bigger drive, check free space with df.](<leftover-box-disk-space>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousPeek at file bytes](<leftover-box-od>) [NextSee printable text with strings](<leftover-box-strings>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
