
import { render, screen } from '@testing-library/react';
import CourseInfoItem from './CourseInfoItem';

test('renders button text', () => {
    render(<CourseInfoItem label="lbl" value="val" />);
    let byLabel = screen.getByText(/lbl/i);
    let byValue = screen.getByText(/val/i);
    expect(byLabel).toBeInTheDocument();
    expect(byValue).toBeInTheDocument();
});