import { createStyleSheet } from 'react-native-unistyles';

import { globalStyles } from './globalStyles';

import { height, width } from '~/utils/screenSizeUtils';

export const homeScreenStyles = createStyleSheet((theme) => ({
  container: {
    height: height(100),
    width: width(100),
    backgroundColor: theme.components.Container.backgroundColor,
  },
}));
