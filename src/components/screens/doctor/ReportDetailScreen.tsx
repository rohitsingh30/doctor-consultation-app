import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Share, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DoctorStackParamList } from '../../../types/types';
import { theme, commonStyles, sharedStyles, textStyles } from '../../../styles/commonStyles';
import BackButton from '../../common/BackButton';

type ReportDetailScreenNavigationProp = NativeStackNavigationProp<DoctorStackParamList, 'ReportDetail'>;
type ReportDetailScreenRouteProp = RouteProp<DoctorStackParamList, 'ReportDetail'>;

type AIReport = {
  id: string;
  title: string;
  status: 'completed' | 'in_progress';
  patientName: string;
  patientAge: number;
  diagnosis: string;
  medications: string[];
  testResults?: {
    name: string;
    value: string;
    normalRange?: string;
    isNormal: boolean;
  }[];
  recommendations?: string[];
  doctorNotes?: string;
};

const ReportDetailScreen = () => {
  const navigation = useNavigation<ReportDetailScreenNavigationProp>();
  const route = useRoute<ReportDetailScreenRouteProp>();
  const { reportId } = route.params;
  
  const [report, setReport] = useState<AIReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReportDetails = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data based on reportId
        const mockReport: AIReport = {
          id: reportId,
          title: `AI Analysis Report ${reportId}`,
          status: reportId === '1' ? 'completed' : 'in_progress',
          patientName: reportId === '1' ? 'John Doe' : reportId === '2' ? 'Jane Smith' : 'Michael Brown',
          patientAge: reportId === '1' ? 45 : reportId === '2' ? 30 : 50,
          diagnosis: reportId === '1' ? 'Hypertension' : 
                    reportId === '2' ? 'Diabetes Mellitus Type 2' : 
                    'Chronic Obstructive Pulmonary Disease (COPD)',
          medications: reportId === '1' ? ['Lisinopril', 'Amlodipine'] : 
                      reportId === '2' ? ['Metformin', 'Insulin'] : 
                      ['Albuterol', 'Tiotropium'],
          testResults: [
            {
              name: reportId === '1' ? 'Blood Pressure' : reportId === '2' ? 'Blood Glucose' : 'Spirometry',
              value: reportId === '1' ? '140/90 mmHg' : reportId === '2' ? '180 mg/dL' : 'FEV1/FVC 65%',
              normalRange: reportId === '1' ? '120/80 mmHg' : reportId === '2' ? '70-100 mg/dL' : 'FEV1/FVC >70%',
              isNormal: false
            },
            {
              name: 'Heart Rate',
              value: '72 bpm',
              normalRange: '60-100 bpm',
              isNormal: true
            }
          ],
          recommendations: [
            'Regular monitoring',
            reportId === '1' ? 'Low sodium diet' : 
            reportId === '2' ? 'Regular blood glucose monitoring' : 
            'Smoking cessation',
            'Regular exercise'
          ],
          doctorNotes: reportId === '1' ? 
            'Patient shows signs of hypertension. Recommend lifestyle changes and medication.' : 
            reportId === '2' ? 
            'Blood glucose levels are elevated. Insulin therapy may need adjustment.' : 
            'COPD symptoms are stable but require ongoing management.'
        };
        
        setReport(mockReport);
      } catch (error) {
        console.error('Error fetching report details:', error);
        setError('Failed to load report details. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchReportDetails();
  }, [reportId]);

  const handleShare = async () => {
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

  const handleVerify = () => {
    // In a real app, this would send verification to the backend
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
            // Mock verification success
            Alert.alert('Success', 'Report has been verified');
            // Navigate back to reports list
            navigation.goBack();
          }
        }
      ]
    );
  };

  const handleEdit = () => {
    // In a real app, this would navigate to an edit screen
    Alert.alert('Edit', 'Edit functionality would be implemented here');
  };

  if (isLoading) {
    return (
      <SafeAreaView style={commonStyles.safeArea}>
        <BackButton />
        <View style={[commonStyles.contentContainer, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text>Loading report details...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error || !report) {
    return (
      <SafeAreaView style={commonStyles.safeArea}>
        <BackButton />
        <View style={[commonStyles.contentContainer, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: theme.colors.error }}>{error || 'Report not found'}</Text>
          <TouchableOpacity 
            style={[commonStyles.primaryButton, { marginTop: theme.spacing.md }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={commonStyles.primaryButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <ScrollView style={commonStyles.scrollView}>
        <BackButton />
        <View style={commonStyles.contentContainer}>
          {/* Report Header */}
          <View style={[commonStyles.flexRow, commonStyles.spaceBetween, { marginBottom: theme.spacing.md }]}>
            <Text style={commonStyles.titleText}>{report.title}</Text>
            <View style={[commonStyles.flexRow, { alignItems: 'center' }]}>
              <View 
                style={[{ 
                  backgroundColor: report.status === 'completed' ? theme.colors.success : theme.colors.warning,
                  paddingHorizontal: theme.spacing.sm,
                  paddingVertical: theme.spacing.xxs,
                  borderRadius: theme.borderRadius.sm
                }]}
              >
                <Text style={{ color: theme.colors.textInverted, fontSize: 12 }}>
                  {report.status === 'completed' ? 'Completed' : 'In Progress'}
                </Text>
              </View>
            </View>
          </View>
          
          {/* Patient Information */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { marginBottom: theme.spacing.md }]}>
            <Text style={[textStyles.sectionTitle, { marginBottom: theme.spacing.sm }]}>Patient Information</Text>
            <View style={commonStyles.flexRow}>
              <View style={{ flex: 1 }}>
                <Text style={textStyles.labelText}>Name:</Text>
                <Text style={commonStyles.bodyText}>{report.patientName}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={textStyles.labelText}>Age:</Text>
                <Text style={commonStyles.bodyText}>{report.patientAge}</Text>
              </View>
            </View>
          </View>
          
          {/* Primary Diagnosis */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { marginBottom: theme.spacing.md }]}>
            <Text style={[textStyles.sectionTitle, { marginBottom: theme.spacing.sm }]}>Primary Diagnosis</Text>
            <Text style={commonStyles.bodyText}>{report.diagnosis}</Text>
          </View>
          
          {/* Medications */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { marginBottom: theme.spacing.md }]}>
            <Text style={[textStyles.sectionTitle, { marginBottom: theme.spacing.sm }]}>Recommended Medications</Text>
            {report.medications.map((medication, index) => (
              <View key={index} style={[commonStyles.listItem, { marginBottom: theme.spacing.xs }]}>
                <View style={commonStyles.flexRow}>
                  <Icon name="medkit" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                  <Text style={commonStyles.bodyText}>{medication}</Text>
                </View>
              </View>
            ))}
          </View>
          
          {/* Test Results */}
          {report.testResults && report.testResults.length > 0 && (
            <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { marginBottom: theme.spacing.md }]}>
              <Text style={[textStyles.sectionTitle, { marginBottom: theme.spacing.sm }]}>Test Results</Text>
              {report.testResults.map((test, index) => (
                <View key={index} style={[commonStyles.listItem, { marginBottom: theme.spacing.xs }]}>
                  <View style={commonStyles.flexRow}>
                    <View style={{ flex: 1 }}>
                      <Text style={commonStyles.bodyText}>{test.name}</Text>
                      <Text style={textStyles.smallText}>Normal Range: {test.normalRange}</Text>
                    </View>
                    <View style={commonStyles.flexRow}>
                      <Text 
                        style={[{ 
                          fontWeight: 'bold',
                          color: test.isNormal ? theme.colors.success : theme.colors.error 
                        }]}
                      >
                        {test.value}
                      </Text>
                      <Icon 
                        name={test.isNormal ? "check-circle" : "exclamation-circle"} 
                        size={16} 
                        color={test.isNormal ? theme.colors.success : theme.colors.error} 
                        style={{ marginLeft: theme.spacing.xs }}
                      />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
          
          {/* Recommendations */}
          {report.recommendations && report.recommendations.length > 0 && (
            <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { marginBottom: theme.spacing.md }]}>
              <Text style={[textStyles.sectionTitle, { marginBottom: theme.spacing.sm }]}>Recommendations</Text>
              {report.recommendations.map((recommendation, index) => (
                <View key={index} style={[commonStyles.listItem, { marginBottom: theme.spacing.xs }]}>
                  <View style={commonStyles.flexRow}>
                    <Icon name="check" size={16} color={theme.colors.primary} style={{ marginRight: theme.spacing.sm }} />
                    <Text style={commonStyles.bodyText}>{recommendation}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
          
          {/* Doctor Notes */}
          {report.doctorNotes && (
            <View style={[commonStyles.sectionContainer, sharedStyles.shadow, { marginBottom: theme.spacing.md }]}>
              <Text style={[textStyles.sectionTitle, { marginBottom: theme.spacing.sm }]}>Doctor's Notes</Text>
              <Text style={commonStyles.bodyText}>{report.doctorNotes}</Text>
            </View>
          )}
          
          {/* Action Buttons */}
          <View style={[commonStyles.flexRow, { marginBottom: theme.spacing.md }]}>
            <TouchableOpacity 
              style={[commonStyles.primaryButton, { flex: 1, marginRight: theme.spacing.sm }]}
              onPress={handleVerify}
              accessibilityRole="button"
              accessibilityLabel="Verify report"
            >
              <Text style={commonStyles.primaryButtonText}>Verify Report</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[commonStyles.secondaryButton, { marginRight: theme.spacing.sm }]}
              onPress={handleEdit}
              accessibilityRole="button"
              accessibilityLabel="Edit report"
            >
              <Icon name="edit" size={20} color={theme.colors.primary} />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={commonStyles.secondaryButton}
              onPress={handleShare}
              accessibilityRole="button"
              accessibilityLabel="Share report"
            >
              <Icon name="share-alt" size={20} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
          
          {/* Patient Consultation Button */}
          <TouchableOpacity 
            style={[commonStyles.outlineButton, { marginBottom: theme.spacing.lg }]}
            onPress={() => navigation.navigate('PatientHistory')}
            accessibilityRole="button"
            accessibilityLabel="View patient history"
          >
            <Text style={textStyles.outlineButtonText}>View Patient History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportDetailScreen;