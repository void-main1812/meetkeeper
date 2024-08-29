import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import Button from '~/components/Button';
import CharachterCard from '~/components/CharachterCard';
import useGetAllCharachters from '~/hooks/useGetAllCharachters';
import useGetFilteredCharachters from '~/hooks/useGetFilteredCharachters';
import { contactsPageStyles } from '~/styles/contactsPageStyles';

const Contacts = ({ route, naivgation }: any) => {
  const [page, setPage] = useState(1);
  const { theme, styles } = useStyles(contactsPageStyles);

  const { type } = route.params;

  const allCharachtersData = useGetAllCharachters({ page });
  const filteredCharachtersData = useGetFilteredCharachters({ type, page });

  const charachterDetails = type === 'none' ? allCharachtersData : filteredCharachtersData;

  const fetchNextPage = () => {
    if (page >= 1) {
      setPage(page + 1);
    }
  };

  const fetchPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    charachterDetails.refetch();
  }, [charachterDetails, page]);

  return (
    <View style={styles.container}>
      <FlatList
        data={charachterDetails?.charachters}
        contentContainerStyle={styles.cardContainer}
        renderItem={({ item }) => (
          <CharachterCard
            name={item.name}
            image={item.image}
            status={item.status}
            key={item.id}
            location={item.location.name}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button disabled={page === 1} onPress={fetchPrevPage} icon="chevron-back" />
        <Text style={styles.pageIndicator}>{page}</Text>
        <Button
          disabled={page === charachterDetails?.pages}
          onPress={fetchNextPage}
          icon="chevron-forward"
        />
      </View>
    </View>
  );
};

export default Contacts;
