import { render, screen } from "@testing-library/react";
import WeatherInfo from "./WeatherInfo";

describe("Home Page", () => {
  it("should render home page", () => {
    render(
      <WeatherInfo
        degrees={5}
        city={"London"}
        date={"23"}
        day={"Sunday"}
        status={"Rainy"}
      />
    );
    const mainElement = screen.getByRole("weather-container");
    expect(mainElement).toBeInTheDocument();
  });
});
