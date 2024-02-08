import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../../../app/store";
import { dark, light } from "../themes";
import { IThemeState } from "./types";

const initialState: IThemeState = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches
  ? { currentTheme: dark }
  : { currentTheme: light };

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.currentTheme.name === "light") {
        state.currentTheme = dark;
      } else {
        state.currentTheme = light;
      }
    },
  },
});

export const themeSliceReducer = themeSlice.reducer;

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => {
  return state.theme.currentTheme;
};
