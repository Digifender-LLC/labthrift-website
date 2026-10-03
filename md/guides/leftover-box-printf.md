# Print words exactly

Source: https://labthrift.com/guides/leftover-box-printf
Markdown: https://labthrift.com/md/guides/leftover-box-printf.md

*Notes › / › Faster network › / › Print words exactly*

[Notes](<./>) / [Faster network](<./#switches>) / Print words exactly

Written 1 Sep 2026. This is a how-to, not a product card.

# Print words exactly

After a temporary practice file, `printf` prints words exactly. Echo always adds a newline.

[Make a temporary practice file](<leftover-box-mktemp>) gave you a unique name. Tonight the computer prints words exactly with `printf`. Printf prints the characters you typed. If you want a newline, you type `\n` yourself.

That is not `echo`. Echo always adds a newline. That is [put a short line into a file](<leftover-box-echo>). You are still only practicing on the computer. The computer does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. SSH means type commands from your laptop, on the house network. If a short line with an automatic newline is what you want, that is [put a short line into a file](<leftover-box-echo>). Skip `echo` as tonight's job.

If the editor is what you want, that is [edit a file from the couch](<leftover-box-nano>). Skip `nano` as tonight's job.

## What this is

`printf` prints characters exactly. The usual command tonight is `printf 'hello\n'`. The command prints hello, then a newline because you typed `\n`. Tonight: that safe peek: hello, then the prompt on the next line. You don't need extra system software for this.

It is not `echo`. Echo always adds a newline. It is not format-string school. Tonight: exact words plus the newline you typed.

## Practice printf

SSH into the computer.

Make sure home is where you sit:

`pwd`

You want a path that ends in your login name.

If the path is wrong, run this:

`cd ~`

Print hello and a newline you typed:

`printf 'hello\n'`

You want hello, then the prompt on the next line. You typed the newline as `\n`. That is enough for tonight.

Debian and Ubuntu usually already have `printf`. Don't make apt the lesson.

If `printf` is missing, install coreutils:

`sudo apt install coreutils`

Then stop. That apt line is not the lesson.

## Useful extras, still home-safe

Optional: park exact words in a tiny home practice file:

`printf 'hello\n' > ~/printf-a.txt`

Then peek:

`cat ~/printf-a.txt`

You want hello on its own line. Don't make redirect or `cat` the job. When you are done, delete only that practice file:

`rm -i ~/printf-a.txt`

Ask first. Say yes only if the name matches. That is [delete a file carefully](<leftover-box-rm>). Skip `rm -rf`.

Optional peek without a newline:

`printf hello`

You want hello and the prompt on the same line. That shows why `\n` matters. You can stay on `printf 'hello\n'`.

Skip huge dumps as tonight's job. Skip `printf` piped into `rm`. Printf prints words. Rm deletes files. Don't mix those jobs. Skip format-string school (`%s`, `%d`, `%x`, width flags). Skip files under `/etc`, whole `/`, SSH folders, and USB sticks. Practice in the computer window. Optional home practice file only.

Skip `screen`, `tmux`, htop, Grafana, and a NAS. Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What this is not

This is not `echo`. Echo always adds a newline. That is [put a short line into a file](<leftover-box-echo>). It is not the editor. That is [edit a file from the couch](<leftover-box-nano>). It is not redirect as the main job. That is [save output to a file](<leftover-box-redirect>).

## What next

Need disk writes finished before you unplug or power off? [Finish disk writes](<leftover-box-sync>). Need a short line that always adds a newline? [Put a short line into a file](<leftover-box-echo>).

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `echo` as tonight's job. Echo always adds a newline. That is [put a short line into a file](<leftover-box-echo>).
  * Skip `nano` and redirect as the main job. Those notes already exist.
  * Skip huge dumps, format-string school, and `printf` piped into `rm`.
  * Skip apt as tonight's job. The coreutils aside is not the lesson.
  * Skip htop, Grafana, a NAS, files under `/etc`, and whole `/`.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: printf(1)](<https://manpages.debian.org/bookworm/coreutils/printf.1.en.html>). [Ubuntu: printf(1)](<https://manpages.ubuntu.com/manpages/noble/man1/printf.1.html>). Official pages only. For a short line with an automatic newline, see [put a short line into a file](<leftover-box-echo>). For a temporary practice name, see [make a temporary practice file](<leftover-box-mktemp>). For saving output, see [save output to a file](<leftover-box-redirect>). For a careful delete, see [delete a file carefully](<leftover-box-rm>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Make a temporary practice fileAfter readlink, make a temporary practice file with mktemp so practice names (and echo/printf drills) get a unique name in /tmp (or home) without guessing a name. You don't need extra system software for this.](<leftover-box-mktemp>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager app for this.](<leftover-box-echo>) [Save output to a fileAfter SSH works, save command output to a file with > so you can read it later. You don't need a file manager app for this.](<leftover-box-redirect>) [Read a file without opening the editorAfter SSH works, print a file with cat so you can read it without opening nano. Short files only. You don't need a file viewer app for this.](<leftover-box-cat>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager app for this.](<leftover-box-touch>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousMake a temporary practice file](<leftover-box-mktemp>) [NextFinish disk writes](<leftover-box-sync>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
