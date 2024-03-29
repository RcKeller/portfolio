---
title: Retail Analytics Dashboard
subtitle: Bespoke retail analytics tools
category: Portfolio
cover: retail-analytics-dashboard.png
tags:
  - Web
  - React
  - Node
  - Javascript
---

In Fall 2017 I assisted my friend Brad with opening a secondhand Lego store, [Bricks and Minifigs](https://bricksandminifigs.com/store/southeverett/). Lego is a complex commodity - prices on sets are very volatile as collectors hunt for pieces, thus there's a constant question of what is more valuable - sets or pieces. Since there is no single source of truth for set prices, the biggest challenge in this market space is finding a way to analyze the market and evaluate the market in real time.

Brick Bridge is a set of market analytics tools built specifically to leverage a variety of different web services, aggregating data about the seller's inventory so they can stay competitive with the market. This was built using React, Redux and NodeJS.

All the API's leveraged by this webapp (such as BrickLink and BrickSet) have unique architecture (SOAP and REST) and have their own distinct schema for inventory. As such, the biggest challenge in making this application was managing a normalized, consistent network state. I overcame this challenge by creating a centralized schema with a series of migration functions that served as middleware to transform API payloads.
