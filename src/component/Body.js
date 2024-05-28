import Restrocard from "./Restrocard"
import reslist from "../utlis/mockdata"
const Body=()=>{
 return(<div className="body">
    <div className="search">search</div>
    <div className="resto-menu">
     {reslist.map((restrant)=>{
       return (
    <Restrocard resitems={restrant} key={restrant.id}/>)
 
     })} 
      </div>
    </div>
    )
 }
 export default Body