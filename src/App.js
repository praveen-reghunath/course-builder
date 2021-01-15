import CourseInput from './components/CourseInput';
import CourseView from "./components/CourseView";

import style from './App.module.scss';

function App() {
  const course = {
    department: "CS",
    courseNumber: "111",
    year: 2011,
    semester: "fall"
  };

  let error = null;

  const onCourseInput = (courseString) => {

  };

  return (
    <main className={style.App}>
      <CourseInput onCourseInput={onCourseInput} error={error} />
      <CourseView course={course} />
    </main>
  );
}

export default App;
