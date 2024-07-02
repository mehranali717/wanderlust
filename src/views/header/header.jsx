import { useLocation } from "react-router-dom";
import styles from "./header.module.css"

const Header = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();
  return (
    <div className={styles.header}>
      <h1>{path?path:'Home'}</h1>
    </div>
  );
};
export default Header;
