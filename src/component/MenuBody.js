import { useDispatch } from "react-redux"
import { CDN_URL } from "../utlis/constant"
import {additems} from "../utlis/cartslice"

const  Menubody=({items,dummy})=>{
    // console.log(items[0].card.info.name)
    console.log(items.map((e)=>e.card.info)) 
    //props drilling
    console.log(dummy)
    const addbutton=useDispatch()
    addhandler=(e)=>{
        addbutton(additems(e))

    }
    
    return(
        <div>
          {items.map((e)=>(
            <div key={e.card.info.id} className="mt-[90px] mr-[10px]">

                <div className="flex  border">
             
                    <img src={CDN_URL+e.card.info.imageId} alt="" className=" w-[150px]  " />
                    <button  className=" bg-red-500 h-7  absolute " onClick={()=>addhandler(e)}>ADD+</button>
                    <span>
                    {e.card.info.name} 

                     <span className="pl-4">
                      RS:{e.card.info.price/100}
                    </span>
                    
                    </span>
                   
                </div>
               <p className=" text-sm    ">
               {e.card.info.description}
               </p>
            
            </div>
            ))}
        
        </div>
    )
}
export default Menubody