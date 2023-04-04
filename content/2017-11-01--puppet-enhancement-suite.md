---
title: Puppet Enhancement Suite
subtitle: Enhancing webapps using Userscripts
category: Portfolio
cover: puppet-enhancement-suite.png
source: https://github.com/RcKeller/userscripts
tags:
  - Puppet
  - Web
  - Userscripts
---

Puppet is an amazing automation framework, but adopters experience growing pains due to the lack of idiomatic practices and standards. The best way to deliver quality software is by building quality into the process, and as such, I've decided to address these pain points by building extensions to the Puppet Enterprise Console.

For those unfamiliar, Puppet is an agent-based automation framework. That is to say, a service runs on your endpoints that checks in with your codebase and runs scripts routinely to ensure that it conforms to the "Roles" and "Profiles" it's been assigned. The process involves gathering "Facts" about the machine followed by running scripts against machines with facts that don't match their intended role. For example, if I mark a web server's Profile as PCI compliant and the Puppet Agent finds out that it's using a non-compliant logging server in a routine Fact check, it will run scripts to change the destination server.

The browser extensions I've built hydrate the enterprise console with Fact definitions, use cases, data types and the source of said fact. This data can be updated dynamically through a separate repository or GitHub Gist, allowing the script to update its documentation automatically as the codebase develops.

---

\*Note: Scripts available in the repo for this don't include the core extension, but contain utilities, helpers, and boilerplate related to this project.
