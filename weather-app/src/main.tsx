import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./state/state";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
