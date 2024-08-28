import { createStyleSheet } from 'react-native-unistyles';

import { typographyStyles } from './unistyles/typography';

import { height } from '~/utils/screenSizeUtils';

export const categoryCardStyles = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    height: height(10),
    borderRadius: height(2),
    backgroundColor: theme.components.CategoryCard.backgroundColor,
    flexDirection: 'row',
    gap: height(2),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: height(2),
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  image: {
    width: height(15),
    height: height(15),
  },
  title: {
    ...typographyStyles(theme).heading_3,
    color: theme.components.Text.title,
  },
  bodyText: {
    ...typographyStyles(theme).body,
    color: theme.components.Text.body,
  },
}));
