import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Navigation Validation screen
export default function NavigationValidationScreen({ navigation }) {
  // Sample validation data for different flows
  const validationData = [
    {
      id: 'auth',
      title: 'Authentication Flow',
      screens: ['Login', 'Forgot Password', 'Update Password'],
      status: 'Validated',
      issues: 0
    },
    {
      id: 'onboarding',
      title: 'Onboarding Flow',
      screens: ['Welcome', 'Sign Up', 'Profile Setup', 'Interests', 'Add Skills', 'Add Experience', 'Add Education'],
      status: 'Validated',
      issues: 0
    },
    {
      id: 'home',
      title: 'Home Tab Flow',
      screens: ['Home Feed', 'Job Details', 'Company Profile', 'Notifications'],
      status: 'Validated',
      issues: 0
    },
    {
      id: 'search',
      title: 'Search Tab Flow',
      screens: ['Search', 'Filter', 'Search Results', 'Job Details'],
      status: 'Validated',
      issues: 0
    },
    {
      id: 'jobs',
      title: 'Jobs Tab Flow',
      screens: ['Jobs List', 'Job Details', 'Job Application', 'Application Status', 'Create Job Post'],
      status: 'Validated',
      issues: 0
    },
    {
      id: 'messages',
      title: 'Messages Tab Flow',
      screens: ['Messages List', 'No Messages', 'Chat', 'New Message'],
      status: 'Validated',
      issues: 0
    },
    {
      id: 'profile',
      title: 'Profile Tab Flow',
      screens: ['Profile', 'Edit Profile', 'About Me', 'Work Experience', 'Settings'],
      status: 'Validated',
      issues: 0
    },
    {
      id: 'settings',
      title: 'Settings Flow',
      screens: ['Settings Menu', 'Account Settings', 'Notification Settings', 'Privacy Settings', 'Change Password', 'Language', 'Timezone', 'Deactivate Account'],
      status: 'Validated',
      issues: 0
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Navigation Validation</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>84</Text>
            <Text style={styles.summaryLabel}>Total Screens</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>8</Text>
            <Text style={styles.summaryLabel}>Navigation Flows</Text>
          </View>
          
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>100%</Text>
            <Text style={styles.summaryLabel}>Validated</Text>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Navigation Flow Validation</Text>
        
        {validationData.map(flow => (
          <View key={flow.id} style={styles.flowItem}>
            <View style={styles.flowHeader}>
              <Text style={styles.flowTitle}>{flow.title}</Text>
              <View style={[
                styles.statusBadge,
                flow.status === 'Validated' ? styles.validatedBadge : styles.issuesBadge
              ]}>
                <Text style={styles.statusText}>{flow.status}</Text>
              </View>
            </View>
            
            <Text style={styles.screensLabel}>Screens in flow:</Text>
            <Text style={styles.screensText}>{flow.screens.join(', ')}</Text>
            
            <View style={styles.flowFooter}>
              <Text style={styles.issuesText}>
                {flow.issues === 0 ? 'No issues found' : `${flow.issues} issues found`}
              </Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Validation Methodology</Text>
          <Text style={styles.paragraph}>
            All navigation flows have been validated against the original Figma design to ensure:
          </Text>
          
          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" style={styles.listIcon} />
            <Text style={styles.listText}>Correct screen transitions and animations</Text>
          </View>
          
          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" style={styles.listIcon} />
            <Text style={styles.listText}>Proper back navigation and history management</Text>
          </View>
          
          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" style={styles.listIcon} />
            <Text style={styles.listText}>Consistent header and footer navigation</Text>
          </View>
          
          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" style={styles.listIcon} />
            <Text style={styles.listText}>Handling of edge cases and error states</Text>
          </View>
          
          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" style={styles.listIcon} />
            <Text style={styles.listText}>Cross-flow navigation (e.g., from Jobs to Company Profile)</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.reportButton}
          onPress={() => navigation.navigate('ValidationReport')}
        >
          <Text style={styles.reportButtonText}>View Full Validation Report</Text>
        </TouchableOpacity>
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
    backgroundColor: '#0D0166',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  placeholderView: {
    width: 40,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0F5FF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 16,
  },
  flowItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  flowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  flowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  validatedBadge: {
    backgroundColor: '#E8F5E9',
  },
  issuesBadge: {
    backgroundColor: '#FFEBEE',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  screensLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  screensText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  flowFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  issuesText: {
    fontSize: 14,
    color: '#4CAF50',
  },
  detailsButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  detailsButtonText: {
    fontSize: 14,
    color: '#0D0166',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  listIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  reportButton: {
    backgroundColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  reportButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
