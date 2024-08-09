import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { Button, Input, IsLoading } from "../../components";
import styles from "./login.module.css";
const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("mehranAli@gmail.com");
  const [pwd, setPwd] = useState("password");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/welcome");
    } catch (err) {
      if (!err?.orignalStatus) {
        setErrMsg("No Server Response");
      } else if (err?.orignalStatus?.status === 400) {
        setErrMsg("MIssing UserName or Password");
      } else if (err?.orignalStatus?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Faild");
      }
    }
  };
  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);
  const content = isLoading ? (
    <IsLoading />
  ) : (
    <section className={styles.login}>
      <div className={styles.formWrapper}>
        <p>{errMsg}</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHeader}>
            <h3>Login Form</h3>
          </div>
          <div className={styles.formBoday}>
            <Input
              type="email"
              placeholder="Email"
              label="Email*"
              id="username"
              ref={userRef}
              value={user}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              label="Password*"
              id="password"
              onChange={handlePwdInput}
              value={pwd}
              required
            />
          </div>
          <div className={styles.formFooter}>
            <Link to="register" className={styles.createAccount}>Create an Account</Link>
            <Button type="submit" text="Login" />
          </div>
        </form>
      </div>
    </section>
  );
  return content;
};
export default Login;
