import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Company Profile screen
export default function CompanyProfileScreen({ navigation, route }) {
  const { companyId } = route.params;
  
  // Sample company data
  const companyData = {
    id: companyId,
    name: 'Microsoft',
    industry: 'Technology',
    location: 'Redmond, WA',
    size: '10,000+ employees',
    founded: '1975',
    website: 'www.microsoft.com',
    logo: require('../../assets/images/avatar.webp'),
    coverImage: require('../../assets/images/avatar.webp'),
    about: 'Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    jobs: [
      {
        id: '1',
        title: 'Senior React Native Developer',
        location: 'New York, USA',
        type: 'Full-time',
        posted: '2 days ago'
      },
      {
        id: '2',
        title: 'UX Designer',
        location: 'Remote',
        type: 'Full-time',
        posted: '1 day ago'
      },
      {
        id: '3',
        title: 'Product Manager',
        location: 'Seattle, WA',
        type: 'Full-time',
        posted: '3 days ago'
      }
    ]
  };

  const renderJobItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.jobCard}
      onPress={() => navigation.navigate('JobDetails', { jobId: item.id })}
    >
      <View style={styles.jobContent}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobLocation}>
          <Ionicons name="location-outline" size={14} color="#666" /> {item.location}
        </Text>
        <View style={styles.jobMeta}>
          <Text style={styles.jobType}>{item.type}</Text>
          <Text style={styles.jobPosted}>Posted {item.posted}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
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
        <Text style={styles.headerTitle}>Company Profile</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-outline" size={24} color="#0D0166" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.coverImageContainer}>
          <Image source={companyData.coverImage} style={styles.coverImage} />
          <View style={styles.logoContainer}>
            <Image source={companyData.logo} style={styles.logo} />
          </View>
        </View>
        
        <View style={styles.companyInfoContainer}>
          <Text style={styles.companyName}>{companyData.name}</Text>
          <Text style={styles.companyIndustry}>{companyData.industry}</Text>
          
          <View style={styles.companyMetaContainer}>
            <View style={styles.companyMetaItem}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.companyMetaText}>{companyData.location}</Text>
            </View>
            <View style={styles.companyMetaItem}>
              <Ionicons name="people-outline" size={16} color="#666" />
              <Text style={styles.companyMetaText}>{companyData.size}</Text>
            </View>
            <View style={styles.companyMetaItem}>
              <Ionicons name="calendar-outline" size={16} color="#666" />
              <Text style={styles.companyMetaText}>Founded {companyData.founded}</Text>
            </View>
            <View style={styles.companyMetaItem}>
              <Ionicons name="globe-outline" size={16} color="#666" />
              <Text style={styles.companyMetaText}>{companyData.website}</Text>
            </View>
          </View>
          
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.followButton}>
              <Ionicons name="add" size={20} color="#FFFFFF" />
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.websiteButton}>
              <Ionicons name="globe-outline" size={20} color="#0D0166" />
              <Text style={styles.websiteButtonText}>Visit Website</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>{companyData.about}</Text>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Open Jobs</Text>
            <TouchableOpacity 
              style={styles.viewAllButton}
              onPress={() => navigation.navigate('CompanyJobs', { companyId })}
            >
              <Text style={styles.viewAllButtonText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={companyData.jobs}
            renderItem={renderJobItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
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
  shareButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  coverImageContainer: {
    height: 150,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E1E1E1',
  },
  logoContainer: {
    position: 'absolute',
    bottom: -40,
    left: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 6,
    backgroundColor: '#E1E1E1',
  },
  companyInfoContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  companyName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 4,
  },
  companyIndustry: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  companyMetaContainer: {
    marginBottom: 20,
  },
  companyMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  companyMetaText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
  },
  followButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#0D0166',
  },
  websiteButtonText: {
    color: '#0D0166',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  viewAllButton: {
    padding: 4,
  },
  viewAllButtonText: {
    fontSize: 14,
    color: '#0D0166',
    fontWeight: 'bold',
  },
  jobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  jobContent: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 4,
  },
  jobLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  jobMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobType: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#E8EFFF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  jobPosted: {
    fontSize: 12,
    color: '#999',
  },
});
