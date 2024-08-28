import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { loadingStyles } from '~/styles/loadingScreenStyles';

const LoadingScreen = () => {
  const { styles, theme } = useStyles(loadingStyles);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={theme.components.Container.backgroundColor} />
      <View>
        <ActivityIndicator size="large" color={theme.colors.Malachite[500]} />
        <Text>Loading...</Text>
      </View>
    </View>
  );
};

export default LoadingScreen;
