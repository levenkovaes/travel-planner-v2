import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../../../app/store";
import { DARK, LIGHT } from "..";
import { IThemeState } from "./types";

const initialState: IThemeState = window.matchMedia(
  "(prefers-color-scheme: DARK)"
).matches
  ? { currentTheme: DARK }
  : { currentTheme: LIGHT };

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.currentTheme.name === "light") {
        state.currentTheme = DARK;
      } else {
        state.currentTheme = LIGHT;
      }
    },
  },
});

export const themeSliceReducer = themeSlice.reducer;

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => {
  return state.theme.currentTheme;
};
