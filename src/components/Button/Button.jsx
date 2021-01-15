import React from 'react';
import style from './Button.module.scss';

function Button(props) {
    const { children, className = '', enabled = true } = props;
    return (
        <button className={`${style.Button} ${className}`} tabindex="0" type="button" enabled={enabled}>
            {children}
        </button>
    );
}

export default Button;