---
title: Hackathon Starter
subtitle: Using CI/CD pipelines and testing as a competitive advantage
category: Boilerplates
cover: hackathon-starter.png
date: 06/07/2019
demo: https://circleci.com/gh/RcKeller/hackathon-starter
source: https://github.com/RcKeller/hackathon-starter
tags:
    - Web
    - Cypress
    - Testing
---

I've been to T-Mobile's hackathons in Bellevue, WA three times now, and each experience has been totally unique. The first time, [my team placed first](https://devpost.com/software/tmobile-hackathon-lw8hkd), but this time we didn't even make it to the final round. After reflecting on my experiences, I've developed a project foundation for success in the future.

## How did we win?

First off, the things that *didn't matter*:
- **Innovation**: Our idea wasn't original - rather, it was old tech solution applied to a new context.
- **Depth of Experience**: We were all students at the time w/o a lot of work experience, and this was our first hackathon.
- **Tech Stack**: We used 3 different programming languages for our backend, frontend, and middleware respectively.

What *did help*:
- **Limiting Scope**: We came up with a realistic concept for a ruthless MVP, and implemented that first before adopting an iterative approach
- **Breadth of Experience**: Each team member had a specialty - frontend, backend, and one member was interested in project management. The latter member was critical to our success because he did user research and prepared a compelling presentation early on.
- **Delegation**: We did planning poker, and stuck with the results. Having developers in opposite corners made them SMEs, and there was no confusion as to who-did-what.

## How did we fail?

Our most recent attempt failed miserably, despite having the same setup, because of...:
- **Overlapping Domains**: Multiple people working on the frontend or backend ended up doubling some of the work completed
- **No Branching**: We worked out of the master branch and ended up with conflicts with upstream for nearly ever push.
- **No CI/CD**: Without a pipeline for at least smoke testing the app, we had no idea what was failing, and where. Deployment also took a lot longer, and couldn't be completed by the deadline.

## How we can improve

Something has been missing from the get-go, and it has nothing to do with the tech used itself. Rather, I'm finding that *our success directly relates to how organized our practices are*. In addition, deferring deployment until the end of the event has cost us a lot of time and made pivoting nearly impossible.

With all this in mind, I made [Hackathon Starter](https://github.com/RcKeller/hackathon-starter), an open-source full-stack project boilerplate. Here's the key points:
- **One Stack**: Javascript for the Frontend and Backend makes context switching easier.
- **Domain-Driven Design**: The app is split up by functional domains, which makes adding and removing key components like an API, background jobs or databases simple.
- **Automatic Scaling and Persistence**: Not only is the app deployed using a persistence solution (`pm2`, but `forever` can be substituted), it also has its own clustering solution that recreates processes that crash. This solves the biggest problem with NodeJS today - because it runs a single process, the app can be blocked by async operations and crashes easily.
- **Automated Smoke Testing**: There are tests for the frontend, backend, and the integration between the two. They're not egregious - rather, they just make sure they can talk to each other.
- **Dynamic CI Runs**: CI jobs determine if they are necessary based on file changes, and automatically halt if they're redundant - saving a lot of time and money.

[You can see example CI runs on CircleCI](https://circleci.com/gh/RcKeller/hackathon-starter). This project is great for the free tier.

I'm excited to use this project as foundation for my next hackathon project!
