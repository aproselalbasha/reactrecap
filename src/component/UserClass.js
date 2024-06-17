import React from "react";
import { json } from "react-router-dom";
export class User extends React.Component
{
    constructor(props){
       super(props)
       this.state={
        count:0,
        
       }
      console.log(this.props.name+"child constructor")
       
   

    }
    async componentDidMount(){
    // this. timer= setInterval(() => {
    //       console.log("timer")
            
    //     }, 1000);
      const data= await fetch("https://jsonplaceholder.typicode.com/posts")
      var jsondata= await data.json()
    
      
    
        console.log(this.props.name+"child didmount")
      
    }
    componentWillUnmount(){
// clearInterval(this.timer)

    }
      
    
    render(){
        console.log(this.props.name+"child render")
        const{name,location}=this.props
        const{count,count1}=this.state
        return(
            < div className="user-card">
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        

                        
                    })


                }}>➕</button>
                <button onClick={()=>{
                    this.setState({
                        count:Math.max(this.state.count-1,0)
                        


                    })

                }}>➖</button>

              
               
             <h3>Name:{name}</h3>
             <p>LOCATION:{location}</p>
            </div>
           
        )
    }

}
export default User
