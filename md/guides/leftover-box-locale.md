# See language and region

Source: https://labthrift.com/guides/leftover-box-locale
Markdown: https://labthrift.com/md/guides/leftover-box-locale.md

*Notes › / › Faster network › / › See language and region*

[Notes](<./>) / [Faster network](<./#switches>) / See language and region

Written 31 Aug 2026. This is a how-to, not a product card.

# See language and region

After printenv, print language and region with locale so character encoding makes sense. You don't need extra software for this.

[See HOME and PATH](<leftover-box-printenv>) printed login environment. Tonight you check language and region: `locale`. Locale prints LANG and related settings. You are still only practicing in home on the computer. It does not need extra system software, htop, Grafana, or a NAS for this one job.

## Skip until SSH already works

[SSH from the couch](<first-ssh>) should already get you a prompt. If HOME and PATH are what you want, that is [see HOME and PATH](<leftover-box-printenv>). If the clock zone is what you want to set, that is [set the clock to your house](<leftover-box-timezone>). If the clock read is what you want, that is [see what time the computer thinks it is](<leftover-box-date>).

## What this is

`locale` prints language and region. You type `locale`. LANG is the language and region string. Charmap is how characters are encoded. It is not timezone. Timezone sets the clock zone. It is not date. Date reads the clock. It is not printenv. Printenv prints HOME and PATH.

## Practice locale in home

Debian and Ubuntu usually already have `locale`. Don't make apt the job.

## Useful extras, still home only

Optional: LANG only:

`locale LANG`

Optional: character map:

`locale charmap`

Optional: LANG from the environment:

`printenv LANG`

That is printenv, not locale. Printenv is [see HOME and PATH](<leftover-box-printenv>). Skip changing locale tonight. Tonight you take a look.

## What this is not

This is not printenv. That is [see HOME and PATH](<leftover-box-printenv>). It is not timezone. That is [set the clock to your house](<leftover-box-timezone>). It is not date. That is [see what time the computer thinks it is](<leftover-box-date>). It is not cal. That is [see the month on a calendar](<leftover-box-cal>). It is not OS name. That is [see which OS the computer is already running](<leftover-box-os-release>). It is not opening SSH to the internet. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## What next

Need HOME and PATH? [See HOME and PATH](<leftover-box-printenv>). Need the terminal name? [See the terminal name](<leftover-box-tty>). Need the clock? [See what time the computer thinks it is](<leftover-box-date>). Keep SSH on the house network: [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.

## Skip

  * Skip if SSH still fails. Finish [SSH from the couch](<first-ssh>) first.
  * Skip changing locale tonight. Tonight you take a look.
  * Skip timezone, date, cal, and printenv as tonight's job. Those pages already exist.
  * Skip files under `/etc`, SSH folders, or paths you don't own. Practice only in home.
  * Skip `rm -rf`. Careful delete only: [delete a file carefully](<leftover-box-rm>).
  * Skip opening SSH to the internet so you can do this from a coffee shop. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22.



## Sources

[Debian: locale(1)](<https://manpages.debian.org/bookworm/manpages/locale.1.en.html>). [Ubuntu: locale(1)](<https://manpages.ubuntu.com/manpages/noble/man1/locale.1.html>). Official pages only. For the login, see [SSH from the couch](<first-ssh>). For HOME and PATH, see [see HOME and PATH](<leftover-box-printenv>).

## Also on this topic

[SSH from the couchType commands on the computer from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [See HOME and PATHAfter uname, print HOME and PATH with printenv so login environment makes sense. You don't need extra software for this.](<leftover-box-printenv>) [See the terminal nameAfter SSH works, print the terminal name with tty so you know which session you are in. You don't need extra software for this.](<leftover-box-tty>) [See kernel name and architectureAfter id, print kernel name and architecture with uname so you know what kernel is running. You don't need extra software for this.](<leftover-box-uname>) [See user number and groupsAfter whoami, print user number and groups with id so sudo and file ownership make sense. You don't need extra software for this.](<leftover-box-id>) [See the login nameAfter SSH works, print the login name with whoami so home and sudo make sense. You don't need extra login software for this.](<leftover-box-whoami>) [See what time the computer thinks it isAfter SSH works, print the clock with date. You don't need extra software for this.](<leftover-box-date>) [Set the clock to your houseAfter SSH works, set the clock to your house. You don't need extra software for this.](<leftover-box-timezone>) [See the month on a calendarAfter date, print this month as a grid with cal. You don't need extra software for this.](<leftover-box-cal>) [See which OS the computer is already runningAfter SSH works, see which OS the computer is already running. You don't need extra software for this.](<leftover-box-os-release>) [Delete a file carefullyAfter SSH works, delete one file with rm -i. Ask first. Skip rm -rf. You don't need a NAS for this.](<leftover-box-rm>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [PreviousSee HOME and PATH](<leftover-box-printenv>) [NextSee the terminal name](<leftover-box-tty>)

---

*Labthrift Markdown mirror. HTML version linked above.*
