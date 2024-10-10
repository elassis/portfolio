import React from "react";
import { screen, render } from "@testing-library/react";
import SkillsBox from "./SkillsBox";

const defaultProps = {
  title: 'text-title',
  icons: [
    { icon_title: 'icon-title', src: 'fake-url' }
  ]
}

test("SkillsBox rendering", () => {
  render(<SkillsBox {...defaultProps} />);
  const box = screen.getByText(/text-title/i);
  expect(box).toBeIntheDocument;
});

/* test("Hamburger rendering", () => {
  render(<Navbar />);
  const hamburger = screen.getByRole('img');
  expect(hamburger).toBeIntheDocument;
}); */