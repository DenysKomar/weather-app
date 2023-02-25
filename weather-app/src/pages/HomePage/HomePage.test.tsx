import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
describe("Home Page", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      degrees: 5,
      city: "London",
      date: {
        time: `06:53`,
        daystr: "Sunday",
        daynum: 6,
        month: "october",
        year: "2022",
      },
      status: "Rainy",
    });
  });
  it("should render home page", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
