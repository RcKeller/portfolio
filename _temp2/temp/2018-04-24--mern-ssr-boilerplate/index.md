---
title: MERN SSR Boilerplate
subtitle: "Mongo, Express, React, Node - Homemade SSR"
category: Boilerplates
cover: mern-ssr-boilerplate.png
source: https://github.com/RcKeller/MERN-SSR-Boilerplate
tags:
    - Web
    - React
    - NodeJS
    - IoT
---

MERN (Mongo, Express, React, Node) Boilerplate is one of my two primary boilerplates, this one featuring a homegrown [Server Side Rendering](https://reactjs.org/docs/react-dom-server.html) (SSR) solution.

For applications requiring high performance, SEO, state prefetching and other optimization middlewares, React is best served when initially rendered on the server. This gives you stronger control over flow of execution, the ability to prefetch and cache data, and full control over state management.

This boilerplate is feature-complete and offers an excellent developer experience, including a hot-reloading frontend and daemon watching for backend changes. Bundles are minified for production and support CSS modules. Experimental features and import/export syntax are supported on the server side - both front and back end code are transpiled. Authentiation via Google Oauth and Passport.js is supported.

I highly recommend this boilerplate for use cases requiring complex build infrastructure, routing, and state management. For cases that require lower maintenance costs and more extensibility, check out my [NextJS-based Boilerplate](/nextjs-boilerplate/), which has a similar value proposition but less overhead by merit of abstracting away the implementation of Webpack and SSR.