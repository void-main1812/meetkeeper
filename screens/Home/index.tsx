import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import CategoryCard from '~/components/CategoryCard';
import useGetAllCharachters from '~/hooks/useGetAllCharachters';
import useGetFilteredCharachters from '~/hooks/useGetFilteredCharachters';
import { homeScreenStyles } from '~/styles/homeScreenStyles';
import { themename } from '~/utils/unistylesTheme';

const Home = ({ navigation }: any) => {
  const { theme, styles } = useStyles(homeScreenStyles);

  const statusBarStyle = themename === 'light' ? 'dark' : 'light';

  const { count } = useGetAllCharachters();
  const { count: deadCount } = useGetFilteredCharachters({ type: 'dead' });
  const { count: aliveCount } = useGetFilteredCharachters({ type: 'alive' });

  const handleNavigation = (type: string) => {
    navigation.navigate('Contacts', { type });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar backgroundColor={theme.components.Header.background} style={statusBarStyle} />
        <View style={styles.cardContainer}>
          <CategoryCard
            onPress={() => handleNavigation('none')}
            title="All Charachters"
            image="All-Charachters"
            count={count}
          />
          <CategoryCard
            onPress={() => handleNavigation('dead')}
            title="Dead Charachters"
            image="tomb-stone"
            count={deadCount}
          />
          <CategoryCard
            onPress={() => handleNavigation('alive')}
            title="Alive Charachters"
            image="Rick's-Sister"
            count={aliveCount}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/Rick-And-Morty-HomePage-Illstration.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
