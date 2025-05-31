import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// New Message screen
export default function NewMessageScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample contacts data
  const contactsData = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'UX Designer at Google',
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '2',
      name: 'John Smith',
      title: 'Senior Developer at Microsoft',
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '3',
      name: 'Emily Davis',
      title: 'Product Manager at Apple',
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '4',
      name: 'Michael Brown',
      title: 'Frontend Developer at Amazon',
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '5',
      name: 'Jessica Wilson',
      title: 'Data Scientist at Netflix',
      avatar: require('../../assets/images/avatar.webp')
    },
  ];

  const filteredContacts = searchQuery
    ? contactsData.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : contactsData;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#0D0166" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Message</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search connections..."
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
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Connections</Text>
        
        {filteredContacts.map(contact => (
          <TouchableOpacity 
            key={contact.id}
            style={styles.contactItem}
            onPress={() => navigation.navigate('Chat', { userId: contact.id, name: contact.name })}
          >
            <Image source={contact.avatar} style={styles.contactAvatar} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.contactTitle}>{contact.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
        
        {filteredContacts.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No contacts found matching "{searchQuery}"</Text>
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
  placeholderView: {
    width: 40,
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
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  contactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: '#E1E1E1',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  contactTitle: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});
