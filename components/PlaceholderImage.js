import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Create a simple placeholder image component
const PlaceholderImage = () => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>Image</Text>
  </View>
);

const styles = StyleSheet.create({
  placeholderContainer: {
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  placeholderText: {
    color: '#999',
    fontSize: 10,
  },
});

export default PlaceholderImage;
