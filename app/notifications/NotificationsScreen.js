import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Notifications screen (ID: 1:3168)
export default function NotificationsScreen({ navigation }) {
  // Sample data for notifications
  const notificationsData = [
    {
      id: '1',
      type: 'connection',
      title: 'Sarah Johnson accepted your connection request',
      time: '2 hours ago',
      read: false,
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '2',
      type: 'job',
      title: 'New job matching your profile: UX Designer at Google',
      time: '1 day ago',
      read: true,
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '3',
      type: 'message',
      title: 'John Smith sent you a message',
      time: '2 days ago',
      read: true,
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '4',
      type: 'application',
      title: 'Your application for iOS Developer at Apple has been viewed',
      time: '3 days ago',
      read: true,
      avatar: require('../../assets/images/avatar.webp')
    },
    {
      id: '5',
      type: 'post',
      title: 'Emily Davis liked your post',
      time: '5 days ago',
      read: true,
      avatar: require('../../assets/images/avatar.webp')
    },
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'connection':
        return <Ionicons name="people" size={20} color="#0D0166" />;
      case 'job':
        return <Ionicons name="briefcase" size={20} color="#0D0166" />;
      case 'message':
        return <Ionicons name="chatbubble" size={20} color="#0D0166" />;
      case 'application':
        return <Ionicons name="document-text" size={20} color="#0D0166" />;
      case 'post':
        return <Ionicons name="heart" size={20} color="#0D0166" />;
      default:
        return <Ionicons name="notifications" size={20} color="#0D0166" />;
    }
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.notificationCard, !item.read && styles.unreadCard]}
      onPress={() => {
        // Handle navigation based on notification type
        switch (item.type) {
          case 'connection':
            navigation.navigate('UserProfile', { userId: item.id });
            break;
          case 'job':
            navigation.navigate('JobDetails', { jobId: item.id });
            break;
          case 'message':
            navigation.navigate('Chat', { userId: item.id });
            break;
          case 'application':
            navigation.navigate('JobApplication', { applicationId: item.id });
            break;
          case 'post':
            navigation.navigate('Post', { postId: item.id });
            break;
          default:
            break;
        }
      }}
    >
      <View style={styles.notificationIcon}>
        {getNotificationIcon(item.type)}
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      {!item.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
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
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <FlatList
        data={notificationsData}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.notificationsContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="notifications-outline" size={64} color="#CCCCCC" />
            <Text style={styles.emptyTitle}>No Notifications</Text>
            <Text style={styles.emptyText}>You don't have any notifications yet</Text>
          </View>
        }
      />
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
  },
  placeholderView: {
    width: 40,
  },
  notificationsContainer: {
    padding: 16,
    flexGrow: 1,
  },
  notificationCard: {
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
  unreadCard: {
    backgroundColor: '#F0F5FF',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8EFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
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
    marginTop: 80,
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
