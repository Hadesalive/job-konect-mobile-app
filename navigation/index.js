import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Auth Screens
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import UpdatePasswordScreen from '../screens/auth/UpdatePasswordScreen';

// Onboarding Screens
import OnboardingWelcomeScreen from '../screens/onboarding/OnboardingWelcomeScreen';
import OnboardingSignUpScreen from '../screens/onboarding/OnboardingSignUpScreen';
import OnboardingProfileScreen from '../screens/onboarding/OnboardingProfileScreen';
import OnboardingInterestsScreen from '../screens/onboarding/OnboardingInterestsScreen';
import OnboardingAddSkillsScreen from '../screens/onboarding/OnboardingAddSkillsScreen';
import OnboardingAddExperienceScreen from '../screens/onboarding/OnboardingAddExperienceScreen';
import OnboardingAddEducationScreen from '../screens/onboarding/OnboardingAddEducationScreen';

// Main Screens
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import FilterScreen from '../screens/search/FilterScreen';
import JobsScreen from '../screens/jobs/JobsScreen';
import JobDetailsScreen from '../screens/jobs/JobDetailsScreen';
import JobApplicationScreen from '../screens/jobs/JobApplicationScreen';
import ApplicationSubmittedScreen from '../screens/jobs/ApplicationSubmittedScreen';
import ApplicationStatusScreen from '../screens/jobs/ApplicationStatusScreen';
import WithdrawApplicationScreen from '../screens/jobs/WithdrawApplicationScreen';
import CreateJobPostScreen from '../screens/jobs/CreateJobPostScreen';
import MessagesScreen from '../screens/messaging/MessagesScreen';
import ChatScreen from '../screens/messaging/ChatScreen';
import NoMessageScreen from '../screens/messaging/NoMessageScreen';
import NewMessageScreen from '../screens/messaging/NewMessageScreen';
import NotificationsScreen from '../screens/notifications/NotificationsScreen';
import NoNotificationsScreen from '../screens/notifications/NoNotificationsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import AboutMeScreen from '../screens/profile/AboutMeScreen';
import AddWorkExperienceScreen from '../screens/profile/AddWorkExperienceScreen';

// Company Screens
import CompanyProfileScreen from '../screens/company/CompanyProfileScreen';
import CompanyJobsScreen from '../screens/company/CompanyJobsScreen';

// Settings Screens
import SettingsScreen from '../screens/settings/SettingsScreen';
import LogOutScreen from '../screens/settings/LogOutScreen';
import NotificationsSettingsScreen from '../screens/settings/NotificationsSettingsScreen';
import PrivacySettingsScreen from '../screens/settings/PrivacySettingsScreen';
import AccountSettingsScreen from '../screens/settings/AccountSettingsScreen';
import ChangePasswordScreen from '../screens/settings/ChangePasswordScreen';
import DeactivateAccountScreen from '../screens/settings/DeactivateAccountScreen';
import LanguageSettingsScreen from '../screens/settings/LanguageSettingsScreen';
import TimezoneSettingsScreen from '../screens/settings/TimezoneSettingsScreen';

// Create the stack navigators
const AuthStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const JobsStack = createNativeStackNavigator();
const MessagesStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

// Auth Navigator
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <AuthStack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
    </AuthStack.Navigator>
  );
};

// Onboarding Navigator
const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnboardingStack.Screen name="OnboardingWelcome" component={OnboardingWelcomeScreen} />
      <OnboardingStack.Screen name="OnboardingSignUp" component={OnboardingSignUpScreen} />
      <OnboardingStack.Screen name="OnboardingProfile" component={OnboardingProfileScreen} />
      <OnboardingStack.Screen name="OnboardingInterests" component={OnboardingInterestsScreen} />
      <OnboardingStack.Screen name="OnboardingAddSkills" component={OnboardingAddSkillsScreen} />
      <OnboardingStack.Screen name="OnboardingAddExperience" component={OnboardingAddExperienceScreen} />
      <OnboardingStack.Screen name="OnboardingAddEducation" component={OnboardingAddEducationScreen} />
    </OnboardingStack.Navigator>
  );
};

// Home Stack Navigator
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="JobDetails" component={JobDetailsScreen} />
      <HomeStack.Screen name="CompanyProfile" component={CompanyProfileScreen} />
      <HomeStack.Screen name="CompanyJobs" component={CompanyJobsScreen} />
      <HomeStack.Screen name="Notifications" component={NotificationsScreen} />
      <HomeStack.Screen name="NoNotifications" component={NoNotificationsScreen} />
    </HomeStack.Navigator>
  );
};

// Search Stack Navigator
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
      <SearchStack.Screen name="Filter" component={FilterScreen} />
      <SearchStack.Screen name="JobDetails" component={JobDetailsScreen} />
      <SearchStack.Screen name="CompanyProfile" component={CompanyProfileScreen} />
      <SearchStack.Screen name="CompanyJobs" component={CompanyJobsScreen} />
    </SearchStack.Navigator>
  );
};

// Jobs Stack Navigator
const JobsStackNavigator = () => {
  return (
    <JobsStack.Navigator screenOptions={{ headerShown: false }}>
      <JobsStack.Screen name="JobsScreen" component={JobsScreen} />
      <JobsStack.Screen name="JobDetails" component={JobDetailsScreen} />
      <JobsStack.Screen name="JobApplication" component={JobApplicationScreen} />
      <JobsStack.Screen name="ApplicationSubmitted" component={ApplicationSubmittedScreen} />
      <JobsStack.Screen name="ApplicationStatus" component={ApplicationStatusScreen} />
      <JobsStack.Screen name="WithdrawApplication" component={WithdrawApplicationScreen} />
      <JobsStack.Screen name="CreateJobPost" component={CreateJobPostScreen} />
      <JobsStack.Screen name="CompanyProfile" component={CompanyProfileScreen} />
      <JobsStack.Screen name="CompanyJobs" component={CompanyJobsScreen} />
    </JobsStack.Navigator>
  );
};

// Messages Stack Navigator
const MessagesStackNavigator = () => {
  return (
    <MessagesStack.Navigator screenOptions={{ headerShown: false }}>
      <MessagesStack.Screen name="MessagesScreen" component={MessagesScreen} />
      <MessagesStack.Screen name="NoMessage" component={NoMessageScreen} />
      <MessagesStack.Screen name="Chat" component={ChatScreen} />
      <MessagesStack.Screen name="NewMessage" component={NewMessageScreen} />
    </MessagesStack.Navigator>
  );
};

// Profile Stack Navigator
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
      <ProfileStack.Screen name="AboutMe" component={AboutMeScreen} />
      <ProfileStack.Screen name="AddWorkExperience" component={AddWorkExperienceScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
      <ProfileStack.Screen name="LogOut" component={LogOutScreen} />
      <ProfileStack.Screen name="NotificationsSettings" component={NotificationsSettingsScreen} />
      <ProfileStack.Screen name="PrivacySettings" component={PrivacySettingsScreen} />
      <ProfileStack.Screen name="AccountSettings" component={AccountSettingsScreen} />
      <ProfileStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <ProfileStack.Screen name="DeactivateAccount" component={DeactivateAccountScreen} />
      <ProfileStack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />
      <ProfileStack.Screen name="TimezoneSettings" component={TimezoneSettingsScreen} />
    </ProfileStack.Navigator>
  );
};

// Main Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Jobs') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0D0166',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Jobs" component={JobsStackNavigator} />
      <Tab.Screen name="Messages" component={MessagesStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

// Main App Navigator
const AppNavigator = () => {
  // This would be determined by authentication state in a real app
  const isAuthenticated = false;
  const isOnboarding = false;

  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        isOnboarding ? (
          <OnboardingNavigator />
        ) : (
          <AuthNavigator />
        )
      ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
