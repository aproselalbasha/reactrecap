import react from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./component/About"
import Contact from "./component/Contact"
import Error from "./component/Error"
import Restromenu from "./component/Restromenu"



const Applayout=()=>{
   return(
      <div>
   <Header/>
   <Outlet/>
   <Footer/>
   </div>

)


}
const approuter=createBrowserRouter([
   {
      path:"/",
      element:<Applayout/>,
      children:[{
         path:"/",
         element:<Body/>,},
       {  
         path:"about",
         element:<About/>
      },
      {
         path:"restromenu/:resid",
         element:<Restromenu/>

      },
      {
         path:"contact",
         element:<Contact/>
      }],
      errorElement:<Error/>


   },
   
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={approuter}/>)