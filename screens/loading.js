// Loading.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ setIsLoading }) => {
  useEffect(() => {
    // Simulate an async initialization process
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace this with your actual initialization logic

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, [setIsLoading]);

  // Display the loading screen while initializing
  return (
    <View style={styles.container}>
      <Text>Loading Group Plan...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
