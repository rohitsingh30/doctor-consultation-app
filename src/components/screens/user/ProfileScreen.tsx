import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { avatarStyles, textStyles, buttonStyles, headerStyles, containerStyles, commonStyles } from '../../../styles/commonStyles';

const ProfileScreen = () => {
  return (
    <View style={commonStyles.container}>
      <View style={headerStyles.profileHeader}>
        <Image 
          source={{ uri: 'https://example.com/user.jpg' }}
          style={[avatarStyles.image, styles.profileImage]}
        />
        <Text style={[textStyles.titleText, styles.nameText]}>John Doe</Text>
        <Text style={textStyles.bodyText}>john.doe@example.com</Text>
      </View>
      <View style={containerStyles.sectionContainer}>
        <Text style={textStyles.titleText}>Personal Information</Text>
        <View style={styles.infoContainer}>
          <Text style={textStyles.bodyText}>Add your personal information here</Text>
        </View>
      </View>
      <TouchableOpacity style={[commonStyles.primaryButton, styles.logoutButton]}>
        <Text style={commonStyles.primaryButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
