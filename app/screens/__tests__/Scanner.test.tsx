/**
 * @format
 */

import 'react-native';
import React from 'react';
import ScannerScreen from '../Scanner/ScannerScreen';

import {it} from '@jest/globals';

import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

describe('test scanner screen', () => {
  it('renders correctly', async () => {
    const screen = await render(<ScannerScreen />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
