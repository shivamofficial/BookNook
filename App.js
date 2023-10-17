import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './allComponents/AppNavigator';
import { BookmarkProvider } from './allComponents/BookmarkContext';

export default function App() {
  return (
    <NavigationContainer>
      <BookmarkProvider>
        <AppNavigator />
      </BookmarkProvider>
    </NavigationContainer>
  );
};
