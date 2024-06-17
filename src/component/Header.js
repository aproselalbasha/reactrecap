import { useEffect, useState } from "react"
import { LOGO } from "../utlis/constant"
import { Link } from "react-router-dom"
import Body from "./Body"
import useonline from "../utlis/useonline"
const Header=()=>{
   const onlinestatus=useonline()
   const[login_button,setlogin_button]=useState("LOGIN")
   useEffect(()=>{
      console.log("use effect called header ")
   },[])
    return(
    <div className="header flex justify-between  bg-slate-800    text-stone-200"> 
       <div className="logo  w-[150px]   ">
          <img src={LOGO}alt="" />
       </div>
       <div className="nav-item ">
          <ul className="ul flex p-5 m-4   items-center " > 
            <li className="li mr-10" >{onlinestatus===true?"🟢ONLINE":"🔴OFFLINE"}</li>
             <li className="li mr-10"><Link to={"/"} className="link" >HOME</Link> </li>
             <li className="li li mr-10"><Link to={"/about"} className="link">ABOUT </Link> </li>
             <li className="li li mr-10"><Link to={"/contact"} className="link">CONTACT </Link> </li>
             <li className="li li mr-10"><Link to={"/glossary"} className="link">GLOSSERY</Link></li>
             <li className="li li mr-10">KART</li>
            <li className="li li mr-10 hover:bg-red-600"> <button className="login_btn" onClick={()=>{
              login_button=="LOGIN"?setlogin_button("LOGOUT"):setlogin_button("LOGIN")

             }}>{login_button}</button></li>
          </ul>
       </div>
 
    </div>
    )
 }
 export default Header