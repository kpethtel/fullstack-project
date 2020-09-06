import React from 'react';
import { render } from '@testing-library/react';
import Menu from './menu.js';


test('renders menu', () => {
  const { container } = render(<Menu />);
  expect(container.firstChild.className).toBe('menu');
});

test('renders search button', () => {
  const { getByText } = render(<Menu />);
  const searchButton = getByText(/Search for gifs/i);
  expect(searchButton).toBeInTheDocument();
});
