# See kernel name and architecture

Source: https://labthrift.com/guides/leftover-box-uname
Markdown: https://labthrift.com/md/guides/leftover-box-uname.md

*Notes › / › Faster network › / › See kernel name and architecture*

[Notes](<./>) / [Faster network](<./#switches>) / See kernel name and architecture

Written 31 Aug 2026. This is a how-to, not a product card.

# See kernel name and architecture

After id, print kernel name and architecture with uname so you know what kernel is running. You don't need extra software for this.

[See user number and groups](<leftover-box-id>) printed uid, gid, and groups. Tonight you check the kernel name and architecture: `uname`. Uname prints the kernel. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If user number and groups are what you want, that is [see user number and groups](<leftover-box-id>). If OS name (Debian or Ubuntu) is what you want, that is [see which OS the computer is already running](<leftover-box-os-release>). If a hostname is what you want, that is [give the computer a name that sticks](<leftover-box-hostname>). If hardware is what you want, that is [see what computer you already have](<leftover-box-model>).

## What this is

`uname` prints kernel name. You type `uname`. Default print is the kernel name, often Linux. `-r` is kernel release. `-m` is architecture (x86_64, aarch64). `-a` is a longer dump. It is not OS name. OS name is `/etc/os-release`. It is not hostname. Hostname is the name on the house network.

## Practice uname in home

SSH in. Make sure home is where you sit:

`pwd`

You want a path that ends in your login name. If not:

`cd ~`

Ask for kernel name:

`uname`

You want a short name, often Linux, then the prompt back. That is enough for tonight. Practice only in home.

Debian and Ubuntu usually already have `uname`. Don't make apt the job. If `uname` is missing:

`sudo apt install coreutils`

Then stop. That install is not the lesson.

## Useful extras, still home only

Kernel release:

`uname -r`

Architecture:

`uname -m`

Optional longer dump:

`uname -a`

Don't make `-a` required. You can stop at `uname`.

## What this is not

This is not OS name. That is [see which OS the computer is already running](<leftover-box-os-release>). It is not hostname. That is [give the computer a name that sticks](<leftover-box-hostname>). It is not hardware. That is [see what computer you already have](<leftover-box-model>). It is not worker count. That is [see how many workers the computer already has](<leftover-box-cpu>). It is not a VM feature. That is [see if the computer can run a pretend computer](<leftover-box-virt>). It is not printenv. That is [see HOME and PATH](<leftover-box-printenv>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need HOME and PATH? [See HOME and PATH](<leftover-box-printenv>). Need user number and groups? [See user number and groups](<leftover-box-id>). Need OS name? [See which OS the computer is already running](<leftover-box-os-release>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip OS name, hostname, hardware, CPU, and virt as tonight's job. Those pages already exist.
  * Skip treating uname as the distro name. Distro name is os-release.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: uname(1)](<https://manpages.debian.org/bookworm/coreutils/uname.1.en.html>). [Ubuntu: uname(1)](<https://manpages.ubuntu.com/manpages/noble/man1/uname.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For OS name, see [see which OS the computer is already running](<leftover-box-os-release>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See user number and groupsAfter whoami, print user number and groups with id so sudo and file ownership make sense. You don't need extra software for this.](<leftover-box-id>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See which OS the computer is already runningAfter SSH works, see which OS the computer is already running. You don't need extra software for this.](<leftover-box-os-release>) [Give the computer a name that sticksPing and SSH are easier if the computer has a short name. lab works. Set it so the name survives a reboot.](<leftover-box-hostname>) [See what computer you already haveAfter SSH works, see what computer you already have. You don't need extra software for this.](<leftover-box-model>) [See how many workers the computer already hasAfter SSH works, see how many workers the computer already has. You don't need extra software for this.](<leftover-box-cpu>) [See if the computer can run a pretend computerAfter SSH works, see if the computer can run a pretend computer. You don't need extra software for this.](<leftover-box-virt>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [See HOME and PATHAfter uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee user number and groups](<leftover-box-id>) [NextSee HOME and PATH](<leftover-box-printenv>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
