import React from 'react';
import { render, screen } from '@testing-library/react';
import GifSearch from './gifSearch';

render(<GifSearch />);

test('renders prompt', () => {
  const linkElement = screen.getByText(/Search for a gif/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search box', () => {
  const searchInput = screen.findByPlaceholderText('Search');
  expect(searchInput).toBeInTheDocument;
});