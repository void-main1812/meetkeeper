import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import EpisodeCard from '~/components/EpisodeCard';
import useGetCharachterById from '~/hooks/useGetCharachterById';
import useGetEpisodes from '~/hooks/useGetEpisodes';
import { detailsPageStyles } from '~/styles/detailsPageStyles';

const Details = ({ route, navigation }: any) => {
  const { theme, styles } = useStyles(detailsPageStyles);
  const { id } = route.params;

  const { EpisodeArray, charachter } = useGetCharachterById({ id });
  const { data } = useGetEpisodes({
    EpisodeList: EpisodeArray,
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backbuttonContainer}>
        <BlurView
          intensity={60}
          tint="light"
          experimentalBlurMethod="dimezisBlurView"
          style={styles.backButton}>
          <Ionicons name="arrow-back" size={36} color={theme.colors.Tolopea[700]} />
        </BlurView>
      </Pressable>
      <StatusBar style="dark" backgroundColor="transparent" />
      <View style={styles.imageContainer}>
        <Image source={{ uri: charachter?.image }} style={styles.image} />
        <LinearGradient colors={['transparent', '#000']} style={styles.imageOverlay} />
        <View style={styles.nameContaienr}>
          <Text style={styles.nameText}>{charachter?.name}</Text>
          <Text style={styles.originText}>{charachter?.origin.name}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>
          Status: <Text style={styles.infoText}>{charachter?.status}</Text>
        </Text>
        <Text style={styles.infoTitle}>
          Location: <Text style={styles.infoText}>{charachter?.location.name}</Text>
        </Text>
      </View>
      <View style={styles.episodeListContainer}>
        <Text style={styles.episodeListTitle}>Appreances</Text>
        {EpisodeArray?.length > 1 ? (
          <FlatList
            data={data}
            contentContainerStyle={styles.episodeList}
            style={styles.flatlist}
            renderItem={({ item }) => (
              <EpisodeCard
                name={item.name}
                air_date={item.air_date}
                episode={item.episode}
                key={item.id}
              />
            )}
          />
        ) : (
          <EpisodeCard name={data?.name} air_date={data?.air_date} episode={data?.episode} />
        )}
      </View>
    </View>
  );
};

export default Details;
