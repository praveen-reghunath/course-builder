import { render, screen } from '@testing-library/react';
import App from './App';

test('should render without error', () => {
  render(<App />);
  const submitButton = screen.getByText(/Submit/i);
  expect(submitButton).toBeInTheDocument();
});
