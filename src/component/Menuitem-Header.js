import { LOADING_URL } from "../utlis/constant"
import Menubody from "./MenuBody"
import { LOADING_URL } from "../utlis/constant"


Menuitemheader=({props,status,showindex,dummy})=>{
  
 console.log(dummy)
    handlaeclick=()=>{
        showindex()
      

    }
    console.log(props)
    return(
       
    <div className=" ">
        
        <div className=" ">
        
            <div className="     my-10 text-lg   shadow-lg" >
                <div className="flex justify-between border   border-black " onClick={handlaeclick}>
                <h2 className="   ">{props.title} ({props.itemCards.length}) </h2>
                <>🔽</>

                </div>
          
           
          

            <div className=" mr-[100px]  ">
            <span className="mt-[90px]" >
               {status && <Menubody items={props.itemCards}  dummy={dummy}/> } 

                </span>

            </div>

            
           
           
          
            </div>
          
            
            
            
        
        </div>
       
    </div>)
       
    
}
export default Menuitemheader