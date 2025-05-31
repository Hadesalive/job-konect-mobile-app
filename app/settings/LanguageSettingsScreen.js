import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Language Settings screen
export default function LanguageSettingsScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  
  // Sample languages data
  const languagesData = [
    { id: 'english', name: 'English', code: 'en' },
    { id: 'spanish', name: 'Spanish', code: 'es' },
    { id: 'french', name: 'French', code: 'fr' },
    { id: 'german', name: 'German', code: 'de' },
    { id: 'chinese', name: 'Chinese', code: 'zh' },
    { id: 'japanese', name: 'Japanese', code: 'ja' },
    { id: 'korean', name: 'Korean', code: 'ko' },
    { id: 'arabic', name: 'Arabic', code: 'ar' },
    { id: 'portuguese', name: 'Portuguese', code: 'pt' },
    { id: 'russian', name: 'Russian', code: 'ru' },
    { id: 'hindi', name: 'Hindi', code: 'hi' },
  ];

  const handleSave = () => {
    // In a real app, you would save the language setting here
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
        <Text style={styles.headerTitle}>Language</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subtitle}>
          Select your preferred language for the app interface
        </Text>
        
        {languagesData.map(language => (
          <TouchableOpacity 
            key={language.id}
            style={styles.languageItem}
            onPress={() => setSelectedLanguage(language.id)}
          >
            <Text style={styles.languageName}>{language.name}</Text>
            {selectedLanguage === language.id && (
              <Ionicons name="checkmark" size={20} color="#0D0166" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  scrollView: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  languageName: {
    fontSize: 16,
    color: '#333',
  },
});
