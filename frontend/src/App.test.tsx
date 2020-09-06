import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders menu', () => {
  const { container } = render(<App />);
  expect(container.firstChild.className).toBe('menu');
});
