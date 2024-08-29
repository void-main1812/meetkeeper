import { createStyleSheet } from 'react-native-unistyles';

export const loadingStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.components.Container.backgroundColor,
  },
}));
