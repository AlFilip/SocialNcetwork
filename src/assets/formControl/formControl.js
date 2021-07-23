import React from "react";
import s from "./formControl.module.css"

const validationFieldCreator = TagNameValidatedField => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <TagNameValidatedField {...input} {...props} />
            <span>{hasError}</span>
        </div>
    )
}

export const TextArea = validationFieldCreator('textarea');

export const Input = validationFieldCreator('input');
