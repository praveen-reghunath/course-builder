import { render, screen } from '@testing-library/react';
import CourseView from './CourseView';
import CourseInfo from '../../business-rules/CourseInfo';

test('renders without error', () => {
    const course = new CourseInfo();
    course.parse("CS111 2011 su");
    render(<CourseView course={course} onChange={() => { }} />);
    const semesterLabel = screen.getByText(/summer/i);
    expect(semesterLabel).toBeInTheDocument();
});