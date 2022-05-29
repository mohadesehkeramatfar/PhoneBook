import {FaUserPlus} from "react-icons/fa"
import {FaHome} from "react-icons/fa"
import { Link } from "react-router-dom";
import style from "./Navigation.module.css"

const Navigation = () => {
    return ( 
        <div className={style.boxnavigation}>
            <span className={style.title}>لیست مخاطبین</span>
           <Link to="AddContact"><FaUserPlus className={`${style.icon} ${style.iconUserPlus}`}/></Link>
            <Link to="/"><FaHome className={`${style.icon} ${style.iconHome}`}/></Link>
        </div>
     );
}
 
export default Navigation;