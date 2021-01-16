import { render, screen } from '@testing-library/react';
import TextBox from './TextBox';

test('renders label', () => {
    render(<TextBox label="course" />);
    const label = screen.getByText(/course/i);
    expect(label).toBeInTheDocument();
});

test('renders css class assigned', () => {
    const { container } = render(<TextBox label="course" className="testClass" />);
    expect(container.firstChild).toHaveClass('testClass');
});

test('renders error message', () => {
    render(<TextBox label="course" className="testClass" errorMessage="errMsg" />);
    const errorMessage = screen.getByText(/errMsg/i);
    expect(errorMessage).toBeInTheDocument();
});

test('should render additional attributes assigned', () => {
    const { container } = render(<TextBox label="course" className="testClass" errorMessage="errMsg" type="search" />);
    const textBox = container.querySelector('[id="txt-input"]');
    expect(textBox).toHaveAttribute('type', 'search');
});
