import React from 'react';
import {View} from 'react-native';

import {cleanup} from '@testing-library/react-native';

import renderer from 'react-test-renderer';

import PlanFeatureItem from '../../components/PlanFeatureItem';

afterEach(cleanup);

describe('testing PlanFeatureItem component of Plans', () => {
  it('should render with name unlimited property', () => {
    const testRenderer = renderer.create(
      <PlanFeatureItem
        style={{
          backgroundColor: 'red',
        }}
        name="unlimited"
      />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(View)).toBeTruthy();
  });

  it('should render with name faster property', () => {
    const testRenderer = renderer.create(
      <PlanFeatureItem
        style={{
          backgroundColor: 'green',
        }}
        name="faster"
      />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(View)).toBeTruthy();
  });

  it('should render with name detailed property', () => {
    const testRenderer = renderer.create(
      <PlanFeatureItem
        style={{
          backgroundColor: 'blue',
        }}
        name="detailed"
      />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(View)).toBeTruthy();
  });
});
