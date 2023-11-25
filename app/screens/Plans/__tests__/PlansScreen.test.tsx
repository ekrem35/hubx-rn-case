/**
 * @format
 */

import 'react-native';
import React from 'react';
import PlansScreen from '../Plans';

import {it} from '@jest/globals';

import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

describe('test plans screen', () => {
  it('renders correctly', async () => {
    const screen = await render(
      <PlansScreen
        navigation={{
          navigate: () => true,
        }}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
