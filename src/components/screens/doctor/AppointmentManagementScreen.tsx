import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { commonStyles, sharedStyles, textStyles, theme } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';
import { DoctorStackParamList } from '../../../types/types';

const AppointmentManagementScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  
  // Mock appointment data
  const appointments = [
    {
      id: '1',
      patientName: 'Sarah Johnson',
      time: 'Tomorrow, 2:30 PM',
      type: 'Follow-up'
    },
    {
      id: '2',
      patientName: 'John Smith',
      time: 'Today, 4:00 PM',
      type: 'Cardiology Check-up'
    },
    {
      id: '3',
      patientName: 'Emma Davis',
      time: 'Friday, 10:30 AM',
      type: 'Initial Consultation'
    }
  ];

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          {/* Appointments List */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Upcoming Appointments</Text>
            {appointments.map((appointment) => (
              <TouchableOpacity 
                key={appointment.id}
                style={[commonStyles.listItem, sharedStyles.shadow]}
                onPress={() => navigation.navigate('PatientHistory')}
                accessibilityRole="button"
                accessibilityLabel={`View appointment with ${appointment.patientName}`}
              >
                <View style={commonStyles.flexRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={commonStyles.bodyText}>{appointment.patientName}</Text>
                    <Text style={textStyles.smallText}>{appointment.time} - {appointment.type}</Text>
                  </View>
                  <Icon name="calendar" size={16} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Past Appointments */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Past Appointments</Text>
            <TouchableOpacity 
              style={[commonStyles.listItem, sharedStyles.shadow]}
              onPress={() => navigation.navigate('PatientHistory')}
              accessibilityRole="button"
              accessibilityLabel="View past appointment with Robert Brown"
            >
              <View style={commonStyles.flexRow}>
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.bodyText}>Robert Brown</Text>
                  <Text style={textStyles.smallText}>Monday, 11:00 AM - Check-up</Text>
                </View>
                <Icon name="check-circle" size={16} color={theme.colors.success} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, sharedStyles.shadow]}
            onPress={() => navigation.navigate('AvailabilitySettings')}
            accessibilityRole="button"
            accessibilityLabel="Manage availability settings"
          >
            <Text style={commonStyles.primaryButtonText}>Manage Availability</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[commonStyles.secondaryButton, sharedStyles.shadow, { marginTop: theme.spacing.md }]}
            onPress={() => navigation.navigate('DoctorDashboard')}
            accessibilityRole="button"
            accessibilityLabel="Return to dashboard"
          >
            <Text style={commonStyles.secondaryButtonText}>Return to Dashboard</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentManagementScreen;