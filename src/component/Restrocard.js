import { CDN_URL } from "../utlis/constant"
const Restrocard=(resitems)=>{
    const {name,cuisines,costForTwo,avgRating,locality,cloudinaryImageId}=resitems.resitems.info
    
    return (
    <div className="restro-card">
       <div className="food-image">
          <img src={CDN_URL+cloudinaryImageId }alt="res-card" />
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