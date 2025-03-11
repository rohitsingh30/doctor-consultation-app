import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppStackParamList, PatientHistory } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import { useTheme } from '../../../styles/ThemeProvider';
import { createDoctorDashboardStyles } from '../../../styles/screens/doctorDashboardStyles';
import { containerStyles } from 'src/styles/commonStyles';
import { recentPatientHistory, todayAppointments, aiReports } from 'src/data/doctorData';

const DoctorDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { user, logout } = useContext(AuthContext);
  const { theme } = useTheme();
  const styles = createDoctorDashboardStyles(theme);
  const [patientHistoryCount, setPatientHistoryCount] = useState<number>(2);

  const handleLogout = () => {
    logout();
    navigation.navigate('DoctorLogin');
  };

  const handleShowMorePatients = () => {
    const newCount = Math.min(patientHistoryCount + 2, recentPatientHistory.length);
    setPatientHistoryCount(newCount);
  };

  return (
    <SafeAreaView style={[containerStyles(theme).safeArea, { flex: 1 }]}>
      <ScrollView style={[styles.container]} contentContainerStyle={{ paddingBottom: 16 }}>
        {/* Header */}
        <View style={[styles.headerContainer, { paddingHorizontal: 12, paddingVertical: 8 }]}>
          <View style={[{ flexDirection: 'row', alignItems: 'center', flex: 1 }]}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('DoctorProfile', { doctorId: user?.id })}
              accessibilityRole="button"
              accessibilityLabel="Go to doctor profile"
              style={{ padding: 6 }}
            >
              <Icon name="user-md" style={styles.profileIcon} />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 6 }}>
              <Text style={[styles.doctorName, { marginRight: 8 }]} numberOfLines={1}>Dr. John Doe</Text>
              <View style={[styles.availabilityBadge]}>
                <Icon name="check-circle" style={styles.availabilityIcon} />
                <Text style={styles.availabilityText}>Available</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity 
            onPress={handleLogout}
            style={[styles.logoutButton, { padding: 6 }]}
            accessibilityRole="button"
            accessibilityLabel="Log out"
          >
            <Icon name="sign-out" style={{ marginRight: 6, color: theme.colors.primary }} />
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={[styles.statsContainer, { paddingHorizontal: 12, flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style={[styles.statsCard, { flex: 1, marginRight: 6, padding: 10 }]}>
            <Text style={{ color: theme.colors.text, fontWeight: '600', marginBottom: 2, fontSize: 14 }}>
              Today's Appointments
            </Text>
            <Text style={{ color: theme.colors.primary, fontSize: 22, fontWeight: '700' }}>
              {todayAppointments.length}
            </Text>
          </View>
          <View style={[styles.statsCard, { flex: 1, marginLeft: 6, padding: 10 }]}>
            <Text style={{ color: theme.colors.text, fontWeight: '600', marginBottom: 2, fontSize: 14 }}>
              AI Reports
            </Text>
            <Text style={{ color: theme.colors.primary, fontSize: 22, fontWeight: '700' }}>
              {aiReports.length}
            </Text>
          </View>
        </View>

        {/* Patient History Section */}
        <View style={[styles.patientHistoryContainer, { paddingHorizontal: 12 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
            <Text style={{ color: theme.colors.text, fontWeight: '600', fontSize: 14 }}>Recent Patient History</Text>
            <Icon name="users" style={{ color: theme.colors.textSecondary, marginLeft: 6, fontSize: 14 }} />
            <Text style={{ color: theme.colors.text, fontWeight: '600', marginLeft: 4, fontSize: 14 }}>
              {recentPatientHistory.length}
            </Text>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingRight: 12 }}
          >
            {recentPatientHistory.slice(0, patientHistoryCount).map((patient) => (
              <TouchableOpacity
                key={patient.id}
                style={[styles.patientCard, { width: 280, marginRight: 12, flexShrink: 0, height: 180 }]}
                onPress={() => navigation.navigate('PatientHistory', { patientId: patient.id })}
                accessibilityRole="button"
                accessibilityLabel={`View patient history for ${patient.patient}`}
              >
                <View style={[styles.patientHeader, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }]}>
                  <View style={[styles.patientInfo, { flex: 1 }]}>
                    <Image 
                      source={{ uri: patient.image }} 
                      style={[styles.patientImage, { flexShrink: 0, width: 40, height: 40 }]}
                      accessibilityLabel={`Profile picture of ${patient.patient}`}
                    />
                    <View style={{ flex: 1, marginLeft: 8 }}>
                      <Text style={[styles.patientName, { flexShrink: 1 }]} numberOfLines={1}>{patient.patient}</Text>
                      {patient.status && (
                        <Text style={[styles.patientStatus, { color: patient.status.includes('Follow') ? theme.colors.error : theme.colors.success }]} numberOfLines={1}>
                          {patient.status}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>

                <View style={styles.diagnosisContainer}>
                  <View style={styles.diagnosisRow}>
                    <View style={[styles.diagnosisInfo, { alignItems: 'center' }]}>
                      <Icon name="stethoscope" style={styles.icon} />
                      <Text style={styles.diagnosisText} numberOfLines={1}>{patient.diagnosis}</Text>
                    </View>
                    <Text style={styles.timeText}>{patient.lastVisit}</Text>
                  </View>

                  {patient.medications?.slice(0, 2).map((medication, index) => (
                    <View key={index} style={styles.diagnosisRow}>
                      <View style={[styles.diagnosisInfo, { alignItems: 'center' }]}>
                        <Icon name="pills" style={styles.icon} />
                        <Text style={styles.diagnosisText} numberOfLines={1}>{medication.name}</Text>
                      </View>
                      <Text style={styles.timeText}>{medication.duration.replace(' days ago', '')}</Text>
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
            {patientHistoryCount < recentPatientHistory.length && (
              <TouchableOpacity 
                style={[styles.showMoreButton, { width: 50, height: 180 }]}
                onPress={handleShowMorePatients}
                accessibilityRole="button"
                accessibilityLabel="Show more patient history"
              >
                <Icon name="chevron-right" size={20} color={theme.colors.primary} />
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDashboardScreen;
