/**
 * @format
 */

import 'react-native';
import React from 'react';
import MyGardenScreen from '../MyGarden/MyGardenScreen';

import {it} from '@jest/globals';

import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

describe('test my garden screen', () => {
  it('renders correctly', async () => {
    const screen = await render(<MyGardenScreen />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
