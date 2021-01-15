import React from 'react';
import classNames from 'classnames';
import style from './CourseView.module.scss';
import CourseInfoItem from '../CourseInfoItem';

function CourseView({ course, className = '' }) {
    const { department, courseNumber, year, semester } = course;
    return (
        <section className={classNames(style.CourseView, className)}>
            <h6 className={style.heading}>{`${department} ${courseNumber}`}</h6>
            <div className={style.details}>
                <CourseInfoItem label="Department" value={department} />
                <CourseInfoItem label="Course" value={courseNumber} />
                <CourseInfoItem label="Year" value={year} />
                <CourseInfoItem label="Semester" value={semester} />
            </div>
        </section>
    );
}

export default CourseView;