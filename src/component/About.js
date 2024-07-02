import React from "react"
import { User2,User3 } from "./User2class"
import  User from "./UserClass"
import Context from "../utlis/Context"


class About extends React.Component{
    constructor(){
        super()
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent did mount")
    }
    render(){
        console.log("parent render");
 
        return(
            <>
            <h1>This is about page</h1>
            <div>
            <Context.Consumer>
                {({username})=>{

                    return( <h1>{" username from Context:"+username}</h1>)
                   

                }}
                   

         </Context.Consumer>
            </div>
            <div className="class-compo">
            <User name={"First"} location={"Chennai"}/>
            {/* <User2 name={"Sec"} location={"Chennai"}/> */}

            </div>
           
           
            </>
        )
    }
}
// const About=()=>{
//     return(
//         <>
//         <h1>This is about page</h1>
//         <User name={"Aprose"} location={"Chennai"}/>
//         {/* <User2 name={"AYAAN"} location={"Chennai"}/>
//         <User3 name={"LAL"} location={"Chennai"}/> */}
//         </>
//     )
// }
export default About