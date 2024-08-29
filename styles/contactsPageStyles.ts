import { createStyleSheet } from 'react-native-unistyles';

import { typographyStyles } from './unistyles/typography';

import { height, width } from '~/utils/screenSizeUtils';

export const contactsPageStyles = createStyleSheet((theme) => ({
  container: {
    height: height(100),
    width: width(100),
    backgroundColor: theme.components.Container.backgroundColor,
    paddingHorizontal: width(5),
    paddingVertical: height(5),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: height(8),
    right: width(5),
    left: width(5),
    height: height(10),
    width: width(90),
    paddingHorizontal: width(5),
    borderRadius: height(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.components.PaginationButtons.backgroundColor,
  },
  pageIndicator: {
    ...typographyStyles(theme).body,
    color: theme.components.PaginationButtons.text,
    backgroundColor: theme.components.PaginationButtons.backgroundColor,
  },
  cardContainer: {
    gap: height(2),
    paddingBottom: height(15),
  },
}));
