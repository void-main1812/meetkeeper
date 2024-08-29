import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from 'expo-image';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { RootStackParamList } from '~/navigation';
import { charachterCardStyles } from '~/styles/charachterCardStyles';

type CharachterCardProps = {
  name: string;
  status?: 'Alive' | 'Dead' | 'unknown';
  image: string;
  location: string;
  id: number;
};

const CharachterCard = ({ image, name, status, location, id }: CharachterCardProps) => {
  const { styles } = useStyles(charachterCardStyles, {
    color: status,
  });

  const navigaiton = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleNavigateToDetailsPage = ({ id }: { id: number }) => {
    navigaiton.navigate('Details', { id });
  };

  return (
    <Pressable onPress={() => handleNavigateToDetailsPage({ id })} style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </Pressable>
  );
};

export default CharachterCard;
