import React from 'react';
import classNames from 'classnames';
import style from './Button.module.scss';

function Button(props) {
    const { children, className = '', ...rest } = props;
    return (
        <button className={classNames(style.Button, className)} tabIndex="0" {...rest} >
            {children}
        </button>
    );
}

export default Button;