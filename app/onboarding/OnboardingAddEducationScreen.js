import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Onboarding Add Education screen
export default function OnboardingAddEducationScreen({ navigation }) {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });

  const handleSave = () => {
    // In a real app, you would save the education data here
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
        <Text style={styles.headerTitle}>Add Education</Text>
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
            <Text style={styles.inputLabel}>School/University*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.school}
                onChangeText={(text) => setFormData({...formData, school: text})}
                placeholder="e.g. Harvard University"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Degree*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.degree}
                onChangeText={(text) => setFormData({...formData, degree: text})}
                placeholder="e.g. Bachelor's"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Field of Study*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.fieldOfStudy}
                onChangeText={(text) => setFormData({...formData, fieldOfStudy: text})}
                placeholder="e.g. Computer Science"
              />
            </View>
          </View>
          
          <View style={styles.dateContainer}>
            <View style={[styles.inputGroup, styles.dateInputGroup]}>
              <Text style={styles.inputLabel}>Start Date*</Text>
              <TouchableOpacity 
                style={styles.inputContainer}
                onPress={() => {/* Open date picker */}}
              >
                <Text style={formData.startDate ? styles.input : styles.placeholderText}>
                  {formData.startDate || "MM/YYYY"}
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={[styles.inputGroup, styles.dateInputGroup]}>
              <Text style={styles.inputLabel}>End Date*</Text>
              <TouchableOpacity 
                style={[
                  styles.inputContainer,
                  formData.current && styles.disabledInput
                ]}
                onPress={() => {/* Open date picker */}}
                disabled={formData.current}
              >
                <Text style={formData.endDate ? styles.input : styles.placeholderText}>
                  {formData.current ? "Present" : (formData.endDate || "MM/YYYY")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              style={[
                styles.checkbox,
                formData.current && styles.checkboxSelected
              ]}
              onPress={() => setFormData({
                ...formData, 
                current: !formData.current,
                endDate: !formData.current ? "Present" : ""
              })}
            >
              {formData.current && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>I'm currently studying here</Text>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Description</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.description}
                onChangeText={(text) => setFormData({...formData, description: text})}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                placeholder="Describe your studies, achievements, activities..."
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
    justifyContent: 'center',
  },
  input: {
    fontSize: 14,
    color: '#333',
  },
  placeholderText: {
    fontSize: 14,
    color: '#999',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInputGroup: {
    width: '48%',
  },
  disabledInput: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: '#0D0166',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#333',
  },
  textAreaContainer: {
    height: 160,
    paddingVertical: 12,
  },
  textArea: {
    height: 140,
    textAlignVertical: 'top',
  },
});
