import { Images } from "../../components";
import LogoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "./header.module.css"
const Header = () => (
  <div>
    <Link to="/">
      <Images imgUrl={LogoImg} imgAlt="Logo is here" styles={styles.logo} />
    </Link>
  </div>
);
export default Header;
