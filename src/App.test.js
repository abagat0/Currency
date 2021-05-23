import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rates link', () => {
  render(<App />);
  const linkElement = screen.getByText(/rates/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders exchange link', () => {
  render(<App />);
  const linkElement = screen.getByText(/exchange/i);
  expect(linkElement).toBeInTheDocument();
});