import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';

import libraries from './data/libraries'; 

const LibraryListScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState(''); 

  const sortLibrariesByPopularity = (libraries) => {
    return libraries.slice().sort((a, b) => b.popularity - a.popularity);
  };

  const sortLibrariesByProximity = (libraries) => {
    return libraries.slice().sort((a, b) => a.proximity - b.proximity);
  };

  const applySortingAndFiltering = () => {
    let filtered = libraries;

    if (searchText) {
      filtered = libraries.filter((library) =>
        library.name.toLowerCase().includes(searchText.toLowerCase().trim())
      );
    }

    if (sortBy === 'popularity') {
      filtered = sortLibrariesByPopularity(filtered);
    } else if (sortBy === 'proximity') {
      filtered = sortLibrariesByProximity(filtered);
    }

    return filtered;
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appDescription}>
        Welcome to the Book Nook
      </Text>

      <TextInput
        placeholder="Search libraries"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Sort by Popularity"
          onPress={() => handleSortBy('popularity')}
          color={sortBy === 'popularity' ? 'green' : undefined}
        />
        <Button
          title="Sort by Proximity"
          onPress={() => handleSortBy('proximity')}
          color={sortBy === 'proximity' ? 'green' : undefined}
        />
      </View>

      <FlatList
        data={applySortingAndFiltering()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('LibraryDetail', { library: item })}
          >
            <Image source={{ uri: item.imageUri }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.summary}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );


};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LibraryListScreen;
