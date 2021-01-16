import React, { useState } from 'react';

import CourseInput from './components/CourseInput';
import CourseView from './components/CourseView';
import CourseInfo from './business-rules/CourseInfo';

import style from './App.module.scss';

function App() {

  const [courseString, setCourseString] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [parseError, setParseError] = useState("");

  const onCourseStringChange = (e) => {
    setCourseString(e.target.value);
  };

  const trySavingCourse = () => {
    if (courseString) {
      const course = new CourseInfo();
      try {
        if (course.parse(courseString)) {
          setCourseList([...courseList, course]);
          setParseError("");
          setCourseString("");
        }
        else {
          setParseError("Could not parse course");
        }
      }
      catch (ex) {
        setParseError("Could not parse course");
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    trySavingCourse();
  };

  return (
    <main className={style.App}>
      <CourseInput className={style.courseInput} errorMessage={parseError} courseString={courseString} onChange={onCourseStringChange} onSubmit={onSubmit} />
      {
        courseList.map(course => <CourseView key={course.id} className={style.courseView} course={course} />)
      }
    </main>
  );
}

export default App;
