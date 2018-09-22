---
title: "Weaponize.js"
subtitle: Automated Cross-Site Request Forgery (CSRF)
category: Boilerplates
cover: weaponizejs.png
source: https://github.com/RcKeller/WeaponizeJS
tags:
    - Web
    - React
    - NodeJS
    - Security
---

Weaponize.JS is a static site generator that uses [GatsbyJS](https://www.gatsbyjs.org/) (React, Node, and GraphQL) to generate [Cross-Site Request Forgery (CSRF)](http://www.gnucitizen.org/blog/csrf-demystified/) exploits. Target pages have their forms analyzed, and then Weaponize generates a fake webpage that forges form requests that mirror the structure of the target page. This is a quick-and-dirty way of testing CSRF vulnerabilities on a webpage, and could also be used for real exploits.
