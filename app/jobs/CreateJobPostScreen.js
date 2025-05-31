import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Create Job Post screen
export default function CreateJobPostScreen({ navigation }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    salary: '',
    description: '',
    responsibilities: '',
    requirements: '',
    benefits: ''
  });

  const handleSave = () => {
    // In a real app, you would save the job post here
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
        <Text style={styles.headerTitle}>Create Job Post</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Post</Text>
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
                placeholder="e.g. Senior React Native Developer"
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
            <Text style={styles.inputLabel}>Job Type*</Text>
            <TouchableOpacity 
              style={styles.inputContainer}
              onPress={() => navigation.navigate('SelectJobType')}
            >
              <Text style={formData.type ? styles.input : styles.placeholderText}>
                {formData.type || "Select job type"}
              </Text>
              <Ionicons name="chevron-down" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Salary Range</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.salary}
                onChangeText={(text) => setFormData({...formData, salary: text})}
                placeholder="e.g. $120,000 - $150,000"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Job Description*</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.description}
                onChangeText={(text) => setFormData({...formData, description: text})}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                placeholder="Describe the job role and responsibilities..."
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Responsibilities</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.responsibilities}
                onChangeText={(text) => setFormData({...formData, responsibilities: text})}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                placeholder="List the key responsibilities (one per line)..."
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Requirements</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.requirements}
                onChangeText={(text) => setFormData({...formData, requirements: text})}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                placeholder="List the key requirements (one per line)..."
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Benefits</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.benefits}
                onChangeText={(text) => setFormData({...formData, benefits: text})}
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                placeholder="List the benefits (one per line)..."
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
  textAreaContainer: {
    height: 120,
    paddingVertical: 12,
    alignItems: 'flex-start',
  },
  textArea: {
    height: 100,
  },
});
