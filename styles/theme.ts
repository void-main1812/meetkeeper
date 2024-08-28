import { colors } from './colors';

// LightTheme
export const lightTheme = {
  colors,
  components: {
    Container: {
      backgroundColor: colors.White,
    },
    Text: {
      primary: colors.Black,
    },
  },
};

export const darkTheme = {
  colors,
  components: {
    Container: {
      backgroundColor: colors.Black,
    },
    Text: {
      primary: colors.White,
    },
  },
};
