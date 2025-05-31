import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Account Settings screen
export default function AccountSettingsScreen({ navigation }) {
  const [userData, setUserData] = useState({
    email: 'user@example.com',
    phone: '+1 (555) 123-4567',
    language: 'English',
    timezone: 'UTC-5 (Eastern Time)'
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#0D0166" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Information</Text>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Email</Text>
            <View style={styles.settingValueContainer}>
              <Text style={styles.settingValue}>{userData.email}</Text>
              <TouchableOpacity 
                style={styles.editButton}
                onPress={() => navigation.navigate('EditEmail')}
              >
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Phone Number</Text>
            <View style={styles.settingValueContainer}>
              <Text style={styles.settingValue}>{userData.phone}</Text>
              <TouchableOpacity 
                style={styles.editButton}
                onPress={() => navigation.navigate('EditPhone')}
              >
                <Text style={styles.editButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.passwordButton}
            onPress={() => navigation.navigate('ChangePassword')}
          >
            <Text style={styles.passwordButtonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <TouchableOpacity 
            style={styles.preferencesItem}
            onPress={() => navigation.navigate('LanguageSettings')}
          >
            <View>
              <Text style={styles.preferencesLabel}>Language</Text>
              <Text style={styles.preferencesValue}>{userData.language}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.preferencesItem}
            onPress={() => navigation.navigate('TimezoneSettings')}
          >
            <View>
              <Text style={styles.preferencesLabel}>Timezone</Text>
              <Text style={styles.preferencesValue}>{userData.timezone}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connected Accounts</Text>
          
          <TouchableOpacity style={styles.connectButton}>
            <Image 
              source={require('../../assets/images/avatar.webp')}
              style={styles.connectIcon}
            />
            <Text style={styles.connectButtonText}>Connect Google Account</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.connectButton}>
            <Image 
              source={require('../../assets/images/avatar.webp')}
              style={styles.connectIcon}
            />
            <Text style={styles.connectButtonText}>Connect Apple Account</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.connectButton}>
            <Image 
              source={require('../../assets/images/avatar.webp')}
              style={styles.connectIcon}
            />
            <Text style={styles.connectButtonText}>Connect LinkedIn Account</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <TouchableOpacity 
            style={styles.dangerButton}
            onPress={() => navigation.navigate('DeactivateAccount')}
          >
            <Text style={styles.dangerButtonText}>Deactivate Account</Text>
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
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 16,
  },
  settingItem: {
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  settingValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 16,
    color: '#333',
  },
  editButton: {
    padding: 4,
  },
  editButtonText: {
    fontSize: 14,
    color: '#0D0166',
    fontWeight: 'bold',
  },
  passwordButton: {
    backgroundColor: '#F0F5FF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  passwordButtonText: {
    color: '#0D0166',
    fontSize: 14,
    fontWeight: 'bold',
  },
  preferencesItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  preferencesLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  preferencesValue: {
    fontSize: 16,
    color: '#333',
  },
  connectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  connectIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    backgroundColor: '#E1E1E1',
  },
  connectButtonText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  dangerButton: {
    backgroundColor: '#FFF0F0',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  dangerButtonText: {
    color: '#D32F2F',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
