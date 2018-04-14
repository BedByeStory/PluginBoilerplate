# Plugin Development

## Overview

Use the familiar React environment to build connected interactions for the [BedByeStory©](https://bedbyestory.com) platform.
The component will be loaded asynchronously and injected into the [BedByeStory©](https://bedbyestory.com) runtime when users select the interaction.

This guide will walk you through setting up a sandboxed development environment which provides mockable utilities for all expected property and action types. Once set up interactions can be developed leveraging Redux reducers and actions that can be dispatched accross connected peers.

## Getting Started

```
$ git clone https://github.com/BedByeStory/PluginBoilerplate.git my-interaction
$ cd my-interaction
$ npm install
$ npm start
```

## Component

```js
// src/Component.jsx

import React from 'react';
import './index.css';

export default () => (<div className="p-4"></div>);
```

## Reducer

```js
// src/reducer.js

export default function (state = {}, { type } = {}) {
  switch (type) {
    default: return state;
  }
}
```

## Actions

```js
// src/actions.js

export default dispatch => ({
  action() {
    dispatch({
      type: 'ACTION_NAME',
      connected: true,
    });
  },
});
```
