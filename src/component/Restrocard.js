import { CDN_URL } from "../utlis/constant"
const Restrocard=(resitems)=>{
    const {name,cuisines,costForTwo,avgRating,locality,cloudinaryImageId}=resitems.resitems.info
    
    return (
    <div className=" mt-7 mr-3 p-1 restro-card   w-[250px]  h-[350px]  bg-slate-500  rounded-lg overflow-hidden hover:border  border-solid border-black">
       <div className="food-image">
          <img className="  w-[500px] h-52 rounded-xl" src={CDN_URL+cloudinaryImageId }alt="res-card" />
       </div>
       <div className="menu-items">
          <h3>{name}</h3>
          <p className="cuisines">{cuisines.join(",")}</p>
          <p>{avgRating} ⭐⭐⭐</p>
          <p>{costForTwo}</p>
        
 
       </div>
      
 
    </div>
 )}
 export default Restrocard