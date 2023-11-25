/**
 * @format
 */

import 'react-native';
import React from 'react';
import DiagnoseScreen from '../Diagnose/DiagnoseScreen';

import {it} from '@jest/globals';

import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

describe('test diagnose screen', () => {
  it('renders correctly', async () => {
    const screen = await render(<DiagnoseScreen />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
