// Reference - doctor-consultation-app/appFlows/DoctorFlow-ReportList.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-ReportList-Dark.html

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStackParamList, HealthReport } from '../../../types/types';
import { buttonStyles, containerStyles, textStyles } from '../../../styles/commonStyles';
import { createAIReportsListStyles } from '../../../styles/screens/AIReportsListStyles';
import { useTheme } from '../../../styles/ThemeProvider';
import BackButton from '../../common/BackButton';

const AIReportsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { theme } = useTheme();
  const styles = createAIReportsListStyles(theme);
  const [expandedReports, setExpandedReports] = useState<string[]>([]);
  const [reports, setReports] = useState<HealthReport[]>([]);

  useEffect(() => {
    fetchAIReports();
  }, []);

  const fetchAIReports = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock data
    const mockReports: HealthReport[] = [
      {
        id: '1',
        title: 'Report 1',
        status: 'completed',
        patientName: 'John Doe',
        patientAge: 45,
        diagnosis: 'Hypertension',
        recommendedMedicine: ['Lisinopril', 'Amlodipine'],
        symptoms: ['Headache', 'Dizziness'],
        possibleConditions: ['Heart Disease'],
        recommendedTest: ['Blood Pressure Test'],
        shouldSeeDoctor: true
      },
      {
        id: '2',
        title: 'Report 2',
        status: 'in_progress',
        recommendedMedicine: ['Metformin', 'Insulin'],
        symptoms: ['Increased Thirst', 'Frequent Urination'],
        possibleConditions: ['Kidney Disease'],
        recommendedTest: ['Blood Sugar Test'],
        shouldSeeDoctor: true,
        patientName: 'Jane Smith',
        patientAge: 30,
        diagnosis: 'Diabetes Mellitus Type 2',
      }
    ];
    
    setReports(mockReports);
  };

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

  const getStatusColor = (status: string) => {
    return status === 'completed' ? theme.colors.success : theme.colors.warning;
  };

  const getStatusText = (status: string) => {
    return status === 'completed' ? 'Completed' : 'In Progress';
  };

  const renderReportHeader = (report: HealthReport): JSX.Element => (
    <View style={styles.headerStyles}>
      <View>
        <TouchableOpacity 
          style={buttonStyles(theme).button}
          onPress={() => toggleReportExpansion(report.id??"1")}
          accessibilityRole="button"
          accessibilityLabel={`Toggle ${report.title} details`}
        >
          <Icon 
            name={isReportExpanded(report.id ?? "1") ? "chevron-up" : "chevron-down"} 
            size={16} 
            color={theme.colors.text}
            style={{ marginRight: theme.spacing.sm }}
          />
          <Text style={styles.sectionHeader}>{report.title}</Text>
        </TouchableOpacity>
        <View style={styles.statusContainer}>
          <View 
            style={[styles.statusIndicator, { backgroundColor: getStatusColor(report.status) }]} 
          />
          <Text style={[styles.statusText, { color: getStatusColor(report.status) }]}>
            {getStatusText(report.status)}
          </Text>
        </View>
      </View>
      <TouchableOpacity 
        style={[styles.actionButton, styles.primaryAction]}
        onPress={() => navigation.navigate('ReportDetail', { reportId: report.id })}
        accessibilityRole="button"
        accessibilityLabel={`View ${report.title} details`}
      >
        <Text style={styles.actionText}>View Report</Text>
      </TouchableOpacity>
    </View>
  );

  const renderReportContent = (report: HealthReport): JSX.Element => (
    <View style={styles.reportContent}>
      <Text style={styles.sectionContent}>
        <Text style={{ fontWeight: 'bold' }}>Patient Name:</Text> {report.patientName}
      </Text>
      <Text style={styles.sectionContent}>
        <Text style={{ fontWeight: 'bold' }}>Age:</Text> {report.patientAge}
      </Text>
      <Text style={styles.sectionContent}>
        <Text style={{ fontWeight: 'bold' }}>Diagnosis:</Text> {report.diagnosis}
      </Text>
      <Text style={styles.sectionContent}>
        <Text style={{ fontWeight: 'bold' }}>Medications:</Text> {report.recommendedMedicine?.join(', ')}
      </Text>
    </View>
  );

  const renderEmptyState = (): JSX.Element => (
    <View style={styles.emptyStateContainer}>
      <Icon name="file-medical-alt" size={48} color={theme.colors.textSecondary} />
      <Text style={styles.emptyStateText}>
        No AI reports available
      </Text>
    </View>
  );

  const renderReportCard = (report: HealthReport): JSX.Element => (
    <View key={report.id} style={[styles.reportCard, { marginBottom: theme.spacing.md }]}>
      {renderReportHeader(report)}
      {isReportExpanded(report.id ?? "1") && renderReportContent(report)}
    </View>
  );

  const renderScreenContent = (): JSX.Element => (
    <View style={containerStyles(theme).contentContainer}>
      <Text style={[textStyles(theme).titleText, { marginBottom: theme.spacing.md }]}>AI Reports</Text>
      
      {reports.length > 0 
        ? reports.map(report => renderReportCard(report))
        : renderEmptyState()
      }
    </View>
  );

  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <View style={styles.headerContainer}>
      <BackButton />
      <Text style={[textStyles(theme).titleText, { marginLeft: theme.spacing.md }]}>AI Reports</Text>
      </View>
      <ScrollView style={containerStyles(theme).scrollView}>
      {renderScreenContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIReportsScreen;