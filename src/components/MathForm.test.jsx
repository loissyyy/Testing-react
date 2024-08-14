// src/components/MathForm.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MathForm from './MathForm';


test('calculates and displays the sum of two numbers', () => {
  render(<MathForm />);
  screen.debug();

  fireEvent.change(screen.getByPlaceholderText('Enter first number'), { target: { value: '5' } });
  fireEvent.change(screen.getByPlaceholderText('Enter second number'), { target: { value: '3' } });
  fireEvent.click(screen.getByText('Calculate Sum'));

  expect(screen.getByText('Sum: 8')).toBeInTheDocument();
  screen.debug();
});
