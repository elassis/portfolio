import React from "react";
import { screen, render } from "@testing-library/react";
import { colors } from "../../../styles/colors";
import '@testing-library/jest-dom';
import Text from "./Text";


test("Text component displays correctly", () => {
  render(<Text>hi, there</Text>);
  const textComponent = screen.getByText(/hi, there/i);
  expect(textComponent).toBeInTheDocument;
});

test("Text component displays custom props correctly", () => {
  render(<Text color={colors.blue}>hi, there</Text>);
  const textComponent = screen.getByText(/hi, there/i);
  expect(textComponent).toHaveStyle(`color:#${colors.blue}`);
})