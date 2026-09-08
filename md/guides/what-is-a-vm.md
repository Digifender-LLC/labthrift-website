# What a VM is, and when you don't need one

Source: https://labthrift.com/guides/what-is-a-vm
Markdown: https://labthrift.com/md/guides/what-is-a-vm.md

*Notes › / › Getting started › / › What a VM is*

[Notes](<./>) / [Getting started](<./#start>) / What a VM is

[Getting started](<./#start>) · **9 of 9**

Written 24 Aug 2026. This is a how-to, not a product card.

# What a VM is, and when you don't need one

A pretend computer inside the old PC. Useful later, when you want to try something without breaking Pi-hole. You don't need one this weekend.

The old PC is already a computer. You can SSH in. Maybe ads are blocked. Maybe photos live in a share. A VM is not the next install. It is an idea for later.

## What this is

A virtual machine, a VM, is a pretend computer running inside this one. It has its own OS, its own name, its own files. If you break the pretend one, the real computer (and Pi-hole, and the share) keep running.

You already did the real work. [SSH from the couch](<first-ssh>) works. Maybe [Pi-hole](<first-useful-service>) is answering names. Maybe a [share](<first-file-share>) holds photos. None of that needs a pretend computer.

## Why people want one

A second OS to try. A messy app in a box you can delete. Experiments kept off the house services. Those are real jobs. They are later jobs.

## Why you wait

An old OptiPlex with 8 GB of memory is already busy if Pi-hole and a share are on it. Each VM wants its own slice of memory. Day-one VMs are how the house internet dies at dinner.

## When it is time

You have a reason to try something that could break this computer, and it has spare memory. 16 GB is a better starting point for VMs. Check the chip first: [see if the computer can run a pretend computer](<leftover-box-virt>). Until then, skip it.

## Two later paths

Path| What that means  
---|---  
Stay on Debian or Ubuntu| The OS already on this computer. Later you can add one VM with virt-manager, or just keep using the real machine. Default: keep using the real machine.  
Reinstall as Proxmox| Only if the whole job is many pretend computers. That is a fresh install, not a package on top of Pi-hole. See [what OS to put on it](<what-os-to-pick>).  
  
Don't dual-purpose a Pi-hole box as a hypervisor this month.

You don't buy a second computer for this. You don't buy an N100 to have a hypervisor.

## What next

Leave the computer alone. If you actually want to spend, [used office gear](<used-vs-new>) is later. A [tiny computer you can leave on](<n100-mini-pc>) is later too.

## Skip

  * Skip installing Proxmox tonight.
  * Skip Kubernetes.
  * Skip Docker Swarm.
  * Skip nested virtualization.
  * Skip GPU passthrough.
  * Skip buying RAM before you have a reason.
  * Skip wiping the Pi-hole box to "do it right."



## Sources

A plain explainer. Later reading, official pages only: [Debian wiki: system virtualization](<https://wiki.debian.org/SystemVirtualization>). [Proxmox VE Administration Guide](<https://pve.proxmox.com/pve-docs/pve-admin-guide.html>). For the OS choice, see [what OS to put on it](<what-os-to-pick>). For the backup you already have, see [a backup of the house folder](<first-backup>). For the house ad block, see [the first useful thing](<first-useful-service>).

## Also on this topic

[Run a local chat on the old PCInstall Ollama, pull a small model, chat over SSH. Stays on the house network. CPU is fine for a first try. Don't buy a GPU this weekend.](<local-chat-on-the-pc>) [See if the computer can run a pretend computerBefore you buy a tiny computer for Proxmox, check whether the computer already has the CPU feature for VMs.](<leftover-box-virt>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old computer. You don't need a NAS for this.](<first-backup>) [What OS to put on itDebian or Ubuntu Server if you can dedicate the old PC. Leave Windows if you still use the laptop as a laptop.](<what-os-to-pick>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousA backup of the house folder](<first-backup>) [NextWhen used office gear is a gift](<used-vs-new>)

---

*Labthrift Markdown mirror. HTML version linked above.*
