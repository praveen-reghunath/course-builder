import { render, screen } from '@testing-library/react';
import CourseInput from './CourseInput';

test('renders without error', () => {
    render(<CourseInput label="course" onChange={() => { }} />);
    const courseInput = screen.getByText(/course/i);
    expect(courseInput).toBeInTheDocument();
});