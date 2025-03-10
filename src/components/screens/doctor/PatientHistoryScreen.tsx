// Reference - doctor-consultation-app/appFlows/DoctorFlow-PatientHistory.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-PatientHistoryDark.html

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStackParamList } from '../../../types/types';
import BackButton from '../../common/BackButton';
import { useTheme } from '../../../styles/ThemeProvider';
import { createPatientHistoryStyles } from '../../../styles/screens/patientHistoryStyles';
import { containerStyles, shadowsStyle } from 'src/styles/commonStyles';

type Section = 'consultations' | 'labResults' | 'prescriptions' | 'chronicConditions';

const PatientHistoryScreen = () => {
  const { theme } = useTheme();
  const styles = createPatientHistoryStyles(theme);
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const [expandedSections, setExpandedSections] = useState<Section[]>([]);

  // Mock patient data
  const patient = {
    id: '1',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodType: 'A+',
    allergies: ['Penicillin'],
    vitals: {
      bloodPressure: '120/80',
      heartRate: '72 bpm',
      temperature: '98.6°F'
    }
  };

  // Mock medical history data
  const medicalHistory = {
    consultations: [
      { id: '1', title: 'Flu Symptoms', doctor: 'Dr. Sarah Smith', date: '2023-05-15' },
      { id: '2', title: 'Annual Checkup', doctor: 'Dr. Mike Johnson', date: '2023-02-10' }
    ],
    labResults: [
      { id: '1', title: 'Blood Test', doctor: 'Dr. Emma Wilson', date: '2023-04-20' },
      { id: '2', title: 'X-Ray', doctor: 'Dr. John Doe', date: '2023-03-05' }
    ],
    prescriptions: [
      { id: '1', title: 'Lisinopril', doctor: 'Dr. Sarah Smith', date: '2023-05-15' },
      { id: '2', title: 'Metformin', doctor: 'Dr. Mike Johnson', date: '2023-02-10' }
    ],
    chronicConditions: [
      { id: '1', title: 'Hypertension', diagnosedDate: 'Jan 2022' },
      { id: '2', title: 'Type 2 Diabetes', diagnosedDate: 'Mar 2021' }
    ]
  };

  const toggleSection = (section: Section) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section) 
        : [...prev, section]
    );
  };

  const isSectionExpanded = (section: Section) => {
    return expandedSections.includes(section);
  };

  // Render patient profile and vitals
  const renderPatientProfile = () => (
    <View style={[styles.sectionContainer, shadowsStyle(theme).md, { backgroundColor: theme.colors.surface }]}>
      <View style={[containerStyles(theme).flexRow, containerStyles(theme).spaceBetween]}>
        <View style={containerStyles(theme).flexRow}>
          <Icon name="user-circle" size={24} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
          <Text style={styles.titleText}>{patient.name}</Text>
        </View>
        <TouchableOpacity 
          style={[styles.outlineButton, { padding: theme.spacing.xs }]}
          onPress={() => navigation.navigate('AppointmentManagement')}
          accessibilityRole="button"
          accessibilityLabel="Schedule consultation"
        >
          <Text style={styles.outlineButtonText}>Schedule Consultation</Text>
        </TouchableOpacity>
      </View>

      <View style={[containerStyles(theme).flexRow, containerStyles(theme).spaceBetween, { marginTop: theme.spacing.md }]}>
        <View>
          <View style={containerStyles(theme).flexRow}>
            <Icon name="tint" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
            <Text style={styles.smallText}>Blood Type: {patient.bloodType}</Text>
          </View>
          <View style={[containerStyles(theme).flexRow, { marginTop: theme.spacing.xs }]}>
            <Icon name="pills" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
            <Text style={styles.smallText}>Allergies: {patient.allergies.join(', ')}</Text>
          </View>
        </View>
        <View>
          <View style={containerStyles(theme).flexRow}>
            <Icon name="tachometer" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
            <Text style={styles.smallText}>BP: {patient.vitals.bloodPressure}</Text>
          </View>
          <View style={[containerStyles(theme).flexRow, { marginTop: theme.spacing.xs }]}>
            <Icon name="heart" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
            <Text style={styles.smallText}>Heart Rate: {patient.vitals.heartRate}</Text>
          </View>
          <View style={[containerStyles(theme).flexRow, { marginTop: theme.spacing.xs }]}>
            <Icon name="thermometer-half" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
            <Text style={styles.smallText}>Temp: {patient.vitals.temperature}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  // Render section header
  const renderSectionHeader = (section: Section, icon: string, title: string) => (
    <TouchableOpacity 
      style={[containerStyles(theme).flexRow, containerStyles(theme).spaceBetween]}
      onPress={() => toggleSection(section)}
      accessibilityRole="button"
      accessibilityLabel={`Toggle ${title} section`}
    >
      <View style={containerStyles(theme).flexRow}>
        <Icon name={icon} size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
        <Text style={styles.bodyText}>{title}</Text>
      </View>
      <Icon 
        name={isSectionExpanded(section) ? "chevron-up" : "chevron-down"} 
        size={16} 
        color={theme.colors.text} 
      />
    </TouchableOpacity>
  );

  // Render history item
  const renderHistoryItem = (item: any, isChronicCondition: boolean = false) => (
    <View key={item.id} style={[styles.historyItem, shadowsStyle(theme).md]}>
      <View style={containerStyles(theme).flexRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.historyItemTitle}>{item.title}</Text>
          {isChronicCondition ? (
            <Text style={styles.historyItemSubtitle}>Diagnosed: {item.diagnosedDate}</Text>
          ) : (
            <Text style={styles.historyItemSubtitle}>{item.doctor} • {item.date}</Text>
          )}
        </View>
        <Icon name="chevron-right" size={16} color={theme.colors.primary} />
      </View>
    </View>
  );

  // Render consultations section
  const renderConsultationsSection = () => (
    <View style={[styles.sectionContainer, shadowsStyle(theme).md]}>
      {renderSectionHeader('consultations', 'stethoscope', 'Consultations')}
      {isSectionExpanded('consultations') && (
        <View style={{ marginTop: theme.spacing.md }}>
          {medicalHistory.consultations.map(item => renderHistoryItem(item))}
        </View>
      )}
    </View>
  );

  // Render lab results section
  const renderLabResultsSection = () => (
    <View style={[styles.sectionContainer, shadowsStyle(theme).md]}>
      {renderSectionHeader('labResults', 'vial', 'Lab Results')}
      {isSectionExpanded('labResults') && (
        <View style={{ marginTop: theme.spacing.md }}>
          {medicalHistory.labResults.map(item => renderHistoryItem(item))}
        </View>
      )}
    </View>
  );

  // Render prescriptions section
  const renderPrescriptionsSection = () => (
    <View style={[styles.sectionContainer, shadowsStyle(theme).md]}>
      {renderSectionHeader('prescriptions', 'prescription-bottle', 'Prescriptions')}
      {isSectionExpanded('prescriptions') && (
        <View style={{ marginTop: theme.spacing.md }}>
          {medicalHistory.prescriptions.map(item => renderHistoryItem(item))}
        </View>
      )}
    </View>
  );

  // Render chronic conditions section
  const renderChronicConditionsSection = () => (
    <View style={[styles.sectionContainer, shadowsStyle(theme).md]}>
      {renderSectionHeader('chronicConditions', 'heartbeat', 'Chronic Conditions')}
      {isSectionExpanded('chronicConditions') && (
        <View style={{ marginTop: theme.spacing.md }}>
          {medicalHistory.chronicConditions.map(item => renderHistoryItem(item, true))}
        </View>
      )}
    </View>
  );

  // Render action buttons
  const renderActionButtons = () => (
    <View>
      <TouchableOpacity 
        style={[styles.primaryButton, shadowsStyle(theme).md]}
        onPress={() => navigation.navigate('VideoConsultation', { patientId: patient.id })}
        accessibilityRole="button"
        accessibilityLabel="Start consultation"
      >
        <Text style={styles.primaryButtonText}>Start Consultation</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.secondaryButton, shadowsStyle(theme).md, { marginTop: theme.spacing.md }]}
        onPress={() => navigation.goBack()}
        accessibilityRole="button"
        accessibilityLabel="Return to previous screen"
      >
        <Text style={styles.secondaryButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView style={containerStyles(theme).scrollView}>
        <BackButton />
        <View style={containerStyles(theme).contentContainer}>
          {renderPatientProfile()}
          {renderConsultationsSection()}
          {renderLabResultsSection()}
          {renderPrescriptionsSection()}
          {renderChronicConditionsSection()}
          {renderActionButtons()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientHistoryScreen;