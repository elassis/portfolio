import React from "react";
import { screen, render } from "@testing-library/react";
import MainPhoto from "./MainPhoto";



test("Component rendering", () => {
  render(<MainPhoto />);
  const mainPhotoComponent = screen.getByTestId('photo-container');
  expect(mainPhotoComponent).toBeIntheDocument;
});