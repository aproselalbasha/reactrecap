
 import { BrowserRouter } from "react-router-dom"
import data from "../MOCKDATA/cartmockdata.json"
import { act } from "react"
import { fireEvent, render } from "@testing-library/react"
import Restromenu from "../Restromenu.js"
import { screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appstore from "../../utlis/appstore.js"
import Header from "../Header.js"
import "@testing-library/jest-dom"
import Cart from "../Cart.js"

 
    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json:()=>{
                return Promise.resolve(data)

            }
        })
    })
it("should check the cart page data",async()=>{
        await act(async()=>{
         render(
            <Provider store={appstore}>
                <BrowserRouter>
                <Restromenu/>
                <Header/>
                <Cart/>
                </BrowserRouter>
            </Provider>
             
         )})
        
        
const buttoncheck=screen.getByText("KART(0:items)")
expect(buttoncheck).toBeInTheDocument
 
 fireEvent.click(screen.getByText("Recommended (11)"))
 const fooditem=screen.getAllByTestId("fooditem")
 expect(fooditem.length).toBe(11)
  const cartbtn=screen.getAllByRole("button",{name:"ADD+"})
  fireEvent.click(cartbtn[0])
 
expect(screen.getByText("KART(1:items)")).toBeInTheDocument
expect(screen.getAllByTestId("fooditem").length).toBe(12)

fireEvent.click(screen.getByRole("button",{name:"CLEAR CART"}))
expect(screen.getAllByTestId("fooditem").length).toBe(11)
expect(screen.getByText("KART(0:items)")).toBeInTheDocument
 
  
  

        
        
         

         

         
})