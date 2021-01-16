import React from 'react';
import classNames from 'classnames';

import style from './TextBox.module.scss';

function TextBox({ label = '', className = '', errorMessage = '', ...rest }) {

    const hasError = (errorMessage.length > 0);

    if (hasError) {
        className += ` ${style.hasError}`;
    }

    return (
        <div className={classNames(style.TextBox, className)}>
            <label htmlFor="txt-input" id="input-label">{label}</label>
            <div>
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