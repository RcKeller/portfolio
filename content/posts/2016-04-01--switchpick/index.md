---
title: SwitchPick
subtitle: Network Device Cracking
category: Portfolio
cover: switchpick.png
source: https://github.com/RcKeller/SwitchPick
tags:
    - Networking
    - Infrastructure
    - Security
---

This Python software suite automatically identifies, cracks and wipes network devices. Aptly named, it's a lockpick of sorts for network devices, and utilized the built-in features (or vulnerabilities) of vendor products to brute force its way to a state of elevated permissions, after which it wipes the device clean.

This is incredibly useful for network engineers, especially in smaller workplaces. Often times, IT departments with budget constraints have to purchase refurbished or used equipment, which has to be wiped - a process that can take up to 30 minutes. Switchpick automates this procedure and can save hundreds of work hours.

On a low-level, the premise is simple. The program starts listening to serial cable connections on a host machine, sniffing the standard out traffic. If a device-identifying phrase (e.g. brand name, command prompt, etc) is identified, the program begins to breach the device.
