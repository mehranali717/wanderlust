import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { Button, Input, IsLoading } from "../../components";
import styles from "./login.module.css";
import { validateField } from "../../helper/fieldValidation";
const Login = () => {
  const userRef = useRef();
  const pwdRef = useRef();
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pwd = pwdRef.current.value;
    const validations = {
      email: validateField("email", user),
      password: validateField("password", pwd),
    };
    setValidationErrors(validations);
    const isFormValid = Object.values(validations).every(
      (field) => field.valid
    );
    if (isFormValid) {
      try {
        const userData = await login({ user, pwd }).unwrap();
        dispatch(setCredentials({ ...userData, user }));
        navigate("/welcome");
      } catch (err) {
        console.log({ err });
      }
    }
  };
  const handleFieldChange = (e, fieldName) => {
    setValidationErrors({
      ...validationErrors,
      [fieldName]: validateField(fieldName, e.target.value),
    });
  };
  const content = isLoading ? (
    <IsLoading />
  ) : (
    <section>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <h3>Login Form</h3>
        </div>
        <div className={styles.formBody}>
          <p className={styles.fieldWrapper}>
            <Input
              type="email"
              placeholder="Email"
              label="Email"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => handleFieldChange(e, "email")}
            />
            {!validationErrors.email?.valid && (
              <span className={styles.message}>
                {validationErrors.email?.errorMsg}
              </span>
            )}
          </p>
          <p className={styles.fieldWrapper}>
            <Input
              type="password"
              placeholder="Password"
              label="Password"
              id="password"
              ref={pwdRef}
              onChange={(e) => handleFieldChange(e, "password")}
            />
            {!validationErrors.password?.valid && (
              <span className={styles.message}>
                {validationErrors.password?.errorMsg}
              </span>
            )}
          </p>
        </div>
        <div className={styles.formFooter}>
          <Link to="signUp" className={styles.createAccount}>
            Create an Account
          </Link>
          <Button type="submit" text="Login" />
        </div>
      </form>
    </section>
  );
  return content;
};
export default Login;
