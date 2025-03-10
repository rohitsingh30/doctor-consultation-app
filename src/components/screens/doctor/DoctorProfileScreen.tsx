// Reference - doctor-consultation-app/appFlows/DoctorFlow-PersonalInfo.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-PersonalInfoDark.html

// React and React Native imports
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageStyle } from 'react-native';

// Third-party imports
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Local imports
import { AppStackParamList, Doctor } from '../../../types/types';
import { avatarStyles, buttonStyles, containerStyles, headerStyles, shadowsStyle, textStyles } from '../../../styles/commonStyles';
import { useTheme } from 'src/styles/ThemeProvider';
import { mockDoctorData } from 'src/data/doctorData';

type DoctorProfileRouteProp = RouteProp<AppStackParamList, 'DoctorProfile'>;

const DoctorProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute<DoctorProfileRouteProp>();
  const { doctorId } = route.params;
  const { theme } = useTheme();
  const doctor = mockDoctorData[doctorId as keyof typeof mockDoctorData];

  return (
    <View style={containerStyles(theme).container}>
      <View style={headerStyles(theme).profileHeader}>
        <Image 
          source={{ uri: doctor.image }}
          style={avatarStyles(theme).image as ImageStyle}
          accessibilityRole="image"
          accessibilityLabel={`Profile picture of ${doctor.name}`}
        />
        <Text style={textStyles(theme).name}>{doctor.name}</Text>
        <Text style={textStyles(theme).specialty}>{doctor.specialty}</Text>
        <View style={containerStyles(theme).flexRow}>
          <Text style={textStyles(theme).rating}>⭐ {doctor.rating}</Text>
          <Text style={textStyles(theme).experience}>{doctor.experience}</Text>
        </View>
      </View>
      <View style={containerStyles(theme).sectionContainer}>
        <Text style={textStyles(theme).sectionTitle}>About</Text>
        <Text style={textStyles(theme).description}>{doctor.about}</Text>
        <TouchableOpacity 
          style={[buttonStyles(theme).primaryButton, shadowsStyle(theme).md]}
          onPress={() => navigation.navigate('AppointmentManagement')}
          accessibilityRole="button"
          accessibilityLabel="Book appointment with this doctor"
        >
          <Text style={buttonStyles(theme).primaryButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorProfileScreen;
