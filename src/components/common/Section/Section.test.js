import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Section from "./Section";
import { colors } from "../../../styles/colors";


test("Section component displays correctly", () => {
  render(<Section children={<p>Hello world</p>} />);
  const sectionComponent = screen.getByTestId('section');
  //is in document
  expect(sectionComponent).toBeIntheDocument;
  //has the default color
  expect(sectionComponent).toHaveStyle(`background-color:#${colors.blue}`);
});

test("Section component displays custom styles", () => {
  render(<Section backgroundColor={colors.white} children={<p>Hello world</p>} />);
  const sectionComponentCustom = screen.getByTestId('section');
  //has the custom color
  expect(sectionComponentCustom).toHaveStyle(`background-color:#${colors.white}`);
});
