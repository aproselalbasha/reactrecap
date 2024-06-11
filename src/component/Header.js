import { useEffect, useState } from "react"
import { LOGO } from "../utlis/constant"
import { Link } from "react-router-dom"
import Body from "./Body"
const Header=()=>{
   const[login_button,setlogin_button]=useState("LOGIN")
   useEffect(()=>{
      console.log("use effect called header ")
   },[])
    return(
    <div className="header">
       <div className="logo">
          <img src={LOGO}alt="" />
       </div>
       <div className="nav-item">
          <ul className="ul" > 
            
             <li className="li"><Link to={"/"} className="link" >HOME</Link> </li>
             <li className="li"><Link to={"/about"} className="link">ABOUT </Link> </li>
             <li className="li"><Link to={"/contact"} className="link">CONTACT </Link> </li>
             <li className="li">KART</li>
            <li className="li"> <button className="login_btn" onClick={()=>{
              login_button=="LOGIN"?setlogin_button("LOGOUT"):setlogin_button("LOGIN")

             }}>{login_button}</button></li>
          </ul>
       </div>
 
    </div>
    )
 }
 export default Header