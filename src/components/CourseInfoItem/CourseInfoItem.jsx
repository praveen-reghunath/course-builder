
import React from 'react';
import style from './CourseInfoItem.module.scss';

function CourseInfoItem(props) {
    const { label, value } = props;

    return (
        <div className={style.CourseInfoItem}>
            <div className={style.label}>{label}</div>
            <div className={style.value}>{value}</div>
        </div>
    );
}

export default CourseInfoItem;