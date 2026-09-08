# Make a file runnable

Source: https://labthrift.com/guides/leftover-box-chmod
Markdown: https://labthrift.com/md/guides/leftover-box-chmod.md

*Notes › / › Faster network › / › Make a file runnable*

[Notes](<./>) / [Faster network](<./#switches>) / Make a file runnable

Written 29 Aug 2026. This is a how-to, not a product card.

# Make a file runnable

After SSH works, change file permissions with `chmod` so a practice script can run. You don't need a permissions GUI for this.

[Put a short line into a file](<leftover-box-echo>) parks words on disk. [See what's in a folder](<leftover-box-ls>) can show the permission letters. Tonight you only need those letters to mean “this file may run.” `chmod` changes who can read, write, or run a file. You are still only practicing in home. The computer does not need a desktop, a permissions GUI, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you only need a short line on disk, that is [put a short line into a file](<leftover-box-echo>). If you only need the names and sizes, that is [see what's in a folder](<leftover-box-ls>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`chmod` means change mode. It changes the permission bits on a file you own. You run it on the computer, after SSH. It does not write the file's words. That is `echo` or `nano`. It does not change who owns the file. That owner job is a different tool, and you don't need it tonight. It does not open a permissions window. One short command, same computer, the run bit flipped on or off.

When `ls -l` prints a line, the first column looks like `-rw-rw-r--`. Those letters are read, write, and execute for you, for your group, and for everyone else. An `x` in that column means “may run.” A dash where the `x` would be means “may not.” That is the whole first-night story.

## Make a practice script runnable

SSH in. Put one short practice script in home. A short name with no spaces is easier to type later:

`echo '#!/bin/sh' > ~/hello.sh`

`echo 'echo hello from the computer' >> ~/hello.sh`

The first line tells the computer this file is a shell script. The second line is the one short job. Peek:

`cat ~/hello.sh`

See the permission letters before you change them:

`ls -l ~/hello.sh`

You will usually see something like `-rw-rw-r--` and no `x`. Trying to run it as a program fails until you flip that bit:

`chmod +x ~/hello.sh`

`ls -l ~/hello.sh`

You want an `x` in the first group of letters now, often `-rwxrwxr-x` or similar. Then run it by path:

`~/hello.sh`

You should see `hello from the computer`. That is the whole first-night trick.

## Useful extras, still practicing only

Need the run bit off again after you practice?

`chmod -x ~/hello.sh`

`ls -l ~/hello.sh`

The `x` should be gone. The words inside the file are still there.

Need a private note that only you can read? Practice on a throwaway file, not on SSH settings:

`echo 'practice secret' > ~/private.txt`

`chmod 600 ~/private.txt`

`ls -l ~/private.txt`

You want something like `-rw-------`. The number `600` is a short form: you may read and write, nobody else may. Skip deeper number puzzles tonight. `chmod +x` and `chmod 600` are enough for tonight.

If you see command not found, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a permissions GUI.

When you are done practicing:

`rm -i ~/hello.sh ~/private.txt`

## What this is not

This is not writing the words inside the file. That is [put a short line into a file](<leftover-box-echo>) or [edit a file from the couch](<leftover-box-nano>). It is not listing names. That is [see what's in a folder](<leftover-box-ls>). It is not changing who owns the file. Skip owner changes tonight. It is not turning off password login. That is [turn off password login once the key works](<leftover-box-ssh-no-password>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need a short line before the script exists? [Put a short line into a file](<leftover-box-echo>). Need several lines in the editor? [Edit a file from the couch](<leftover-box-nano>). Need the names and letters again? [See what's in a folder](<leftover-box-ls>). Need a second name that still points at the same file? [Make a shortcut](<leftover-box-ln>). Need a folder for scripts to land in? [Make a folder](<leftover-box-mkdir>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `chmod -R`, `chmod` on anything under `/etc`, SSH settings, or a file you care about. Practice only in home tonight.
  * Skip changing file owners, setuid bits, and ACL tools tonight. The run bit and `600` are the job.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip buying a permissions GUI, Midnight Commander, or a NAS to flip one run bit.
  * Skip opening SSH to the internet so you can change permissions from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: chmod](<https://manpages.debian.org/bookworm/coreutils/chmod.1.en.html>). [Ubuntu: chmod](<https://manpages.ubuntu.com/manpages/noble/man1/chmod.1.html>). [GNU coreutils: chmod](<https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a short line, see [put a short line into a file](<leftover-box-echo>). For listing letters, see [see what's in a folder](<leftover-box-ls>). For the editor, see [edit a file from the couch](<leftover-box-nano>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager app for this.](<leftover-box-echo>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Edit a file from the couchAfter SSH works, open a file with nano, change a line, and save. The keys at the bottom of the screen are the whole trick. You don't need a new editor.](<leftover-box-nano>) [Make a folderAfter SSH works, make a folder with mkdir so copies and edits have a place to land. You don't need a NAS for this.](<leftover-box-mkdir>) [Make an empty fileAfter SSH works, make an empty file with touch so nano and copies have a file to land on. You don't need a file manager app for this.](<leftover-box-touch>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousPut a short line into a file](<leftover-box-echo>) [NextMake a shortcut](<leftover-box-ln>)

---

*Labthrift Markdown mirror. HTML version linked above.*
