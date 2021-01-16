import { render, screen } from '@testing-library/react';
import CourseInput from './CourseInput';

test('renders course label', () => {
    render(<CourseInput label="course" onChange={() => { }} />);
    const textElement = screen.getByText(/course/i);
    expect(textElement).toBeInTheDocument();
});