import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Company Jobs screen
export default function CompanyJobsScreen({ navigation, route }) {
  const { companyId } = route.params;
  
  // Sample company data
  const companyData = {
    id: companyId,
    name: 'Microsoft',
    logo: require('../../assets/images/avatar.webp'),
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
      },
      {
        id: '4',
        title: 'Frontend Developer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        posted: '5 days ago'
      },
      {
        id: '5',
        title: 'Data Scientist',
        location: 'Boston, MA',
        type: 'Full-time',
        posted: '1 week ago'
      },
      {
        id: '6',
        title: 'DevOps Engineer',
        location: 'Austin, TX',
        type: 'Full-time',
        posted: '1 week ago'
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
        <Text style={styles.headerTitle}>Jobs at {companyData.name}</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <View style={styles.companyHeader}>
        <Image source={companyData.logo} style={styles.companyLogo} />
        <Text style={styles.companyName}>{companyData.name}</Text>
        <TouchableOpacity 
          style={styles.viewProfileButton}
          onPress={() => navigation.navigate('CompanyProfile', { companyId })}
        >
          <Text style={styles.viewProfileButtonText}>View Company Profile</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={companyData.jobs}
        renderItem={renderJobItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.jobsContainer}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.jobsCount}>{companyData.jobs.length} Jobs Available</Text>
          </View>
        }
      />
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
  companyHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  companyLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#E1E1E1',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 12,
  },
  viewProfileButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#0D0166',
    borderRadius: 20,
  },
  viewProfileButtonText: {
    fontSize: 14,
    color: '#0D0166',
  },
  jobsContainer: {
    padding: 16,
  },
  listHeader: {
    marginBottom: 16,
  },
  jobsCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
