import React from 'react';
import { Provider } from 'react-redux';

const createApp = (store, history) => (
  <Provider store={store}>
    <div>12343</div>
  </Provider>
);

export default createApp;
