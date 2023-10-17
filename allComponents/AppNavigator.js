import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryListScreen from './LibraryListScreen';
import LibraryDetailScreen from './LibraryDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LibraryList">
      <Stack.Screen name="LibraryList" component={LibraryListScreen} options={{ title: 'Local Libraries' }} />
      <Stack.Screen name="LibraryDetail" component={LibraryDetailScreen} options={({ route }) => ({ title: route.params.library.name })} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
