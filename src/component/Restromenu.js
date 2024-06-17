
import { useParams } from "react-router-dom";
import { LOADING_URL, MENU_URL } from "../utlis/constant";
import userestromenu from "../utlis/userestromenu";


Restromenu=()=>{
    const{resid}=useParams()
    const resmenudata=userestromenu(resid)
    
    
 if(resmenudata===null){
        return(<img src={LOADING_URL} alt="" />)
    }
    console.log(resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards[0].card.info.name)
    //  console.log(resmenudata?.data)
    // console.log(resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card?.card.itemCards[1].card.info.description)
   var{itemCards}=resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  console.log(itemCards[0].card.info)
    
   
    console.log(resmenudata.data.cards[2].card.card.info.cloudinaryImageId)

 return(
        <div className="menu-head  ml-[40%] mt-8   ">
            <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resmenudata.data.cards[2].card.card.info.cloudinaryImageId} alt="" className="menu-img  w-[290px]  rounded-2xl" />
            <h1 className=" ml-12 text-2xl mt-8" >{resmenudata.data.cards[2].card.card.info.name}</h1>
            <h3 className="ml-12  mt-8">---Menu items--</h3>
            <ul className="menu-list">
              {itemCards.map((e)=>{  return (
                <li  key={e.card.info.id}  className="li-menu mt-7"> <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+e.card.info.imageId} alt="" className="menu-img w-[150px] mb-7" /> {e.card.info.name}  RS={e.card.info.price/100} <hr /> </li>
                    )})}
                
            </ul>
        </div>
    )
}
export default Restromenu;