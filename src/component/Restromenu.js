import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


Restromenu=()=>{
    const{resid}=useParams()
    
const [resmenudata,setresmenudata]=useState(null)
useEffect(()=>{
    resmenu()

    },[])

const resmenu=async ()=>{
        
    const fetchdata=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER")
      menudata=await fetchdata.json()
      console.log(menudata)
      
     setresmenudata(menudata)


    }
    if(resmenudata===null){
        return(<img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="" />)
    }
    console.log(resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards[0].card.info.name)
    //  console.log(resmenudata?.data)
    // console.log(resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card?.card.itemCards[1].card.info.description)
   var{itemCards}=resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log(itemCards[0].card.info)
    
   
    console.log(resmenudata.data.cards[2].card.card.info.cloudinaryImageId)

  
    
    return(
        <div className="menu-head">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resmenudata.data.cards[2].card.card.info.cloudinaryImageId} alt="" className="menu-img" />
            <h1>{resmenudata.data.cards[2].card.card.info.name}</h1>
            <h3>---Menu items--</h3>
            <ul className="menu-list">
              {itemCards.map((e)=>{  return (
                <li key={e.card.info.id}  className="li-menu"> <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+e.card.info.imageId} alt="" className="menu-img" /> {e.card.info.name}  RS={e.card.info.price/100} <hr /> </li>
                    )})}
                
            </ul>
        </div>
    )
}
export default Restromenu;