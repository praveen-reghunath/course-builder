
export const Semester = Object.freeze({
    FALL: "Fall",
    WINTER: "Winter",
    SPRING: "Spring",
    SUMMER: "Summer"
});

function getCompleteSemesterName(semAbbreviation) {
    semAbbreviation = semAbbreviation.toLowerCase();
    let semester;
    switch (semAbbreviation) {
        case "f":
        case "fall":
            semester = Semester.FALL;
            break;
        case "w":
        case "winter":
            semester = Semester.WINTER;
            break;
        case "su":
        case "Summer":
            semester = Semester.SUMMER;
            break;
        case "spring":
        case "s":
            semester = Semester.SPRING;
            break;

            defaut:
            throw `Unknown semester string ${semAbbreviation}.`;
    }

    return semester;
}

function getCompleteYear(yearPart) {

    let year = Number(yearPart);

    if (year < 1000) {
        year += 2000;
    }

    if (year < 2000) {
        throw "Year must be >= 2000";
    }

    return year;
}

class CourseInfo {
    constructor(course) {
        if (course instanceof CourseInfo) {
            const { department, courseNumber, year, semester } = course;
            this.department = department;
            this.courseNumber = courseNumber;
            this.year = year;
            this.semester = semester;
        }
    }

    get department() {
        return this._department;
    }

    set department(value) {
        this._department = value;
    }

    get courseNumber() {
        return this._courseNumber;
    }

    set courseNumber(value) {
        this._courseNumber = Number(value);
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = getCompleteYear(value);
    }

    get semester() {
        return this._semester;
    }

    set semester(value) {
        this._semester = getCompleteSemesterName(value);
    }

    parse(courseString) {
        let result = false;

        if (/^([a-z]+)([: -]*\d+) (((Fall|F|Winter|W|Summer|Su|Spring|S)[ ]*(\d{2}|\d{4}))|((\d{2}|\d{4})[ ]*(Fall|F|Winter|W|Summer|Su|Spring|S)))$/gi.test(courseString)) {
            const [departmentAndCourseNumber] = courseString.match(/^([a-z]+)([: -]*\d+)/gi);
            const parts = courseString.split(/^([a-z]+)([: -]*\d+) /gi);
            const semesterAndYear = parts[parts.length - 1];

            const [department] = departmentAndCourseNumber.match(/^[a-z]+/gi);
            const [courseNumber] = departmentAndCourseNumber.match(/\d+/gi);
            const [year] = semesterAndYear.match(/\d+/g);
            const [semester] = semesterAndYear.match(/(Fall|F|Winter|W|Spring|Su|Summer|S)/gi);

            this.department = department;
            this.courseNumber = courseNumber;
            this.semester = semester;
            this.year = year;

            result = true;
        }

        return result;

    }

    *[Symbol.iterator]() {
        const entries = Object.entries(this);

        for (const entry of entries) {
            yield entry;
        }
    }
}

export default CourseInfo;