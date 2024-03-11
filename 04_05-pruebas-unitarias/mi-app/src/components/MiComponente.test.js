import React from 'react';
import { render, screen } from '@testing-library/react';
import MiComponente from './MiComponente';

test('renders "Hola mundo, soy un componente."', () => {
  render(<MiComponente />);
  const textElement = screen.getByText(/Hola mundo, soy un componente./i);
  expect(textElement).toBeInTheDocument();
});