# See the full path

Source: https://labthrift.com/guides/leftover-box-realpath
Markdown: https://labthrift.com/md/guides/leftover-box-realpath.md

*Notes › / › Faster network › / › See the full path*

[Notes](<./>) / [Faster network](<./#switches>) / See the full path

Written 1 Sep 2026. This is a how-to, not a product card.

# See the full path

After `cmp`, `realpath` turns a file name, a dot, or a shortcut into one full path so practice files show where they actually live. You don't need extra software for this.

[See whether two files match byte for byte](<leftover-box-cmp>) compared two files. Tonight you ask for the full path: `realpath`. Realpath prints the full path. Start with one tiny practice file, then one shortcut, then `realpath ~/realpath-a.txt` and `realpath ~/realpath-link.txt`.

`~` is home shorthand. `.` is this folder. Shortcut names can differ from target names. `realpath` turns those names into one full path. That is not `pwd`. Pwd prints the folder you sit in. That is [see which folder you are in](<leftover-box-pwd>). Tonight uses `ln -s` only to make one practice shortcut. You are still only practicing in home on the computer. It does not need extra software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If byte-for-byte compare is what you want, that is [see whether two files match byte for byte](<leftover-box-cmp>). Skip `cmp` as tonight's job. If making a shortcut is what you want as the lesson, that is [make a shortcut](<leftover-box-ln>). Skip `ln` as tonight's job. Tonight uses `ln -s` only to make one practice shortcut.

## What this is

`realpath` prints the full path. Tonight: one tiny practice file, then one shortcut, then `realpath ~/realpath-a.txt` and `realpath ~/realpath-link.txt`. Realpath prints one full path from the first slash to the file name. When the name is a shortcut, realpath follows the shortcut to the target file. Stick with that safe peek: the full path for the file, and the same full path for the shortcut. You don't need extra software for this.

It is not `pwd`. Pwd prints the folder you sit in. It is not `ln`. Ln makes a shortcut. It is not `cmp`. Cmp compares files byte for byte.

## Practice realpath in home

SSH in.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Make one tiny practice file:

`printf 'hello\n' > ~/realpath-a.txt`

Print the full path of the file (tonight's job, file):

`realpath ~/realpath-a.txt`

You want one full path that ends in `realpath-a.txt`, from the first slash. Then the prompt back. `~` became the full home path. That is enough for the file peek.

Now make one shortcut:

`ln -s ~/realpath-a.txt ~/realpath-link.txt`

Print the full path of the shortcut (tonight's job, shortcut):

`realpath ~/realpath-link.txt`

You want the same full path ending in `realpath-a.txt`, not the shortcut name. Then the prompt back. That is enough for tonight. Practice only in home on the computer.

Debian and Ubuntu usually already have `realpath` (coreutils). Don't make apt the job.

If `realpath` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

When you are done looking, throw the practice names away with careful delete only. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

`rm -i ~/realpath-link.txt ~/realpath-a.txt`

## Useful extras, still home only

Optional extra: full path of this folder:

`realpath .`

That peek prints the full path of the folder you sit in. Don't make `.` required. You can stay on `realpath ~/realpath-a.txt`.

Optional extra: full path without requiring the last name to exist:

`realpath -m ~/does-not-exist-yet.txt`

That peek cleans path text even when the last name is missing. Don't make `-m` required.

Skip huge dumps as tonight's job. Skip `realpath` piped into `rm`. Realpath prints a full path. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice only in home.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `pwd`. Pwd prints the folder you sit in. Realpath prints the full path of a name you give it. That is [see which folder you are in](<leftover-box-pwd>). It is not `ln`. That is [make a shortcut](<leftover-box-ln>). It is not `cmp`. That is [see whether two files match byte for byte](<leftover-box-cmp>).

## What next

Need the last name from a path? [See last name](<leftover-box-basename>). Need files compared byte for byte? [See whether two files match byte for byte](<leftover-box-cmp>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as tonight's job. Tonight: one tiny practice file and one shortcut.
  * Skip `realpath` piped into `rm`. Realpath prints a full path. Don't mix delete into this drill.
  * Skip `pwd`, `ln`, and `cmp` as tonight's job. Those notes already exist.
  * Skip apt as tonight's job. The coreutils aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: realpath(1)](<https://manpages.debian.org/bookworm/coreutils/realpath.1.en.html>). [Ubuntu: realpath(1)](<https://manpages.ubuntu.com/manpages/noble/man1/realpath.1.html>). Official pages only. For a byte-for-byte compare, see [see whether two files match byte for byte](<leftover-box-cmp>). For the folder you sit in, see [see which folder you are in](<leftover-box-pwd>). For making a shortcut, see [make a shortcut](<leftover-box-ln>). For file size, date, and permissions, see [see file size, date, and permissions](<leftover-box-stat>). For words you type once, see [put a short line into a file](<leftover-box-echo>). For sending output, see [send output into another command](<leftover-box-pipe>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See whether two files match byte for byteAfter comm, compare files byte for byte with cmp so practice copies (and echo drills) show whether two files match exactly. You don't need extra software for this.](<leftover-box-cmp>) [See which folder you are inAfter SSH works, print the folder you are sitting in with pwd so later file commands land where you expect. You don't need a file manager for this.](<leftover-box-pwd>) [Make a shortcutAfter SSH works, make a shortcut with ln -s so a second name points at the same file. You don't need a file manager for this.](<leftover-box-ln>) [See file size, date, and permissionsAfter SSH works, look at one file with stat so you can see its size, last-change date, and permissions without opening it. You don't need a file manager for this.](<leftover-box-stat>) [See what's in a folderAfter SSH works, list folder contents with ls so you know what names are there. You don't need a file manager for this.](<leftover-box-ls>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [See last nameAfter realpath, print last name with basename so practice files (and realpath drills) show file name without folder path. You don't need extra software for this.](<leftover-box-basename>) [PreviousSee whether two files match byte for byte](<leftover-box-cmp>) [NextSee last name](<leftover-box-basename>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
