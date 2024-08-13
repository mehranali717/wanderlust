import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import styles from "./register.module.css";
import { useRef, useState } from "react";
import { validateField } from "../../helper/fieldValidation";

const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const confirmPwdRef = useRef();
  const phonenumberRef = useRef();

  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validations = {
      username: validateField('username', userRef.current.value),
      email: validateField('email', emailRef.current.value),
      password: validateField('password', pwdRef.current.value),
      confirmPassword: validateField('confirmPassword', confirmPwdRef.current.value),
      phoneNumber: validateField('phoneNumber', phonenumberRef.current.value),
    };

    setValidationErrors(validations);
  };

  const handleFieldChange = (e, fieldName) => {
    setValidationErrors({
      ...validationErrors,
      [fieldName]: validateField(fieldName, e.target.value),
    });
  };

  return (
    <section>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <h2>SignUp Form</h2>
        </div>
        <div className={styles.formBody}>
          <p className={styles.fieldWrapper}>
            <Input
              type="text"
              placeholder="Name"
              label="Name"
              ref={userRef}
              id="username"
              autoComplete="off"
              onChange={(e) => handleFieldChange(e, 'username')}
            />
            {!validationErrors.username?.valid && (
              <span className={styles.message}>{validationErrors.username?.errorMsg}</span>
            )}
          </p>
          <p className={styles.fieldWrapper}>
            <Input
              type="email"
              placeholder="Email"
              label="Email"
              ref={emailRef}
              id="email"
              autoComplete="off"
              onChange={(e) => handleFieldChange(e, 'email')}
            />
            {!validationErrors.email?.valid && (
              <span className={styles.message}>{validationErrors.email?.errorMsg}</span>
            )}
          </p>
          <p className={styles.fieldWrapper}>
            <Input
              type="password"
              placeholder="Password"
              label="Password"
              ref={pwdRef}
              id="password"
              autoComplete="off"
              onChange={(e) => handleFieldChange(e, 'password')}
            />
            {!validationErrors.password?.valid && (
              <span className={styles.message}>{validationErrors.password?.errorMsg}</span>
            )}
          </p>
          <p className={styles.fieldWrapper}>
            <Input
              type="password"
              placeholder="Confirm Password"
              label="Confirm Password"
              ref={confirmPwdRef}
              id="confirmpassword"
              autoComplete="off"
              onChange={(e) => handleFieldChange(e, 'confirmPassword')}
            />
            {!validationErrors.confirmPassword?.valid && (
              <span className={styles.message}>{validationErrors.confirmPassword?.errorMsg}</span>
            )}
          </p>
          <p className={styles.fieldWrapper}>
            <Input
              type="number"
              placeholder="Ph: No"
              label="Ph: No"
              ref={phonenumberRef}
              id="phonenumber"
              autoComplete="off"
              onChange={(e) => handleFieldChange(e, 'phoneNumber')}
            />
            {!validationErrors.phoneNumber?.valid && (
              <span className={styles.message}>{validationErrors.phoneNumber?.errorMsg}</span>
            )}
          </p>
        </div>
        <div className={styles.formFooter}>
          <Link to="/login" className={styles.createAccount}>
            Already have an account
          </Link>
          <Button type="submit" text="SignUp" />
        </div>
      </form>
    </section>
  );
};

export default Register;
