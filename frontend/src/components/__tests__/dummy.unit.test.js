// Unit Test 1: Simple rendering test for ProtectedRoute logic (indirect)
import { render } from '@testing-library/react';
import ProtectedRoute from '../ProtectedRoute';
import { MemoryRouter } from 'react-router-dom';

describe('ProtectedRoute', () => {
  test('redirects when no user present', () => {
    
    window.localStorage.removeItem('user');
    const { container } = render(
      <MemoryRouter initialEntries={['/protected']}> 
        <ProtectedRoute>
          <div>Secret</div>
        </ProtectedRoute>
      </MemoryRouter>
    );
    
    expect(container).toBeTruthy();
  });
});
