import { LOGO } from "../utlis/constant"
const Header=()=>{
    return(
    <div className="header">
       <div className="logo">
          <img src={LOGO}alt="" />
       </div>
       <div className="nav-item">
          <ul>
             <li>HOME</li>
             <li>ABOUT US</li>
             <li>CONTACT US</li>
             <li>KART</li>
          </ul>
       </div>
 
    </div>
    )
 }
 export default Header