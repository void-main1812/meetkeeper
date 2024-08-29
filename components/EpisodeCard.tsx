import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { episodeCardStyles } from '~/styles/episodeCardStyles';

type EpisodeCardProps = {
  name: string;
  episode: string;
  air_date: string;
};

const EpisodeCard = ({ name, episode, air_date }: EpisodeCardProps) => {
  const { styles } = useStyles(episodeCardStyles);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.episodeTitle}>{episode}</Text>
        <Text style={styles.episodeDate}>{air_date}</Text>
      </View>
      <Text style={styles.episodeName}>{name}</Text>
    </View>
  );
};

export default EpisodeCard;
