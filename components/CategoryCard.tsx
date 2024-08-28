import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { categoryCardStyles } from '~/styles/categoryCardStyles';

type CategoryCardProps = {
  title: string;
  count: number;
  image: string;
};

const CategoryCard = ({ title, count, image }: CategoryCardProps) => {
  const { theme, styles } = useStyles(categoryCardStyles);

  const requiredImages: { [key: string]: any } = {
    'All-Charachters': require('../assets/images/Rick-and-Morty-charachter.png'),
    'tomb-stone': require('../assets/images/tomb-stone.png'),
    "Rick's-Sister": require("../assets/images/Rick's-Sister.png"),
  };

  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={requiredImages[image]} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.bodyText}>{count} Charachters</Text>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
