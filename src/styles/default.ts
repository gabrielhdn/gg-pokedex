export interface ITheme {
  fontFamily: string;
  colors: {
    light: {
      main: string;
      darker: string;
    };
    dark: {
      main: string;
      darker: string;
    };
  };
}

export const defaultThemes: ITheme = {
  fontFamily: 'Arial, sans-serif',
  colors: {
    light: {
      main: '#fff',
      darker: '#f6f5fc',
    },
    dark: {
      main: '#323232',
      darker: '#020908',
    },
  },
};
