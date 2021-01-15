import React from 'react';
import Button from "../Button";
import TextBox from "../TextBox";

import style from './CourseInput.module.scss';

function CourseInput(props) {
    // const { label } = props;

    return (
        <div className={style.CourseInput}>
            <TextBox className={style.courseText} label="Course" placeholder="Enter course" />
            <Button className={style.btnSubmit} enabled={false}>Submit</Button>
        </div>
    );
}

export default CourseInput;