import { Images } from "../../components";
import LogoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import Navbar from "../navbar/navbar";
const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.logo}>
      <Link to="/home">
        <Images
          imgUrl={LogoImg}
          imgAlt="Logo is here"
          styles={styles.logoImg}
        />
      </Link>
    </div>
    <Navbar />
  </div>
);
export default Sidebar;
