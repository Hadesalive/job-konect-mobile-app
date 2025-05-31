import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Job Application screen
export default function JobApplicationScreen({ navigation, route }) {
  const { jobId } = route.params;
  const [formData, setFormData] = useState({
    coverLetter: '',
    resume: null,
    phoneNumber: '',
    availability: '',
    questions: []
  });

  const handleSubmit = () => {
    // In a real app, you would submit the application here
    navigation.navigate('ApplicationSubmitted');
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
        <Text style={styles.headerTitle}>Job Application</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.jobInfoContainer}>
          <Text style={styles.jobTitle}>Senior React Native Developer</Text>
          <Text style={styles.companyName}>Microsoft</Text>
          <Text style={styles.jobLocation}>New York, USA</Text>
        </View>
        
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Resume</Text>
            <TouchableOpacity 
              style={styles.uploadButton}
              onPress={() => navigation.navigate('UploadResume')}
            >
              <Ionicons name="document-outline" size={24} color="#0D0166" />
              <Text style={styles.uploadButtonText}>
                {formData.resume ? 'Resume uploaded' : 'Upload Resume'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Cover Letter</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.coverLetter}
                onChangeText={(text) => setFormData({...formData, coverLetter: text})}
                multiline
                numberOfLines={8}
                textAlignVertical="top"
                placeholder="Write a brief cover letter explaining why you're a good fit for this position..."
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.phoneNumber}
                onChangeText={(text) => setFormData({...formData, phoneNumber: text})}
                placeholder="e.g. +1 (555) 123-4567"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Availability</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={formData.availability}
                onChangeText={(text) => setFormData({...formData, availability: text})}
                placeholder="e.g. Available immediately, 2 weeks notice"
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.sectionTitle}>Screening Questions</Text>
            
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>
                Do you have 3+ years of experience with React Native?
              </Text>
              <View style={styles.radioGroup}>
                <TouchableOpacity 
                  style={styles.radioOption}
                  onPress={() => {
                    const questions = [...formData.questions];
                    questions[0] = 'Yes';
                    setFormData({...formData, questions});
                  }}
                >
                  <View style={[
                    styles.radioButton,
                    formData.questions[0] === 'Yes' && styles.radioButtonSelected
                  ]}>
                    {formData.questions[0] === 'Yes' && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                  <Text style={styles.radioText}>Yes</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.radioOption}
                  onPress={() => {
                    const questions = [...formData.questions];
                    questions[0] = 'No';
                    setFormData({...formData, questions});
                  }}
                >
                  <View style={[
                    styles.radioButton,
                    formData.questions[0] === 'No' && styles.radioButtonSelected
                  ]}>
                    {formData.questions[0] === 'No' && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                  <Text style={styles.radioText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.questionContainer}>
              <Text style={styles.questionText}>
                Are you authorized to work in the United States?
              </Text>
              <View style={styles.radioGroup}>
                <TouchableOpacity 
                  style={styles.radioOption}
                  onPress={() => {
                    const questions = [...formData.questions];
                    questions[1] = 'Yes';
                    setFormData({...formData, questions});
                  }}
                >
                  <View style={[
                    styles.radioButton,
                    formData.questions[1] === 'Yes' && styles.radioButtonSelected
                  ]}>
                    {formData.questions[1] === 'Yes' && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                  <Text style={styles.radioText}>Yes</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.radioOption}
                  onPress={() => {
                    const questions = [...formData.questions];
                    questions[1] = 'No';
                    setFormData({...formData, questions});
                  }}
                >
                  <View style={[
                    styles.radioButton,
                    formData.questions[1] === 'No' && styles.radioButtonSelected
                  ]}>
                    {formData.questions[1] === 'No' && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                  <Text style={styles.radioText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Submit Application</Text>
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
  placeholderView: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  jobInfoContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  jobLocation: {
    fontSize: 14,
    color: '#666',
  },
  formContainer: {
    padding: 16,
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
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F5FF',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#0D0166',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 14,
    color: '#0D0166',
    marginLeft: 8,
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
  },
  textAreaContainer: {
    height: 160,
    paddingVertical: 12,
  },
  textArea: {
    height: 140,
    textAlignVertical: 'top',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  radioGroup: {
    flexDirection: 'row',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0D0166',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioButtonSelected: {
    borderColor: '#0D0166',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0D0166',
  },
  radioText: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  submitButton: {
    backgroundColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
