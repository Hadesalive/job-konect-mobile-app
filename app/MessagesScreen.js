import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MessagesScreen({ navigation }) {
  // Sample data for messages
  const messagesData = [
    {
      id: '1',
      name: 'Sarah Johnson',
      message: 'Hi there! I saw your profile and wanted to connect about the UX Designer position.',
      time: '10:30 AM',
      unread: true,
      avatar: require('../assets/images/avatar.webp')
    },
    {
      id: '2',
      name: 'John Smith',
      message: 'Thanks for your application. When would you be available for an interview?',
      time: 'Yesterday',
      unread: false,
      avatar: require('../assets/images/avatar.webp')
    },
    {
      id: '3',
      name: 'Emily Davis',
      message: 'I just shared a new job opportunity that might interest you.',
      time: 'May 25',
      unread: false,
      avatar: require('../assets/images/avatar.webp')
    },
  ];

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.messageCard}
      onPress={() => navigation.navigate('Chat', { userId: item.id, name: item.name })}
    >
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.messageName}>{item.name}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
        <Text 
          style={[styles.messageText, item.unread && styles.unreadMessage]}
          numberOfLines={1}
        >
          {item.message}
        </Text>
      </View>
      {item.unread && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="#0D0166" />
        </TouchableOpacity>
      </View>
      
      {messagesData.length > 0 ? (
        <FlatList
          data={messagesData}
          renderItem={renderMessageItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.messagesContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="chatbubble-ellipses-outline" size={64} color="#CCCCCC" />
          <Text style={styles.emptyTitle}>No Messages</Text>
          <Text style={styles.emptyText}>Connect with people to start conversations</Text>
        </View>
      )}
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
  messagesContainer: {
    padding: 16,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  messageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
  },
  messageText: {
    fontSize: 14,
    color: '#666',
  },
  unreadMessage: {
    color: '#333',
    fontWeight: '500',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0D0166',
    marginLeft: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
