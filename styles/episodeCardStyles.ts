import { createStyleSheet } from 'react-native-unistyles';

import { typographyStyles } from './unistyles/typography';

export const episodeCardStyles = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.components.CharachterCard.backgroundColor,
    gap: 10,
  },
  episodeTitle: {
    ...typographyStyles(theme).heading_3,
  },
  episodeName: {
    ...typographyStyles(theme).body,
  },
  episodeDate: {
    ...typographyStyles(theme).body_small,
  },
}));
