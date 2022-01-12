import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react';

describe('Rendering Component: App', () => {
  test('should render App with default page', () => {
    const { getByText } = render(<App />);
    getByText('Math Magicians');
    getByText('Home');
    getByText('Calculator');
    getByText('Quote');
    getByText('Welcome to our page!');
  });
  
  test('should render Navbar of the App', () => {
    const { getByText } = render(<App />);
    getByText('Math Magicians');
    getByText('Home');
    getByText('Calculator');
    getByText('Quote');
  });

  test('should simulate navlinks Home click', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Home'));
    getByText('Welcome to our page!');
  });

  test('should simulate navlinks Calculator click', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Calculator'));
    getByText('Give me something to calculate!');
  });

  test('should simulate navlinks Quote click', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Quote'));
    getByText('Lets get you inspired!');
  });

  test('should simulate an operation on calculator', () => {
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
