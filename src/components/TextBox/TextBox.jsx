import React from 'react';
import style from './TextBox.module.scss';

function TextBox({ label = '', className = '', errorMessage = '', ...rest }) {

    const hasError = (errorMessage.length > 0);

    if (hasError) {
        className += ` ${style.hasError}`;
    }

    return (
        <div className={`${style.TextBox} ${className}`}>
            <label className={style.textLabel} for="txt-input" id="input-label">{label}</label>
            <div className={style.inputWrapper}>
                <input aria-invalid={hasError} id="txt-input" type="text" className={style.text} aria-describedby="txt-error" {...rest} />
                <p className={style.errorText} id="txt-error">
                    {
                        hasError && (
                            <>
                                <span>Error: </span>
                                <span>{errorMessage}</span>
                            </>
                        )
                    }
                </p>
            </div>
        </div>
    );
}

export default TextBox;