import React from 'react';
import { useField } from 'formik';

const FormTextInputField = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <label htmlFor={props.id || props.name} className="form__label">{label}
            <input className="form__input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="form__error">{meta.error}</div>
            ) : null}
        </label>
    );
};

export default FormTextInputField