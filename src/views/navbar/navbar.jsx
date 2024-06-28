import { Link } from "react-router-dom";
import navbarData from "../../locals/fakeData.json";
const Navbar = () => (
  <nav>
    <ul>
      {navbarData.navbarItems.map((item) => (
        <Link to={item.url}><li key={item.id}>{item.navtitle}</li></Link>
      ))}
    </ul>
  </nav>
);
export default Navbar;
