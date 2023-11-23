import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {cleanup, fireEvent} from '@testing-library/react-native';

import renderer from 'react-test-renderer';

import PlanItem from '../PlanItem';

afterEach(cleanup);

describe('testing PlanItem component of Plans', () => {
  it('should render inactive state', () => {
    const testRenderer = renderer.create(
      <PlanItem
        title="1 Month"
        description="$2.99/month, auto renewable"
        onSelect={idx => console.log(idx)}
        active={false}
        value={0}
      />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(View)).toBeTruthy();
  });

  it('should render active state', () => {
    const testRenderer = renderer.create(
      <PlanItem
        title="1 Month"
        description="$2.99/month, auto renewable"
        onSelect={idx => console.log(idx)}
        active={true}
        value={1}
      />,
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(View)).toBeTruthy();
  });

  it('should call onchange function', () => {
    const onChangeIndex = jest.fn();

    const testRenderer = renderer.create(
      <PlanItem
        title="1 Month"
        description="$2.99/month, auto renewable"
        onSelect={onChangeIndex}
        active={true}
        value={1}
      />,
    );
    const testInstance = testRenderer.root;
    const button = testInstance.findAllByType(TouchableOpacity);

    fireEvent(button[0], 'press');

    expect(onChangeIndex).toHaveBeenCalledTimes(1);
  });
});
