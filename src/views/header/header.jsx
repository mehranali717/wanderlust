import { Images } from "../../components";
import LogoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Navbar from "../navbar/navbar";
const Header = () => (
  <div className={styles.header}>
    <Link to="/">
      <Images imgUrl={LogoImg} imgAlt="Logo is here" styles={styles.logo} />
    </Link>
    <Navbar />
  </div>
);
export default Header;
