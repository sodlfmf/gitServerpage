import Link from "next/link"
import "./main-byline.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'




const MainByline = () =>{
    return(<>
    <div className="byline">
            <div className="link"><Link href={"https://www.linkedin.com/in/soonhee-jung-the-yeowoon/"}><FontAwesomeIcon icon={faLinkedin} size="4x" /></Link></div>
            </div>
            <div style={{position: "fixed"}}></div></>
    )
}

export default MainByline;