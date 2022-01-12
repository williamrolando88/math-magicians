import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('should render Quote', () => {
  expect(renderer.create(<Quote />)).toMatchSnapshot();
});
