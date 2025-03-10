// Reference - doctor-consultation-app/appFlows/DoctorFlow-Dashboard.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-DashboardDark.html

import React, { useContext } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appointment, AppStackParamList, HealthReport, PatientHistory, Prescription } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import { useTheme } from '../../../styles/ThemeProvider';
import { createDoctorDashboardStyles } from '../../../styles/screens/doctorDashboardStyles';
import BackButton from '../../common/BackButton';

// Import data types and mock data from doctorData.ts
import { todayAppointments, recentPatientHistory, recentPrescriptions, aiReports } from '../../../data/doctorData';
import { containerStyles } from 'src/styles/commonStyles';

const DoctorDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { user, logout } = useContext(AuthContext);
  const { theme } = useTheme();
  const styles = createDoctorDashboardStyles(theme);

  const handleLogout = () => {
    logout();
    navigation.navigate('DoctorLogin');
  };

  const renderCard = (title: string, content: JSX.Element) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {content}
    </View>
  );

  const renderAppointmentCard = ({ item }: { item: Appointment }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PatientHistory', { patientId: item.id })}
    >
      <Text style={styles.cardTitle}>{item.patientId}</Text>
      <Text style={styles.bodyText}>{item.time}</Text>
      <Text style={{ color: theme.colors.success }}>{item.status}</Text>
    </TouchableOpacity>
  );

  const renderPatientHistoryCard = ({ item }: { item: PatientHistory }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PatientHistory', { patientId: item.id })}
    >
      <Text style={styles.cardTitle}>{item.patient}</Text>
      <Text style={styles.bodyText}>{item.diagnosis}</Text>
      <Text style={styles.smallText}>{item.date}</Text>
    </TouchableOpacity>
  );

  const renderPrescriptionCard = ({ item }: { item: Prescription }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.patient}</Text>
      <Text style={styles.bodyText}>{item.medication}</Text>
      <Text style={styles.smallText}>
        {item.frequency} - {item.duration}
      </Text>
      <Text style={{ color: theme.colors.success }}>{item.status}</Text>
    </View>
  );

  const renderAIReportCard = ({ item }: { item: HealthReport }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ReportDetail', { reportId: item.id })}
    >
      <Text style={styles.cardTitle}>{item.patientName}</Text>
      <Text style={{ color: theme.colors.primary }}>{item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[containerStyles(theme).safeArea, { backgroundColor: theme.colors.background }]}>
      <View style={styles.dashboardContent}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={[styles.cardTitle, { color: theme.colors.textInverted }]}>
            Welcome, {user?.name || 'Doctor'}
          </Text>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="sign-out" size={22} color={theme.colors.textInverted} />
          </TouchableOpacity>
        </View>

        {/* First Row: Today's Appointments and AI Reports */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* Today's Appointments Card */}
          <TouchableOpacity
            style={[styles.card, { flex: 1, marginRight: 5 }]}
            onPress={() => navigation.navigate('AppointmentManagement')}
          >
            <Text style={styles.cardTitle}>Today's Appointments</Text>
            <Text style={styles.counterText}>{todayAppointments.length}</Text>
            <Text style={styles.smallText}>
              {todayAppointments.filter(app => app.status === 'confirmed').length} Confirmed,{' '}
              {todayAppointments.filter(app => app.status === 'pending').length} Pending
            </Text>
          </TouchableOpacity>

          {/* AI Reports Card */}
          <TouchableOpacity
            style={[styles.card, { flex: 1, marginLeft: 5 }]}
            onPress={() => navigation.navigate('ReportListDoctor', { doctorId: user?.id })}
          >
            <Text style={styles.cardTitle}>AI Reports</Text>
            <Text style={styles.counterText}>{aiReports.length}</Text>
            <Text style={styles.smallText}>
              {aiReports.filter(report => report.status === 'reviewed').length} Reviewed,{' '}
              {aiReports.filter(report => report.status === 'pending').length} Pending
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Patient History */}
        {renderCard(
          'Recent Patient History',
          <FlatList
            data={recentPatientHistory}
            horizontal
            keyExtractor={(item) => item.id || item.toString()}
            renderItem={renderPatientHistoryCard}
          />
        )}

        {/* Recent Prescriptions */}
        {renderCard(
          'Recent Prescriptions',
          <FlatList
            data={recentPrescriptions}
            keyExtractor={(item) => item.id || item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderPrescriptionCard}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DoctorDashboardScreen;
