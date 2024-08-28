import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

const SplashScreen = () => {
  const { theme } = useStyles();

  console.log(theme.colors);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
