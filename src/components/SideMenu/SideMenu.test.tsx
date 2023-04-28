import React from "react";
import {
  render,
  fireEvent,
  getByRole,
  getByPlaceholderText,
} from "@testing-library/react";
import SideMenu from "./SideMenu";
import { CityData, SideWindowProps, WeatherData } from "./SideMenu.props";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "../../state/weatherDataSlice/weatherDataSlice";
describe("SideWindow component", () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        cities: weatherDataSlice,
      },
    });
  });
  const cities: CityData[] = [
    {
      name: "City 1",
    },
    {
      name: "City 2",
    },
    {
      name: "City 3",
    },
    {
      name: "City 4",
    },
  ];
  const weatherDetails: WeatherData = {
    cloudy: 86,
    wind: 5,
    humidity: 70,
    rain: 0,
  };

  it("renders the search field", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <SideMenu cities={cities} weatherDetails={weatherDetails} />
      </Provider>
    );
    expect(getByRole("search")).toBeInTheDocument();
  });

  it("renders up to four city fields", () => {
    const { queryByText } = render(
      <Provider store={store}>
        <SideMenu cities={cities} weatherDetails={weatherDetails} />
      </Provider>
    );
    expect(queryByText("City 1")).toBeInTheDocument();
    expect(queryByText("City 2")).toBeInTheDocument();
    expect(queryByText("City 3")).toBeInTheDocument();
    expect(queryByText("City 4")).toBeInTheDocument();
  });

  it("renders weather details for each city", () => {
    const { queryByText } = render(
      <Provider store={store}>
        <SideMenu cities={cities} weatherDetails={weatherDetails} />
      </Provider>
    );
    expect(queryByText("Cloudy:")).toBeInTheDocument();
    expect(queryByText("Wind:")).toBeInTheDocument();
    expect(queryByText("Humidity:")).toBeInTheDocument();
    expect(queryByText("Rain:")).toBeInTheDocument();
  });

  it("displays a message when no cities match the search term", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <SideMenu cities={cities} weatherDetails={weatherDetails} />
      </Provider>
    );
    const searchInput = getByPlaceholderText("Another location");
    fireEvent.change(searchInput, { target: { value: "No cities found" } });
    expect(getByText("No cities found")).toBeInTheDocument();
  });
});
