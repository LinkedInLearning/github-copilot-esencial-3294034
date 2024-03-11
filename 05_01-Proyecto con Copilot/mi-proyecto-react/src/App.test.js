import React from 'react';
import { render , screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const textoDoc = screen.getByText(/My React App/i);
    expect(textoDoc).toBeInTheDocument();
});