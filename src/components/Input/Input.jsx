import React, { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(({ label, ...props }, ref) => (
  <>
    <label>{label}*</label>
    <input ref={ref} className={styles.inputField} {...props} />
  </>
));

export default Input;
