import { ITheme } from "./themeSlice/types";

const colors = {
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

export const light: ITheme = {
  name: "light",
  colors: {
    primaryColor: colors.primaryColor,
    background: colors.white,
    text: colors.primaryDarkColor,
    modal: {
      background: colors.white,
      text: colors.primaryDarkColor,
      cover: colors.modalCoverLight,
    },
    button: {
      background: colors.white,
      text: colors.accentDarkColor,
      border: colors.accentColor,

      accentBackground: colors.accentColor,
      accentText: colors.white,

      disabled: colors.disabledButton,

      hover: colors.accentDarkColor,
      activeBackground: colors.activeButton,
    },
    input: {
      background: colors.white,
      text: colors.primaryDarkColor,
      placeholder: colors.primaryColor,
      border: colors.primaryDarkColor,
    },
    error: colors.red,
    accentColor: colors.accentLightColor,
  },
};

export const dark: ITheme = {
  name: "dark",
  colors: {
    primaryColor: colors.primaryColor,
    background: colors.primaryDarkColor,
    text: colors.primaryLightColor,
    modal: {
      background: colors.primaryDarkColor,
      text: colors.white,
      cover: colors.modalCoverDark,
    },
    button: {
      background: colors.accentColor,
      text: colors.white,
      border: colors.accentDarkColor,

      accentBackground: colors.accentDarkColor,
      accentText: colors.white,

      disabled: colors.disabledButton,

      hover: colors.accentDarkColor,
      activeBackground: colors.activeButton,
    },
    input: {
      background: colors.primaryDarkColor,
      text: colors.primaryLightColor,
      placeholder: colors.primaryColor,
      border: colors.primaryColor,
    },
    error: colors.red,
    accentColor: colors.accentColor,
  },
};
