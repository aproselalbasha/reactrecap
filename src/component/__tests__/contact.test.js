import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("grouping the contact us page case",()=>{
    it("contactus working or not",()=>{
        render(<Contact/>)
        const find=screen.findAllByRole("heading")
        expect(find).toBeInTheDocument
     })
     test("to check the button",()=>{
         render(<Contact/>)
         const button=screen.getByRole("button")
         expect(button).toBeInTheDocument
     })
     test("number of input box",()=>{
         render(<Contact/>)
         const inputboxs=screen.getAllByRole("textbox")
         expect(inputboxs.length).toBe(2)
     })

})
