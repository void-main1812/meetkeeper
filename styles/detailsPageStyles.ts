import { createStyleSheet } from 'react-native-unistyles';

import { typographyStyles } from './unistyles/typography';

import { height, width } from '~/utils/screenSizeUtils';

export const detailsPageStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.components.Container.backgroundColor,
    gap: height(2),
  },
  imageContainer: {
    width: width(100),
    height: width(100),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  image: {
    width: width(100),
    height: width(100),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imageOverlay: {
    width: width(100),
    height: width(100),
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.8,
  },
  nameContaienr: {
    padding: width(5),
    width: width(80),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  nameText: {
    ...typographyStyles(theme).title,
    color: 'white',
  },
  originText: {
    ...typographyStyles(theme).body,
    color: 'white',
  },
  infoContainer: {
    marginRight: width(5),
    marginLeft: width(5),
    padding: width(2.5),
    borderRadius: width(2.5),
    gap: height(1),
    borderWidth: 0.8,
    borderColor: theme.components.Text.title,
  },
  infoTitle: {
    ...typographyStyles(theme).heading_3,
  },
  infoText: {
    ...typographyStyles(theme).body,
  },
  episodeListContainer: {
    paddingHorizontal: width(5),
    gap: height(1),
  },
  episodeListTitle: {
    ...typographyStyles(theme).heading_2,
    color: theme.components.Header.title,
  },
  episodeList: {
    gap: height(1),
    paddingBottom: height(5),
  },
  flatlist: {
    height: height(40),
  },
  backbuttonContainer: {
    position: 'absolute',
    top: height(5),
    left: width(5),
    zIndex: 100,
    height: height(6),
    width: height(6),
    borderRadius: height(3),
    overflow: 'hidden',
  },
  backButton: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
