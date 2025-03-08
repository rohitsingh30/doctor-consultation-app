import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DoctorStackParamList } from '../../../types/types';
import { theme, commonStyles, sharedStyles, textStyles } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';

type AIReport = {
  id: string;
  title: string;
  status: 'completed' | 'in_progress';
  patientName: string;
  patientAge: number;
  diagnosis: string;
  medications: string[];
};

const AIReportsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const [expandedReports, setExpandedReports] = useState<string[]>([]);
  const [reports, setReports] = useState<AIReport[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchAIReports = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockReports: AIReport[] = [
        {
          id: '1',
          title: 'Report 1',
          status: 'completed',
          patientName: 'John Doe',
          patientAge: 45,
          diagnosis: 'Hypertension',
          medications: ['Lisinopril', 'Amlodipine']
        },
        {
          id: '2',
          title: 'Report 2',
          status: 'in_progress',
          patientName: 'Jane Smith',
          patientAge: 30,
          diagnosis: 'Diabetes Mellitus Type 2',
          medications: ['Metformin', 'Insulin']
        },
        {
          id: '3',
          title: 'Report 3',
          status: 'in_progress',
          patientName: 'Michael Brown',
          patientAge: 50,
          diagnosis: 'Chronic Obstructive Pulmonary Disease (COPD)',
          medications: ['Albuterol', 'Tiotropium']
        }
      ];
      
      setReports(mockReports);
    };
    
    fetchAIReports();
  }, []);

  const toggleReportExpansion = (reportId: string) => {
    setExpandedReports(prev => 
      prev.includes(reportId) 
        ? prev.filter(id => id !== reportId) 
        : [...prev, reportId]
    );
  };

  const isReportExpanded = (reportId: string) => {
    return expandedReports.includes(reportId);
  };

  const getStatusColor = (status: AIReport['status']) => {
    return status === 'completed' ? theme.colors.success : theme.colors.warning;
  };

  const getStatusText = (status: AIReport['status']) => {
    return status === 'completed' ? 'Completed' : 'In Progress';
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          <Text style={[commonStyles.titleText, { marginBottom: theme.spacing.md }]}>AI Reports</Text>
          
          {reports.map(report => (
            <View key={report.id} style={[commonStyles.sectionContainer, sharedStyles.shadow, { marginBottom: theme.spacing.md }]}>
              <View style={[commonStyles.flexRow, commonStyles.spaceBetween]}>
                <View>
                  <TouchableOpacity 
                    style={commonStyles.flexRow}
                    onPress={() => toggleReportExpansion(report.id)}
                    accessibilityRole="button"
                    accessibilityLabel={`Toggle ${report.title} details`}
                  >
                    <Icon 
                      name={isReportExpanded(report.id) ? "chevron-up" : "chevron-down"} 
                      size={16} 
                      color={theme.colors.text}
                      style={{ marginRight: theme.spacing.sm }}
                    />
                    <Text style={commonStyles.bodyText}>{report.title}</Text>
                  </TouchableOpacity>
                  <Text style={{ color: getStatusColor(report.status) }}>
                    Status: {getStatusText(report.status)}
                  </Text>
                </View>
                <TouchableOpacity 
                  style={[commonStyles.primaryButton, { paddingVertical: theme.spacing.xs, paddingHorizontal: theme.spacing.sm }]}
                  onPress={() => navigation.navigate('ReportDetail', { reportId: report.id })}
                  accessibilityRole="button"
                  accessibilityLabel={`View ${report.title} details`}
                >
                  <Text style={commonStyles.primaryButtonText}>View Report</Text>
                </TouchableOpacity>
              </View>
              
              {isReportExpanded(report.id) && (
                <View style={[{ marginTop: theme.spacing.md, padding: theme.spacing.md, backgroundColor: theme.colors.background, borderRadius: theme.borderRadius.md }]}>
                  <Text style={[commonStyles.bodyText, { fontWeight: 'bold' }]}>
                    <Text style={{ fontWeight: 'bold' }}>Patient Name:</Text> {report.patientName}
                  </Text>
                  <Text style={textStyles.smallText}>
                    <Text style={{ fontWeight: 'bold' }}>Age:</Text> {report.patientAge}
                  </Text>
                  <Text style={textStyles.smallText}>
                    <Text style={{ fontWeight: 'bold' }}>Diagnosis:</Text> {report.diagnosis}
                  </Text>
                  <Text style={textStyles.smallText}>
                    <Text style={{ fontWeight: 'bold' }}>Medications:</Text> {report.medications.join(', ')}
                  </Text>
                </View>
              )}
            </View>
          ))}
          
          {reports.length === 0 && (
            <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { alignItems: 'center', padding: theme.spacing.lg }]}>
              <Icon name="file-medical-alt" size={48} color={theme.colors.disabled} />
              <Text style={[commonStyles.bodyText, { marginTop: theme.spacing.md, color: theme.colors.textSecondary }]}>
                No AI reports available
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIReportsScreen;