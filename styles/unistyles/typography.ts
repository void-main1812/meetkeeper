import { createStyleSheet } from 'react-native-unistyles';

import { size } from './size';

export const typographyStyles = createStyleSheet((theme) => ({
  special: {
    fontFamily: 'MeltedMonster',
    color: theme.components.Text.special,
  },
  title: {
    fontSize: size.height[10],
    fontFamily: 'ClashDisplay-Semibold',
    color: theme.components.Text.title,
  },
  heading_1: {
    fontSize: size.height[9],
    fontFamily: 'ClashDisplay-Semibold',
    color: theme.components.Text.heading_1,
  },
  heading_2: {
    fontSize: size.height[8],
    fontFamily: 'ClashDisplay-Medium',
    color: theme.components.Text.heading_2,
  },
  heading_3: {
    fontSize: size.height[6],
    fontFamily: 'ClashDisplay-Medium',
    color: theme.components.Text.heading_3,
  },
  body: {
    fontSize: size.height[4],
    fontFamily: 'Montserrat-Medium',
    color: theme.components.Text.body,
  },
  body_small: {
    fontSize: size.height[3],
    fontFamily: 'Montserrat-Medium',
    color: theme.components.Text.body_small,
  },
}));
