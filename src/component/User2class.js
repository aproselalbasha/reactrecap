
import React from "react"
class User2 extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.name+"child constructor")
        this.state={
            userinfo:{
                name:"dummy",
                location:"dummy location"
            }
        }

    }
    async componentDidMount(){
       const  data=await fetch("https://api.github.com/users/aproselalbasha")
      const  jsondata= await data.json()
       console.log(jsondata)
       this.setState({
        userinfo:jsondata
       })

    }
    componentDidUpdate(){
        console.log("component did update called ")
    }
    componentWillUnmount(){
        console.log("unmount will be called ")
    }
    
    render(){
       
      
        const {login,created_at}=this.state.userinfo
        return(
            < div className="user-card">
            <h3>Name:{login}</h3>
            <p>created:{created_at}</p>
           </div>
        )
    }
}
 
export { User2}