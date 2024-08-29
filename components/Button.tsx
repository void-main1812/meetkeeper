import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { buttonStyles } from '~/styles/buttonStyles';

type ButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  disabled?: boolean;
};

const Button = ({ icon, onPress, disabled = false }: ButtonProps) => {
  const { theme, styles } = useStyles(buttonStyles);

  return (
    <Pressable disabled={disabled} style={[styles.container, { opacity: disabled ? 0.5 : 1 }]}>
      <Ionicons name={icon} size={24} onPress={onPress} color={theme.components.Header.title} />
    </Pressable>
  );
};

export default Button;
