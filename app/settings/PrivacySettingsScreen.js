import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Privacy Settings screen
export default function PrivacySettingsScreen({ navigation }) {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    allowMessaging: true,
    allowConnectionRequests: true
  });

  const toggleSetting = (setting) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: !privacySettings[setting]
    });
  };

  const handleProfileVisibilityChange = (value) => {
    setPrivacySettings({
      ...privacySettings,
      profileVisibility: value
    });
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
        <Text style={styles.headerTitle}>Privacy Settings</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Visibility</Text>
          
          <View style={styles.radioGroup}>
            <TouchableOpacity 
              style={styles.radioOption}
              onPress={() => handleProfileVisibilityChange('public')}
            >
              <View style={[
                styles.radioButton,
                privacySettings.profileVisibility === 'public' && styles.radioButtonSelected
              ]}>
                {privacySettings.profileVisibility === 'public' && (
                  <View style={styles.radioButtonInner} />
                )}
              </View>
              <View style={styles.radioContent}>
                <Text style={styles.radioTitle}>Public</Text>
                <Text style={styles.radioDescription}>
                  Your profile is visible to everyone, including non-members
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.radioOption}
              onPress={() => handleProfileVisibilityChange('members')}
            >
              <View style={[
                styles.radioButton,
                privacySettings.profileVisibility === 'members' && styles.radioButtonSelected
              ]}>
                {privacySettings.profileVisibility === 'members' && (
                  <View style={styles.radioButtonInner} />
                )}
              </View>
              <View style={styles.radioContent}>
                <Text style={styles.radioTitle}>Members Only</Text>
                <Text style={styles.radioDescription}>
                  Your profile is only visible to registered Job Konect members
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.radioOption}
              onPress={() => handleProfileVisibilityChange('connections')}
            >
              <View style={[
                styles.radioButton,
                privacySettings.profileVisibility === 'connections' && styles.radioButtonSelected
              ]}>
                {privacySettings.profileVisibility === 'connections' && (
                  <View style={styles.radioButtonInner} />
                )}
              </View>
              <View style={styles.radioContent}>
                <Text style={styles.radioTitle}>Connections Only</Text>
                <Text style={styles.radioDescription}>
                  Your profile is only visible to your connections
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Show Email Address</Text>
              <Text style={styles.settingDescription}>
                Allow others to see your email address on your profile
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                privacySettings.showEmail && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('showEmail')}
            >
              <View style={[
                styles.toggleCircle,
                privacySettings.showEmail && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Show Phone Number</Text>
              <Text style={styles.settingDescription}>
                Allow others to see your phone number on your profile
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                privacySettings.showPhone && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('showPhone')}
            >
              <View style={[
                styles.toggleCircle,
                privacySettings.showPhone && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Communication</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Allow Messaging</Text>
              <Text style={styles.settingDescription}>
                Allow others to send you direct messages
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                privacySettings.allowMessaging && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('allowMessaging')}
            >
              <View style={[
                styles.toggleCircle,
                privacySettings.allowMessaging && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Allow Connection Requests</Text>
              <Text style={styles.settingDescription}>
                Allow others to send you connection requests
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                privacySettings.allowConnectionRequests && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('allowConnectionRequests')}
            >
              <View style={[
                styles.toggleCircle,
                privacySettings.allowConnectionRequests && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <TouchableOpacity style={styles.dataButton}>
            <Text style={styles.dataButtonText}>Download My Data</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete My Account</Text>
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
  radioGroup: {
    marginBottom: 8,
  },
  radioOption: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0D0166',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  radioButtonSelected: {
    borderColor: '#0D0166',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0D0166',
  },
  radioContent: {
    flex: 1,
  },
  radioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  radioDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  toggleButton: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    padding: 2,
  },
  toggleButtonActive: {
    backgroundColor: '#0D0166',
  },
  toggleCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
  },
  toggleCircleActive: {
    alignSelf: 'flex-end',
  },
  dataButton: {
    backgroundColor: '#F0F5FF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  dataButtonText: {
    color: '#0D0166',
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FFF0F0',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#D32F2F',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
