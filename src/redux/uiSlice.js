import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    scrollValue: 0,
    IsContactMe: false,
    IsMinimizeChat: false,
  },
  reducers: {
    onScrollValue: (state, { payload }) => {
      state.scrollValue = payload;
    },
    onToggleContactMeChat: (state) => {
      state.IsContactMe = !state.IsContactMe;
    },
    onToggleMinimizeChat: (state) => {
      state.IsMinimizeChat = !state.IsMinimizeChat;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onScrollValue, onToggleContactMeChat, onToggleMinimizeChat } =
  uiSlice.actions;
