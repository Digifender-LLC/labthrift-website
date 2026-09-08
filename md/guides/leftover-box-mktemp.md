# Make a temporary practice file

Source: https://labthrift.com/guides/leftover-box-mktemp
Markdown: https://labthrift.com/md/guides/leftover-box-mktemp.md

*Notes › / › Faster network › / › Make a temporary practice file*

[Notes](<./>) / [Faster network](<./#switches>) / Make a temporary practice file

Written 1 Sep 2026. This is a how-to, not a product card.

# Make a temporary practice file

After `readlink`, `mktemp` makes a unique temporary practice file so you don't guess a name. You don't need extra system software for this.

[See the shortcut target](<leftover-box-readlink>) printed the path a shortcut points at. Tonight you make a unique temporary name: `mktemp`. Mktemp makes one new empty practice file and prints its path. Start with plain `mktemp`, typically under `/tmp`.

You don't pick the last name. Mktemp fills it so two drills don't collide. You are still only making a throwaway practice name on the computer. The computer does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If an empty file with a name you choose is what you want, that is [make an empty file](<leftover-box-touch>). If a folder is what you want, that is [make a folder](<leftover-box-mkdir>). If a shortcut target is what you want, that is [see the shortcut target](<leftover-box-readlink>).

## What this is

`mktemp` makes one unique temporary practice file and prints the path. You type `mktemp`. Stick with that safe peek: one unique path, typically under `/tmp`, then the prompt back. You don't need extra system software for this.

It is not `touch`. Touch makes an empty file with a name you choose. It is not `mkdir`. Mkdir makes a folder. Tonight uses `mktemp -d` only as an extra. It is not `echo`. Echo writes words you type.

## Practice mktemp

SSH into the computer.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Make one unique temporary practice file (tonight's job):

`mktemp`

You want one unique path, typically under `/tmp`. Then the prompt back. Copy that exact path. Don't guess the last name. That is enough for tonight.

Debian and Ubuntu usually already have `mktemp` (coreutils). Don't make apt the job.

If `mktemp` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

When you are done looking, delete only that exact printed path with careful delete. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

Type `rm -i`, then a space, then paste the exact path mktemp printed. Don't invent an example name under `/tmp`.

## Useful extras, still home-safe

Optional extra: a unique temporary practice file in home, with a template name:

`mktemp ~/mktemp.XXXXXX`

`XXXXXX` is a placeholder mktemp replaces with random characters so the name stays unique. That peek prints a unique home path. Don't make the template required. You can stay on plain `mktemp`. When done, careful `rm -i` on that exact home path only.

Optional extra: a unique temporary practice folder:

`mktemp -d`

`-d` means make a temporary folder instead of a file. That peek prints one unique folder path, typically under `/tmp`. Leave it empty tonight. When done, remove only that empty practice folder with `rmdir` on the exact printed path. Skip `rm -rf`.

Skip huge dumps as this job. Skip `mktemp` piped into `rm`. Mktemp makes a name. Rm deletes files. Don't mix those jobs. Skip files under `/etc`, whole `/`, SSH folders, USB sticks, and `/srv`. Practice names only. Mktemp does not wipe disks or mount disks.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `touch`. Touch makes an empty file with a name you choose. That is [make an empty file](<leftover-box-touch>). It is not `mkdir`. That is [make a folder](<leftover-box-mkdir>). It is not `readlink`. That is [see the shortcut target](<leftover-box-readlink>).

## What next

Need words printed exactly? [Print words exactly](<leftover-box-printf>). Need an empty file with a name you choose? [Make an empty file](<leftover-box-touch>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip huge dumps as this job. Tonight: one unique temporary practice name.
  * Skip `mktemp` piped into `rm`. Mktemp makes a name. Don't mix delete into this drill.
  * Skip `touch`, `mkdir`, and `readlink` as this job. Those notes already exist.
  * Skip apt as this job. The coreutils aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: mktemp(1)](<https://manpages.debian.org/bookworm/coreutils/mktemp.1.en.html>). [Ubuntu: mktemp(1)](<https://manpages.ubuntu.com/manpages/noble/man1/mktemp.1.html>). Official pages only. For an empty file, see [make an empty file](<leftover-box-touch>). For a folder, see [make a folder](<leftover-box-mkdir>). For a shortcut target, see [see the shortcut target](<leftover-box-readlink>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See the shortcut targetAfter dirname, readlink prints the shortcut target so a practice shortcut shows the path it points at. You don't need extra system software for this.](<leftover-box-readlink>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager app for this.](<leftover-box-touch>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager app for this.](<leftover-box-echo>) [See how big one folder isAfter SSH works, du shows how big one folder is so you know before you copy or delete. You don't need a file manager app for this.](<leftover-box-du>) [See file size, date, and permissionsAfter SSH works, stat shows size, last-change date, and permissions for one file. You don't need a file manager app for this.](<leftover-box-stat>) [See what's in a folderAfter SSH works, ls lists folder contents so you know what names are there. You don't need a file manager app for this.](<leftover-box-ls>) [Send output into another commandAfter SSH works, a pipe sends output into another command so a long dump does not flood the window. You don't need extra system software for this.](<leftover-box-pipe>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee the shortcut target](<leftover-box-readlink>) [NextPrint words exactly](<leftover-box-printf>)

---

*Labthrift Markdown mirror. HTML version linked above.*
