# Plugin Development

## Get Started

```
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

* [Testing](testing.md)

