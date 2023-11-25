/**
 * @format
 */

import 'react-native';
import React from 'react';
import TabNavigator from '../TabNavigator';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

import {render, cleanup} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

afterEach(cleanup);

it('renders correctly', async () => {
  const router = await render(
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>,
  );

  expect(router.toJSON()).toMatchSnapshot();
});
