import { useLocation } from "react-router-dom";
import { Login, Register } from "../../views";
import styles from "./authLayout.module.css";

const AuthLayout = () => {
  const path = useLocation().pathname.split("/").pop();
  return (
    <div className={styles.authLayoutWrapper}>
      {path !== "signUp" ? <Login /> : <Register />}
    </div>
  );
};
export default AuthLayout;
