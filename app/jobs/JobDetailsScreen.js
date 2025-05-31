import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Job Details screen
export default function JobDetailsScreen({ navigation, route }) {
  const { jobId } = route.params;
  const [isSaved, setIsSaved] = useState(false);
  
  // Sample job data
  const jobData = {
    id: jobId,
    title: 'Senior React Native Developer',
    company: 'Microsoft',
    location: 'New York, USA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    posted: '2 days ago',
    logo: require('../../assets/images/avatar.webp'),
    description: 'We are looking for an experienced React Native developer to join our mobile team. The ideal candidate will have strong experience building cross-platform mobile applications using React Native and related technologies.',
    responsibilities: [
      'Design and build advanced applications for the iOS and Android platform using React Native',
      'Collaborate with cross-functional teams to define, design, and ship new features',
      'Unit-test code for robustness, including edge cases, usability, and general reliability',
      'Work on bug fixing and improving application performance',
      'Continuously discover, evaluate, and implement new technologies to maximize development efficiency'
    ],
    requirements: [
      '3+ years of experience with React Native',
      'Strong knowledge of JavaScript/TypeScript',
      'Experience with state management libraries (Redux, MobX, etc.)',
      'Familiarity with native build tools (Xcode, Android Studio)',
      'Understanding of RESTful APIs and GraphQL',
      'Experience with version control systems (Git)'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work hours and remote work options',
      'Professional development budget',
      'Generous vacation policy'
    ]
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleApply = () => {
    navigation.navigate('JobApplication', { jobId });
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
        <Text style={styles.headerTitle}>Job Details</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={toggleSave}
        >
          <Ionicons 
            name={isSaved ? "bookmark" : "bookmark-outline"} 
            size={24} 
            color="#0D0166" 
          />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.jobHeader}>
          <Image source={jobData.logo} style={styles.companyLogo} />
          <Text style={styles.jobTitle}>{jobData.title}</Text>
          <Text style={styles.companyName}>{jobData.company}</Text>
          <Text style={styles.jobLocation}>
            <Ionicons name="location-outline" size={16} color="#666" /> {jobData.location}
          </Text>
          
          <View style={styles.jobMetaContainer}>
            <View style={styles.jobMetaItem}>
              <Ionicons name="briefcase-outline" size={16} color="#666" />
              <Text style={styles.jobMetaText}>{jobData.type}</Text>
            </View>
            <View style={styles.jobMetaItem}>
              <Ionicons name="cash-outline" size={16} color="#666" />
              <Text style={styles.jobMetaText}>{jobData.salary}</Text>
            </View>
            <View style={styles.jobMetaItem}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.jobMetaText}>Posted {jobData.posted}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{jobData.description}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Responsibilities</Text>
          {jobData.responsibilities.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bulletPoint} />
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requirements</Text>
          {jobData.requirements.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bulletPoint} />
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          {jobData.benefits.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bulletPoint} />
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.companySection}>
          <Text style={styles.sectionTitle}>About the Company</Text>
          <TouchableOpacity 
            style={styles.companyButton}
            onPress={() => navigation.navigate('CompanyProfile', { companyId: jobData.company })}
          >
            <Text style={styles.companyButtonText}>View Company Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.applyButton}
          onPress={handleApply}
        >
          <Text style={styles.applyButtonText}>Apply Now</Text>
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
  saveButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  jobHeader: {
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#E1E1E1',
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 8,
    textAlign: 'center',
  },
  companyName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  jobLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  jobMetaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  jobMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  jobMetaText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0D0166',
    marginTop: 8,
    marginRight: 8,
  },
  listItemText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  companySection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  companyButton: {
    borderWidth: 1,
    borderColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  companyButtonText: {
    color: '#0D0166',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  applyButton: {
    backgroundColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
