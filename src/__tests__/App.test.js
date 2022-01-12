import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('should render APP', () => {
  const { getByText } = render(<App />);
  getByText('Math Magicians');
  getByText('Home');
  getByText('Calculator');
  getByText('Quote');
});

test('should render different component', () => {
  const { getByText } = render(<App />);

  fireEvent.click(getByText('Home'));
  getByText('Welcome to our page!');
  fireEvent.click(getByText('Calculator'));
  getByText('Give me something to calculate!');
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  getByText('24');
});
