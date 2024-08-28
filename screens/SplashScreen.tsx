import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';

import { splashScreenStyles } from '~/styles/SplashScreenStyles';

const SplashScreen = ({ navigation }: any) => {
  const { theme, styles } = useStyles(splashScreenStyles);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 800);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.components.Container.backgroundColor}
        style={UnistylesRuntime.themeName === 'dark' ? 'light' : 'dark'}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/Rick-And-Morty-Symbol.png')}
        />
        <Text style={styles.logo}>Meet{'\n'}Keeper</Text>
      </View>
      <View style={styles.loadingContainer}>
        <BlurView
          style={styles.blurContainer}
          experimentalBlurMethod="dimezisBlurView"
          intensity={60}
          tint="light">
          <ActivityIndicator size="small" color={theme.colors.Malachite[800]} />
          <Text style={styles.loadingText}>Loading...</Text>
        </BlurView>
      </View>
      <Image style={styles.image} source={require('../assets/images/rick-and-morty-portal.png')} />
    </View>
  );
};

export default SplashScreen;
