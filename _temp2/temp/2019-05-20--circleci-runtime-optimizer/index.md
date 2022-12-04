---
title: Runtime Optimization for CircleCI
subtitle: Analyzing git history to halt redundant CI jobs
category: Portfolio
cover: circleci-runtime-optimizer.png
date: 05/20/2019
demo: https://circleci.com/orbs/registry/orb/rckeller/runtime-optimizer
source: https://github.com/RcKeller/runtime-optimizer
tags:
    - CircleCI
    - DevOps
    - Testing
---

CircleCI is my go-to CI/CD platform these days for personal projects - it's got a [fantastic ecosystem](https://circleci.com/orbs/registry) and can do pretty much everything. The free tier is generous, with an upper ceiling of [1,000](https://circleci.com/pricing/) minutes of runtime per month. If you're like me, you'll burn through this in a week... and then the real bills hit.

You can set [branch filters](https://support.circleci.com/hc/en-us/articles/115015953868-Filter-branches) to only run jobs based on branch prefixes, e.g. `backend/*` branches only run server specs. This is an imperfect solution if you share logic between stacks - regressions can get introduced after copacetic PRs get merged into master. Instead, I found it best to determine what CI runs you need dynamically, based on the files that have changed in your git history.

I developed an orb named `@rckeller/runtime-optimizer` to do exactly that. This package adds the `halt-if-unchanged` command for use at the beginning of CI runs. This command uses your git history to identify files that have been changed and, if there isn't a match for directories you supply, it automatically terminates the job in question. For example, you can define a `backend` job to run every time, but only if changes are detected in `server/` or `integration/`.

### [Example: A basic monorepo](https://circleci.com/orbs/registry/orb/rckeller/runtime-optimizer#usage-simple-monorepo)

This brought my runtime usage down ~80%.

On a side note, this was really fun to write, because I wrote CircleCI jobs to test CircleCI itself and automate the publishing process. I left a lot of comments in the [root config](https://github.com/RcKeller/runtime-optimizer/blob/master/.circleci/config.yml) for anyone interested.
