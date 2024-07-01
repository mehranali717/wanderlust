import { Link } from "react-router-dom";
import navbarData from "../../locals/fakeData.json";
import styles from "./navbar.module.css"
const Navbar = () => (
  <nav className={styles.navbar}>
    <ul>
      {navbarData.navbarItems.map((item) => (
        <Link to={item.url}><li key={item.id} className={styles.listItem}>{item.navtitle}</li></Link>
      ))}
    </ul>
  </nav>
);
export default Navbar;
