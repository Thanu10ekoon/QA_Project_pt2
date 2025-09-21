import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RSVP Event Manager app', () => {
  render(<App />);
  const headerElement = screen.getByText(/RSVP Event Manager/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders login form when not authenticated', () => {
  // Clear any stored user
  window.localStorage.removeItem('user');
  render(<App />);
  const loginHeading = screen.getByText(/🔐 Login/i);
  expect(loginHeading).toBeInTheDocument();
});
