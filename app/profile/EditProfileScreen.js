import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Edit Profile screen (ID: 1:3855)
export default function EditProfileScreen({ navigation }) {
  // Sample profile data
  const [profileData, setProfileData] = useState({
    name: 'John Smith',
    title: 'Senior React Native Developer',
    location: 'New York, USA',
    about: 'Experienced React Native developer with 5+ years of experience building cross-platform mobile applications. Passionate about creating intuitive user interfaces and optimizing app performance.'
  });

  const handleSave = () => {
    // In a real app, you would save the profile data here
    navigation.goBack();
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
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileImageContainer}>
          <Image 
            source={require('../../assets/images/avatar.webp')} 
            style={styles.profileImage} 
          />
          <TouchableOpacity style={styles.editImageButton}>
            <Ionicons name="camera" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={profileData.name}
                onChangeText={(text) => setProfileData({...profileData, name: text})}
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Professional Title</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={profileData.title}
                onChangeText={(text) => setProfileData({...profileData, title: text})}
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Location</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={profileData.location}
                onChangeText={(text) => setProfileData({...profileData, location: text})}
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>About</Text>
            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={profileData.about}
                onChangeText={(text) => setProfileData({...profileData, about: text})}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <TouchableOpacity 
            style={styles.sectionButton}
            onPress={() => navigation.navigate('ManageExperience')}
          >
            <Text style={styles.sectionButtonText}>Manage Experience</Text>
            <Ionicons name="chevron-forward" size={20} color="#0D0166" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Education</Text>
          <TouchableOpacity 
            style={styles.sectionButton}
            onPress={() => navigation.navigate('ManageEducation')}
          >
            <Text style={styles.sectionButtonText}>Manage Education</Text>
            <Ionicons name="chevron-forward" size={20} color="#0D0166" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <TouchableOpacity 
            style={styles.sectionButton}
            onPress={() => navigation.navigate('ManageSkills')}
          >
            <Text style={styles.sectionButtonText}>Manage Skills</Text>
            <Ionicons name="chevron-forward" size={20} color="#0D0166" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <TouchableOpacity 
            style={styles.sectionButton}
            onPress={() => navigation.navigate('ManageLanguages')}
          >
            <Text style={styles.sectionButtonText}>Manage Languages</Text>
            <Ionicons name="chevron-forward" size={20} color="#0D0166" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Resume</Text>
          <TouchableOpacity 
            style={styles.sectionButton}
            onPress={() => navigation.navigate('ManageResume')}
          >
            <Text style={styles.sectionButtonText}>Manage Resume</Text>
            <Ionicons name="chevron-forward" size={20} color="#0D0166" />
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
  saveButtonText: {
    color: '#0D0166',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  profileImageContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E1E1E1',
  },
  editImageButton: {
    position: 'absolute',
    bottom: 20,
    right: '50%',
    marginRight: -50,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0D0166',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
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
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  input: {
    height: 50,
    fontSize: 14,
    color: '#333',
  },
  textAreaContainer: {
    height: 120,
  },
  textArea: {
    height: 120,
    paddingTop: 12,
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
  sectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  sectionButtonText: {
    fontSize: 16,
    color: '#0D0166',
  },
});
