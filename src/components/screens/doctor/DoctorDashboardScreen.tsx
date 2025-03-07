// React and React Native imports
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// Local imports
import { DoctorStackParamList } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import { theme, commonStyles, sharedStyles, buttonStyles,textStyles } from '../../../styles/commonStyles';
import Header from '../../common/Header';

const DoctorDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const { user, logout } = useContext(AuthContext);

  // Mock data for the dashboard
  const pendingReports = 5;
  const todayAppointments = 3;

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title={`Welcome, ${user?.name || 'Doctor'}`} />
      
      <ScrollView style={commonStyles.scrollView}>
        <View style={commonStyles.contentContainer}>
          {/* Quick Stats */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Today's Overview</Text>
            <View style={commonStyles.statsContainer}>
              <View style={[commonStyles.statCard, sharedStyles.shadow]}>
                <Icon name="file-text-o" size={32} color={theme.colors.primary} />
                <Text style={commonStyles.statValue}>{pendingReports}</Text>
                <Text style={commonStyles.statLabel}>Reports to Review</Text>
              </View>
              <View style={[commonStyles.statCard, sharedStyles.shadow]}>
                <Icon name="calendar" size={32} color={theme.colors.primary} />
                <Text style={commonStyles.statValue}>{todayAppointments}</Text>
                <Text style={commonStyles.statLabel}>Today's Appointments</Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Quick Actions</Text>
            <View style={commonStyles.actionsGrid}>
              <TouchableOpacity 
                style={[commonStyles.actionCard, sharedStyles.shadow]}
                onPress={() => navigation.navigate('ReportVerification')}
                accessibilityRole="button"
                accessibilityLabel="Review Reports"
              >
                <Icon name="file-text" size={24} color={theme.colors.primary} />
                <Text style={commonStyles.actionText}>Review Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[commonStyles.actionCard, sharedStyles.shadow]}
                onPress={() => navigation.navigate('AppointmentManagement')}
                accessibilityRole="button"
                accessibilityLabel="Manage Appointments"
              >
                <Icon name="calendar-check-o" size={24} color={theme.colors.primary} />
                <Text style={commonStyles.actionText}>Manage Appointments</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[commonStyles.actionCard, sharedStyles.shadow]}
                onPress={() => navigation.navigate('ConsultationRequests')}
                accessibilityRole="button"
                accessibilityLabel="View Consultation Requests"
              >
                <Icon name="inbox" size={24} color={theme.colors.primary} />
                <Text style={commonStyles.actionText}>Consultation Requests</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[commonStyles.actionCard, sharedStyles.shadow]}
                onPress={() => navigation.navigate('AvailabilitySettings')}
                accessibilityRole="button"
                accessibilityLabel="Set Availability"
              >
                <Icon name="clock-o" size={24} color={theme.colors.primary} />
                <Text style={commonStyles.actionText}>Set Availability</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Activity */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={textStyles.titleText}>Recent Activity</Text>
            <View style={commonStyles.timeline}>
              <View style={commonStyles.timelineItem}>
                <View style={commonStyles.timelinePoint} />
                <View style={commonStyles.timelineContent}>
                  <Text style={commonStyles.timelineTitle}>Report Verified</Text>
                  <Text style={commonStyles.timelineDesc}>You verified John Smith's blood test report</Text>
                  <Text style={commonStyles.timelineTime}>2 hours ago</Text>
                </View>
              </View>
              <View style={commonStyles.timelineItem}>
                <View style={commonStyles.timelinePoint} />
                <View style={commonStyles.timelineContent}>
                  <Text style={commonStyles.timelineTitle}>Appointment Completed</Text>
                  <Text style={commonStyles.timelineDesc}>Consultation with Sarah Johnson</Text>
                  <Text style={commonStyles.timelineTime}>Yesterday</Text>
                </View>
              </View>
            </View>
          </View>
          
          {/* Logout Button */}
          <TouchableOpacity 
            style={[commonStyles.secondaryButton, sharedStyles.shadow]}
            onPress={logout}
            accessibilityRole="button"
            accessibilityLabel="Logout"
          >
            <Text style={buttonStyles.secondaryButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDashboardScreen;
