import { useEffect } from "react"

const Contact=()=>{

     useEffect(  ()=>{
       const timer=setInterval(()=>{
        console.log("intervel")
       },1000);
       return()=>
        {
            clearInterval(timer)
        }
    

    })
    return(
        <>
        <h1>This is contat page </h1>
        </>
    )
}
export default Contact