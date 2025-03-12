// Reference - doctor-consultation-app/appFlows/DoctorFlow-VideoConsultPage.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-VideoConsultPageDark.html

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStackParamList } from '../../../types/types';
import { useTheme } from '../../../styles/ThemeProvider';
import { createVideoConsultationStyles } from '../../../styles/screens/videoConsultationStyles';
import BackButton from '../../common/BackButton';
import { videoConsultationPatients, VideoConsultationPatient } from '../../../data/doctorData';
import { containerStyles, textStyles } from 'src/styles/commonStyles';

type VideoConsultationScreenProps = {
  route?: {
    params: {
      patientId?: string;
      appointmentId?: string;
    };
  };
};

/**
 * VideoConsultationScreen component for doctor-patient video consultations
 * Allows doctors to conduct video calls with patients and take notes
 */
const VideoConsultationScreen = ({ route }: VideoConsultationScreenProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();  
  const { theme } = useTheme();
  const styles = createVideoConsultationStyles(theme);
  
  // State management
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationNotes, setConsultationNotes] = useState('');
  const [patient, setPatient] = useState<VideoConsultationPatient | null>(null);
  
  // Fetch patient data based on patientId from route params
  useEffect(() => {
    const patientId = route?.params?.patientId || '1'; // Default to first patient if no ID provided
    const foundPatient = videoConsultationPatients.find(p => p.id === patientId) || videoConsultationPatients[0];
    setPatient(foundPatient);
  }, [route?.params?.patientId]);
  
  // If patient data is not loaded yet, show loading or return null
  if (!patient) {
    return (
      <SafeAreaView style={containerStyles(theme).safeArea}>
        <View style={[containerStyles(theme).contentContainer, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text>Loading patient data...</Text>
        </View>
      </SafeAreaView>
    );
  }

  /**
   * Schedule consultation and navigate to confirmation screen
   */
  const scheduleConsultation = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Error', 'Please select both date and time for the consultation');
      return;
    }
    navigation.navigate('ConsultationConfirm', { 
      appointmentId: route?.params?.appointmentId, 
      patientId: route?.params?.patientId,
      dateTime: selectedDate,
    });
  };

  /**
   * Render patient information card with vitals
   */
  const renderPatientInfoCard = () => (
    <View style={styles.patientCard}>
      <View style={containerStyles(theme).flexRow}>
        <Icon name="user-circle" size={24} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
        <View>
          <Text style={styles.patientName}>{patient.name}, {patient.age}</Text>
          <Text style={styles.patientCondition}>{patient.condition}</Text>
        </View>
      </View>
      
      <View style={[containerStyles(theme).flexRow, { marginTop: theme.spacing.md, justifyContent: 'space-around' }]}>
        <View style={containerStyles(theme).flexRow}>
          <Icon name="heartbeat" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
          <Text style={styles.vitalText}>{patient.vitals.heartRate}</Text>
        </View>
        <View style={containerStyles(theme).flexRow}>
          <Icon name="tachometer" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
          <Text style={styles.vitalText}>BP: {patient.vitals.bloodPressure}</Text>
        </View>
        <View style={containerStyles(theme).flexRow}>
          <Icon name="thermometer-half" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
          <Text style={styles.vitalText}>{patient.vitals.temperature}</Text>
        </View>
      </View>
    </View>
  );

  /**
   * Render date and time selection
   */
  const renderDateTimeSelection = () => (
    <View style={styles.dateTimeContainer}>
      <Text style={styles.sectionTitle}>Select Date & Time</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Date</Text>
        <TouchableOpacity 
          style={styles.input}
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel="Select date"
        >
          <Text style={styles.inputText}>{selectedDate || 'Select date'}</Text>
          <Icon name="calendar" size={20} color={theme.colors.textSecondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Time</Text>
        <TouchableOpacity 
          style={styles.input}
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel="Select time"
        >
          <Text style={styles.inputText}>{selectedTime || 'Select time slot'}</Text>
          <Icon name="clock-o" size={20} color={theme.colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );

  /**
   * Render consultation notes input section
   */
  const renderConsultationNotes = () => (
    <View style={styles.notesContainer}>
      <Text style={styles.notesTitle}>Consultation Notes</Text>
      <TextInput
        style={styles.notesInput}
        multiline
        placeholder="Add any pre-consultation notes or requirements"
        placeholderTextColor={theme.colors.textSecondary}
        value={consultationNotes}
        onChangeText={setConsultationNotes}
        accessibilityLabel="Consultation notes input field"
      />
    </View>
  );

  /**
   * Render action button for scheduling consultation
   */
  const renderActionButtons = () => (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={scheduleConsultation}
        accessibilityRole="button"
        accessibilityLabel="Schedule consultation"
      >
        <Text style={styles.actionButtonText}>Schedule Consultation</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      {/* Header */}
      <View style={[containerStyles(theme).headerContainer, { paddingHorizontal: 12, paddingVertical: 8 }]}>
        <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            style={{ padding: 6 }}
          >
            <Icon name="chevron-left" size={24} color={theme.colors.text} />
          </TouchableOpacity>
          <Text style={[textStyles(theme).headerTitle, { marginLeft: 12 }]}>Schedule Video Consultation</Text>
        </View>
      </View>

      <ScrollView style={containerStyles(theme).scrollView} contentContainerStyle={{ padding: theme.spacing.md }}>
        <View style={containerStyles(theme).contentContainer}>
          {renderPatientInfoCard()}
          {renderDateTimeSelection()}
          {renderConsultationNotes()}
          {renderActionButtons()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoConsultationScreen;