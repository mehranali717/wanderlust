import React, { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ label, ...props }, ref) => (
    <p>
        <label>{label}</label>
        <input ref={ref} className={styles.inputField} {...props} />
    </p>
));

export default Input;
