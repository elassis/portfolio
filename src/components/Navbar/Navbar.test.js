import React from "react";
import { screen, render } from "@testing-library/react";
import Navbar from "./Navbar";

test("Links rendering", () => {
  render(<Navbar />);
  const linkPortfolio = screen.getByText(/portfolio/i);
  expect(linkPortfolio).toBeIntheDocument;
});

test("Hamburger rendering", () => {
  render(<Navbar />);
  const hamburger = screen.getByRole('img');
  expect(hamburger).toBeIntheDocument;
});
