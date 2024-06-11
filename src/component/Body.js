import Restrocard from "./Restrocard"
import reslist from "../utlis/mockdata"
import {useEffect, useState} from "react"
import { Link } from "react-router-dom"

const Body=()=>{
   const [resrant,setresrant]=useState([])
   
   const [search,setsearch]=useState("")
   const [newresrant,setnewresrant]=useState([])
   useEffect(()=>{
   fetchapi()
   console.log("use effect called")
   },[] )
   async function fetchapi (){
    data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667")
    json= await data.json()
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    const apidate=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setresrant(apidate)
    setnewresrant(apidate)
    
   }
   function Empty(props){
    return(<>
    {console.log(props)}
    <h2>{props.items}:Not found in result</h2>
    </>)
   }
   console.log(useState)
  
 if(resrant.length===0){
  return(<img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="" />)
 }


 return  (<div className="body">
  <div className="body-mid">
  <div className="search">
    <input type="text" className="search-box" value={search} onChange={(e)=>{
     setsearch(e.target.value)

    }} />
    <button onClick={()=>{
      const filterrestro=resrant.filter((e)=>{ return e.info.name.toLowerCase().includes(search.toLowerCase())})
     
     
      setnewresrant(filterrestro)
      
   

    }}>Search</button>
    
    
  </div>
    <div className="filter">
      <button id="filter_btn" onClick={()=>{
       var filterlist=resrant.filter((res)=>{ return res.info.avgRating>4})
     
       setnewresrant(filterlist)
       
      }
      }>Top rated restro</button>
      
      </div>

  </div>
  
      
      
    <div className="resto-menu">
    
     {  newresrant.length===0?(<Empty items={search} />):
     newresrant.map((restrant)=>{
    
       return (
        <Link key={restrant.info.id} to={"/restromenu/"+restrant.info.id} className="link-body"><Restrocard resitems={restrant}  /> </Link>
    )
 
     })} 
      </div>
    </div>
    )
 }
 export default Body