# Run a local chat on the old PC

Source: https://labthrift.com/guides/local-chat-on-the-pc
Markdown: https://labthrift.com/md/guides/local-chat-on-the-pc.md

*Notes › / › Getting started › / › Run a local chat on the old PC*

[Notes](<./>) / [Getting started](<./#start>) / Run a local chat on the old PC

Written 4 Sep 2026. This is a how-to, not a product card.

# Run a local chat on the old PC

Install Ollama on the old PC, pull a small model, and chat from SSH. Answers stay on the house network. CPU is fine for a first try. Don't buy a GPU this weekend.

Need a computer that stays on first? That is [your first weekend](<first-weekend>). Prefer Debian or Ubuntu Server: [what OS to put on it](<what-os-to-pick>). This note is the short path to a house chat that does not send your prompts to a cloud account.

## Skip until you have RAM and disk

Check memory and free disk before you pull a model. From SSH:

`free -h`

`df -h ~`

Aim for about 8 GB of RAM for a small 1B–3B model, and a few free gigabytes on disk for the download. 4 GB boxes can still try the 1B tag, slowly. If the disk is already full of photos, park the share on USB first: [put the house folder on a USB disk](<house-folder-on-usb>).

## What this is

Ollama is a small installer that downloads chat models and runs them on the computer. You talk to it in the terminal. No API key. No cloud account. The model files live on this disk. A fancy web UI can wait.

## Install Ollama

On Debian or Ubuntu Server, the official install script puts the binary in place and sets up a service:

`curl -fsSL https://ollama.com/install.sh | sh`

Prefer to read the script before piping it? Download it, open it, then run it:

`curl -fsSL https://ollama.com/install.sh -o ~/install-ollama.sh`

`less ~/install-ollama.sh`

`bash ~/install-ollama.sh`

Check that the service is up:

`ollama -v`

`systemctl is-active ollama`

You want a version number and `active`.

## Pull a small model

Start tiny. Llama 3.2 at 1B is the polite first download on an old OptiPlex:

`ollama pull llama3.2:1b`

If you have about 8 GB of RAM free and a little patience, the default 3B tag is a better chat:

`ollama pull llama3.2`

List what landed:

`ollama list`

## Chat from SSH

Run the model you pulled:

`ollama run llama3.2:1b`

Or for the 3B tag:

`ollama run llama3.2`

Type a short question. Wait. On CPU this can take a while for the first reply while the model loads. Type `/bye` to leave.

One-shot prompt without the interactive loop:

`ollama run llama3.2:1b "Explain DHCP in two sentences."`

## Keep it on the house network

By default Ollama listens on the computer itself. That is what you want for a first weekend: chat over SSH, not over the open internet. Don't forward port 11434 on the router. Don't put this on a public VPS. The house share and Pi-hole notes use the same rule: house network only.

If you later want a browser UI on the LAN, that is a different job. Skip it tonight.

## What this is not

This is not ChatGPT in the cloud. Small local models guess more and know less. It is not a reason to buy an RTX card, a Mac Studio, or a new N100 this weekend. It is not a second Pi-hole. Leave the ad block alone while you experiment.

## What next

If the computer feels tight on RAM while a model is loaded, see [how much memory is free](<leftover-box-free-memory>) and [what's busy](<leftover-box-whats-busy>). If you want a pretend second computer later so experiments can't break Pi-hole, that is [what a VM is](<what-is-a-vm>). A tiny always-on PC is still later: [a tiny computer you can leave on](<n100-mini-pc>).

## Skip

  * Skip buying a GPU for this first chat.
  * Skip 7B+ models until you have RAM to spare and time to wait.
  * Skip Open WebUI, Docker stacks, and “AI PC” bundles on day one.
  * Skip exposing Ollama to the internet.
  * Skip replacing Pi-hole or the file share with an AI box.



## Sources

[Ollama Linux install](<https://docs.ollama.com/linux>). [Ollama library: llama3.2](<https://ollama.com/library/llama3.2>). Official pages only. For the install weekend, see [your first weekend](<first-weekend>). For OS choice, see [what OS to put on it](<what-os-to-pick>).

## Also on this topic

[What a VM is, and when you don't need oneA pretend computer inside the old PC. Useful later, when you want to try something without breaking Pi-hole. You don't need one this weekend.](<what-is-a-vm>) [Your first weekendInstall the OS, name it, and reach it from the couch. Don't buy anything this weekend.](<first-weekend>) [What OS to put on itDebian or Ubuntu Server if you can dedicate the old PC. Leave Windows if you still use the laptop.](<what-os-to-pick>) [A tiny computer you can leave onBuy this later. An old laptop or a Marketplace OptiPlex is the first box.](<n100-mini-pc>) [See how much memory is freeBefore you blame the computer or buy RAM, see how much memory is free right now.](<leftover-box-free-memory>) [Start with what you already haveDon't buy anything yet. Old laptop first, or a retired OptiPlex from Marketplace.](<start-with-what-you-have>) [PreviousWhat a VM is](<what-is-a-vm>) [NextA tiny computer you can leave on](<n100-mini-pc>)

---

*Labthrift Markdown mirror. HTML version linked above.*
