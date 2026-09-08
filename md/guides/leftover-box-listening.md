# See which doors the computer left open

Source: https://labthrift.com/guides/leftover-box-listening
Markdown: https://labthrift.com/md/guides/leftover-box-listening.md

*Notes › / › Faster network › / › See which doors the computer left open*

[Notes](<./>) / [Faster network](<./#switches>) / See which doors the computer left open

Written 27 Aug 2026. This is a how-to, not a product card.

# See which doors the computer left open

Before you turn on the firewall, ask which ports are already listening.

Before you turn the firewall on (or wider), ask which ports the computer is already listening on. A listening port is a door the computer left open for house programs (SSH is usually 22, DNS for Pi-hole is 53, Samba uses a few share ports). `ss -tuln` prints those doors without needing extra packages.

## Skip until SSH from the couch works

If ping fails and SSH hangs, start with [is the computer still on?](<leftover-box-still-on>) If you have never logged in from the couch, that is [SSH from the couch](<first-ssh>). Prefer this look after the password change and keys are boring: [change the login password](<leftover-box-change-password>), [log in with a key](<leftover-box-ssh-keys>), and [turn off password login once the key works](<leftover-box-ssh-no-password>). This note assumes you can log in from the couch.

## What this is

A look, not a shopping trip. Before [turn on a simple firewall without locking yourself out](<leftover-box-ufw>), see what is already listening so you know which doors the firewall should allow. Don't forward those ports on the router. That boundary is [keep the computer on the house network](<leftover-box-house-network>).

## Ask which doors are open

SSH in from the couch, then run:

`ss -tuln`

Point at the column that says Local Address:Port. Expect OpenSSH on 22. If Pi-hole is installed, expect 53. If a Samba share is up, expect something around 139 and 445. Surprises matter more than memorizing every line. You are not buying a switch for this look.

## Optional: see which program owns the door

If your user can sudo and you want process names next to the ports:

`ss -tulnp`

That form may need `sudo`. Keep it optional. The plain list without process names is enough for the firewall look.

## What the look means

Expected house doors (SSH, maybe DNS, maybe Samba) means you can proceed to [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). Weird public-looking listeners mean stop. Don't open the router. Read [when something broke, look at the log](<leftover-box-read-logs>) and [see if any house jobs failed to start](<leftover-box-failed-units>). Never solve surprises by port-forwarding.

## What next

Firewall: [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). Guess slowdown later: [slow down password guesses on SSH](<leftover-box-fail2ban>). House boundary: [keep the computer on the house network](<leftover-box-house-network>).

## Skip

  * Skip if SSH fails. That is [is the computer still on?](<leftover-box-still-on>) or [SSH from the couch](<first-ssh>).
  * Skip a rack firewall for this look.
  * Skip forwarding port 22 on the router.
  * Skip buying a Protectli.
  * Skip Proxmox tonight. That is [what a VM is, and when you don't need one](<what-is-a-vm>).
  * Skip opening Samba to the internet.



## Sources

[Debian: ss](<https://manpages.debian.org/bookworm/iproute2/ss.8.en.html>) (iproute2). Official pages only. For the firewall, see [turn on a simple firewall without locking yourself out](<leftover-box-ufw>). For the house-network boundary, see [keep the computer on the house network](<leftover-box-house-network>). For guess slowdown later, see [slow down password guesses on SSH](<leftover-box-fail2ban>). For the login, see [SSH from the couch](<first-ssh>).

## Also on this topic

[Turn on a simple firewall without locking yourself outAfter SSH from the couch works, allow OpenSSH, then turn on ufw. The computer stays reachable. Surprise inbound ports don't.](<leftover-box-ufw>) [Slow down password guesses on SSHAfter the firewall is on and key login is boring, you can let the computer briefly refuse an address that keeps guessing the password. Skip this on day one. Don't forward port 22.](<leftover-box-fail2ban>) [Keep the computer on the house networkSSH and Pi-hole belong on the house network. Skip this if you never opened the router settings. Don't forward port 22.](<leftover-box-house-network>) [Turn off password login once the key worksAfter the laptop key login is boring, tell SSH to stop accepting the password. The key is how you get in. A keyboard on the computer is the backup now.](<leftover-box-ssh-no-password>) [PreviousTurn off password login once the key works](<leftover-box-ssh-no-password>) [NextTurn on a simple firewall without locking yourself out](<leftover-box-ufw>)

---

*Labthrift Markdown mirror. HTML version linked above.*
