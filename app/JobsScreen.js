import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function JobsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('all');

  // Sample data for jobs
  const jobsData = [
    {
      id: '1',
      company: 'Microsoft',
      position: 'Senior React Native Developer',
      location: 'New York, USA',
      posted: '2 days ago',
      logo: require('../assets/images/avatar.webp')
    },
    {
      id: '2',
      company: 'Google',
      position: 'UX Designer',
      location: 'Remote',
      posted: '1 day ago',
      logo: require('../assets/images/avatar.webp')
    },
    {
      id: '3',
      company: 'Apple',
      position: 'iOS Developer',
      location: 'Cupertino, CA',
      posted: '3 days ago',
      logo: require('../assets/images/avatar.webp')
    },
    {
      id: '4',
      company: 'Amazon',
      position: 'Full Stack Developer',
      location: 'Seattle, WA',
      posted: '5 days ago',
      logo: require('../assets/images/avatar.webp')
    },
  ];

  const renderJobItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.jobCard}
      onPress={() => navigation.navigate('JobDetails', { jobId: item.id })}
    >
      <View style={styles.jobHeader}>
        <Image source={item.logo} style={styles.companyLogo} />
        <View style={styles.jobInfo}>
          <Text style={styles.companyName}>{item.company}</Text>
          <Text style={styles.jobPosition}>{item.position}</Text>
          <Text style={styles.jobLocation}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.jobFooter}>
        <Text style={styles.postedTime}>{item.posted}</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Jobs</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Ionicons name="options-outline" size={24} color="#0D0166" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>All Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
          onPress={() => setActiveTab('saved')}
        >
          <Text style={[styles.tabText, activeTab === 'saved' && styles.activeTabText]}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'applied' && styles.activeTab]}
          onPress={() => setActiveTab('applied')}
        >
          <Text style={[styles.tabText, activeTab === 'applied' && styles.activeTabText]}>Applied</Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === 'all' && (
        <FlatList
          data={jobsData}
          renderItem={renderJobItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.jobsContainer}
        />
      )}
      
      {activeTab === 'saved' && (
        <View style={styles.emptyContainer}>
          <Ionicons name="bookmark-outline" size={64} color="#CCCCCC" />
          <Text style={styles.emptyTitle}>No Saved Jobs</Text>
          <Text style={styles.emptyText}>Jobs you save will appear here</Text>
        </View>
      )}
      
      {activeTab === 'applied' && (
        <View style={styles.emptyContainer}>
          <Ionicons name="document-text-outline" size={64} color="#CCCCCC" />
          <Text style={styles.emptyTitle}>No Applications</Text>
          <Text style={styles.emptyText}>Jobs you've applied to will appear here</Text>
        </View>
      )}
      
      <TouchableOpacity 
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddJob')}
      >
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tab: {
    paddingVertical: 12,
    marginRight: 24,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0D0166',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#0D0166',
    fontWeight: 'bold',
  },
  jobsContainer: {
    padding: 16,
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  jobHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  jobInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 14,
    color: '#666',
  },
  jobPosition: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
    marginVertical: 4,
  },
  jobLocation: {
    fontSize: 14,
    color: '#666',
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  postedTime: {
    fontSize: 12,
    color: '#999',
  },
  applyButton: {
    backgroundColor: '#0D0166',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0D0166',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
