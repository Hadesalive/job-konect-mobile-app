import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Profile screen (ID: 1:3690)
export default function ProfileScreen({ navigation }) {
  // Sample profile data
  const profileData = {
    name: 'John Smith',
    title: 'Senior React Native Developer',
    location: 'New York, USA',
    connections: 358,
    about: 'Experienced React Native developer with 5+ years of experience building cross-platform mobile applications. Passionate about creating intuitive user interfaces and optimizing app performance.',
    experience: [
      {
        id: '1',
        role: 'Senior React Native Developer',
        company: 'TechCorp Inc.',
        duration: 'Jan 2023 - Present',
        logo: require('../../assets/images/avatar.webp')
      },
      {
        id: '2',
        role: 'React Native Developer',
        company: 'Mobile Solutions',
        duration: 'Mar 2020 - Dec 2022',
        logo: require('../../assets/images/avatar.webp')
      }
    ],
    education: [
      {
        id: '1',
        degree: 'Master of Computer Science',
        school: 'New York University',
        duration: '2018 - 2020',
        logo: require('../../assets/images/avatar.webpg')
      }
    ],
    skills: ['React Native', 'JavaScript', 'TypeScript', 'Redux', 'React Navigation', 'Git', 'REST APIs', 'GraphQL'],
    languages: ['English (Native)', 'Spanish (Intermediate)']
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="#0D0166" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileHeader}>
          <Image 
            source={require('../../assets/images/avatar.webp')} 
            style={styles.profileImage} 
          />
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.profileTitle}>{profileData.title}</Text>
          <Text style={styles.profileLocation}>
            <Ionicons name="location-outline" size={16} color="#666" /> {profileData.location}
          </Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{profileData.connections}</Text>
              <Text style={styles.statLabel}>Connections</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>{profileData.about}</Text>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {profileData.experience.map(item => (
            <View key={item.id} style={styles.experienceItem}>
              <Image source={item.logo} style={styles.companyLogo} />
              <View style={styles.experienceInfo}>
                <Text style={styles.experienceRole}>{item.role}</Text>
                <Text style={styles.experienceCompany}>{item.company}</Text>
                <Text style={styles.experienceDuration}>{item.duration}</Text>
              </View>
            </View>
          ))}
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddWorkExperience')}
          >
            <Ionicons name="add" size={20} color="#0D0166" />
            <Text style={styles.addButtonText}>Add Experience</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Education</Text>
          {profileData.education.map(item => (
            <View key={item.id} style={styles.educationItem}>
              <Image source={item.logo} style={styles.schoolLogo} />
              <View style={styles.educationInfo}>
                <Text style={styles.educationDegree}>{item.degree}</Text>
                <Text style={styles.educationSchool}>{item.school}</Text>
                <Text style={styles.educationDuration}>{item.duration}</Text>
              </View>
            </View>
          ))}
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddEducation')}
          >
            <Ionicons name="add" size={20} color="#0D0166" />
            <Text style={styles.addButtonText}>Add Education</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {profileData.skills.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddSkill')}
          >
            <Ionicons name="add" size={20} color="#0D0166" />
            <Text style={styles.addButtonText}>Add Skill</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Languages</Text>
          {profileData.languages.map((language, index) => (
            <Text key={index} style={styles.languageItem}>{language}</Text>
          ))}
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddLanguage')}
          >
            <Ionicons name="add" size={20} color="#0D0166" />
            <Text style={styles.addButtonText}>Add Language</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    backgroundColor: '#E1E1E1',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 4,
  },
  profileTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  profileLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  editButton: {
    backgroundColor: '#0D0166',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  experienceItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#E1E1E1',
  },
  experienceInfo: {
    flex: 1,
  },
  experienceRole: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  experienceCompany: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  experienceDuration: {
    fontSize: 12,
    color: '#999',
  },
  educationItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  schoolLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#E1E1E1',
  },
  educationInfo: {
    flex: 1,
  },
  educationDegree: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  educationSchool: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
  educationDuration: {
    fontSize: 12,
    color: '#999',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  skillItem: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
  },
  languageItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 14,
    color: '#0D0166',
    marginLeft: 4,
  },
});
