/**
 * @format
 **/

import React from 'react';

import Router from './app/navigator/Router';
import {Provider} from 'react-redux';

import {store} from './app/state/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
