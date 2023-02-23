import { render, screen } from "@testing-library/react";
import WeatherInfo from "./WeatherInfo";
import React from "react";

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
  it("should render data", () => {
    render(
      <WeatherInfo
        degrees={5}
        city={"London"}
        date={"23"}
        day={"Sunday"}
        status={"Rainy"}
      />
    );
    const weatherElement = screen.getAllByRole("info");
    expect(weatherElement).toHaveLength(3);
  });
});
