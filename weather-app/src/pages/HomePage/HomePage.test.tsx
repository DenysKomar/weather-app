import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import React from "react";
describe("Home Page", () => {
  it("should render home page", () => {
    render(<HomePage />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
