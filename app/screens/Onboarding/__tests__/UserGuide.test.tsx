import React from 'react';
import {View} from 'react-native';

import {cleanup} from '@testing-library/react-native';

import renderer from 'react-test-renderer';

import UserGuide from '../UserGuide';

afterEach(cleanup);

describe('testing UserGuide screen', () => {
  it('should renders correctly', () => {
    const testRenderer = renderer.create(
      <UserGuide
        navigation={{
          navigate: jest.fn(),
        }}
      />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(View)).toBeTruthy();
  });
});
