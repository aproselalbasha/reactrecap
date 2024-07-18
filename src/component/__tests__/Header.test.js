import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appstore from "../../utlis/appstore"
import { BrowserRouter } from "react-router-dom"

it("shout check header button is there or not",()=>{

    render(
        <Provider store={appstore}>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
        </Provider>
    
)
    const buttoncheck=screen.getByRole("button")
    expect(buttoncheck).toBeInTheDocument()
})
it("shout check  cart  is there or not",()=>{

    render(
        <Provider store={appstore}>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
        </Provider>
    
)
    
})
it("shout check  kart regin   is there or not",()=>{

    render(
        <Provider store={appstore}>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
        </Provider>
    
)
    const buttoncheck=screen.getByText(/KART/)
    expect(buttoncheck).toBeInTheDocument()
})
it("shout check  login button   is there or not",()=>{

    render(
        <Provider store={appstore}>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
        </Provider>
    
)
    const buttoncheck=screen.getAllByRole("button" ,{name:"LOGIN"})
    expect(buttoncheck[0]).toBeInTheDocument()
})
it("shout check  login button  change to logout ",()=>{

    render(
        <Provider store={appstore}>
        <BrowserRouter>
        <Header/>
        </BrowserRouter>
        </Provider>
    
)
    const buttoncheck=screen.getByRole("button",{name:"LOGIN"})
    fireEvent.click(buttoncheck)
    const logoutbutton=screen.getByRole("button",{name:"LOGOUT"})
    expect(logoutbutton).toBeInTheDocument()
})

