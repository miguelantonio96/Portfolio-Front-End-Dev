import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router";
import { PortfolioApp } from "./portfolioApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppPortfolioContext } from "./context/ContextApp";
import "tailwindcss";
import 'animate.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <AppPortfolioContext>
        <BrowserRouter>
          <PortfolioApp />
        </BrowserRouter>
      </AppPortfolioContext>
    </Provider>
  </React.StrictMode>
);
