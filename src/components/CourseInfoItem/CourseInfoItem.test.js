
import { render, screen } from '@testing-library/react';
import CourseInfoItem from './CourseInfoItem';

test('render the component with our error', () => {
    render(<CourseInfoItem label="lbl" value="val" />);
    let label = screen.getByText(/lbl/i);
    let value = screen.getByText(/val/i);
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
});