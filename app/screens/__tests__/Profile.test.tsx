/**
 * @format
 */

import 'react-native';
import React from 'react';
import ProfileScreen from '../Profile/ProfileScreen';

import {it} from '@jest/globals';

import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

describe('test profile screen', () => {
  it('renders correctly', async () => {
    const screen = await render(<ProfileScreen />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
