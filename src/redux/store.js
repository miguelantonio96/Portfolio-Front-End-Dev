import { configureStore } from "@reduxjs/toolkit";
import { portfolioSlice } from "./portfolioSlice";
import { uiSlice } from "./uiSlice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
    ui: uiSlice.reducer,
  },
});
