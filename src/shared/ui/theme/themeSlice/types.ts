export interface ITheme {
  name: string;
  colors: {
    primaryColor: string;
    background: string;
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

      hover: string;
      activeBackground: string;
    };
    input: {
      background: string;
      text: string;
      placeholder: string;
      border: string;
    };
    error: string;
    accentColor: string;
  };
}

export type IThemeState = {
  currentTheme: ITheme;
};
