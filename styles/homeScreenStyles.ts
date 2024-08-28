import { createStyleSheet } from 'react-native-unistyles';

import { height, width } from '~/utils/screenSizeUtils';

export const homeScreenStyles = createStyleSheet((theme) => ({
  container: {
    height: height(100),
    width: width(100),
    backgroundColor: theme.components.Container.backgroundColor,
    paddingHorizontal: width(5),
    paddingVertical: width(5),
  },
  cardContainer: {
    marginTop: height(5),
    gap: height(5),
  },
  imageContainer: {
    position: 'absolute',
    bottom: height(6),
    width: width(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width(80),
    height: width(80),
  },
}));
