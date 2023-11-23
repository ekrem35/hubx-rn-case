/**
 * @format
 **/

import React from 'react';

import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import Router from './app/navigator/Router';

import {store, persistor} from './app/state/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router />
      </PersistGate>
    </Provider>
  );
}
