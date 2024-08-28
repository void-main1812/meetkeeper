import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';

import { homeScreenStyles } from '~/styles/homeScreenStyles';

const Home = ({ navigation }: any) => {
  const { theme, styles } = useStyles(homeScreenStyles);

  const statusBarStyle = UnistylesRuntime.themeName === 'light' ? 'dark' : 'light';

  useEffect(() => {
    navigation.setOptions({
      title: 'HomeScreen',
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor={theme.components.Header.background} style={statusBarStyle} />
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
