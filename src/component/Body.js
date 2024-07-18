import Restrocard, {Promoted}from "./Restrocard"
import reslist from "../utlis/mockdata"
import {useContext, useEffect, useState} from "react"
import { Link } from "react-router-dom"
import useonline from "../utlis/useonline"
import usefetchapi from "../utlis/usefetchapi"
import Context from "../utlis/Context"

const Body=()=>{
  const{setlogin,username}=useContext(Context)
  
 
const onlinestatus=useonline()
const [search,setsearch]=useState("")
const [resrant,newresrant,setnewresrant]=usefetchapi()
const Ispromoted=Promoted(Restrocard)

 function Empty(props){
    return(<>
    
    <h2>{props.items}:Not found in result</h2>
    </>)
   }
  
   if(onlinestatus===false){
    return(<div>
      <img src="https://cdn.dribbble.com/users/251873/screenshots/9288094/media/a1c2f89065f68e1b2b5dcb66bdb9beb1.gif" alt="" />
      <h1>Look look like offline</h1>
    </div>)

   }
  
 if(resrant.length===0){
  return(<img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="" />)
 }



return  (<div className="body">
  <div className="body-mid flex justify-start  ml-3">
  <div className="search  mt-3 my-3 ">
    <input type="text" data-testid="searchbar" className="search-box border  border-solid   border-black w-[700px]  " value={search} onChange={(e)=>{
     setsearch(e.target.value)

    }} />
    <button data-testid="search" className=" mx-5       rounded-sm  bg-cyan-700"  onClick={()=>{
      const filterrestro=resrant.filter((e)=>{ return e.info.name.toLowerCase().includes(search.toLowerCase())})
     
     
      setnewresrant(filterrestro)
      
   

    }}>Search</button>
    
    
  </div>
    <div className="filter   mt-3 my-3 bg-cyan-700  " >
      <button   id="filter_btn" data-testid="top" onClick={()=>{
       var filterlist=resrant.filter((res)=>{ return res.info.avgRating>4.5})
       setnewresrant(filterlist)
     
       
       
      }
      }>TOP RESTRO </button>
      
      </div>
      <div>
        <label className="ml-2">USER NAME:</label>
        <input type="text" className="border  border-black m-3"value={username} onChange={(e)=>{setlogin(e.target.value)
          
        }}/>
      </div>

  </div>

      
      
    <div className="resto-menu flex flex-wrap   justify-evenly ">
    
     {  newresrant.length===0?(<Empty items={search} />):
     newresrant.map((restrant)=>{
      
       return (
      <Link  key={restrant.info.id} to={"/restromenu/"+restrant.info.id} className="link-body">
         { restrant.info.isOpen?
         <Ispromoted resitems={restrant} />:
        <Restrocard resitems={restrant}  /> }</Link>
    )
 
     })} 
      </div>
    </div>
    )
 }
 export default Body