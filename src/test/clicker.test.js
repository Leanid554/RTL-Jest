import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Clicker from "../components/Clicker";

test("It renders and incements the counter", () => {
  render(<Clicker />);

  const counterText = screen.getByText(/you pressed 0/i);
  expect(counterText).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /press/i });
  fireEvent.click(button);

  const updateCounterText = screen.getByText(/you pressed 1/i);
  expect(updateCounterText).toBeInTheDocument();

  fireEvent.click(button);
  const finalCounterText = screen.getByText(/you pressed 2/i);
  expect(finalCounterText).toBeInTheDocument();
});
