import { render, screen } from '@testing-library/react';
import App from './App';

describe('App core UI and features', () => {
  test('renders app header title', () => {
    render(<App />);
    expect(screen.getByText(/ReactJS Sample Application/i)).toBeInTheDocument();
  });

  test('renders all feature cards', () => {
    render(<App />);
    expect(screen.getByText(/Sleek Design/)).toBeInTheDocument();
    expect(screen.getByText(/Best Practices/)).toBeInTheDocument();
    expect(screen.getByText(/CI\/CD Ready/)).toBeInTheDocument();
  });

  test('renders github link', () => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: /View on GitHub/i })
    ).toHaveAttribute(
      'href',
      expect.stringContaining('https://github.com/burisa-ops/gha-reactjs-flow')
    );
  });
});
