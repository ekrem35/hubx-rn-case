import React from 'react';
import {View} from 'react-native';

import {cleanup} from '@testing-library/react-native';

import renderer from 'react-test-renderer';

import PlanList from '../PlanList';

afterEach(cleanup);

describe('testing PlanList of Plans screen', () => {
  it('should render correctly', () => {
    const testRenderer = renderer.create(<PlanList />);
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(View)).toBeTruthy();
  });
});
