import React, { useContext } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DoctorStackParamList } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import { commonStyles, textStyles, theme } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';

// Define your data types
type Appointment = { id: string; time: string; patient: string; status: string };
type Prescription = { id: string; patient: string; medication: string; frequency: string; duration: string; status: string };
type PatientHistory = { id: string; diagnosis: string; date: string; patient: string };
type AIReport = { id: string; patientName: string; status: string };

// Mock data (replace with real data from API)
const todayAppointments: Appointment[] = [
  { id: '1', time: '09:00 AM', patient: 'John Smith', status: 'Confirmed' },
  { id: '2', time: '11:00 AM', patient: 'Emma Davis', status: 'Confirmed' },
];

const recentPatientHistory = [
  { id: '1', diagnosis: 'Hypertension', patient: 'Michael Brown', date: '2025-03-08' },
  { id: '2', diagnosis: 'Diabetes', patient: 'Emma Davis', date: '2025-03-08' },
];

const recentPrescriptions = [
  { id: '1', patient: 'Michael Brown', medication: 'Lisinopril 10mg', frequency: 'Once daily', duration: '7 days', status: 'Active' },
  { id: '2', patient: 'Emma Davis', medication: 'Metformin 500mg', frequency: 'Twice daily', duration: '30 days', status: 'Active' },
];

const aiReports: AIReport[] = [
  { id: '1', patientName: 'John Doe', status: 'Pending' },
  { id: '2', patientName: 'Jane Doe', status: 'Pending' },
];

const DoctorDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigation.navigate('DoctorLogin');
  };

  return (
    <SafeAreaView style={[commonStyles.safeArea, { backgroundColor: theme.colors.darkBackground }]}>
      <View style={commonStyles.dashboardContent}>
        {/* Header */}
        <View style={commonStyles.headerContainer}>
          <Text style={[textStyles.cardTitle, { color: theme.colors.textInverted }]}>
            Welcome, {user?.name || 'Doctor'}
          </Text>
          <TouchableOpacity onPress={handleLogout}>
            <Icon name="sign-out-alt" size={22} color={theme.colors.textInverted} />
          </TouchableOpacity>
        </View>

        {/* Today's Appointments */}
        <View style={commonStyles.sectionContainer}>
          <Text style={textStyles.cardTitle}>Today's Appointments</Text>
          <FlatList
            data={todayAppointments}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={commonStyles.card}
                onPress={() => navigation.navigate('PatientHistory', { patientId: item.id })}
              >
                <Text style={textStyles.cardTitle}>{item.patient}</Text>
                <Text style={textStyles.bodyText}>{item.time}</Text>
                <Text style={{ color: theme.colors.success }}>{item.status}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Recent Patient History */}
        <View style={commonStyles.sectionContainer}>
          <Text style={textStyles.cardTitle}>Recent Patient History</Text>
          <FlatList
            data={recentPatientHistory}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={commonStyles.card}
                onPress={() => navigation.navigate('PatientHistory', { patientId: item.id })}
              >
                <Text style={textStyles.cardTitle}>{item.patient}</Text>
                <Text style={textStyles.bodyText}>{item.diagnosis}</Text>
                <Text style={textStyles.smallText}>{item.date}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Recent Prescriptions */}
        <View style={commonStyles.sectionContainer}>
          <Text style={textStyles.cardTitle}>Recent Prescriptions</Text>
          <FlatList
            data={recentPrescriptions}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={commonStyles.card}>
                <Text style={textStyles.cardTitle}>{item.patient}</Text>
                <Text style={textStyles.bodyText}>{item.medication}</Text>
                <Text style={textStyles.smallText}>
                  {item.frequency} - {item.duration}
                </Text>
                <Text style={{ color: theme.colors.success }}>{item.status}</Text>
              </View>
            )}
          />
        </View>

        {/* AI Reports to Review */}
        <View style={commonStyles.sectionContainer}>
          <Text style={textStyles.cardTitle}>AI Reports to Review</Text>
          <FlatList
            data={aiReports}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={commonStyles.card}
                onPress={() => navigation.navigate('ReportVerification', { reportId: item.id })}
              >
                <Text style={textStyles.cardTitle}>{item.patientName}</Text>
                <Text style={{ color: theme.colors.primary }}>{item.status}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorDashboardScreen;
