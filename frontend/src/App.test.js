import { render } from '@testing-library/react';

// Mock axios before App import to avoid ESM transform issues in tests
jest.mock('axios', () => ({
  create: () => ({ get: jest.fn(), post: jest.fn() })
}));

import App from './App';

test('app renders without crashing', () => {
  render(<App />);
  // Minimal smoke test
  expect(true).toBe(true);
});
