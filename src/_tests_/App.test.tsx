import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App component", () => {
  test("renders button with default color 'red'", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("time-btn");
    expect(button).toBeTruthy();
    expect(button).toHaveStyle("background-color: red");
  });

  test("change of button color on click of button", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId("time-btn");
    fireEvent.click(button);
    expect(button).toHaveStyle("background-color: blue");
    fireEvent.click(button);
    expect(button).toHaveStyle("background-color: green");
    fireEvent.click(button);
    expect(button).toHaveStyle("background-color: red");
  });
});
