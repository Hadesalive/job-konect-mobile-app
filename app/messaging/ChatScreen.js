import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Chat screen (ID: 1:2802)
export default function ChatScreen({ navigation, route }) {
  const { userId, name } = route.params;
  const [message, setMessage] = useState('');
  
  // Sample data for chat messages
  const chatData = [
    {
      id: '1',
      text: 'Hi there! I saw your profile and wanted to connect about the UX Designer position.',
      time: '10:30 AM',
      sender: 'other',
    },
    {
      id: '2',
      text: 'Hello! Thanks for reaching out. Id be happy to discuss the position.',
      time: '10:32 AM',
      sender: 'me',
    },
    {
      id: '3',
      text: 'Great! Are you available for a quick call tomorrow to discuss the details?',
      time: '10:35 AM',
      sender: 'other',
    },
    {
      id: '4',
      text: 'Yes, Im available tomorrow afternoon. What time works for you?',
      time: '10:38 AM',
      sender: 'me',
    },
    {
      id: '5',
      text: 'How about 2 PM? I can send you a calendar invite with the meeting details.',
      time: '10:40 AM',
      sender: 'other',
    },
  ];

  const renderChatItem = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'me' ? styles.myMessageContainer : styles.otherMessageContainer
    ]}>
      <View style={[
        styles.messageBubble,
        item.sender === 'me' ? styles.myMessageBubble : styles.otherMessageBubble
      ]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#0D0166" />
        </TouchableOpacity>
        <View style={styles.headerProfile}>
          <Image 
            source={require('../../assets/images/avatar.webp')} 
            style={styles.avatar} 
          />
          <Text style={styles.headerName}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="#0D0166" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatContainer}
        inverted={false}
      />
      
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <Ionicons name="attach" size={24} color="#666" />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
            multiline
          />
        </View>
        <TouchableOpacity 
          style={[styles.sendButton, !message && styles.disabledSendButton]}
          disabled={!message}
        >
          <Ionicons 
            name="send" 
            size={24} 
            color={message ? "#0D0166" : "#CCC"} 
          />
        </TouchableOpacity>
      </View>
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
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#E1E1E1',
  },
  headerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  moreButton: {
    padding: 8,
  },
  chatContainer: {
    padding: 16,
    flexGrow: 1,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '80%',
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    borderRadius: 16,
    padding: 12,
  },
  myMessageBubble: {
    backgroundColor: '#0D0166',
  },
  otherMessageBubble: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  messageText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  otherMessageText: {
    color: '#333',
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  attachButton: {
    padding: 8,
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  textInput: {
    fontSize: 14,
    maxHeight: 100,
    minHeight: 40,
    paddingVertical: 8,
  },
  sendButton: {
    padding: 8,
  },
  disabledSendButton: {
    opacity: 0.5,
  },
});
