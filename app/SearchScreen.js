import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('jobs');

  // Sample data for search results
  const jobResults = [
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
  ];

  const peopleResults = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Senior Product Designer',
      company: 'Microsoft',
      avatar: require('../assets/images/avatar.webp')
    },
    {
      id: '2',
      name: 'John Smith',
      title: 'Frontend Developer',
      company: 'Google',
      avatar: require('../assets/images/avatar.webp')
    },
    {
      id: '3',
      name: 'Emily Davis',
      title: 'UX Researcher',
      company: 'Apple',
      avatar: require('../assets/images/avatar.webp')
    },
  ];

  const renderJobItem = ({ item }) => (
    <TouchableOpacity style={styles.jobCard}>
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

  const renderPersonItem = ({ item }) => (
    <TouchableOpacity style={styles.personCard}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.personInfo}>
        <Text style={styles.personName}>{item.name}</Text>
        <Text style={styles.personTitle}>{item.title}</Text>
        <Text style={styles.personCompany}>{item.company}</Text>
      </View>
      <TouchableOpacity style={styles.connectButton}>
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Ionicons name="options-outline" size={24} color="#0D0166" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search jobs, people, companies..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'jobs' && styles.activeTab]}
          onPress={() => setActiveTab('jobs')}
        >
          <Text style={[styles.tabText, activeTab === 'jobs' && styles.activeTabText]}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'people' && styles.activeTab]}
          onPress={() => setActiveTab('people')}
        >
          <Text style={[styles.tabText, activeTab === 'people' && styles.activeTabText]}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'companies' && styles.activeTab]}
          onPress={() => setActiveTab('companies')}
        >
          <Text style={[styles.tabText, activeTab === 'companies' && styles.activeTabText]}>Companies</Text>
        </TouchableOpacity>
      </View>
      
      {activeTab === 'jobs' && (
        <FlatList
          data={jobResults}
          renderItem={renderJobItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.resultsContainer}
        />
      )}
      
      {activeTab === 'people' && (
        <FlatList
          data={peopleResults}
          renderItem={renderPersonItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.resultsContainer}
        />
      )}
      
      {activeTab === 'companies' && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No companies found</Text>
        </View>
      )}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
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
  resultsContainer: {
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
  personCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  personTitle: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  personCompany: {
    fontSize: 14,
    color: '#666',
  },
  connectButton: {
    backgroundColor: '#0D0166',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  connectButtonText: {
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
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});
