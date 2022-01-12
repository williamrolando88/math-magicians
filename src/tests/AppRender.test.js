import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react';

describe('Rendering Component: App', () => {
  test('should render App', () => {
    const { getByText } = render(<App />);
    getByText('Math Magicians');
    getByText('Home');
    getByText('Calculator');
    getByText('Quote');
  });

  test('should simulate Home click', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Home'));
    getByText('Welcome to our page!');
  });

  test('should simulate calculation', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Calculator'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('='));
    getByText('3.1');
  });
});
