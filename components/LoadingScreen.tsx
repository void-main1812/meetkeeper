import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { loadingStyles } from '~/loadingScreenStyles';

const LoadingScreen = () => {
  const { styles, theme } = useStyles(loadingStyles);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <View>
        <ActivityIndicator size="large" color={theme.components.Text.primary} />
        <Text>Loading...</Text>
      </View>
    </View>
  );
};

export default LoadingScreen;
