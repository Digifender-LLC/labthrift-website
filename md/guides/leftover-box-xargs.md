# Run one command per line

Source: https://labthrift.com/guides/leftover-box-xargs
Markdown: https://labthrift.com/md/guides/leftover-box-xargs.md

*Notes › / › Faster network › / › Run one command per line*

[Notes](<./>) / [Faster network](<./#switches>) / Run one command per line

Written 30 Aug 2026. This is a how-to, not a product card.

# Run one command per line

After SSH works, run one command once per line with xargs so a list drives many short jobs. You don't need a scripting app for this.

A list of names can drive many short jobs. Tonight you run one command per line: `xargs`. Xargs reads lines, then runs a command with those words. Use echo, not delete. You are still only practicing in home on the computer. It does not need a scripting app for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If a pipe as the lesson is what you want, that is [send output into another command](<leftover-box-pipe>). If echo as the lesson is what you want, that is [put a short line into a file](<leftover-box-echo>). Skip xargs into `rm` tonight.

## What this is

`xargs` runs one command per line (or per batch of words). You make a tiny list, then type `xargs -a ~/names.txt echo`. Echo prints the words. `-n 1` means one word per run. `-I{}` puts each line where you write `{}`. Tonight you use echo. It is not rm. Don't mix delete into this drill.

## Practice xargs in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make a tiny list:

`printf 'alpha\nbeta\ngamma\n' > ~/names.txt`

`cat ~/names.txt`

Run echo with those words:

`xargs -a ~/names.txt echo`

You want alpha beta gamma on one line. Same idea with a pipe:

`cat ~/names.txt | xargs echo`

That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `xargs`. Don't make apt the job. If `xargs` is missing:

`sudo apt install findutils`

Then stop. That install is not the lesson.

When you are done, throw the practice files away. Careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/names.txt`

## Useful extras, still home only

Optional: one word per run:

`xargs -a ~/names.txt -n 1 echo`

Optional: put the line in the middle:

`xargs -a ~/names.txt -I{} echo hello-{}`

Optional: type words, then Ctrl+D:

`xargs echo`

Optional: show the command:

`xargs -a ~/names.txt -t echo`

Optional facts:

`stat ~/names.txt`

Skip xargs into `rm`. Xargs runs commands. Rm deletes. Don't mix those jobs.

## What this is not

This is not pipe as the lesson. That is [send output into another command](<leftover-box-pipe>). It is not echo as the lesson. That is [put a short line into a file](<leftover-box-echo>). It is not gzip. That is [shrink one file](<leftover-box-gzip>). It is not a careful delete. That is [delete a file carefully](<leftover-box-rm>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need encode for paste? [Encode a file so you can paste it](<leftover-box-base64>). Need a pipe as the lesson? [Send output into another command](<leftover-box-pipe>). Need shrink? [Shrink one file](<leftover-box-gzip>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip xargs into `rm`. Xargs runs commands. Don't mix delete into this drill.
  * Skip pipe, echo, gzip, and tar as tonight's job. Those pages already exist.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: xargs](<https://manpages.debian.org/bookworm/findutils/xargs.1.en.html>). [Ubuntu: xargs](<https://manpages.ubuntu.com/manpages/noble/man1/xargs.1.html>). [GNU findutils: invoking xargs](<https://www.gnu.org/software/findutils/manual/html_node/find_html/Invoking-xargs.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a pipe, see [send output into another command](<leftover-box-pipe>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Shrink one fileAfter SSH works, shrink one file with gzip so a copy is smaller. You don't need a zip app for this.](<leftover-box-gzip>) [Pack files into one archiveAfter SSH works, pack files into one archive with tar so you can copy one file instead of a folder. You don't need a zip app for this.](<leftover-box-tar>) [Send output into another commandAfter SSH works, send output into another command with | so a long dump does not flood the window. You don't need a file manager for this.](<leftover-box-pipe>) [Watch and save output at onceAfter SSH works, watch and save output at once with tee. You don't need a file manager for this.](<leftover-box-tee>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager for this.](<leftover-box-echo>) [Download a file onto the computerAfter SSH works, pull one file from a web address with curl. You don't need a browser on the computer for this.](<leftover-box-curl>) [Copy a file to the computer from your laptopAfter SSH works, use scp to move one file without a USB stick. You don't need a NAS for this.](<leftover-box-scp>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Encode a file so you can paste itAfter SSH works, turn a file into pasteable text with base64 so you can copy small text without a USB stick. You don't need a zip app for this.](<leftover-box-base64>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousShrink one file](<leftover-box-gzip>) [NextEncode a file so you can paste it](<leftover-box-base64>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
