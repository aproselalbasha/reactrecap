
import { useParams } from "react-router-dom";
import { LOADING_URL, MENU_URL } from "../utlis/constant";
import userestromenu from "../utlis/userestromenu";
import Menuitemheader from "./Menuitem-Header";
import { useState } from "react";
const dummy="dummy";

Restromenu=()=>{
    
    const[showindex,setshowindex]=useState(null)
    handleindex=(index)=>{
        showindex===index?setshowindex(null):setshowindex(index)

    }
    
    const{resid}=useParams()
    const resmenudata=userestromenu(resid)
    
    
 if(resmenudata===null){
        return(<img src={LOADING_URL} alt="" />)
    }
    // console.log(resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards[0].card.info.name)
     
  console.log(resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)
   var{itemCards}=resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

const catraory = resmenudata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => 
    c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
    c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

console.log(catraory[1].card.card.title)

 return(
        <div className="menu-head  mt-8  mx-[10%]    ">
           
            <h1 className=" text-2xl mt-8  text-center " >{resmenudata.data.cards[2].card.card.info.name}</h1>
            <h3 className="mt-8 text-center">---Menu items--</h3>
            {catraory.map((e,index)=><Menuitemheader  props={e?.card?.card} 
            status={index===showindex?true:false}
            showindex={()=>handleindex(index)}
           dummy={dummy}
            
            />)}
            
          
        </div>
    )
}
export default Restromenu;