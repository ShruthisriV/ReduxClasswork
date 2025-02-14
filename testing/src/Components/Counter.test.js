import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("initial state check", () => { //to test the inital state
    //render and store the rendered element to be checked
    render(<Counter></Counter>) //rendering the Counter
    const countVal = screen.getByText("0");
    const plusText = screen.getByText("+");
    const minusText = screen.getByText("-");

    //assertion
    expect(countVal).toBeInTheDocument();
    expect(plusText).toBeInTheDocument();
    expect(minusText).toBeInTheDocument();

})

test("increment count", () => { //to test the inital state
    //render and store the rendered element to be checked
    render(<Counter></Counter>) 
    const plusText = screen.getByText("+");
    fireEvent.click(plusText);
    const countVal = screen.getByText("9");

    //assertion
    expect(countVal).toBeInTheDocument();
    

})

test("decrement count", () => { //to test the inital state
    //render and store the rendered element to be checked
    render(<Counter></Counter>)
    const minusText = screen.getByText("-");
    fireEvent.click(minusText);
    const countVal = screen.getByText("-1");

    //assertion
    expect(countVal).toBeInTheDocument(); 

})