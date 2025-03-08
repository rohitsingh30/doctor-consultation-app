import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DoctorStackParamList } from '../../../types/types';
import { theme, commonStyles, sharedStyles, textStyles } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';

type Section = 'consultations' | 'labResults' | 'prescriptions' | 'chronicConditions';

const PatientHistoryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
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

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          {/* Patient Profile and Vitals */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { backgroundColor: theme.colors.lightBackground }]}>
            <View style={[commonStyles.flexRow, commonStyles.spaceBetween]}>
              <View style={commonStyles.flexRow}>
                <Icon name="user-circle" size={24} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                <Text style={commonStyles.titleText}>{patient.name}</Text>
              </View>
              <TouchableOpacity 
                style={[commonStyles.outlineButton, { padding: theme.spacing.xs }]}
                onPress={() => navigation.navigate('AppointmentManagement')}
                accessibilityRole="button"
                accessibilityLabel="Schedule consultation"
              >
                <Text style={commonStyles.outlineButtonText}>Schedule Consultation</Text>
              </TouchableOpacity>
            </View>

            <View style={[commonStyles.flexRow, commonStyles.spaceBetween, { marginTop: theme.spacing.md }]}>
              <View>
                <View style={commonStyles.flexRow}>
                  <Icon name="tint" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
                  <Text style={textStyles.smallText}>Blood Type: {patient.bloodType}</Text>
                </View>
                <View style={[commonStyles.flexRow, { marginTop: theme.spacing.xs }]}>
                  <Icon name="pills" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
                  <Text style={textStyles.smallText}>Allergies: {patient.allergies.join(', ')}</Text>
                </View>
              </View>
              <View>
                <View style={commonStyles.flexRow}>
                  <Icon name="tachometer-alt" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
                  <Text style={textStyles.smallText}>BP: {patient.vitals.bloodPressure}</Text>
                </View>
                <View style={[commonStyles.flexRow, { marginTop: theme.spacing.xs }]}>
                  <Icon name="heart" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
                  <Text style={textStyles.smallText}>Heart Rate: {patient.vitals.heartRate}</Text>
                </View>
                <View style={[commonStyles.flexRow, { marginTop: theme.spacing.xs }]}>
                  <Icon name="thermometer-half" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.xs }} />
                  <Text style={textStyles.smallText}>Temp: {patient.vitals.temperature}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Consultations Section */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <TouchableOpacity 
              style={[commonStyles.flexRow, commonStyles.spaceBetween]}
              onPress={() => toggleSection('consultations')}
              accessibilityRole="button"
              accessibilityLabel="Toggle consultations section"
            >
              <View style={commonStyles.flexRow}>
                <Icon name="stethoscope" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                <Text style={commonStyles.bodyText}>Consultations</Text>
              </View>
              <Icon 
                name={isSectionExpanded('consultations') ? "chevron-up" : "chevron-down"} 
                size={16} 
                color={theme.colors.text} 
              />
            </TouchableOpacity>

            {isSectionExpanded('consultations') && (
              <View style={{ marginTop: theme.spacing.md }}>
                {medicalHistory.consultations.map(item => (
                  <View key={item.id} style={[commonStyles.listItem, sharedStyles.shadow]}>
                    <View style={commonStyles.flexRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={commonStyles.bodyText}>{item.title}</Text>
                        <Text style={textStyles.smallText}>{item.doctor} • {item.date}</Text>
                      </View>
                      <Icon name="chevron-right" size={16} color={theme.colors.primary} />
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Lab Results Section */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <TouchableOpacity 
              style={[commonStyles.flexRow, commonStyles.spaceBetween]}
              onPress={() => toggleSection('labResults')}
              accessibilityRole="button"
              accessibilityLabel="Toggle lab results section"
            >
              <View style={commonStyles.flexRow}>
                <Icon name="vial" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                <Text style={commonStyles.bodyText}>Lab Results</Text>
              </View>
              <Icon 
                name={isSectionExpanded('labResults') ? "chevron-up" : "chevron-down"} 
                size={16} 
                color={theme.colors.text} 
              />
            </TouchableOpacity>

            {isSectionExpanded('labResults') && (
              <View style={{ marginTop: theme.spacing.md }}>
                {medicalHistory.labResults.map(item => (
                  <View key={item.id} style={[commonStyles.listItem, sharedStyles.shadow]}>
                    <View style={commonStyles.flexRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={commonStyles.bodyText}>{item.title}</Text>
                        <Text style={textStyles.smallText}>{item.doctor} • {item.date}</Text>
                      </View>
                      <Icon name="chevron-right" size={16} color={theme.colors.primary} />
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Prescriptions Section */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <TouchableOpacity 
              style={[commonStyles.flexRow, commonStyles.spaceBetween]}
              onPress={() => toggleSection('prescriptions')}
              accessibilityRole="button"
              accessibilityLabel="Toggle prescriptions section"
            >
              <View style={commonStyles.flexRow}>
                <Icon name="prescription-bottle-alt" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                <Text style={commonStyles.bodyText}>Prescriptions</Text>
              </View>
              <Icon 
                name={isSectionExpanded('prescriptions') ? "chevron-up" : "chevron-down"} 
                size={16} 
                color={theme.colors.text} 
              />
            </TouchableOpacity>

            {isSectionExpanded('prescriptions') && (
              <View style={{ marginTop: theme.spacing.md }}>
                {medicalHistory.prescriptions.map(item => (
                  <View key={item.id} style={[commonStyles.listItem, sharedStyles.shadow]}>
                    <View style={commonStyles.flexRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={commonStyles.bodyText}>{item.title}</Text>
                        <Text style={textStyles.smallText}>{item.doctor} • {item.date}</Text>
                      </View>
                      <Icon name="chevron-right" size={16} color={theme.colors.primary} />
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Chronic Conditions Section */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <TouchableOpacity 
              style={[commonStyles.flexRow, commonStyles.spaceBetween]}
              onPress={() => toggleSection('chronicConditions')}
              accessibilityRole="button"
              accessibilityLabel="Toggle chronic conditions section"
            >
              <View style={commonStyles.flexRow}>
                <Icon name="heartbeat" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                <Text style={commonStyles.bodyText}>Chronic Conditions</Text>
              </View>
              <Icon 
                name={isSectionExpanded('chronicConditions') ? "chevron-up" : "chevron-down"} 
                size={16} 
                color={theme.colors.text} 
              />
            </TouchableOpacity>

            {isSectionExpanded('chronicConditions') && (
              <View style={{ marginTop: theme.spacing.md }}>
                {medicalHistory.chronicConditions.map(item => (
                  <View key={item.id} style={[commonStyles.listItem, sharedStyles.shadow]}>
                    <View style={commonStyles.flexRow}>
                      <View style={{ flex: 1 }}>
                        <Text style={commonStyles.bodyText}>{item.title}</Text>
                        <Text style={textStyles.smallText}>Diagnosed: {item.diagnosedDate}</Text>
                      </View>
                      <Icon name="chevron-right" size={16} color={theme.colors.primary} />
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Action Buttons */}
          <TouchableOpacity 
            style={[commonStyles.primaryButton, sharedStyles.shadow]}
            onPress={() => navigation.navigate('ConsultationConfirm')}
            accessibilityRole="button"
            accessibilityLabel="Start consultation"
          >
            <Text style={commonStyles.primaryButtonText}>Start Consultation</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[commonStyles.secondaryButton, sharedStyles.shadow, { marginTop: theme.spacing.md }]}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Return to previous screen"
          >
            <Text style={commonStyles.secondaryButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientHistoryScreen;