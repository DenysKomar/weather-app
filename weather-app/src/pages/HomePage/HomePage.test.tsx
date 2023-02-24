import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import React from "react";
import { Provider } from "react-redux";
import { RootState, store } from "../../state/state";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
describe("Home Page", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      degrees: 5,
      city: "London",
      date: "23",
      day: "Sunday",
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
