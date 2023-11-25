/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

import {render, cleanup} from '@testing-library/react-native';

afterEach(cleanup);

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

it('renders correctly', async () => {
  const app = await render(<App />);

  expect(app.toJSON()).toMatchSnapshot();
});
