import { useContext } from "react"
import { CDN_URL } from "../utlis/constant"
import Context from "../utlis/Context"
const Restrocard=(resitems)=>{
   // console.log(resitems)
   
   // const{username}=useContext(Context)
    const {name,cuisines,costForTwo,avgRating,locality,cloudinaryImageId}=resitems.resitems.info
    
    return (
    <div data-testid="rescard" className=" mt-7 mr-3 p-1 restro-card   w-[250px]  h-[390px]  bg-slate-500  rounded-lg overflow-hidden hover:border  border-solid border-black">
       <div className="food-image">
          <img className="  w-[500px] h-52 rounded-xl" src={CDN_URL+cloudinaryImageId }alt="res-card" />
       </div>
       <div className="menu-items ">
          <h3 className="  text-lg  bg-orange-500 text-center  mb-2" >{name}</h3>
          <p className="cuisines">{cuisines.join(",")}</p>
          <p>{avgRating} ⭐⭐⭐</p>
          <p>{costForTwo}</p>
          {/* <p>{username}</p> */}
        
 
       </div>
      
 
    </div>
 )}
 export const Promoted=(Restrocard)=>{
return (props)=>{
   return (
      <div>
         <label className=" absolute text-slate-100 bg-gray-950" >OPEN</label>
         <Restrocard {...props}/>
      </div>
   )
}
 }
 export default Restrocard