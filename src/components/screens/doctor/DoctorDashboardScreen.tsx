import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppStackParamList, PatientHistory, Theme } from '../../../types/types';
import { AuthContext } from '../../../context/AuthContext';
import { useTheme } from '../../../styles/ThemeProvider';
import { createDoctorDashboardStyles } from '../../../styles/screens/doctorDashboardStyles';
import { containerStyles } from 'src/styles/commonStyles';
import { recentPatientHistory, todayAppointments, aiReports } from 'src/data/doctorData';
import { dashboardDoctorHeader } from '@components/common/Header';
import { useNavigation } from '@react-navigation/native';

const renderStatsCard = (styles: any, onClick: ()=>void, theme: Theme, info: any[], name: string)=>{
  return (
    <TouchableOpacity 
    style={[styles.statsCard, { flex: 1, marginLeft: 6, padding: 10 }]}
    onPress={onClick}
    accessibilityRole="button"
    accessibilityLabel="View Appointments"
  >
    <Text style={{ color: theme.colors.text, fontWeight: '600', marginBottom: 2, fontSize: 14 }}>
      {name}
    </Text>
    <Text style={{ color: theme.colors.primary, fontSize: 22, fontWeight: '700' }}>
      {info.length}
    </Text>
    </TouchableOpacity>
  )
}

const DoctorDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { user, logout } = useContext(AuthContext);
  const { theme } = useTheme();
  const styles = createDoctorDashboardStyles(theme);
  const [patientHistoryCount, setPatientHistoryCount] = useState<number>(1);

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
      <ScrollView 
        style={[containerStyles(theme).container, { width: '100%' }]} 
        contentContainerStyle={{ paddingBottom: 16, width: '100%' }}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
      >
        {/* Header */}
        {dashboardDoctorHeader(navigation, theme, user, handleLogout)};

        {/* Stats Cards */}
        <View style={[styles.statsContainer, { paddingHorizontal: 12, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }]}>
          {renderStatsCard(styles, () => navigation.navigate('AppointmentManagement'), theme, todayAppointments, 'Today\'s Appointments')}
          {renderStatsCard(styles, () => navigation.navigate('ReportList', { patientId: undefined }), theme, aiReports, 'AI Reports')}
        </View>

        {/* Patient History Section */}
        <View style={[styles.patientHistoryContainer, { paddingHorizontal: 12, justifyContent: 'space-between', width: '100%' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', width: '100%' }}>
            <Text style={{ color: theme.colors.text, fontWeight: '600', fontSize: 14 }}>Recent Patient History</Text>
            <Icon name="users" style={{ color: theme.colors.textSecondary, marginLeft: 6, fontSize: 14 }} />
            <Text style={{ color: theme.colors.text, fontWeight: '600', marginLeft: 4, fontSize: 14 }}>
              {recentPatientHistory.length}
            </Text>
          </View>

          <ScrollView 
            horizontal 
            style={{ width: '100%' }}
            contentContainerStyle={{ flexDirection: 'row' }}
            showsHorizontalScrollIndicator={false}
          >
            {recentPatientHistory.slice(0, patientHistoryCount).map((patient) => (
              <TouchableOpacity
                key={patient.id}
                style={[styles.patientCard, { marginRight: 12, flexShrink: 0, height: 180 }]}
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
