// React and React Native imports
import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Local imports
import { HealthReport, UserStackParamList } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import { commonStyles,avatarStyles,dashBoardStyle,buttonStyles, containerStyles, headerStyles, sharedStyles, textStyles, cardStyles, appointmentCard, badgeStyles } from '../../../styles/commonStyles';
import { theme } from '../../../styles/theme';

const DashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<UserStackParamList>>();
  const { user, logout } = useContext(AuthContext);

  // Mock data
  const upcomingAppointments = [
    {
      id: '1',
      doctorName: 'Dr. Sarah Wilson',
      date: '15 June 2023',
      time: '10:00 AM',
      specialty: 'Cardiology'
    },
    {
      id: '2',
      doctorName: 'Dr. Michael Chen',
      date: '18 June 2023',
      time: '2:30 PM',
      specialty: 'Pediatrics'
    }
  ];

  const recentReports = [
    {
      id: '1',
      title: 'Hypertension Report',
      date: '10 June 2023',
      isReviewed: true,

    },
    {
      id: '2',
      title: 'General Checkup',
      date: '5 June 2023',
      isReviewed: false
    }
  ];

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={dashBoardStyle.dashboardHeader}>
        <View>
          <Text style={dashBoardStyle.dashboardGreeting}>Hello, {user?.name}</Text>
          <Text style={dashBoardStyle.dashboardSubGreeting}>How are you feeling today?</Text>
        </View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Profile')}
          accessibilityRole="button"
          accessibilityLabel="View Profile"
          style={[buttonStyles.profileButton, sharedStyles.shadow]}
        >
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={[avatarStyles.image, { borderColor: theme.colors.border }]}
            accessibilityRole="image"
            accessibilityLabel="Profile picture"
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={dashBoardStyle.dashboardContent}>
        {/* Quick Actions */}
        <View style={containerStyles.actionContainer}>
          <TouchableOpacity 
            style={buttonStyles.actionButton}
            onPress={() => navigation.navigate('ChatBot')}
          >
            <View style={[containerStyles.iconContainer, { backgroundColor: theme.colors.primary }]}>
              <Icon name="chat" size={24} color={theme.colors.textInverted} />
            </View>
            <Text style={commonStyles.actionText}>Start a New Check</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={buttonStyles.actionButton}
            onPress={() => navigation.navigate('DoctorSearch')}
            accessibilityLabel="Search for doctors"
          >
            <View style={[containerStyles.iconContainer, { backgroundColor: theme.colors.secondary }]}>
              <Icon name="search" size={24} color={theme.colors.textInverted} />
            </View>
            <Text style={commonStyles.actionText}>Find a Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={buttonStyles.actionButton}
            onPress={() => navigation.navigate('MedicalRecords', { 
              report: {
                title: recentReports[0]?.title || '',
                symptoms: [],
                possibleConditions: [],
                recommendations: [],
                shouldSeeDoctor: false
              }
            })}
          >
            <View style={[containerStyles.iconContainer, { backgroundColor: theme.colors.success }]}>
              <Icon name="description" size={24} color={theme.colors.textInverted} />
            </View>
            <Text style={commonStyles.actionText}>My Reports</Text>
          </TouchableOpacity>
        </View>

        {/* Upcoming Appointments */}
        <View style={[containerStyles.sectionContainer, sharedStyles.shadow]}>
          <View style={[headerStyles.sectionHeader]}>
            <Text style={textStyles.sectionTitle}>Upcoming Appointments</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AppointmentList')}>
              <Text style={textStyles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map(appointment => (
              <TouchableOpacity 
                key={appointment.id}
                style={[cardStyles.appointmentCard, sharedStyles.shadow, { marginBottom: theme.spacing.sm }]}
                onPress={() => navigation.navigate('AppointmentDetail', { appointmentId: appointment.id })}
              >
                <View style={[appointmentCard.appointmentInfo, { flex: 1 }]}>
                  <Text style={[textStyles.doctorName, { marginBottom: theme.spacing.xs }]}>{appointment.doctorName}</Text>
                  <Text style={[textStyles.appointmentSpecialty, { marginBottom: theme.spacing.xs }]}>{appointment.specialty}</Text>
                  <Text style={textStyles.appointmentDateTime}>{appointment.date} at {appointment.time}</Text>
                </View>
                <Icon name="chevron-right" size={24} color={theme.colors.primary} />
              </TouchableOpacity>
            ))
          ) : (
            <Text style={[textStyles.noDataText, { padding: theme.spacing.md }]}>No upcoming appointments</Text>
          )}

          <TouchableOpacity 
            style={[buttonStyles.bookAppointmentButton, sharedStyles.shadow, { marginTop: theme.spacing.md }]}
            onPress={() => navigation.navigate('DoctorSearch')}
          >
            <Text style={textStyles.bookAppointmentText}>Book a Consultation</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Health Reports */}
        <View style={[containerStyles.sectionContainer, sharedStyles.shadow]}>
          <View style={[headerStyles.sectionHeader, commonStyles.spaceBetween]}>
            <Text style={textStyles.sectionTitle}>Recent Health Reports</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MedicalRecords', { 
              report: {
                title: recentReports[0]?.title || '',
                symptoms: [],
                possibleConditions: [],
                recommendations: [],
                shouldSeeDoctor: false
              }
            })}>
              <Text style={textStyles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {recentReports.length > 0 ? (
            recentReports.map(report => (
              <TouchableOpacity 
                key={report.id}
                style={[cardStyles.reportCard, sharedStyles.shadow, { marginBottom: theme.spacing.sm }]}
                onPress={() => navigation.navigate('ReportDetail', { reportId: report.id, isReviewed: report.isReviewed })}
              >
                <View style={[containerStyles.reportInfo, { flex: 1 }]}>
                  <Text style={[textStyles.reportTitle, { marginBottom: theme.spacing.xs }]}>{report.title}</Text>
                  <Text style={textStyles.reportDate}>Generated on {report.date}</Text>
                </View>
                <View style={[badgeStyles.statusBadge, report.isReviewed ? badgeStyles.reviewedBadge : badgeStyles.pendingBadge]}>
                  <Text style={[textStyles.statusText, report.isReviewed ? textStyles.reviewedText : textStyles.pendingText]}>
                    {report.isReviewed ? 'Reviewed' : 'Pending'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={textStyles.noDataText}>No recent reports</Text>
          )}
        </View>

        <TouchableOpacity 
          style={buttonStyles.logoutButton}
          onPress={logout}
        >
          <Text style={buttonStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DashboardScreen;
