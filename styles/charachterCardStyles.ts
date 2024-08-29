import { createStyleSheet } from 'react-native-unistyles';

import { typographyStyles } from './unistyles/typography';

import { height, width } from '~/utils/screenSizeUtils';

export const charachterCardStyles = createStyleSheet((theme) => ({
  container: {
    width: width(90),
    borderRadius: height(1.2),
    gap: height(2),
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: theme.components.CharachterCard.backgroundColor,
  },
  image: {
    borderRadius: height(1.2),
    overflow: 'hidden',
  },
  textContainer: {
    gap: height(1),
  },
  name: {
    ...typographyStyles(theme).heading_3,
    color: theme.components.CharachterCard.title,
    width: width(60),
  },
  statusText: {
    padding: height(0.2),
    width: width(15),
    borderRadius: height(1),
    borderWidth: 1,
    textAlign: 'center',
    variants: {
      color: {
        Alive: {
          backgroundColor: theme.components.CharachterCard.aliveBackground,
          color: theme.colors.Malachite[500],
          borderColor: theme.colors.Malachite[500],
        },
        Dead: {
          backgroundColor: theme.components.CharachterCard.deadBackground,
          color: theme.colors.TotemPole[500],
          borderColor: theme.colors.TotemPole[500],
        },
        unknown: {
          backgroundColor: theme.components.CharachterCard.unknownBackground,
          color: theme.components.CharachterCard.unknownText,
          borderColor: theme.components.CharachterCard.unknownText,
        },
      },
    },
  },
  location: {
    ...typographyStyles(theme).body_small,
  },
}));
