import { screen, fireEvent, render } from "@testing-library/react";
import LabelBox from "../components/LabelBox";

test("check label class", () => {
  render(<LabelBox />);
  const checkbox = screen.getByTestId("checkbox");

  expect(checkbox.parentElement).toHaveClass("unchecked");
  fireEvent.click(checkbox);
  expect(checkbox.parentElement).toHaveClass("checked");
});
