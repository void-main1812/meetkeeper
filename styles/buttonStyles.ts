import { createStyleSheet } from 'react-native-unistyles';

import { height } from '~/utils/screenSizeUtils';

export const buttonStyles = createStyleSheet((theme) => ({
  container: {
    padding: 10,
    backgroundColor: theme.components.PaginationButtons.button,
    borderRadius: 5,
    height: height(5),
    width: height(5),
  },
}));
