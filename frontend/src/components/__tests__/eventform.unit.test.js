// Unit Test 2: EventForm reminder add/remove logic using React Testing Library
import { render, fireEvent } from '@testing-library/react';
import EventForm from '../../EventForm';

// Mock axios to avoid network
jest.mock('../../../api/axios', () => ({ post: jest.fn(() => Promise.resolve({ data: { msg: 'ok'} })) }));

describe('EventForm reminder logic', () => {
  test('adds and removes reminders', () => {
    window.localStorage.setItem('user', JSON.stringify({ email: 'user@example.com'}));
    const { getByPlaceholderText, getByText, queryByText } = render(<EventForm onEventCreated={() => {}} />);
    const reminderInput = getByPlaceholderText('Days before');
    fireEvent.change(reminderInput, { target: { value: '3'} });
    fireEvent.click(getByText('➕ Add'));
    expect(getByText('⏰ 3 days before')).toBeInTheDocument();
    // remove
    fireEvent.click(getByText('×'));
    expect(queryByText('⏰ 3 days before')).toBeNull();
  });
});
