import { createStyleSheet } from 'react-native-unistyles';

import { typographyStyles } from './unistyles/typography';

import { height, width } from '~/utils/screenSizeUtils';

export const splashScreenStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.components.Container.backgroundColor,
    justifyContent: 'flex-start',
    height: height(100),
    width: width(100),
  },
  image: {
    width: width(150),
    height: width(150),
    contentFit: 'contain',
    position: 'absolute',
    bottom: -height(10),
  },
  logoContainer: {
    marginTop: height(10),
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: width(50),
    height: width(20),
    contentFit: 'contain',
  },
  logo: {
    ...typographyStyles(theme).special,
    fontSize: height(10),
    textAlign: 'center',
    lineHeight: height(10.5),
  },
  loadingContainer: {
    position: 'absolute',
    bottom: height(5),
    alignItems: 'center',
    borderRadius: height(1),
    overflow: 'hidden',
    zIndex: 100,
  },
  loadingText: {
    ...typographyStyles(theme).body,
    color: theme.colors.Malachite[950],
  },
  blurContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width(4),
    paddingHorizontal: width(5),
    paddingVertical: height(1.5),
  },
}));
