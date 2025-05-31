import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// No Message screen (ID: 1:2672)
export default function NoMessageScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>
          <Ionicons name="create-outline" size={24} color="#0D0166" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.emptyContainer}>
        <Image 
          source={require('../../assets/images/avatar.webp')}
          style={styles.emptyImage}
        />
        <Text style={styles.emptyTitle}>No Messages Yet</Text>
        <Text style={styles.emptyText}>
          Connect with people and companies to start conversations about job opportunities
        </Text>
        <TouchableOpacity 
          style={styles.findButton}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.findButtonText}>Find Connections</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyImage: {
    width: 120,
    height: 120,
    marginBottom: 24,
    backgroundColor: '#E1E1E1',
    borderRadius: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  findButton: {
    backgroundColor: '#0D0166',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  findButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
