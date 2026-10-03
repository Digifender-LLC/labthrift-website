# Check a file fingerprint

Source: https://labthrift.com/guides/leftover-box-sha256sum
Markdown: https://labthrift.com/md/guides/leftover-box-sha256sum.md

*Notes › / › Faster network › / › Check a file fingerprint*

[Notes](<./>) / [Faster network](<./#switches>) / Check a file fingerprint

Written 30 Aug 2026. This is a how-to, not a product card.

# Check a file fingerprint

After SSH works, check a file with `sha256sum` so you know the file you pulled still matches the fingerprint you expected. You don't need a download manager for this.

[Download a file onto the computer](<leftover-box-curl>) put one practice file in home. Tonight you ask for a fingerprint of that file. `sha256sum` does that. A fingerprint is a long fixed-looking string made from the file bytes. Change one byte and you get a different string. You are still only practicing on the computer. It does not need a download manager, a new mini PC, or paid checksum software for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. Prefer a practice file from [download a file onto the computer](<leftover-box-curl>) (`~/example.html`). If you only need to pull the file, that is curl. If you only need a file from your laptop, that is [copy a file to the computer from your laptop](<leftover-box-scp>). If you only need to compare two files side by side, that is [see whether two files are the same](<leftover-box-diff>). If you only need a word search, that is [find a word in a file](<leftover-box-grep>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`sha256sum` means print a fingerprint of this file. You type `sha256sum`, then a path in home. It prints a long hex string, then the filename. Hex means digits and letters a-f. That string is the fingerprint. Same bytes, same fingerprint. Change one byte, new fingerprint. It is not a download. That is [download a file onto the computer](<leftover-box-curl>). It is not a copy from your laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not comparing two files line by line. That is [see whether two files are the same](<leftover-box-diff>). It is not searching for a word. That is [find a word in a file](<leftover-box-grep>). It is not dumping the file text. That is [read a file without opening the editor](<leftover-box-cat>). It is not wrapping long lines. That is [wrap long lines](<leftover-box-fold>). It is not line numbers. That is [number lines](<leftover-box-nl>).

## Fingerprint one practice file in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. Prefer the practice page from curl:

`ls -lh ~/example.html`

If that file is missing, make a tiny practice file instead:

`printf 'hello\n' > ~/check-me.txt`

Now ask for the fingerprint:

`sha256sum ~/example.html`

Or, if you made the tiny file:

`sha256sum ~/check-me.txt`

You want one long hex string, a space or two, then the filename. That string is the fingerprint. Copy it somewhere safe if a download page later shows an expected fingerprint. Tonight you only need to see that it can print one.

Run the same command again without changing the file. You want the same fingerprint. Same bytes, same string.

## Useful extras, still looking only

Want to watch the fingerprint change after you rewrite the file?

`printf 'hello\nchanged\n' > ~/check-me.txt`

`sha256sum ~/check-me.txt`

You want a different long hex string. One byte change is enough. That is the whole point of a fingerprint.

Optional: save an expected fingerprint and check it. First write a line in the format `sha256sum` printed (hash, two spaces, path), then:

`sha256sum ~/check-me.txt > ~/check-me.sha256`

`sha256sum -c ~/check-me.sha256`

You want a line that ends in `OK`. `-c` means check the fingerprints listed in this file. Keep that file in home tonight.

Skip `md5sum` as tonight's primary tool. MD5 is an older, weaker fingerprint style. Tonight's tool is `sha256sum`.

Skip `openssl dgst` as tonight's lesson. Some computers have OpenSSL. Tonight you only need the plain coreutils command.

If it says command not found for `sha256sum`, install coreutils, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy checksum software.

When you are done looking, throw away the practice files:

`rm ~/check-me.txt ~/check-me.sha256`

Keep `~/example.html` if you still want it from curl, or delete that one the same way. Careful delete only. That is [delete a file carefully](<leftover-box-rm>).

## What this is not

This is not a download. That is [download a file onto the computer](<leftover-box-curl>). It is not a copy from your laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not comparing two files line by line. That is [see whether two files are the same](<leftover-box-diff>). It is not a word search. That is [find a word in a file](<leftover-box-grep>). It is not a short dump of a file. That is [read a file without opening the editor](<leftover-box-cat>). It is not wrapping long lines. That is [wrap long lines](<leftover-box-fold>). It is not line numbers. That is [number lines](<leftover-box-nl>). It is not file size, date, and permissions. That is [see file size, date, and permissions](<leftover-box-stat>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). It is not opening SSH to the internet so you can check downloads from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).

## What next

Need the practice file first? [Download a file onto the computer](<leftover-box-curl>). Need a file from your laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). Need to compare two files side by side? [See whether two files are the same](<leftover-box-diff>). Need a short dump of the file? [Read a file without opening the editor](<leftover-box-cat>). Need file size, date, and permissions without opening the file? [See file size, date, and permissions](<leftover-box-stat>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip fingerprinting files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip piping fingerprints into `rm` or other deletes. Tonight you only print or check a fingerprint.
  * Skip `openssl` as tonight's lesson, and skip treating `md5sum` as the primary check. Prefer `sha256sum`.
  * Skip huge OS images tonight. Practice one small home file first.
  * Skip buying checksum software. Debian and Ubuntu already ship `sha256sum` with coreutils.
  * Skip opening SSH to the internet so you can verify downloads from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: sha256sum](<https://manpages.debian.org/bookworm/coreutils/sha256sum.1.en.html>). [Ubuntu: sha256sum](<https://manpages.ubuntu.com/manpages/noble/man1/sha256sum.1.html>). [GNU coreutils: sha2 utilities](<https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a download first, see [download a file onto the computer](<leftover-box-curl>). For a file from your laptop, see [copy a file to the computer from your laptop](<leftover-box-scp>). For comparing two files, see [see whether two files are the same](<leftover-box-diff>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [See whether two files are the sameAfter SSH works, compare two files with diff so you can tell if the spare still matches. You don't need a file viewer for this.](<leftover-box-diff>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Check that the computer can reach the internetBefore you blame the computer or buy a mesh kit, ping a number past the house router.](<leftover-box-internet>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousDownload a file onto the computer](<leftover-box-curl>) [NextSee file size, date, and permissions](<leftover-box-stat>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
