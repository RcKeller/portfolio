---
title: Conference Check
subtitle: "1st place, T-Mobile IoT Hackathon 2018" 
category: Portfolio
cover: conference-check.png
demo: https://devpost.com/software/tmobile-hackathon-lw8hkd
source: https://github.com/RcKeller/conference-check
tags:
    - Web
    - React
    - NodeJS
    - IoT
---

Conference Check is a hackathon project by myself and three others:

- [Ben Basinski](https://github.com/bbasinsk)
- [McKaulay Kolakowski](https://github.com/mckaulay)
- [Joseph Tsai](https://www.linkedin.com/in/josephktsai)

---

This project is a full-stack conferencing webapp that integrates directly with RFID scanners / IoT devices to provide a digital experience grounded in the physical world. Our webapp tracks conference room usage with a physical ID card. By inserting the card into an RFID slot while the attendee is using the room, it will turn on the room lights and equipment. The stats connect to a dashboard which shows real-time room usage.

The desired outcome of our project is to improve the efficiency of enterprise conferencing systems. We wanted to support collaboration on the fly, but also enforce the structure of a reservation system. Our solution was to require meeting leaders to confirm their reservations in-person by badging in so the room lights would turn on. However, if attendees fail to show, the room is opened up for walk-in reservations, allowing teams to make use of that underutilized space. If a team scans into an unused and available space, it creates a reservation for them, too!

Tracks meeting room usage with a physical ID card. By inserting the card into the slot while the attendee is using the room, it will turn on the room lights and equipment. The stats connect to a dashboard which shows real-time room usage.

## Technical Stack

- NodeJS backend
- MongoDB database
- Dummy Data Generator
- React, Redux frontend
- Tiny Python client for RFID scanner
- IFTTT Hosted Smart Bulb

---

Small aside note, I was also an intern at the company when I participated, so I was ineligible for the competition component due to CoI. I don't show on the DevPost award page, but you can verify my contributions on GitHub.
