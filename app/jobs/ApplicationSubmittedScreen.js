import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Application Submitted screen
export default function ApplicationSubmittedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('Jobs')}
        >
          <Ionicons name="arrow-back" size={24} color="#0D0166" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Application Submitted</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.successIconContainer}>
          <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
        </View>
        
        <Text style={styles.title}>Application Submitted!</Text>
        <Text style={styles.message}>
          Your application for Senior React Native Developer at Microsoft has been successfully submitted. The employer will review your application and contact you if they're interested.
        </Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>What's Next?</Text>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="eye-outline" size={24} color="#0D0166" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoItemTitle}>Application Review</Text>
              <Text style={styles.infoItemText}>The employer will review your application and resume.</Text>
            </View>
          </View>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="mail-outline" size={24} color="#0D0166" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoItemTitle}>Communication</Text>
              <Text style={styles.infoItemText}>You'll receive notifications and messages if the employer is interested.</Text>
            </View>
          </View>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="calendar-outline" size={24} color="#0D0166" />
            </View>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoItemTitle}>Interview</Text>
              <Text style={styles.infoItemText}>If selected, you'll be invited for an interview.</Text>
            </View>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.browseButton}
          onPress={() => navigation.navigate('Jobs')}
        >
          <Text style={styles.browseButtonText}>Browse More Jobs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.viewButton}
          onPress={() => navigation.navigate('ApplicationStatus', { jobId: '1' })}
        >
          <Text style={styles.viewButtonText}>View Application Status</Text>
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
  contentContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  successIconContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 32,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8EFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  infoItemText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  browseButton: {
    backgroundColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  browseButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0D0166',
  },
  viewButtonText: {
    color: '#0D0166',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
