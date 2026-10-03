# Slow down password guesses on SSH

Source: https://labthrift.com/guides/leftover-box-fail2ban
Markdown: https://labthrift.com/md/guides/leftover-box-fail2ban.md

*Notes › / › Faster network › / › Slow down password guesses on SSH*

[Notes](<./>) / [Faster network](<./#switches>) / Slow down password guesses on SSH

Written 26 Aug 2026. This is a how-to, not a product card.

# Slow down password guesses on SSH

After the firewall is on and key login is boring, you can let the computer briefly refuse an address that keeps guessing the password. Skip this on day one. Don't forward port 22.

SSH belongs on the house network. That is [keep the computer on the house network](<leftover-box-house-network>). Don't forward port 22. On a house-only computer, this is optional polish, not a substitute for keeping SSH inside the house. It still helps if someone later opens the router by mistake, or if a phone on the house Wi-Fi keeps hammering a wrong password.

## Skip until ufw works

If [the simple firewall](<leftover-box-ufw>) is not on yet, stop. Allow OpenSSH, then turn on ufw first. Prefer [logging in with a key](<leftover-box-ssh-keys>), then [turning off password login once the key works](<leftover-box-ssh-no-password>), before this polish. If password SSH is still the only login and it is flaky, stop.

## What this changes

fail2ban is software that watches the login log and briefly refuses an address that keeps guessing wrong. It reads the login log. After enough wrong guesses from one address, that address cannot try SSH for a short while. Your laptop key login still works. This is not a new firewall appliance. This is not a reason to open port 22 on the router.

## Install

From your normal computer, [SSH from the couch](<first-ssh>). Then update the package list:

`sudo apt update`

Install fail2ban:

`sudo apt install fail2ban`

On a Debian or Ubuntu computer from [what OS to put on the computer](<what-os-to-pick>), the stock sshd jail is enough for this note.

## Turn it on and check

Turn it on so it starts now and after a reboot:

`sudo systemctl enable --now fail2ban`

Check the SSH jail:

`sudo fail2ban-client status sshd`

You should see the sshd jail active. If sshd is not listed yet, ask for the whole status:

`sudo fail2ban-client status`

Wait a minute and check again. Don't paste a long jail.local essay. Stock defaults are fine for this computer.

## If you ban yourself

Use another device on the house network, or a screen and keyboard on the computer. Unban that address:

`sudo fail2ban-client set sshd unbanip THAT-ADDRESS`

Swap `THAT-ADDRESS` for the number of the laptop or phone that got locked out. SSH stays inside the house, as explained in [keep the computer on the house network](<leftover-box-house-network>). Don't solve this by forwarding port 22.

## What next

If weekly apt is boring, [let the computer apply weekly fixes without you](<leftover-box-unattended>). The honest weekly look is still [keep the computer updated](<leftover-box-updates>). The boundary is still [keep the computer on the house network](<leftover-box-house-network>). Skip a Protectli. Skip opening SSH to the internet.

## Skip

  * Skip this note on day one.
  * Skip this note if ufw is not on.
  * Skip this note if you still need password SSH from many devices and keep locking yourself out.
  * Skip forwarding port 22 on the router.
  * Skip a rack firewall.
  * Skip fail2ban as an excuse to expose SSH.



## Sources

[fail2ban: documentation](<https://www.fail2ban.org/wiki/index.php/Main_Page>). [Debian: fail2ban-client](<https://manpages.debian.org/bookworm/fail2ban/fail2ban-client.1.en.html>). [Debian: fail2ban jail.conf](<https://manpages.debian.org/bookworm/fail2ban/jail.conf.5.en.html>). Official pages only. For the firewall, see [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). For turning off password login, see [turn off password login once the key works](<leftover-box-ssh-no-password>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [See if anyone guessed the passwordBefore you buy a camera or extra login software, peek at failed logins with lastb.](<leftover-box-failed-guesses>) [Let the computer apply weekly fixes without youAfter the weekly two-command habit is boring, you can let the computer apply those same fixes by itself. Skip this until that habit is boring. Don't let it reboot on its own.](<leftover-box-unattended>) [PreviousTurn on a simple firewall without locking yourself out](<leftover-box-ufw>) [NextSee who logged into the computer recently](<leftover-box-last-login>)

---

*Labthrift Markdown mirror. HTML version linked above.*

[A Digifender product](https://digifender.com/) · [Draft terms](https://digifender.com/legal/labthrift/terms) · [Draft privacy policy](https://digifender.com/legal/labthrift/privacy) · [Draft cookie notice](https://digifender.com/legal/labthrift/cookies) · [All draft policies](https://digifender.com/legal/labthrift) · [Legal contact](mailto:legal@digifender.com)
