import Restrocard from "./Restrocard"
import reslist from "../utlis/mockdata"
import {useState} from "react"
const Body=()=>{
   const [resrant,setresrant]=useState(reslist)
 

 return(<div className="body">
    <div className="search">
      <button id="filter_btn" onClick={()=>{
       var filterlist=resrant.filter((res)=>{ return res.avgRating>4.5})
       setresrant(filterlist)
      }
      }>Filter AVG 4.5</button></div>
      
      
    <div className="resto-menu">
     {resrant.map((restrant)=>{
       return (
    <Restrocard resitems={restrant} key={restrant.id}/>)
 
     })} 
      </div>
    </div>
    )
 }
 export default Body