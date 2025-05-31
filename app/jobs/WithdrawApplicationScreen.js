import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Withdraw Application screen
export default function WithdrawApplicationScreen({ navigation }) {
  const handleWithdraw = () => {
    // In a real app, you would handle the withdrawal logic here
    navigation.navigate('Jobs');
  };

  const handleCancel = () => {
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
        <Text style={styles.headerTitle}>Withdraw Application</Text>
        <View style={styles.placeholderView} />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="alert-circle-outline" size={64} color="#D32F2F" />
        </View>
        
        <Text style={styles.title}>Withdraw Application?</Text>
        <Text style={styles.message}>
          Are you sure you want to withdraw your application for Senior React Native Developer at Microsoft? This action cannot be undone.
        </Text>
        
        <View style={styles.reasonContainer}>
          <Text style={styles.reasonTitle}>Please select a reason (optional):</Text>
          
          <TouchableOpacity style={styles.reasonOption}>
            <Text style={styles.reasonText}>I found another job</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.reasonOption}>
            <Text style={styles.reasonText}>The position is not a good fit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.reasonOption}>
            <Text style={styles.reasonText}>I'm no longer interested</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.reasonOption}>
            <Text style={styles.reasonText}>Other reason</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={styles.withdrawButton}
          onPress={handleWithdraw}
        >
          <Text style={styles.withdrawButtonText}>Withdraw Application</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={handleCancel}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
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
  placeholderView: {
    width: 40,
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  reasonContainer: {
    marginBottom: 32,
  },
  reasonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  reasonOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  reasonText: {
    fontSize: 16,
    color: '#333',
  },
  withdrawButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  withdrawButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
