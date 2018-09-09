---
title: Network Topology Automation
subtitle: Auto-Integration of Telecom Equipment
cover: network-topology-automation.png
date: 08/01/2016
tags:
    - Networking
    - Infrastructure
    - Automation
    - Security
---

A Network Auto-Provisioning system developed for UW-IT, capable of automatically configuring and deploying network devices. This software suite iterates over devices once - the first iteration is part of auto-discovery and commits basic security policies, followed by directing the device to an API endpoint that will dynamically generate a configuration. In order to retain a human element to the process, an SSH connection is established with the newly configured device for a network engineer to approve staged changes, adding a human element of QA to the process.
