import React from 'react';
import style from './TextBox.module.scss';

function TextBox(props) {
    let { label = '', placeholder = '', className = '', errorMessage = '' } = props;
    const hasError = (errorMessage.length > 0);
    if (hasError) {
        className += style.error;
    }

    return (
        <div className={`${style.TextBox} ${className}`}>
            <label className={style.textLabel} for="txt-input" id="input-label">{label}</label>
            <div className={style.inputWrapper}>
                <input aria-invalid={hasError} id="txt-input" type="text" className={style.text} value="" placeholder={placeholder} aria-describedby="txt-error" />
                <p className={style.errorText} id="txt-error">
                    <span>Error: </span>
                    <span>{errorMessage}</span>
                </p>
            </div>
        </div>
    );
}

export default TextBox;