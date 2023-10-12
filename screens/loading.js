// LoadingScreen.js
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const LoadingScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingScreen;