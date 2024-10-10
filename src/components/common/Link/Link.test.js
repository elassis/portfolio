import React from "react";
import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Link from "./Link";

const defaultProps = {
  text:'link',
  route:'http://testLink.com',
};

test("Link component displays text and attribute", () => {
  render(<Link {...defaultProps} />);
  const linkElement = screen.getByText(/link/i);
  expect(linkElement).toBeIntheDocument;
  expect(linkElement).toHaveAttribute('href','http://testLink.com');
});

