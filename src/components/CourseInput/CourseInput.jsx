import React from 'react';
import classNames from 'classnames';

import Button from "../Button";
import TextBox from "../TextBox";

import style from './CourseInput.module.scss';

function CourseInput({ errorMessage, className = '', onSubmit, courseString = '', ...rest }) {

    return (
        <form className={classNames(style.CourseInput, className)} onSubmit={onSubmit} autoComplete="off">
            <TextBox className={style.courseText} label="Course" placeholder="Enter course" errorMessage={errorMessage} required={true} value={courseString} {...rest} />
            <Button className={style.btnSubmit} disabled={(courseString.length === 0)} type="submit">Submit</Button>
        </form>
    );
}

export default CourseInput;