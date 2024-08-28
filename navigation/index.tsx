import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { QueryClientProvider } from '@tanstack/react-query';
import LoadingScreen from 'components/LoadingScreen';
import { useFonts } from 'expo-font';
import { queryClient } from 'queryClient';
import { View } from 'react-native';
import { DevToolsBubble } from 'react-native-react-query-devtools';
import { useStyles } from 'react-native-unistyles';
import Home from 'screens/Home';
import SplashScreen from 'screens/SplashScreen';
if (__DEV__) {
  import('~/reactotron').then(() => console.log('Reactotron Configured'));
}
export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  const { theme } = useStyles();

  const [isFontLoaded] = useFonts({
    MeltedMonster: require('../assets/fonts/MeltedMonster-ARPLA.ttf'),
    'Montserrat-Semibold': require('../assets/fonts/Montserrat-SemiBold.otf'),
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.otf'),
  });

  if (!isFontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
            headerBackgroundContainerStyle: {
              backgroundColor: theme.components.Header.background,
            },
            headerTitleStyle: {
              color: theme.components.Header.title,
              fontFamily: 'Montserrat-Semibold',
            },
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerBackground(props) {
                return <View />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <DevToolsBubble />
    </QueryClientProvider>
  );
}
