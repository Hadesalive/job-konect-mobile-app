import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Onboarding Welcome screen
export default function OnboardingWelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/images/avatar.webp')}
          style={styles.logo}
        />
        
        <Text style={styles.title}>Welcome to Job Konect</Text>
        <Text style={styles.subtitle}>Find your dream job and connect with professionals</Text>
        
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="briefcase-outline" size={24} color="#0D0166" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Find Jobs</Text>
              <Text style={styles.featureDescription}>
                Discover thousands of job opportunities tailored to your skills and preferences
              </Text>
            </View>
          </View>
          
          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="people-outline" size={24} color="#0D0166" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Connect</Text>
              <Text style={styles.featureDescription}>
                Build your professional network and connect with industry leaders
              </Text>
            </View>
          </View>
          
          <View style={styles.featureItem}>
            <View style={styles.featureIconContainer}>
              <Ionicons name="chatbubbles-outline" size={24} color="#0D0166" />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Communicate</Text>
              <Text style={styles.featureDescription}>
                Message directly with recruiters and potential employers
              </Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('OnboardingSignUp')}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Already have an account? Log In</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
    backgroundColor: '#E1E1E1',
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  featuresContainer: {
    width: '100%',
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8EFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0166',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    padding: 24,
  },
  getStartedButton: {
    backgroundColor: '#0D0166',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#0D0166',
    fontSize: 14,
  },
});
