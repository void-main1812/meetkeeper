import { colors } from './colors';

// LightTheme
export const lightTheme = {
  colors,
  components: {
    Container: {
      backgroundColor: colors.Tolopea[50],
    },
    Text: {
      primary: colors.Black,
      special: colors.Malachite[700],
      title: colors.Neutral[950],
      heading_1: colors.Neutral[900],
      heading_2: colors.Neutral[900],
      heading_3: colors.Neutral[900],
      body: colors.Neutral[600],
      body_small: colors.Neutral[600],
    },
    Header: {
      background: colors.Tolopea[200],
      title: colors.Tolopea[800],
    },
    CategoryCard: {
      backgroundColor: colors.Tolopea[100],
    },
    PaginationButtons: {
      backgroundColor: colors.Tolopea[200],
      button: colors.Tolopea[100],
      text: colors.Tolopea[800],
    },
    CharachterCard: {
      backgroundColor: colors.Tolopea[100],
      title: colors.Tolopea[800],
      aliveBackground: colors.Malachite[100],
      deadBackground: colors.TotemPole[100],
      unknownBackground: colors.Neutral[400],
      unknownText: colors.Neutral[900],
    },
  },
};

export const darkTheme = {
  colors,
  components: {
    Container: {
      backgroundColor: colors.Tolopea[950],
    },
    Text: {
      primary: colors.White,
      special: colors.Malachite[500],
      title: colors.Neutral[50],
      heading_1: colors.Neutral[100],
      heading_2: colors.Neutral[100],
      heading_3: colors.Neutral[100],
      body: colors.Neutral[400],
      body_small: colors.Neutral[400],
    },
    Header: {
      background: colors.Tolopea[800],
      title: colors.Tolopea[100],
    },
    CategoryCard: {
      backgroundColor: colors.Tolopea[900],
    },
    PaginationButtons: {
      backgroundColor: colors.Tolopea[800],
      button: colors.Tolopea[500],
      text: colors.Tolopea[200],
    },
    CharachterCard: {
      backgroundColor: colors.Tolopea[900],
      title: colors.Tolopea[200],
      aliveBackground: colors.Malachite[950],
      deadBackground: colors.TotemPole[950],
      unknownBackground: colors.Neutral[950],
      unknownText: colors.Neutral[400],
    },
  },
};
