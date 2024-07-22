import Styles from "./button.module.css"
const Button = (props) => <>
    <button {...props} className="default-btn">{props.text}</button>
</>
export default Button