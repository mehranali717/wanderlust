import { Link, useNavigate } from "react-router-dom";
import navbarData from "../../locals/fakeData.json";
import styles from "./navbar.module.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <nav className={styles.navbar}>
      <ul>
        {navbarData.navbarItems.map((item) => (
          <Link to={item.url} key={item.id}>
            <li
              className={styles.listItem}
              onClick={
                item.navtitle.toLowerCase() === "logout"
                  ? handleLogout
                  : undefined
              }
            >
              {item.navtitle}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
