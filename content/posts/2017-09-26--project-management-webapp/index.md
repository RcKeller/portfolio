---
title: IT Project Management Webapp
subtitle: Used to allocate $5 million annaully across 100 project proposals
category: Portfolio
cover: project-management-webapp.png
series: "STF Web App"
next: Business Process Redesign
nexturl: /stf-process-redesign
demo: https://uwstf.org
source: https://github.com/RcKeller/STF-Refresh
tags:
    - Web
    - React
    - NodeJS
    - Development
    - Professionalism
---

The UW Student Technology Fee Committee is an entirely-student run organization that allocates roughly ~~$5~~ $12 million dollars across over a hundred student technology projects annually. Formed by the Washington State Legislature and UW Board of Regents, the STFC is a prime force for driving innovation via the student experience. Per the Open Public Meetings Act, the STFC maintains a high degree of transparency in both operations and engineering practices, and has open sourced their web platform.

When I joined the committee Spring 2017, I worked with the admin team to redesign the committee process based on feedback we had accumulated over the past decade. Our biggest challenges included:

- Addressing large security vulnerabilities and migrating away from depreciated technologies.
- Normalizing a database containing 10 years worth of data, with schema incongruent from year-to-year.
- Redesigning business processes and the application to handle edge cases.

In addressing these challenges, I also identified several key opportunities:

- The proposal process could be modified to include financial compliance and auditing requirements.
- Modifications to the proposal narratives could make them more compelling, leading to increased approval rates.
- Improving user experience would increase engagement, leading to more funded projects.
- Administrative dashboards could be incorporated and lower effort for the admin team.
- Modernizing the technical stack would make the webapp more robust and maintainable.

For these reasons, I decided to develop a new webapp with the [STF Refresh Project](https://github.com/RcKeller/STF-Refresh), a project that has since been completed and is now live at [uwstf.org](https://uwstf.org)! This a MERN (Mongo, Express, React, Node) full stack application that provides more advanced project management features, such as:

- Project management - The ability to create proposals, solicit public and private feedback, and modify the ask as-needed.
- Committee review - Proposals can be voted on, receive awards, and subsequent adjustments to grant funding
- Analytics - Data visualization of expenditures and budget reporting per department, author, or team. Trend reports on the proposal process, including success factors identified in process.

---

# 2018 Update

This project was a massive success and the committee has gone from a $5 million budget to $12 million!

As of June 2018, I have left the committee to pursue an internship with Capital One, but I remain a part of the team as a consultant for the new developer I have trained, Kyle.
