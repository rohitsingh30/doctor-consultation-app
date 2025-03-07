// React and React Native imports
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// Local imports
import { DoctorStackParamList } from '../../../types/types';
import { theme, commonStyles, sharedStyles, textStyles } from '../../../styles/commonStyles';
import Header from '../../common/Header';

const AppointmentManagementScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Appointments" />
      
      <ScrollView style={commonStyles.scrollView}>
        <View style={commonStyles.contentContainer}>
          {/* Today's Appointments */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Today's Appointments</Text>
            <TouchableOpacity 
              style={[commonStyles.listItem, sharedStyles.shadow]}
              onPress={() => navigation.navigate('AppointmentDetail', { appointmentId: '1' })}
              accessibilityRole="button"
              accessibilityLabel="View appointment with John Smith"
            >
              <View style={commonStyles.flexRow}>
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.bodyText}>John Smith</Text>
                  <Text style={textStyles.smallText}>10:00 AM - General Checkup</Text>
                </View>
                <Icon name="video-camera" size={16} color={theme.colors.primary} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Upcoming Appointments */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Upcoming Appointments</Text>
            <TouchableOpacity 
              style={[commonStyles.listItem, sharedStyles.shadow]}
              onPress={() => navigation.navigate('AppointmentDetail', { appointmentId: '2' })}
              accessibilityRole="button"
              accessibilityLabel="View appointment with Sarah Johnson"
            >
              <View style={commonStyles.flexRow}>
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.bodyText}>Sarah Johnson</Text>
                  <Text style={textStyles.smallText}>Tomorrow, 2:30 PM - Follow-up</Text>
                </View>
                <Icon name="calendar" size={16} color={theme.colors.primary} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Action Button */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, sharedStyles.shadow]}
            onPress={() => navigation.navigate('AvailabilitySettings')}
            accessibilityRole="button"
            accessibilityLabel="Manage availability settings"
          >
            <Text style={commonStyles.primaryButtonText}>Manage Availability</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentManagementScreen;