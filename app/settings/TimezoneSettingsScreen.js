import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Timezone Settings screen
export default function TimezoneSettingsScreen({ navigation }) {
  const [selectedTimezone, setSelectedTimezone] = useState('utc-5');
  
  // Sample timezones data
  const timezonesData = [
    { id: 'utc-12', name: 'UTC-12:00 (Baker Island)', region: 'Pacific' },
    { id: 'utc-11', name: 'UTC-11:00 (American Samoa)', region: 'Pacific' },
    { id: 'utc-10', name: 'UTC-10:00 (Hawaii)', region: 'Pacific' },
    { id: 'utc-9', name: 'UTC-09:00 (Alaska)', region: 'North America' },
    { id: 'utc-8', name: 'UTC-08:00 (Pacific Time)', region: 'North America' },
    { id: 'utc-7', name: 'UTC-07:00 (Mountain Time)', region: 'North America' },
    { id: 'utc-6', name: 'UTC-06:00 (Central Time)', region: 'North America' },
    { id: 'utc-5', name: 'UTC-05:00 (Eastern Time)', region: 'North America' },
    { id: 'utc-4', name: 'UTC-04:00 (Atlantic Time)', region: 'North America' },
    { id: 'utc-3', name: 'UTC-03:00 (Buenos Aires)', region: 'South America' },
    { id: 'utc-2', name: 'UTC-02:00 (Mid-Atlantic)', region: 'Atlantic' },
    { id: 'utc-1', name: 'UTC-01:00 (Azores)', region: 'Europe' },
    { id: 'utc+0', name: 'UTC+00:00 (London, Dublin)', region: 'Europe' },
    { id: 'utc+1', name: 'UTC+01:00 (Paris, Berlin)', region: 'Europe' },
    { id: 'utc+2', name: 'UTC+02:00 (Athens, Cairo)', region: 'Europe/Africa' },
    { id: 'utc+3', name: 'UTC+03:00 (Moscow, Istanbul)', region: 'Europe/Asia' },
    { id: 'utc+4', name: 'UTC+04:00 (Dubai, Baku)', region: 'Asia' },
    { id: 'utc+5', name: 'UTC+05:00 (Karachi, Islamabad)', region: 'Asia' },
    { id: 'utc+5.5', name: 'UTC+05:30 (New Delhi, Mumbai)', region: 'Asia' },
    { id: 'utc+6', name: 'UTC+06:00 (Dhaka)', region: 'Asia' },
    { id: 'utc+7', name: 'UTC+07:00 (Bangkok, Jakarta)', region: 'Asia' },
    { id: 'utc+8', name: 'UTC+08:00 (Singapore, Beijing)', region: 'Asia' },
    { id: 'utc+9', name: 'UTC+09:00 (Tokyo, Seoul)', region: 'Asia' },
    { id: 'utc+10', name: 'UTC+10:00 (Sydney, Melbourne)', region: 'Australia' },
    { id: 'utc+11', name: 'UTC+11:00 (Solomon Islands)', region: 'Pacific' },
    { id: 'utc+12', name: 'UTC+12:00 (Auckland, Fiji)', region: 'Pacific' },
  ];

  const handleSave = () => {
    // In a real app, you would save the timezone setting here
    navigation.goBack();
  };

  // Group timezones by region
  const groupedTimezones = timezonesData.reduce((acc, timezone) => {
    if (!acc[timezone.region]) {
      acc[timezone.region] = [];
    }
    acc[timezone.region].push(timezone);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#0D0166" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Timezone</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subtitle}>
          Select your timezone to ensure job postings and notifications are displayed in your local time
        </Text>
        
        {Object.keys(groupedTimezones).map(region => (
          <View key={region} style={styles.regionSection}>
            <Text style={styles.regionTitle}>{region}</Text>
            
            {groupedTimezones[region].map(timezone => (
              <TouchableOpacity 
                key={timezone.id}
                style={styles.timezoneItem}
                onPress={() => setSelectedTimezone(timezone.id)}
              >
                <Text style={styles.timezoneName}>{timezone.name}</Text>
                {selectedTimezone === timezone.id && (
                  <Ionicons name="checkmark" size={20} color="#0D0166" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
  saveButton: {
    padding: 8,
  },
  saveButtonText: {
    color: '#0D0166',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  regionSection: {
    marginBottom: 20,
  },
  regionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 12,
  },
  timezoneItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  timezoneName: {
    fontSize: 14,
    color: '#333',
  },
});
