import { ITheme } from "./themeSlice/types";

export const COLORS = {
  white: "#ffffff",
  red: "#ff4a4a",

  primaryLightColor: "#eeebe7",
  primaryColor: "#adaba8",
  primaryDarkColor: "#3b3938",

  accentLightColor: "#b4d4d2",
  accentColor: "#6f9491",
  accentDarkColor: "#526e6c",

  disabledButton: "#d0d9d7",
  activeButton: "#364746",

  modalCoverLight: "rgba(59, 57, 56, 0.7)",
  modalCoverDark: "rgba(122, 117, 115, 0.7)",
};

export const LIGHT: ITheme = {
  name: "light",
  colors: {
    primaryColor: COLORS.primaryColor,
    background: COLORS.white,
    text: COLORS.primaryDarkColor,
    modal: {
      background: COLORS.white,
      text: COLORS.primaryDarkColor,
      cover: COLORS.modalCoverLight,
    },
    button: {
      background: COLORS.primaryLightColor,
      text: COLORS.primaryDarkColor,
      border: COLORS.primaryDarkColor,

      accentBackground: COLORS.accentColor,
      accentText: COLORS.white,

      disabled: COLORS.disabledButton,

      hover: COLORS.accentLightColor,
      active: COLORS.activeButton,
    },
    input: {
      background: COLORS.white,
      text: COLORS.primaryDarkColor,
      placeholder: COLORS.primaryColor,
      border: COLORS.primaryDarkColor,
    },
    card: COLORS.primaryLightColor,
    error: COLORS.red,
    accentColor: COLORS.accentLightColor,
  },
};

export const DARK: ITheme = {
  name: "dark",
  colors: {
    primaryColor: COLORS.primaryColor,
    background: COLORS.primaryDarkColor,
    text: COLORS.primaryLightColor,
    modal: {
      background: COLORS.primaryDarkColor,
      text: COLORS.white,
      cover: COLORS.modalCoverDark,
    },
    button: {
      background: COLORS.accentColor,
      text: COLORS.white,
      border: COLORS.accentDarkColor,

      accentBackground: COLORS.accentDarkColor,
      accentText: COLORS.white,

      disabled: COLORS.disabledButton,

      hover: COLORS.accentDarkColor,
      active: COLORS.activeButton,
    },
    input: {
      background: COLORS.primaryDarkColor,
      text: COLORS.primaryLightColor,
      placeholder: COLORS.primaryColor,
      border: COLORS.primaryColor,
    },
    card: COLORS.primaryDarkColor,
    error: COLORS.red,
    accentColor: COLORS.accentColor,
  },
};
