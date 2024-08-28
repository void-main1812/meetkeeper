import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';

import { themeToggleButtonStyle } from '~/styles/themeToggleButtonStyles';

const ToggleThemeButton = () => {
  const toggleTheme = () => {
    if (UnistylesRuntime.themeName === 'light') {
      UnistylesRuntime.setTheme('dark');
      return;
    }
    if (UnistylesRuntime.themeName === 'dark') {
      UnistylesRuntime.setTheme('light');
    }
  };

  const { theme, styles } = useStyles(themeToggleButtonStyle);

  return (
    <Pressable onPress={() => toggleTheme()} style={styles.container}>
      <Ionicons
        name={UnistylesRuntime.themeName === 'light' ? 'moon-outline' : 'sunny-outline'}
        size={24}
        color={theme.components.Header.title}
      />
    </Pressable>
  );
};

export default ToggleThemeButton;
