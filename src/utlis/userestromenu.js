import { useEffect, useState } from "react"
import { MENU_URL } from "./constant"

const userestromenu=(resid)=>{
    const [resmenudata,setresmenudata]=useState(null)

useEffect(()=>{
    resmenu()

},[])
const resmenu=async ()=>{
        
    const fetchdata=await fetch(MENU_URL+resid)
    const menudata=await fetchdata.json()
      console.log(menudata)
      
     setresmenudata(menudata)


    }

return resmenudata
}

export default userestromenu