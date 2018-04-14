import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Wrapper from './Wrapper';
import store from './store';

ReactDom.render(
  <Provider store={store()}>
    <Wrapper />
  </Provider>,
  document.getElementById('root'),
);
