import React from 'react';

import {render, cleanup, fireEvent} from '@testing-library/react-native';

import {configure} from 'enzyme';

import renderer from 'react-test-renderer';

import Adapter from '@cfaester/enzyme-adapter-react-18';

import SearchInput from '../SearchInput';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('testing Button component', () => {
  it('should renders correctly', () => {
    renderer.create(<SearchInput />);
  });

  it('should work onPress function', async () => {
    const onChangeText = jest.fn();

    const {getByTestId} = await render(
      <SearchInput
        onChangeText={onChangeText}
        inputProps={{
          testID: 'SearchInput-test',
        }}
      />,
    );

    const input = getByTestId('SearchInput-test');

    fireEvent.changeText(input, 'hello world!');

    expect(onChangeText).toHaveBeenCalledTimes(1);
  });
});
