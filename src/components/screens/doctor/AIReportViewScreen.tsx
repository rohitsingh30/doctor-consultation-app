// Reference - doctor-consultation-app/appFlows/DoctorFlow-ReportSingle.html 
// Reference Dark - doctor-consultation-app/appFlows/DoctorFlow-ReportSingle-Dark.html

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Share, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppStackParamList, HealthReport, testResult } from '../../../types/types';
import { buttonStyles, containerStyles, textStyles } from '../../../styles/commonStyles';
import { createAIReportViewStyles } from '../../../styles/screens/AIReportViewStyles';
import { useTheme } from '../../../styles/ThemeProvider';
import BackButton from '../../common/BackButton';

// Import AIReport type and helper functions from doctorData
import { getDetailedAIReport } from '../../../data/doctorData';

type ReportDetailScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'ReportDetail'>;
/**
 * AIReportViewScreen component for doctors to view AI-generated medical reports
 * Allows viewing, verifying, editing, and sharing of reports
 */
const AIReportViewScreen: React.FC = () => {
  const navigation = useNavigation<ReportDetailScreenNavigationProp>();
  const route = useRoute<RouteProp<AppStackParamList, 'ReportDetail'>>();
  const { reportId } = route.params;
  const { theme } = useTheme();
  const styles = createAIReportViewStyles(theme);
  
  // State management
  const [report, setReport] = useState<HealthReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch report details when component mounts or reportId changes
  useEffect(() => {
    fetchReportDetails();
  }, [reportId]);

  /**
   * Fetch report details from API (mock implementation)
   */
  const fetchReportDetails = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get mock data from doctorData.ts
      const mockReport = getDetailedAIReport(reportId ?? "1");
      
      setReport(mockReport);
    } catch (error) {
      console.error('Error fetching report details:', error);
      setError('Failed to load report details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Share report with other healthcare providers
   */
  const handleShare = async (): Promise<void> => {
    try {
      await Share.share({
        message: `Medical Report for ${report?.patientName}: ${report?.diagnosis}`,
        title: report?.title || 'Medical Report'
      });
    } catch (error) {
      console.error('Error sharing report:', error);
      Alert.alert('Error', 'Failed to share report');
    }
  };

  /**
   * Verify AI-generated report
   */
  const handleVerify = (): void => {
    Alert.alert(
      'Verify Report',
      'Are you sure you want to verify this AI-generated report?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Verify',
          onPress: () => {
            Alert.alert('Success', 'Report has been verified');
            navigation.goBack();
          }
        }
      ]
    );
  };

  /**
   * Edit report details
   */
  const handleEdit = (): void => {
    Alert.alert('Edit', 'Edit functionality would be implemented here');
  };

  /**
   * Render loading state while fetching report data
   */
  const renderLoadingState = (): JSX.Element => (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <BackButton />
      <View style={[containerStyles(theme).contentContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text accessibilityRole="text" accessibilityLabel="Loading report details">Loading report details...</Text>
      </View>
    </SafeAreaView>
  );

  /**
   * Render error state when report fetching fails
   */
  const renderErrorState = (): JSX.Element => (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <BackButton />
      <View style={[containerStyles(theme).contentContainer, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text 
          style={{ color: theme.colors.error }}
          accessibilityRole="text"
          accessibilityLabel="Error message"
        >
          {error || 'Report not found'}
        </Text>
        <TouchableOpacity 
          style={[buttonStyles(theme).primaryButton, { marginTop: theme.spacing.md }]}
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Go back to previous screen"
        >
          <Text style={buttonStyles(theme).primaryButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  /**
   * Render report header with title and status
   */
  const renderReportHeader = (): JSX.Element => {
    const statusColor = report?.status === 'completed' ? theme.colors.success : theme.colors.warning;
    const statusText = report?.status === 'completed' ? 'Completed' : 'In Progress';

    return (
      <View style={[containerStyles(theme).flexRow, { marginBottom: theme.spacing.md }]}>
        <Text 
          style={textStyles(theme).titleText}
          accessibilityRole="header"
        >
          {report?.title}
        </Text>
        <View style={[containerStyles(theme).flexRow, { alignItems: 'center' }]}>
          <View 
            style={[{ 
              backgroundColor: statusColor,
              paddingHorizontal: theme.spacing.sm,
              paddingVertical: theme.spacing.xs,
              borderRadius: theme.spacing.sm
            }]}
            accessibilityLabel={`Report status: ${statusText}`}
          >
            <Text style={{ color: theme.colors.textInverted, fontSize: 12 }}>
              {statusText}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  /**
   * Render a single information row with label and value
   */
  const renderInfoRow = (label: string, value: string | number | undefined): JSX.Element => (
    <View style={styles.infoRow} accessibilityLabel={`${label}: ${value || 'Not available'}`}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value || 'Not available'}</Text>
    </View>
  );

  /**
   * Render patient information section
   */
  const renderPatientInfo = (): JSX.Element => (
    <View style={[styles.sectionContainer, styles.shadow]}>
      <Text style={styles.sectionTitle} accessibilityRole="header">Patient Information</Text>
      {renderInfoRow('Name', report?.patientName)}
      {renderInfoRow('Age', report?.patientAge ? `${report.patientAge} years` : undefined)}
      {renderInfoRow('Diagnosis', report?.diagnosis)}
    </View>
  );

  /**
   * Render a single test result item
   */
  const renderTestResult = (test: testResult, index: number): JSX.Element => {
    const statusLabel = test.isNormal ? 'Normal' : 'Abnormal';
    return (
      <View 
        key={index} 
        style={styles.testResultRow}
        accessibilityLabel={`${test.name}: ${test.value}, ${statusLabel}`}
      >
        <View style={styles.testResultHeader}>
          <Text style={styles.testName}>{test.name}</Text>
          <View 
            style={[styles.statusIndicator, { 
              backgroundColor: test.isNormal ? theme.colors.success : theme.colors.error 
            }]} 
            accessibilityLabel={statusLabel}
          />
        </View>
        <Text style={styles.testValue}>{test.value}</Text>
        {test.normalRange && (
          <Text style={styles.normalRange}>Normal Range: {test.normalRange}</Text>
        )}
      </View>
    );
  };

  /**
   * Render test results section
   */
  const renderTestResults = (): JSX.Element => (
    <View style={[styles.sectionContainer, styles.shadow]}>
      <Text style={styles.sectionTitle} accessibilityRole="header">Test Results</Text>
      {report?.testResults?.map((test, index) => renderTestResult(test, index))}
    </View>
  );

  /**
   * Render recommendations section
   */
  const renderRecommendations = (): JSX.Element => (
    <View style={[styles.sectionContainer, styles.shadow]}>
      <Text style={styles.sectionTitle} accessibilityRole="header">Recommendations</Text>
      {report?.recommendedMedicine?.map((recommendation, index) => (
        <View 
          key={index} 
          style={styles.recommendationItem}
          accessibilityLabel={`Recommendation: ${recommendation}`}
        >
          <Icon name="check-circle" size={16} color={theme.colors.success} />
          <Text style={styles.recommendationText}>{recommendation}</Text>
        </View>
      ))}
    </View>
  );

  /**
   * Render doctor's notes section
   */
  const renderDoctorNotes = (): JSX.Element => (
    <View style={[styles.sectionContainer, styles.shadow]}>
      <Text style={styles.sectionTitle} accessibilityRole="header">Doctor's Notes</Text>
      <Text 
        style={styles.notesText}
        accessibilityLabel={`Doctor's notes: ${report?.doctorVerification?.comments || 'No notes available'}`}
      >
        {report?.doctorVerification?.comments || 'No notes available'}
      </Text>
    </View>
  );

  /**
   * Render action buttons for verifying, editing, and sharing the report
   */
  const renderActionButtons = (): JSX.Element => (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity 
        style={[styles.actionButton, styles.verifyButton]}
        onPress={handleVerify}
        accessibilityRole="button"
        accessibilityLabel="Verify report"
      >
        <Text style={styles.actionButtonText}>Verify Report</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.actionButton, styles.editButton]}
        onPress={handleEdit}
        accessibilityRole="button"
        accessibilityLabel="Edit report"
      >
        <Text style={styles.actionButtonText}>Edit Report</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.actionButton, styles.shareButton]}
        onPress={handleShare}
        accessibilityRole="button"
        accessibilityLabel="Share report"
      >
        <Text style={styles.actionButtonText}>Share Report</Text>
      </TouchableOpacity>
    </View>
  );

  /**
   * Render the main screen content
   */
  const renderScreenContent = (): JSX.Element => (
    <View style={containerStyles(theme).contentContainer}>
      {renderReportHeader()}
      {renderPatientInfo()}
      {renderTestResults()}
      {renderRecommendations()}
      {renderDoctorNotes()}
      {renderActionButtons()}
    </View>
  );

  // Handle loading state
  if (isLoading) {
    return renderLoadingState();
  }

  // Handle error state
  if (error || !report) {
    return renderErrorState();
  }

  // Render main screen
  return (
    <SafeAreaView style={containerStyles(theme).safeArea}>
      <ScrollView style={containerStyles(theme).scrollView}>
        <BackButton />
        {renderScreenContent()}
      </ScrollView>
    </SafeAreaView>
  );

};

export default AIReportViewScreen;