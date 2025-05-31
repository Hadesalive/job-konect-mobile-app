import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Onboarding Add Skills screen
export default function OnboardingAddSkillsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  // Sample skills data
  const skillsData = [
    { id: '1', name: 'React Native' },
    { id: '2', name: 'JavaScript' },
    { id: '3', name: 'TypeScript' },
    { id: '4', name: 'Redux' },
    { id: '5', name: 'React Navigation' },
    { id: '6', name: 'CSS' },
    { id: '7', name: 'HTML' },
    { id: '8', name: 'Node.js' },
    { id: '9', name: 'Express' },
    { id: '10', name: 'MongoDB' },
    { id: '11', name: 'SQL' },
    { id: '12', name: 'Git' },
    { id: '13', name: 'RESTful APIs' },
    { id: '14', name: 'GraphQL' },
    { id: '15', name: 'Firebase' },
  ];

  const filteredSkills = searchQuery
    ? skillsData.filter(skill => 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : skillsData;

  const toggleSkill = (id) => {
    if (selectedSkills.includes(id)) {
      setSelectedSkills(selectedSkills.filter(item => item !== id));
    } else {
      setSelectedSkills([...selectedSkills, id]);
    }
  };

  const handleSave = () => {
    // In a real app, you would save the selected skills here
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
        <Text style={styles.headerTitle}>Add Skills</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search skills..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery ? (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      
      {selectedSkills.length > 0 && (
        <View style={styles.selectedContainer}>
          <Text style={styles.selectedTitle}>Selected Skills</Text>
          <View style={styles.selectedSkillsContainer}>
            {selectedSkills.map(id => {
              const skill = skillsData.find(s => s.id === id);
              return (
                <View key={id} style={styles.selectedSkillItem}>
                  <Text style={styles.selectedSkillText}>{skill.name}</Text>
                  <TouchableOpacity onPress={() => toggleSkill(id)}>
                    <Ionicons name="close" size={16} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      )}
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Popular Skills</Text>
        
        {filteredSkills.map(skill => (
          <TouchableOpacity 
            key={skill.id}
            style={styles.skillItem}
            onPress={() => toggleSkill(skill.id)}
          >
            <Text style={styles.skillName}>{skill.name}</Text>
            <View style={[
              styles.checkbox,
              selectedSkills.includes(skill.id) && styles.checkboxSelected
            ]}>
              {selectedSkills.includes(skill.id) && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </View>
          </TouchableOpacity>
        ))}
        
        {filteredSkills.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No skills found matching "{searchQuery}"</Text>
            <TouchableOpacity style={styles.addCustomButton}>
              <Text style={styles.addCustomButtonText}>Add "{searchQuery}" as a skill</Text>
            </TouchableOpacity>
          </View>
        )}
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
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  selectedContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  selectedTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 12,
  },
  selectedSkillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedSkillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D0166',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedSkillText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 8,
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  skillName: {
    fontSize: 16,
    color: '#333',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#0D0166',
    borderColor: '#0D0166',
  },
  emptyContainer: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 16,
  },
  addCustomButton: {
    backgroundColor: '#F0F5FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  addCustomButtonText: {
    color: '#0D0166',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
