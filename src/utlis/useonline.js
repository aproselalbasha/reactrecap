import { useEffect, useState } from "react"


const useonline=()=>{
    const[onlinestatus,setonlinestatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlinestatus(false)


        })
        window.addEventListener("online",()=>{
            setonlinestatus(true)
        })

    },[])
    return onlinestatus
}
export default useonline