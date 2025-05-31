import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Search screen (ID: 1:858)
export default function SearchScreen({ navigation, route }) {
  const initialQuery = route.params?.query || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState('jobs');

  // Sample data for search results
  const jobResults = [
    {
      id: '1',
      company: 'Microsoft',
      position: 'Senior React Native Developer',
      location: 'New York, USA',
      posted: '2 days ago',
      logo: require('../../assets/images/avatar.webp')
    },
    {
      id: '2',
      company: 'Google',
      position: 'UX Designer',
      location: 'Remote',
      posted: '1 day ago',
      logo: require('../../assets/images/avatar.webp')
    },
    {
      id: '3',
      company: 'Apple',
      position: 'iOS Developer',
      location: 'Cupertino, CA',
      posted: '3 days ago',
      logo: require('../../assets/images/avatar.webp')
    },
  ];

  const peopleResults = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Senior Product Designer',
      company: 'Microsoft',
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '2',
      name: 'John Smith',
      title: 'Frontend Developer',
      company: 'Google',
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '3',
      name: 'Emily Davis',
      title: 'UX Researcher',
      company: 'Apple',
      avatar: require('../../assets/images/avatar.webp')
    },
  ];

  const companyResults = [
    {
      id: '1',
      name: 'Microsoft',
      industry: 'Technology',
      location: 'Redmond, WA',
      logo: require('../../assets/images/avatar.webp')
    },
    {
      id: '2',
      name: 'Google',
      industry: 'Technology',
      location: 'Mountain View, CA',
      logo: require('../../assets/images/avatar.webp')
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
        <TouchableOpacity 
          style={styles.applyButton}
          onPress={() => navigation.navigate('JobApplication', { jobId: item.id })}
        >
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderPersonItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.personCard}
      onPress={() => navigation.navigate('UserProfile', { userId: item.id })}
    >
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

  const renderCompanyItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.companyCard}
      onPress={() => navigation.navigate('CompanyProfile', { companyId: item.id })}
    >
      <Image source={item.logo} style={styles.companyCardLogo} />
      <View style={styles.companyInfo}>
        <Text style={styles.companyCardName}>{item.name}</Text>
        <Text style={styles.companyIndustry}>{item.industry}</Text>
        <Text style={styles.companyLocation}>{item.location}</Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#0D0166" />
        </TouchableOpacity>
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
          autoFocus={initialQuery === ''}
        />
        {searchQuery ? (
          <TouchableOpacity 
            style={styles.clearButton}
            onPress={() => setSearchQuery('')}
          >
            <Ionicons name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        ) : null}
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
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="briefcase-outline" size={64} color="#CCCCCC" />
              <Text style={styles.emptyTitle}>No jobs found</Text>
              <Text style={styles.emptyText}>Try different keywords or filters</Text>
            </View>
          }
        />
      )}
      
      {activeTab === 'people' && (
        <FlatList
          data={peopleResults}
          renderItem={renderPersonItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.resultsContainer}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="people-outline" size={64} color="#CCCCCC" />
              <Text style={styles.emptyTitle}>No people found</Text>
              <Text style={styles.emptyText}>Try different keywords or filters</Text>
            </View>
          }
        />
      )}
      
      {activeTab === 'companies' && (
        <FlatList
          data={companyResults}
          renderItem={renderCompanyItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.resultsContainer}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="business-outline" size={64} color="#CCCCCC" />
              <Text style={styles.emptyTitle}>No companies found</Text>
              <Text style={styles.emptyText}>Try different keywords or filters</Text>
            </View>
          }
        />
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
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
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
  clearButton: {
    padding: 4,
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
    flexGrow: 1,
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
    backgroundColor: '#E1E1E1',
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
    backgroundColor: '#E1E1E1',
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
  companyCard: {
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
  companyCardLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#E1E1E1',
  },
  companyInfo: {
    flex: 1,
  },
  companyCardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  companyIndustry: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  companyLocation: {
    fontSize: 14,
    color: '#666',
  },
  followButton: {
    backgroundColor: '#0D0166',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 80,
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
});
