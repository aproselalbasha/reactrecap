import react ,{Suspense, lazy} from "react"
import ReactDOM from "react-dom/client"
import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
// import About from "./component/About"
import Contact from "./component/Contact"
import Error from "./component/Error"
import Restromenu from "./component/Restromenu"
// import Glossary from "./component/Glossary"

const Glossary=lazy(()=>import("./component/Glossary"))
const About=lazy(()=>import("./component/About"))

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
         element:<Suspense fallback={<h1>loading.....</h1>}><About/></Suspense>
      },
      {
         path:"restromenu/:resid",
         element:<Restromenu/>

      },
      {
         path:"glossary",
         element: <Suspense fallback={<h1>loading.....</h1>}><Glossary/></Suspense>
         
         


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