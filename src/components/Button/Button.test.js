import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button text', () => {
    render(<Button >Test</Button>);
    const button = screen.getByText(/Test/i);
    expect(button).toBeInTheDocument();
});

test('renders button css class', () => {
    const { container } = render(<Button className="TheCSSClass" >Test</Button>);
    expect(container.firstChild).toHaveClass('TheCSSClass')
});

test('should contain the additional properties bound', () => {
    const { container } = render(<Button type="button" >Test</Button>);
    expect(container.firstChild).toHaveAttribute('type', "button");
});

