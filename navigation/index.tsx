import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from 'components/LoadingScreen';
import { useFonts } from 'expo-font';
import Home from 'screens/Home';
import SplashScreen from 'screens/SplashScreen';
export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  const [isFontLoaded] = useFonts({
    MeltedMonster: require('../assets/fonts/MeltedMonster-ARPLA.ttf'),
  });

  if (!isFontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
