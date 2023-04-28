import { render, screen, waitFor } from "@testing-library/react";
import WeatherInfo from "./WeatherInfo";
import React from "react";
import IWeatherInfo from "./WeatherInfo.props";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

describe("Home Page", () => {
  const weatherData: IWeatherInfo = {
    degrees: 5,
    city: "London",
    date: {
      time: "06:53",
      daystr: "Sunday",
      daynum: 6,
      month: "october",
      year: "2022",
    },
    status: "Rainy",
  };
  it("should render home page", () => {
    render(
      <WeatherInfo
        degrees={weatherData.degrees}
        city={weatherData.city}
        date={{
          time: "06:53",
          daystr: "Sunday",
          daynum: 6,
          month: "october",
          year: "2022",
        }}
        status={weatherData.status}
      />
    );
    const mainElement = screen.getByRole("weather-container");
    expect(mainElement).toBeInTheDocument();
  });
  it("should render data", () => {
    render(
      <WeatherInfo
        degrees={weatherData.degrees}
        city={weatherData.city}
        date={{
          time: "06:53",
          daystr: "Sunday",
          daynum: 6,
          month: "october",
          year: "2022",
        }}
        status={weatherData.status}
      />
    );
    const weatherElement = screen.getAllByRole("info");
    expect(weatherElement).toHaveLength(3);
  });
  it("should render status image", () => {
    render(
      <WeatherInfo
        degrees={weatherData.degrees}
        city={weatherData.city}
        date={{
          time: "06:53",
          daystr: "Sunday",
          daynum: 6,
          month: "october",
          year: "2022",
        }}
        status={weatherData.status}
      />
    );
    const imageElement = screen.getByRole("status");
    expect(imageElement).toBeInTheDocument();
  });
  it("should render date info", () => {
    render(
      <WeatherInfo
        degrees={weatherData.degrees}
        city={weatherData.city}
        date={{
          time: "06:53",
          daystr: "Sunday",
          daynum: 6,
          month: "october",
          year: "2022",
        }}
        status={weatherData.status}
      />
    );
    const dateElement = screen.getByRole("date");
    expect(dateElement).toBeInTheDocument();
  });
});
