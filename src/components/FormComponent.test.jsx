// src/components/FormComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormComponent from './FormComponent';

test('calls onSubmit with input value', () => {
  const mockSubmit = jest.fn();
  render(<FormComponent onSubmit={mockSubmit} />);

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test Value' } });
  fireEvent.click(screen.getByRole('button'));

  expect(mockSubmit).toHaveBeenCalledWith('Test Value');
});
