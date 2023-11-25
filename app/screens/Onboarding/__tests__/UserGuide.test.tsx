import React from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {cleanup} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import UserGuide from '../UserGuide';
import storageReducer from '../../../state/slices/storage';

afterEach(cleanup);

describe('testing UserGuide screen', () => {
  it('should renders correctly', () => {
    const mockStore = configureStore({
      reducer: {
        storage: storageReducer,
      },
    });

    const testRenderer = renderer.create(
      <Provider store={mockStore}>
        <UserGuide
          navigation={{
            navigate: jest.fn(),
          }}
        />
      </Provider>,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(View)).toBeTruthy();
  });
});
