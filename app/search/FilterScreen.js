import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Filter screen (ID: 1:1027)
export default function FilterScreen({ navigation }) {
  const [filters, setFilters] = useState({
    jobType: [],
    location: [],
    experience: [],
    salary: null,
    datePosted: null,
  });

  // Sample data for filter options
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];
  const locations = ['New York', 'San Francisco', 'London', 'Remote', 'Worldwide'];
  const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Director', 'Executive'];
  const salaryRanges = ['$0 - $50k', '$50k - $100k', '$100k - $150k', '$150k+'];
  const datePostedOptions = ['Past 24 hours', 'Past week', 'Past month', 'Any time'];

  const toggleJobType = (type) => {
    if (filters.jobType.includes(type)) {
      setFilters({
        ...filters,
        jobType: filters.jobType.filter(item => item !== type)
      });
    } else {
      setFilters({
        ...filters,
        jobType: [...filters.jobType, type]
      });
    }
  };

  const toggleLocation = (location) => {
    if (filters.location.includes(location)) {
      setFilters({
        ...filters,
        location: filters.location.filter(item => item !== location)
      });
    } else {
      setFilters({
        ...filters,
        location: [...filters.location, location]
      });
    }
  };

  const toggleExperience = (level) => {
    if (filters.experience.includes(level)) {
      setFilters({
        ...filters,
        experience: filters.experience.filter(item => item !== level)
      });
    } else {
      setFilters({
        ...filters,
        experience: [...filters.experience, level]
      });
    }
  };

  const setSalary = (range) => {
    setFilters({
      ...filters,
      salary: filters.salary === range ? null : range
    });
  };

  const setDatePosted = (option) => {
    setFilters({
      ...filters,
      datePosted: filters.datePosted === option ? null : option
    });
  };

  const resetFilters = () => {
    setFilters({
      jobType: [],
      location: [],
      experience: [],
      salary: null,
      datePosted: null,
    });
  };

  const applyFilters = () => {
    // In a real app, you would pass the filters back to the search screen
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
        <Text style={styles.headerTitle}>Filter</Text>
        <TouchableOpacity 
          style={styles.resetButton}
          onPress={resetFilters}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Job Type</Text>
          <View style={styles.optionsContainer}>
            {jobTypes.map((type, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.optionButton,
                  filters.jobType.includes(type) && styles.selectedOption
                ]}
                onPress={() => toggleJobType(type)}
              >
                <Text style={[
                  styles.optionText,
                  filters.jobType.includes(type) && styles.selectedOptionText
                ]}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.optionsContainer}>
            {locations.map((location, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.optionButton,
                  filters.location.includes(location) && styles.selectedOption
                ]}
                onPress={() => toggleLocation(location)}
              >
                <Text style={[
                  styles.optionText,
                  filters.location.includes(location) && styles.selectedOptionText
                ]}>
                  {location}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Experience Level</Text>
          <View style={styles.optionsContainer}>
            {experienceLevels.map((level, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.optionButton,
                  filters.experience.includes(level) && styles.selectedOption
                ]}
                onPress={() => toggleExperience(level)}
              >
                <Text style={[
                  styles.optionText,
                  filters.experience.includes(level) && styles.selectedOptionText
                ]}>
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Salary Range</Text>
          <View style={styles.optionsContainer}>
            {salaryRanges.map((range, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.optionButton,
                  filters.salary === range && styles.selectedOption
                ]}
                onPress={() => setSalary(range)}
              >
                <Text style={[
                  styles.optionText,
                  filters.salary === range && styles.selectedOptionText
                ]}>
                  {range}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.filterSection}>
          <Text style={styles.sectionTitle}>Date Posted</Text>
          <View style={styles.optionsContainer}>
            {datePostedOptions.map((option, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.optionButton,
                  filters.datePosted === option && styles.selectedOption
                ]}
                onPress={() => setDatePosted(option)}
              >
                <Text style={[
                  styles.optionText,
                  filters.datePosted === option && styles.selectedOptionText
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.applyButton}
          onPress={applyFilters}
        >
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
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
  resetButton: {
    padding: 8,
  },
  resetButtonText: {
    color: '#0D0166',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  filterSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#0D0166',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  applyButton: {
    backgroundColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
