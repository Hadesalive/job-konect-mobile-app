import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Add work experience screen (ID: 1:4138)
export default function AddWorkExperienceScreen({ navigation }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false,
    description: ''
  });

  const handleSave = () => {
    // In a real app, you would save the work experience here
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
        <Text style={styles.headerTitle}>Add Work Experience</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Job Title*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.title}
                onChangeText={(text) => setFormData({...formData, title: text})}
                placeholder="e.g. Software Developer"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Company*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.company}
                onChangeText={(text) => setFormData({...formData, company: text})}
                placeholder="e.g. Microsoft"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Location</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.location}
                onChangeText={(text) => setFormData({...formData, location: text})}
                placeholder="e.g. New York, USA"
              />
            </View>
          </View>
          
          <View style={styles.dateContainer}>
            <View style={[styles.inputGroup, styles.dateInput]}>
              <Text style={styles.inputLabel}>Start Date*</Text>
              <TouchableOpacity 
                style={styles.inputContainer}
                onPress={() => navigation.navigate('StartDate')}
              >
                <Text style={formData.startDate ? styles.input : styles.placeholderText}>
                  {formData.startDate || "Select date"}
                </Text>
                <Ionicons name="calendar-outline" size={20} color="#666" />
              </TouchableOpacity>
            </View>
            
            <View style={[styles.inputGroup, styles.dateInput]}>
              <Text style={styles.inputLabel}>End Date*</Text>
              <TouchableOpacity 
                style={[styles.inputContainer, formData.currentlyWorking && styles.disabledInput]}
                onPress={() => !formData.currentlyWorking && navigation.navigate('EndDate')}
                disabled={formData.currentlyWorking}
              >
                <Text style={[
                  formData.endDate ? styles.input : styles.placeholderText,
                  formData.currentlyWorking && styles.disabledText
                ]}>
                  {formData.currentlyWorking ? "Present" : (formData.endDate || "Select date")}
                </Text>
                <Ionicons name="calendar-outline" size={20} color={formData.currentlyWorking ? "#CCC" : "#666"} />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              style={styles.checkbox}
              onPress={() => setFormData({...formData, currentlyWorking: !formData.currentlyWorking})}
            >
              {formData.currentlyWorking && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>I currently work here</Text>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Description</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.description}
                onChangeText={(text) => setFormData({...formData, description: text})}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                placeholder="Describe your responsibilities and achievements..."
              />
            </View>
          </View>
        </View>
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
  },
  formContainer: {
    padding: 20,
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
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  placeholderText: {
    flex: 1,
    fontSize: 14,
    color: '#999',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 1,
    marginRight: 10,
  },
  disabledInput: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
  },
  disabledText: {
    color: '#999',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#0D0166',
    backgroundColor: '#0D0166',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
  },
  textAreaContainer: {
    height: 120,
    paddingVertical: 12,
  },
  textArea: {
    height: 100,
  },
});
