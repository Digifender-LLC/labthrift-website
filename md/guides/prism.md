# Browse the house photos with PhotoPrism

Source: https://labthrift.com/guides/prism
Markdown: https://labthrift.com/md/guides/prism.md

*Notes › / › Getting started › / › Browse the house photos with PhotoPrism*

[Notes](<./>) / [Getting started](<./#start>) / Browse the house photos with PhotoPrism

Written 4 Oct 2026. This is a how-to, not a product card.

# Browse the house photos with PhotoPrism

PhotoPrism (Prism, for short) is the lighter photo path. It reads the photo folder you already copy into and gives you a timeline, search and a map in the browser. One container plus a database. House network only.

Already copying the camera roll to the house share? That is the folder Prism reads: [save phone photos to the house share](<phone-photos-to-share>). Want automatic phone upload, albums for each person and face search on day one? That is the bigger stack: [back up phone photos with Immich](<immich>).

## Is this the right one?

Pick Prism if the files are the library and you want a nicer way to browse them. Prism leaves your photos where they are. It keeps its thumbnails, settings and database in its own folder.

This note runs Prism read-only. It can look at the house share but never change it. New photos keep arriving the way they do now, through the share.

## Before you start

  * An old PC that stays on, running Debian or Ubuntu Server: [your first weekend](<first-weekend>).
  * SSH from the couch: [SSH from the couch](<first-ssh>).
  * A house share with photos in it: [a file share](<first-file-share>) and [save phone photos to the house share](<phone-photos-to-share>).
  * A fixed address for the PC: [keep the same address](<leftover-box-dhcp-reservation>).
  * At least 2 CPU cores, 3 GB of RAM and 4 GB of swap. That is PhotoPrism's own minimum.


Check memory, swap and disk from SSH:

`free -h`

`df -h /srv/share`

The Swap line should say at least 4.0G. Thumbnails need room on the computer's own disk. Keep Prism's folder there, not on a USB stick or a network share.

## Install Docker

Download Docker's script, read it, then run it:

`curl -fsSL https://get.docker.com -o ~/get-docker.sh`

`less ~/get-docker.sh`

`sudo sh ~/get-docker.sh`

Check that Compose answers with a version number:

`sudo docker compose version`

## Get the compose file

`mkdir ~/photoprism && cd ~/photoprism`

`wget https://dl.photoprism.app/docker/compose.yaml`

`nano compose.yaml`

PhotoPrism keeps all its settings in this one file. There is no separate .env. Change these lines, then save with Ctrl+O, Enter, Ctrl+X:

  * `PHOTOPRISM_ADMIN_PASSWORD`: a real password, 8 characters or more. The default is `insecure`.
  * `PHOTOPRISM_SITE_URL`: the PC's address, like `"http://192.168.1.50:2342/"`.
  * `PHOTOPRISM_DATABASE_PASSWORD` and `MARIADB_PASSWORD`: the same new random password in both places. Change `MARIADB_ROOT_PASSWORD` too.
  * `PHOTOPRISM_READONLY`: `"true"`, so Prism never moves or deletes anything in the house share.
  * Under `volumes:`, change `~/Pictures:/photoprism/originals` to the share, like `/srv/share:/photoprism/originals`. Leave `./storage:/photoprism/storage` alone.


If a password contains a `$`, write it as `$$`. Keep the leading spaces exactly as they are. The file cares about indentation.

Set the passwords before the first start. The database keeps its first password, and changing it in the file later does nothing.

## First start

`sudo docker compose up -d`

`sudo docker compose ps`

The first start downloads the images. Wait until both `photoprism` and `mariadb` say `Up`. If the page won't load, read the log: `sudo docker compose logs photoprism --tail 50`.

## Sign in from a laptop

On house Wi-Fi, open `http://192.168.1.50:2342`, using your own address. Sign in as `admin` with the password you set. Don't know the address? [Find it on the house network](<find-the-leftover-box>).

Forgot the password after the first start? Editing the file won't help. Run `sudo docker compose exec photoprism photoprism passwd admin` in `~/photoprism`.

## Index the house photos

Go to Library, then Index, and press Start. Prism reads every photo in the share and makes thumbnails in its own folder. On an old PC, the first pass over a big folder can take hours. Let it run overnight and watch the Logs tab if you're curious.

When new photos land in the share later, go back to Library and press Start again. Only the new files get read.

## Open it on a phone

On the same house Wi-Fi, open `http://192.168.1.50:2342` in the phone's browser and sign in. Browse, search and the map all work there. Add it to the home screen from the browser's share menu if you want an icon.

The phone still adds photos the old way, by copying the camera roll to the share: [save phone photos to the house share](<phone-photos-to-share>). Then index again. Read-only mode turns off Prism's own uploads and WebDAV sync. That is on purpose for a first install.

## Keep it on the house network

Don't forward port 2342 on the router. PhotoPrism's own docs say a server outside the home needs HTTPS in front of it. That is a different project. Not this weekend.

## Backups

Your photos are still the house share, and [a backup of the house folder](<first-backup>) already copies them. Prism adds its own `storage` folder in `~/photoprism`, and it writes a database dump into `storage/backup` every day. Copy that folder too so you don't have to re-index:

`sudo rsync -a ~/photoprism/storage/ /mnt/backup/photoprism-storage/`

## Updates

Read the release notes first. Then, in `~/photoprism`:

`sudo docker compose pull && sudo docker compose up -d`

## Skip

  * Skip opening PhotoPrism to the internet.
  * Skip turning off read-only mode until you know what Prism would change.
  * Skip WebDAV sync apps until read-only mode has earned its keep.
  * Skip running Prism and Immich against the same folder on day one. Pick one.
  * Skip a paid membership until the free version has been useful for a month.



## Sources

[PhotoPrism system requirements](<https://docs.photoprism.app/getting-started/>). [PhotoPrism Docker Compose setup](<https://docs.photoprism.app/getting-started/docker-compose/>). [PhotoPrism backups](<https://docs.photoprism.app/user-guide/backups/>). [PhotoPrism first steps](<https://docs.photoprism.app/user-guide/first-steps/>). [Docker Engine install script](<https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script>). Official pages only. For the bigger photo stack, see [back up phone photos with Immich](<immich>).

## Also on this topic

[Back up phone photos with ImmichRun Immich on the old PC with Docker Compose. One phone uploading on house Wi-Fi, then disk headroom and a backup. House network only.](<immich>) [Save phone photos to the house shareCopy camera-roll photos from an iPhone or Android onto the house folder on the old PC. House Wi-Fi only. You don't need a NAS app or iCloud for this.](<phone-photos-to-share>) [A backup of the house folderA second copy of the house folder, on a USB disk you already have, or on another old PC. You don't need a NAS for this.](<first-backup>) [PreviousBack up phone photos with Immich](<immich>) [NextKeep a lab plan with a passkey, not an email](<lab-plan-passkeys>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
