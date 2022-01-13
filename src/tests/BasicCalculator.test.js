import React from 'react';
import renderer from 'react-test-renderer';
import BasicCalculator from '../components/BasicCalculator';

test('should render BasicCalculator', () => {
  expect(renderer.create(<BasicCalculator />)).toMatchSnapshot();
});
