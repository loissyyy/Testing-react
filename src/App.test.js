// src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('displays submitted text', () => {
  render(<App />);
  
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Hello World' } });
  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
