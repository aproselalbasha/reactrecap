import { useEffect,useState } from "react"

const usefetchapi=()=>{
    const [resrant,setresrant]=useState([])
    const [newresrant,setnewresrant]=useState([])
    useEffect(()=>{

 fetchapi()
    },[])
    async function fetchapi (){
        data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        json= await data.json()
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        const apidate=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setresrant(apidate)
        setnewresrant(apidate)
        
       }

    return [resrant,newresrant,setnewresrant]
}
export default usefetchapi