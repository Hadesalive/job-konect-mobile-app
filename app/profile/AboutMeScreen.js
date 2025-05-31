import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// About me screen (ID: 1:3654)
export default function AboutMeScreen({ navigation }) {
  const [about, setAbout] = useState('Experienced React Native developer with 5+ years of experience building cross-platform mobile applications. Passionate about creating intuitive user interfaces and optimizing app performance.');

  const handleSave = () => {
    // In a real app, you would save the about text here
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#0D0166" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Me</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Write a brief description about yourself</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            value={about}
            onChangeText={setAbout}
            multiline
            numberOfLines={10}
            textAlignVertical="top"
            placeholder="Tell others about your professional background, achievements, and interests..."
          />
        </View>
        
        <Text style={styles.characterCount}>{about.length}/500 characters</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  saveButton: {
    padding: 8,
  },
  saveButtonText: {
    color: '#0D0166',
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 12,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 12,
    height: 200,
  },
  textArea: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  characterCount: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    alignSelf: 'flex-end',
  },
});
