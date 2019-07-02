---
title: Testing XHR w/ Cypress
subtitle: Official plugin for full XHR spies / stubbing and await() support
category: Portfolio
cover: cypress-unfetch.png
date: 06/06/2019
demo: https://www.npmjs.com/package/@rckeller/cypress-unfetch
source: https://github.com/rckeller/cypress-unfetch
tags:
    - Web
    - Cypress
    - Testing
---

**Update 6/6:** [cypress-unfetch is now official!](https://github.com/cypress-io/cypress-documentation/pull/1750)

[Cypress]() is an end-to-end testing framework that supports stubbing and tracking of XHR, but not other types of network requests made using alternative APIs like `fetch`. I wrote a plugin called `cypress-unfetch`, which applies a reverse polyfill for APIs like `request` and `fetch`, forcing webapps to fall back to standard XHR, which *can* be tracked.

The library also includes the optional `cy.await()` command, which is used to block assertions in test cases until all the network traffic in the background has been resolved. This is useful for low-bandwith environments (e.g. a CI SaaS container), where unresolved network requests can "bleed over" into other test blocks, causing failures. Invoking `cy.await()` in an `afterEach` hook, for example, will guarentee that all tests are idempotent.
