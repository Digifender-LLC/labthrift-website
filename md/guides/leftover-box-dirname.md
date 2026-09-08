# See the folder path

Source: https://labthrift.com/guides/leftover-box-dirname
Markdown: https://labthrift.com/md/guides/leftover-box-dirname.md

*Notes › / › Faster network › / › See the folder path*

[Notes](<./>) / [Faster network](<./#switches>) / See the folder path

Written 1 Sep 2026. This is a how-to, not a product card.

# See the folder path

After `basename`, `dirname` prints the folder path of a name, without the last name. You don't need extra software for this.

[See the last name](<leftover-box-basename>) printed the last name of a path. Tonight you ask for the folder path: `dirname`. Dirname prints the folders before the last name. Start with one tiny practice file, then `dirname ~/dirname-a.txt`.

`~` is home shorthand. The last name is the file name after the folders. `dirname` strips the last name and keeps the folder path. That is not `basename`. Basename prints the last name. That is [see the last name](<leftover-box-basename>). You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If the last name is what you want, that is [see the last name](<leftover-box-basename>). Skip `basename` as tonight's job. If the full path is what you want, that is [see the full path](<leftover-box-realpath>). Skip `realpath` as tonight's job.

## What this is

`dirname` prints the folder of a path (the folders before the last name). You make one tiny practice file, then type `dirname ~/dirname-a.txt`. Dirname prints the folder path only, without the last name. Stick with that safe peek: the home folder path (typically `/home/YOURLOGIN`), without the last name `dirname-a.txt`, then the prompt back. You don't need extra system software for this.

It is not `basename`. Basename prints the last name. It is not `realpath`. Realpath prints the full path. It is not `pwd`. Pwd prints the folder you sit in.

## Practice dirname in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Make one tiny practice file:

`printf 'hello\n' > ~/dirname-a.txt`

Print the folder path (tonight's job):

`dirname ~/dirname-a.txt`

You want the home folder path (typically `/home/YOURLOGIN`), without the last name `dirname-a.txt`. Then the prompt back. `~` was home shorthand. Dirname kept the folder path only. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `dirname` (coreutils). Don't make apt the job.

If `dirname` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

When you are done looking, throw the practice name away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/dirname-a.txt`

## Useful extras, still home only

Optional extra: folder path of the root path:

`dirname /`

That peek prints `/`. Root has no extra folder above it. Don't make `/` required. You can stay on `dirname ~/dirname-a.txt`. Don't dump the whole `/` tree.

Optional extra: folder path of the folder you sit in, as a dot:

`dirname .`

That peek prints `.` (the folder you sit in, as a dot). Don't make `pwd` the job. Don't make `.` required.

Skip huge dumps as tonight's job. Skip `dirname` piped into `rm`. Dirname prints a folder path. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `basename`. Basename prints the last name. Dirname prints the folder path only. That is [see the last name](<leftover-box-basename>). It is not `realpath`. That is [see the full path](<leftover-box-realpath>). It is not `pwd`. That is [see which folder you are in](<leftover-box-pwd>).

## What next

Need the shortcut target? [See the shortcut target](<leftover-box-readlink>). Need the last name from a path? [See the last name](<leftover-box-basename>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as tonight's job. Tonight: one tiny practice file.
  * Skip `dirname` piped into `rm`. Dirname prints a folder path. Don't mix delete into this drill.
  * Skip `basename`, `realpath`, and `pwd` as tonight's job. Those notes already exist.
  * Skip apt as tonight's job. The coreutils aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: dirname(1)](<https://manpages.debian.org/bookworm/coreutils/dirname.1.en.html>). [Ubuntu: dirname(1)](<https://manpages.ubuntu.com/manpages/noble/man1/dirname.1.html>). Official pages only. For the last name, see [see the last name](<leftover-box-basename>). For the full path, see [see the full path](<leftover-box-realpath>). For the folder you sit in, see [see which folder you are in](<leftover-box-pwd>). For making a shortcut, see [make a shortcut](<leftover-box-ln>). For file size, date, and permissions, see [see file size, date, and permissions](<leftover-box-stat>). For words you type once, see [put a short line into a file](<leftover-box-echo>). For sending output, see [send output into another command](<leftover-box-pipe>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See the last nameAfter realpath, basename prints the last name so a practice file shows the file name without the folder path. You don't need extra software for this.](<leftover-box-basename>) [See the shortcut targetAfter dirname, readlink prints the path a shortcut points at. You don't need extra software for this.](<leftover-box-readlink>) [See the full pathAfter cmp, realpath prints a full path so a practice name shows where it actually lives. You don't need extra software for this.](<leftover-box-realpath>) [See which folder you are inAfter SSH works, pwd prints the folder you sit in so later file commands land where you expect. You don't need a file manager for this.](<leftover-box-pwd>) [Make a shortcutAfter SSH works, make a shortcut with ln -s so a second name points at the same file. You don't need a file manager for this.](<leftover-box-ln>) [See file size, date, and permissionsAfter SSH works, see file size, date, and permissions with stat. You don't need extra software for this.](<leftover-box-stat>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager for this.](<leftover-box-ls>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee the last name](<leftover-box-basename>) [NextSee the shortcut target](<leftover-box-readlink>)

---

*Labthrift Markdown mirror. HTML version linked above.*
