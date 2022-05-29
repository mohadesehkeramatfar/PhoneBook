import logo from "../../Assest/image/404.jpg"
import style from "./NotFound.module.css"

const NotFound = () => {
    return ( 
        <div>
            <img src={logo} className={style.notFoundImg}/>
        </div>
     );
}
 
export default NotFound;