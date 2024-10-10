import React from "react";
import { screen, render } from "@testing-library/react";
import { colors } from "../../../styles/colors";
import '@testing-library/jest-dom';
import Title from "./Title";


test('Title renders correctly', () => {
  render(<Title>Hello world</Title>)

  const TitleElement = screen.getByText(/Hello world/i);

  expect(TitleElement).toBeIntheDocument;
});

test('Title renders w/ custom props', () => {
  render(<Title color={colors.blue} weight="500">Hello world</Title>)

  const TitleElement = screen.getByText(/Hello world/i);

  expect(TitleElement).toHaveStyle(`color:#${colors.blue}`);
  expect(TitleElement).toHaveStyle(`font-weight:500`);
});