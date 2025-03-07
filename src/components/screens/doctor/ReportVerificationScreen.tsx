// React and React Native imports
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

// Third-party imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// Local imports
import { DoctorStackParamList } from '../../../types/types';
import { theme, commonStyles, sharedStyles, textStyles } from '../../../styles/commonStyles';
import Header from '../../common/Header';

type Report = {
  id: string;
  patientName: string;
  reportType: string;
  date: string;
  status: 'pending' | 'verified';
};

const ReportVerificationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DoctorStackParamList>>();
  const [pendingReports, setPendingReports] = useState<Report[]>([]);
  const [verifiedReports, setVerifiedReports] = useState<Report[]>([]);

  useEffect(() => {
    const loadReports = async () => {
      const { pending, verified } = await fetchReports(); // Fetch reports from the API
      setPendingReports(pending);
      setVerifiedReports(verified);
    };

    loadReports();
  }, []);

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header title="Report Verification" />
      
      <ScrollView style={commonStyles.scrollView}>
        <View style={commonStyles.contentContainer}>
          {/* Pending Reports */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Pending Reports</Text>
            {pendingReports.map((report: Report, index) => (
              <TouchableOpacity 
                key={index}
                style={[commonStyles.listItem, sharedStyles.shadow]}
                onPress={() => navigation.navigate('ReportDetail', { reportId: report.id })}
                accessibilityRole="button"
                accessibilityLabel={`View pending report for ${report.patientName ?? ""}`}
              >
                <View style={commonStyles.flexRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={commonStyles.bodyText}>{report.patientName}</Text>
                    <Text style={textStyles.smallText}>{report.reportType}</Text>
                  </View>
                  <Icon name="chevron-right" size={16} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Verified Reports */}
          <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
            <Text style={commonStyles.titleText}>Verified Reports</Text>
            {verifiedReports.map((report, index) => (
              <TouchableOpacity 
                key={index}
                style={[commonStyles.listItem, sharedStyles.shadow]}
                onPress={() => navigation.navigate('ReportDetail', { reportId: report.id })}
                accessibilityRole="button"
                accessibilityLabel={`View verified report for ${report.patientName}`}
              >
                <View style={commonStyles.flexRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={commonStyles.bodyText}>{report.patientName}</Text>
                    <Text style={textStyles.smallText}>{report.reportType}</Text>
                  </View>
                  <Icon name="check-circle" size={16} color={theme.colors.success} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



async function fetchReports(): Promise<{ pending: Report[]; verified: Report[]; }> {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock data
    const mockReports: Report[] = [
      {
        id: '1',
        patientName: 'John Smith',
        reportType: 'Blood Test',
        date: '2023-06-15',
        status: 'pending'
      },
      {
        id: '2',
        patientName: 'Sarah Johnson',
        reportType: 'X-Ray',
        date: '2023-06-14',
        status: 'pending'
      },
      {
        id: '3',
        patientName: 'Michael Brown',
        reportType: 'MRI Scan',
        date: '2023-06-13',
        status: 'verified'
      },
      {
        id: '4',
        patientName: 'Emily Davis',
        reportType: 'Blood Pressure',
        date: '2023-06-12',
        status: 'verified'
      }
    ];

    // Filter reports by status
    return {
      pending: mockReports.filter(report => report.status === 'pending'),
      verified: mockReports.filter(report => report.status === 'verified')
    };
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw new Error('Failed to fetch reports');
  }
}

export default ReportVerificationScreen;

