import { render, screen } from "@testing-library/react";
import Restrocard from "../Restrocard";
import mockdata from "../../component/MOCKDATA/mockdata.json";
import Context from "../../utlis/Context";
import "@testing-library/jest-dom"
import { Promoted } from "../Restrocard";

it("should render the component with data", () => {
  render(
   
      <Restrocard resitems={mockdata.resitems} />
    
  );

  expect(screen.getByText("Pizza Hut")).toBeInTheDocument();
 
});

it("should render the component with PROmoted", () => {
  const IsPromoted = Promoted(Restrocard);
  render(
   
      <IsPromoted resitems={mockdata.resitems} />
    
  );

  expect(screen.getByText("OPEN")).toBeInTheDocument();
 
});

