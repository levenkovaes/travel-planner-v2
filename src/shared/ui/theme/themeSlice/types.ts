export interface ITheme {
  name: string;
  colors: {
    primaryColor: string;
    background: string;
    lessContrastBg: string;
    text: string;
    modal: {
      background: string;
      text: string;
      cover: string;
    };
    button: {
      background: string;
      text: string;
      border: string;

      accentBackground: string;
      accentText: string;

      disabled: string;
      disabledText: string;

      hover: string;
      active: string;
    };
    input: {
      background: string;
      text: string;
      placeholder: string;
      border: string;
    };
    card: string;
    error: string;
    accentColor: string;
    lightAccent: string;
  };
  boxShadow: string;
}

export type IThemeState = {
  currentTheme: ITheme;
};
