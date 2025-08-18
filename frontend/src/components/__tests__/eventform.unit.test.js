// Unit Test 2: EventForm reminder add/remove logic using React Testing Library
import { render, fireEvent, screen } from '@testing-library/react';
import EventForm from '../EventForm';

jest.mock('../../api/axios', () => ({ post: jest.fn(() => Promise.resolve({ data: { msg: 'ok'} })) }));

describe('EventForm reminder logic', () => {
  test('adds and removes reminders', () => {
    window.localStorage.setItem('user', JSON.stringify({ email: 'user@example.com'}));
  render(<EventForm onEventCreated={() => {}} />);
  const reminderInput = screen.getByPlaceholderText('Days before');
    fireEvent.change(reminderInput, { target: { value: '3'} });
  fireEvent.click(screen.getByText('➕ Add'));
  expect(screen.getByText('⏰ 3 days before')).toBeInTheDocument();
    // remove
  fireEvent.click(screen.getByText('×'));
  expect(screen.queryByText('⏰ 3 days before')).toBeNull();
  });
});
