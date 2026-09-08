# Wake the computer from the house network

Source: https://labthrift.com/guides/wake-on-lan
Markdown: https://labthrift.com/md/guides/wake-on-lan.md

*Notes › / › Getting started › / › Wake the computer from the house network*

[Notes](<./>) / [Getting started](<./#start>) / Wake the computer from the house network

Written 4 Sep 2026. This is a how-to, not a product card.

# Wake the computer from the house network

Soft-off is fine overnight. Wake the old PC from a laptop or phone on the house network so SSH and Pi-hole come back. You don't need a smart plug for this.

You shut it down on purpose, or the power button put it in soft-off. The wall outlet is still live. A short magic packet on the house network can turn it back on. That trick is Wake-on-LAN. Prefer a cable into the router. Wi-Fi wake is flaky on most old machines. Haven't found its address yet? [Find it on the house network](<find-the-leftover-box>). If you only need it to stay awake with the lid closed, that is [don't let the old laptop sleep](<leftover-box-sleep>), not this note.

## Skip until soft-off is the problem

If the computer answers ping already, you don't need Wake-on-LAN tonight. If ads are back and you are not sure it is even powered, start with [is the computer still on?](<leftover-box-still-on>). If you yanked the power strip, Wake-on-LAN cannot help until power is back. Don't buy a smart plug as the first fix.

## What this is

Soft-off means the computer looks off, but the network chip still sips a little power and listens for a special packet. That packet is a Wake-on-LAN magic packet. Your laptop or phone on the same house network sends it. The computer powers on, boots, and then SSH and Pi-hole come back the usual way. Hard power-off (strip unplugged, PSU switch flipped) kills the listener. Guest Wi-Fi that isolates devices often blocks the packet too.

## What you need

A cable from the computer to the router or switch when you can. The hardware address (MAC) of that ethernet port. Soft-off, not a dead outlet. Write the MAC down once while the machine is still on. On Ubuntu Server or Debian:

`ip link show`

Find the wired interface (often `enp*` or `eth0`). The `link/ether` line is the MAC, six pairs like `aa:bb:cc:dd:ee:ff`. A sticker on the OptiPlex case sometimes has the same number. Need a slower walk through that address? See [see its hardware address](<leftover-box-mac-addr>).

## Turn it on in the BIOS

Reboot. Open the one-time setup menu (Dell often F2, HP Esc then F10, Lenovo F1 or Enter then F1). Look for Wake on LAN, Wake on LAN from S5, or Deep Sleep / ErP. Turn Wake on LAN on. Turn deep sleep / ErP off if that option exists, or the NIC sleeps too hard to listen. Save and exit. You only dig here once. Skip a full BIOS tour for every other setting tonight.

## Turn it on in Linux

While the computer is still awake, install the small tool that talks to the NIC:

`sudo apt update && sudo apt install -y ethtool`

Swap `enp3s0` for your wired interface from `ip link`:

`sudo ethtool -s enp3s0 wol g`

Check that it stuck for this boot:

`ethtool enp3s0 | grep -i wake`

You want `Wake-on: g`. If the line says `d` or refuses the change, the BIOS switch is still off, or that NIC cannot do Wake-on-LAN.

## Make it survive a reboot

`ethtool -s … wol g` often resets after reboot. A tiny oneshot service puts it back. Create the unit:

`sudo tee /etc/systemd/system/wol.service <<'EOF' [Unit] Description=Enable Wake-on-LAN on the wired NIC After=network-online.target Wants=network-online.target [Service] Type=oneshot ExecStart=/sbin/ethtool -s enp3s0 wol g [Install] WantedBy=multi-user.target EOF`

Swap the interface name inside that file if yours is not `enp3s0`. Then:

`sudo systemctl daemon-reload`

`sudo systemctl enable --now wol.service`

Reboot once when you can. Run the `ethtool … | grep -i wake` check again. You want `g` after the reboot too.

## Shut down the polite way

Wake-on-LAN needs a clean soft-off. From the couch:

`sudo shutdown -h now`

That is [shut down without yanking the plug](<leftover-box-shutdown>). Wait until the fans stop. Leave the wall power connected.

## Wake it from a laptop

On another computer on the house network (not Guest Wi-Fi), install a sender. On Ubuntu or Debian:

`sudo apt install -y wakeonlan`

Then send the packet with the MAC you wrote down:

`wakeonlan aa:bb:cc:dd:ee:ff`

On a Mac with Homebrew you can use `wakeonlan` the same way, or a short Python one-liner if you already have Python. On Windows, a small Wake-on-LAN utility that asks for the MAC is enough. Stay on the house network. Don't open a port on the router for this.

## Wake it from a phone

Any simple Wake-on-LAN app that asks for the MAC works on house Wi-Fi. Type the same six pairs. Send once. Wait a minute for boot, then open SSH or check that ads are gone again. Skip apps that want an account or a cloud relay for a first test.

## Check it worked

After you send the packet, wait for the POST beep or the fan spin. From the laptop:

`ping -c 3 192.168.1.50`

Swap in the computer's number. When ping answers, [SSH from the couch](<first-ssh>). If ping never answers, recheck cable, BIOS Wake on LAN, `Wake-on: g`, and that the machine is soft-off rather than unplugged. A laptop on battery-only Wi-Fi often cannot wake; plug ethernet when you can.

## What this is not

This is not a reason to buy a smart plug, a KVM over IP, or a new mini PC. It is not remote wake from a coffee shop. The magic packet stays on the house network. It is also not the fix for a laptop that only slept with the lid closed. That is still [don't let the old laptop sleep](<leftover-box-sleep>).

## What next

Once it wakes, SSH should answer again. If it does not, [when SSH won't connect](<when-ssh-wont-connect>). Confirm the house jobs still run: [after a reboot, check the computer still does its jobs](<leftover-box-after-reboot>). If the address moves after power cycles, reserve it or set a fixed one: [keep the computer on the same address on common routers](<common-router-reservation>), or [give the computer a fixed address when the router won't](<fixed-address-on-pc>). Prefer a cable over Wi-Fi for the listener: [a cable beats Wi-Fi for the old PC](<leftover-box-ethernet>). If you shut it down often, keep the polite shutdown habit: [shut down without yanking the plug](<leftover-box-shutdown>).

## Skip

  * Skip a smart plug as the first wake tool.
  * Skip opening Wake-on-LAN through the router to the internet.
  * Skip Wi-Fi wake on day one when a cable is available.
  * Skip this if the computer stays on all week and never soft-offs.
  * Skip a KVM over IP for a first OptiPlex in the closet.



## Sources

[Debian: ethtool](<https://manpages.debian.org/bookworm/ethtool/ethtool.8.en.html>). [Ubuntu: ethtool](<https://manpages.ubuntu.com/manpages/noble/en/man8/ethtool.8.html>). [Debian: wakeonlan](<https://manpages.debian.org/bookworm/wakeonlan/wakeonlan.1.en.html>). [Kernel: power interface notes](<https://www.kernel.org/doc/Documentation/power/interface.txt>). Official pages only. For the address, see [find it on the house network](<find-the-leftover-box>). For the MAC, see [see its hardware address](<leftover-box-mac-addr>). For soft-off, see [shut down without yanking the plug](<leftover-box-shutdown>).

## Also on this topic

[Is it still on?You left the computer on. This morning ads are back, or SSH hangs. Check if it is awake before you buy anything.](<leftover-box-still-on>) [Don't let the laptop sleepClose the lid. It has to stay awake so SSH and Pi-hole keep working. A desktop can skip this.](<leftover-box-sleep>) [Shut down without yanking the plugWhen you're done for the night, shut it down and let it finish writing files before it powers off. Don't yank the cord.](<leftover-box-shutdown>) [See its hardware addressBefore you reserve its number, write down the sticker-like address the router uses to recognize it.](<leftover-box-mac-addr>) [A cable beats Wi-Fi for the old PCOnce it is doing real work, plug it into the router with a cable. Skip if it is already on a cable.](<leftover-box-ethernet>) [Find it on the house networkThe computer has a number on your house network. You need that number to SSH from the couch. You don't need a new router.](<find-the-leftover-box>) [SSH from the couchType commands on the old PC from your laptop, on the house network. Password login first. Don't open this to the internet.](<first-ssh>) [After a reboot, check the computer still does its jobsThe computer came back up. Confirm SSH, house ad block, and the file share still work before you buy anything.](<leftover-box-after-reboot>) [PreviousIs the computer still on?](<leftover-box-still-on>) [NextShut down without yanking the plug](<leftover-box-shutdown>)

---

*Labthrift Markdown mirror. HTML version linked above.*
