import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useBookmarkContext } from './BookmarkContext';

const LibraryDetailScreen = ({ route }) => {
  const { library } = route.params;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { bookmarkedLibraries, setBookmarkedLibraries } = useBookmarkContext();

  useEffect(() => {
    setIsBookmarked(bookmarkedLibraries.includes(library.id));
  }, [bookmarkedLibraries, library.id]);

  const handleBookmark = () => {
    if (isBookmarked) {
      setBookmarkedLibraries(bookmarkedLibraries.filter(id => id !== library.id));
    } else {
      setBookmarkedLibraries([...bookmarkedLibraries, library.id]);
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: library.imageUri }} style={styles.image} />
      <Text style={styles.libraryName}>{library.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.infoText}>{library.address}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Operational Hours:</Text>
        <Text style={styles.infoText}>{library.operationalHours}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>History:</Text>
        <Text style={styles.infoText}>{library.history}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Services:</Text>
        <Text style={styles.infoText}>{library.services}</Text>
      </View>
      <Button
        title={isBookmarked ? 'Unbookmark' : 'Bookmark'}
        onPress={handleBookmark}
        color={isBookmarked ? 'red' : undefined}
        style={styles.bookmarkButton}
      />
    </ScrollView>
  );


};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  libraryName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoContainer: {
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  bookmarkButton: {
    marginVertical: 20,
  },
});

export default LibraryDetailScreen;
