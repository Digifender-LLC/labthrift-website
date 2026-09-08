# See if the computer can run a pretend computer

Source: https://labthrift.com/guides/leftover-box-virt
Markdown: https://labthrift.com/md/guides/leftover-box-virt.md

*Notes › / › Small computers › / › See if the computer can run a pretend computer*

[Notes](<./>) / [Small computers](<./#mini-pcs>) / See if the computer can run a pretend computer

Written 27 Aug 2026. This is a how-to, not a product card.

# See if the computer can run a pretend computer

Before you buy a tiny computer for Proxmox, check whether the computer already has the CPU feature for VMs.

A pretend computer inside the computer is a VM. You don't need one this weekend. That idea is [what a VM is, and when you don't need one](<what-is-a-vm>). Before you shop for a quiet mini just to run Proxmox, ask whether the computer you already have can even do that job. Worker count is a different look: [see how many workers the computer already has](<leftover-box-cpu>). Total memory size is [see how much memory the computer already has](<leftover-box-ram>). Memory room is [see if the computer still has free memory](<leftover-box-free-memory>).

## Skip until SSH works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after the computer is doing real work, before you shop: [start with what you already have](<start-with-what-you-have>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. You are asking whether the computer chip already has the feature that lets it run a pretend computer. Intel calls that feature VT-x (the flag is `vmx`). AMD calls it AMD-V (the flag is `svm`). You are not installing Proxmox tonight. You are not buying an N100 for this look.

## Ask for the virtualization flag

SSH in from the couch, then run:

`grep -E 'vmx|svm' /proc/cpuinfo | head -1`

Any line means the computer chip can do VMs. `vmx` is Intel. `svm` is AMD. No line means the feature is off, missing, or the computer is too old for this job. Don't buy a mini PC tonight just because the line is blank. First check the computer BIOS for a virtualization switch, then decide later.

## Optional count

If you want a number instead of one sample line:

`grep -cE 'vmx|svm' /proc/cpuinfo`

That prints how many times the flag appears (often once per worker). Zero means no. A positive number means yes. Keep this light. Don't install extra tools for this look.

## If the answer is yes

You still don't need a VM this weekend. House ad block and a file share stay on the real the computer. When you actually want a pretend computer later, start with [what a VM is, and when you don't need one](<what-is-a-vm>). Spare memory matters more than the flag alone: [see if the computer still has free memory](<leftover-box-free-memory>). Skip wiping Pi-hole to "do it right."

## If the answer is no

A later mini that can run Proxmox is [a tiny computer you can leave on](<n100-mini-pc>), when the computer is actually in the way. Don't buy one this morning because `grep` printed nothing. Confirm BIOS first. Worker count still helps you decide whether the computer is enough without VMs: [see how many workers the computer already has](<leftover-box-cpu>).

## What next

Leave it. The VM idea stays [what a VM is, and when you don't need one](<what-is-a-vm>). Worker count stays [see how many workers the computer already has](<leftover-box-cpu>). Total memory size stays [see how much memory the computer already has](<leftover-box-ram>). The computer name is [see what computer you already have](<leftover-box-model>). The first rule stays [start with what you already have](<start-with-what-you-have>). The later buy is [a tiny computer you can leave on](<n100-mini-pc>), when you actually need it.

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip installing Proxmox tonight because the flag printed.
  * Skip buying an N100 because `grep` printed nothing, until you checked BIOS.
  * Skip nested virtualization, GPU passthrough, and Kubernetes.
  * Skip a NAS for this look.



## Sources

[Linux kernel: virtualization](<https://www.kernel.org/doc/html/latest/virt/index.html>). [Debian wiki: system virtualization](<https://wiki.debian.org/SystemVirtualization>). [Debian: grep](<https://manpages.debian.org/bookworm/grep/grep.1.en.html>). Official pages only. For the VM idea, see [what a VM is, and when you don't need one](<what-is-a-vm>). For worker count, see [see how many workers the computer already has](<leftover-box-cpu>). For memory room, see [see if the computer still has free memory](<leftover-box-free-memory>). For the first rule, see [start with what you already have](<start-with-what-you-have>). A later mini: [a tiny computer you can leave on](<n100-mini-pc>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[What a VM is, and when you don't need oneA pretend computer inside the computer. Useful later, when you want to try something without breaking Pi-hole. You don't need one this weekend.](<what-is-a-vm>) [See how many workers the computer already hasBefore you buy a tiny computer, check how many workers the computer already has.](<leftover-box-cpu>) [See if the computer still has free memoryThe computer feels slow. Check free memory before you buy a new mini PC.](<leftover-box-free-memory>) [See what computer you already haveBefore you buy a tiny computer, check what computer you already have.](<leftover-box-model>) [See how big the disk already isBefore you buy a tiny computer or a NAS, check how big the disk already is.](<leftover-box-disk>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [A tiny computer you can leave onDon't buy one of these first. Use the old laptop, or a retired OptiPlex from Marketplace. These quiet little PCs are the later buy, when you know you will leave a box on and you want it small and silent.](<n100-mini-pc>) [PreviousSee how much memory the computer already has](<leftover-box-ram>) [NextSee what computer you already have](<leftover-box-model>)

---

*Labthrift Markdown mirror. HTML version linked above.*
