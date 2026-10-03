# Back up phone photos with Immich

Source: https://labthrift.com/guides/immich
Markdown: https://labthrift.com/md/guides/immich.md

*Notes › / › Getting started › / › Back up phone photos with Immich*

[Notes](<./>) / [Getting started](<./#start>) / Back up phone photos with Immich

Written 3 Oct 2026. This is a how-to, not a product card.

# Back up phone photos with Immich

Immich is a photo library you run yourself. This weekend: Docker Compose on the old PC, the web page open, and one phone uploading on house Wi-Fi. Not a full move off Google Photos or iCloud yet.

Need a computer that stays on first? That is [your first weekend](<first-weekend>). Happy just copying the camera roll into a folder? That still works: [save phone photos to the house share](<phone-photos-to-share>). Immich is the next step up, when you want a timeline, albums and automatic upload from the phone.

## Skip until you have RAM and disk

Immich asks for at least 6 GB of RAM (8 GB is comfortable) and 2 CPU cores. A 4 GB box can run it only with the machine-learning features turned off. From SSH:

`free -h`

`df -h`

Photos need room, and Immich adds about 10–20% on top for thumbnails and converted video. If the system disk is small, put the photos on a USB disk first: [put the house folder on a USB disk](<house-folder-on-usb>). Keep the database on the computer's own disk, not a network share.

Debian or Ubuntu Server is the easy path: [what OS to put on it](<what-os-to-pick>). Immich's own docs warn that Windows, macOS and Docker inside a Proxmox LXC are harder.

## Install Docker

Immich runs as a few containers. Docker's own script installs Docker Engine and the Compose plugin on Debian or Ubuntu. Download it, read it, then run it:

`curl -fsSL https://get.docker.com -o ~/get-docker.sh`

`less ~/get-docker.sh`

`sudo sh ~/get-docker.sh`

Check that both parts answer:

`sudo docker version`

`sudo docker compose version`

You want two version numbers. The command is `docker compose` with a space. The old `docker-compose` with a dash is not supported by Immich.

## Get Immich's files

Make a folder for the two files Immich needs, and download the ones that match the current release:

`mkdir ~/immich-app && cd ~/immich-app`

`wget -O docker-compose.yml https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml`

`wget -O .env https://github.com/immich-app/immich/releases/latest/download/example.env`

Open the settings file:

`nano .env`

Change three lines. `UPLOAD_LOCATION` is where photos go: a path on the big disk, like `/srv/photos/immich`. `DB_PASSWORD` should be a long random mix of letters and numbers, no symbols or spaces. Uncomment `TZ` and set your time zone, like `America/Chicago`. Leave `DB_DATA_LOCATION` on the computer's own disk. Save with Ctrl+O, Enter, Ctrl+X.

## Start it

`sudo docker compose up -d`

The first start downloads a few gigabytes. Check on it:

`sudo docker compose ps`

Wait until the containers say `healthy`. If one keeps restarting, read its log: `sudo docker compose logs immich-server --tail 50`.

## Open the web page

From a laptop on house Wi-Fi, open `http://` plus the computer's address and `:2283`, for example `http://192.168.1.50:2283`. Don't know the address? [Find it on the house network](<find-the-leftover-box>). Reserve it on the router so it doesn't move: [keep the same address](<leftover-box-dhcp-reservation>).

The first account you create is the admin. Use a real password. Write it down somewhere that is not the old PC.

## Point one phone at it

Install the Immich app from the App Store or Google Play. For the server URL, type the same `http://address:2283`. Log in. Open the backup screen (the cloud icon), pick the camera album, and turn backup on. Take one test photo and watch it show up on the web page.

Uploads work? That is the weekend. Leave the old photos for another night. Don't delete anything from the phone yet.

## Keep it from filling the disk

Check the photo disk once a week for the first month:

`df -h /srv/photos`

Use your own `UPLOAD_LOCATION` path. If photos share the system disk and it passes 80%, move them before it fills: [when the house disk is full](<when-house-disk-full>).

## Back up Immich itself

The phone uploading to Immich is not a backup. It is one copy on the old PC. Immich keeps the photo files and a database that remembers albums, people and who uploaded what. You need both.

Immich already writes a database dump every night into `backups` inside `UPLOAD_LOCATION` and keeps the last 14. So one copy of the whole `UPLOAD_LOCATION` folder to the backup USB covers both:

`sudo rsync -a --delete /srv/photos/immich/ /mnt/backup/immich/`

Same USB and same rule as [a backup of the house folder](<first-backup>). Run it after the nightly dump, or put it on the same timer as the house folder.

## One more person

If someone else in the house will upload, make them their own account: Administration, Users, Create user. Share albums between accounts. One giant admin pile gets messy fast.

## Keep it on the house network

Don't forward port 2283 on the router. Don't put Immich on a public VPS this weekend. Photos from away can wait until uploads at home are boring. When you want that, read [SSH from away](<ssh-from-away>) first; the same no-open-ports idea applies.

## Updates

Immich moves fast and some releases need a change to the two files. Read the release notes before you update. Then, in `~/immich-app`:

`sudo docker compose pull && sudo docker compose up -d`

## Skip

  * Skip opening Immich to the internet.
  * Skip importing ten years of Google Photos on the first night.
  * Skip deleting photos from the phone until the backup USB has a copy.
  * Skip putting the database on a NAS or network share.
  * Skip buying a GPU for face search. The CPU is fine.



## Sources

[Immich requirements](<https://docs.immich.app/install/requirements>). [Immich Docker Compose install](<https://docs.immich.app/install/docker-compose>). [Immich backup and restore](<https://docs.immich.app/administration/backup-and-restore>). [Docker Engine install script](<https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script>). Official pages only. For the folder-only path, see [save phone photos to the house share](<phone-photos-to-share>).

## Also on this topic

[Save phone photos to the house shareCopy camera-roll photos from an iPhone or Android onto the house folder on the old PC. House Wi-Fi only. You don't need a NAS app or iCloud for this.](<phone-photos-to-share>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [Put the house folder on a USB diskMove the house share onto a USB disk that stays plugged into the old PC so photos don't fill the system drive. You don't need a NAS for this.](<house-folder-on-usb>) [Run a local chat on the old PCInstall Ollama, pull a small model, chat over SSH. Stays on the house network. CPU is fine for a first try. Don't buy a GPU this weekend.](<local-chat-on-the-pc>) [PreviousRun a local chat on the old PC](<local-chat-on-the-pc>) [NextKeep a lab plan with a passkey, not an email](<lab-plan-passkeys>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
