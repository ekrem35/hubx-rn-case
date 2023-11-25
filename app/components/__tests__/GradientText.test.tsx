import React from 'react';

import {render, cleanup, screen} from '@testing-library/react-native';

import {configure} from 'enzyme';

import renderer from 'react-test-renderer';

import Adapter from '@cfaester/enzyme-adapter-react-18';

import GradientText from '../GradientText';

configure({adapter: new Adapter()});

afterEach(cleanup);

const mockProps = {
  gradient: {
    colors: ['#ffffff'],
    start: {
      x: 0,
      y: 0,
    },
    end: {
      x: 0,
      y: 0,
    },
  },
};

describe('testing GradientText component', () => {
  it('should renders correctly', () => {
    renderer.create(<GradientText {...mockProps} />);
  });

  it('should renders passed children', async () => {
    await render(<GradientText {...mockProps}>test-button</GradientText>);

    const element = screen.findByText('test-button');

    expect(element).toBeTruthy();
  });
});
