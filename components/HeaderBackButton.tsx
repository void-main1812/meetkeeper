import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { RootStackParamList } from '~/navigation';
import { headerBackButtonStyles } from '~/styles/headerBackButtonStyles';

const HeaderBackButton = ({ previousRoute }: any) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { theme, styles } = useStyles(headerBackButtonStyles);

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate(previousRoute)}>
      <Ionicons name="arrow-back" size={24} color={theme.components.Header.title} />
    </Pressable>
  );
};

export default HeaderBackButton;
