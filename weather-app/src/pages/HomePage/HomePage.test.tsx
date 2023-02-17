import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Home Page", () => {
  it("should render home page", () => {
    render(<HomePage />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
