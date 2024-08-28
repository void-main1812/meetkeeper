import { createStyleSheet } from 'react-native-unistyles';

import { globalStyles } from './globalStyles';

export const loadingStyles = createStyleSheet((theme) => ({
  container: {
    ...globalStyles(theme).container,
  },
}));
