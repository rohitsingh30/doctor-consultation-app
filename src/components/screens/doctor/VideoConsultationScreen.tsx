// Reference - doctor-consultation-app/appFlows/DoctorFlow-VideoConsultPage.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-VideoConsultPageDark.html

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStackParamList } from '../../../types/types';
import { useTheme } from '../../../styles/ThemeProvider';
import { createVideoConsultationStyles } from '../../../styles/screens/videoConsultationStyles';
import BackButton from '../../common/BackButton';
import { videoConsultationPatients, VideoConsultationPatient } from '../../../data/doctorData';
import { containerStyles } from 'src/styles/commonStyles';

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
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
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
   * Toggle microphone mute state
   */
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // In a real app, this would trigger the actual mute/unmute functionality
  };

  /**
   * Toggle camera on/off state
   */
  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    // In a real app, this would trigger the actual video on/off functionality
  };

  /**
   * End the consultation and navigate to confirmation screen
   */
  const endConsultation = () => {
    // In a real app, this would end the video call and save consultation data
    navigation.navigate('ConsultationConfirm', { appointmentId: route?.params?.appointmentId, patientId: route?.params?.patientId });
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
   * Render video call placeholder
   */
  const renderVideoPlaceholder = () => (
    <View style={styles.videoPlaceholder}>
      {!isVideoOn && (
        <Icon name="video-slash" size={48} color={theme.colors.textInverted} />
      )}
    </View>
  );

  /**
   * Render video call control buttons
   */
  const renderVideoControls = () => (
    <View style={styles.controlsContainer}>
      <TouchableOpacity 
        style={[styles.controlButton, isMuted && styles.controlButtonMuted]}
        onPress={toggleMute}
        accessibilityRole="button"
        accessibilityLabel={isMuted ? "Unmute microphone" : "Mute microphone"}
      >
        <Icon name={isMuted ? "microphone-slash" : "microphone"} size={24} color={theme.colors.textInverted} />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.controlButton, !isVideoOn && styles.controlButtonMuted]}
        onPress={toggleVideo}
        accessibilityRole="button"
        accessibilityLabel={isVideoOn ? "Turn off camera" : "Turn on camera"}
      >
        <Icon name={isVideoOn ? "video" : "video-slash"} size={24} color={theme.colors.textInverted} />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.controlButton, styles.controlButtonEnd]}
        onPress={endConsultation}
        accessibilityRole="button"
        accessibilityLabel="End consultation"
      >
        <Icon name="phone-slash" size={24} color={theme.colors.textInverted} />
      </TouchableOpacity>
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
        placeholder="Add consultation notes here..."
        placeholderTextColor={theme.colors.textSecondary}
        value={consultationNotes}
        onChangeText={setConsultationNotes}
        accessibilityLabel="Consultation notes input field"
      />
    </View>
  );

  /**
   * Render action buttons for saving notes and viewing patient history
   */
  const renderActionButtons = () => (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => {}}
        accessibilityLabel="Save notes"
      >
        <Text style={styles.actionButtonText}>Save Notes</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('PatientHistory', { patientId: patient?.id })}
        accessibilityLabel="View patient history"
      >
        <Text style={styles.secondaryButtonText}>View Patient History</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView style={containerStyles(theme).scrollView}>
        <BackButton />
        <View style={containerStyles(theme).contentContainer}>
          {renderPatientInfoCard()}
          {renderVideoPlaceholder()}
          {renderVideoControls()}
          {renderConsultationNotes()}
          {renderActionButtons()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoConsultationScreen;