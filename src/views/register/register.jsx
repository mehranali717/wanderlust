import { Link } from "react-router-dom";
import { Button, Input } from "../../components";
import styles from "./register.module.css"
const Register = () => {
  return (
    <section>
      <form className={styles.formWrapper} >
      <div className={styles.formHeader}>
          <h3>SignUp Form</h3>
        </div>
        <div className={styles.formBody}>
        <Input
          type="text"
          placeholder="Name"
          label="Name*"
          id="username"
          autoComplete="off"
          required
        />
        <Input
          type="email"
          placeholder="Email"
          label="Email*"
          id="email"
          autoComplete="off"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          label="Password*"
          id="password"
          autoComplete="off"
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password*"
          id="confirmpassword"
          autoComplete="off"
          required
        />
        <Input
          type="number"
          placeholder="Ph: No"
          label="Ph: No*"
          id="phonenumber"
          autoComplete="off"
          required
        />
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
