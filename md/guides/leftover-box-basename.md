# See the last name

Source: https://labthrift.com/guides/leftover-box-basename
Markdown: https://labthrift.com/md/guides/leftover-box-basename.md

*Notes › / › Faster network › / › See the last name*

[Notes](<./>) / [Faster network](<./#switches>) / See the last name

Written 1 Sep 2026. This is a how-to, not a product card.

# See the last name

After `realpath`, `basename` prints the last name so a practice file shows the file name without the folder path. You don't need extra software for this.

[See the full path](<leftover-box-realpath>) printed a full path. Tonight you pull the last name off a path: `basename`. Basename prints the last name from a path. Start with one tiny practice file, then `basename ~/basename-a.txt`.

Tilde `~` is home shorthand. Folder path is the folders before the file name. Basename strips folder path and keeps last name. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If a full path is what you want, that is [see the full path](<leftover-box-realpath>). If the folder of a path is what you want, that is [see the folder path](<leftover-box-dirname>). If the folder you sit in is what you want, that is [see which folder you are in](<leftover-box-pwd>).

## What this is

`basename` prints the last name from a path. You make one tiny practice file, then type `basename ~/basename-a.txt`. Basename prints `basename-a.txt` with no folder path. Stick with that safe peek. You don't need extra system software for this.

It is not `realpath`. Realpath prints a full path. It is not `dirname`. Dirname prints the folder of a path. It is not `pwd`. Pwd prints the folder you sit in.

## Practice basename in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make one tiny practice file:

`printf 'hello\n' > ~/basename-a.txt`

Print the last name:

`basename ~/basename-a.txt`

You want `basename-a.txt`, without folder path, then the prompt back. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `basename` (coreutils). Don't make apt the job.

If `basename` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

When you are done looking, throw the practice name away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/basename-a.txt`

## Useful extras, still home only

Optional extra: last name with suffix stripped:

`basename ~/basename-a.txt .txt`

That peek prints `basename-a`, without the `.txt` ending. Don't make suffix strip required.

Optional extra: last name of root:

`basename /`

That peek prints `/`. Root has no extra name to strip. Don't make `/` required. Don't dump the whole `/` tree.

Skip huge dumps as this job. Basename of whole home, `/etc`, password files, or huge logs is still a huge dump. Tonight: one tiny practice file.

Skip `basename` piped into `rm`. Basename prints last name. Rm deletes files. Don't mix those jobs. Skip `dirname`, `realpath`, `ln`, `stat`, `find`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `realpath`. Realpath prints a full path. That is [see the full path](<leftover-box-realpath>). It is not `dirname`. Dirname prints the folder of a path. That is [see the folder path](<leftover-box-dirname>). It is not `pwd`. That is [see which folder you are in](<leftover-box-pwd>).

## What next

Need the folder of a path? [See the folder path](<leftover-box-dirname>). Need a full path? [See the full path](<leftover-box-realpath>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as this job. Tonight: one tiny practice file.
  * Skip `basename` piped into `rm`. Basename prints last name. Don't mix delete into this drill.
  * Skip `dirname` and `realpath` as this job. Those notes already exist.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip files under `/etc` and whole `/`. Practice only in home.
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: basename(1)](<https://manpages.debian.org/bookworm/coreutils/basename.1.en.html>). [Ubuntu: basename(1)](<https://manpages.ubuntu.com/manpages/noble/man1/basename.1.html>). Official pages only. For a full path, see [see the full path](<leftover-box-realpath>). For the folder of a path, see [see the folder path](<leftover-box-dirname>). For the folder you sit in, see [see which folder you are in](<leftover-box-pwd>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See the full pathAfter cmp, realpath prints a full path so a practice name shows where it actually lives. You don't need extra software for this.](<leftover-box-realpath>) [See the folder pathAfter basename, dirname prints the folder path of a name, without the last name. You don't need extra software for this.](<leftover-box-dirname>) [See which folder you are inAfter SSH works, pwd prints the folder you sit in so later file commands land where you expect. You don't need a file manager for this.](<leftover-box-pwd>) [Make a shortcutAfter SSH works, make a shortcut with ln -s so a second name points at the same file. You don't need a file manager for this.](<leftover-box-ln>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee the full path](<leftover-box-realpath>) [NextSee the folder path](<leftover-box-dirname>)

---

*Labthrift Markdown mirror. HTML version linked above.*
