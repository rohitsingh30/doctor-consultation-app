import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Share, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamList } from '../../../types/types';
import { theme, commonStyles, sharedStyles, textStyles, headerStyles, buttonStyles, avatarStyles } from '../../../styles/commonStyles';

type ReportDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ReportDetail'>;
type ReportDetailScreenRouteProp = RouteProp<RootStackParamList, 'ReportDetail'>;

const ReportDetailScreen = () => {
  const navigation = useNavigation<ReportDetailScreenNavigationProp>();
  const route = useRoute<ReportDetailScreenRouteProp>();

  const [error, setError] = React.useState<string | null>(null);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    setError(null);
    try {
      // Implement report download functionality
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated download
      Alert.alert('Success', 'Report downloaded successfully');
    } catch (error) {
      setError('Failed to download report. Please try again.');
      console.error('Error downloading report:', error);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  const handleShare = useCallback(async () => {
    setError(null);
    try {
      await Share.share({
        message: 'Check out my medical report from Doc-X',
        title: 'Medical Report'
      });
    } catch (error) {
      setError('Failed to share report. Please try again.');
      console.error('Error sharing report:', error);
    }
  }, []);

  const handleWhatsAppShare = useCallback(async () => {
    setError(null);
    try {
      // Implement WhatsApp sharing functionality
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated share
      Alert.alert('Success', 'Report shared via WhatsApp');
    } catch (error) {
      setError('Failed to share via WhatsApp. Please try again.');
      console.error('Error sharing via WhatsApp:', error);
    }
  }, []);

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={commonStyles.contentContainer}>
        {error && (
          <View style={[commonStyles.container, { backgroundColor: theme.colors.error, padding: theme.spacing.sm }]}>
            <Text style={{ color: theme.colors.textInverted, fontSize: 14 }}>{error}</Text>
          </View>
        )}
        
        {/* Header with back button */}
        <View style={[headerStyles.header, commonStyles.flexRow]}>
          <TouchableOpacity 
            style={buttonStyles.backButton}
            onPress={() => navigation.goBack()}
            accessibilityLabel="Go back"
            accessibilityRole="button"
          >
            <Icon name="arrow-left" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
          <Text style={textStyles.headerTitle}>Hypertension Report</Text>
          <View style={headerStyles.headerRight} />
        </View>

        {/* Patient Info */}
        <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
          <View style={commonStyles.flexRow}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/6fyF3y0DLyaItEtWXJM-T9OeAvtRk_oFrwowidQFvl0.jpg' }}
              style={avatarStyles.image}
              accessibilityLabel="Patient profile picture"
            />
            <View style={{ flex: 1, marginLeft: theme.spacing.md }}>
              <Text style={commonStyles.titleText}>John Smith</Text>
              <Text style={[commonStyles.bodyText, { color: theme.colors.textSecondary }]}>Hypertension, High Risk</Text>
              <Text style={[commonStyles.bodyText, { color: theme.colors.textSecondary }]}>Reviewed by Dr. John Doe</Text>
              <View style={commonStyles.flexRow}>
                <Icon name="check-circle" size={14} color={theme.colors.success} style={{ marginRight: theme.spacing.xs }} />
                <Text style={[commonStyles.bodyText, { color: theme.colors.success }]}>Reviewed</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Report Sections */}
        <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
          <Text style={[commonStyles.bodyText, { color: theme.colors.primary, fontWeight: '600' }]}>Main Diagnosis</Text>
          <Text style={commonStyles.bodyText}>Hypertension, High Risk</Text>
        </View>

        <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
          <Text style={[commonStyles.bodyText, { color: theme.colors.primary, fontWeight: '600' }]}>Medication</Text>
          <Text style={commonStyles.bodyText}>Lisinopril 10mg daily</Text>
        </View>

        <View style={[commonStyles.sectionContainer, sharedStyles.shadow]}>
          <Text style={[commonStyles.bodyText, { color: theme.colors.primary, fontWeight: '600' }]}>Test Suggested</Text>
          <Text style={commonStyles.bodyText}>Blood Pressure Monitoring, Blood Test</Text>
        </View>

        {/* Action Buttons */}
        <View style={[commonStyles.flexRow, commonStyles.spaceBetween, { marginTop: theme.spacing.lg }]}>
          <TouchableOpacity 
            style={[commonStyles.primaryButton, { flex: 2, marginRight: theme.spacing.md }]}
            onPress={handleDownload}
            accessibilityLabel="Download report"
            accessibilityRole="button"
          >
            <Text style={commonStyles.primaryButtonText}>Download Report</Text>
          </TouchableOpacity>
          
          <View style={commonStyles.flexRow}>
            <TouchableOpacity 
              style={[commonStyles.secondaryButton, { marginRight: theme.spacing.md }]}
              onPress={handleWhatsAppShare}
              accessibilityLabel="Share via WhatsApp"
              accessibilityRole="button"
            >
              <Icon name="whatsapp" size={20} color={theme.colors.primary} />
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={commonStyles.secondaryButton}
              onPress={handleShare}
              accessibilityLabel="More sharing options"
              accessibilityRole="button"
            >
              <Icon name="share-alt" size={20} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Consult Button */}
        <TouchableOpacity 
          style={[commonStyles.primaryButton, { marginTop: theme.spacing.md }]}
          onPress={() => navigation.navigate('DoctorSearch')}
          accessibilityLabel="Consult a doctor"
          accessibilityRole="button"
        >
          <Text style={commonStyles.primaryButtonText}>Consult a Doctor</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReportDetailScreen;
