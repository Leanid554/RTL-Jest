import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("TEST APP", () => {
  test("check button and text", () => {
    render(<App />);
    const btn = screen.getByRole("button", { name: /click me/i });
    const text = screen.queryByText(/hello world/i);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(btn).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("check button", async () => {
    render(<App />);
    const HelloWorld = await screen.findByText(/data/i);
    expect(HelloWorld).toBeInTheDocument();
    expect(HelloWorld).toHaveStyle({ color: "red" });
    screen.debug();
  });

  test("Click event", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    //fireEvent.change(input, {
    //  target: { value: "123123" },
    //});
    userEvent.type(input, "123123");
    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
});
