import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { QueryClientProvider } from '@tanstack/react-query';
import LoadingScreen from 'components/LoadingScreen';
import { useFonts } from 'expo-font';
import { queryClient } from 'queryClient';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import Home from 'screens/Home';
import SplashScreen from 'screens/SplashScreen';

import HeaderBackButton from '~/components/HeaderBackButton';
import ToggleThemeButton from '~/components/ToggleThemeButton';
import Contacts from '~/screens/Contacts';
import Details from '~/screens/Details';
if (__DEV__) {
  import('~/reactotron').then(() => console.log('Reactotron Configured'));
}
export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Contacts: undefined;
  Details: { id: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  const { theme } = useStyles();

  const [isFontLoaded] = useFonts({
    MeltedMonster: require('../assets/fonts/MeltedMonster-ARPLA.ttf'),
    'Montserrat-Semibold': require('../assets/fonts/Montserrat-SemiBold.otf'),
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.otf'),
    'ClashDisplay-Semibold': require('../assets/fonts/ClashDisplay-Semibold.otf'),
    'ClashDisplay-Medium': require('../assets/fonts/ClashDisplay-Medium.otf'),
  });

  if (!isFontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
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
                fontFamily: 'ClashDisplay-Semibold',
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
                headerRight: () => <ToggleThemeButton />,
              }}
            />
            <Stack.Screen
              name="Contacts"
              component={Contacts}
              options={{
                headerBackground(props) {
                  return <View />;
                },
                headerLeft: () => <HeaderBackButton previousRoute="Home" />,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              }}
              name="Details"
              component={Details}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
