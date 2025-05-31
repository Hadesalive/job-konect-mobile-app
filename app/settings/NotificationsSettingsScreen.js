import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Notifications Settings screen
export default function NotificationsSettingsScreen({ navigation }) {
  const [notificationSettings, setNotificationSettings] = useState({
    jobAlerts: true,
    messages: true,
    applicationUpdates: true,
    networkActivity: false,
    marketingEmails: false
  });

  const toggleSetting = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting]
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
        <Text style={styles.headerTitle}>Notification Settings</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Push Notifications</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Job Alerts</Text>
              <Text style={styles.settingDescription}>
                Receive notifications about new job opportunities matching your preferences
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                notificationSettings.jobAlerts && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('jobAlerts')}
            >
              <View style={[
                styles.toggleCircle,
                notificationSettings.jobAlerts && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Messages</Text>
              <Text style={styles.settingDescription}>
                Receive notifications when you get new messages
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                notificationSettings.messages && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('messages')}
            >
              <View style={[
                styles.toggleCircle,
                notificationSettings.messages && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Application Updates</Text>
              <Text style={styles.settingDescription}>
                Receive notifications about your job application status
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                notificationSettings.applicationUpdates && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('applicationUpdates')}
            >
              <View style={[
                styles.toggleCircle,
                notificationSettings.applicationUpdates && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Network Activity</Text>
              <Text style={styles.settingDescription}>
                Receive notifications about new connections and network activity
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                notificationSettings.networkActivity && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('networkActivity')}
            >
              <View style={[
                styles.toggleCircle,
                notificationSettings.networkActivity && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Email Notifications</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Marketing Emails</Text>
              <Text style={styles.settingDescription}>
                Receive promotional emails and newsletters
              </Text>
            </View>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                notificationSettings.marketingEmails && styles.toggleButtonActive
              ]}
              onPress={() => toggleSetting('marketingEmails')}
            >
              <View style={[
                styles.toggleCircle,
                notificationSettings.marketingEmails && styles.toggleCircleActive
              ]} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <TouchableOpacity style={styles.unsubscribeButton}>
            <Text style={styles.unsubscribeButtonText}>Unsubscribe from all emails</Text>
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
  unsubscribeButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  unsubscribeButtonText: {
    color: '#D32F2F',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
