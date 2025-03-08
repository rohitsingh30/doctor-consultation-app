// React and React Native imports
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageStyle } from 'react-native';

// Third-party imports
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Local imports
import { AppStackParamList, Doctor } from '../../../types/types';
import { avatarStyles, commonStyles, headerStyles, sharedStyles, textStyles, theme } from '../../../styles/commonStyles';

type DoctorProfileRouteProp = RouteProp<AppStackParamList, 'DoctorProfile'>;

// Mock data - in a real app, this would come from an API
const mockDoctorData = {
  '1': {
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    experience: '10 years',
    rating: 4.8,
    image: 'https://storage.googleapis.com/a1aa/image/doctor1.jpg',
    about: 'Dr. Sarah Wilson is a board-certified cardiologist with extensive experience in treating heart conditions. She specializes in preventive cardiology and heart disease management.'
  },
  '2': {
    name: 'Dr. Michael Chen',
    specialty: 'Pediatrician',
    experience: '8 years',
    rating: 4.7,
    image: 'https://storage.googleapis.com/a1aa/image/doctor2.jpg',
    about: 'Dr. Michael Chen is a dedicated pediatrician who provides comprehensive care for children of all ages. He has a special interest in childhood development and preventive care.'
  },
  '3': {
    name: 'Dr. Emily Brown',
    specialty: 'Dermatologist',
    experience: '12 years',
    rating: 4.9,
    image: 'https://storage.googleapis.com/a1aa/image/doctor3.jpg',
    about: 'Dr. Emily Brown is a highly skilled dermatologist specializing in both medical and cosmetic dermatology. She is known for her expertise in treating complex skin conditions.'
  }
};

const DoctorProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute<DoctorProfileRouteProp>();
  const { doctorId } = route.params;
  const doctor = mockDoctorData[doctorId as keyof typeof mockDoctorData];

  return (
    <View style={commonStyles.container}>
      <View style={headerStyles.profileHeader}>
        <Image 
          source={{ uri: doctor.image }}
          style={avatarStyles.image as ImageStyle}
          accessibilityRole="image"
          accessibilityLabel={`Profile picture of ${doctor.name}`}
        />
        <Text style={textStyles.name}>{doctor.name}</Text>
        <Text style={textStyles.specialty}>{doctor.specialty}</Text>
        <View style={commonStyles.flexRow}>
          <Text style={textStyles.rating}>⭐ {doctor.rating}</Text>
          <Text style={textStyles.experience}>{doctor.experience}</Text>
        </View>
      </View>
      <View style={commonStyles.sectionContainer}>
        <Text style={textStyles.sectionTitle}>About</Text>
        <Text style={textStyles.description}>{doctor.about}</Text>
        <TouchableOpacity 
          style={[commonStyles.primaryButton, sharedStyles.shadow]}
          onPress={() => navigation.navigate('AppointmentBooking', {
            doctor: doctor as unknown as Doctor,
          })}
          accessibilityRole="button"
          accessibilityLabel="Book appointment with this doctor"
        >
          <Text style={commonStyles.primaryButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorProfileScreen;
