import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Application Status screen
export default function ApplicationStatusScreen({ navigation, route }) {
  const { jobId } = route.params;
  
  // Sample application data
  const applicationData = {
    id: '1',
    job: 'Senior React Native Developer',
    company: 'Microsoft',
    location: 'New York, USA',
    logo: require('../../assets/images/avatar.webp'),
    status: 'Under Review',
    appliedDate: 'May 25, 2025',
    timeline: [
      {
        id: '1',
        status: 'Applied',
        date: 'May 25, 2025',
        completed: true
      },
      {
        id: '2',
        status: 'Under Review',
        date: 'Current',
        completed: false,
        current: true
      },
      {
        id: '3',
        status: 'Interview',
        date: 'Pending',
        completed: false
      },
      {
        id: '4',
        status: 'Decision',
        date: 'Pending',
        completed: false
      }
    ]
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
        <Text style={styles.headerTitle}>Application Status</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.jobInfoContainer}>
          <Image source={applicationData.logo} style={styles.companyLogo} />
          <Text style={styles.jobTitle}>{applicationData.job}</Text>
          <Text style={styles.companyName}>{applicationData.company}</Text>
          <Text style={styles.jobLocation}>
            <Ionicons name="location-outline" size={16} color="#666" /> {applicationData.location}
          </Text>
          
          <View style={styles.statusContainer}>
            <Text style={styles.statusLabel}>Status:</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{applicationData.status}</Text>
            </View>
          </View>
          
          <Text style={styles.appliedDate}>Applied on {applicationData.appliedDate}</Text>
        </View>
        
        <View style={styles.timelineContainer}>
          <Text style={styles.sectionTitle}>Application Timeline</Text>
          
          {applicationData.timeline.map((item, index) => (
            <View key={item.id} style={styles.timelineItem}>
              <View style={styles.timelineIconContainer}>
                <View style={[
                  styles.timelineIcon,
                  item.completed && styles.completedIcon,
                  item.current && styles.currentIcon
                ]}>
                  {item.completed ? (
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                  ) : (
                    <Text style={styles.timelineIconText}>{index + 1}</Text>
                  )}
                </View>
                {index < applicationData.timeline.length - 1 && (
                  <View style={[
                    styles.timelineLine,
                    item.completed && styles.completedLine
                  ]} />
                )}
              </View>
              
              <View style={styles.timelineContent}>
                <Text style={[
                  styles.timelineStatus,
                  item.current && styles.currentStatus
                ]}>
                  {item.status}
                </Text>
                <Text style={styles.timelineDate}>{item.date}</Text>
              </View>
            </View>
          ))}
        </View>
        
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('JobDetails', { jobId })}
          >
            <Ionicons name="document-text-outline" size={20} color="#0D0166" />
            <Text style={styles.actionButtonText}>View Job Details</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Messages')}
          >
            <Ionicons name="chatbubble-outline" size={20} color="#0D0166" />
            <Text style={styles.actionButtonText}>Contact Recruiter</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('WithdrawApplication')}
          >
            <Ionicons name="close-circle-outline" size={20} color="#D32F2F" />
            <Text style={[styles.actionButtonText, styles.withdrawText]}>Withdraw Application</Text>
          </TouchableOpacity>
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
  placeholderView: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  jobInfoContainer: {
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  companyLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#E1E1E1',
  },
  jobTitle: {
    fontSize: 18,
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statusLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  statusBadge: {
    backgroundColor: '#E8EFFF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 14,
    color: '#0D0166',
    fontWeight: 'bold',
  },
  appliedDate: {
    fontSize: 14,
    color: '#666',
  },
  timelineContainer: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 24,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timelineIconContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  timelineIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  completedIcon: {
    backgroundColor: '#4CAF50',
  },
  currentIcon: {
    backgroundColor: '#0D0166',
  },
  timelineIconText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  completedLine: {
    backgroundColor: '#4CAF50',
  },
  timelineContent: {
    flex: 1,
  },
  timelineStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  currentStatus: {
    color: '#0D0166',
  },
  timelineDate: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    padding: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#0D0166',
    marginLeft: 12,
  },
  withdrawText: {
    color: '#D32F2F',
  },
});
