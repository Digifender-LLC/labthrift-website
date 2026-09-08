# See the shortcut target

Source: https://labthrift.com/guides/leftover-box-readlink
Markdown: https://labthrift.com/md/guides/leftover-box-readlink.md

*Notes › / › Faster network › / › See the shortcut target*

[Notes](<./>) / [Faster network](<./#switches>) / See the shortcut target

Written 1 Sep 2026. This is a how-to, not a product card.

# See the shortcut target

After `dirname`, `readlink` prints the shortcut target so a practice shortcut shows the path it points at. You don't need extra system software for this.

[See the folder path](<leftover-box-dirname>) printed the folder path of a name. Tonight you ask where a shortcut points: `readlink`. Readlink prints the path a shortcut points at. Start with one tiny practice file, one shortcut, then `readlink ~/readlink-link.txt`.

You are still only practicing in home on the computer. The computer does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If making the shortcut is what you want, that is [make a shortcut](<leftover-box-ln>). If the full path is what you want, that is [see full path](<leftover-box-realpath>). If the folder path is what you want, that is [see the folder path](<leftover-box-dirname>).

## What this is

`readlink` prints the path a shortcut points at. You make one tiny practice file, one shortcut with `ln -s`, then type `readlink ~/readlink-link.txt`. Stick with that safe peek. You don't need extra system software for this.

It is not `ln` as the job. Ln makes the shortcut. Tonight uses `ln -s` only to make the practice shortcut. It is not `realpath`. Realpath prints the full path. Skip `readlink -f` as the realpath job. It is not `dirname`. Dirname prints the folder path.

## Practice readlink in home

SSH into the computer.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Make one tiny practice file:

`printf 'hello\n' > ~/readlink-a.txt`

Make one practice shortcut that points at that file:

`ln -s ~/readlink-a.txt ~/readlink-link.txt`

Print the shortcut target (tonight's job):

`readlink ~/readlink-link.txt`

You want the path the shortcut points at, typically `/home/YOURLOGIN/readlink-a.txt` or `~/readlink-a.txt` as stored. Then the prompt back. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `readlink` (coreutils). Don't make apt the job.

If `readlink` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

When you are done looking, throw the practice names away with careful delete only. Delete the shortcut first, then the file. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/readlink-link.txt`

`rm -i ~/readlink-a.txt`

## Useful extras, still home only

Optional extra: readlink without a trailing newline:

`readlink -n ~/readlink-link.txt`

That peek prints the same target path without a trailing newline. Don't make `-n` required. You can stay on `readlink ~/readlink-link.txt`.

Optional extra: readlink on a regular file (not a shortcut):

`readlink ~/readlink-a.txt`

That peek typically prints nothing and exits 1. That peek shows readlink is for shortcuts. Don't make that required.

Skip `readlink -f`, `readlink -e`, and `readlink -m` as this job. Those flags follow shortcuts to a full path. That is the realpath job. That is [see full path](<leftover-box-realpath>).

Skip huge dumps as this job. Skip `readlink` piped into `rm`. Readlink prints a shortcut target. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `ln` as the job. Ln makes the shortcut. That is [make a shortcut](<leftover-box-ln>). It is not `realpath`. That is [see full path](<leftover-box-realpath>). It is not `dirname`. That is [see the folder path](<leftover-box-dirname>).

## What next

Need a unique temporary practice file? [Make a temporary practice file](<leftover-box-mktemp>). Need the last name from a path? [See last name](<leftover-box-basename>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as this job. Tonight: one tiny practice shortcut.
  * Skip `readlink` piped into `rm`. Readlink prints a shortcut target. Don't mix delete into this drill.
  * Skip `ln` as this job. That is [make a shortcut](<leftover-box-ln>). Tonight uses `ln -s` only to make the practice shortcut.
  * Skip `realpath` as this job. That is [see full path](<leftover-box-realpath>). Skip `readlink -f` as the realpath job.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: readlink(1)](<https://manpages.debian.org/bookworm/coreutils/readlink.1.en.html>). [Ubuntu: readlink(1)](<https://manpages.ubuntu.com/manpages/noble/man1/readlink.1.html>). Official pages only. For making a shortcut, see [make a shortcut](<leftover-box-ln>). For the full path, see [see full path](<leftover-box-realpath>). For the folder path, see [see the folder path](<leftover-box-dirname>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See the folder pathAfter basename, dirname prints the folder path of a name, without the last name. You don't need extra system software for this.](<leftover-box-dirname>) [See last nameAfter realpath, basename prints the last name of a path, without the folders. You don't need extra system software for this.](<leftover-box-basename>) [See full pathAfter cmp, realpath shows the full path so practice files and shortcuts show where names actually live. You don't need extra system software for this.](<leftover-box-realpath>) [Make a shortcutAfter SSH works, ln -s makes a shortcut so a second name points at the same file. You don't need a file manager app for this.](<leftover-box-ln>) [See which folder you are inAfter SSH works, pwd prints the folder you are sitting in so later file commands land where you expect. You don't need a file manager app for this.](<leftover-box-pwd>) [See what's in a folderAfter SSH works, ls lists folder contents so you know what names are there. You don't need a file manager app for this.](<leftover-box-ls>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee the folder path](<leftover-box-dirname>) [NextMake a temporary practice file](<leftover-box-mktemp>)

---

*Labthrift Markdown mirror. HTML version linked above.*
