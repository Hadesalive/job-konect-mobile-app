import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Onboarding Profile Setup screen
export default function OnboardingProfileScreen({ navigation }) {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    about: '',
    skills: [],
    experience: '',
    education: ''
  });

  const handleContinue = () => {
    // In a real app, you would save the profile data here
    navigation.navigate('OnboardingInterests');
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
        <Text style={styles.headerTitle}>Set Up Your Profile</Text>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileImageContainer}>
          <Image 
            source={require('../../assets/images/avatar.webp')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Ionicons name="camera" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Professional Title*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.title}
                onChangeText={(text) => setFormData({...formData, title: text})}
                placeholder="e.g. Senior React Native Developer"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Location*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.location}
                onChangeText={(text) => setFormData({...formData, location: text})}
                placeholder="e.g. New York, USA"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>About</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.about}
                onChangeText={(text) => setFormData({...formData, about: text})}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                placeholder="Write a brief description about yourself..."
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Skills*</Text>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => navigation.navigate('OnboardingAddSkills')}
            >
              <Ionicons name="add" size={20} color="#0D0166" />
              <Text style={styles.addButtonText}>Add Skills</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Work Experience</Text>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => navigation.navigate('OnboardingAddExperience')}
            >
              <Ionicons name="add" size={20} color="#0D0166" />
              <Text style={styles.addButtonText}>Add Work Experience</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Education</Text>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => navigation.navigate('OnboardingAddEducation')}
            >
              <Ionicons name="add" size={20} color="#0D0166" />
              <Text style={styles.addButtonText}>Add Education</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.continueButton,
            (!formData.title || !formData.location) && styles.disabledButton
          ]}
          onPress={handleContinue}
          disabled={!formData.title || !formData.location}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  profileImageContainer: {
    alignItems: 'center',
    padding: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E1E1E1',
  },
  editImageButton: {
    position: 'absolute',
    bottom: 24,
    right: '50%',
    marginRight: -50,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0D0166',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    height: 50,
  },
  textAreaContainer: {
    height: 120,
    paddingVertical: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F5FF',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#0D0166',
    borderStyle: 'dashed',
  },
  addButtonText: {
    fontSize: 14,
    color: '#0D0166',
    marginLeft: 8,
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
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
