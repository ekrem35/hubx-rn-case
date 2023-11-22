import React from 'react';

import {render, cleanup, screen} from '@testing-library/react-native';

import renderer from 'react-test-renderer';

import Container from '../../components/Container';

afterEach(cleanup);

describe('testing Container component of Onboarding', () => {
  it('should renders correctly', () => {
    renderer.create(<Container />);
  });

  it('should renders passed children', async () => {
    await render(
      <Container>
        <div>passed</div>
      </Container>,
    );

    const element = screen.findByText('passed');

    expect(element).toBeTruthy();
  });
});
