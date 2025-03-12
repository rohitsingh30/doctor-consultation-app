// Create similar to the one in doctor-consultation-app/appFlows/ but for a doctor managing appointments

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { buttonStyles, containerStyles, shadowsStyle, textStyles } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';
import { AppStackParamList } from '../../../types/types';
import { useTheme } from 'src/styles/ThemeProvider';
import { appHeaderWithBackButton } from '@components/common/Header';

const AppointmentManagementScreen = () => {
  const theme = useTheme().theme;
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  
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
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView style={containerStyles(theme).scrollView}>
        {appHeaderWithBackButton(navigation,theme,'Appointment Management')}
        <View style={containerStyles(theme).contentContainer}>
          {/* Appointments List */}
          <View style={[containerStyles(theme).sectionContainer, shadowsStyle(theme).md]}>
            <Text style={textStyles(theme).titleText}>Upcoming Appointments</Text>
            {appointments.map((appointment) => (
              <TouchableOpacity 
                key={appointment.id}
                style={[containerStyles(theme).listItem, shadowsStyle(theme).md]}
                onPress={() => navigation.navigate('ConsultationConfirm', { patientId: appointment.id })}
                accessibilityRole="button"
                accessibilityLabel={`View appointment with ${appointment.patientName}`}
              >
                <View style={containerStyles(theme).flexRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={textStyles(theme).bodyText}>{appointment.patientName}</Text>
                    <Text style={textStyles(theme).smallText}>{appointment.time} - {appointment.type}</Text>
                  </View>
                  <Icon name="calendar" size={16} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Past Appointments */}
          <View style={[containerStyles(theme).sectionContainer, shadowsStyle(theme).md]}>
            <Text style={textStyles(theme).titleText}>Past Appointments</Text>
            <TouchableOpacity 
              style={[containerStyles(theme).listItem, shadowsStyle(theme).md]}
              onPress={() => navigation.navigate('ConsultationConfirm', { patientId: '4' })}
              accessibilityRole="button"
              accessibilityLabel="View past appointment with Robert Brown"
            >
              <View style={containerStyles(theme).flexRow}>
                <View style={{ flex: 1 }}>
                  <Text style={textStyles(theme).bodyText}>Robert Brown</Text>
                  <Text style={textStyles(theme).smallText}>Monday, 11:00 AM - Check-up</Text>
                </View>
                <Icon name="check-circle" size={16} color={theme.colors.success} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity 
            style={[buttonStyles(theme).primaryButton, shadowsStyle(theme).md]}
            onPress={() => navigation.navigate('AvailabilitySettings')}
            accessibilityRole="button"
            accessibilityLabel="Manage availability settings"
          >
            <Text style={buttonStyles(theme).primaryButtonText}>Manage Availability</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[buttonStyles(theme).secondaryButton, shadowsStyle(theme).md, { marginTop: theme.spacing.md }]}
            onPress={() => navigation.navigate('DoctorDashboard')}
            accessibilityRole="button"
            accessibilityLabel="Return to dashboard"
          >
            <Text style={buttonStyles(theme).secondaryButtonText}>Return to Dashboard</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentManagementScreen;