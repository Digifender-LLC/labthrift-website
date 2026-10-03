# Download a file onto the computer

Source: https://labthrift.com/guides/leftover-box-curl
Markdown: https://labthrift.com/md/guides/leftover-box-curl.md

*Notes › / › Faster network › / › Download a file onto the computer*

[Notes](<./>) / [Faster network](<./#switches>) / Download a file onto the computer

Written 30 Aug 2026. This is a how-to, not a product card.

# Download a file onto the computer

After SSH works, pull one file from a web address with `curl` so the computer has the file without a USB stick. You don't need a browser on it for this.

[Wrap long lines](<leftover-box-fold>) kept long lines readable in the window. Tonight you pull one file from a web address onto the computer. `curl` does that. You pick a save path in home and a URL. It fetches the file. You are still only practicing. It does not need a desktop browser, a USB stick, or a new mini PC for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If the computer cannot reach past the house router yet, finish [check that the computer can reach the internet](<leftover-box-internet>) first. If you only need a file from your laptop, that is [copy a file to the computer from your laptop](<leftover-box-scp>). If you only need long lines wrapped, that is [wrap long lines](<leftover-box-fold>). If you only need line numbers, that is [number lines](<leftover-box-nl>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`curl` means pull bytes from a web address. You type `curl`, a save flag, a path in home, then a URL that starts with `https://`. `-o` means save as this name. `-O` is optional keep the name from the URL. `-L` is optional follow a redirect. `-I` is optional headers only, no file body. It writes the file in home. It does not open a browser. It is not a copy from your laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not a ping past the router. That is [check that the computer can reach the internet](<leftover-box-internet>). It is not wrapping long lines. That is [wrap long lines](<leftover-box-fold>). It is not piping a download into a shell. Skip that tonight.

## Download one practice file into home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. Now pull one small practice page:

`curl -o ~/example.html https://example.com`

`-o ~/example.html` is the save path. `https://example.com` is a boring public page used for practice. You want a short progress line, then a quiet prompt again. Peek:

`ls -lh ~/example.html`

You want a small file size, not zero bytes. Short dump:

`head -n 5 ~/example.html`

You want HTML words about Example Domain. That is the whole first-night trick: one file from a URL, saved in home, no USB stick.

Need the filename from the URL instead of picking one?

`curl -O https://example.com/index.html`

`-O` keeps `index.html` as the name in the folder you are sitting in. Prefer `-o ~/name` tonight so you choose the path.

Need to follow a redirect when a site moves the file?

`curl -L -o ~/example.html https://example.com`

`-L` is optional. Plain `curl -o` is enough when the URL already lands on the file.

## Useful extras, still looking only

Need headers only, no body saved?

`curl -I https://example.com`

You want lines like HTTP status and content type. That check does not rewrite home.

Skip `curl … | bash` tonight. A download into a shell is how people run installers they have not read. Tonight you only save a file you can open with `head` or [less](<leftover-box-less>).

Skip `wget` as tonight's lesson. Some computers have it. Tonight's tool is `curl`.

Skip `-k` (skip certificate checks) and huge OS images tonight. Practice one small page first.

If it says command not found for `curl`, install it, then try again:

`sudo apt install curl`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a browser for the computer.

When you are done looking, throw away the practice file:

`rm ~/example.html`

Careful delete only. That is [delete a file carefully](<leftover-box-rm>). If you also made `index.html` with `-O`, delete that one the same way.

## What this is not

This is not a copy from your laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not a ping past the house router. That is [check that the computer can reach the internet](<leftover-box-internet>). It is not wrapping long lines. That is [wrap long lines](<leftover-box-fold>). It is not line numbers. That is [number lines](<leftover-box-nl>). It is not a short dump of a file you already have. That is [read a file without opening the editor](<leftover-box-cat>). It is not one screen at a time. That is [read a file one screen at a time](<leftover-box-less>). It is not first lines. That is [see the start of a file](<leftover-box-head>). It is not a quiet save of command print. That is [save output to a file](<leftover-box-redirect>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>). It is not opening SSH to the internet so you can download from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).

## What next

Need to check the file fingerprint after the download? [Check a file fingerprint](<leftover-box-sha256sum>). Need a file from your laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). Need to prove the computer can reach past the router first? [Check that the computer can reach the internet](<leftover-box-internet>). Need a short dump of the file you just pulled? [Read a file without opening the editor](<leftover-box-cat>). Need one screen at a time? [Read a file one screen at a time](<leftover-box-less>). Need the throwaway gone for real? [Delete a file carefully](<leftover-box-rm>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip if internet checks still fail. Finish [check that the computer can reach the internet](<leftover-box-internet>) first.
  * Skip `curl … | bash`, random installer URLs, and files you have not peeked at. Practice save with `-o`, then peek with `head` or `less`.
  * Skip `-k`, huge OS images, FTP tonight, and uploads with `-T`. One small download is enough.
  * Skip saving into `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip opening SSH to the internet so you can download files from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[curl: man page](<https://curl.se/docs/manpage.html>). [Debian: curl](<https://manpages.debian.org/bookworm/curl/curl.1.en.html>). [Ubuntu: curl](<https://manpages.ubuntu.com/manpages/noble/man1/curl.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For internet reachability, see [check that the computer can reach the internet](<leftover-box-internet>). For a file from your laptop, see [copy a file to the computer from your laptop](<leftover-box-scp>). For wrap, see [wrap long lines](<leftover-box-fold>). For line numbers, see [number lines](<leftover-box-nl>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Check that the computer can reach the internetBefore you blame the computer or buy a mesh kit, ping a number past the house router.](<leftover-box-internet>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Wrap long linesAfter SSH works, wrap long lines with fold. You don't need extra software for this.](<leftover-box-fold>) [Number linesAfter SSH works, nl numbers lines so a long file is easier to point at. You don't need a file manager for this.](<leftover-box-nl>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer for this.](<leftover-box-cat>) [Read a file one screen at a timeAfter SSH works, open a file with less so a long file does not flood the window. Space turns the page. q leaves. You don't need a file viewer for this.](<leftover-box-less>) [See the start of a fileAfter SSH works, print the first lines of a file with head so a long file does not flood the window. You don't need a file viewer for this.](<leftover-box-head>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousWrap long lines](<leftover-box-fold>) [NextCheck a file fingerprint](<leftover-box-sha256sum>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
