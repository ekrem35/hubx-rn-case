import React from 'react';

import {TouchableOpacity} from 'react-native';

import {render, cleanup, screen} from '@testing-library/react-native';

import {shallow, configure} from 'enzyme';

import renderer from 'react-test-renderer';

import Adapter from '@cfaester/enzyme-adapter-react-18';

import Button from '../Button';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('testing Button component', () => {
  it('should renders correctly', () => {
    renderer.create(<Button />);
  });

  it('should renders passed children', async () => {
    await render(<Button>test-button</Button>);

    const element = screen.findByText('test-button');

    expect(element).toBeTruthy();
  });

  it('should work onPress function', async () => {
    const onPress = jest.fn();

    const wrapper = shallow(<Button onPress={onPress}>test-button</Button>);

    (
      wrapper.find(TouchableOpacity).first().props() as {onPress: () => void}
    ).onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
