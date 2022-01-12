import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('should render Home', () => {
  expect(renderer.create(<Home />)).toMatchSnapshot();
});
