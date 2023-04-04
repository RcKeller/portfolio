---
title: Rapid-React-Redux Boilerplate
subtitle: React w/ flux architecture synced to Firestore
category: Boilerplates
cover: rapid-react-redux.png
source: https://github.com/RcKeller/rapid-react-redux
tags:
  - Web
  - React
  - Firebase
---

Rapid-React-Redux is a simple boilerplate akin to [Create React App](https://github.com/facebook/create-react-app) designed to facilitate rapid development for MVPs and hackathon projects. The idea was to minimize boilerplate and architectural decisions whilst still remaining feature complete with a low maintenance cost.

The boilerplate is strictly client-sided, feature a React application wrapped with a Redux store kept in sync with Firebase. The store keeps track of application state and authentication, which is also handled by firebase. Developers can create new views and components by creating the necessary files and connecting them to the necessary state nodes in Redux, allowing for a very declarative and "as-needed" developer workflow.

I am very open to suggestions on how to improve this project. In the future there will also be a MobX variant (it's another implementation of flux architecture, but uses an observable pattern which is more beginner-friendly and low-concept).
