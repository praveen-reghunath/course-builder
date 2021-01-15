
import CourseInfo, { Semester } from './CourseInfo';
import validCourseStrings from './validCouseStrings.json'
import inValidCourseStrings from './validCouseStrings.json'

test('Should not parse string "CS" ', () => {
    const course = new CourseInfo();
    const result = course.parse("CS");
    expect(result).toBe(false);
});

test('Should parse string "CS111 2018 Fall" ', () => {
    const course = new CourseInfo();
    const result = course.parse("CS111 2018 Fall");
    expect(result).toBe(true);
});

test('Should parse valid course string', () => {
    const course = new CourseInfo();
    validCourseStrings.forEach(testData => {
        const result = course.parse(testData.courseString);
        expect(result).toBe(true);
        expect(course.department).toBe(testData.course.department);
        expect(course.courseNumber).toBe(testData.course.courseNumber);
        expect(course.semester).toBe(testData.course.semester);
        expect(course.year).toBe(testData.course.year);
    });

});

test('Should not parse some of the known invalid course string', () => {

    const course = new CourseInfo();

    inValidCourseStrings.forEach(courseString => {
        const result = course.parse(courseString);
        expect(result).toBe(false);
    });

});

