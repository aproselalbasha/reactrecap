import { fireEvent, render ,screen} from "@testing-library/react"
import Body from "../Body"
import mockmain from "../MOCKDATA/restromenu.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"



    global.fetch=jest.fn(()=>{
        return Promise.resolve({
            json:()=>{
                return Promise.resolve(mockmain)

            }
        })
    })
    it("should run the top rated restorent ", async()=>{
        await act(async()=>{
         render( <BrowserRouter>
         <Body/>
         
         </BrowserRouter>
         
     )
        })
        expect(screen.getAllByTestId("rescard").length).toBe(20)
        const topbtn=screen.getByTestId("top")
        fireEvent.click(topbtn)
        const rescard=screen.getAllByTestId("rescard")
        expect(rescard.length).toBe(6)

       
     
     })

it("should run the body component with search list of pizza", async()=>{
    await act(async()=>  render(
        <BrowserRouter> <Body/> </BrowserRouter>));

        expect(screen.getAllByTestId("rescard").length).toBe(20)
     
     fireEvent.change(screen.getByTestId("searchbar"),{target:{value:"pizza"}})
     fireEvent.click( screen.getByTestId("search"))

     expect(screen.getAllByTestId("rescard").length).toBe(5)
     

    //   const searchbtn= screen.getByTestId("search");
    //   const searchbar=screen.getByTestId("searchbar")
    //   fireEvent.change(searchbar,{target:{value:"burger"}})
    //   fireEvent.click(searchbtn)
    //    const rescard=screen.getAllByTestId("rescard")
    //    expect(rescard.length).toBe(1)
       

})


