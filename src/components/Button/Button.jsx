import React from 'react';
import style from './Button.module.scss';

function Button(props) {
    const { children, className = '', ...rest } = props;
    return (
        <button className={`${style.Button} ${className}`} tabindex="0" type="button" {...rest} >
            {children}
        </button>
    );
}

export default Button;