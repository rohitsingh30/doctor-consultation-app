import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { avatarStyles as styles, textStyles,buttonStyles,headerStyles,containerStyles } from '../../../styles/commonStyles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={headerStyles.profileHeader}>
        <Image 
          source={{ uri: 'https://example.com/user.jpg' }}
          style={styles.image}
        />
        <Text style={textStyles.name}>John Doe</Text>
        <Text style={textStyles.email}>john.doe@example.com</Text>
      </View>
      <View style={containerStyles.sectionContainer}>
        <Text style={textStyles.sectionTitle}>Personal Information</Text>
        {/* Add personal information fields here */}
      </View>
      <TouchableOpacity style={buttonStyles.logoutButton}>
        <Text style={textStyles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
