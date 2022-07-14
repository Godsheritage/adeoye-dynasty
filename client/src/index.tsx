import "./index.scss";
import "./main.scss";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import configureAppStore from "./Store/configureStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={configureAppStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
