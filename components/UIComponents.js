import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Helper component to use actual icons from Figma instead of placeholders
const FigmaIcon = ({ name, size = 24, color = "#0D0166", style = {} }) => {
  // Map common icon names to our downloaded Figma icons
  const iconMap = {
    // Navigation icons
    'home': require('../assets/icons/icon.png'),
    'home-outline': require('../assets/icons/icon.png'),
    'search': require('../assets/icons/icon_search.png'),
    'search-outline': require('../assets/icons/icon_search.png'),
    'briefcase': require('../assets/icons/icon_work_experience.png'),
    'briefcase-outline': require('../assets/icons/icon_work_experience.png'),
    'chatbubbles': require('../assets/icons/icon.png'),
    'chatbubbles-outline': require('../assets/icons/icon.png'),
    'person': require('../assets/icons/icon.png'),
    'person-outline': require('../assets/icons/icon.png'),
    
    // Action icons
    'arrow-back': require('../assets/icons/icon.png'),
    'checkmark': require('../assets/icons/icon.png'),
    'add': require('../assets/icons/icon_add.png'),
    'remove': require('../assets/icons/icon_remove.png'),
    'eye-outline': require('../assets/icons/icon_eye.png'),
    'eye-off-outline': require('../assets/icons/icon_eye.png'),
    'calendar': require('../assets/icons/icon_calender.png'),
    'camera': require('../assets/icons/icon_camera.png'),
    'image': require('../assets/icons/icon_picture.png'),
    'call': require('../assets/icons/icon_call.png'),
    'filter': require('../assets/icons/icon_filter.png'),
    'notifications': require('../assets/icons/icon_notifications.png'),
    
    // Settings icons
    'settings': require('../assets/icons/icon_setting.png'),
    'settings-outline': require('../assets/icons/icon_setting.png'),
    'share': require('../assets/icons/icon_shared.png'),
    'share-outline': require('../assets/icons/icon_shared.png'),
    'language': require('../assets/icons/icon_language.png'),
    
    // Profile icons
    'school': require('../assets/icons/icon_education.png'),
    'document': require('../assets/icons/icon_resume.png'),
    'star': require('../assets/icons/icon_appreciation.png'),
    'location': require('../assets/icons/icon_location.png'),
    'pin': require('../assets/icons/icon_location.png'),
    
    // Default for any unmapped icons
    'default': require('../assets/icons/icon.png'),
  };
  
  // Get the icon or use default
  const iconSource = iconMap[name] || iconMap['default'];
  
  return (
    <Image 
      source={iconSource}
      style={[
        {
          width: size,
          height: size,
          tintColor: color,
        },
        style
      ]}
      resizeMode="contain"
    />
  );
};

export { FigmaIcon };

// Button component with Figma icons
export const Button = ({ 
  title, 
  onPress, 
  type = 'primary', 
  icon, 
  iconPosition = 'left',
  disabled = false,
  style = {}
}) => {
  const buttonStyles = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
    outline: styles.outlineButton,
    text: styles.textButton,
  };
  
  const textStyles = {
    primary: styles.primaryButtonText,
    secondary: styles.secondaryButtonText,
    outline: styles.outlineButtonText,
    text: styles.textButtonText,
  };
  
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        buttonStyles[type],
        disabled && styles.disabledButton,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <FigmaIcon 
          name={icon} 
          size={18} 
          color={type === 'primary' ? '#FFFFFF' : '#0D0166'} 
          style={styles.leftIcon} 
        />
      )}
      <Text style={[
        styles.buttonText,
        textStyles[type],
        disabled && styles.disabledButtonText
      ]}>
        {title}
      </Text>
      {icon && iconPosition === 'right' && (
        <FigmaIcon 
          name={icon} 
          size={18} 
          color={type === 'primary' ? '#FFFFFF' : '#0D0166'} 
          style={styles.rightIcon} 
        />
      )}
    </TouchableOpacity>
  );
};

// Input component with Figma icons
export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  icon,
  onIconPress,
  error,
  style = {}
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={[
        styles.inputWrapper,
        error && styles.inputWrapperError,
        style
      ]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {icon && (
          <TouchableOpacity onPress={onIconPress}>
            <FigmaIcon name={icon} size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

// Card component with Figma icons
export const Card = ({ 
  title, 
  subtitle, 
  icon, 
  onPress, 
  children,
  style = {} 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.card, style]}
      onPress={onPress}
      disabled={!onPress}
    >
      {(title || icon) && (
        <View style={styles.cardHeader}>
          {icon && <FigmaIcon name={icon} size={20} color="#0D0166" style={styles.cardIcon} />}
          <View style={styles.cardTitleContainer}>
            {title && <Text style={styles.cardTitle}>{title}</Text>}
            {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
          </View>
        </View>
      )}
      <View style={styles.cardContent}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

// Avatar component
export const Avatar = ({ 
  source, 
  size = 'medium', 
  onPress,
  style = {} 
}) => {
  const sizeStyles = {
    small: { width: 32, height: 32 },
    medium: { width: 48, height: 48 },
    large: { width: 64, height: 64 },
    xlarge: { width: 96, height: 96 },
  };
  
  return (
    <TouchableOpacity 
      style={[
        styles.avatar,
        sizeStyles[size],
        style
      ]}
      onPress={onPress}
      disabled={!onPress}
    >
      {source ? (
        <Image 
          source={source} 
          style={[styles.avatarImage, sizeStyles[size]]}
        />
      ) : (
        <Image source={require('../assets/illustrations/avatar_illustration_1.png')} style={[styles.avatarImage, sizeStyles[size]]} />
      )}
    </TouchableOpacity>
  );
};

// Badge component
export const Badge = ({ 
  count, 
  type = 'primary',
  size = 'medium',
  style = {} 
}) => {
  const typeStyles = {
    primary: styles.primaryBadge,
    secondary: styles.secondaryBadge,
    success: styles.successBadge,
    warning: styles.warningBadge,
    error: styles.errorBadge,
  };
  
  const sizeStyles = {
    small: styles.smallBadge,
    medium: styles.mediumBadge,
    large: styles.largeBadge,
  };
  
  return (
    <View style={[
      styles.badge,
      typeStyles[type],
      sizeStyles[size],
      style
    ]}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
};

// Tab component
export const Tab = ({ 
  tabs, 
  activeTab, 
  onTabChange,
  style = {} 
}) => {
  return (
    <View style={[styles.tabContainer, style]}>
      {tabs.map((tab, index) => (
        <TouchableOpacity 
          key={index}
          style={[
            styles.tab,
            activeTab === index && styles.activeTab
          ]}
          onPress={() => onTabChange(index)}
        >
          <Text style={[
            styles.tabText,
            activeTab === index && styles.activeTabText
          ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // Button styles
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  primaryButton: {
    backgroundColor: '#0D0166',
  },
  secondaryButton: {
    backgroundColor: '#F0F5FF',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0D0166',
  },
  textButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
    borderColor: '#CCCCCC',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: '#FFFFFF',
  },
  secondaryButtonText: {
    color: '#0D0166',
  },
  outlineButtonText: {
    color: '#0D0166',
  },
  textButtonText: {
    color: '#0D0166',
  },
  disabledButtonText: {
    color: '#999999',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  
  // Input styles
  inputContainer: {
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    height: 50,
  },
  inputWrapperError: {
    borderColor: '#D32F2F',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  errorText: {
    fontSize: 12,
    color: '#D32F2F',
    marginTop: 4,
    marginLeft: 4,
  },
  
  // Card styles
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    marginRight: 12,
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  cardContent: {
    
  },
  
  // Avatar styles
  avatar: {
    borderRadius: 100,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  
  // Badge styles
  badge: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 20,
  },
  primaryBadge: {
    backgroundColor: '#0D0166',
  },
  secondaryBadge: {
    backgroundColor: '#F0F5FF',
  },
  successBadge: {
    backgroundColor: '#4CAF50',
  },
  warningBadge: {
    backgroundColor: '#FFC107',
  },
  errorBadge: {
    backgroundColor: '#D32F2F',
  },
  smallBadge: {
    height: 16,
    paddingHorizontal: 4,
  },
  mediumBadge: {
    height: 20,
    paddingHorizontal: 6,
  },
  largeBadge: {
    height: 24,
    paddingHorizontal: 8,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  // Tab styles
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#0D0166',
    fontWeight: 'bold',
  },
});

// Export all components
export default {
  FigmaIcon,
  Button,
  Input,
  Card,
  Avatar,
  Badge,
  Tab
};
