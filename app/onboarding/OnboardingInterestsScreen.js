import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Onboarding Interests screen
export default function OnboardingInterestsScreen({ navigation }) {
  const [selectedInterests, setSelectedInterests] = useState([]);
  
  // Sample interests data
  const interestsData = [
    { id: '1', name: 'Software Development' },
    { id: '2', name: 'UX/UI Design' },
    { id: '3', name: 'Data Science' },
    { id: '4', name: 'Product Management' },
    { id: '5', name: 'Marketing' },
    { id: '6', name: 'Sales' },
    { id: '7', name: 'Customer Service' },
    { id: '8', name: 'Finance' },
    { id: '9', name: 'Human Resources' },
    { id: '10', name: 'Operations' },
    { id: '11', name: 'Healthcare' },
    { id: '12', name: 'Education' },
    { id: '13', name: 'Engineering' },
    { id: '14', name: 'Legal' },
    { id: '15', name: 'Consulting' },
  ];

  const toggleInterest = (id) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(item => item !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const handleContinue = () => {
    // In a real app, you would save the interests here
    navigation.navigate('Home');
  };

  const renderInterestItem = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.interestItem,
        selectedInterests.includes(item.id) && styles.selectedInterestItem
      ]}
      onPress={() => toggleInterest(item.id)}
    >
      <Text style={[
        styles.interestText,
        selectedInterests.includes(item.id) && styles.selectedInterestText
      ]}>
        {item.name}
      </Text>
      {selectedInterests.includes(item.id) && (
        <Ionicons name="checkmark" size={16} color="#FFFFFF" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#0D0166" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Your Interests</Text>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Select at least 3 interests to help us personalize your job recommendations
        </Text>
        
        <FlatList
          data={interestsData}
          renderItem={renderInterestItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.interestRow}
          contentContainerStyle={styles.interestsList}
        />
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.continueButton,
            selectedInterests.length < 3 && styles.disabledButton
          ]}
          onPress={handleContinue}
          disabled={selectedInterests.length < 3}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
        
        <Text style={styles.selectionCount}>
          {selectedInterests.length}/3 interests selected
        </Text>
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
  skipButton: {
    padding: 8,
  },
  skipButtonText: {
    color: '#0D0166',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  interestsList: {
    paddingBottom: 24,
  },
  interestRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  interestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '48%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedInterestItem: {
    backgroundColor: '#0D0166',
    borderColor: '#0D0166',
  },
  interestText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  selectedInterestText: {
    color: '#FFFFFF',
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  continueButton: {
    backgroundColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectionCount: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
