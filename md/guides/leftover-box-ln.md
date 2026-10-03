# Make a shortcut

Source: https://labthrift.com/guides/leftover-box-ln
Markdown: https://labthrift.com/md/guides/leftover-box-ln.md

*Notes › / › Faster network › / › Make a shortcut*

[Notes](<./>) / [Faster network](<./#switches>) / Make a shortcut

Written 29 Aug 2026. This is a how-to, not a product card.

# Make a shortcut

After SSH works, make a shortcut with `ln -s` so a second name points at the same file. You don't need a file manager app for this.

[Copy a file without leaving the computer](<leftover-box-cp>) makes a second pile of bytes. Tonight you only need a second name. `ln -s` puts a shortcut next to a file you already have. Change the real file, and the shortcut shows the same words. You are still only practicing in home. The computer does not need a desktop, a file manager, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If you need a real second copy, that is [copy a file without leaving the computer](<leftover-box-cp>). If you only need a new name and the old one can go, that is [rename or move a file](<leftover-box-mv>). Skip this whole note if you only need a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What this is

`ln -s` means link, symbolic. The computer also calls this a symbolic link. You can keep calling it a shortcut. It makes a new name that points at a file that is already there. You run it on the computer, after SSH. It does not copy the words. That is `cp`. It does not rename the file. That is `mv`. It does not change who can read or run it. That is [make a file runnable](<leftover-box-chmod>). Two names, one file.

## Make a practice shortcut

SSH in. Put one short practice file in home. A short name with no spaces is easier to type later:

`echo 'hello from the computer' > ~/hello.txt`

Then make a shortcut next to it. The first path is the real file. The second path is the new name:

`ln -s ~/hello.txt ~/hello-link.txt`

Use a path that starts with `~` or `/` so the shortcut still works after you move into another folder. A short name with no spaces is easier to type later.

See the arrow:

`ls -l ~/hello-link.txt`

You want a line that starts with `l` (for link) and an arrow to the real file, something like `hello-link.txt -> /home/you/hello.txt`. The computer prints your real home path, not the word you. Peek through the shortcut:

`cat ~/hello-link.txt`

You should see `hello from the computer`. That is the whole first-night trick.

## Useful extras, still practicing only

Need to see where a shortcut points without dumping the file?

`readlink ~/hello-link.txt`

You want the path you gave `ln -s`.

Change the real file, then peek at the shortcut again:

`echo 'hello again' > ~/hello.txt`

`cat ~/hello-link.txt`

You want the new line. There is still only one pile of words. The shortcut did not keep a spare.

Need a shortcut to a folder you already made? [Make a folder](<leftover-box-mkdir>) first if you don't have one, then:

`ln -s ~/practice ~/practice-link`

`ls -l ~/practice-link`

Same arrow, same idea. Skip that until a folder shortcut is the job.

If you see command not found, install the usual tools, then try again:

`sudo apt install coreutils`

Debian and Ubuntu Server usually already have it. That install is not a reason to buy a file manager.

When you are done practicing, delete the shortcut first. That does not delete the real file:

`rm -i ~/hello-link.txt`

Then the practice file, if you want it gone too:

`rm -i ~/hello.txt`

If you delete `hello.txt` first, the shortcut still sits there, but `cat ~/hello-link.txt` fails. That leftover name is a broken shortcut. Remove it with `rm -i` too.

## What this is not

This is not a second copy of the words. That is [copy a file without leaving the computer](<leftover-box-cp>). It is not a rename. That is [rename or move a file](<leftover-box-mv>). It is not flipping the run bit. That is [make a file runnable](<leftover-box-chmod>). It is not a file from the laptop. That is [copy a file to the computer from your laptop](<leftover-box-scp>). It is not a house share other computers browse. That is [a folder the house can open](<first-file-share>).

## What next

Need a real spare instead of a pointer? [Copy a file without leaving the computer](<leftover-box-cp>). Need the names and arrows again? [See what's in a folder](<leftover-box-ls>). Need the run bit on a practice script? [Make a file runnable](<leftover-box-chmod>). Need a short line before the file exists? [Put a short line into a file](<leftover-box-echo>). Need a folder for shortcuts to land in? [Make a folder](<leftover-box-mkdir>). Need a file from the laptop instead? [Copy a file to the computer from your laptop](<leftover-box-scp>). When a house job broke, look at the computer's own diary: [when something broke, look at the log](<leftover-box-read-logs>). When key login is boring on every computer you use, [turn off password login once the key works](<leftover-box-ssh-no-password>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip `ln` without `-s`. That other kind of link is harder to undo. Tonight: the shortcut, `ln -s`.
  * Skip `ln -sf`, shortcuts under `/etc`, SSH settings, or a file you care about. Practice only in home tonight.
  * Skip a relative shortcut from a random folder. If you later `cd` somewhere else, that pointer can break. Start the real path with `~` or `/`.
  * Skip SSH settings, `/etc/shadow`, and anything under `/etc/ssh`. Looking at trusted laptop keys is [see which laptop keys the computer already trusts](<leftover-box-authorized-keys>).
  * Skip buying a file manager, a “cloud drive,” or a NAS to make one shortcut.
  * Skip opening SSH to the internet so you can make shortcuts from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>).



## Sources

[Debian: ln](<https://manpages.debian.org/bookworm/coreutils/ln.1.en.html>). [Ubuntu: ln](<https://manpages.ubuntu.com/manpages/noble/man1/ln.1.html>). [GNU coreutils: ln](<https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For a real copy, see [copy a file without leaving the computer](<leftover-box-cp>). For listing arrows, see [see what's in a folder](<leftover-box-ls>). For the run bit, see [make a file runnable](<leftover-box-chmod>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [Copy a file without leaving the computerAfter SSH works, copy a file with cp so you can edit a spare without wrecking the original. You don't need a NAS for this.](<leftover-box-cp>) [Rename or move a fileAfter SSH works, rename or move a file with mv so the name matches the job. The old name is gone. You don't need a NAS for this.](<leftover-box-mv>) [Make a file runnableAfter SSH works, change file permissions with chmod so a practice script can run. You don't need a permissions GUI for this.](<leftover-box-chmod>) [See what's in a folderAfter SSH works, list the folder you are sitting in with ls. You don't need a file manager app for this.](<leftover-box-ls>) [Put a short line into a fileAfter SSH works, put one short line into a file with echo so you don't need to open nano. You don't need a file manager app for this.](<leftover-box-echo>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [See where a command livesAfter SSH works, ask where a command lives with command -v so you know if nano or python is installed before you chase a missing package. You don't need a software store for this.](<leftover-box-which>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousMake a file runnable](<leftover-box-chmod>) [NextSee where a command lives](<leftover-box-which>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
