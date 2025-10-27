import React from "react";
import ReactDOM from "react-dom/client";

import { PortfolioApp } from "./portfolioApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppPortfolioContext } from "./context/ContextApp";
import "./index.css";
import "tailwindcss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppPortfolioContext>
        <PortfolioApp />
      </AppPortfolioContext>
    </Provider>
  </React.StrictMode>
);
