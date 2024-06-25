import { Images } from "../../components"
import LogoImg from "../../assets/images/logo.png"
import { Link } from "react-router-dom"
const Header = () => <div>
    <Link to="/">
    <Images imgUrl={LogoImg} imgAlt="Logo is here" /></Link>
</div>
export default Header