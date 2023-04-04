---
title: Service Manager
subtitle: Open Source ITSM Platform
category: Portfolio
cover: itsm-platform.png
demo: http://students.washington.edu/rykeller/crm2/
source: https://github.com/RcKeller/open-desk
tags:
  - Web
  - React
  - Javascript
---

Having worked for several different IT organizations, all of which implement ITIL differently, I've worked with a lot of different service platforms, most of which had serious downsides, e.g:

- **BMC Remedy** requires a consistent connection to its ITSM server, and any outages bring down the entire ticket system.
- **ServiceNow** is essentially a GUI for a bunch of SQL tables, and this is reflected in the design and feel of the app. It also restricts what you can logically do, e.g. I can't see all my incidents and requests in the same view.

I've found that most commercial platforms share a lot of the same characteristics:

#### Shortcomings:

- **Immutable UI**: Users cannot customize their view, or it is very difficult.
- **Multi-page Navigation**: To look up a case, you may have to navigate through 3-5 screens, all with full DOM rendering.
- **Pagination**: Users have to load new frames to keep browsing cases.
- **Severities**: No alerts, views or panels for ongoing severities or outages (they're part of the same case view).
- **Trends**: No way to visualize how "hot" an incident or outage is.
- **Case Grouping**: It's impossible (or very difficult) to group and relate cases to new or ongoing problems.
- **Collaboration**: No embedded chat functions to communicate w/ teams and potentially identify incoming severities.
- **Knowledge Base**: Most platforms have an integrated Knowledge that is difficult to view, often taking the entire screen and closing your case.
- **Integration**: Difficult to implement, often requires a very specific server or interface, closed source and hard to maintain.
- **Viability**: For small businesses, it's practically impossible to afford a service platform and the upkeep.

#### Strengths:

- **Vendor Integration**: Platforms can interface with third party vendors (NCR, CompuCom, etc) and cut tasks on their end.
- **Relationships**: Cases can be related to parents and share their properties. -**History / Breadth**: Can view cases from years ago, or by sub-properties (e.g. computer model, client, location...)
- **Dynamic Queries**: Searches can include rather complex queries and get quite specific.

## OpenDesk - the open source solution

I’ve begun this project as an attempt to build a robust ITSM platform based around high usability, performance, and simple implementation. Ideally, this would be used by small to medium size enterprises of 300 employees or less.

### Current Features (WIP)

- _Single Page WebApp_: The entire application can run in a single webpage, with routing included.
- _Virtualized Data_: All data is loaded, but not rendered, allowing dynamic searching on-the-fly.
  Custom View Users can pin, move, resize and hide columns at will.

### TODO:

- _Serverity Bulletin_: Distinct notifications for new severities.
- _Case Templating_: Open a related ticket to active severities.
- _Online Status_: Listen for disconnection, save changes for push upon re-established connections.
- _Parent-Child Cases_: Tickets need to be assigned/unassigned to parents for severities and recurrent issues.
- _Case Details_: Inline view of case history, escalations, with full CRUD functionality.
- _Case Updates_: Capturing timestamps and data for each case update, inclusion in history.
- _KBA Incorporation_: Integrated KBA that can be viewed alongside the case manager.
- _KBA CRUD_: Users should be able to propose wiki-esque KBA changes.
- _Case Template_: Open a case per related KBA.

### Stretch Goals:

- _Chat_: Integrated team/public chat system or Slack integration
- _DB Hooks_: Config files for easy implementation of Firebase or MongoDB.
- _Cloud Deployment Branch_: Branches stable for release to AWS/Azure/Heroku.

## Technical Stack

- _React.JS_: Rapid view-based development of performant single page applications.
- _ag(nostic)-grid_ for a virtualized table.
- _react-md_ for a performant, completely accessible, css compatible material design UI.
- _SASS Styles_: Stable and based on CSS syntax, making UI kit porting simple.
- _WebPack_: Stable, extensible and well documented.
- _NoSQL_ Data Model (.JSON)
- _Firebase_ config hooks as a baseline.

Redux implementation is up for debate, my concern is it will make the codebase less accessible to inexperienced developers working with nonprofits and startups. It could be a stretch goal once more DB hooks are added. Generally speaking, to keep this project relevant to as many organizations as possible, any libraries incorporated should be “household names” to most web developers.
