---
title: Unit Testing w/ Cypress
subtitle: Writing end-to-end and unit tests side-by-side for React apps
category: Portfolio
cover: cypress-react-unit-test.png
date: 01/22/2019
demo: https://github.com/bahmutov/cypress-react-unit-test
source: https://github.com/bahmutov/cypress-react-unit-test/pull/37
tags:
    - Web
    - React
    - Cypress
    - Testing
---

I'm in love with [Cypress](https://www.cypress.io/), an open source end-to-end testing framework based on NodeJS (not Selenium!). So much so, that I decided to expand its functionality to not just encompass e2e testing, but unit testing for JS frameworks like React as well!

Specifically, I added a series of commands for the framework that allows you to mount React components in isolation and test their behavior using both spies and DOM selectors. It's like Jest/Enzyme, but with time-travel debugging, visual output, and more foundational tools like the ability to manage network state out of the box.

More importantly, this lets you use just one testing framework for both e2e and unit tests, significantly reducing the complexity and maintenance cost for your CI/CD pipelines.

I continue to contribute to `cypress-react-unit-test` in preparation for an expanded release. Please reach out to me if you have any questions or feedback!
