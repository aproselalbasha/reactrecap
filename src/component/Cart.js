import { useDispatch, useSelector } from "react-redux";
import Menubody from "./MenuBody";
import { clearkart } from "../utlis/cartslice";

const Cart=()=>{
    const selecteditem= useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    clearcart=()=>{
dispatch(clearkart())
    }
    return(
        <div >

            <div className=" text-center text-2xl  bg-slate-500 ">
            <h1>CART</h1>

            </div>
            <div className="  text-center mt-6 ">
                <button className="  bg-black    text-zinc-50" onClick={clearcart}>CLEAR CART</button>
            </div>
       
        {selecteditem.length===0? <div><h1 className=" text-center mt-12  text-4xl">YOUR CART IS EMPTY </h1>
        <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" className=" " alt="" />
        </div>:
        <div  className=" bg-white w-6/12  bg-center ml-[30%]">
            <Menubody items={selecteditem}/>
        </div>}

       </div> 

    )
  
}
export default Cart;